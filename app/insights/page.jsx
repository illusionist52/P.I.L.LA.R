"use client";

import { Navbar } from "@/components";
import PdfDetails from "@/components/pdfDetails";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { IoChatboxEllipses } from "react-icons/io5";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function PDFViewer() {
  // API ENDPOINT LOGIC
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // PDF VIEWING LOGIC
  const [PDFfile, setPDFFile] = useState(null);
  const [viewPDF, setViewPDF] = useState(null);
  // PDF VIEWING LOGIC

  // MODAL CHAT-BOT LOGIC
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const fileTypes = ["application/pdf"];

  const handleFileChange = (e) => {
    // API LOGIC IS HERE -
    setFile(e.target.files[0]);

    // PDF VIEWING LOGIC IS HERE -
    let selectedFile = e.target.files[0];
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = (e) => {
        setPDFFile(e.target.result);
      };
    } else {
      console.log("Please select a correct file");
      setPDFFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (PDFfile) {
      setViewPDF(PDFfile);
    } else {
      setViewPDF(null);
    }
  };

  const handleUpload = async () => {
    try {
      setIsLoading(true);
      setShowDetails(true);
      const formData = new FormData();
      formData.append("file", file);
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
      setIsLoading(false);
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
      <div className="flex px-4 space-y-4 flex-col justify-center my-10 md:px-0 md:flex-row md:space-x-14 md:space-y-0 relative">
        {/* LEFT PART HERE */}
        <div className="md:w-[55%] bg-blue-200 border-2 border-blue-400 p-2 h-[50vh] md:h-[90vh] hide-scrollbar overflow-y-auto rounded-2xl relative">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            {viewPDF ? (
              <Viewer fileUrl={viewPDF} />
            ) : (
              <div className="flex justify-center items-center h-[100%] text-4xl font-bold">
                NO PDF
              </div>
            )}
          </Worker>
        </div>

        {/* RIGHT PART HERE */}
        <div className="md:w-[35%]  rounded-xl bg-gray-900 text-white border-2 border-blue-700 px-2 py-6 md:px-10">
          <h1 className="text-center font-bold mb-6 text-2xl">
            Upload Your File here
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
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
          </form>

          <hr className="my-4 border-slate-300" />

          {showDetails && <PdfDetails isLoading={isLoading} data={data} />}
        </div>
      </div>

      {/* CHAT BOT ICON */}
      <div className="fixed bottom-4 left-4">
        <button
          onClick={onOpenModal}
          className="bg-slate-900 p-4 rounded-full cursor-pointer"
        >
          <IoChatboxEllipses size={32} color="white" />
        </button>
        <Modal open={open} onClose={onCloseModal} classNames="relative h-[900px]">
          <h2 className="absolute">Chat Bot</h2>
          {/* Your chat bot content here */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea neque
          nisi ab optio, nobis error laudantium quaerat ducimus magni, mollitia
          enim corporis. Laboriosam magnam cumque cupiditate quod et unde.
          Labore unde quam aliquid!

          <p className="absolute bottom-0">Keep chatting</p>
        </Modal>
      </div>
    </div>
  );
}

export default PDFViewer;
