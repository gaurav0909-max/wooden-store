import { Quote, Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="relative group">
            {/* Background card with hover effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-100/10 to-amber-100/30 rounded-2xl transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-amber-100/20 h-full transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                    <div className="bg-amber-500 rounded-full p-2">
                        <Quote className="w-6 h-6 text-white" />
                    </div>
                </div>

                {/* Rating */}
                <div className="flex mb-6 pt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                            key={i}
                            className="w-5 h-5 text-amber-500 fill-amber-500"
                        />
                    ))}
                </div>


                <p className="text-xl font-['Crimson_Pro'] text-gray-800 italic relative pl-12 before:absolute 
                before:left-0 before:top-[-10px] before:text-amber-500 before:text-6xl before:opacity-50 before:-z-10 
                leading-relaxed tracking-wide mb-4 text-balance">
                    {testimonial.text}
                </p>


                {/* Author info */}
                <div className="flex items-center gap-4 mt-auto">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-200">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs">
                            ✓
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-amber-600 text-sm">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;