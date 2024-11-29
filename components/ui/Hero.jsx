import { FaFileDownload } from "react-icons/fa";
import { IoInfinite } from "react-icons/io5";
import { FaDribbble, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Counter from "./Counter"

const Hero = () => {

  const profileIMG = process.env.NEXT_PUBLIC_PROFILE_IMG;
  const profileCV = process.env.NEXT_PUBLIC_PROFILE_RESUME;

  return (
    <div className="w-full z-20 h-full flex justify-center items-center flex-col">
      <div className="w-11/12 h-full md:pt-14 pt-20 sm:landscape:pt-28 md:landscape:pt-20 flex sm:flex-row flex-col-reverse justify-center items-center">
        <div className="sm:w-7/12 w-full">
          <div className="text_container">
            <h5 className="md:text-md text-sm text-gray-600">¡Muy buenas!</h5>
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold sm:landscape:text-3xl md:landscape:text-3xl lg:landscape:text-7xl">Soy <span className="text-primarycolor">JaviGigante</span>,<br /> Desarrollador Backend</h2>
            <p className="py-2 md:text-md text-sm text-gray-400">
              Sé bienvenido a mi página / currículum personal. <br /> Aquí encontrarás todo lo que soy, he trabajado, estudiado y demás misceláneas.
              No te cortes y contáctame para lo que necesites y con las dudas que te surjan.
              <br />
              Disfruta de tu estancia y recibe un saludo!!
            </p>
            <a href={ profileCV } className="inline-block sm:pl-5 md:pl-1">
              <button className="my-3 text-primarycolor text-sm transition-all duration-150 ease-in-out hover:bg-primarycolor hover:text-white md:px-4 px-2 py-2 bg-transparent border-2 border-primarycolor flex gap-3 justify-center items-center">
                <FaFileDownload />
                Descarga mi CV
              </button>
            </a>
          </div>
        </div>
        <div className="sm:w-5/12 w-full flex justify-center items-center pl-4">
          <div className="hero_img_container md:w-full w-60 md:max-w-xs sm:w-full sm:h-full sm:landscape:w-52 md:landscape:w-56 lg:landscape:w-full bg-slate-900 p-3 rounded-3xl border border-gray-600/[0.5] shadow-2xl shadow-blue-500/20 aspect-[3/4]">
            <img src={ profileIMG } alt="img_javi_bn" className="w-full h-full rounded-3xl object-cover" />
          </div>
        </div>
      </div>
      <div className="w-11/12 flex md:flex-row flex-col md:gap-5 gap-4 py-8 justify-center items-stretch">        
        <div className="flex-1 flex md:min-h-52 min-h-40 items-center md:h-56 sm:landscape:h-40 bg-slate-900 py-7 rounded-3xl border border-gray-600/[0.5] shadow-2xl shadow-blue-500/20 md:gap-6 gap-3">
          <div className="flex w-1/2 flex-col items-center px-2 md:gap-4 gap-2 pr-4 border-r-2 border-gray-400">
            <div className="font-bold md:text-5xl text-3xl text-primarycolor flex items-center">
              <span>+</span>
              <Counter from={0} to={7} />
            </div>
            <div className="text-center">
              <h4 className="md:text-xl text-sm sm:landscape:text-sm md:landscape:text-md lg:landscape:text-xl">
                Años de <br />Experiencia Laboral
              </h4>
            </div>
          </div>
          <div className="flex w-1/2 flex-col items-center px-2 md:gap-4 gap-2">
            <div className="font-bold md:text-5xl text-3xl text-primarycolor">
              <IoInfinite />
            </div>
            <div className="text-center">
              <h4 className="md:text-xl text-sm sm:landscape:text-sm md:landscape:text-md lg:landscape:text-xl">
                Ganas de <br />seguir creciendo
              </h4>
            </div>
          </div>
        </div>        
        <div className="flex-1 flex md:min-h-52 min-h-36 items-center md:h-full h-56 sm:landscape:h-40 bg-slate-900 md:py-8 py-2 rounded-3xl border border-gray-600/[0.5] shadow-2xl shadow-blue-500/20">
          <ul className="flex w-full justify-evenly items-center md:gap-4 gap-1">

            {[
              {
                icon: <FaLinkedin className="md:w-12 w-9 md:h-12 h-9" />,
                link: "https://www.linkedin.com/in/javier-diaz-gigante-b9ab28110/",
                label: "LinkedIn",
                description: "Mi perfil de LinkedIn, un lugar apasionante",                
              },
              {
                icon: <IoLogoGithub className="md:w-14 w-10 md:h-14 h-10" />,
                link: "https://github.com/javigigante",
                label: "GitHub",
                description: "Mi perfil de GitHub, donde subo proyectos",                
              },
              {
                icon: <FaDribbble className="md:w-14 w-10 md:h-14 h-10" />,
                link: "https://www.infojobs.net/candidate/cv/view/index.xhtml",
                label: "InfoJobs",
                description: "Mi perfil de InfoJobs, el mejor portal de empleo",                              
              },
              
            ].map(({ icon, label, description, link }, index) => {             

              return (
                <li key={ index } className="w-24 md:w-28 relative group flex-initial flex flex-col items-center">
                  <a href={ link } target="_blank" rel="noopener noreferrer" className="md:w-20 md:h-20 items-center justify-center">
                    <button className="md:w-full w-14 md:h-full h-14 rounded-full flex justify-center items-center glass transition-transform duration-300 ease-in-out md:hover:-translate-y-3 hover:bg-primarycolor">
                      { icon }
                    </button>
                  </a>
                  <div className="flex flex-col items-center mt-1">
                    <span className="text-sm text-gray-300">{label}</span>
                    <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 mt-1 transition-opacity duration-300 max-w-[150px] text-center">
                      <span className="hidden sm:inline sm:landscape:inline">
                        { description }
                      </span>
                      <span className="sm:hidden sm:landscape:hidden">                        
                      </span>                   
                    </span>
                  </div>
                </li>
              );

            })}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
