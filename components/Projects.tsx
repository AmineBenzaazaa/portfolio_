import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl  ">
        <div className="flex-col  mt-7">
          <Link
            href="https://www.chaudry.group/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="WebHR Project"
                className="bg-gray-900 py-10 px-4 rounded-lg"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Chaudry Group
                </p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 10 screens along with the integration of a blog using Next.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://ppe-monitoring.com/"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt="PPE Monitoring"
                className="bg-white py-8 px-4 rounded-lg"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  PPE Monitoring
                </p>
                <p className="text-gray-500 text-[10px]">
                  an innovative platform dedicated to monitoring and monitoring
                  compliance with the wearing of PPE in companies and on
                  construction sites!
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col">
          <Link
            href="https://africa-west-padddwseper.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="bg-gray-900 rounded-lg px-[1.6rem]">
              <Image
                src="/ThirdProject.png"
                height={100}
                width={100}
                alt="Africa West Paper"
                className="px-[18px] py-8"
              />
              </div>
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Africa West Paper
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed showcase website using React.js.  <br/>AWP, is a company
                  specializing  in the manufacturing and marketing <br/>hygiene  and
                  paper wiping products.
                </p>
              </div>
            </div>
          </Link>
          {/* <Link
            href="http://44.201.47.75/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FourProject.png"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Payoasis</p>
                <p className="text-gray-500 text-[10px]">
                  Designed the modern UI for a banking website utilizing Gatsby.
                </p>
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
