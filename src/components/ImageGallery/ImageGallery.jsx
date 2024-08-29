import { Grid } from "../Grid/Grid";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onModal }) {
  return (
    <Grid>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          description={image.description}
          urls={image.urls}
          onModal={onModal}
        />
      ))}
    </Grid>
  );
}
