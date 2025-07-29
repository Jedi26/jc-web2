
'use client';

export default function WorkTimeline() {
  const timelineItems = [
    {
      year: '2024',
      title: 'Content Creator & Educator',
      company: 'Freelance - Bukidnon',
      description: 'Returned to Bukidnon with family, focusing on content creation, design work, and educational content. Building online presence through TikTok and various creative projects.',
      image: 'https://readdy.ai/api/search-image?query=modern%20home%20office%20workspace%20in%20Philippines%20with%20content%20creation%20setup%2C%20professional%20lighting%20equipment%2C%20camera%20gear%2C%20and%20family%20photos%2C%20inspiring%20creative%20environment%20with%20natural%20lighting&width=400&height=300&seq=timeline-2024&orientation=landscape',
      icon: 'ri-home-heart-fill',
      color: 'from-green-500 to-teal-500'
    },
    {
      year: '2020-2023',
      title: 'Senior Sales & Marketing Manager',
      company: 'Corporate - Davao City',
      description: 'Led strategic sales and marketing initiatives, developed comprehensive marketing campaigns, and managed client relationships. Enhanced leadership skills and business development expertise.',
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20office%20in%20Davao%20City%20with%20modern%20corporate%20environment%2C%20marketing%20team%20meetings%2C%20strategic%20planning%20sessions%2C%20contemporary%20office%20space%20with%20city%20views&width=400&height=300&seq=timeline-2020&orientation=landscape',
      icon: 'ri-briefcase-fill',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2018-2020',
      title: 'Customer Service Representative',
      company: 'Call Center - Manila',
      description: 'Developed exceptional communication skills while handling international client accounts. Gained valuable experience in customer relations and problem-solving in fast-paced environment.',
      image: 'https://readdy.ai/api/search-image?query=modern%20call%20center%20office%20in%20Manila%20Philippines%20with%20professional%20customer%20service%20workstations%2C%20headsets%20and%20computers%2C%20busy%20urban%20business%20environment%20with%20team%20collaboration&width=400&height=300&seq=timeline-2018&orientation=landscape',
      icon: 'ri-customer-service-2-fill',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2016-2018',
      title: 'University Photographer',
      company: 'Liceo de Cagayan University',
      description: 'Served as official university photographer, capturing academic events, graduations, and campus life. Developed technical photography skills and creative storytelling abilities.',
      image: 'https://readdy.ai/api/search-image?query=university%20photography%20session%20at%20Filipino%20campus%20with%20students%20in%20graduation%20ceremony%2C%20academic%20events%20documentation%2C%20professional%20photographer%20with%20camera%20equipment%20capturing%20memorable%20moments&width=400&height=300&seq=timeline-2016&orientation=landscape',
      icon: 'ri-camera-fill',
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2015',
      title: 'Exchange Student',
      company: 'South Korea',
      description: 'Participated in cultural exchange program in South Korea, broadening international perspective and developing cross-cultural communication skills. Life-changing experience that shaped worldview.',
      image: 'https://readdy.ai/api/search-image?query=cultural%20exchange%20experience%20in%20South%20Korea%20with%20Filipino%20student%20exploring%20Korean%20traditional%20architecture%2C%20cultural%20landmarks%2C%20international%20education%20program%20with%20beautiful%20Korean%20scenery%20and%20cultural%20integration&width=400&height=300&seq=timeline-2015&orientation=landscape',
      icon: 'ri-global-fill',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      year: '2014',
      title: 'Drum & Bugle Corps Scholar',
      company: 'Liceo de Cagayan University',
      description: 'Began creative journey as a scholar in the Drum & Bugle Corps program. Developed discipline, teamwork, and performance skills that would foundation for future creative endeavors.',
      image: 'https://readdy.ai/api/search-image?query=drum%20and%20bugle%20corps%20performance%20at%20Filipino%20university%20with%20musicians%20in%20colorful%20uniforms%2C%20marching%20band%20formation%20on%20campus%20grounds%2C%20musical%20instruments%20and%20team%20coordination%20showcase&width=400&height=300&seq=timeline-2014&orientation=landscape',
      icon: 'ri-music-fill',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="timeline" className="py-32 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="ri-road-map-line mr-2"></i>
            Career Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional evolution from music scholar to content creator
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-cyan-400 hidden lg:block"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-12 space-y-6 lg:space-y-0`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                        <i className={`${item.icon} mr-2`}></i>
                        {item.year}
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <i className={`${item.icon} text-white text-lg`}></i>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-purple-600 font-medium mb-3">{item.company}</div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Node (Desktop) */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white`}>
                    <i className={`${item.icon} text-white text-xl`}></i>
                  </div>
                </div>

                {/* Image Card */}
                <div className="flex-1 max-w-lg">
                  <div className="relative group">
                    <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <img
                        src={item.image}
                        alt={`${item.title} at ${item.company}`}
                        className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="text-sm font-medium">{item.company}</div>
                          <div className="text-xs opacity-80">{item.year}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${item.color} rounded-full opacity-20 group-hover:scale-110 transition-transform`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Years Journey</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-cyan-600 mb-2">6</div>
              <div className="text-gray-600">Major Roles</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-pink-600 mb-2">3</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
              <div className="text-gray-600">Dream Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
