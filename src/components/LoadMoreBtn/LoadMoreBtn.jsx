import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.container}>
      <button className={css.loading} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
