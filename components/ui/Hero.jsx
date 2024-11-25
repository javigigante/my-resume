import { FaFileDownload } from "react-icons/fa";
import { IoInfinite } from "react-icons/io5";
import { FaDribbble, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Counter from "./Counter"

const Hero = () => {
  return (
    <div className="w-full z-20 h-full flex justify-center items-center flex-col">
      <div className="w-11/12 h-full flex justify-center items-center">
        <div className="flex-1">
          <div className="text_container">
            <h5 className="text-gray-600">¡Muy buenas!</h5>
            <h2 className="text-4xl md:text-7xl font-bold">Soy <span className="text-primarycolor">JaviGigante</span>,<br /> Desarrollador Backend</h2>
            <p className="py-2 text-md text-gray-400">
              Sé bienvenido a mi página / currículum personal. <br /> Aquí encontrarás todo lo que soy, he trabajado, estudiado y demás misceláneas.
              No te cortes y contáctame para lo que necesites y con las dudas que te surjan.
              <br />
              Disfruta de tu estancia y recibe un saludo!!
            </p>
            <a href="./cv Javier.pdf" className="inline-block">
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
      <div className="w-11/12 flex gap-4 py-8 justify-center items-stretch">        
        <div className="flex-1 flex min-h-52 items-center bg-slate-900 py-7 rounded-3xl border border-gray-600/[0.5] shadow-2xl shadow-blue-500/20 gap-6 h-full">
          <div className="flex w-1/2 flex-col items-center px-2 gap-4 pr-4 border-r-2 border-gray-400">
            <div className="font-bold md:text-5xl text-3xl text-primarycolor flex items-center">
              <span>+</span>
              <Counter from={0} to={7} />
            </div>
            <div className="text-center">
              <h4 className="text-xl">
                Años de
                <br />
                Experiencia Laboral
              </h4>
            </div>
          </div>
          <div className="flex w-1/2 flex-col items-center px-2 gap-4 pl-4">
            <div className="font-bold md:text-5xl text-3xl text-primarycolor">
              <IoInfinite />
            </div>
            <div className="text-center">
              <h4 className="text-xl">
                Ganas de
                <br />
                seguir creciendo
              </h4>
            </div>
          </div>
        </div>        
        <div className="flex-1 flex min-h-52 items-center bg-slate-900 py-8 rounded-3xl border border-gray-600/[0.5] shadow-2xl shadow-blue-500/20 h-full">
          <ul className="flex w-full justify-evenly items-center gap-4">
            {[
              { icon: <FaLinkedin className="w-14 h-14" />, link: "https://www.linkedin.com/in/javier-diaz-gigante-b9ab28110/", label: "LinkedIn", description: "Mi perfil de LinkedIn, un lugar apasionante" },
              { icon: <IoLogoGithub className="w-14 h-14" />, link: "https://github.com/javigigante", label: "GitHub", description: "Mi perfil de GitHub, donde subo mis proyectos" },
              { icon: <FaDribbble className="w-14 h-14" />, link: "https://www.infojobs.net/candidate/cv/view/index.xhtml", label: "InfoJobs", description: "Mi perfil de InfoJobs, el mejor portal de empleo" },
            ].map(({ icon, label, description, link }, index) => (
              <li key={index} className="relative group flex-1 flex flex-col items-center">
                <a href={link} target="_blank" rel="noopener noreferrer" className="w-20 h-20">
                  <button className="w-full h-full rounded-full flex justify-center items-center glass transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:bg-primarycolor">
                    {icon}
                  </button>
                </a>
                <div className="flex flex-col items-center mt-1">
                  <span className="text-sm text-gray-300">{label}</span>
                  <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 mt-1 transition-opacity duration-300 max-w-[150px] text-center">{description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
