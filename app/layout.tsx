"use client";
import React from 'react';

export default function Layout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <title>Dax.io MVP – Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="min-h-screen bg-gray-900 text-gray-100">{children}</div>
      </body>
    </html>
  );
}
