import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { FaNpm } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
    return(
        <div>
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/assests/image/logo1.png")}
              alt="Malik Hunain"
              width={50}
              height={30}
              />
      <span className="ml-3 text-xl">Malik Hunain</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Malik Hunain 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target="_blank" href= {"https://www.linkedin.com/in/hunain-islam-2057832b7/"}className="text-gray-500">
      <IoLogoLinkedin  className="text-2xl hover:text-blue-600"/>
      </Link>
      <Link target="_blank" href= {"https://github.com/hunainislam?tab=repositories"} className="ml-3 text-gray-500">
      <FaSquareGithub  className="text-2xl hover:text-black"/>
      </Link>
      <a target="_blank" href={"https://vercel.com/malik-hunains-projects"} className="ml-3 text-gray-500">
      <SiVercel className="text-2xl hover:text-black"/>
      </a>
      <a target="_blank" href={"https://www.npmjs.com/~malikhunain"} className="ml-3 text-gray-500">
      <FaNpm className="text-2xl hover:text-red-600" />
      </a>
    </span>
  </div>
</footer>
        </div>
    )
}