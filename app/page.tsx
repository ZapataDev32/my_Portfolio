import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/Alberto-Profile-pic.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import web1 from "../public/Dino-game.png";
import web2 from "../public/Screenshot 2024-05-27 124337.png";

export default function Home() {
  return (
    <div>
      <head>
        <title>Alberto Mendez-Zapata Portfolio</title>
        <meta name="description" content="Generate by "></meta>
        <link rel="icon" href="/public/favicon.ico"></link>
      </head>

      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">
              Develope by Alberto Mendez-Zapata
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl text-teal-600 font-medium md:text-6xl">
              Alberto Mendez-Zapata
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Freelancer providing services for programming and design content
              needs. join me down below and lets get Cooking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={deved}
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance developer, I have
              done remote work for...
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including programming
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 ">
              <div className="flex justify-center">
                <Image src={design} width={100} height={100} alt="design" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p className="py-2">
                Creating elegant deisgn suited for your deisgn theory.
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gra-800 py-1">HTML</p>
              <p className="text-gra-800 py-1">CSS</p>
              <p className="text-gra-800 py-1">JAVASCRIPT</p>
              <p className="text-gra-800 py-1">REACT</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 ">
              <div className="flex justify-center">
                <Image src={consulting} width={100} height={100} alt="design" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p className="py-2">
                Creating elegant deisgn suited for your deisgn theory.
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gra-800 py-1">HTML</p>
              <p className="text-gra-800 py-1">CSS</p>
              <p className="text-gra-800 py-1">JAVASCRIPT</p>
              <p className="text-gra-800 py-1">REACT</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 ">
              <div className="flex justify-center">
                <Image src={code} width={100} height={100} alt="design" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p className="py-2">
                Creating elegant deisgn suited for your deisgn theory.
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gra-800 py-1">HTML</p>
              <p className="text-gra-800 py-1">CSS</p>
              <p className="text-gra-800 py-1">JAVASCRIPT</p>
              <p className="text-gra-800 py-1">REACT</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance developer, I have
              done remote work for...
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including programming
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover w-full h-full"
                width={100}
                height={100}
                layout="responsive"
                alt="web1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover h-full w-full"
                width={100}
                height={100}
                layout="responsive"
                alt="web2"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
