import React from 'react';
import TestimonialCard from "./TestimonialCard";
import { stats, testimonials } from '../../data/testimonialsData';

const Testimonials = () => {

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
          <p className="text-gray-600 text-lg leading-relaxed text-balance">
            Join our community of satisfied customers who have experienced the quality and craftsmanship of our wooden furniture firsthand.
          </p>

          {/* Redesigned Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 py-8 border-y-[3px] border-amber-200/50">
            {stats.map((stat, index) => (
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
        <div className="mt-20 text-center drop-shadow-xl">
          <p className="text-gray-500 mb-6 	">
            Ready to experience our quality craftsmanship?
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black 
          rounded-lg transition-colors duration-200">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;