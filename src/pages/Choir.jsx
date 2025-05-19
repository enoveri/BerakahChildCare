import React from "react";
import {
  choirMembers,
  performances,
  youtubeVideos,
  heroImages,
  galleryImages,
} from "../data";

function Choir() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-60"></div>
        <div
          className="relative bg-cover bg-center h-[60vh] flex items-center"
          style={{ backgroundImage: `url(${heroImages.choir})` }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Berakhah</span>
                <span className="block text-amber-400">Children's Choir</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Sharing joy, hope, and the beauty of Ugandan culture through
                music
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About the Choir Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              About Our Choir
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Voices of Hope and Joy
            </p>
            <div className="mt-6 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              <p className="mb-4">
                Berakhah Choir currently have an amazing Children's choir that
                you wouldn't want to miss their performances, they travel to
                different places performing unique cultural music and dances,
                sharing their life changing stories and testimonies while
                developing their talents.
              </p>
              <p>
                We at Berakhah are committed to rewrite the stories of orphaned
                and vulnerable children in the rural villages of Uganda by
                restoring hope as we provide the much needed love, care and
                support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Choir Performances Gallery */}
      <div className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Performances
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Sharing Joy Through Music
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://www.berakhah.org/wp-content/uploads/2018/10/berakhah_choir.jpg"
                alt="Berakhah Choir Performance"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Cultural Performances
                </h3>
                <p className="text-gray-600 mt-2">
                  Our choir performs traditional Ugandan songs and dances,
                  sharing the rich cultural heritage with audiences.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://www.berakhah.org/wp-content/uploads/2018/08/berakhah_children-care2.jpg"
                alt="Berakhah Choir Community Event"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Community Outreach
                </h3>
                <p className="text-gray-600 mt-2">
                  The choir regularly visits local communities, bringing music
                  and joy to villages throughout Uganda.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://www.berakhah.org/wp-content/uploads/2018/08/berakhah_children-care4.jpg"
                alt="Berakhah Choir Children"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Talent Development
                </h3>
                <p className="text-gray-600 mt-2">
                  Through music, our children develop confidence, teamwork
                  skills, and discover their unique talents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book the Choir Section */}
      <div id="book-choir" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Book Our Choir
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Invite Us to Your Event
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The Berakhah Children's Choir is available for performances at
              churches, schools, community events, and private functions.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="w-full md:w-2/3 md:pr-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Why Book Our Choir?
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                  <li>Authentic Ugandan cultural performances</li>
                  <li>Inspiring stories of hope and transformation</li>
                  <li>Beautiful voices and energetic traditional dances</li>
                  <li>
                    Raise awareness about orphaned and vulnerable children
                  </li>
                  <li>Support our mission through your booking fee</li>
                </ul>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  All proceeds from choir bookings go directly to supporting the
                  children at Berakhah ChildCare.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <form className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                  <div className="mb-3 sm:mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    />
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    />
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label
                      htmlFor="event-date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="event-date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    />
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label
                      htmlFor="event-type"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Event Type
                    </label>
                    <select
                      id="event-type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    >
                      <option>Church Service</option>
                      <option>School Event</option>
                      <option>Community Gathering</option>
                      <option>Fundraiser</option>
                      <option>Private Event</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 text-sm sm:text-base font-medium"
                  >
                    Request Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Choir Lifestyle and Performances */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Choir Life
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Behind the Scenes
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Get a glimpse into the daily lives, rehearsals, and performances
              of our talented choir members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12 px-4 sm:px-0">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery of thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-4 sm:px-0">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-36 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={
                  galleryImages.find((img) => img.category.includes("choir"))
                    .src
                }
                alt="Berakhah Choir"
                className="w-full h-36 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  Music Education
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Through our choir program, children develop musical talents
                  and gain confidence performing.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-4 sm:mx-0">
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Upcoming Performances
              </h3>

              <div className="space-y-4 sm:space-y-8 mt-4 sm:mt-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                        Annual Christmas Concert
                      </h4>
                      <div className="mt-2 flex items-center text-gray-700 text-sm sm:text-base">
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>December 20, 2024</span>
                      </div>
                      <div className="mt-1 flex items-center text-gray-700 text-sm sm:text-base">
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Mbale Community Center</span>
                      </div>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <a
                        href="#book-choir"
                        className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Book Tickets
                      </a>
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
                    Our annual Christmas celebration featuring traditional and
                    contemporary holiday songs.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                        Easter Celebration
                      </h4>
                      <div className="mt-2 flex items-center text-gray-700 text-sm sm:text-base">
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>April 12, 2025</span>
                      </div>
                      <div className="mt-1 flex items-center text-gray-700 text-sm sm:text-base">
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Busamaga Church</span>
                      </div>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <a
                        href="#book-choir"
                        className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Book Tickets
                      </a>
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
                    A special Easter performance celebrating hope and new
                    beginnings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choir;
