import { Navbar } from '@/components'
import React from 'react'

const page = () => {
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
        <div className="md:w-[55%] bg-blue-200 border-2 border-blue-400 p-2 h-[50vh] md:h-[90vh] hide-scrollbar overflow-y-auto">
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

        {/* RIGTH PART HERE */}
        <div className="md:w-[35%]  rounded-xl bg-gray-900 text-white border-2 md:h-[90vh] md:overflow-y-auto hide-scrollbar  border-blue-700 px-2 py-6 md:px-10">
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
    </div>
  )
}

export default page
