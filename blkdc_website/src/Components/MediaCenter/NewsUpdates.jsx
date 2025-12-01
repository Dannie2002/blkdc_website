import React from "react";
import Button from "../Button";

export default function NewsUpdates({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-secondary rounded-xl overflow-hidden shadow-md hover:shadow-xl 
                     transition-all duration-300 cursor-pointer group"
        >
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-4 md:p-6">
            <p className="text-xs md:text-sm text-orange mb-2">{item.date}</p>
            <h3 className="text-base md:text-lg font-semibold text-[#1c201c] mb-4 line-clamp-3">
              {item.title}
            </h3>

            <Button text="Read More" className="w-full md:w-auto" textClassName="text-green group-hover:text-white" />
          </div>
        </div>
      ))}
    </div>
  );
}
