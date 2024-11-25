import React from 'react';
import TestimonialCard from "../TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Carpenter",
      role: "Professional Woodworker",
      text: "The quality of their sheets is consistently excellent. I've been using their products for years and they never disappoint. The moisture-resistant plywood is particularly impressive.",
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "New York, USA"
    },
    {
      name: "Sarah Miller",
      role: "Interior Designer",
      text: "Great selection of veneers and amazing customer service. Their premium sheets have become an essential part of my high-end interior design projects.",
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1664541336816-2a2987114ca4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "London, UK"
    },
    {
      name: "Mike Johnson",
      role: "DIY Enthusiast",
      text: "As a hobbyist, I appreciate their competitive pricing and helpful advice. The MDF sheets are perfect for my home projects, and the customer support is outstanding.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Toronto, Canada"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#fffadf] to-[#efe8cb] rounded-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 w-32 h-32 bg-amber-100/50 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-amber-100/50 rounded-full blur-3xl" />

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <p className="text-amber-600 font-medium mb-4 tracking-wider uppercase text-sm">
            Customer Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Join our community of satisfied customers who have experienced the quality and craftsmanship of our wooden furniture firsthand.
          </p>

          {/* Redesigned Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 py-8 border-y-[3px] border-amber-200/50">
            {[
              { value: "2.5K+", label: "Happy Clients", icon: "👥" },
              { value: "98%", label: "Satisfaction Rate", icon: "⭐" },
              { value: "15+", label: "Years Experience", icon: "🏆" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 rounded-xl p-6 border border-transparent hover:border-amber-300 bg-white hover:bg-amber-50"
              >
                <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">{stat.icon}</div>
                <p className="text-3xl font-bold text-amber-600 mb-2 transition-all duration-300">{stat.value}</p>
                <p className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6">
            Ready to experience our quality craftsmanship?
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors duration-200">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;