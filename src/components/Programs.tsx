import { BookOpen, Users, Briefcase, Award } from 'lucide-react';
import leadershipImage from '@/assets/leadership-image.jpg';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Leadership Development",
      description: "Comprehensive workshops and seminars designed to build essential leadership skills for the modern business world.",
      features: ["Executive Presence", "Strategic Thinking", "Team Management", "Public Speaking"]
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Connect with successful alumni and industry professionals for guidance, career advice, and personal growth.",
      features: ["1-on-1 Mentoring", "Industry Insights", "Career Guidance", "Professional Network"]
    },
    {
      icon: Briefcase,
      title: "Business Workshops",
      description: "Practical sessions covering essential business skills, from financial literacy to entrepreneurship.",
      features: ["Financial Planning", "Business Strategy", "Entrepreneurship", "Market Analysis"]
    },
    {
      icon: Award,
      title: "Professional Certification",
      description: "Opportunity to earn recognized certifications that enhance your resume and career prospects.",
      features: ["Industry Certifications", "Skill Validation", "Career Advancement", "Professional Recognition"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient-primary mb-6">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive development programs designed to unlock your leadership potential and accelerate your career growth.
          </p>
        </div>

        {/* Featured Program */}
        <div className="card-elevated mb-16 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-6">
                Leadership Excellence Program
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our flagship 12-week intensive program combining workshops, mentorship, and real-world projects. 
                Participants develop executive presence, strategic thinking, and the confidence to lead in diverse environments.
              </p>
              <div className="space-y-3 mb-8">
                {["12 weeks of intensive training", "Personal mentor assignment", "Capstone leadership project", "Industry networking events"].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-gold self-start">
                Apply Now
              </a>
            </div>
            <div className="relative min-h-64 md:min-h-0">
              <img
                src={leadershipImage}
                alt="Leadership development workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="card-elevated p-6 group hover:shadow-glow transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-gold rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <program.icon className="w-7 h-7 text-success-foreground" />
              </div>
              
              <h4 className="text-xl font-playfair font-semibold text-foreground mb-4">
                {program.title}
              </h4>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <div className="space-y-2">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;