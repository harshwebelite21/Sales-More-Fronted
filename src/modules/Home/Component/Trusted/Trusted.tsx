const Trusted = () => {
  const images = [
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png",
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png",
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png",
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png",
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png",
  ];
  const colLength = images.length >= 7 ? 7 : images.length;
  return (
    <div className="w-[90%] mx-auto bg-[#f6f8fa] flex flex-col justify-center items-center p-3">
      <div className="text-center capitalize text-[#1d1d1dcc] text-2xl font-bold">
        Trusted By 1000+ Companies
      </div>
      <div
        className={`grid grid-cols-3 md:grid-cols-${colLength} gap-4 justify-items-center mt-4`}
      >
        {images.map((imageUrl) => (
          <div key={imageUrl} className="slide">
            <img src={imageUrl} alt="trusted-brands" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trusted;
