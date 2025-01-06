import { pricingPlans } from "../../data/pricingplanData";
import PricingCard from "./PricingCard";

const Pricing = () => {

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
