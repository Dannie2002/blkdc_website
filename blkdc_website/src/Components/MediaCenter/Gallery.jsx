import React from "react";

export default function Gallery({ data }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {data.map((item) => (
        <div key={item.id} className="relative group">
          <img
            src={item.image}
            className="w-full h-40 md:h-48 object-cover rounded-xl group-hover:opacity-80 transition"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl">
            <p className="text-white text-sm">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
