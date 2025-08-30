import { useState } from 'react';
import { Send, Upload, Calendar, User, GraduationCap, FileText } from 'lucide-react';

const Application = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      studentId: '',
      program: '',
      year: '',
      expectedGraduation: ''
    },
    background: {
      previousLeadership: '',
      workExperience: '',
      volunteerExperience: '',
      skills: '',
      languages: ''
    },
    motivation: {
      whyJoin: '',
      goals: '',
      contribution: '',
      availability: ''
    },
    preferences: {
      programs: [],
      committees: [],
      eventTypes: []
    }
  });

  const programs = [
    'Leadership Development Program',
    'Mentorship Network',
    'Professional Workshops',
    'Networking Events',
    'Cultural Celebrations',
    'Business Case Competitions'
  ];

  const committees = [
    'Events & Programming',
    'Marketing & Communications', 
    'Finance & Partnerships',
    'Community Outreach',
    'Professional Development',
    'Cultural Affairs'
  ];

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleCheckboxChange = (section: string, field: string, value: string) => {
    setFormData(prev => {
      const sectionData = prev[section as keyof typeof prev] as any;
      const currentArray = sectionData[field] as string[] || [];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      
      return {
        ...prev,
        [section]: {
          ...sectionData,
          [field]: newArray
        }
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you within 5 business days.');
  };

  return (
    <section id="apply" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient-primary mb-4">
            Join ABL Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards developing your leadership potential and connecting with like-minded peers
          </p>
        </div>

        {/* Application Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-card rounded-xl shadow-card">
            <GraduationCap className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-foreground mb-2">Leadership Development</h3>
            <p className="text-sm text-muted-foreground">Develop essential leadership skills through workshops and mentorship</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-card">
            <User className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-foreground mb-2">Professional Network</h3>
            <p className="text-sm text-muted-foreground">Connect with industry professionals and successful alumni</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-card">
            <Calendar className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-foreground mb-2">Exclusive Events</h3>
            <p className="text-sm text-muted-foreground">Access to networking events, workshops, and cultural celebrations</p>
          </div>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-elegant">
          {/* Personal Information */}
          <div className="mb-10">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 flex items-center">
              <User className="w-6 h-6 mr-3 text-primary" />
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                <input
                  type="text"
                  required
                  value={formData.personalInfo.firstName}
                  onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                <input
                  type="text"
                  required
                  value={formData.personalInfo.lastName}
                  onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Student ID *</label>
                <input
                  type="text"
                  required
                  value={formData.personalInfo.studentId}
                  onChange={(e) => handleInputChange('personalInfo', 'studentId', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Program of Study *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Business Administration"
                  value={formData.personalInfo.program}
                  onChange={(e) => handleInputChange('personalInfo', 'program', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Year of Study *</label>
                <select
                  required
                  value={formData.personalInfo.year}
                  onChange={(e) => handleInputChange('personalInfo', 'year', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Graduate">Graduate Student</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Expected Graduation</label>
                <input
                  type="month"
                  value={formData.personalInfo.expectedGraduation}
                  onChange={(e) => handleInputChange('personalInfo', 'expectedGraduation', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Programs of Interest */}
          <div className="mb-10">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Programs of Interest
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {programs.map((program) => (
                <label key={program} className="flex items-center p-4 bg-background rounded-lg border border-border hover:bg-muted transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-3 rounded border-border text-primary focus:ring-primary"
                    onChange={(e) => handleCheckboxChange('preferences', 'programs', program)}
                  />
                  <span className="text-sm text-foreground">{program}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience & Background */}
          <div className="mb-10">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              Experience & Background
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Previous Leadership Experience
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe any leadership roles, clubs, or organizations you've been involved in..."
                  value={formData.background.previousLeadership}
                  onChange={(e) => handleInputChange('background', 'previousLeadership', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Work & Volunteer Experience
                </label>
                <textarea
                  rows={4}
                  placeholder="Share your professional and volunteer experiences..."
                  value={formData.background.workExperience}
                  onChange={(e) => handleInputChange('background', 'workExperience', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Skills & Talents
                </label>
                <input
                  type="text"
                  placeholder="e.g., Public Speaking, Event Planning, Marketing, Languages..."
                  value={formData.background.skills}
                  onChange={(e) => handleInputChange('background', 'skills', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Motivation & Goals */}
          <div className="mb-10">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
              Motivation & Goals
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Why do you want to join ABL? *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what motivates you to join our community..."
                  value={formData.motivation.whyJoin}
                  onChange={(e) => handleInputChange('motivation', 'whyJoin', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  What do you hope to achieve through ABL? *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your personal and professional goals..."
                  value={formData.motivation.goals}
                  onChange={(e) => handleInputChange('motivation', 'goals', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How can you contribute to our community? *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share what unique value you can bring to ABL..."
                  value={formData.motivation.contribution}
                  onChange={(e) => handleInputChange('motivation', 'contribution', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
            </div>
          </div>

          {/* Committee Interest */}
          <div className="mb-10">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
              Committee Interests (Optional)
            </h3>
            <p className="text-muted-foreground mb-4">
              Select committees you'd like to participate in or lead:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {committees.map((committee) => (
                <label key={committee} className="flex items-center p-4 bg-background rounded-lg border border-border hover:bg-muted transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-3 rounded border-border text-primary focus:ring-primary"
                    onChange={(e) => handleCheckboxChange('preferences', 'committees', committee)}
                  />
                  <span className="text-sm text-foreground">{committee}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Resume Upload */}
          <div className="mb-10">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 flex items-center">
              <Upload className="w-6 h-6 mr-3 text-primary" />
              Resume/CV (Optional)
            </h3>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-2">
                Upload your resume or CV (PDF, DOC, DOCX - Max 5MB)
              </p>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className="btn-outline-elegant cursor-pointer inline-block"
              >
                Choose File
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn-hero inline-flex items-center"
            >
              Submit Application
              <Send className="w-5 h-5 ml-2" />
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              We'll review your application and respond within 5 business days.
            </p>
          </div>
        </form>

        {/* Contact for Questions */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have questions about the application process?
          </p>
          <a href="#contact" className="text-primary hover:text-primary-hover font-medium">
            Contact our membership team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Application;