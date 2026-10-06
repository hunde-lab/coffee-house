import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Instagram, Disc, Twitter } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate backend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-body uppercase tracking-[0.25em] text-[#C86D51] font-semibold">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-normal text-[#1C130E]">
            Contact Kaffa & Ember
          </h2>
          <p className="font-body text-base text-[#5A4D41] font-light">
            Have questions about wholesale roasted beans, private Buna ceremonies, or catering? Send us a note.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#E6DAC8] rounded-3xl p-8 sm:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl text-[#1C130E]">Message Received</h3>
                <p className="font-body text-sm text-[#5A4D41] max-w-md mx-auto font-light">
                  Thank you for reaching out to KAFFA & EMBER. Our team will review your inquiry and respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 bg-[#1C130E] text-[#FAF7F2] px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-body font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-body uppercase tracking-wider text-[#4A3E34] font-semibold block">
                      Full Name <span className="text-[#C86D51]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full bg-[#F2ECE1]/70 border rounded-xl px-4 py-3 text-sm font-body text-[#1C130E] placeholder-[#9A8B7D] focus:outline-none focus:ring-2 focus:ring-[#C86D51] ${
                        errors.name ? 'border-red-500' : 'border-[#E6DAC8]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-600 font-body flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-body uppercase tracking-wider text-[#4A3E34] font-semibold block">
                      Email Address <span className="text-[#C86D51]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className={`w-full bg-[#F2ECE1]/70 border rounded-xl px-4 py-3 text-sm font-body text-[#1C130E] placeholder-[#9A8B7D] focus:outline-none focus:ring-2 focus:ring-[#C86D51] ${
                        errors.email ? 'border-red-500' : 'border-[#E6DAC8]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-600 font-body flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </span>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-body uppercase tracking-wider text-[#4A3E34] font-semibold block">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#F2ECE1]/70 border border-[#E6DAC8] rounded-xl px-4 py-3 text-sm font-body text-[#1C130E] placeholder-[#9A8B7D] focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-body uppercase tracking-wider text-[#4A3E34] font-semibold block">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#F2ECE1]/70 border border-[#E6DAC8] rounded-xl px-4 py-3 text-sm font-body text-[#1C130E] focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Private Buna Ceremony">Private Buna Ceremony & Events</option>
                      <option value="Wholesale Coffee Beans">Wholesale Coffee Bean Program</option>
                      <option value="Press & Media">Press & Media</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-body uppercase tracking-wider text-[#4A3E34] font-semibold block">
                    Message <span className="text-[#C86D51]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event, question, or inquiry..."
                    className={`w-full bg-[#F2ECE1]/70 border rounded-xl px-4 py-3 text-sm font-body text-[#1C130E] placeholder-[#9A8B7D] focus:outline-none focus:ring-2 focus:ring-[#C86D51] ${
                      errors.message ? 'border-red-500' : 'border-[#E6DAC8]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-600 font-body flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1C130E] hover:bg-[#32231A] text-[#FAF7F2] py-4 rounded-full text-xs font-body uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-md focus:ring-2 focus:ring-[#C86D51]"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-[#C86D51]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Social Links & Community Note */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F2ECE1] border border-[#E6DAC8] rounded-3xl p-8 space-y-6">
              <h3 className="font-display text-2xl text-[#1C130E]">Connect & Follow</h3>
              <p className="font-body text-sm text-[#5A4D41] font-light leading-relaxed">
                Join our community for fresh roast drops, traditional ceremony schedules, and curated ambient café playlists.
              </p>

              {/* Social Channels List */}
              <div className="space-y-4 pt-2">
                <a
                  href="#"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6DAC8] hover:border-[#C86D51] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-[#1C130E] text-white flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-[#C86D51]" />
                    </div>
                    <div>
                      <span className="font-display text-sm font-semibold text-[#1C130E] block">Instagram</span>
                      <span className="text-xs font-body text-[#7A6B5D]">@kaffa.ember</span>
                    </div>
                  </div>
                  <span className="text-xs font-body text-[#C86D51] group-hover:translate-x-1 transition-transform">
                    Follow →
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6DAC8] hover:border-[#C86D51] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-[#1C130E] text-white flex items-center justify-center">
                      <Disc className="w-5 h-5 text-[#C86D51]" />
                    </div>
                    <div>
                      <span className="font-display text-sm font-semibold text-[#1C130E] block">Spotify</span>
                      <span className="text-xs font-body text-[#7A6B5D]">Buna Ritual Sessions</span>
                    </div>
                  </div>
                  <span className="text-xs font-body text-[#C86D51] group-hover:translate-x-1 transition-transform">
                    Listen →
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6DAC8] hover:border-[#C86D51] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-[#1C130E] text-white flex items-center justify-center">
                      <Twitter className="w-5 h-5 text-[#C86D51]" />
                    </div>
                    <div>
                      <span className="font-display text-sm font-semibold text-[#1C130E] block">X / Twitter</span>
                      <span className="text-xs font-body text-[#7A6B5D]">@kaffaember</span>
                    </div>
                  </div>
                  <span className="text-xs font-body text-[#C86D51] group-hover:translate-x-1 transition-transform">
                    Connect →
                  </span>
                </a>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#1C130E] text-[#FAF7F2] space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#C86D51] font-body">Wholesale & Hospitality</span>
              <h4 className="font-display text-lg font-medium">Partner With Us</h4>
              <p className="text-xs font-body text-[#D5C7B3] font-light">
                We supply specialty cafés, fine dining establishments, and boutiques with micro-batch Ethiopian roasts. Email <a href="mailto:wholesale@kaffa-ember.com" className="text-[#C86D51] underline">wholesale@kaffa-ember.com</a>.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
