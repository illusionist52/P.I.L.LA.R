import { Navbar } from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />

      {/* <div classNameName="w-[100%] flex justify-center items-center">
        
        <div classNameName="flex flex-col justify-center items-center md:w-[40%] bg-red-400">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            className="h-56 rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
          />

          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong className="font-medium">Company Name</strong>

            <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

            <p className="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
          </div>
        </div>

        
        <div classNameName="bg-blue-500 md:w-[50%] h-[400px]"></div>
      </div> */}

      {/* TEAMS SECTION */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-wider font-extrabold text-gray-900 dark:text-white">
              THE PILLARS OF P.I.L.L.A.R
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classNamees from Tailwind
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="w-[800px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/usmaan.jpg"
                  alt="Bonnie Avatar"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>MohdUsmaan Mogal</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  CEO & Web Developer
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Bonnie drives the technical strategy of the flowbite platform
                  and brand.
                </p>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="w-[800px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/atharva.jpg"
                  alt="Jese Avatar"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Atharva Mulam</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">CTO</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Jese drives the technical strategy of the flowbite platform
                  and brand.
                </p>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="w-[800px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/profile-pic.png"
                  alt="Michael Avatar"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Nilanchala Panda</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Senior Front-end Developer
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Michael drives the technical strategy of the flowbite platform
                  and brand.
                </p>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="w-[800px]  object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/divesh.png"
                  alt="Sofia Avatar"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Divesh Punjabi</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Marketing & Sale
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Lana drives the technical strategy of the flowbite platform
                  and brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
