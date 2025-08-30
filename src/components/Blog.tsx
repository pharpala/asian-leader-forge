import { Calendar, User, Clock, ArrowRight, Tags } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Breaking Barriers: Asian Leadership in Canadian Business",
    excerpt: "Exploring the unique challenges and opportunities for Asian professionals in Canada's evolving business landscape, featuring insights from successful alumni and industry leaders.",
    author: "Sarah Chen",
    date: "March 20, 2024",
    readTime: "8 min read",
    image: "/src/assets/leadership-image.jpg",
    category: "Leadership",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "From Campus to Boardroom: Success Stories",
      excerpt: "Meet three ABL alumni who've made their mark in Fortune 500 companies, sharing their journey from university clubs to executive leadership roles.",
      author: "Kevin Park",
      date: "March 15, 2024", 
      readTime: "6 min read",
      image: "/src/assets/hero-image.jpg",
      category: "Alumni Spotlight"
    },
    {
      id: 3,
      title: "Networking Events That Changed My Career",
      excerpt: "How strategic networking through ABL events opened doors to internships, mentorships, and dream job opportunities for current students.",
      author: "Priya Sharma",
      date: "March 10, 2024",
      readTime: "5 min read", 
      image: "/src/assets/networking-image.jpg",
      category: "Networking"
    },
    {
      id: 4,
      title: "Cultural Intelligence in Business",
      excerpt: "Why understanding cultural nuances gives Asian business leaders a competitive edge in today's global marketplace.",
      author: "Dr. Angela Zhang", 
      date: "March 5, 2024",
      readTime: "7 min read",
      image: "/src/assets/leadership-image.jpg",
      category: "Insights"
    },
    {
      id: 5,
      title: "Building Your Personal Brand",
      excerpt: "Essential strategies for young professionals to develop authentic personal brands that reflect both professional excellence and cultural identity.",
      author: "Michelle Wong",
      date: "February 28, 2024",
      readTime: "4 min read",
      image: "/src/assets/hero-image.jpg", 
      category: "Professional Development"
    },
    {
      id: 6,
      title: "Tech Innovation and Asian Entrepreneurship",
      excerpt: "Highlighting Asian entrepreneurs who are disrupting industries through innovative technology solutions and startup ventures.",
      author: "James Kim",
      date: "February 25, 2024",
      readTime: "6 min read",
      image: "/src/assets/networking-image.jpg",
      category: "Innovation"
    }
  ];

  const categories = ["All", "Leadership", "Alumni Spotlight", "Networking", "Insights", "Professional Development", "Innovation"];

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient-primary mb-4">
            Stories & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover inspiring stories, expert insights, and practical advice from our community of leaders
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-sm font-medium shadow-card"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-card rounded-2xl shadow-elegant overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    Featured
                  </span>
                  <span className="ml-3 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <button className="btn-gold inline-flex items-center">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card-elevated overflow-hidden group cursor-pointer">
              <div className="relative">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <User className="w-3 h-3 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar className="w-3 h-3 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="text-primary hover:text-primary-hover font-medium text-sm inline-flex items-center">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-card rounded-2xl p-8 md:p-12 text-center shadow-elegant">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gradient-primary mb-4">
            Stay Updated with ABL Stories
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest insights, success stories, and leadership tips delivered directly to your inbox every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-gold whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Share Your Story CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Have an inspiring story to share with our community?
          </p>
          <a href="#contact" className="btn-outline-elegant">
            Submit Your Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;