import React from 'react';

function Landing() {
  return (
    <div className="flex flex-col">
      <header className="flex-grow flex items-center justify-center py-6 overflow-hidden relative bg-gray-900 text-white">
        {/* Background Image */}
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <img
            src="https://source.unsplash.com/-W4UMfJEzVg"
            alt="Background"
            className="object-cover object-center w-full h-full"
          />
        </div>
        {/* Overlay */}
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 z-0"></div>
        {/* Main Content */}
        <div className="w-full max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl md:text-left font-bold my-4 md:mb-6">
            Embrace Sustainable Living with <span className="text-green-500">Smart Mobility</span>
          </h2>
          <p className="mb-6 md:mb-12 text-gray-300">
            Join the movement towards a greener planet with Smart Moblity. Our platform offers a holistic approach to sustainable living, empowering users to make eco-friendly choices in their daily lives.
          </p>
          {/* Features Grid */}
          <div className="grid grid-cols-1 mx-3 md:grid-cols-3 gap-8">
            {/* Challenges Feature */}
            <div className="transition duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-lg rounded-lg p-6 bg-green-600">
              <i className="fas fa-trophy text-white text-4xl mb-4"></i>
              <h3 className="text-2xl tracking-tight font-bold mb-2">Engaging Challenges</h3>
              <p className="mb-4">Complete fun and impactful challenges to earn points and level up your sustainability journey.</p>
              <button className="bg-white text-green-600 font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
            {/* Green Tips Feature */}
            <div className="transition duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-lg rounded-lg p-6 bg-blue-600">
              <i className="fas fa-leaf text-white text-4xl mb-4"></i>
              <h3 className="text-2xl tracking-tight font-bold mb-2">Green Living Tips</h3>
              <p className="mb-4">Discover practical tips and advice to incorporate sustainable habits into your lifestyle.</p>
              <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
            {/* Carbon Footprint Calculator Feature */}
            <div className="transition duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-lg rounded-lg p-6 bg-yellow-600">
              <i className="fas fa-globe-americas text-white text-4xl mb-4"></i>
              <h3 className="text-2xl tracking-tight font-bold mb-2">Carbon Footprint Calculator</h3>
              <p className="mb-4">Measure your environmental impact and track your progress towards reducing your carbon footprint.</p>
              <button className="bg-white text-yellow-600 font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Features Section */}
      <section className="bg-green-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center">
            Explore Smart Mobility Features
          </h2>
          <p className="mb-12 text-center text-gray-300">
            Discover the innovative features that empower you to embrace eco-friendly commuting.
          </p>
          <div className="flex flex-wrap -mx-4 text-gray-900">
            {/* Feature 1: Sustainable Transport */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <i className="fas fa-bicycle mr-2"></i> Sustainable Transport
                </h3>
                <p className="mb-4">Choose eco-friendly transport options like biking and walking.</p>
                <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            {/* Feature 2: Emissions Tracking */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <i className="fas fa-chart-line mr-2"></i> Emissions Tracking
                </h3>
                <p className="mb-4">Monitor and analyze your carbon emissions to make informed decisions.</p>
                <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            {/* Feature 3: Community Engagement */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <i className="fas fa-users mr-2"></i> Community Engagement
                </h3>
                <p className="mb-4">Connect with like-minded individuals and communities to drive change together.</p>
                <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            How It Works
          </h2>
          <p className="mb-12 text-gray-800">
            Explore the simple steps to start your eco-friendly journey with Smart Mobility.
          </p>
          {/* Add your content for "How It Works" */}
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-green-600 py-16 text-white">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Download Our App
          </h2>
          <p className="mb-12 text-gray-300">
            Take the first step towards sustainable commuting. Download the Smart Mobility app today!
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-green-600 font-bold py-2 px-6 rounded-full">
              Download Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
