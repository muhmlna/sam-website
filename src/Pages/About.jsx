import Footer from "../components/Footer/Footer";
import Shoes from "../images/who-we-are/shoes.png";
import GirlRedBg from "../images/who-we-are/girl-redbg.svg";
import ShoesText from "../images/who-we-are/shoes-side-text.png";
import GirlWind from "../images/who-we-are/wind.png";
import TitleRed from "../images/who-we-are/title-bg.svg";
import MainButton from "../components/MainButton";
import Img3 from "../images/AboutPage/5.png";
import Img4 from "../images/AboutPage/6.png";
import Recycle from "../images/AboutPage/recycle.png"; 
import Flag from "../images/AboutPage/flag.png";

function About() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            About Us
          </h1>
        </div>
        <div className="container page-padding py-[5rem]">
          <div className="grid grid-cols-[1fr_1fr] h-[60rem] md1000:grid-cols-1">
            {/* title div -- */}
            <div className="flex flex-col !text-left relative items-right justify-center md1000:items-center md1000:!text-center">
              <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8 ml-20 md1000:ml-3 ">
                who we are
              </p>
              <img
                src={TitleRed}
                alt="text_bg"
                className="w-[21rem] absolute top-[70px] min450:top-[84px] min375:top-[68px]"
              />

              <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-4">
              Why Buy New When You Can Renew?
              </h2>
              <p className="text-[#646464] font-medium text-[15px] max-w-[50rem] ">
              SAM Reworks berangkat dari hype sepatu yang semakin marak. Rasanya, seperti ada kepuasan tersendiri untuk punya yang baru terus menerus tanpa sadar sampah sepatu sudah jadi hal yang serius.
              <br/>“Bisakah kepuasan tersebut diganti tanpa beli sepatu baru?”
              Reworks sepatu bisa jadi jawabannya, ternyata kepuasan tersebut bisa digantikan ketika kita melihat sepatu lama kita bersinar lagi. Apalagi dengan tampilan yang bisa kita sesuaikan dengan kemauan kita.
              </p>
              <MainButton
                color={`!text-white`}
                bg={`bg-[#451b0d]`}
                goTo="/contact"
                text="contact us"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
              />
            </div>
            {/*  */}
            <div className="relative w-[80%] -top-[90px] left-[40px] md1000:hidden">
              <img
                src={Shoes}
                alt="girl_running"
                className="girl-running"
              />
              <img src={GirlRedBg} alt="bg-red" className="girl-bg" />
              <img src={ShoesText} alt="bg-text" className="girl-text" />
              <img src={GirlWind} alt="bg-wind" className="girl-wind" />
            </div>
          </div>
          {/*  */}
          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Recycle} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Sustainability As Movement</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                SAM Reworks bukan hanya sebuah bisnis, kami lebih ingin dikenal sebagai gerakan atau 
                komunitas yang membantu meningkatkan kesadaran akan dampak dari consumtive lifestyle terhadap barang fashion.
                </p>
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img3}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img4}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Flag} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Win-Win Solution</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                Perbaiki sepatu bukan hanya soal hemat biaya, 
                tapi juga membantu pengrajin sepatu lokal untuk berkarya lebih lama. 
                It’s a win-win solution!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default About;
