"use client";

import hunain1 from "../../../public/assests/image/hunain1.png"
import Image from "next/image";
import Typewriter from "typewriter-effect";
import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-green-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Web Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-green-500"></div>
            <p className="mb-8 leading-relaxed">
            I am a Web Developer and UI/UX Designer, focused on building interactive websites with seamless user experiences and clean, modern designs.
            </p>
            <div className="flex justify-center">
              <Link href={"#contact"}>
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Contact
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width={720}
              height={600}
              src={hunain1}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
