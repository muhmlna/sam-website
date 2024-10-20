

function Gallery() {
  return (
    <>
      <section id="gallery" className="relative min450:hidden">
        
        <div className="container page-padding py-[4rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center ">

            <h2 className="text-[3.4rem] font-bold mb-4">
              Our Product
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
            We're not only reduce waste but also support local cobblers who pour their craftsmanship into every stitch.
              <br /> Step up and make a difference.
            </p>
          </div>

          {/* gallery */}
          <div className="gallery-grid py-24 w-full h-auto relative ">
            <div id="item-0"></div>
            <div id="item-1"></div>
            <div id="item-2"></div>
            <div id="item-3"></div>
            <div id="item-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
