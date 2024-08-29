import toast from "react-hot-toast";
import { useState } from "react";
import css from "./SearchBar.module.css";
import { BsFillSearchHeartFill } from "react-icons/bs";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      return toast.error("Cannot be empty", { duration: 2000 });
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleQuery}
        />
        <button className={css.button} type="submit">
          <BsFillSearchHeartFill />
        </button>
      </form>
    </header>
  );
}
