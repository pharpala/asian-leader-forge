import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    program: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@ublasianleaders.ca",
      action: "mailto:info@ublasianleaders.ca"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "University Centre, University of Guelph",
      action: "#"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (519) 824-4120",
      action: "tel:+15198244120"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient-primary mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to unlock your leadership potential? Get in touch with us and become part of a thriving community 
            of Asian business leaders at the University of Guelph.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-elevated p-8">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
              Apply for Membership
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="your.email@uoguelph.ca"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Student ID *
                  </label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Your student ID"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Program of Study *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select your program</option>
                    <option value="business">Business Administration</option>
                    <option value="economics">Economics</option>
                    <option value="computing">Computing</option>
                    <option value="engineering">Engineering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Why do you want to join ABL? *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your goals and how ABL can help you achieve them..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-hero flex items-center justify-center group"
              >
                Submit Application
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Have questions about our programs or want to learn more about membership? 
                We're here to help you take the next step in your leadership journey.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center p-4 bg-gradient-subtle rounded-lg hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.detail}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="card-gradient p-6">
              <h4 className="text-lg font-playfair font-semibold text-foreground mb-4">
                Membership Benefits
              </h4>
              <div className="space-y-3">
                {[
                  "Access to exclusive leadership workshops",
                  "Professional mentorship opportunities",
                  "Networking events with industry leaders",
                  "Career development resources",
                  "Cultural celebration events",
                  "Professional certification programs"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;