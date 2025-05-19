import React from "react";

function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-60"></div>
        <div className="relative bg-[url('https://www.berakhah.org/wp-content/uploads/2018/08/berakhah_children-care7.jpg')] bg-cover bg-center h-[60vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Contact</span>
                <span className="block text-amber-400">Berakhah ChildCare</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Get in touch with us to learn more, volunteer, or support our
                work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Get in Touch
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Have questions? Want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="bg-white rounded-lg shadow p-8">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                  ></textarea>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact info */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">USA</h3>
                  <div className="mt-3 space-y-1 text-gray-600">
                    <p>IGFM/Berakhah</p>
                    <p>P.O. Box 722102</p>
                    <p>Houston, TX 77272</p>
                    <p>USA</p>
                    <p className="mt-2 font-medium">Phone: 281-617-9943</p>
                    <p className="font-medium">
                      Email: info@berakhahchildcare.org
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">Uganda</h3>
                  <div className="mt-3 space-y-1 text-gray-600">
                    <p>IGFM/Berakhah</p>
                    <p>P.O Box 2671</p>
                    <p>Mbale – Uganda</p>
                    <p className="mt-2 font-medium">Phone: +256 772 456 789</p>
                    <p className="font-medium">
                      Email: uganda@berakhahchildcare.org
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Connect With Us
                  </h3>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href="https://www.facebook.com/berakhahChildCare/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/berakhahcare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC9HDwa5BC-r739VFsX_9ywg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <span className="sr-only">YouTube</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/berakhahchildcare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Location
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Visit Us in Uganda
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082225!2d34.12292765!3d1.0757392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177fa0d6eb8bc4c1%3A0x1c3b7e66d0c9b04e!2sMbale%2C%20Uganda!5e0!3m2!1sen!2sus!4v1621345678901!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Berakhah ChildCare Location"
              ></iframe>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Our main facility is located in Busamaga village, just 14km
                north of Mbale town in Eastern Uganda. Visitors are welcome by
                appointment. Please contact us to arrange a visit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Donate Section */}
      <div
        id="donate"
        className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Support Our Work
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Donate to Berakhah ChildCare
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Your donation helps us provide care, education, and hope to
              orphaned and vulnerable children in Uganda.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  How Your Donation Helps
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                  <li>$25 provides school supplies for a child for a month</li>
                  <li>$50 provides meals for a child for a month</li>
                  <li>$100 covers medical care for a child for a month</li>
                  <li>$250 sponsors a child's complete needs for a month</li>
                  <li>$1000 helps drill a well for clean water access</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  100% of your donation goes directly to supporting our programs
                  and the children we serve.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/3">
                <form className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Donation Amount
                    </label>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <button
                        type="button"
                        className="py-2 px-4 border border-indigo-500 rounded-md text-indigo-600 font-medium hover:bg-indigo-50"
                      >
                        $25
                      </button>
                      <button
                        type="button"
                        className="py-2 px-4 border border-indigo-500 rounded-md text-indigo-600 font-medium hover:bg-indigo-50"
                      >
                        $50
                      </button>
                      <button
                        type="button"
                        className="py-2 px-4 border border-indigo-500 rounded-md text-indigo-600 font-medium hover:bg-indigo-50"
                      >
                        $100
                      </button>
                      <button
                        type="button"
                        className="py-2 px-4 border border-indigo-500 rounded-md text-indigo-600 font-medium hover:bg-indigo-50"
                      >
                        $250
                      </button>
                    </div>
                    <input
                      type="text"
                      id="custom-amount"
                      placeholder="Other Amount"
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="frequency"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Frequency
                    </label>
                    <select
                      id="frequency"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option>One-time</option>
                      <option>Monthly</option>
                      <option>Quarterly</option>
                      <option>Annually</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#e91e63] text-white py-3 px-4 rounded-md hover:bg-[#d81b60] transition-colors duration-300 font-medium"
                  >
                    Donate Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Section */}
      <div id="volunteer" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Get Involved
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Volunteer Opportunities
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg shadow-lg p-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Share Your Skills and Time
                </h3>
                <p className="text-gray-600 mb-6">
                  We welcome volunteers with various skills and backgrounds.
                  Whether you can offer a few hours remotely or want to visit
                  Uganda for an extended stay, there are many ways to
                  contribute.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                  <li>Teaching and tutoring</li>
                  <li>Healthcare services</li>
                  <li>Construction and maintenance</li>
                  <li>Administrative support</li>
                  <li>Fundraising and event planning</li>
                  <li>Social media and communications</li>
                </ul>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/3">
                <a
                  href="#contact"
                  className="block w-full bg-indigo-600 py-3 px-5 text-center font-medium text-white rounded-md hover:bg-indigo-700"
                >
                  Apply to Volunteer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor a Child Section */}
      <div
        id="sponsor"
        className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Change a Life
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Sponsor a Child
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Your monthly sponsorship provides a child with education,
              healthcare, nutrition, and hope for the future.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://www.berakhah.org/wp-content/uploads/2018/08/berakhah_children-care1.jpg"
                  alt="Child sponsorship"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What Your Sponsorship Provides
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                  <li>Education and school supplies</li>
                  <li>Nutritious meals</li>
                  <li>Healthcare and medical treatment</li>
                  <li>Safe housing</li>
                  <li>Emotional support and counseling</li>
                  <li>Life skills training</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  For $35 per month, you can transform a child's life and
                  future. You'll receive regular updates, photos, and letters
                  from your sponsored child.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-indigo-600 py-3 px-6 text-center font-medium text-white rounded-md hover:bg-indigo-700"
                >
                  Sponsor a Child Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
