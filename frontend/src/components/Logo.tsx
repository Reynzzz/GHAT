interface propsType {
  imageProps?: string | undefined;
  h1Props?: string | undefined;
  h4Props?: string | undefined;
}
const Logo = ({ imageProps, h1Props, h4Props }: propsType) => {
  return (
    <>
      <img
        src="/src/assets/icons/logo_mobile.png"
        alt=""
        className={imageProps}
      />
      <div className="">
        <h1 className={h1Props}>MTsN 1 Kota Palu</h1>
        <h4 className={h4Props}>"Madrasah Mandiri Berprestasi"</h4>
      </div>
    </>
  );
};

export default Logo;
