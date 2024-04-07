"use client";

import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [results,setResults] = useState(null)
  const [chatLog, setChatLog] = useState([
    {
      message: "Hello, how can I help you today?",
      type: "system",
    }
   
  ])
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // const handleUpload = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     console.log("FORMDATA - ", formData);
  //     console.log("FILE - ", file);

  //     const response = await fetch("http://127.0.0.1:9999/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to upload file");
  //     }

  //     alert("File uploaded successfully");
  //     const output = await response.json();
  //     console.log(output);
    
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //     alert("Error uploading file");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    const newMessage = { message: inputValue, type: "user" };
  
    // Update chatLog with the new user message
    setChatLog((chatLog)=>{ return [...chatLog,newMessage]});
  
    try {
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputValue })
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }
  
      const data = await response.json();
  
      // Update chatLog with the system message received from the API
    setChatLog((chatLog)=>{ return [...chatLog,{ message: data.output_text, type: "system" }]});
    // setChatLog(chatLog.concat({ message: data.output_text, type: "system" }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  


  return (
    <div>
      <h2>File Upload</h2>
      {/* <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button> */}
      <form onSubmit={handleSubmit}>
       <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Search</button>
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
        </form>
    </div>
  );
};

export default FileUpload;
