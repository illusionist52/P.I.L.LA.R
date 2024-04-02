"use client";

import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [query, setQuery] = useState("");
  const [results,setResults] = useState(null)
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
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/cases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });
      const data = await response.json();
      console.log(data)
      // setResults(data);
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
       <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
        </form>
    </div>
  );
};

export default FileUpload;
