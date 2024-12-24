import { useState } from 'react';
import GalleryPreviewCard from '../GalleryPreviewCard/GalleryPreviewCard';
import cls from './GalleryList.module.scss';

const GalleryList = ({ gallerycards }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(gallerycards.length / itemsPerPage);

  const currentGallerycards = gallerycards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  if (!gallerycards || gallerycards.length === 0) {
    return <div>No gallery cards available</div>;
  }

  const handleCardClick = (id) => {
    window.open(`/gallery/${id}`, '_blank');
  };

  return (
    <>
      <div className={cls.galleryListGrid}>
        {currentGallerycards.map((gallerycard) => (
          <div
            key={gallerycard.id}
            className={cls.galleryPreviewCard}
            onClick={() => handleCardClick(gallerycard.id)}
          >
            <GalleryPreviewCard
              title={gallerycard.title}
              author={gallerycard.author}
              image={gallerycard.image}
            />
          </div>
        ))}
      </div>
      {gallerycards.length > itemsPerPage && (
        <div className={cls.pagination}>
          {currentPage > 1 && (
            <button
              type="button"
              className={cls.buttonChangeCurrentPage}
              onClick={handlePreviousPage}
            >
              ← Назад
            </button>
          )}

          {[...Array(totalPages)].map((_, idx) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={idx + 1}
              type="button"
              className={
                currentPage === idx + 1 ? cls.activePage : cls.numberPage
              }
              onClick={() => {
                setCurrentPage(idx + 1);
                scrollToTop();
              }}
            >
              {idx + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              type="button"
              className={cls.buttonChangeCurrentPage}
              onClick={handleNextPage}
            >
              Дальше →
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default GalleryList;
