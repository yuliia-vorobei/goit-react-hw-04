import { GridItem } from "../GridItem/GridItem";
import css from "./ImageCard.module.css";

export default function ImageCard({ description, urls, onModal }) {
  return (
    <GridItem>
      <div className={css.card}>
        <img
          src={urls.small}
          alt={description}
          onClick={() => onModal(urls, description)}
        />
      </div>
    </GridItem>
  );
}
