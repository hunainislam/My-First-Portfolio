import Link from "next/link";
import Image from "next/image";
import { MdOutlineFileDownload } from 'react-icons/md';

export default function Header() {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image className="text-green-400" src={require("../../../public/assests/image/logo1.png")}
              alt="Malik Hunain"
              width={50}
              height={30}
              />
            <span className="ml-3 text-xl">Malik Hunain</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-green-500">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-green-500">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-green-500">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-green-500">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-green-500">
              Contacts
            </Link>
          </nav>
          <button className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-5 md:mt-0">
            <a href="/assests/CV/myCV.pdf">
            Download CV
            <MdOutlineFileDownload  className="text-xl ml-2"/>
            </a>
          </button>
        </div>
      </header>
    </div>
  );
}
