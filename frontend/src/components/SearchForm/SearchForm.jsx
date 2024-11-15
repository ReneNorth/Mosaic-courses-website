import cls from './SearchForm.module.scss';

export const SearchForm = () => {
  return (
    <form
      className={cls.searchForm}
      noValidate
    //   onSubmit={handleSubmit}
    >
      <div className={cls.container}>
        <image className={cls.icon} />
        <input
          type="text"
          name="searchText"
          placeholder="Поиск"
          className={cls.input}
        />
      </div>
    </form>
  );
};
