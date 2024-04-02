"use client";

import { Navbar } from "@/components";
import PdfDetails from "@/components/pdfDetails";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { IoChatboxEllipses } from "react-icons/io5";

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

  const onOpenModalToggle = () => setOpen((prev) => !prev);
  // const onCloseModal = () => setOpen(false);

  const [inputValue, setInputValue] = useState("");

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

  const chatLog = [
    {
      message: "Hello, how can I help you today?",
      type: "system",
    },
    {
      message: "I need assistance with my account.",
      type: "user",
    },
    {
      message:
        "Sure, I can help with that. Could you please provide more details about the issue?",
      type: "system",
    },
    {
      message: "I'm unable to access my account.",
      type: "user",
    },
    {
      message:
        "It seems like there might be a problem with your account's security settings. Let's try resetting your password.",
      type: "system",
    },
    {
      message:
        "It seems like there might be a problem with your account's security settings. Let's try resetting your password.",
      type: "system",
    },
  ];

  return (
    <div className={`${open ? "transparent" : "transparent"} `}>
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
          onClick={onOpenModalToggle}
          className="bg-slate-900 p-4 rounded-full cursor-pointer"
        >
          <IoChatboxEllipses size={32} color="white" />
        </button>

        {/* CHAT BOX */}
        <div
          open={open}
          className={`${open ? "block" : "hidden"} absolute bottom-10 left-10`}
        >
          <div className="mx-auto -p-10 w-[300px] md:max-w-[700px]">
            <div className="flex flex-col bg-gray-900 rounded-3xl h-[70vh] w-[100%] border-2 border-white overflow-y-auto hide-scrollbar">
              <h1 className="text-white text-transparent bg-clip-text text-center py-3 font-bold mt-2 text-3xl">
                PILLAR
              </h1>
              <hr />
              <div className="flex-grow p-6">
                <div className="flex flex-col space-y-4 text-white mb-[30%]">
                  {chatLog.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.type === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`${
                          message.type === "user"
                            ? "bg-purple-500"
                            : "bg-gray-800"
                        } rounded-lg p-4 text-white max-w-sm`}
                      >
                        {message.message}
                      </div>
                    </div>
                  ))}
                  {/* {isLoading && (
                    <div key={chatLog.length} className="flex justify-start">
                      <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                        <TypingAnimation />
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex-none p-6 absolute bottom-0 bg-slate-900 rounded-3xl mr-1"
              >
                <div className="flex rounded-lg border border-gray-700 bg-gray-800">
                  <input
                    type="text"
                    className="w-[70%] flex-grow px-4 py-2 bg-transparent text-white focus:outline-none"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;



// TYPING ANIMATION -
{
  /* 
const TypingAnimation = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse"></div>
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse delay-75"></div>
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse delay-150"></div>
    </div>
  );
};

export default TypingAnimation;
*/
}
