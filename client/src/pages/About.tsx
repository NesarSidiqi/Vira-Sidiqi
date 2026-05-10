import { Button } from "@/components/ui/button";
import { Award, Users, Target, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Dr. Vira Sidiqi",
      role: "Founder & CEO",
      bio: "20+ years of experience in construction and engineering with expertise in large-scale infrastructure projects.",
      image: "👨‍💼"
    },
    {
      name: "Eng. Mohammad Hassan",
      role: "Chief Engineer",
      bio: "Expert in structural engineering and project management with ISO certifications.",
      image: "👨‍🔧"
    },
    {
      name: "Arch. Leila Ahmadi",
      role: "Lead Architect",
      bio: "Specialized in sustainable architectural design and innovative building solutions.",
      image: "👩‍💼"
    },
    {
      name: "Eng. Karim Al-Rashid",
      role: "Infrastructure Director",
      bio: "20 years of experience in water systems and infrastructure development.",
      image: "👨‍💼"
    }
  ];

  const certifications = [
    "ISO 9001:2015 - Quality Management",
    "ISO 45001:2018 - Occupational Health & Safety",
    "ISO 14001:2015 - Environmental Management",
    "LEED Certification - Green Building",
    "PMP - Project Management Professional",
    "DBIA - Design-Build Institute of America"
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Commitment to highest standards in every project and deliverable."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing modern technologies and sustainable construction practices."
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Transparent communication and honest relationships with all stakeholders."
    },
    {
      icon: Award,
      title: "Safety",
      description: "Zero-tolerance approach to safety with comprehensive risk management."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">VS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Vira Sidiqi</h1>
              <p className="text-xs text-red-600 font-semibold">Engineering Excellence</p>
            </div>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-gray-700 hover:text-blue-900 transition font-medium">Home</a>
            <a href="/services" className="text-gray-700 hover:text-blue-900 transition font-medium">Services</a>
            <a href="/projects" className="text-gray-700 hover:text-blue-900 transition font-medium">Projects</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-900 transition font-medium">Contact</a>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Get Quote
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Vira Sidiqi</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Leading the construction and engineering industry with innovation, integrity, and excellence.</p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-blue-900">Our Journey</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2004, Vira Sidiqi has grown to become a leading construction and engineering firm with a reputation for delivering exceptional projects on time and within budget.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Over two decades, we've successfully completed 150+ projects ranging from residential complexes to major infrastructure developments, serving both public and private sector clients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our success is built on a foundation of technical expertise, innovative solutions, and unwavering commitment to client satisfaction and safety.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-blue-900 mb-2">2004</h3>
                  <p className="text-gray-600">Company founded with vision to transform construction industry</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-blue-900 mb-2">2010</h3>
                  <p className="text-gray-600">Achieved ISO 9001 certification for quality management</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-blue-900 mb-2">2015</h3>
                  <p className="text-gray-600">Expanded services to include water and sewer design</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-blue-900 mb-2">2024</h3>
                  <p className="text-gray-600">Recognized as industry leader with 150+ completed projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver innovative, sustainable, and high-quality construction and engineering solutions that exceed client expectations, create lasting value, and contribute to the development of communities and infrastructure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and respected construction and engineering firm, recognized for excellence, innovation, and commitment to sustainable development and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Our Core Values</h2>
          <div className="w-16 h-1 bg-red-600 mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition">
                  <Icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-blue-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Leadership Team</h2>
          <div className="w-16 h-1 bg-red-600 mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="bg-blue-900 h-32 flex items-center justify-center text-6xl">
                  {member.image}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Certifications & Licenses</h2>
          <div className="w-16 h-1 bg-red-600 mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss how Vira Sidiqi can help bring your project to life.</p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Contact Us <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-lg">Vira Sidiqi</h4>
              <p className="text-gray-400">Professional construction and engineering solutions.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/services" className="hover:text-white transition">Services</a></li>
                <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">
                Phone: +1 (555) 123-4567<br />
                Email: info@virasidiqi.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vira Sidiqi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
