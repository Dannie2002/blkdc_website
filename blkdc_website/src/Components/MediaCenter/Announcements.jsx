import React from "react";

export default function Announcements({ data }) {
  // If no data, show fallback
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-white text-lg">No announcements available at the moment.</p>
      </div>
    );
  }

  // Otherwise, render announcements
  return (
    <div className="space-y-6">
      {data.map((item) => (
        <div key={item.id} className="border-b border-white/10 pb-4 flex gap-4">
          <img src={item.image} className="w-20 h-20 object-cover rounded-lg" />

          <div>
            <p className="text-orange text-xs">{item.date}</p>
            <h3 className="text-lg text-white font-medium">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
