"use client";

import { Navbar } from "@/components";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PulseLoader } from "react-spinners";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const [output, setOutput] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      console.log("FORMDATA - ", formData);
      console.log("FILE - ", file);

      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      alert("File uploaded successfully");
      const output = await response.json();
      console.log(output);
      setData(output);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      <h1 className="px-4 mt-4 block text-center text-3xl font-bold md:hidden">
        Get to know your Document
      </h1>

      {/* SITE CONTENT */}
      <div className="flex px-4 space-y-4 flex-col justify-center my-10 md:px-0 md:flex-row md:space-x-14 md:space-y-0">
        {/* LEFT PART HERE */}
        <div className="md:w-[55%] bg-blue-200">
          <h1>PDF PREVIEW</h1>
          <div>
            <h1>hello there</h1>
          </div>
        </div>

        {/* RIGTH PART HERE */}
        <div className="md:w-[35%] rounded-xl bg-gray-900 text-white border-2 border-blue-700 px-2 py-6 md:px-10">
          <h1 className="text-center font-bold mb-6 text-2xl">
            Upload Your File here
          </h1>

          <div className="flex flex-col space-y-6">
            <input
              type="file"
              onChange={handleFileChange}
              className="text-xl"
            />
            <button
              className="text-xl bg-blue-700 mx-auto text-white font-semibold w-[40%] py-2 inline-block rounded-xl"
              onClick={handleUpload}
              disabled={!file}
            >
              Upload
            </button>
          </div>
          {data !== null && <p>{data.summary.output_text}</p>}

          <hr className="my-4 border-slate-300" />

          {!output ? (
            <h1 className="text-center font-bold mb-3 text-2xl">
              Results of Your Document
            </h1>
          ) : (
            <h1 className="text-center font-bold mb-3 text-2xl">
              Your Details will be visible here
            </h1>
          )}

          {!output ? (
            <div className="flow-root rounded-lg border border-slate-300 py-3 shadow-sm">
              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-white">Title</dt>
                  <dd className="text-gray-300 sm:col-span-2">Mr</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-white">Name</dt>
                  <dd className="text-gray-300 sm:col-span-2">
                    John Frusciante
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-white">Occupation</dt>
                  <dd className="text-gray-300 sm:col-span-2">Guitarist</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-white">Salary</dt>
                  <dd className="text-gray-300 sm:col-span-2">$1,000,000+</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-white">Bio</dt>
                  <dd className="text-slate-300 sm:col-span-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    facilis debitis explicabo doloremque impedit nesciunt
                    dolorem facere, dolor quasi veritatis quia fugit aperiam
                    aspernatur neque molestiae labore aliquam soluta architecto?
                  </dd>
                </div>
              </dl>
            </div>
          ) : (
            <div className="flex justify-center items-center rounded-lg border border-slate-200 py-3 shadow-sm h-[100px]">
              <PulseLoader color="#ffffff"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;
