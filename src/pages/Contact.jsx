import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Simulate API call
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-lg mt-20">
      <div className="bg-white shadow-2xl rounded-xl p-8 border border-pink-100">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Contact Me</h2>
        {submitted && (
          <div className="bg-pink-50 text-pink-700 p-4 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition bg-pink-50/50"
              aria-label="Name"
            />
            {errors.name && <p className="text-pink-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition bg-pink-50/50"
              aria-label="Email Address"
            />
            {errors.email && <p className="text-pink-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition bg-pink-50/50"
              aria-label="Message"
            ></textarea>
            {errors.message && <p className="text-pink-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;