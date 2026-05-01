"use client";
import React, { useState, useEffect } from 'react';

export default function WorkersPage(){
  const [name, setName] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const add = () => { if(!name) return; setHistory(h => [name + ' clocked in', ...h]); setName(''); };
  return (
    <section className="card bg-gray-800 p-4 rounded-lg">
      <h2>Workers</h2>
      <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <button className="btn btn-primary" onClick={add}>Clock In</button>
      <div className="mt-2">
        <strong>Today</strong>
        <ul>
          {history.map((h,i)=>(<li key={i}>{h}</li>))}
        </ul>
      </div>
    </section>
  );
}
