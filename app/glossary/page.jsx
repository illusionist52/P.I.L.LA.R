"use client";

import { Navbar } from "@/components";
import { useEffect, useRef, useState } from "react";
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
      setData(output)
      
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };
  return (
    <div>
       <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
      {data !== null && <p>{data.summary.output_text}</p>}

    </div>
  )
}

export default PDFViewer