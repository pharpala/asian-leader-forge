import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const Team = () => {
  const executiveBoard = [
    {
      name: "Sarah Chen",
      position: "President",
      program: "Business Administration, 4th Year", 
      bio: "Leading strategic vision and community growth with 3+ years of leadership experience in student organizations.",
      image: "/src/assets/leadership-image.jpg",
      linkedin: "https://linkedin.com/in/sarahchen",
      email: "president@ublasianleaders.ca",
      achievements: ["Dean's List", "Case Competition Winner", "Peer Mentor"]
    },
    {
      name: "Kevin Park",
      position: "Vice President",
      program: "Economics & Finance, 3rd Year",
      bio: "Driving operational excellence and member engagement initiatives to foster inclusive leadership development.",
      image: "/src/assets/hero-image.jpg", 
      linkedin: "https://linkedin.com/in/kevinpark",
      email: "vp@ublasianleaders.ca",
      achievements: ["Investment Club President", "Scholarship Recipient", "Research Assistant"]
    },
    {
      name: "Priya Sharma", 
      position: "Secretary",
      program: "Marketing Management, 3rd Year",
      bio: "Ensuring seamless communication and documentation while coordinating high-impact networking events.",
      image: "/src/assets/networking-image.jpg",
      linkedin: "https://linkedin.com/in/priyasharma",
      email: "secretary@ublasianleaders.ca",
      achievements: ["Marketing Internship", "Event Coordinator", "Academic Excellence"]
    },
    {
      name: "David Liu",
      position: "Treasurer", 
      program: "Accounting & Finance, 4th Year",
      bio: "Managing financial operations and partnerships to maximize resources for member development programs.",
      image: "/src/assets/leadership-image.jpg",
      linkedin: "https://linkedin.com/in/davidliu",
      email: "treasurer@ublasianleaders.ca",
      achievements: ["CPA Track Student", "Finance Committee Chair", "Budget Management Expert"]
    },
    {
      name: "Michelle Wong",
      position: "Events Coordinator",
      program: "Hospitality & Tourism, 2nd Year", 
      bio: "Creating memorable experiences that connect students with industry professionals and cultural celebrations.",
      image: "/src/assets/hero-image.jpg",
      linkedin: "https://linkedin.com/in/michellewong", 
      email: "events@ublasianleaders.ca",
      achievements: ["Event Planning Certification", "Cultural Ambassador", "Student Engagement Award"]
    },
    {
      name: "James Kim",
      position: "Marketing Director",
      program: "Computer Science & Business, 3rd Year",
      bio: "Expanding our digital presence and brand awareness to reach more students across campus and beyond.",
      image: "/src/assets/networking-image.jpg",
      linkedin: "https://linkedin.com/in/jameskim",
      email: "marketing@ublasianleaders.ca", 
      achievements: ["Tech Startup Experience", "Social Media Growth", "Digital Strategy Expert"]
    }
  ];

  const advisors = [
    {
      name: "Dr. Angela Zhang",
      title: "Faculty Advisor", 
      department: "Gordon S. Lang School of Business & Economics",
      expertise: "International Business & Leadership Development",
      image: "/src/assets/leadership-image.jpg"
    },
    {
      name: "Michael Chen",
      title: "Alumni Mentor",
      company: "Senior Manager, Deloitte Canada", 
      expertise: "Corporate Strategy & Professional Development",
      image: "/src/assets/hero-image.jpg"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated leaders committed to empowering the next generation of Asian business professionals
          </p>
        </div>

        {/* Executive Board */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold text-center mb-12 text-foreground">
            Executive Board
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveBoard.map((member, index) => (
              <div key={index} className="card-elevated p-6 text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                
                <h4 className="text-xl font-playfair font-bold text-foreground mb-1">{member.name}</h4>
                <p className="text-primary font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.program}</p>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{member.bio}</p>
                
                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.achievements.map((achievement, aIndex) => (
                      <span key={aIndex} className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="bg-gradient-subtle rounded-2xl p-8">
          <h3 className="text-3xl font-playfair font-bold text-center mb-12 text-foreground">
            Advisory Board
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card flex items-center space-x-6">
                <img 
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-playfair font-bold text-foreground mb-1">{advisor.name}</h4>
                  <p className="text-primary font-semibold mb-1">{advisor.title}</p>
                  <p className="text-sm text-muted-foreground mb-2">{advisor.department || advisor.company}</p>
                  <p className="text-xs text-muted-foreground">{advisor.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students who want to make a difference in the Asian business community at UofG.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apply" className="btn-hero">
              Apply for Leadership Position
            </a>
            <a href="#contact" className="btn-outline-elegant">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;