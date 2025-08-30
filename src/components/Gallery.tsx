import { Camera, Calendar, Users, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const eventGallery = [
    {
      id: 1,
      title: "Annual Leadership Summit 2024",
      date: "March 15, 2024",
      attendees: 120,
      description: "A day of inspiring keynotes, panel discussions, and networking with industry leaders across various sectors.",
      images: [
        { src: "/src/assets/networking-image.jpg", alt: "Leadership Summit networking session" },
        { src: "/src/assets/leadership-image.jpg", alt: "Keynote speaker at summit" },
        { src: "/src/assets/hero-image.jpg", alt: "Summit group photo" }
      ],
      highlights: ["3 Keynote Speakers", "15 Workshop Sessions", "50+ Industry Partners"]
    },
    {
      id: 2,
      title: "Tech Innovation Showcase",
      date: "February 8, 2024", 
      attendees: 85,
      description: "Students presented innovative solutions to real-world business challenges with mentorship from tech industry veterans.",
      images: [
        { src: "/src/assets/hero-image.jpg", alt: "Tech showcase presentation" },
        { src: "/src/assets/networking-image.jpg", alt: "Student demonstrating project" }
      ],
      highlights: ["12 Student Projects", "6 Industry Judges", "Top 3 Teams Awarded"]
    },
    {
      id: 3,
      title: "Cultural Business Mixer",
      date: "January 20, 2024",
      attendees: 95,
      description: "Celebrating diversity in business leadership while building meaningful professional connections.",
      images: [
        { src: "/src/assets/leadership-image.jpg", alt: "Cultural mixer networking" },
        { src: "/src/assets/hero-image.jpg", alt: "Group discussion at mixer" }
      ],
      highlights: ["20+ Cultural Organizations", "Cross-Cultural Networking", "Traditional Performances"]
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient-primary mb-4">
            Event Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our vibrant community through memorable moments and impactful events
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-16">
          {eventGallery.map((event, index) => (
            <div 
              key={event.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
            >
              {/* Images */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.images.map((image, imgIndex) => (
                    <div 
                      key={imgIndex}
                      className={`relative rounded-xl overflow-hidden ${
                        imgIndex === 0 && event.images.length > 1 ? 'md:col-span-2' : ''
                      }`}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Details */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Event Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {event.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="bg-card rounded-lg p-4 text-center shadow-card">
                        <span className="text-sm font-medium text-primary">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-card rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-playfair font-bold text-center mb-8 text-gradient-primary">
            Our Community Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Events Hosted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Members Engaged</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Industry Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Alumni Network</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Want to be part of our next success story?
          </p>
          <a href="#apply" className="btn-hero">
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;