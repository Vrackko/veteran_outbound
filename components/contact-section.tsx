"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

interface FormData {
  firstName: string;
  companyName: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    companyName: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setFormStatus({ type: 'loading', message: '' });

    try {
      // TODO: Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.firstName,
          from_email: formData.email,
          company_name: formData.companyName || 'Not provided',
          message: formData.message,
          to_email: 'vracardanilo3@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });

      // Reset form
      setFormData({
        firstName: '',
        companyName: '',
        email: '',
        message: ''
      });

    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }
  };

  return (
    <section id="contact-section" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl">
            {/* Section Header */}
            <div className="pb-8 text-center md:pb-12">
              <h2
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                data-aos="fade-up"
              >
                Contact Us
              </h2>
              <p 
                className="text-lg text-indigo-200/65"
                data-aos="fade-up" 
                data-aos-delay={200}
              >
                Ready to get started? Get in touch with our team.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Info */}
              <div data-aos="fade-up" data-aos-delay={400}>
                <h3 className="mb-4 font-nacelle text-xl font-semibold text-gray-200">
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20">
                      <svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-indigo-200/65">contact@veteranoutbound.com</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div data-aos="fade-up" data-aos-delay={600}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-indigo-200/65">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="form-input w-full"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="mb-1 block text-sm font-medium text-indigo-200/65">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="form-input w-full"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-indigo-200/65">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input w-full"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-indigo-200/65">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea w-full"
                      placeholder="Tell us about your project or questions..."
                      required
                    />
                  </div>

                  {/* Status Messages */}
                  {formStatus.message && (
                    <div className={`rounded-lg p-3 text-sm ${
                      formStatus.type === 'success' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : formStatus.type === 'error'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                        : ''
                    }`}>
                      {formStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus.type === 'loading'}
                    className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus.type === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}