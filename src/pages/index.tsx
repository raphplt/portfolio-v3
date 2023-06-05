/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import Wave from "@/components/wave";
import { useEffect, useRef, useState } from "react";
import "material-icons/iconfont/material-icons.css";
import Link from "next/link";
import Image from "next/image";
import macAfa from "../../public/assets/images/mac-afa.webp";
import macMg from "../../public/assets/images/mac-mg.webp";
import macRP from "../../public/assets/images/mac-rp.webp";
import phoneMG from "../../public/assets/images/phone-mg.webp";
import phoneRP from "../../public/assets/images/phone-rp.webp";
import phoneAfa from "../../public/assets/images/phone-afa.webp";
import tabMg from "../../public/assets/images/tab-mg.webp";
import tabRP from "../../public/assets/images/tab-rp.webp";
import tabAfa from "../../public/assets/images/tab-afa.webp";
import Bubbles from "@/components/bubbles";
import submarine from "../../public/assets/images/submarine.png";
import { motion } from "framer-motion";
import MovingSubmarin from "@/components/movingSubmarin";
import Bubble from "@/components/bubble";

export default function Home() {
  const [sky, setSky] = useState(
    "bg-gradient-to-b from-blue-600 via-cyan-300 to-cyan-300"
  );
  const heure = new Date().getHours();
  const nuit = heure >= 21 || heure <= 6;
  const jour = heure >= 8 && heure <= 18;
  const crepuscule = heure >= 19 && heure <= 21;
  const aube = heure >= 6 && heure <= 8;
  useEffect(() => {
    if (nuit) {
      setSky("bg-gradient-to-b from-black via-blue-800 to-cyan-700");
    } else if (jour) {
      setSky("bg-gradient-to-b from-blue-600 via-cyan-300 to-cyan-300");
    } else if (crepuscule) {
      setSky("bg-gradient-to-b from-blue-800 via-orange-400 to-orange-800");
    } else if (aube) {
      setSky("bg-gradient-to-b from-blue-800 via-amber-400 to-orange-500");
    }
  }, [heure]);

  const target1 = useRef(null);
  const target2 = useRef(null);
  const [scrollToSecond, setScrollToSecond] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element: any = target1.current;

  //     if (element) {
  //       const { top } = element.getBoundingClientRect();
  //       const offset = window.pageYOffset || document.documentElement.scrollTop;
  //       const duration = 1000; // Durée de l'animation en millisecondes (1 seconde)
  //       const start = performance.now();

  //       const step = (timestamp: number) => {
  //         const elapsed = timestamp - start;
  //         const progress = Math.min(elapsed / duration, 1);
  //         const easedProgress = easeOutQuad(progress); // Fonction d'accélération pour une transition plus douce (facultatif)

  //         window.scrollTo(0, offset + top * easedProgress);

  //         if (elapsed < duration) {
  //           requestAnimationFrame(step);
  //         }
  //       };

  //       requestAnimationFrame(step);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className=" h-[100vh]">
      <div className={`${sky} h-48`}>
        <div className="h-12"></div>
        <Wave />
      </div>
      <div className="h-[500vh] bg-gradient-to-b from-[#0277BD] to-[#03010f] mt-12">
        <div className="flex items-center gap-5 flex-col pt-24">
          <div className="text-2xl text-[#151029] mb-4">Hey, je suis</div>
          <h1 className="text-7xl font-cormorant text-[#151029]">
            Raphaël Plassart
          </h1>
          <h2 className="text-4xl font-cormorant text-[#151029]">
            Développeur web Full-stack
          </h2>
        </div>
        <MovingSubmarin />
        <Bubbles />
        <div className="flex justify-center  flex-col items-center gap-2 mt-[57vh]">
          <Link
            href={"#me"}
            className="flex flex-col items-center animate-bounce"
          >
            <div className="text-center font-poppins text-xl">
              En découvrir plus
            </div>
            <span className="material-icons">arrow_downward</span>
          </Link>
        </div>
        <h2
          className="text-center text-6xl font-cormorant mt-36 mb-48 text-white"
          id="me"
          ref={target1}
        >
          Qui suis-je ?
        </h2>
        <div className=" grid grid-cols-2 grid-rows-3">
          <div className="w-2/3 mx-auto mb-36">
            <h3 className="text-4xl font-cormorant mb-4 text-white">
              Ma scolarité
            </h3>
            <p className="font-poppins text-[#b6b0b0] text-xl w-4/5">
              J'ai découvert ma passion pour l'informatique en 3ème, en créant
              un jeu de plateforme dans le style de Mario. Au lycée, j'ai suivi
              la spécialité NSI Numérique et Sciences Informatiques où j'ai
              appris les bases du développement web et de l'algorithmie. J'ai
              ensuite intégré l'ETNA (Ecole des Technologies Avancées) en 2022,
              où je suis actuellement en Année de Préparation Accélérée au sein
              de la formation Intégrateur Web et Mobile.
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="w-2/3 mx-auto mb-36">
            <h3 className="text-4xl font-cormorant mb-4 text-white">
              L'alternance
            </h3>
            <p className="font-poppins text-[#b6b0b0] text-xl w-4/5">
              Je continue ma formation en alternance depuis mars 2023,
              actuellement au sein de la société Mes Allocs en tant que
              développeur full-stack. Travailler dans le cadre de l'entreprise
              m'a permis de découvrir le travail et l'organisation en équipe, et
              de développer mes compétences en développement web, notamment en
              Vue.JS et MongoDB.
            </p>
          </div>
          <div className="w-2/3 mx-auto">
            <h3 className="text-4xl font-cormorant mb-4 text-white">
              Autodidacte
            </h3>
            <p className="font-poppins text-[#b6b0b0] text-xl w-4/5">
              Mon intérêt pour le développement s'est aussi développé en
              parallèle de mes études. Pendant mon temps libre, j'ai pu me
              lancer dans divers projets comme la création d'un site web pour
              afficher mes photographies, mais également un portfolio que
              j'améliore au fur et à mesure de mon apprentissage. Je m'intéresse
              aussi au domaine de l'intelligence articielle, en travaillant sur
              un modèle de reconnaissance d'images en Python.
            </p>
          </div>
          <div></div>
        </div>
        <h2
          className="text-center text-6xl font-cormorant mt-96 mb-36 text-white"
          id="projects"
          ref={target2}
        >
          Mes projets
        </h2>
        <div className="">
          <div className="flex items-center mb-36">
            <div className="flex flex-wrap justify-center w-1/2 h-full">
              <Image
                src={macAfa}
                alt="Project image"
                className="w-[60%] h-[60%]"
              />
              <div className="flex justify-center w-fit h-full">
                <Image
                  src={phoneAfa}
                  alt="Project image"
                  className="w-[15%] h-[15%]"
                />
                <Image
                  src={tabAfa}
                  alt="Project image"
                  className="w-[25%] h-[25%]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto relative ml-36">
              <h3 className="text-6xl text-white font-cormorant">
                Aid For Animals
              </h3>
              <p className="text-xl font-poppins text-[#b6b0b0] w-1/2 mt-3 text-center">
                Création d'un site d'e-commerce (front-end et back-end) orienté
                vers la défense des animaux.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-36">
            <div className="flex flex-col justify-center items-center mx-auto relative ml-36">
              <h3 className="text-6xl text-white font-cormorant">
                Mentor Goal
              </h3>
              <p className="text-xl font-poppins text-[#b6b0b0] w-1/2 mt-3 text-center">
                Création d'un blog pour l'emtreprise Mentor Goal, plateforme
                d'aide à la recherche d'alternance.
              </p>
            </div>
            <div className="flex flex-wrap justify-center w-1/2 h-full">
              <Image
                src={macMg}
                alt="Project image"
                className="w-[60%] h-[60%]"
              />
              <div className="flex justify-center w-fit h-full">
                <Image
                  src={phoneMG}
                  alt="Project image"
                  className="w-[14%] h-[14%]"
                />
                <Image
                  src={tabMg}
                  alt="Project image"
                  className="w-[25%] h-[25%]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-wrap justify-center w-1/2 h-full">
              <Image
                src={macRP}
                alt="Project image"
                className="w-[65%] h-[65%]"
              />
              <div className="flex justify-center w-fit h-full">
                <Image
                  src={phoneRP}
                  alt="Project image"
                  className="w-[30%] h-[30%]"
                />
                <Image
                  src={tabRP}
                  alt="Project image"
                  className="w-[55%] h-[55%]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto relative ml-36">
              <h3 className="text-6xl text-white font-cormorant">Raphotos</h3>
              <p className="text-xl font-poppins text-[#b6b0b0] w-1/2 mt-3 text-center">
                Un site vitrine dédié à la présentation de mes photographies,
                l'une de mes passions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fonction d'accélération pour une transition plus douce
const easeOutQuad = (t: any) => t * (2 - t);
