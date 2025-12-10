'use client';

import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const projects = [
  {
    title: 'Corporate Campus Design',
    location: 'Plano, TX',
    category: 'Commercial Landscaping',
    description: 'Complete landscape design and installation for corporate headquarters.',
    image: '/images/commercial/landscape design/Commercial-Landscape-Design-Alexandria-VA.jpg',
  },
  {
    title: 'Retail Center Maintenance',
    location: 'Frisco, TX',
    category: 'Maintenance',
    description: 'Weekly grounds maintenance and seasonal color for shopping center.',
    image: '/images/commercial/commercial landscaping/commercial-landscaping.jpg',
  },
  {
    title: 'Office Park Tree Planting',
    location: 'Irving, TX',
    category: 'Tree Services',
    description: 'Large scale shade tree installation for parking lot compliance.',
    image: '/images/commercial/commercial tree planting/plant-commercial.jpg',
  },
  {
    title: 'HOA Irrigation Upgrade',
    location: 'Southlake, TX',
    category: 'Irrigation',
    description: 'Smart irrigation system installation for large residential community.',
    image: '/images/commercial/commercial irrigation/commercial-irrigation-system.jpg',
  },
  {
    title: 'Commercial Mulch Install',
    location: 'Fort Worth, TX',
    category: 'Maintenance',
    description: 'Bulk mulch installation for business park landscape beds.',
    image: '/images/commercial/commercial mulch install/commercial-mulch.jpg',
  },
  {
    title: 'New Development Sod',
    location: 'Dallas, TX',
    category: 'Commercial Landscaping',
    description: 'Large area sod installation for new commercial construction.',
    image: '/images/commercial/commercial sod/SOD-INSTALTIION.jpg',
  },
];

const categories = ['All', 'Commercial Landscaping', 'Maintenance', 'Tree Services', 'Irrigation'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section-padding bg-stone-100" id="projects">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-stone-600">
            See how we help businesses across DFW maintain professional and inviting properties.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-forest-700 text-white shadow-lg'
                  : 'bg-white text-stone-600 hover:bg-forest-50 hover:text-forest-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="text-forest-300 text-sm font-medium mb-1">{project.category}</span>
                  <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-stone-300 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center gap-1 text-stone-400 text-sm">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                </div>
              </div>
              
              {/* Default Content */}
              <div className="p-5 group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-forest-600 text-sm font-medium">{project.category}</span>
                  <div className="flex items-center gap-1 text-stone-400 text-sm">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-forest-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
