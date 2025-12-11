import React from "react";
import Button from "../Button";
import { ChevronRight } from 'lucide-react';

export default function NewsUpdates({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative isolate flex flex-col justify-end h-[450px] overflow-hidden rounded-[12px]  mx-auto shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group bg-secondary"
        >
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <div className="relative z-10 px-6 pb-6 pt-24 flex flex-col gap-2">
            <p className="text-xs md:text-sm text-[#f3e8d3] mb-1">{item.date}</p>
            <h3 className="text-xl font-medium pasbile text-white mb-2 line-clamp-2 hover:text-[#6acfce]">{item.title}</h3>
            <div className="flex items-center gap-3 bg-transparent border border-[#f3e8d3] hover:border-white rounded-[12px] px-4 py-2 w-max mt-4 group">
              <span className="text-[18px] font-semibold text-[#fffced]">Learn More</span>
              <a className=" group transition-colors hover:bg-orange">
              <ChevronRight className="text-[#f7f7f7] group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}