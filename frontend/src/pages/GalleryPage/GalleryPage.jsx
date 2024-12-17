import * as React from 'react';
import cls from './GalleryPage.module.scss';
import { PromoSectionWithoutImage } from '../../components/PromoSectionWithoutImage/PromoSectionWithoutImage';
import { SelectField } from '../../components/SelectField/SelectField';
import { ButtonReset } from '../../components/ButtonReset/ButtonReset';
// Старая версия галереи
// import cls from './GalleryPage.module.scss';
// import { MasonryWorksGallery } from '../../components/GalleryGrid/GalleryGrid.jsx';
// import { GalleryPromo } from '../../components/GalleryPromo/GalleryPromo';

export const GalleryPage = () => {
  const promoSectionTitle = (
    <>
      <span>Галерея&nbsp;</span>
      наших работ
    </>
  );
  const author = ['Валентина', 'Инесса'];
  const availability = ['Есть', 'Нет'];
  const typesMosaic = ['Не керамика', 'Керамика'];

  const [activeFilterSelect, setActiveFilterSelect] = React.useState([]);
  const [resetFilterSelect, setResetFilterSelect] = React.useState('reset');

  const handlerResetButton = (e) => {
    e.preventDefault();
    setResetFilterSelect(`${resetFilterSelect}+`);
    // dispatch(setCurrentFilter([]));
    // setActiveSortingSelect('');
  };

  return (
    <>
      {/* Старая версия галереи */}
      {/* <GalleryPromo />
      <div className={cls.galleryWrapper}>
        <MasonryWorksGallery />
      </div> */}

      {/* Новая версия галереи */}
      <PromoSectionWithoutImage
        title={promoSectionTitle}
      />
      <div className={cls.filterWrapper}>
        <div className={cls.filterBlock}>
          <SelectField
            placeholder="Исполнитель"
            resetValue={resetFilterSelect}
            values={author}
            setActiveSelectors={setActiveFilterSelect}
          />
          <SelectField
            placeholder="Наличие"
            resetValue={resetFilterSelect}
            values={availability}
            setActiveSelectors={setActiveFilterSelect}
          />
          <SelectField
            placeholder="Тип мозаики"
            resetValue={resetFilterSelect}
            values={typesMosaic}
            setActiveSelectors={setActiveFilterSelect}
          />
          <ButtonReset
            placeholder="Очистить "
            // disabled={!activeFilters.length && (activeSortingSelect === '')}
            onClick={(e) => handlerResetButton(e)}
          />
        </div>
        {/* Для мобильной версии */}
        {/* <div className={cls.filterBlockMobile}>
          <Chip
            border
            active={activeSortingStatus !== ''}
            onClick={(e) => handlerSortMobileButton(e)}
            fill
          >
            <Arrows />
            {sortSelectFieldPlaceholder}
          </Chip>
          <Chip
            border
            number={activeFilters.length}
            active={activeFilters.length}
            onClick={(e) => handlerFilterMobileButton(e)}
            fill
          >
            Фильтры
          </Chip>
        </div>
        <AllCoursesMobileSortModal
          isOpen={sortMobileModalOpen}
          setIsOpen={setSortMobileModalOpen}
        />
        <AllCoursesMobileFilterModal
          isOpen={filterMobileModalOpen}
          setIsOpen={setFilterMobileModalOpen}
          saveFilterStatus={saveFilterStatus}
        /> */}
      </div>
    </>
  );
};
