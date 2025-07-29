
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-cyan-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="ri-user-line mr-2"></i>
            Get to know me
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-music-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Musical Beginnings</h3>
                    <p className="text-gray-600 leading-relaxed">
                      My creative journey began as a Drum & Bugle Corps scholar at Liceo de Cagayan, where I discovered my passion for performance and artistic expression.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-global-line text-cyan-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Global Perspective</h3>
                    <p className="text-gray-600 leading-relaxed">
                      An incredible exchange student experience in South Korea broadened my cultural perspective and shaped my creative worldview.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-briefcase-line text-pink-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Professional Growth</h3>
                    <p className="text-gray-600 leading-relaxed">
                      From university photographer to Customer Service Rep and Senior Sales & Marketing Manager in Manila and Davao - each role taught me valuable skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-home-heart-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Back to Roots</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Now in Bukidnon with my family, I continue creating content, designing, and educating others while staying true to my values.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-white p-4 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-purple-600">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center bg-white p-4 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-cyan-600">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center bg-white p-4 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-pink-600">100+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative">
              {/* Main image container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20creative%20professional%20workspace%20in%20Philippines%20with%20contemporary%20design%2C%20clean%20minimalist%20setup%20with%20photography%20equipment%2C%20design%20tools%2C%20natural%20lighting%20streaming%20through%20windows%2C%20plants%20and%20personal%20touches%20creating%20inspiring%20atmosphere%20for%20content%20creation&width=600&height=700&seq=about-workspace&orientation=portrait"
                  alt="Creative workspace"
                  className="w-full h-96 object-cover object-top"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-gradient-to-r from-purple-500 to-cyan-500 p-6 rounded-2xl shadow-2xl text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">Creating</div>
                  <div className="text-sm opacity-90">Since 2016</div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-400 to-cyan-400 rounded-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
