
import { useState, useEffect } from 'react';
import { ArrowDown, CheckCircle, Star, Users, BookOpen, Code, Target, Heart, Award, Mail, MapPin, Clock, Filter, Menu, X } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import LoadingSpinner from '../components/LoadingSpinner';
import CourseCardSkeleton from '../components/CourseCardSkeleton';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [coursesLoading, setCoursesLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Simulate course filtering loading
  useEffect(() => {
    if (selectedCategory) {
      setCoursesLoading(true);
      const timer = setTimeout(() => {
        setCoursesLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [selectedCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const testimonials = [
    {
      name: "Sahil Prasad",
      role: "Software Developer",
      content: "NBT's career guidance helped me transition from marketing to tech. Their web development course was comprehensive and practical.",
      rating: 5
    },
    {
      name: "Arjun Berman",
      role: "Data Analyst",
      content: "The data science program at NBT gave me the skills I needed to land my dream job. Excellent instructors and hands-on projects.",
      rating: 4
    },
    {
      name: "Sumit Kami",
      role: "Digital Marketing Manager",
      content: "NBT's digital marketing course was exactly what I needed to advance my career. The practical approach made all the difference.",
      rating: 4
    }
  ];

  const team = [
    {
      name: "Aditya Jain",
      role: "CEO & Founder",
      bio: "15+ years in tech consulting and career development",
      image: "/assert/adityajain.jpg"
    },
    {
      name: "Raj ",
      role: "Head of Education",
      bio: "Former Google engineer with passion for teaching",
      image: ""
    },
    {
      name: "Haru",
      role: "Lead Data Scientist",
      bio: "PhD in Machine Learning, industry expert",
      image: ""
    },
    {
      name: "Carry",
      role: "Marketing Director",
      bio: "Digital marketing strategist with proven results",
      image: ""
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our courses to our consultancy services."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about helping people achieve their career goals and reach their potential."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in building a supportive community where everyone can learn and grow together."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We stay at the forefront of technology and teaching methods to provide the best experience."
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Career Consultancy",
      description: "Personalized career guidance to help you navigate your professional journey",
      features: [
        "One-on-one career coaching sessions",
        "Resume and LinkedIn profile optimization",
        "Interview preparation and mock interviews",
        "Career transition planning",
        "Salary negotiation strategies",
        "Personal branding development"
      ],
      price: "Starting from ₹3000/session"
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Strategic planning and mentorship for long-term career success",
      features: [
        "Skills gap analysis and development plan",
        "Industry insights and market trends",
        "Networking strategies and opportunities",
        "Goal setting and milestone tracking",
        "Leadership development coaching",
        "Work-life balance guidance"
      ],
      price: "Starting from ₹3000/session"
    },
    {
      icon: Code,
      title: "Technical Solutions",
      description: "Custom technology solutions for businesses and individuals",
      features: [
        "Web application development",
        "Database design and optimization",
        "API development and integration",
        "Cloud infrastructure setup",
        "Technical consulting and audits",
        "Digital transformation strategies"
      ],
      price: "Contact for custom pricing"
    }
  ];

  const categories = ['All', 'Web Development', 'Data Science', 'Digital Marketing', 'Career Development'];

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      category: "Web Development",
      description: "Master modern web development with React, Node.js, MongoDB, and more. Build real-world projects from scratch.",
      duration: "12 weeks",
      students: 1250,
      rating: 4.9,
      price: "₹3999",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      level: "Beginner to Advanced",
      instructor: "Aditya Jain"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      category: "Data Science",
      description: "Learn Python, pandas, scikit-learn, and TensorFlow. Work on real datasets and build ML models.",
      duration: "16 weeks",
      students: 890,
      rating: 4.8,
      price: "₹8999",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      level: "Intermediate",
      instructor: "Aditya Jain"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      category: "Digital Marketing",
      description: "Complete guide to SEO, social media marketing, Google Ads, and content marketing strategies.",
      duration: "8 weeks",
      students: 2100,
      rating: 4.7,
      price: "₹7456",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      level: "Beginner",
      instructor: "Aditya Jain"
    },
    {
      id: 4,
      title: "React & Modern JavaScript",
      category: "Web Development",
      description: "Deep dive into React hooks, context, and modern JavaScript ES6+. Build responsive web applications.",
      duration: "10 weeks",
      students: 1580,
      rating: 4.9,
      price: "₹6358",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      level: "Intermediate",
      instructor: "Aditya Jain"
    },
    {
      id: 5,
      title: "Python for Data Analysis",
      category: "Data Science",
      description: "Master Python programming for data analysis with pandas, NumPy, and matplotlib. Work with real datasets.",
      duration: "6 weeks",
      students: 950,
      rating: 4.8,
      price: "₹7836",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      level: "Beginner",
      instructor: "Aditya Jain"
    },
    {
      id: 6,
      title: "Career Transition Bootcamp",
      category: "Career Development",
      description: "Complete guide to transitioning into tech. Resume writing, interview prep, and networking strategies.",
      duration: "4 weeks",
      students: 650,
      rating: 4.9,
      price: "₹8276",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop",
      level: "All Levels",
      instructor: "Aditya Jain"
    }
  ];

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <div className="text-center text-white">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-purple-200 border-t-white rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-purple-300 rounded-full animate-ping"></div>
          </div>
          <div className="text-3xl font-bold mb-2 animate-pulse">NBT</div>
          <div className="text-lg animate-pulse">Next Big Tech</div>
          <div className="mt-4 text-sm opacity-75">Loading your future...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Fixed Navigation */}
      <nav className="bg-white backdrop-blur-md shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group">
              <img
                src="/assert/black.png"
                alt="NBT Logo"
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              
              <div className="ml-1 text-m text-gray-600 hidden sm:block transition-colors duration-300 group-hover:text-purple-600">
                Next Bigg Tech
              </div>
            </div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'courses', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-700 hover:text-purple-600 transition-all duration-300 relative group capitalize"
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 focus:outline-none transition-all duration-300"
              >
                <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white/95 backdrop-blur-md border-t transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'services', 'courses', 'contact'].map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 capitalize transform hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20 pt-36 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-300/10 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your <span className="text-yellow-300 animate-pulse">Next Bigg Tech</span> Starts Here
              </h1>
              <p className="text-xl text-purple-100">
                Transform your career with expert consultancy, cutting-edge tech services,
                and industry-leading courses in web development, data science, and digital marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-yellow-400 text-purple-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Free Consultation
                </button>
                <button
                  onClick={() => scrollToSection('courses')}
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-purple-800 hover:scale-105 transition-all duration-300 text-center transform hover:-translate-y-1"
                >
                  View Courses
                </button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300} className="hidden lg:block">
              <img
                src="\assert\20250126_143429.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl"
              />
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-yellow-200" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About NBT</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to empower the Next Big Tech in every individual's career journey
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-4">
                At NBT (Next Big Tech), we believe that everyone has the potential to achieve
                greatness in their career. Our mission is to bridge the gap between aspiration
                and achievement through expert guidance, cutting-edge education, and innovative solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, we've helped over 5,000 professionals transition into tech,
                advance their careers, and build the skills needed for tomorrow's economy.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { number: '5000+', label: 'Students' },
                  { number: '50+', label: 'Courses' },
                  { number: '95%', label: 'Success Rate' }
                ].map((stat, index) => (
                  <AnimatedSection key={index} delay={index * 100} className="group">
                    <div className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
            <AnimatedSection delay={400}>
              <img
                src="\assert\20250126_145421.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500"
              />
            </AnimatedSection>
          </AnimatedSection>

          {/* Values */}
          <div className="mb-20">
            <AnimatedSection className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 100} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <AnimatedSection className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
              <p className="text-xl text-gray-600">The experts behind your success</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <AnimatedSection key={index} delay={index * 150} className="text-center group">
                  <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover shadow-lg transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-xl font-semibold mb-1 group-hover:text-purple-600 transition-colors duration-300">{member.name}</h4>
                  <div className="text-purple-600 font-medium mb-2">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional services designed to transform your career</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 200} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group">
                <div className="p-8">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-200 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600">Comprehensive courses designed to give you job-ready skills</p>
          </AnimatedSection>

          {/* Course Stats */}
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            {[
              { number: '50+', label: 'Courses Available' },
              { number: '15,000+', label: 'Students Enrolled' },
              { number: '4.8', label: 'Average Rating' },
              { number: '95%', label: 'Job Placement Rate' }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100} className="group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-600 group-hover:animate-pulse">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </AnimatedSection>
            ))}
          </AnimatedSection>

          {/* Filter */}
          <AnimatedSection className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md'
                  }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>

          {coursesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <CourseCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <AnimatedSection key={course.id} delay={index * 100} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded animate-pulse">
                        {course.category}
                      </span>
                      <span className="text-sm text-gray-500">{course.level}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{course.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{course.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center group-hover:text-purple-600 transition-colors duration-300">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center group-hover:text-purple-600 transition-colors duration-300">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current animate-pulse" />
                        {course.rating}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t pt-4">
                      <div>
                        <div className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">{course.price}</div>
                        <div className="text-xs text-gray-500">by {course.instructor}</div>
                      </div>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Success stories from our community</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 200} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic group-hover:text-gray-800 transition-colors duration-300">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-purple-600">{testimonial.role}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Ready to start your journey? Get in touch with our team today</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email Us", content: ["info@nbt.com", "support@nbt.com"] },
                  { icon: MapPin, title: "Visit Us", content: ["India"] },
                  { icon: Clock, title: "Office Hours", content: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"] }
                ].map((item, index) => (
                  <div key={index} className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-yellow-200 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">{item.title}</h4>
                      {item.content.map((line, i) => (
                        <p key={i} className="text-gray-600">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Find Us</h4>
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden hover:from-purple-100 hover:to-purple-200 transition-all duration-500">
                  <iframe
                    title="India Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392591709!2d77.068897547706!3d28.52728034343117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d023c98c13e21%3A0x5c04018777a9a99f!2sIndia!5e0!3m2!1sen!2sin!4v1719719000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={300} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { name: 'name', type: 'text', label: 'Full Name', placeholder: 'Enter your full name' },
                    { name: 'email', type: 'email', label: 'Email Address', placeholder: 'Enter your email address' }
                  ].map((field) => (
                    <div key={field.name} className="group">
                      <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-purple-600 transition-colors duration-300">
                        {field.label} *
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        required
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-purple-600 transition-colors duration-300">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="career-consultation">Career Consultation</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="technical-services">Technical Services</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-purple-600 transition-colors duration-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical transition-all duration-300 hover:border-purple-300"
                      placeholder="Tell us about your goals and how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4 group">
                <div className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">NBT</div>
                <div className="ml-2 text-sm text-gray-300 group-hover:text-purple-400 transition-colors duration-300">Next Big Tech</div>
              </div>
              <p className="text-gray-300 mb-4 hover:text-white transition-colors duration-300">
                Empowering careers through expert consultancy, cutting-edge tech services,
                and comprehensive online/offline courses in web development, data science,
                and digital marketing.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center hover:text-purple-400 transition-colors duration-300 group">
                  <Mail className="h-4 w-4 mr-2 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300">info@nbt.com</span>
                </div>
                <div className="flex items-center hover:text-purple-400 transition-colors duration-300 group">
                  <MapPin className="h-4 w-4 mr-2 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300">India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['about', 'services', 'courses', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-gray-300 hover:text-purple-400 transition-all duration-300 capitalize hover:translate-x-2 transform block"
                    >
                      {section.replace('-', ' ')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {['Career Consultancy', 'Tech Solutions', 'Web Development', 'Data Science', 'Digital Marketing'].map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 hover:text-white transition-colors duration-300">
              &copy; 2024 NBT - Next Big Tech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
