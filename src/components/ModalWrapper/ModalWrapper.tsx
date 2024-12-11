import React, { ReactNode } from "react";

const ModalWrapper = ({
  children,
  open,
  setOpen,
}: {
  children: ReactNode;
  open: boolean;
  setOpen: Function;
}) => {
  return (
    <div
      className={`fixed place-content-center overflow-auto rounded-xl top-0 left-0  bg-black/50 w-screen h-screen  transition-all duration-300 ${
        open ? " opacity-100 z-[9999]" : " opacity-0 -z-[999]"
      }`}
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className={`w-full h-screen place-content-center rounded-xl transition-all duration-300  ${
          open ? "scale-100" : "scale-0"
        }`}
      >
        <div
          className="w-full h-screen  fixed top-0  -z-[999] cursor-pointer "
          onClick={() => {
            setOpen(false);
          }}
        ></div>
        <div className="py-5 w-fit mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default ModalWrapper;
