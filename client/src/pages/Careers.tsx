import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, MapPin, DollarSign, Users } from "lucide-react";

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: "Senior Structural Engineer",
      department: "Engineering",
      location: "Tech City",
      type: "Full-time",
      salary: "$80K - $120K",
      description: "Lead structural design projects and mentor junior engineers in our growing team."
    },
    {
      id: 2,
      title: "Project Manager",
      department: "Project Management",
      location: "Tech City",
      type: "Full-time",
      salary: "$70K - $110K",
      description: "Oversee construction projects from planning to completion with excellent communication."
    },
    {
      id: 3,
      title: "Architect",
      department: "Design",
      location: "Tech City",
      type: "Full-time",
      salary: "$75K - $115K",
      description: "Design innovative and sustainable architectural solutions for diverse projects."
    },
    {
      id: 4,
      title: "Construction Supervisor",
      department: "Construction",
      location: "Tech City",
      type: "Full-time",
      salary: "$60K - $90K",
      description: "Manage on-site construction activities and ensure quality and safety standards."
    },
    {
      id: 5,
      title: "CAD Technician",
      department: "Design",
      location: "Tech City",
      type: "Full-time",
      salary: "$45K - $65K",
      description: "Create detailed technical drawings and 3D models for construction projects."
    },
    {
      id: 6,
      title: "Site Safety Officer",
      department: "Safety",
      location: "Tech City",
      type: "Full-time",
      salary: "$50K - $75K",
      description: "Ensure compliance with safety regulations and maintain safe work environments."
    }
  ];

  const benefits = [
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive medical, dental, and vision coverage for you and your family"
    },
    {
      icon: "🎓",
      title: "Professional Development",
      description: "Continuous learning opportunities and certification programs"
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Attractive compensation packages based on experience and skills"
    },
    {
      icon: "🏖️",
      title: "Generous PTO",
      description: "Flexible vacation days and work-life balance initiatives"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Clear advancement paths and leadership development programs"
    },
    {
      icon: "👥",
      title: "Team Culture",
      description: "Collaborative environment with regular team building activities"
    }
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <div className="w-20 h-1 bg-red-600"></div>
          <p className="text-xl text-blue-100 mt-6 max-w-2xl">Build your career with a leading construction and engineering company. We're looking for talented professionals to join our growing team.</p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Why Work With Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Open Positions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400"></div>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-blue-900 group-hover:text-red-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                      <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {job.type}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-red-600 hover:bg-red-700 text-white whitespace-nowrap">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">What Our Team Says</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Vira Sidiqi provided me with incredible growth opportunities and a supportive team environment.",
                author: "Ahmed Hassan",
                role: "Senior Structural Engineer"
              },
              {
                quote: "Working here has been the best decision for my career. The company truly values its employees.",
                author: "Leila Ahmadi",
                role: "Project Manager"
              },
              {
                quote: "The collaborative culture and professional development programs are exceptional.",
                author: "Hassan Al-Makki",
                role: "Architect"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-blue-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-lg text-red-100 mb-8">Submit your application and join our team of talented professionals.</p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Browse All Positions <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
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
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">
                Phone: +1 (555) 123-4567<br />
                Email: careers@virasidiqi.com
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
