
'use client';

import { useState, useEffect } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/Jedi26/repos?sort=updated&per_page=6');
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      // Fallback data for demonstration
      setRepos([
        {
          id: 1,
          name: 'Portfolio-Website',
          description: 'Personal portfolio website built with Next.js and React featuring modern design',
          html_url: 'https://github.com/Jedi26/Portfolio-Website',
          language: 'TypeScript',
          stargazers_count: 15,
          forks_count: 3,
          updated_at: '2024-01-15T10:30:00Z'
        },
        {
          id: 2,
          name: 'Design-Tools-Collection',
          description: 'Comprehensive collection of design tools and utilities for creative professionals',
          html_url: 'https://github.com/Jedi26/Design-Tools',
          language: 'JavaScript',
          stargazers_count: 8,
          forks_count: 2,
          updated_at: '2024-01-10T14:20:00Z'
        },
        {
          id: 3,
          name: 'Content-Creator-Kit',
          description: 'Complete toolkit with resources and automation tools for content creators',
          html_url: 'https://github.com/Jedi26/Content-Creator-Kit',
          language: 'Python',
          stargazers_count: 12,
          forks_count: 5,
          updated_at: '2024-01-05T09:15:00Z'
        },
        {
          id: 4,
          name: 'Photography-Manager',
          description: 'Professional photography workflow management system with client portal',
          html_url: 'https://github.com/Jedi26/Photography-Manager',
          language: 'React',
          stargazers_count: 6,
          forks_count: 1,
          updated_at: '2023-12-28T16:45:00Z'
        },
        {
          id: 5,
          name: 'Video-Editor-Scripts',
          description: 'Automation scripts and plugins for video editing workflow optimization',
          html_url: 'https://github.com/Jedi26/Video-Editor-Scripts',
          language: 'Python',
          stargazers_count: 9,
          forks_count: 3,
          updated_at: '2023-12-20T11:20:00Z'
        },
        {
          id: 6,
          name: 'Social-Media-Scheduler',
          description: 'Multi-platform social media content scheduling and analytics dashboard',
          html_url: 'https://github.com/Jedi26/Social-Media-Scheduler',
          language: 'JavaScript',
          stargazers_count: 14,
          forks_count: 4,
          updated_at: '2023-12-15T13:30:00Z'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-purple-500',
      React: 'bg-cyan-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <section id="github" className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-64 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="ri-code-line mr-2"></i>
            Open Source Projects
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            GitHub <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my latest coding projects and open-source contributions
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 flex items-center">
                  <i className="ri-github-fill mr-2"></i>
                  @Jedi26
                </div>
                <div className="text-gray-500 text-sm">GitHub Profile</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">45</div>
                  <div className="text-gray-500 text-sm">Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">128</div>
                  <div className="text-gray-500 text-sm">Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600">67</div>
                  <div className="text-gray-500 text-sm">Contributions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <div
              key={repo.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-folder-3-line text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {repo.name}
                      </h3>
                      <div className="text-xs text-gray-500">
                        Updated {new Date(repo.updated_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-100 transition-colors group"
                  >
                    <i className="ri-external-link-line text-gray-600 group-hover:text-blue-600"></i>
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-[3rem]">
                  {repo.description || 'No description available'}
                </p>

                {/* Tech Stack & Stats */}
                <div className="flex items-center justify-between mb-4">
                  {repo.language && (
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 ${getLanguageColor(repo.language)}`}></div>
                      <span className="text-sm text-gray-600 font-medium">{repo.language}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <i className="ri-star-line mr-1"></i>
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center">
                      <i className="ri-git-branch-line mr-1"></i>
                      {repo.forks_count}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors justify-center whitespace-nowrap"
                >
                  <span className="mr-2">View Project</span>
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Jedi26"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-github-fill mr-3 text-xl group-hover:scale-110 transition-transform"></i>
            <span className="mr-2">View All Projects</span>
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
