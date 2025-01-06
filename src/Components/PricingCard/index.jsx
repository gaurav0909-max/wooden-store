import { Pin } from 'lucide-react'; // Importing Pin icon from lucide-react

const PricingCard = ({ title, price, features, isPopular }) => {
    const popularClass = isPopular ? 'border-2 border-[#D8B28A] bg-[#8B5E3C] text-white' : 'border border-gray-300 bg-gray-50 text-gray-800';
    const priceClass = isPopular ? 'text-[#D8B28A]' : 'text-gray-800';
    const buttonClass = isPopular
        ? 'bg-[#8B5E3C] text-white hover:bg-[#704A2C]'
        : 'bg-yellow-900 text-white hover:bg-gray-700';

    return (
        <div
            className={`rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs mx-auto ${popularClass}`}
        >
            <div className={`relative p-8 transition-all duration-300`}>
                {isPopular && (
                    <span
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#D8B28A] text-[#8B5E3C] text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider"
                        role="img"
                        aria-label="Most Popular plan"
                    >
                        Most Popular
                    </span>
                )}
                <h3 className="text-3xl font-semibold tracking-wide">{title}</h3>
                <div className="mt-4 flex items-baseline space-x-2">
                    <span className={`text-4xl font-extrabold ${priceClass}`}>
                        ₹{price}
                    </span>
                    <span className={`text-sm font-medium ${isPopular ? 'text-gray-100' : 'text-gray-500'}`}>/sheet</span>
                </div>
            </div>

            <div className="p-6 bg-gray-200">
                <ul className="space-y-4 text-gray-700 text-sm">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <Pin className="h-5 w-5 text-[#8B5E3C] mr-2" role="img" aria-label="Feature icon" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <button
                    aria-label={`Select ${title} plan`} // For screen reader support
                    className={`mt-8 w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${buttonClass}`}
                >
                    Select Plan
                </button>
            </div>
        </div>
    );
};

export default PricingCard;
