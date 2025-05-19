import React from "react";

function Stories() {
  const stories = [
    {
      id: 1,
      title: "Sarah's Journey to Education",
      summary: "From orphaned at age 6 to top of her class at 12",
      content:
        "Sarah lost both her parents to HIV/AIDS when she was just 6 years old. With no relatives able to care for her, she came to Berakhah ChildCare. Despite her difficult start in life, Sarah showed an incredible aptitude for learning. With support from our education program, she is now 12 years old and at the top of her class. She dreams of becoming a doctor to help others in her community.",
      image:
        "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=500",
      date: "April 15, 2024",
    },
    {
      id: 2,
      title: "Moses Finds His Voice",
      summary: "A shy boy discovers his talent for music and leadership",
      content:
        "When Moses first arrived at Berakhah at age 8, he barely spoke. Traumatized by the loss of his family in a house fire, he kept to himself and struggled to connect with others. Everything changed when he joined our music program. Moses discovered he had a beautiful singing voice, and through music, he began to heal. Now 14, he leads our children's choir and mentors younger children, showing them that there is hope beyond tragedy.",
      image:
        "https://images.unsplash.com/photo-1505739818593-1c3d5b1c1acd?q=80&w=500",
      date: "March 3, 2024",
    },
    {
      id: 3,
      title: "Clean Water Transforms a Village",
      summary: "How a well changed life for hundreds of families",
      content:
        "In the village of Busamaga, families once walked miles each day to collect water from a contaminated stream. Waterborne diseases were common, especially among children. Through our Clean Water Project, we installed a well in the center of the village last year. The impact has been transformative. Children who once spent hours collecting water now attend school regularly. Illness rates have dropped dramatically, and the community is thriving with new gardens and small businesses that use the reliable water source.",
      image:
        "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=500",
      date: "February 10, 2024",
    },
    {
      id: 4,
      title: "Grace's Microfinance Success",
      summary: "A widow builds a future for her family through small business",
      content:
        "After losing her husband to malaria, Grace was left to care for five children with no source of income. Through our Widow Microfinance program, she received training in business skills and a small loan to start a poultry business. One year later, Grace's business is thriving. She sells eggs at the local market, has repaid her initial loan, and can now afford to send all her children to school. Her story inspires other widows in our program to believe in their own potential.",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=500",
      date: "January 22, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-60"></div>
        <div className="relative bg-[url('https://www.berakhah.org/wp-content/uploads/2018/08/berakhah_children-care4.jpg')] bg-cover bg-center h-[60vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Stories of</span>
                <span className="block text-amber-400">
                  Hope & Transformation
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Real stories of lives changed through Berakhah ChildCare's work
                in Uganda
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stories Introduction */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Impact
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Stories That Inspire
            </p>
            <div className="mt-6 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              <p>
                Behind every statistic is a real person with hopes, dreams, and
                challenges. These stories highlight the real impact of our work
                and the resilience of the children and communities we serve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="py-12 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  index % 2 === 0 ? "md:flex" : "md:flex md:flex-row-reverse"
                }`}
              >
                <div className="md:flex-shrink-0 md:w-2/5">
                  <img
                    className="h-full w-full object-cover md:h-full md:w-full"
                    src={story.image}
                    alt={story.title}
                  />
                </div>
                <div className="p-8 md:w-3/5">
                  <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                    {story.date}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900 leading-tight">
                    {story.title}
                  </h2>
                  <p className="mt-2 text-lg text-gray-600">{story.summary}</p>
                  <p className="mt-4 text-gray-500">{story.content}</p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Read Full Story
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Share Your Story CTA */}
      <div className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Have you visited our projects?</span>
              <span className="block text-amber-400">
                Share your story with us
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
