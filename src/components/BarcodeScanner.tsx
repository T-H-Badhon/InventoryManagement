"use client";
import React, { useMemo, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function BarcodeScanner() {
  const [data, setData] = React.useState("Not Found");
  const [isCameraAllowed, setIsCameraAllowed] = React.useState(true);
  const [scan, setScan] = useState(false);

  useMemo(()=>{
    setScan(false)
    console.log(data)
    setData("Not Found")

  },[data,setData,setScan]);

  return (
    <div className="text-center mt-5">
      {isCameraAllowed && scan ? (
        <>
          <div className="w-[290px] sm:w-[500px] md:w-[500px] h-[230px] sm:h-[400px] mx-auto">
            <BarcodeScannerComponent
              onUpdate={(err, result) => {
                if (result)
                  setData(
                    result.getText ? result.getText() : "No readable data"
                  );
                else setData("Not Found");
              }}
            />
            <p className="text-lg ">
              Scanned Data: <span className=" font-bold">{data}</span>
            </p>
          </div>
        </>
      ) : (
        <div className="w-[290px] sm:w-[500px] md:w-[500px] h-[230px] sm:h-[400px] border border-red-500 mx-auto"></div>
      )}
      <button
        onClick={() => {
          setScan(!scan);
        }}
        className="my-10 p-2 sm:py-4 px-5 sm:px-10 bg-blue-800 text-white text-lg font-bold rounded-lg"
      >
        {scan ? "Cancel" : "Scan"}
      </button>
    </div>
  );
}

export default BarcodeScanner;
