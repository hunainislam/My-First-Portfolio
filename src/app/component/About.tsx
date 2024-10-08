"use client"

import hunain2 from "../../../public/assests/image/hunain2.jpg"
import Typewriter from "typewriter-effect";
import Link from "next/link"
import Image from "next/image"
export default function About() {
    return(
        <div id="about">
            <section className="text-gray-600 body-font bg-green-50">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        width={720}
        height={600}
        src={hunain2}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        <Typewriter
                options={{
                  strings: ["About Me"],
                  autoStart: true,
                  loop: true,
                }}
              />
      </h1>
      <p className="mb-5 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <Link target="_blank" href= {"/assests/CV/myCV.pdf"}>
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          View CV
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}