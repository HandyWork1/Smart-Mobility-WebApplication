import React from 'react';

function Landing() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow flex items-center justify-center overflow-hidden relative">
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <img
            src="https://source.unsplash.com/-W4UMfJEzVg"
            alt="Background"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 z-0"></div>
        <div className="w-full max-w-4xl text-white px-8 py-8 md:py-24 mx-auto z-0">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Welcome to <span className="text-green-600">Smart<br />Mobility </span> 
          </h2>
          <p className="mb-6 md:mb-12 text-gray-300">
            Explore eco-friendly transportation options and reduce your carbon footprint with Smart Mobility. Our innovative app guides you towards sustainable commuting choices, making a positive impact on the environment.
          </p>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-8">
              <div className="transition duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-md rounded-lg p-6">
                <h3 className="text-2xl tracking-tight text-green-600 font-bold ml-0 mb-2">
                  <i className="fas fa-bus mr-2"></i> Public Transportation
                </h3>
                <p className="mb-4">Optimize your commute with efficient public transportation routes.</p>
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-8">
              <div className="transition duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-md rounded-lg p-6">
                <h3 className="text-2xl tracking-tight text-green-600 font-bold mb-2">
                  <i className="fas fa-walking mr-2"></i> Walking Routes
                </h3>
                <p className="mb-4">Enjoy the simplicity of walking and contribute to a greener environment.</p>
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-8">
              <div className="transition duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-md rounded-lg p-6">
                <h3 className="text-2xl tracking-tight text-green-600 font-bold mb-2">
                  <i className="fas fa-bicycle mr-2"></i> Cycling Paths
                </h3>
                <p className="mb-4">Embrace the invigorating experience of cycling while reducing your carbon footprint.</p>
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
