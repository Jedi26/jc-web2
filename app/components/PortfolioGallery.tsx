
'use client';

import { useState, useEffect } from 'react';

interface PortfolioImage {
  id: string;
  url: string;
  title: string;
  category: string;
  youtubeLink?: string;
}

export default function PortfolioGallery() {
  const [activeTab, setActiveTab] = useState('photography');
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tabs = [
    { id: 'photography', label: 'Photography', icon: 'ri-camera-line', color: 'from-purple-500 to-pink-500' },
    { id: 'design', label: 'Design', icon: 'ri-palette-line', color: 'from-cyan-500 to-blue-500' },
    { id: 'video', label: 'Video', icon: 'ri-video-line', color: 'from-green-500 to-teal-500' }
  ];

  // Your actual portfolio images from GitHub
  const portfolioData = {
    photography: [
      {
        id: 'jediPh1',
        url: 'https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/photography/jediPh1.jpg',
        title: 'Professional Photography',
        category: 'Portrait Photography'
      },
      {
        id: 'jediPh2',
        url: 'https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/photography/jediPh2.jpg',
        title: 'Creative Photography',
        category: 'Artistic Photography'
      },
      {
        id: 'jediPh3',
        url: 'https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/photography/jediPh3.jpg',
        title: 'Photography Portfolio',
        category: 'Professional Photography'
      }
    ],
    design: [
      {
        id: 'dsgnImg1',
        url: 'https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/design/dsgnImg1.jpg',
        title: 'Design Project 1',
        category: 'Creative Design'
      },
      {
        id: 'dsgnImg2',
        url: 'https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/design/dsgnImg2.jpg',
        title: 'Design Project 2',
        category: 'Visual Design'
      },
      {
        id: 'dsgnImg3',
        url: 'https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/design/dsgnImg3.jpg',
        title: 'Design Project 3',
        category: 'Graphic Design'
      },
      {
        id: 'dsgnImg4',
        url: 'https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/design/dsgnImg4.jpg',
        title: 'Design Project 4',
        category: 'Digital Design'
      }
    ],
    video: [
      {
        id: 'vidImg1',
        url: 'https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/video/vidImg1.jpg',
        title: 'Video Project 1',
        category: 'Video Production',
        youtubeLink: 'https://youtu.be/PTaIl8p0sNQ?si=aRqGppNMY0owtj2e'
      },
      {
        id: 'vidImg2',
        url: 'https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/video/vidImg2.jpg',
        title: 'Video Project 2',
        category: 'Video Content',
        youtubeLink: 'https://youtu.be/oue2wFxgvBA?feature=shared'
      }
    ]
  };

  useEffect(() => {
    setLoading(true);
    // Simulate loading time
    setTimeout(() => {
      setImages(portfolioData[activeTab as keyof typeof portfolioData] || []);
      setLoading(false);
    }, 500);
  }, [activeTab]);

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const handleImageClick = (image: PortfolioImage) => {
    if (image.youtubeLink) {
      window.open(image.youtubeLink, '_blank');
    } else {
      setSelectedImage(image.url);
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
            <i className="ri-gallery-line mr-2"></i>
            Creative Work
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Portfolio <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore my creative work across photography, design, and video production
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center px-6 py-4 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg transform scale-105`
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <i className={`${tab.icon} text-lg mr-2 group-hover:scale-110 transition-transform`}></i>
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Stats */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20">
            <i className={`${activeTabData?.icon} text-xl mr-3`}></i>
            <span className="text-white font-medium mr-4">{activeTabData?.label} Collection</span>
            <div className="w-px h-4 bg-white/30 mx-3"></div>
            <span className="text-white/70">{images.length} items</span>
          </div>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 animate-pulse">
                <div className="w-full h-64 bg-white/20"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2"
                onClick={() => handleImageClick(image)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-125"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="text-white">
                          <div className="text-sm font-medium">{image.title}</div>
                          <div className="text-xs text-white/70">{image.category}</div>
                        </div>
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <i className={`${image.youtubeLink ? 'ri-youtube-line' : 'ri-eye-line'} text-white`}></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <div className={`bg-gradient-to-r ${activeTabData?.color} px-3 py-1 rounded-full text-white text-xs font-medium backdrop-blur-sm`}>
                      <i className={`${activeTabData?.icon} mr-1`}></i>
                      {activeTabData?.label}
                    </div>
                  </div>

                  {/* YouTube Badge for Video Items */}
                  {image.youtubeLink && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-red-600/90 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-medium">
                        <i className="ri-youtube-fill mr-1"></i>
                        YouTube
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white z-10 border border-white/20"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Portfolio item"
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        <div className="mt-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30">
          <div className="flex items-center justify-center">
            <i className="ri-check-line text-green-400 text-2xl mr-3"></i>
            <span className="text-white font-medium">Successfully integrated with GitHub + JSDelivr CDN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
