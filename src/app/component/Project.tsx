import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Inventory Management System: A solution for tracking products,
              managing stock levels, and improving inventory operations.
              Interactive Resume Builder: A dynamic tool that allows users to
              easily create, edit, and customize their resumes for a more
              personalized experience.
            </p>
          </div>
          <div className="flex flex-wrap -m-8">
            <div className="lg:w-1/2 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/project1.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                    Interactive-Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Interactive-Resume-Builder
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                    An Interactive Resume Builder allows users to create, edit,
                    and customize their resumes dynamically, making the process
                    faster and more user-friendly..
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://milestone-based-interactive-resume-builder-9d03p3o5a.vercel.app/"
                    }
                  >
                    <p className="leading-relaxed text-green-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* projects */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/project2.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                    Inventory Management Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Inventory Management System
                  </h1>
                  <p className="leading-relaxed">
                    An Inventory Management System helps track products, manage
                    stock levels, and streamline operations efficiently.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://inventory-management-system-amber.vercel.app/"
                    }
                  >
                    <p className="leading-relaxed text-green-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}
