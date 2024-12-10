"use client"
import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function App() {
  const [data, setData] = React.useState("Not Found");
  const [isCameraAllowed, setIsCameraAllowed] = React.useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {isCameraAllowed && data=="Not Found" ? (
        <>
          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) setData(result.getText ? result.getText() : "No readable data");
              else setData("Not Found");
            }}
          />
          <p>Scanned Data: {data}</p>
        </>
      ) : (
        <p>Camera access denied. Please enable camera permissions to scan.</p>
      )}
    </div>
  );
}

export default App;
