import React from "react";

function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      name: "Pastor Paul Gidudu",
      role: "Founder & Director",
      bio: "Pastor Paul founded Berakhah ChildCare in 2010 after seeing the need to care for orphaned children in his community. With a background in ministry and community development, he leads our organization with compassion and vision.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500",
    },
    {
      id: 2,
      name: "Sarah Nambozo",
      role: "Education Coordinator",
      bio: "Sarah oversees our educational programs, ensuring all children receive quality education. With 15 years of teaching experience, she develops curriculum and works closely with local schools.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500",
    },
    {
      id: 3,
      name: "Moses Wamboga",
      role: "Healthcare Manager",
      bio: "Moses coordinates our healthcare initiatives, including mobile clinics and preventive care programs. His background in nursing and public health has been invaluable to improving health outcomes for our children.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
    },
    {
      id: 4,
      name: "Ruth Nabuduwa",
      role: "Community Outreach",
      bio: "Ruth leads our community engagement efforts, working with local leaders and families to identify vulnerable children and develop support systems. Her deep connections in the community help us reach those most in need.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Founding of Berakhah ChildCare",
      description:
        "Pastor Paul Gidudu established Berakhah ChildCare to provide a home for orphaned children in Busamaga village.",
    },
    {
      year: "2012",
      title: "First Permanent Facility",
      description:
        "Completed construction of our first permanent building, providing housing for 20 children.",
    },
    {
      year: "2015",
      title: "Education Program Launch",
      description:
        "Established our comprehensive education support program, ensuring all children receive quality schooling.",
    },
    {
      year: "2017",
      title: "Clean Water Initiative",
      description:
        "Drilled our first community well, providing clean water to hundreds of families.",
    },
    {
      year: "2019",
      title: "Widow Microfinance Program",
      description:
        "Launched program to support widows caring for orphaned children through business training and microloans.",
    },
    {
      year: "2022",
      title: "Expansion to 6 Locations",
      description:
        "Extended our reach to 6 different locations across Eastern Uganda, serving 320 children.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-60"></div>
        <div className="relative bg-[url('https://www.berakhah.org/wp-content/uploads/2018/08/berakhah_children-care8.jpg')] bg-cover bg-center h-[60vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">About</span>
                <span className="block text-amber-400">Berakhah ChildCare</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Our story, mission, and the people behind our work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Story
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How We Began
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Berakhah ChildCare was founded in 2010 by Pastor Paul Gidudu
                  after he witnessed the growing number of orphaned children in
                  his community due to HIV/AIDS, malaria, and other causes. What
                  began as a small initiative to provide shelter for 10 children
                  has grown into a comprehensive program serving 320 children
                  across 6 locations in Eastern Uganda.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  The name "Berakhah" comes from the Hebrew word for "blessing,"
                  reflecting our belief that every child is a blessing and
                  deserves to be blessed with care, love, and opportunity.
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Over the years, we've expanded our services beyond basic care
                  to include education support, healthcare, clean water
                  projects, and programs that strengthen the wider community. We
                  believe in addressing the whole child and the whole community.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Today, Berakhah ChildCare is recognized as a leading
                  organization in Eastern Uganda, working to transform the lives
                  of vulnerable children and empower communities to build a
                  better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive care for orphaned and vulnerable
                children in Uganda, meeting their physical, emotional,
                educational, and spiritual needs while empowering communities to
                support and sustain these efforts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A Uganda where every child, regardless of their circumstances,
                has the opportunity to grow up in a safe, loving environment
                with access to education, healthcare, and the support needed to
                reach their full potential and become future leaders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Introduction */}
      <div className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Meet Our Children
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              See Our Work in Uganda
            </p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-2/3">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/E9z5BXTaP5I"
                    title="Kids in Manafwa Uganda with Berakhah ChildCare"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="p-8 md:w-1/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Children in Manafwa
                </h3>
                <p className="text-gray-600 mb-6">
                  Watch as the children in Manafwa, Uganda enjoy activities with
                  Pastor Paul Gidudu and the Berakhah ChildCare team.
                </p>
                <p className="text-gray-600 mb-6">
                  This video gives you a glimpse into the daily lives of the
                  children we serve and the joy they experience through our
                  programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Team
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The People Behind Our Work
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our History Timeline */}
      <div className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Journey
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Key Milestones
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`relative bg-white p-6 rounded-lg shadow-md ${
                      index % 2 === 0
                        ? "ml-auto mr-12 md:mr-24 md:w-5/12"
                        : "mr-auto ml-12 md:ml-24 md:w-5/12"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-gray-900">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Values
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Guides Our Work
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-lg shadow-md">
              <div className="text-3xl text-amber-500 mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Compassion
              </h3>
              <p className="text-gray-600">
                We approach our work with deep empathy for the children and
                communities we serve, recognizing their dignity and worth.
              </p>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-lg shadow-md">
              <div className="text-3xl text-indigo-500 mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600">
                We are committed to transparency, accountability, and ethical
                practices in all aspects of our work and stewardship of
                resources.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-lg shadow-md">
              <div className="text-3xl text-green-500 mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Empowerment
              </h3>
              <p className="text-gray-600">
                We believe in building capacity and self-sufficiency in
                individuals and communities, not creating dependency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
