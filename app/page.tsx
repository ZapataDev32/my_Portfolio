import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/Alberto-Profile-pic.png";

export default function Home() {
  return (
    <div>
      <head>
        <title>Alberto Mendez-Zapata Portfolio</title>
        <meta name="description" content="Generate by "></meta>
        <link rel="icon" href="/public/favicon.ico"></link>
      </head>

      <main className=" bg-white px-10">
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
            <h2 className="text-5xl text-teal-600 font-medium">
              Alberto Mendez-Zapata
            </h2>
            <h3 className="text-2xl py-2">Developer and designer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Freelancer providing services for programming and design content
              needs. join me down below and lets get Cooking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
            <Image src={deved} alt="Profile Picture" />
          </div>
        </section>
      </main>
    </div>
  );
}
