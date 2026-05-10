import { Button } from "@/components/ui/button";
import { Building2, Hammer, Droplet, Briefcase, Wrench, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Innovative and sustainable architectural solutions tailored to your vision.",
      features: [
        "Conceptual design and feasibility studies",
        "3D modeling and visualization",
        "Sustainable and green building design",
        "Building Information Modeling (BIM)",
        "Regulatory compliance and permits"
      ],
      benefits: "Transform your vision into reality with cutting-edge architectural design that balances aesthetics, functionality, and sustainability."
    },
    {
      icon: Hammer,
      title: "Structural Engineering",
      description: "Expert structural engineering ensuring safety, durability, and optimal performance.",
      features: [
        "Structural analysis and design",
        "Foundation engineering",
        "Seismic and wind resistance design",
        "Rehabilitation and retrofitting",
        "Quality assurance and testing"
      ],
      benefits: "Ensure your structure stands the test of time with our comprehensive structural engineering expertise and rigorous quality standards."
    },
    {
      icon: Droplet,
      title: "Water & Sewer Design",
      description: "Comprehensive water management and sewage system design with environmental responsibility.",
      features: [
        "Water supply system design",
        "Wastewater treatment design",
        "Stormwater management",
        "Environmental impact assessment",
        "Sustainable water solutions"
      ],
      benefits: "Protect the environment while ensuring reliable water and sewage infrastructure with our eco-conscious design approach."
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "Professional project oversight from planning through completion.",
      features: [
        "Project planning and scheduling",
        "Budget management and cost control",
        "Risk management",
        "Stakeholder communication",
        "Quality assurance and compliance"
      ],
      benefits: "Deliver projects on time and within budget with our expert project management and transparent communication."
    },
    {
      icon: Wrench,
      title: "Construction Execution",
      description: "High-quality construction services with strict adherence to standards.",
      features: [
        "Site management and supervision",
        "Quality control and inspection",
        "Safety management",
        "Equipment and resource management",
        "Progress tracking and reporting"
      ],
      benefits: "Transform designs into reality with our experienced construction teams and proven execution methodologies."
    }
  ];

  const process = [
    { step: 1, title: "Consultation", description: "Understand your project requirements and objectives" },
    { step: 2, title: "Planning", description: "Develop comprehensive project plans and timelines" },
    { step: 3, title: "Design", description: "Create detailed designs and specifications" },
    { step: 4, title: "Execution", description: "Execute the project with quality and precision" },
    { step: 5, title: "Completion", description: "Final inspection and project handover" }
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
            <a href="/about" className="text-gray-700 hover:text-blue-900 transition font-medium">About</a>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Comprehensive construction and engineering solutions tailored to your specific needs.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? "order-1" : "order-2"}>
                    <div className="flex items-center gap-4 mb-6">
                      <Icon className="w-12 h-12 text-red-600" />
                      <h2 className="text-3xl font-bold text-blue-900">{service.title}</h2>
                    </div>
                    <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                    
                    <h3 className="text-lg font-bold text-blue-900 mb-4">Key Features:</h3>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                      <p className="text-gray-700">{service.benefits}</p>
                    </div>
                  </div>

                  <div className={`bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-12 text-white flex items-center justify-center h-96 ${isEven ? "order-2" : "order-1"}`}>
                    <Icon className="w-32 h-32 opacity-20" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Our Process</h2>
          <div className="w-16 h-1 bg-red-600 mb-12"></div>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition h-full">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-red-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Why Choose Our Services</h2>
          <div className="w-16 h-1 bg-red-600 mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Expert team with 20+ years of experience",
              "ISO certified and industry-recognized standards",
              "Transparent communication and reporting",
              "On-time and on-budget delivery",
              "Commitment to safety and quality",
              "Sustainable and innovative solutions",
              "Professional project management",
              "Comprehensive risk management",
              "Client-focused approach"
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us today for a consultation and let's discuss how our services can benefit your project.</p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
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
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Architectural Design</a></li>
                <li><a href="#" className="hover:text-white transition">Structural Engineering</a></li>
                <li><a href="#" className="hover:text-white transition">Project Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/services" className="hover:text-white transition">Services</a></li>
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
