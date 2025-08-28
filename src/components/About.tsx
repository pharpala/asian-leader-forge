import { Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Dedicated to fostering leadership and professional growth among Asian students at UofG."
    },
    {
      icon: Users,
      title: "Community-Focused",
      description: "Building a supportive network where diverse perspectives and cultural backgrounds are celebrated."
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented",
      description: "Committed to developing skills, expanding opportunities, and achieving excellence together."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient-primary mb-6">
            About Asian Business Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a dynamic student organization at the University of Guelph, dedicated to empowering 
            the next generation of Asian business leaders through mentorship, networking, and professional development.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="card-elevated p-8 md:p-12 mb-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              To provide a platform for students of Asian descent to explore their potential, develop essential 
              leadership skills, and succeed in today's diverse business environment. We bridge cultural heritage 
              with modern business practices, creating opportunities for growth, mentorship, and meaningful connections.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="card-elevated p-6 text-center group hover:shadow-glow transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-playfair font-semibold text-foreground mb-4">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "150+", label: "Active Members" },
            { number: "50+", label: "Events Hosted" },
            { number: "25+", label: "Industry Partners" },
            { number: "5", label: "Years Strong" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;