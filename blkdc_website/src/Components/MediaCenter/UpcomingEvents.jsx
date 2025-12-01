import React from "react";

export default function UpcomingEvents({ data }) {
  return (
    <div className="space-y-8">
      {data.map((item) => (
        <div key={item.id} className="flex gap-4 bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-2xl shadow-lg">
          <img src={item.image} className="w-28 h-28 object-cover rounded-xl" />

          <div>
            <p className="text-orange text-xs mb-1">{item.date}</p>
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-white/70 text-sm">This is an upcoming district council event.</p>
          </div>
        </div>
      ))}
    </div>
  );
}
