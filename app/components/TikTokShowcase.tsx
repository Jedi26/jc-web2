
'use client';

import { useState } from 'react';

export default function TikTokShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const tiktokVideos = [
    {
      id: 1,
      title: 'Creative Design Process',
      views: '12.5K',
      likes: '2.1K',
      thumbnail: 'https://readdy.ai/api/search-image?query=creative%20design%20process%20behind%20the%20scenes%2C%20graphic%20designer%20working%20on%20colorful%20project%2C%20modern%20workspace%20with%20design%20tools%20and%20sketches%2C%20vibrant%20creative%20energy&width=300&height=400&seq=tiktok-1&orientation=portrait'
    },
    {
      id: 2,
      title: 'Photography Tips & Tricks',
      views: '8.7K',
      likes: '1.8K',
      thumbnail: 'https://readdy.ai/api/search-image?query=photography%20tutorial%20setup%20with%20professional%20camera%20equipment%2C%20natural%20lighting%20techniques%20demonstration%2C%20photographer%20teaching%20composition%20rules%2C%20educational%20content%20creation&width=300&height=400&seq=tiktok-2&orientation=portrait'
    },
    {
      id: 3,
      title: 'Content Creation Journey',
      views: '15.2K',
      likes: '3.2K',
      thumbnail: 'https://readdy.ai/api/search-image?query=content%20creator%20storytelling%20session%2C%20person%20sharing%20creative%20journey%20on%20camera%2C%20inspiring%20motivational%20content%20about%20pursuing%20dreams%2C%20authentic%20personal%20brand%20building&width=300&height=400&seq=tiktok-3&orientation=portrait'
    },
    {
      id: 4,
      title: 'Quick Design Challenge',
      views: '6.8K',
      likes: '1.4K',
      thumbnail: 'https://readdy.ai/api/search-image?query=rapid%20design%20challenge%20in%20action%2C%20designer%20creating%20logo%20in%20time-lapse%20format%2C%20creative%20process%20speed%20run%20with%20digital%20tools%2C%20artistic%20productivity%20demonstration&width=300&height=400&seq=tiktok-4&orientation=portrait'
    },
    {
      id: 5,
      title: 'BTS Video Production',
      views: '11.3K',
      likes: '2.5K',
      thumbnail: 'https://readdy.ai/api/search-image?query=behind%20the%20scenes%20video%20production%20setup%2C%20filmmaker%20with%20professional%20equipment%2C%20movie%20making%20process%20with%20lights%20and%20cameras%2C%20creative%20storytelling%20in%20progress&width=300&height=400&seq=tiktok-5&orientation=portrait'
    },
    {
      id: 6,
      title: 'Educational Content Tips',
      views: '9.4K',
      likes: '1.9K',
      thumbnail: 'https://readdy.ai/api/search-image?query=educator%20creating%20engaging%20online%20content%2C%20teaching%20setup%20with%20presentation%20materials%2C%20knowledge%20sharing%20session%20with%20modern%20technology%2C%20inspiring%20learning%20environment&width=300&height=400&seq=tiktok-6&orientation=portrait'
    }
  ];

  return (
    <section id="tiktok" className="py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-pink-400/30">
            <i className="ri-tiktok-line mr-2"></i>
            Popular Content
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            TikTok <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover my most popular TikTok content featuring design tips, creative processes, and educational content
          </p>
        </div>

        {/* TikTok Profile Stats */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">@jedibentillo</div>
                <div className="text-white/60 text-sm">Follow for more content</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">125K</div>
                  <div className="text-white/60 text-sm">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">2.3M</div>
                  <div className="text-white/60 text-sm">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">89</div>
                  <div className="text-white/60 text-sm">Videos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiktokVideos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-pink-400/50 transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => setSelectedVideo(video.thumbnail)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover object-top transition-transform group-hover:scale-110"
                />
                
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                    <i className="ri-play-fill text-white text-2xl ml-1"></i>
                  </div>
                </div>

                {/* TikTok branding */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                  <i className="ri-tiktok-fill text-white text-lg"></i>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  {video.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-white/60">
                  <div className="flex items-center">
                    <i className="ri-eye-line mr-1"></i>
                    {video.views}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-heart-line mr-1"></i>
                    {video.likes}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://tiktok.com/@jedibentillo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-tiktok-fill mr-3 text-xl group-hover:scale-110 transition-transform"></i>
            <span className="mr-2">Follow on TikTok</span>
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        {/* Video Lightbox */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-sm max-h-full">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors text-white z-10"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
              <img
                src={selectedVideo}
                alt="TikTok Video"
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
