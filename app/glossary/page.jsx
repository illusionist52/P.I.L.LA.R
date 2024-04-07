"use client";

import { Navbar } from "@/components";
import Case from "@/components/Case";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";

const Glossary = () => {
  const [query, setquery] = useState("");
  const [cases, setCases] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCases() {
        try {
          setIsLoading(true);
          const response = await fetch("http://127.0.0.1:5000/cases", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
          });
          const data = await response.json();
          console.log(data);
          setCases(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      if (query.length > 2) {
        fetchCases();
      }
    },
    [query]
  );

  return (
    <div>
      {/* NAVBAR */}
      <Navbar />
      <div className="mx-6 px-2  md:mx-20 md:px-6 my-6 flex flex-col gap-4 ">
        <div>
          <div className="relative">
            <label htmlFor="Search" className="sr-only">
              {" "}
              Search{" "}
            </label>

            <input
              type="text"
              id="Search"
              value={query}
              onChange={(e) => setquery(e.target.value)}
              placeholder="Search for..."
              className="w-full rounded-md bg-slate-300 p-2 border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
        {cases === null ? (
          <div className="grid place-content-center bg-white px-4">
            <div className="text-center">
              <h1 className="text-9xl font-black mt-10 text-gray-300">
                SEARCH YOUR CASES
              </h1>

              <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Type more than 3 letter in the search
              </p>
            </div>
          </div>
        ) : Object.keys(cases).length > 0 ? (
          Object.values(cases).map((item, index) => (
            <div key={index}>
              {/* Render your Case component here */}
              <Case item={item} />
            </div>
          ))
        ) : (
          <div className="text-center">
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              No cases found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Glossary;
