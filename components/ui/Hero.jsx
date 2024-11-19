import { FaFileDownload } from "react-icons/fa";
import { IoInfinite } from "react-icons/io5";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Hero = () => {
    return (
      <div className="w-full z-20 h-full flex justify-center items-center flex-col">
        <div className="w-11/12 h-full flex justify-center items-center">
          <div className="flex-1">
            <div className="text_container">
              <h5 className="text-gray-600">¡Muy buenas!</h5>
              <h2 className="text-6xl font-bold">
                Soy <span className="text-primarycolor">JaviGigante</span>,<br /> Backend Developer
              </h2>
              <p className="py-2 text-md text-gray-400">
                Sé bienvenido a mi página / currículum personal. <br /> Aquí encontrarás todo lo que soy, he trabajado, estudiado y demás misceláneas.
                No te cortes y contáctame para lo que necesites y con las dudas que te surjan.
                <br />
                Disfruta de tu estancia y recibe un saludo!!
              </p>
              <a href="./cv Javier.pdf">
                <button className="my-3 text-primarycolor text-sm transition-all duration-150 ease-in-out hover:bg-primarycolor hover:text-white px-4 py-2 bg-transparent border-2 border-primarycolor flex gap-3 justify-center items-center">
                  <FaFileDownload />
                  Descarga mi CV
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="hero_img_container w-full max-w-xs bg-slate-900 p-3 rounded-3xl border border-gray-600/[0.5] shadow-2xl shadow-blue-500/20">
              <img src="./img/javi-cv-bn.jpg" alt="img_javi_bn" className="w-full h-full rounded-3xl" />
            </div>
          </div>
        </div>       
        <div className="w-11/12 flex gap-4 py-8 justify-center items-center">          
          <div className="h-7/12 flex-1 flex items-center bg-slate-900 py-7 rounded-3xl border border-gray-600/[0.5] shadow-2xl shadow-blue-500/20 gap-6">
            <div className="flex w-1/2 flex-col items-center gap-4 pr-4 border-r-2 border-gray-400">
              <div className="font-bold text-5xl text-primarycolor">+7</div>
              <div className="text-center">
                <h4 className="text-xl">
                  Años de
                  <br />
                  Experiencia*
                </h4>
              </div>
            </div>
            <div className="flex w-1/2 flex-col items-center gap-4 pl-4">
              <div className="font-bold text-5xl text-primarycolor"><IoInfinite /></div>
              <div className="text-center">
                <h4 className="text-xl">
                  Ganas de
                  <br />
                  seguir creciendo
                </h4>
              </div>
            </div>
          </div>          
          <div className="h-7/12 flex-1 flex items-center bg-slate-900 py-8 rounded-3xl border border-gray-600/[0.5] shadow-2xl shadow-blue-500/20">
            <ul className="flex justify-center items-center gap-36 w-full py-7">                
                <li>
                <a href="#">
                    <button className="w-17 h-17 rounded-full flex justify-center items-center glass transition-all duration-150 ease-in-out hover:bg-primarycolor">
                    <TbBrandDribbbleFilled className="w-14 h-14 hover:text-white" />
                    </button>
                </a>
                </li>                
                <li>
                <a href="#">
                    <button className="w-17 h-17 rounded-full flex justify-center items-center glass transition-all duration-150 ease-in-out hover:bg-primarycolor">
                    <IoLogoGithub className="w-14 h-14 hover:text-white" />
                    </button>
                </a>
                </li>                
                <li>
                <a href="#">
                    <button className="w-17 h-17 rounded-full flex justify-center items-center glass transition-all duration-150 ease-in-out hover:bg-primarycolor">
                    <FaYoutube className="w-14 h-14 hover:text-white" />
                    </button>
                </a>
                </li>
            </ul>
            </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  