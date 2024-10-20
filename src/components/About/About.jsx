import AboutCarts from "./AboutCarts";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
        <div className="container page-padding">
          {/* about cards */}
          <div className="about-cards flex gap-10 -mt-[8.5rem] md1000:flex-col">
            <AboutCarts />
          </div>

          {/* text-img div */}
          <div
            id="about"
            className=" flex justify-center items-center px-16 py-20 mt-2 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full"
          >
            {/* about text */}
            <div className="flex flex-col items-center mt-12 w-full max-w-[907px] max-md:mt-10 max-md:max-w-full">
            <div className="text-[3.6rem] text-black font-bold my-10">WHO ARE WE?</div>
            <div className="self-stretch mt-12 text-[24px] font-medium text-center text-black max-md:mt-10 max-md:max-w-full">
              Hello!
              Welcome to SAM Reworks, your go-to service for shoe repair and reworks! Giving your beloved shoes a second life, we help reduce shoe waste and save the environment.
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
