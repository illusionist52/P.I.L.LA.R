"use client";

import { Navbar } from "@/components";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer() {
  const [output, setOutput] = useState(false);

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
      <div className="flex flex-col justify-center md:flex-row py-10 px-4 space-x-4">
        {/* LEFT SIDE */}
        {file && (
          <div className="mx-auto w-[95%] h-[500px] md:w-[60%] md:h-[1150px]">
            <Nav pageNumber={pageNumber} numPages={numPages} />
            {/* <div className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium inline-block">
            <span>{pageNumber}</span>
            <span className="text-gray-400"> / {numPages}</span>
          </div> */}

            {/* <div hidden={loading} className="flex items-center"> */}
            <div
              hidden={loading}
              className="h-full flex justify-center mx-auto"
            >
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
                  className="border-2 rounded-md p-2 border-black w-full"
                  key={pageNumber}
                  pageNumber={pageNumber}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  onLoadSuccess={onPageLoadSuccess}
                  onRenderError={() => setLoading(false)}
                />
              </Document>
            </div>
            {/* </div> */}
          </div>
        )}
        {!file && (
          <p className="text-black text-3xl font-semibold bg-gray-300/20 w-[95%] md:w-[60%] h-[1000px] border-2 border-black flex justify-center items-center">
            Please select a PDF file
          </p>
        )}

        {/* RIGHT SIDE */}
        <div className="relative mx-auto border-2 rounded-xl flex flex-col justify-start px-6 py-10 border-black bg-gray-900/90 md:w-[35%]">
          <p className="text-white text-2xl mb-4">Upload you Document here</p>
          <form>
            <input
              className="text-white text-xl h-[55px] bg-gray-500   rounded-md px-3 py-2 font-medium"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
            <button
              className="text-white text-xl mt-2 w-full bg-blue-500 rounded-md px-3 py-2 font-medium"
              type="submit"
            >
              UPLOAD
            </button>
          </form>

          <hr className="text-white my-6" />
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
  