function Featured() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      {/* featured cta */}
      <div className="featured-cta flex justify-center text-left items-center md1000:bg-none md1000:bg-[#451b0d] ">
        <div className="container page-padding ">
          <div className="flex items-center md1000:flex-col md1000:gap-12  md1000:text-center">
            <h2 className="text-white font-bold text-[3.7rem] md1000:text-[3rem] max-w-6xl px-7 leading-[1.2] min450:text-[2.4rem] ">
              We Are Always Providing Best Reworked Service For You
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
