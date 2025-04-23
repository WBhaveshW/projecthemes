'use client';
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = { name: '', email: '', phone: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="text-gray-700 font-medium block mb-1">Name</label>
          <input
            type="text"
            name="name"
            className={`w-full px-1 py-2 border-0 border-b-2 transition-all duration-300 
                ${errors.name 
                  ? 'border-red-500 focus:border-red-600' 
                  : formData.name 
                    ? 'border-green-500 focus:border-green-600' 
                    : 'border-gray-300 focus:border-indigo-600'} 
                focus:border-b-4 focus:shadow-lg focus:outline-none`}
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
  <label className="text-gray-700 font-medium block mb-1">Email</label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="you@example.com"
    className={`w-full px-1 py-2 border-0 border-b-2 transition-all duration-300
      ${errors.email 
        ? 'border-red-500 focus:border-red-600' 
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) 
          ? 'border-green-500 focus:border-green-600' 
          : 'border-gray-300 focus:border-indigo-600'} 
      focus:border-b-4 focus:shadow-lg focus:outline-none`}
  />
  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
</div>

        {/* Phone */}
       <div>
  <label className="text-gray-700 font-medium block mb-1">Phone Number</label>
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="9876543210"
    maxLength={10}
    className={`w-full px-1 py-2 border-0 border-b-2 transition-all duration-300
      ${errors.phone 
        ? 'border-red-500 focus:border-red-600' 
        : /^\d{10}$/.test(formData.phone) 
          ? 'border-green-500 focus:border-green-600' 
          : 'border-gray-300 focus:border-indigo-600'} 
      focus:border-b-4 focus:shadow-lg focus:outline-none`}
  />
  {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
</div>


        {/* Message */}
        <div>
          <label className="text-gray-700 font-medium block mb-1">Message</label>
          <textarea
            name="message"
            rows={4}
            className={`w-full px-1 py-2 border-0 border-b-2 transition-all duration-300 
                ${errors.message 
                  ? 'border-red-500 focus:border-red-600' 
                  : formData.message 
                    ? 'border-green-500 focus:border-green-600' 
                    : 'border-gray-300 focus:border-indigo-600'} 
                focus:border-b-4 focus:shadow-lg focus:outline-none`}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
