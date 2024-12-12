"use client";
import BarcodeScanner from "@/components/BarcodeScanner";
import KanbanBoard from "@/components/KanbanBoard";
import React from "react";

function Scanpage() {
  return (
    <div className="pt-20  ">
      <BarcodeScanner />
      <div>
        <KanbanBoard />
      </div>
    </div>
  );
}

export default Scanpage;
