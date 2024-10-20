import { Link } from "react-router-dom";
import FooterLogo from "../../images/logo/logo-footer.svg";

function Footer() {
  const instagramUrl = 'https://www.instagram.com/sam.reworks/';
  return (
    <>
      <footer className="bg-black">
        <div className="flex justify-center items-center px-16 py-8 mt-20 w-full bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 w-full max-w-[927px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-[15px] font-medium text-white">
            @2024 SAM REWORKS. All rights reserved.
          </div>
          <div className="flex gap-5 justify-between">
            <Link to={instagramUrl}>
            <img
              loading="lazy"
              alt="Instagram"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d69f112141687eedac8c5fad2f46072a3d0c0559cbcd67c7ab619c8fcae5eb6?"
              className="shrink-0 w-10 aspect-square"
            />
            </Link>
            <img
              loading="lazy"
              alt="Tiktok"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6126d4d18b040fdd385fd67fccc269e2d881eb6226fde4773b379b645f7bfcbd?"
              className="shrink-0 aspect-square w-10"
            />
          </div>
        </div>
      </div>
        
      </footer>
    </>
  );
}


export default Footer;
