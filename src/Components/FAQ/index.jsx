import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        question: "What types of wood sheets do you offer?",
        answer: "We offer a wide range of wood sheets including plywood, MDF, hardwood veneer, and marine-grade sheets in various thicknesses and sizes."
      },
      {
        question: "Do you offer custom sizing?",
        answer: "Yes, we provide custom sizing services for all our wood sheets. Please contact our team for specific requirements and pricing."
      },
      {
        question: "What is your delivery timeframe?",
        answer: "Standard delivery takes 3-5 business days. We also offer express delivery options for urgent requirements."
      },
      {
        question: "Do you provide bulk order discounts?",
        answer: "Yes, we offer competitive discounts for bulk orders. Contact our sales team for a custom quote based on your requirements."
      }
    ];

    return (
        <section id="faq" className="py-24 bg-[#D8C8B9] rounded-lg">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
                    <p className="mt-4 text-gray-500">Everything you need to know about our products</p>
                </div>
                <div className="mt-12 space-y-6">
                    {faqs.map((faq, index) => {
                        const { question, answer } = faq;
                        return (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    className="w-full px-6 py-4 text-left focus:outline-none hover:bg-gray-50"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-900">{question}</span>
                                        <svg
                                            className={`w-5 h-5 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className={`px-6 pb-4 ${openIndex === index ? 'block' : 'hidden'}`}
                                >
                                    <p className="text-gray-500">{answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
