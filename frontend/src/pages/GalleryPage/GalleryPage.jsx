import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './GalleryPage.module.scss';
import { PromoSectionWithoutImage } from '../../components/PromoSectionWithoutImage/PromoSectionWithoutImage';
import { SelectField } from '../../components/SelectField/SelectField';
import { ButtonReset } from '../../components/ButtonReset/ButtonReset';
import { Chip } from '../../components/Chip/Chip';
import { Arrows } from '../../images/Arrows';
import { AllCoursesMobileFilterModal } from '../../components/AllCoursesMobileFilterModal/AllCoursesMobileFilterModal';
import { api } from '../../utils/api';
import GalleryList from '../../components/GalleryList/GalleryList';
import {
  setCurrentSortingStatus,
  getFilters, setCurrentFilter, setfiltersSlugs,
} from '../../services/slices/galleryFilterSlice.js';

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
  const [filterMobileModalOpen, setFilterMobileModalOpen] = useState(false);
  const [saveFilterStatus, setSaveFilterStatus] = useState([]);

  const {
    filters, activeFilters, filtersSlugs,
  } = useSelector((state) => state.galleryFilters);
  const dispatch = useDispatch();

  const [galleryCards, setGalleryCards] = useState([]);

  useEffect(() => {
    dispatch(getFilters());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filtersSlugsCopy = { ...filtersSlugs };
    const filtersSending = [];
    Object.keys(activeFilterSelect).forEach((key) => {
      filtersSlugsCopy[key] = activeFilterSelect[key];
    });

    dispatch(setfiltersSlugs(filtersSlugsCopy));
    Object.keys(filtersSlugsCopy).forEach((key) => {
      if (filtersSlugsCopy[key]) {
        filtersSending.push(key);
      }
    });
    dispatch(setCurrentFilter(filtersSending));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilterSelect]);

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
    dispatch(setCurrentFilter([]));
  };

  const handlerFilterMobileButton = (e) => {
    e.preventDefault();
    setFilterMobileModalOpen(true);
    setSaveFilterStatus(activeFilters);
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
            onClick={(e) => handlerResetButton(e)}
          />
        </div>

        {/* Для мобильной версии */}
        <div className={cls.filterBlockMobile}>
          <p className={cls.filterText}>Все работы студии</p>
          <Chip
            className="galleryPageChip"
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
        <AllCoursesMobileFilterModal
          isOpen={filterMobileModalOpen}
          setIsOpen={setFilterMobileModalOpen}
          saveFilterStatus={saveFilterStatus}
          filters={filters}
          activeFilters={activeFilters}
        />
      </div>
      <GalleryList gallerycards={galleryCards} />
    </>
  );
};
