const GalleryPreviewCard = ({ title, author, image }) => {
  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <img src={image} alt={title} />
    </>
  );
};

export default GalleryPreviewCard;
