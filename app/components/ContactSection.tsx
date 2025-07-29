
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length > 500) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      detail: 'Bukidnon, Philippines',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      detail: 'jedi.bentillo@email.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-time-line',
      title: 'Response Time',
      detail: 'Within 24 hours',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jedi-bentillo',
      icon: 'ri-linkedin-fill',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Upwork',
      url: 'https://upwork.com/freelancers/jedi-bentillo',
      icon: 'ri-briefcase-fill',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@jedibentillo',
      icon: 'ri-tiktok-fill',
      color: 'bg-black hover:bg-gray-800'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Jedi26',
      icon: 'ri-github-fill',
      color: 'bg-gray-900 hover:bg-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-teal-400/30">
            <i className="ri-message-3-line mr-2"></i>
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to bring your creative vision to life? Let's collaborate and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Intro */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Create Together</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need content creation, design work, photography, or just want to discuss 
                ideas, I'd love to hear from you.
              </p>
              <div className="flex items-center text-teal-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">Available for projects</span>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-300 group">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                      <i className={`${method.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-white/60">{method.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h4 className="font-bold text-white mb-6 flex items-center">
                <i className="ri-links-line mr-2"></i>
                Connect With Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center ${social.color} text-white p-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap`}
                  >
                    <i className={`${social.icon} mr-2 text-lg group-hover:scale-110 transition-transform`}></i>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-mail-send-line text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
            </div>

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-white/50 text-sm backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-white/50 text-sm backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Project Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-white/50 text-sm backdrop-blur-sm"
                  placeholder="What's this project about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  maxLength={500}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-white/50 text-sm resize-none backdrop-blur-sm ${
                    formData.message.length > 500 ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Tell me about your project, goals, and how I can help..."
                ></textarea>
                <div className={`text-right text-sm mt-1 ${
                  formData.message.length > 500 ? 'text-red-400' : 'text-white/50'
                }`}>
                  {formData.message.length}/500
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="group w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="mr-2">Send Message</span>
                    <i className="ri-send-plane-fill group-hover:translate-x-1 transition-transform"></i>
                  </span>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 text-green-300 backdrop-blur-sm">
                  <i className="ri-check-circle-fill mr-2"></i>
                  Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 text-red-300 backdrop-blur-sm">
                  <i className="ri-error-warning-fill mr-2"></i>
                  Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-white/10">
          <p className="text-white/50 mb-4">© 2024 Jedi Cristal Bentillo. All rights reserved.</p>
          <p className="text-white/70">
            Made with <i className="ri-heart-fill text-red-400 mx-1"></i> in Bukidnon, Philippines
          </p>
        </div>
      </div>
    </section>
  );
}
