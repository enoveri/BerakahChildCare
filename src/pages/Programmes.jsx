import React from "react";

function Programmes() {
  const programmes = [
    {
      id: "childcare",
      title: "Orphan Care",
      description:
        "We care for 320 orphaned and vulnerable children across 6 locations, with 50 staying at our Berakhah home in Busamaga, Uganda.",
      longDescription:
        "Our Orphan Care program provides comprehensive support for children who have lost one or both parents. We ensure they have safe housing, nutritious meals, healthcare, education, and emotional support. For children who cannot stay at our main facility, we work with guardian families in the community, providing them with resources to care for the children properly.",
      icon: "❤️",
      color: "bg-amber-500",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=500",
    },
    {
      id: "healthcare",
      title: "Health Care",
      description:
        "We organize mobile clinics with volunteer doctors to provide essential medical services to children and communities without access to proper healthcare.",
      longDescription:
        "Our Healthcare program brings medical services to remote villages where access to healthcare is limited. We organize regular mobile clinics staffed by volunteer doctors and nurses who provide check-ups, vaccinations, and treatment for common illnesses. We also focus on preventive care through health education and hygiene training. For children with serious medical conditions, we help arrange specialized treatment at regional hospitals.",
      icon: "🏥",
      color: "bg-blue-500",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500",
    },
    {
      id: "cleanwater",
      title: "Clean Water Project",
      description:
        "We provide safe, clean water to communities, preventing water-borne diseases and improving community health and productivity.",
      longDescription:
        "Our Clean Water Project addresses one of the most critical needs in rural Uganda. We drill wells, install water pumps, and build rainwater harvesting systems to provide communities with access to clean, safe water. This reduces waterborne diseases, allows children to attend school instead of walking miles to collect water, and improves overall community health. We also train local committees to maintain the water systems, ensuring sustainability.",
      icon: "💧",
      color: "bg-teal-500",
      image:
        "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=500",
    },
    {
      id: "widows",
      title: "Widow Microfinance",
      description:
        "We empower widows with life skills and microfinance loans, supporting them as they continue to provide for children in their care.",
      longDescription:
        "Our Widow Microfinance program helps women who have lost their husbands become financially independent. Many of these women are caring for orphaned children. We provide business skills training, financial literacy education, and small loans to help them start or expand income-generating activities. The program includes ongoing mentorship and support groups where widows can share experiences and encourage one another.",
      icon: "👩‍👧‍👦",
      color: "bg-purple-500",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=500",
    },
    {
      id: "solar",
      title: "Solar Lights",
      description:
        "We provide solar lighting to homes without electricity, improving study conditions and preventing dangerous kerosene lamp accidents.",
      longDescription:
        "Our Solar Lights program brings safe, renewable lighting to homes in villages without electricity. This allows children to study after dark, improving their educational outcomes. It also eliminates the need for dangerous and unhealthy kerosene lamps, which can cause fires and respiratory problems. The solar systems we install include phone charging capabilities, helping families stay connected and save money they would otherwise spend on commercial charging services.",
      icon: "☀️",
      color: "bg-yellow-500",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=500",
    },
    {
      id: "education",
      title: "Education Support",
      description:
        "We provide school fees, uniforms, books, and supplies to ensure all children in our care receive quality education.",
      longDescription:
        "Our Education Support program ensures that all children in our care have access to quality education. We cover school fees, provide uniforms, books, and supplies, and offer tutoring for children who need extra help. We also work with local schools to improve educational quality and build or renovate classrooms where needed. For older students, we provide vocational training and university scholarships to help them prepare for independent, productive futures.",
      icon: "📚",
      color: "bg-green-500",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-60"></div>
        <div className="relative bg-[url('https://www.berakhah.org/wp-content/uploads/2018/08/berakhah_children-care2.jpg')] bg-cover bg-center h-[60vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Our</span>
                <span className="block text-amber-400">Programmes</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Comprehensive support for children and communities in Uganda
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programmes Introduction */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Approach
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Holistic Care and Development
            </p>
            <div className="mt-6 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              <p>
                At Berakhah ChildCare, we believe in addressing the whole child
                and the whole community. Our programmes work together to provide
                comprehensive support that meets physical, emotional,
                educational, and spiritual needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programmes Detail */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programmes.map((programme, index) => (
              <div
                key={programme.id}
                id={programme.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div
                  className={`${
                    index % 2 === 0 ? "md:flex" : "md:flex md:flex-row-reverse"
                  }`}
                >
                  <div className="md:flex-shrink-0 md:w-2/5">
                    <img
                      className="h-64 w-full object-cover md:h-full md:w-full"
                      src={programme.image}
                      alt={programme.title}
                    />
                  </div>
                  <div className="p-8 md:w-3/5">
                    <div className="flex items-center">
                      <div
                        className={`${programme.color} p-3 rounded-full text-2xl mr-4`}
                      >
                        {programme.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {programme.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-gray-500 leading-relaxed">
                      {programme.longDescription}
                    </p>
                    <div className="mt-6">
                      <a
                        href="#contact"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Support This Programme
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Want to support our work?</span>
              <span className="block text-amber-400">Get involved today</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#donate"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100"
                >
                  Donate Now
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600"
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

export default Programmes;
