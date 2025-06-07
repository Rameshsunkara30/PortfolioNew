import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Menu, X, Download, ExternalLink, Award, Code, Database, BarChart3, Send, MessageCircle, Briefcase, GraduationCap, Calendar, Building } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SkillBar } from './components/SkillBar';
import { Typewriter } from 'react-simple-typewriter';

import Python from './assets/Python Thumbnail.png'
import SQL from './assets/SQL Thumbnail.png'
import Tableau from './assets/Tableau Thumbnail.png'
import PowerBI from './assets/PowerBI Thumbnail.png'
import Excel from './assets/Excel Thumbnail.png'
import PythonProject from './assets/Python Project.pdf'
import SQLProject from './assets/SQL Project.pdf'
import PowerBIProject from './assets/PowerBI Project.pdf'
import TableauProject from './assets/Tableau project.pdf'
import ExcelProject from './assets/Excel Project.pdf'
import Profile from './assets/Profilenavy.png'
import Resume from './assets/ResumeFinal.pdf'
import AIToolsCertificate from './assets/AI Tools Certificate.pdf'
import PowerBICertificate from './assets/powerbi Certificate.pdf'
import SQLCertificate from './assets/SQL Certificate.pdf'

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('menu-button');
      if (menu && !menu.contains(event.target as Node) && 
          button && !button.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL with your phone number
    const whatsappURL = `https://wa.me/919505884744?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Optimized animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white overflow-x-hidden">
      {/* Animated Background Elements - Reduced complexity for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="fixed w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrollY > 50 ? '1px solid rgba(59, 130, 246, 0.3)' : 'none'
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            >
              Ramesh Sunkara
            </motion.h1>
            
            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-gray-300 hover:text-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button 
              id="menu-button"
              className="md:hidden text-blue-400 z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 bg-black/90 backdrop-blur-lg rounded-lg border border-blue-500/20"
              >
                <div className="flex flex-col p-4 space-y-2">
                  {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="py-3 px-4 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 10 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <motion.h2 
                  className="text-xl text-blue-400 mb-2 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Hello, This Is
                </motion.h2>
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  RAMESH SUNKARA
                </motion.h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">
                  And I'm a{" "}
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    <Typewriter
                      words={[
                        "Data Analyst",
                        "Data Visualization Expert",
                        "SQL Specialist",
                        "Business Intelligence Analyst"
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="__"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                  </span>
                </h3>
              </motion.div>

              <motion.p 
                className="text-gray-400 mb-8 text-lg leading-relaxed"
                variants={itemVariants}
              >
               Seeking an entry-level position as a Data Analyst to utilize my analytical, technical, and problem-solving skills to drive business growth through data- driven insights. Passionate about continuous learning and staying up-to-date with the latest technologies in data analytics.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                variants={containerVariants}
              >
                {[
                  { icon: MapPin, text: "KPHB Colony, Hyderabad", link: "https://www.google.com/maps/@17.4970902,78.3946396,17.07z" },
                  { icon: Phone, text: "9505884744", link: "tel:+919505884744" },
                  { icon: Mail, text: "sunkararamesh300@gmail.com", link: "mailto:sunkararamesh300@gmail.com" },
                  { icon: Linkedin, text: "LinkedIn Profile", link: "https://www.linkedin.com/in/ramesh-sunkara-726bba350" },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <contact.icon size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <a 
                      href={contact.link}
                      className="text-gray-300 group-hover:text-blue-300 transition-colors text-sm"
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                    >
                      {contact.text}
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => window.open(Resume)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download CV
                </motion.button>
                <motion.button
                  onClick={() => window.open("https://github.com/Rameshsunkara30", "_blank")}
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  GitHub
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Animated rings - increased size */}
                <motion.div
                  className="absolute inset-0 w-[28rem] h-[28rem] border-2 border-blue-500/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 w-[26rem] h-[26rem] border border-blue-400/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Glowing background - increased size */}
                <div className="absolute inset-8 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full blur-2xl" />
                
                {/* Profile container - increased size significantly */}
                <div className="relative w-96 h-96 mx-auto">
                  <motion.img 
                    src={Profile}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full border-4 border-blue-500/50 shadow-2xl shadow-blue-500/25"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Floating elements - adjusted positions for larger profile */}
                <motion.div
                  className="absolute top-16 right-16 p-4 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Code size={32} className="text-blue-400" />
                </motion.div>
                <motion.div
                  className="absolute bottom-16 left-16 p-4 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Database size={32} className="text-blue-400" />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-0 p-4 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30"
                  animate={{ x: [0, -15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <BarChart3 size={32} className="text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* About Section */}
        <motion.section 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
          id="about"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-br from-black/50 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-6">
              <motion.p 
                className="text-gray-300 leading-relaxed text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
               Results-driven Entry-Level Data Analyst with a solid foundation in data analysis, visualization, and database management.
                <span className="font-bold text-blue-300"> Proficient in SQL, Python,Excel, and Power BI/Tableau, with experience in transforming raw data into actionable insights.</span>, Strong problem-solving skills with the ability to identify trends, optimize processes, and support data-driven decision-making. Passionate about storytelling through data and eager to contribute analytical expertise to a dynamic team.
              </motion.p>
              <motion.p 
                className="text-gray-300 leading-relaxed text-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Skilled in data cleaning, statistical analysis, and visualization to extract meaningful insights and support business decision-making. 
                <span className="font-bold text-blue-300"> Strong problem-solving abilities with a keen eye for identifying trends and optimizing processes.a</span> Experienced in creating interactive dashboards and reports to present data-driven insights effectively. Passionate about leveraging data to improve efficiency and drive business success.
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          id="skills"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-black/50 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-blue-400 flex items-center gap-3">
                <Code size={28} />
                Programming Languages
              </h3>
              <div className="space-y-6">
                <SkillBar skill="Python" level={80} />
                <SkillBar skill="SQL" level={90} />
              </div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-black/50 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-blue-400 flex items-center gap-3">
                <BarChart3 size={28} />
                Data Analysis Tools
              </h3>
              <div className="space-y-6">
                <SkillBar skill="Tableau" level={90} />
                <SkillBar skill="Power BI" level={80} />
                <SkillBar skill="Excel" level={95} />
              </div>
            </motion.div>
          </div>
        </motion.section>








{/* Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          id="projects"
        >
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[{
              title: "Loan Default Risk Analysis Using Python",
              image: Python,
              description: [
                "Conducted an EDA on consumer finance data to identify factors influencing loan defaults.",
                "Cleaned and visualized data using Pandas, Matplotlib, and Seaborn, focusing on high risk attributes.",
                "Provided recommendations for mitigating loan default risks, ensuring actionable insights for stakeholders."
              ],
              link: PythonProject,
              tech: ["Python", "Pandas", "Matplotlib", "Seaborn"]
            }, {
              title: "Movie Analytics for RSVP Movies Using SQL",
              image: SQL,
              description: [
                "Analyzed three years of movie data using optimized SQL queries.",
                "Wrote optimized queries to extract key audience and trend insights.",
                "Delivered insights to support strategic decisions for film production and marketing."
                
              ],
              link: SQLProject,
              tech: ["SQL", "Database Design", "Data Analysis"]
            }, {
              title: "Loan Analysis Dashboard Using PowerBI",
              image: PowerBI,
              description: [
                "Developed a Power BI dashboard to analyze home loan datasets.",
                "Tracked applied, sanctioned, disbursed, and recovery amounts with custom KPIs.",
                "Utilized DAX and slicers to enable drilldowns by region and loan category."
              ],
              link: PowerBIProject,
              tech: ["Power BI", "DAX", "Data Modeling"]
            }, {
              title: "IPL Visualization Dashboard Using Tableau",
              image: Tableau,
              description: [
                "Designed an interactive Tableau dashboard analyzing IPL data from 2008-2017.",
                "Integrated match-level and ball-by-ball datasets for insights.",
                "Created visualizations for match outcomes and team performance."
              ],
              link: TableauProject,
              tech: ["Tableau", "Data Visualization", "Sports Analytics"]
            }, {
              title: "Bank Marketing Data Analysis in Excel",
              image: Excel,
              description: [
                "Analyzed bank marketing dataset using advanced Excel techniques.",
                "Automated reporting workflows using macros.",
                "Presented insights on customer behavior and campaign response rates."
              ],
              link: ExcelProject,
              tech: ["Excel", "VBA", "Statistical Analysis"]
            }].map((project, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-black/50 to-blue-900/20 rounded-2xl border border-blue-500/20 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                }}
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg transition-all duration-300 group/btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>










        

        {/* Professional Journey Section (Experience + Education) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          id="experience"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.6 }}
          >
            Professional Journey
          </motion.h2>
          
          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg">
              My progression through data analytics roles and academic achievements that built my expertise in data science and business intelligence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-600"></div>
            
            <div className="space-y-12">
              {/* Job Experience 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative flex items-start gap-8"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center border-4 border-blue-500/30 shadow-lg shadow-blue-500/25">
                  <Briefcase size={24} className="text-white" />
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-black/50 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">Senior Data Analyst</h3>
                      <p className="text-blue-300 font-semibold text-lg flex items-center gap-2">
                        <Building size={18} />
                        TechCorp Solutions
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-400 font-semibold flex items-center gap-2 md:justify-end">
                        <Calendar size={18} />
                        2023 - Present
                      </p>
                      <p className="text-gray-400 text-sm">Bangalore, India</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Lead data analyst responsible for business intelligence, advanced analytics, and strategic reporting. Drive data-driven decision making across multiple departments.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-blue-300 font-semibold mb-3">Key Achievements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Improved reporting efficiency by 60% through automation</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Built prediction models with 95% accuracy for customer churn</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Managed senior analytics and established data governance standards</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Reduced spend waste costs by $100k through process optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Job Experience 2 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex items-start gap-8"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center border-4 border-blue-500/30 shadow-lg shadow-blue-500/25">
                  <Briefcase size={24} className="text-white" />
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-black/50 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">Data Analyst</h3>
                      <p className="text-blue-300 font-semibold text-lg flex items-center gap-2">
                        <Building size={18} />
                        Analytics Hub Pvt Ltd
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-400 font-semibold flex items-center gap-2 md:justify-end">
                        <Calendar size={18} />
                        2022 - 2023
                      </p>
                      <p className="text-gray-400 text-sm">Hyderabad, India</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Focused on statistical analysis, dashboard development, and business intelligence solutions. Collaborated with cross-functional teams to deliver actionable insights.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-blue-300 font-semibold mb-3">Key Achievements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Developed 15+ interactive dashboards using Tableau and Power BI</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Performed advanced SQL queries on databases with 500k+ records</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Created comprehensive documentation for data processes</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Supported market research projects with statistical analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Education 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative flex items-start gap-8"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center border-4 border-blue-500/30 shadow-lg shadow-blue-500/25">
                  <GraduationCap size={24} className="text-white" />
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-black/50 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">Bachelor Of Computer Science</h3>
                      <p className="text-blue-300 font-semibold text-lg flex items-center gap-2">
                        <Building size={18} />
                        Adikavi Nannayya University, Kakinada
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-400 font-semibold flex items-center gap-2 md:justify-end">
                        <Calendar size={18} />
                        2021 - 2024
                      </p>
                      <p className="text-gray-400 text-sm">Kakinada, India</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Specialized in Machine Learning, Statistical Analysis, and Big Data Technologies. Completed thesis on predictive analytics in e-commerce.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-blue-300 font-semibold mb-3">Key Highlights:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">CGPA: 7.0/10 with distinction</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Research published in international data science journal</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Teaching Assistant for Statistics and Python courses</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Winner of inter-college data science competition</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Education 2 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex items-start gap-8"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center border-4 border-blue-500/30 shadow-lg shadow-blue-500/25">
                  <GraduationCap size={24} className="text-white" />
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-black/50 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">Board Of Intermediate</h3>
                      <p className="text-blue-300 font-semibold text-lg flex items-center gap-2">
                        <Building size={18} />
                        Pragati Vidyalaya Junior College
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-400 font-semibold flex items-center gap-2 md:justify-end">
                        <Calendar size={18} />
                        2018 - 2020
                      </p>
                      <p className="text-gray-400 text-sm">Mumbai, India</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Entry-level position focusing on data collection, cleaning, and basic analysis. Built foundation in SQL, Excel, and statistical methods.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-blue-300 font-semibold mb-3">Key Highlights:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">GPA: 6.0/10 with distinction</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Cleaned and prepared datasets for senior analyst consumption</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Created comprehensive documentation for data processes</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">Supported market research projects with statistical analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          id="certifications"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.6 }}
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Data Analytics Certificate",
                provider: "Gana Tech Solutions",
                description: "Comprehensive training in Python, SQL, Tableau, and Excel, focusing on statistical analysis, data cleaning, and business insights.",
                link:PowerBICertificate
              },
              {
                title: "PowerBI Workshop Certificate",
                provider: "Office Master",
                description: "Expertise in data modeling, visualization, and report automation covering DAX functions, Power Query, and interactive dashboards.",
                link:PowerBICertificate
              },
              {
                title: "SQL & Database Assessment Certificate",
                provider: "LearnTube",
                description: "Strong abilities in database design, query optimization, and structured data analysis with real-world problem-solving.",
                link:SQLCertificate
              },
              {
                title: "AI Tools Workshop Certificate",
                provider: "be10x",
                description: "Proficiency in using AI for workflow automation, predictive analytics, and decision-making with practical business applications.",
                link:AIToolsCertificate
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-black/50 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Award size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-blue-300 font-medium">{cert.provider}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <motion.a 
                  href={cert.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg transition-all duration-300 group/btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          id="contact"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-black/50 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
                  <MessageCircle size={28} />
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Ready to transform your data into actionable insights? I'm here to help you unlock the power of your data through advanced analytics and visualization.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Phone, text: "+91 9505884744", link: "tel:+919505884744" },
                    { icon: Mail, text: "sunkararamesh300@gmail.com", link: "mailto:sunkararamesh300@gmail.com" },
                    { icon: MapPin, text: "KPHB Colony, Hyderabad", link: "https://www.google.com/maps/@17.4970902,78.3946396,17.07z" },
                    { icon: Linkedin, text: "LinkedIn Profile", link: "https://www.linkedin.com/in/ramesh-sunkara-726bba350" },
                  ].map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                        <contact.icon size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                      </div>
                      <span className="text-gray-300 group-hover:text-blue-300 transition-colors">
                        {contact.text}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-black/50 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
                  <Send size={28} />
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="Data Analysis Project / Collaboration Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your data analysis needs, project requirements, or collaboration ideas..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </form>
                
                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-sm text-blue-300 text-center">
                    Your message will be sent directly to my WhatsApp for quick response!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="bg-gradient-to-br from-black/50 to-blue-900/20 p-12 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Ready to Transform Data into Insights?
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Let's collaborate and turn your data challenges into business opportunities.
            </p>
            <motion.button
              onClick={() => window.open("https://wa.me/919505884744", "_blank")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/25"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Hire Me Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-blue-500/20 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
                Ramesh Sunkara
              </h3>
              <p className="text-gray-400">Data Analyst | Turning Data into Actionable Insights</p>
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-6 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[
                { icon: Github, link: "https://github.com/Rameshsunkara30" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/ramesh-sunkara-726bba350" },
                { icon: Mail, link: "mailto:sunkararamesh300@gmail.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="p-3 bg-blue-500/20 rounded-full border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} className="text-blue-400" />
                </motion.a>
              ))}
            </motion.div>
            
            <motion.p 
              className="text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              © 2025 Ramesh Sunkara. All rights reserved.
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;