"use client";
import React, { useState, useEffect } from 'react';

export default function ClientsPage(){
  const [clients, setClients] = useState<string[]>([]);
  const [name, setName] = useState('');
  const add = () => { if(!name) return; setClients(c => [...c, name]); setName(''); };
  return (
    <section className="card bg-gray-800 p-4 rounded-lg">
      <h2>Clients</h2>
      <input className="input" placeholder="Client name" value={name} onChange={e=>setName(e.target.value)} />
      <button className="btn btn-primary" onClick={add}>Add</button>
      <ul className="mt-2">
        {clients.map((c,i)=> <li key={i}>{c}</li>)}
      </ul>
    </section>
  );
}
