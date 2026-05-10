import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      category: "Residential",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663471057993/2LTWD6LUdoHaf4EsgkcxFU/vira-project-residential-eQqsGthBMigFuEdXfaArYs.webp",
      description: "Contemporary residential development with modern architecture",
      year: "2023",
      client: "Premium Living Developers"
    },
    {
      id: 2,
      title: "Corporate Office Building",
      category: "Commercial",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663471057993/2LTWD6LUdoHaf4EsgkcxFU/vira-project-commercial-e5X4GvWT6hh432vLXg5Z7g.webp",
      description: "State-of-the-art commercial office space with modern facilities",
      year: "2023",
      client: "Tech Innovation Corp"
    },
    {
      id: 3,
      title: "Infrastructure Bridge Project",
      category: "Infrastructure",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663471057993/2LTWD6LUdoHaf4EsgkcxFU/vira-project-infrastructure-dwXKDCryLZa5Jb4MZEwogn.webp",
      description: "Major bridge infrastructure showcasing engineering excellence",
      year: "2022",
      client: "National Infrastructure Authority"
    },
    {
      id: 4,
      title: "Water Treatment Facility",
      category: "Water & Sewer",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663471057993/2LTWD6LUdoHaf4EsgkcxFU/vira-project-water-sewer-Zs7ckGK4ueFBTfmdAyzksX.webp",
      description: "Advanced water treatment facility with environmental technology",
      year: "2022",
      client: "Municipal Water Authority"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "water-sewer", label: "Water & Sewer" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VS</span>
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
            <a href="/contact" className="text-gray-700 hover:text-blue-900 transition font-medium text-sm">Contact</a>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white text-sm h-9">
            Get Quote
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <div className="w-20 h-1 bg-red-600"></div>
          <p className="text-xl text-blue-100 mt-6 max-w-2xl">Explore our portfolio of completed and ongoing projects showcasing our expertise and commitment to excellence.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-blue-900" />
            <span className="font-semibold text-blue-900">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === cat.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-red-700 transition-colors">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900 group-hover:text-red-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      <p className="font-semibold text-gray-700">{project.client}</p>
                      <p>{project.year}</p>
                    </div>
                    <button className="text-red-600 hover:text-red-700 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-lg text-blue-100 mb-8">Let's discuss how we can help bring your vision to life.</p>
          <a href="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Vira Sidiqi</h4>
              <p className="text-gray-400 text-sm">Professional construction and engineering solutions.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/services" className="hover:text-white transition">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">
                Phone: +1 (555) 123-4567<br />
                Email: info@virasidiqi.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Vira Sidiqi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
