import React from "react";

export default function PressReleases({ data }) {
  return (
    <div className="space-y-10">
      {data.map((item) => (
        <div key={item.id} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-lg">
          <img src={item.image} className="w-full h-56 object-cover rounded-xl mb-4" />

          <p className="text-orange text-sm">{item.date}</p>

          <h3 className="text-xl text-white font-semibold mb-2">{item.title}</h3>

          <p className="text-white/70 text-sm leading-relaxed">
            This press release highlights the official communications from the Balaka District Council.
          </p>
        </div>
      ))}
    </div>
  );
}
