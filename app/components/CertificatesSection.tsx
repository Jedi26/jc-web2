
'use client';

import { useState } from 'react';

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificates = [
    {
      id: 'jediCert1',
      title: 'Professional Certificate',
      issuer: 'Professional Institution',
      date: '2024',
      image: 'https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/certificate/jediCert1.jpg',
      description: 'Advanced professional certification in technology and innovation'
    },
    {
      id: 'jediCert2',
      title: 'Technical Certification',
      issuer: 'Technical Authority',
      date: '2024',
      image: 'https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/certificate/jediCert2.jpg',
      description: 'Specialized technical certification for industry expertise'
    }
  ];

  return (
    <section id="certificates" className="py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
            <i className="ri-medal-line mr-2"></i>
            Professional Credentials
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Certificates & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2"
              onClick={() => setSelectedCertificate(cert.image)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        <div className="text-lg font-bold mb-1">{cert.title}</div>
                        <div className="text-sm text-white/80 mb-2">{cert.issuer}</div>
                        <div className="text-xs text-white/60">{cert.description}</div>
                      </div>
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <i className="ri-eye-line text-white text-lg"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                    <i className="ri-calendar-line mr-1"></i>
                    {cert.date}
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <div className="flex items-center text-white/70 mb-3">
                  <i className="ri-building-line mr-2"></i>
                  <span className="mr-4">{cert.issuer}</span>
                  <i className="ri-calendar-line mr-2"></i>
                  <span>{cert.date}</span>
                </div>
                <p className="text-white/60 text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Lightbox */}
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-12 right-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white z-10 border border-white/20"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
              <div className="relative">
                <img
                  src={selectedCertificate}
                  alt="Certificate"
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        )}

        {/* Achievement Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-medal-line text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{certificates.length}</div>
            <div className="text-white/70">Professional Certificates</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-trophy-line text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-white/70">Completion Rate</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-star-line text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-white mb-2">2024</div>
            <div className="text-white/70">Latest Achievement</div>
          </div>
        </div>
      </div>
    </section>
  );
}
