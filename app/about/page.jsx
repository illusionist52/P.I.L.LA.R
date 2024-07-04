import { Navbar } from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
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
                  src="/usmaan.png"
                  alt="Bonnie Avatar"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Mohd Usmaan Mogal</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Front-end developer & Data analyst
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Built and trained the LLM model and developed a question
                  anweering bot with it. Preprocessed the dataset used for
                  semantic search
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
                <span className="text-gray-500 dark:text-gray-400">
                  Data engineer
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                 Converted all the data in vectors. Analyzed and built the model for semantic search. 
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
                  Backe-end developer & Data engineer
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Built the APIs used for the project. Enabled user authentication
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
                  UI/UX Designer
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                 Designed the entire UI for the application.
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
