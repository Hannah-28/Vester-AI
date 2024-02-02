import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    // 404 ERROR PAGE FOR PAGES NOT IMPLEMENTED
    <div className="h-screen grid text-center justify-center items-center text-4xl text-primary-dark font-extrabold">
      404
      <br />
      PAGE NOT FOUND
      <br />
      <button
        type="button"
        className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-base font-medium"
      >
        <Link to="/form-1">ONBOARD</Link>
      </button>
    </div>
  );
}
