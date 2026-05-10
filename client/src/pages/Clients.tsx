import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Quote } from "lucide-react";

export default function Clients() {
  const testimonials = [
    {
      id: 1,
      quote: "Vira Sidiqi delivered exceptional results on our residential project. Their professionalism and attention to detail were outstanding.",
      author: "Ahmed Hassan",
      company: "Premium Living Developers",
      rating: 5,
      image: "👨‍💼"
    },
    {
      id: 2,
      quote: "The team's expertise in structural engineering and project management made our commercial building a success.",
      author: "Fatima Al-Mansouri",
      company: "Tech Innovation Corp",
      rating: 5,
      image: "👩‍💼"
    },
    {
      id: 3,
      quote: "Outstanding infrastructure work. They completed the bridge project on time and within budget with excellent quality.",
      author: "Mohammed Al-Rashid",
      company: "National Infrastructure Authority",
      rating: 5,
      image: "👨‍💼"
    },
    {
      id: 4,
      quote: "Professional, reliable, and innovative. Vira Sidiqi exceeded our expectations on every level.",
      author: "Leila Ahmadi",
      company: "Environmental Solutions Inc",
      rating: 5,
      image: "👩‍💼"
    },
    {
      id: 5,
      quote: "Their water treatment facility design was cutting-edge. Highly recommended for any major project.",
      author: "Hassan Al-Makki",
      company: "Municipal Water Authority",
      rating: 5,
      image: "👨‍💼"
    },
    {
      id: 6,
      quote: "Best construction partner we've worked with. Transparent, professional, and results-driven.",
      author: "Noor Al-Zahra",
      company: "Urban Development Group",
      rating: 5,
      image: "👩‍💼"
    }
  ];

  const clients = [
    "Premium Living Developers",
    "Tech Innovation Corp",
    "National Infrastructure Authority",
    "Municipal Water Authority",
    "Environmental Solutions Inc",
    "Urban Development Group",
    "Commercial Properties Ltd",
    "Infrastructure Partners"
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Clients</h1>
          <div className="w-20 h-1 bg-red-600"></div>
          <p className="text-xl text-blue-100 mt-6 max-w-2xl">Trusted by leading organizations across residential, commercial, and infrastructure sectors.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Client Testimonials</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-red-600/20" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Our Clients</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center text-center min-h-24"
              >
                <p className="font-semibold text-gray-700 group-hover:text-red-600 transition-colors">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-bold mb-2 group-hover:text-red-400 transition-colors">50+</div>
              <p className="text-blue-100">Active Clients</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-bold mb-2 group-hover:text-red-400 transition-colors">98%</div>
              <p className="text-blue-100">Satisfaction Rate</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-bold mb-2 group-hover:text-red-400 transition-colors">150+</div>
              <p className="text-blue-100">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-lg text-red-100 mb-8">Start your project with Vira Sidiqi today</p>
          <a href="/contact">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Get Your Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
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
