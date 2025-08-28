import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import networkingImage from '@/assets/networking-image.jpg';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Quarterly Networking Mixer",
      date: "March 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "University Centre, Guelph",
      description: "Connect with fellow members, alumni, and industry professionals in a relaxed networking environment.",
      category: "Networking"
    },
    {
      title: "Leadership Workshop Series",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Business Building, Room 101",
      description: "Intensive workshop focusing on executive presence and strategic communication skills.",
      category: "Workshop"
    },
    {
      title: "Industry Panel: Tech Innovation",
      date: "April 5, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Event",
      description: "Leading Asian entrepreneurs share insights on tech innovation and startup culture.",
      category: "Panel"
    }
  ];

  const pastHighlights = [
    {
      title: "Annual Leadership Summit 2023",
      attendees: "200+ students",
      description: "Our biggest event featuring keynote speakers from Fortune 500 companies."
    },
    {
      title: "Cultural Business Exchange",
      attendees: "150+ participants",
      description: "Exploring how cultural heritage enhances business perspectives and innovation."
    },
    {
      title: "Mentorship Program Launch",
      attendees: "75+ mentor-mentee pairs",
      description: "Successfully matched students with industry professionals for career guidance."
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient-primary mb-6">
            Events & Networking
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for engaging events that foster professional growth, cultural celebration, and meaningful connections.
          </p>
        </div>

        {/* Featured Event */}
        <div className="card-elevated mb-16 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative min-h-64 md:min-h-0">
              <img
                src={networkingImage}
                alt="Professional networking event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Event
              </div>
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
                Spring Leadership Conference
              </h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>April 12-13, 2024</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>University of Guelph Campus</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Two-day intensive program</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our premier annual conference featuring industry leaders, interactive workshops, and networking sessions 
                designed to elevate your leadership skills and expand your professional network.
              </p>
              <a href="#contact" className="btn-hero self-start">
                Register Now
              </a>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-8 text-center">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="card-elevated p-6 group hover:shadow-glow transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-gradient-gold text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
                
                <h4 className="text-xl font-playfair font-semibold text-foreground mb-3">
                  {event.title}
                </h4>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <button className="inline-flex items-center text-primary hover:text-primary-hover transition-colors duration-200 font-medium group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Highlights */}
        <div>
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-8 text-center">
            Past Event Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pastHighlights.map((highlight, index) => (
              <div key={index} className="card-gradient p-6 text-center">
                <h4 className="text-lg font-playfair font-semibold text-foreground mb-2">
                  {highlight.title}
                </h4>
                <div className="text-gradient-primary font-bold text-2xl mb-3">
                  {highlight.attendees}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;