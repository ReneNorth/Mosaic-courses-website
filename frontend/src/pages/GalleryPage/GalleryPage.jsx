import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './GalleryPage.module.scss';
import { PromoSectionWithoutImage } from '../../components/PromoSectionWithoutImage/PromoSectionWithoutImage';
import { SelectField } from '../../components/SelectField/SelectField';
import { ButtonReset } from '../../components/ButtonReset/ButtonReset';
import { Chip } from '../../components/Chip/Chip';
import { Arrows } from '../../images/Arrows';
import { AllCoursesMobileSortModal } from '../../components/AllCoursesMobileSortModal/AllCoursesMobileSortModal';
import { AllCoursesMobileFilterModal } from '../../components/AllCoursesMobileFilterModal/AllCoursesMobileFilterModal';
import { api } from '../../utils/api';
import GalleryList from '../../components/GalleryList/GalleryList';

export const GalleryPage = () => {
  const promoSectionTitle = (
    <>
      <span>Галерея&nbsp;</span>
      наших работ
    </>
  );

  const author = ['Ученик', 'Преподаватель'];
  const availability = ['Можно купить', 'Можно заказать'];
  const typesMosaic = ['Современная', 'Классическая'];

  const [isOpen, setIsOpen] = useState(false);

  const [activeFilterSelect, setActiveFilterSelect] = useState([]);
  const [resetFilterSelect, setResetFilterSelect] = useState('reset');
  const [sortMobileModalOpen, setSortMobileModalOpen] = useState(false);
  const [filterMobileModalOpen, setFilterMobileModalOpen] = useState(false);
  const [saveFilterStatus, setSaveFilterStatus] = useState([]);

  const {
    filters, activeFilters, filtersSlugs,
  } = useSelector((state) => state.coursesFilters);
  const dispatch = useDispatch();

  const [galleryCards, setGalleryCards] = useState([]);

  const fetchGalleryCards = useCallback(async () => {
    if (galleryCards.length === 0) {
      try {
        const response = await api.getAllGalleryCards();
        setGalleryCards(response.results);
      } catch (error) {
        console.error(error);
      }
    }
  }, [galleryCards]);

  useEffect(() => {
    fetchGalleryCards();
  }, [fetchGalleryCards]);

  const handlerResetButton = (e) => {
    e.preventDefault();
    setResetFilterSelect(`${resetFilterSelect}+`);
    // dispatch(setCurrentFilter([]));
    // setActiveSortingSelect('');
  };

  const handlerSortMobileButton = (e) => {
    e.preventDefault();
    // setSortMobileModalOpen(true);
  };

  const handlerFilterMobileButton = (e) => {
    e.preventDefault();
    // setFilterMobileModalOpen(true);
    // setSaveFilterStatus(activeFilters);
  };

  return (
    <>
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
            type="gallery"
          />
          <SelectField
            placeholder="Наличие"
            resetValue={resetFilterSelect}
            values={availability}
            setActiveSelectors={setActiveFilterSelect}
            type="gallery"
          />
          <SelectField
            placeholder="Тип мозаики"
            resetValue={resetFilterSelect}
            values={typesMosaic}
            setActiveSelectors={setActiveFilterSelect}
            type="gallery"
          />
          <ButtonReset
            placeholder="Очистить "
            // disabled={!activeFilters.length && (activeSortingSelect === '')}
            onClick={(e) => handlerResetButton(e)}
          />
        </div>
        {/* Для мобильной версии */}
        <div className={cls.filterBlockMobile}>
          <p>Все работы студии</p>
          <Chip
            border
            number={activeFilters.length}
            active={activeFilters.length}
            onClick={(e) => handlerFilterMobileButton(e)}
            fill
          >
            <Arrows />
            {/* {sortSelectFieldPlaceholder} */}
          </Chip>
        </div>
        <AllCoursesMobileSortModal
          isOpen={sortMobileModalOpen}
          setIsOpen={setSortMobileModalOpen}
        />
        <AllCoursesMobileFilterModal
          isOpen={filterMobileModalOpen}
          setIsOpen={setFilterMobileModalOpen}
          // saveFilterStatus={saveFilterStatus}
        />
      </div>
      <GalleryList gallerycards={galleryCards} />
    </>
  );
};
