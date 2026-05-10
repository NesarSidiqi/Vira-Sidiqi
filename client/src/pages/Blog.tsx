import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const articles = [
    {
      id: 1,
      title: "The Future of Sustainable Construction",
      excerpt: "Exploring how green building practices are transforming the construction industry and creating sustainable communities.",
      category: "Industry News",
      author: "Dr. Vira Sidiqi",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "🌱"
    },
    {
      id: 2,
      title: "Project Management Best Practices in 2024",
      excerpt: "Learn the latest techniques and tools for managing complex construction projects efficiently and effectively.",
      category: "Company Updates",
      author: "Eng. Mohammad Hassan",
      date: "May 10, 2024",
      readTime: "7 min read",
      image: "📊"
    },
    {
      id: 3,
      title: "Structural Engineering Innovations",
      excerpt: "Discover cutting-edge technologies and methodologies revolutionizing structural design and construction.",
      category: "Industry News",
      author: "Arch. Leila Ahmadi",
      date: "May 5, 2024",
      readTime: "6 min read",
      image: "🏗️"
    },
    {
      id: 4,
      title: "Water Management Systems for Modern Cities",
      excerpt: "How advanced water infrastructure is essential for sustainable urban development and environmental protection.",
      category: "Industry News",
      author: "Eng. Karim Al-Rashid",
      date: "April 28, 2024",
      readTime: "8 min read",
      image: "💧"
    },
    {
      id: 5,
      title: "Vira Sidiqi Wins Industry Excellence Award",
      excerpt: "We're proud to announce our recognition for outstanding contributions to the construction and engineering sector.",
      category: "Company Updates",
      author: "Dr. Vira Sidiqi",
      date: "April 20, 2024",
      readTime: "4 min read",
      image: "🏆"
    },
    {
      id: 6,
      title: "Safety Standards in Construction Sites",
      excerpt: "Best practices and regulations ensuring worker safety and project success in modern construction environments.",
      category: "Industry News",
      author: "Safety Team",
      date: "April 15, 2024",
      readTime: "6 min read",
      image: "⚠️"
    }
  ];

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "industry-news", label: "Industry News" },
    { id: "company-updates", label: "Company Updates" }
  ];

  const filteredArticles = activeCategory === "all"
    ? articles
    : articles.filter(a => a.category.toLowerCase().replace(/\s+/g, "-") === activeCategory);

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
            <a href="/projects" className="text-gray-700 hover:text-blue-900 transition font-medium text-sm">Projects</a>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white text-sm h-9">
            Get Quote
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & News</h1>
          <div className="w-20 h-1 bg-red-600"></div>
          <p className="text-xl text-blue-100 mt-6 max-w-2xl">Stay updated with the latest construction trends, industry insights, and company news.</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
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

      {/* Articles Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {article.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900 group-hover:text-red-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-600">{article.author}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-8">Get the latest construction industry insights and company updates delivered to your inbox.</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Subscribe
            </Button>
          </div>
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
                <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
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
