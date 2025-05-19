import React from "react";
import { impactStats, programs, youtubeVideos, heroImages } from "../data";

function Home() {
  return (
    <div>
      {/* Hero Section with Children Photo */}
      <div className="relative">
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-60"></div>

        {/* Background image from Berakhah ChildCare */}
        <div
          className="relative bg-cover bg-center h-[80vh] flex items-center"
          style={{ backgroundImage: `url(${heroImages.home})` }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Nurturing Hearts,</span>
                <span className="block text-amber-400">Empowering Futures</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Caring for orphaned and vulnerable children in Uganda, providing
                for their physical, emotional, spiritual, and educational needs.
              </p>
              <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row sm:justify-center md:mt-10 px-4 sm:px-0 gap-3 sm:gap-0">
                <div className="rounded-md shadow w-full sm:w-auto">
                  <a
                    href="/contact#donate"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-indigo-700 bg-amber-400 hover:bg-amber-500 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                  >
                    Donate Now
                  </a>
                </div>
                <div className="rounded-md shadow w-full sm:w-auto sm:ml-3">
                  <a
                    href="#programs"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                  >
                    Our Programs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Statement Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Vision
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Making a Difference in Uganda
            </p>
            <div className="mt-6 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              <p className="italic font-light">
                "Berakhah childcare exists to care for orphaned and vulnerable
                children in Ugandan Rural villages and beyond providing for
                their physical, emotional, spiritual and educational needs,
                empowering them to be Uganda's future leaders."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-extrabold text-amber-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-base text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div
        id="programs"
        className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Programs
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How We Make a Difference
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide comprehensive support through these key initiatives.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
                >
                  <div
                    className={`${program.color} p-6 h-24 flex items-center justify-center text-5xl text-white`}
                  >
                    {program.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <a
                      href={`#${program.id}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
                    >
                      Learn more
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Video Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Featured Video
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              See Our Work in Action
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/3">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeVideos[0].id}`}
                    title={youtubeVideos[0].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 w-full md:w-1/3">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                  {youtubeVideos[0].title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-6 text-sm sm:text-base">
                  {youtubeVideos[0].description}
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Our choir travels to share their stories, culture, and hope
                  with audiences around the world.
                </p>
                <a
                  href="/choir"
                  className="inline-block bg-indigo-600 py-2 sm:py-3 px-4 sm:px-6 text-center font-medium text-white rounded-md hover:bg-indigo-700 text-sm sm:text-base w-full sm:w-auto"
                >
                  Learn More About Our Choir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
