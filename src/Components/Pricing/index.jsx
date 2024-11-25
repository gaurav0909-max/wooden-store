import PricingCard from "../PricingCard";

const Pricing = () => {
    const pricingPlans = [
        {
            title: "Standard Plywood",
            price: "29.99",
            features: [
                "18mm thickness",
                "Basic grade",
                "Suitable for general use",
                "Bulk discounts available"
            ]
        },
        {
            title: "Premium Grade",
            price: "49.99",
            features: [
                "18mm thickness",
                "Premium grade",
                "Moisture resistant",
                "Custom sizing available",
                "Priority support"
            ],
            isPopular: true
        },
        {
            title: "Professional",
            price: "79.99",
            features: [
                "18mm thickness",
                "Marine grade",
                "Weather resistant",
                "Custom finishing",
                "24/7 support"
            ]
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-[#F1E6D9] rounded-lg">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-[#5E4B3C]">
                        Pricing Plans
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Choose the perfect wood sheet for your project.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
