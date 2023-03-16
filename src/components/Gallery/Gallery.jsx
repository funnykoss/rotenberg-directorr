import GalleryItem from "./GalleryItem";

const Gallery = ({ list }) => {
  return (
    <>
      <ul>
        {list.map(({ id, link, img }) => {
          return <GalleryItem key={id} href={link} src={img} />;
        })}
      </ul>
    </>
  );
};
export default Gallery;
