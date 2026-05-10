import { Button } from "@/components/ui/button";
import { ChevronRight, Building2, Hammer, Droplet, Briefcase, Wrench, ArrowRight, Star, Users, Award, CheckCircle2 } from "lucide-react";
import { useState } from "react";

/**
 * Vira Sidiqi - Modern Professional Construction Website
 * Design: Minimalist, sophisticated, matching modern websites
 * Colors: Navy Blue (#1B3A5C), Crimson Red (#C41E3A), Light backgrounds
 * Animations: Smooth hover effects, zoom on images, transitions
 */

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Innovative and sustainable architectural solutions",
    },
    {
      icon: Hammer,
      title: "Structural Engineering",
      description: "Expert structural design ensuring safety and durability",
    },
    {
      icon: Droplet,
      title: "Water & Sewer Design",
      description: "Comprehensive water management systems",
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "Professional oversight from planning to completion",
    },
    {
      icon: Wrench,
      title: "Construction Execution",
      description: "High-quality construction with precision",
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      category: "Residential",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663471057993/2LTWD6LUdoHaf4EsgkcxFU/vira-project-residential-eQqsGthBMigFuEdXfaArYs.webp",
      year: "2023"
    },
    {
      id: 2,
      title: "Corporate Office Building",
      category: "Commercial",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663471057993/2LTWD6LUdoHaf4EsgkcxFU/vira-project-commercial-e5X4GvWT6hh432vLXg5Z7g.webp",
      year: "2023"
    },
    {
      id: 3,
      title: "Infrastructure Bridge Project",
      category: "Infrastructure",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663471057993/2LTWD6LUdoHaf4EsgkcxFU/vira-project-infrastructure-dwXKDCryLZa5Jb4MZEwogn.webp",
      year: "2022"
    },
    {
      id: 4,
      title: "Water Treatment Facility",
      category: "Water & Sewer",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663471057993/2LTWD6LUdoHaf4EsgkcxFU/vira-project-water-sewer-Zs7ckGK4ueFBTfmdAyzksX.webp",
      year: "2022"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "20+", label: "Years Experience" },
    { number: "80+", label: "Team Members" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-blue-900">Vira Sidiqi</h1>
              <p className="text-xs text-red-600 font-semibold">Engineering</p>
            </div>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-gray-700 hover:text-blue-900 transition font-medium text-sm">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-900 transition font-medium text-sm">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-900 transition font-medium text-sm">Services</a>
            <a href="/projects" className="text-gray-700 hover:text-blue-900 transition font-medium text-sm">Projects</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-900 transition font-medium text-sm">Contact</a>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white text-sm h-9">
            Get Quote
          </Button>
        </div>
      </nav>

      {/* Hero Section with Dynamic Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663471057993/2LTWD6LUdoHaf4EsgkcxFU/vira-hero-construction-ezw3DaKKJQ3ifNBzzL7En7.webp')",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-left">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Building <span className="text-red-500">Excellence</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Professional construction and engineering solutions delivering quality, innovation, and reliability
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white hover:shadow-lg transition-all">
                View Our Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                  {stat.number}
                </div>
                <p className="text-blue-100 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Our Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-red-200 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-blue-900/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <Icon className="w-12 h-12 mb-4 text-red-600 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold mb-2 text-blue-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a href="/projects" key={project.id}>
                <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-80">
                  <div className="relative overflow-hidden h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-colors duration-300"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <span className="inline-block w-fit bg-red-600 px-3 py-1 rounded-full text-xs font-semibold mb-3 group-hover:bg-red-700 transition-colors">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-red-300 transition-colors">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.year}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/projects">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Why Choose Vira Sidiqi</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-8"></div>
              <ul className="space-y-4">
                {[
                  "20+ years of industry expertise",
                  "Certified and industry-recognized",
                  "On-time and on-budget delivery",
                  "Transparent communication",
                  "Safety and quality commitment",
                  "Innovative solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-3xl font-bold mb-6">Ready to Start?</h3>
              <p className="text-blue-100 mb-8">
                Contact us today for a consultation and let's bring your vision to life.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full">
                Get Your Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-lg text-red-100 mb-8">Get in touch with our team today</p>
          <a href="/contact">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Vira Sidiqi</h4>
              <p className="text-blue-100 text-sm">Professional construction and engineering solutions.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition">Services</a></li>
                <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-blue-100 text-sm">
                Phone: +1 (555) 123-4567<br />
                Email: info@virasidiqi.com
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-100 text-sm">
            <p>&copy; 2024 Vira Sidiqi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
