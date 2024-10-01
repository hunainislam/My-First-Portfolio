import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
    return(
        <div id="skills">
          <section className="text-gray-600 body-font bg-green-50">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
        My Skills
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
      </p>
      <div className="flex mt-6 justify-center">
        <div className="w-[200px] h-1 rounded-full bg-green-500 inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
        <IoLogoHtml5  className="text-3xl font-bold"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            HTML
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-gray-200 rounded-xl">
            <div className="absolute bg-green-500 h-1 rounded-xl w-[100%]"></div>
          </div>
          <p className="font-bold text-green-500 text-right">100%</p>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
        <IoLogoCss3  className="text-3xl font-bold"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            CSS
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-gray-200 rounded-xl">
            <div className="absolute bg-green-500 h-1 rounded-xl w-[90%]"></div>
          </div>
          <p className="font-bold text-green-500 text-right">90%</p>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
        <IoLogoJavascript  className="text-3xl font-bold"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            JavaScript
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-gray-200 rounded-xl">
            <div className="absolute bg-green-500 h-1 rounded-xl w-[90%]"></div>
          </div>
          <p className="font-bold text-green-500 text-right">90%</p>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
        <BiLogoTypescript  className="text-4xl font-bold"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            TypeScript
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-gray-200 rounded-xl">
            <div className="absolute bg-green-500 h-1 rounded-xl w-[90%]"></div>
          </div>
          <p className="font-bold text-green-500 text-right">90%</p>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
        <RiNextjsFill  className="text-4xl font-bold "/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            Next.js
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-gray-200 rounded-xl">
            <div className="absolute bg-green-500 h-1 rounded-xl w-[90%]"></div>
          </div>
          <p className="font-bold text-green-500 text-right">70%</p>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
        <SiTailwindcss  className="text-3xl font-bold"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            TailwindCSS
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-gray-200 rounded-xl">
            <div className="absolute bg-green-500 h-1 rounded-xl w-[90%]"></div>
          </div>
          <p className="font-bold text-green-500 text-right">60%</p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}