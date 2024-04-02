"use client";

import { Navbar } from "@/components";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PulseLoader } from "react-spinners";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
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

      <h1 className="px-4 mt-4 block text-center text-3xl font-bold md:hidden">Get to know your Document</h1>

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
        <div className="md:w-[35%] bg-red-300">
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload} disabled={!file}>
            Upload
          </button>
          {data !== null && <p>{data.summary.output_text}</p>}
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;
