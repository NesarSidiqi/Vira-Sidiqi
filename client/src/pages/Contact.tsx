import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@virasidiqi.com", "projects@virasidiqi.com"]
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Engineering Avenue", "Tech City, TC 12345"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"]
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
            <a href="/about" className="text-gray-700 hover:text-blue-900 transition font-medium">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-900 transition font-medium">Services</a>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Get Quote
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Get in touch with our team to discuss your project and receive a free consultation.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                  <Icon className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-lg font-bold text-blue-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Office Location</h2>
              
              <div className="bg-gray-200 rounded-lg h-96 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive map would be displayed here</p>
                  <p className="text-sm text-gray-500 mt-2">123 Engineering Avenue, Tech City</p>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Quick Response</h3>
                <p className="text-gray-700 mb-4">
                  We typically respond to inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">Emergency Line:</span> +1 (555) 999-8888
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">WhatsApp:</span> +1 (555) 123-4567
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Telegram:</span> @virasidiqi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-red-600 mb-12"></div>

          <div className="space-y-6">
            {[
              {
                q: "How long does a typical project take?",
                a: "Project duration varies based on scope and complexity. We provide detailed timelines during the consultation phase."
              },
              {
                q: "Do you provide free consultations?",
                a: "Yes, we offer free initial consultations to understand your project requirements and provide recommendations."
              },
              {
                q: "What is your payment structure?",
                a: "We typically work with milestone-based payments. Details are discussed and agreed upon before project commencement."
              },
              {
                q: "Are you insured and certified?",
                a: "Yes, we are fully insured and hold multiple certifications including ISO 9001, ISO 45001, and LEED certification."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-blue-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
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
                <li><a href="/about" className="hover:text-white transition">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
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
