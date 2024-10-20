import About from "../components/About/About";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      {/* <ChooseUs />
      <Trainers />
      <Testimonials /> */}
      <Gallery />
      {/* <BmiCalc />
      <Pricing /> */}
      {/* <Blog /> */}
      {/* <CtaBanner /> */}
      <Footer />
    </>
  );
}

export default Home;
