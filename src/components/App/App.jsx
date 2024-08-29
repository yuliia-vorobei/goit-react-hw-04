import { getPhotos } from "../../../photos";
import { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import Modal from "react-modal";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]); // відображення галереї
  const [loading, setLoading] = useState(false); // waiting loader
  const [error, setError] = useState(null);
  const [showBtn, setShowBtn] = useState(false); // кнопка завантаження
  const [isEmpty, setIsEmpty] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState(null);
  const [alt, setAlt] = useState("");
  Modal.setAppElement("#root");

  function openModal(url, alt) {
    setUrl(url.regular);
    setAlt(alt);
    setIsOpen(true);
  }
  function closeModal() {
    setUrl(null);
    setAlt("");
    setIsOpen(false);
  }

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      setShowBtn(false);
      setLoading(true);

      try {
        setLoading(true);
        const { results, total_pages } = await getPhotos(query, page);
        if (!results.length) {
          return setIsEmpty(true);
        }

        setImages((prevResults) => [...prevResults, ...results]);
        setShowBtn(page < total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const changeSubmit = (value) => {
    setImages([]);
    setQuery(value);
    setPage(1);
    setError(null);
    setIsEmpty(false);
  };

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={changeSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onModal={openModal} />
      )}
      {showBtn && <LoadMoreBtn onClick={loadMoreHandler} />}
      {error && <ErrorMessage />}
      {isEmpty && <p>No images were found</p>}
      {loading && <Loader />}
      <ImageModal
        isOpen={modalIsOpen && url !== null}
        onRequestClose={closeModal}
        image={url}
        description={alt}
      />
      <Toaster />
    </div>
  );
}
