export const CustomImage = (imageSrc) => {
  return (
    <div
      style={{
        width: '80px',
        height: '80px',
        borderRadius: '14px',
        paddingRight: '92px',
      }}
    >
      <img
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '14px',
          marginRight: '92px',
        }}
        src={imageSrc}
        alt="картинки мозаики"
      />
    </div>
  );
};
