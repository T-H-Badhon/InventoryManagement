import React from "react";
import { useDrop } from "react-dnd";

type CategoryProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Category({ id, title, children }: CategoryProps) {
  const [{ isOver }, drop] = useDrop({
    accept: "PRODUCT",
    drop: () => ({ categoryId: id }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop as any}
      className={`bg-gray-100 p-4 rounded-lg w-64 min-h-[200px] ${
        isOver ? "bg-green-100" : ""
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
