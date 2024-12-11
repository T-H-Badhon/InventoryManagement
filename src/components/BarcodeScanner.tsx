"use client";
import { useAddProductMutation } from "@/redux/api/product/productApi";
import React, { useEffect, useMemo, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function BarcodeScanner() {
  const [data, setData] = React.useState("Not Found");
  const [isCameraAllowed, setIsCameraAllowed] = React.useState(true);
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState<
    { materia: string; barcode: string; description: string } | any
  >({});

  const [addProduct] = useAddProductMutation();

  useEffect(() => {
    const fetchData = async (barcode: string) => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/scanner/" + barcode
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setResult(result?.product);
        addProduct(result?.product);
        setScan(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(data);
  }, [data, setData, setScan, setResult, addProduct]);

  return (
    <div className="text-center mt-5">
      {isCameraAllowed && scan ? (
        <>
          <div className="w-[290px] sm:w-[500px] md:w-[500px] h-[230px] sm:h-[400px] overflow-hidden mx-auto">
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
        <div className="w-[290px] sm:w-[500px] md:w-[500px] h-[230px] sm:h-[400px] border border-red-500 mx-auto place-content-center">
          <h1>{result?.material}</h1>
          <h1>{result?.barcode}</h1>
          <h1>{result?.description}</h1>
        </div>
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
