import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="bg-secondary-light h-screen text-center mt-18 text-secondary-dark px-4 md:px-10 pt-52 space-y-5 md:space-y-7 xl:space-y-10 text-xl md:text-large xl:text-extra">
        <div className="font-medium">
          <h1>WELCOME TO</h1>
        </div>
        <div className="font-extrabold">
          <h1 className="text-primary-dark">
            Vester.AI <span className="text-primary-dark"> platform</span>
          </h1>
        </div>
        <div className="font-normal text-xs w-fit mx-auto">
          <div className="menu border py-2 font-extrabold px-3 rounded-md hover:border-primary-dark">
            <Link to="/form-1">Get{'\u00A0'}Started</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
