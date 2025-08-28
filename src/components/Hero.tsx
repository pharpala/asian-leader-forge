import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Asian Business Leaders at University of Guelph"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary-foreground mb-6">
            Asian Business
            <span className="block text-gradient-gold">Leaders</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering students of Asian descent at the University of Guelph to explore their potential, 
            develop leadership skills, and succeed in a diverse business environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
            <a
              href="#about"
              className="btn-hero"
            >
              Discover Your Potential
            </a>
            <a
              href="#programs"
              className="btn-outline-elegant text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Our Programs
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;