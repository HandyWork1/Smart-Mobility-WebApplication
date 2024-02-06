import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8 text-center">
        Welcome to All Seasons Lawn and Tree Care
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 w-full max-w-2xl">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h2 className="text-2xl font-bold mb-2">Irrigation</h2>
          <p className="text-gray-600">
            TIME <span className="text-gray-800">from 4 months</span>
          </p>
          <p className="text-gray-600">
            PRICE <span className="text-gray-800">from $8.990.00</span>
          </p>
          <p className="text-gray-600 mt-2">More Info</p>
        </div>
        <div className="mb-4 md:mb-0 md:mr-4">
          <h2 className="text-2xl font-bold mb-2">Tree Work</h2>
          <p className="text-gray-600">
            TIME <span className="text-gray-800">from 8 months</span>
          </p>
          <p className="text-gray-600">
            PRICE <span className="text-gray-800">from $14,000.00</span>
          </p>
          <p className="text-gray-600 mt-2">More Info</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Planning</h2>
          <p className="text-gray-600">
            TIME <span className="text-gray-800">from 2 months</span>
          </p>
          <p className="text-gray-600">
            PRICE <span className="text-gray-800">from $4,000.00</span>
          </p>
          <p className="text-gray-600 mt-2">More Info</p>
        </div>
      </div>
      <p className="text-center text-gray-600 mb-8">
        Our company's humble start began in 1906 when stand All Seasons Lawn
        and Tree Care shortly after graduating from Business School at Arizona
        State University. Starting with a truck, trailer and 2 employees, the
        company serviced the Phoenix Metro area and quickly grew due to our
        dedication.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Contact Us
      </button>
    </div>
  );
}

export default Home;