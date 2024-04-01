"use client";

import { Navbar } from "@/components";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1); // start on first page
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);
  const [file, setFile] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  function onPageLoadSuccess() {
    setPageWidth(window.innerWidth);
    setLoading(false);
  }

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "standard_fonts/",
  };

  // Go to next page
  function goToNextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = (event) => {
        const buffer = event.target.result;
        setFile(buffer);
        setPageNumber(1); // reset page number when a new file is selected
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex py-10 px-4 space-x-4">
        {/* LEFT SIDE */}
        {file && (
          <div className="w-[60%] h-[1150px] relative">
            <Nav pageNumber={pageNumber} numPages={numPages} />
            {/* <div className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium inline-block">
            <span>{pageNumber}</span>
            <span className="text-gray-400"> / {numPages}</span>
          </div> */}

            {/* <div hidden={loading} className="flex items-center"> */}
            <div hidden={loading} className="h-full flex justify-center mx-auto">
              <div className={`flex items-center justify-between z-10 px-2`}>
                <button
                  onClick={goToPreviousPage}
                  disabled={pageNumber <= 1}
                  className="absolute left-8 bg-gray-300 rounded-md top-20 px-2 text-gray-500 border-2 border-black hover:text-black focus:z-20"
                >
                  <span className="sr-only">Previous</span>
                  LEFT
                </button>
                <button
                  onClick={goToNextPage}
                  disabled={pageNumber >= numPages}
                  className="absolute right-8 top-20 bg-gray-300 px-2 rounded-md text-gray-500 border-2 border-black hover:text-black focus:z-20"
                >
                  <span className="sr-only bg-black">Next</span>
                  RIGHT
                </button>
              </div>
              <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}
                renderMode="canvas"
                className="-ml-4"
              >
                <Page
                  className="border-2 rounded-md p-2 border-black"
                  key={pageNumber}
                  pageNumber={pageNumber}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  onLoadSuccess={onPageLoadSuccess}
                  onRenderError={() => setLoading(false)}
                  width={870}
                />
              </Document>
            </div>
            {/* </div> */}
          </div>
        )}
        {!file && (
          <p className="text-black text-3xl font-semibold bg-gray-300/20 w-[60%] h-[1000px] border-2 border-black flex justify-center items-center">
            Please select a PDF file
          </p>
        )}

        {/* RIGHT SIDE */}
        <div className="w-[35%] bg-red-400">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </>
  );
}

function Nav({ pageNumber, numPages }) {
  return (
    <nav className="bg-black">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <p className="text-2xl font-bold tracking-tighter text-white">
                Papermark
              </p>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
              <span>{pageNumber}</span>
              <span className="text-gray-400"> / {numPages}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
