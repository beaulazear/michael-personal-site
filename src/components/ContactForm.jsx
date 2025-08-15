import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    project_type: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [touched, setTouched] = useState({});

  // EmailJS Configuration
  const SERVICE_ID = 'service_bkz94eh';
  const TEMPLATE_ID = 'template_6q2a69j';
  const PUBLIC_KEY = '11CxjbisIoTlyftVb'; // Replace with your actual PUBLIC key if different

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(PUBLIC_KEY);
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case 'from_name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'from_email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        if (value && !/^[\d\s\-+()]+$/.test(value)) {
          return 'Please enter a valid phone number';
        }
        return '';
      case 'message':
        return value.trim().length < 20 ? 'Message must be at least 20 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all required fields
    const newErrors = {};
    newErrors.from_name = validateField('from_name', formData.from_name);
    newErrors.from_email = validateField('from_email', formData.from_email);
    newErrors.message = validateField('message', formData.message);
    
    // Remove empty error messages
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ from_name: true, from_email: true, message: true });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone || 'Not provided',
          project_type: formData.project_type || 'Not specified',
          budget: formData.budget || 'Not specified',
          timeline: formData.timeline || 'Not specified',
          message: formData.message,
          to_email: 'julie@brooksideave.com',
        }
      );

      setSubmitStatus('success');
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          from_name: '',
          from_email: '',
          phone: '',
          project_type: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setTouched({});
      }, 2000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = {
    base: `
      w-full px-4 py-3 
      bg-white/50 backdrop-blur-sm
      border-2 border-gray-200
      rounded-xl
      text-gray-800 placeholder-gray-500
      transition-all duration-300
      focus:outline-none focus:border-blue-400 focus:bg-white
      hover:border-gray-300
    `,
    error: 'border-red-400 focus:border-red-400',
    success: 'border-green-400 focus:border-green-400'
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Two Column Layout for Basic Info */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your name"
              className={`${inputStyles.base} ${
                touched.from_name && errors.from_name
                  ? inputStyles.error
                  : touched.from_name && !errors.from_name
                  ? inputStyles.success
                  : ''
              }`}
              disabled={isSubmitting}
            />
            {touched.from_name && errors.from_name && (
              <p className="text-red-300 text-xs mt-1">{errors.from_name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="your@email.com"
              className={`${inputStyles.base} ${
                touched.from_email && errors.from_email
                  ? inputStyles.error
                  : touched.from_email && !errors.from_email
                  ? inputStyles.success
                  : ''
              }`}
              disabled={isSubmitting}
            />
            {touched.from_email && errors.from_email && (
              <p className="text-red-300 text-xs mt-1">{errors.from_email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="(555) 123-4567"
              className={`${inputStyles.base} ${
                touched.phone && errors.phone ? inputStyles.error : ''
              }`}
              disabled={isSubmitting}
            />
            {touched.phone && errors.phone && (
              <p className="text-red-300 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90">
              Project Type
            </label>
            <select
              name="project_type"
              value={formData.project_type}
              onChange={handleChange}
              className={`${inputStyles.base} cursor-pointer`}
              disabled={isSubmitting}
            >
              <option value="">Select a project type</option>
              <option value="full_home">Full Home Design</option>
              <option value="single_room">Single Room</option>
              <option value="renovation">Renovation</option>
              <option value="consultation">Design Consultation</option>
              <option value="commercial">Commercial Space</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget Range */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`${inputStyles.base} cursor-pointer`}
              disabled={isSubmitting}
            >
              <option value="">Select budget range</option>
              <option value="under_25k">Under $25,000</option>
              <option value="25k_50k">$25,000 - $50,000</option>
              <option value="50k_100k">$50,000 - $100,000</option>
              <option value="100k_250k">$100,000 - $250,000</option>
              <option value="over_250k">Over $250,000</option>
            </select>
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90">
              Project Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={`${inputStyles.base} cursor-pointer`}
              disabled={isSubmitting}
            >
              <option value="">Select timeline</option>
              <option value="asap">As soon as possible</option>
              <option value="1_3_months">1-3 months</option>
              <option value="3_6_months">3-6 months</option>
              <option value="6_12_months">6-12 months</option>
              <option value="planning">Just planning</option>
            </select>
          </div>
        </div>

        {/* Message Field - Full Width */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/90">
            Project Details <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell us about your vision, style preferences, and any specific requirements..."
            rows={6}
            className={`${inputStyles.base} resize-none ${
              touched.message && errors.message
                ? inputStyles.error
                : touched.message && !errors.message
                ? inputStyles.success
                : ''
            }`}
            disabled={isSubmitting}
          />
          <div className="flex justify-between items-center">
            {touched.message && errors.message && (
              <p className="text-red-300 text-xs">{errors.message}</p>
            )}
            <p className="text-white/60 text-xs ml-auto">
              {formData.message.length} characters
            </p>
          </div>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-500/20 border border-green-400 rounded-xl">
            <p className="text-green-100 text-center font-medium">
              ✨ Thank you for your inquiry! We'll be in touch within 24 hours.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-500/20 border border-red-400 rounded-xl">
            <p className="text-red-100 text-center">
              There was an error sending your message. Please try again or email directly at mike@ariadesignllc.com
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              relative group
              px-12 py-4
              bg-white text-gray-900
              font-semibold text-lg
              rounded-full
              transition-all duration-300
              ${isSubmitting 
                ? 'opacity-70 cursor-not-allowed' 
                : 'hover:bg-gray-100 hover:scale-105 hover:shadow-2xl'
              }
              shadow-xl
            `}
          >
            <span className="relative z-10 flex items-center gap-3">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                      fill="none"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Start Your Project
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </>
              )}
            </span>
            
            {/* Decorative gradient border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>
      </form>

      {/* Additional Contact Info */}
      <div className="mt-12 pt-8 border-t border-white/20">
        <p className="text-center text-white/80 text-sm">
          Prefer to reach out directly? Email us at{' '}
          <a 
            href="mailto:mike@ariadesignllc.com" 
            className="text-white font-medium hover:underline"
          >
            mike@ariadesignllc.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;