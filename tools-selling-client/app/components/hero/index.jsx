const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/toolsbg.png)",
      }}
      className="h-[50vh] bg-no-repeat bg-center bg-cover flex justify-center items-center"
    >
      <div className="bg-white rounded-xl px-5 sm:px-20 py-5 sm:py-10 flex justify-center items-center text-center mainWidht sm:w-6/12 shadow">
        <div className="space-y-5">
          <p className="text-primary text-5xl font-bold">SINC</p>
          <p className="text-4xl font-semibold">
            ALL YOU NEED FOR YOUR NEXT DIY
          </p>
          <div className="flex items-center gap-2 justify-center text-xl">
            <i className="fa-solid fa-location-dot"></i>
            <p className="font-semibold">
              Ha-Yozma St 1, Rishon Letshiyon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
