"use client";
import React from 'react';

export default function Page(){
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Dax.io Demo MVP</h1>
      <p>Workers, Clients, Calendar/Schedule — basic web demo</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-4 bg-gray-800">Workers</div>
        <div className="card p-4 bg-gray-800">Clients</div>
        <div className="card p-4 bg-gray-800">Calendar</div>
      </div>
    </div>
  );
}
