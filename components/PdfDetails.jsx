import React from "react";
import { PulseLoader } from "react-spinners";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "./Card";

function PdfDetails({ isLoading, data }) {
  if (isLoading)
    return (
      <div className="flex justify-center items-center rounded-lg border border-slate-200 py-3 shadow-sm h-[600px]">
        <PulseLoader height="80" width="80" radius={1} color="white" />
        {/* <Skeleton count={20}/> */}
      </div>
    );

  const summary = data.summary.output_text;
  const points = summary.split("\n");
  console.log(summary)
  console.log(points);
  return (
    <>
      {/* {!data ? (
      <h1 className="text-center font-bold mb-3 text-2xl">
        Results of Your Document
      </h1>
    ) : (
      <h1 className="text-center font-bold mb-3 text-2xl">
        Your Details will be visible here
      </h1>
    )} */}

      <div className="flow-root rounded-lg border  py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-white">Owner</dt>
            <dd className="text-gray-300 sm:col-span-2">
              {data.owner.output_text}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-white">Rentee</dt>
            <dd className="text-gray-300 sm:col-span-2">
              {data.rentee.output_text}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-white">Period:</dt>
            <dd className="text-gray-300 sm:col-span-2">
              {data.date.output_text}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-white">Rent</dt>
            <dd className="text-gray-300 sm:col-span-2">
              {data.rent.output_text}
            </dd>
          </div>

         
        </dl>
        <div className="space-y-8">
          {points.map((point,index)=>(<Card key={index} point={point} index={index} />))}
        </div>
      </div>
    </>
  );
}

export default PdfDetails;
