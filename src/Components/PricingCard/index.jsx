import { Pin } from 'lucide-react'; // Importing Pin icon from lucide-react

const PricingCard = ({ title, price, features, isPopular }) => {
    return (
        <div
            className={`rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                isPopular ? 'border-2 border-[#D8B28A]' : 'border border-gray-300'
            } w-full max-w-xs mx-auto`}
        >
            {/* Card Header */}
            <div
                className={`relative p-8 ${isPopular ? 'bg-[#8B5E3C] text-white' : 'bg-gray-50 text-gray-800'} transition-all duration-300`}
            >
                {isPopular && (
                    <span className="absolute top-[-3px] left-1/2 transform -translate-x-1/2 bg-[#D8B28A] text-[#8B5E3C] text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                        Most Popular
                    </span>
                )}
                <h3 className="text-3xl font-semibold tracking-wide">{title}</h3>
                <div className="mt-4 flex items-baseline space-x-2">
                    <span className={`text-4xl font-extrabold ${isPopular ? 'text-[#D8B28A]' : 'text-gray-800'}`}>
                        ₹{price}
                    </span>
                    <span className={`text-sm font-medium ${isPopular ? 'text-gray-100' : 'text-gray-500'}`}>/sheet</span>
                </div>
            </div>

            {/* Features List */}
            <div className="p-6 bg-white">
                <ul className="space-y-4 text-gray-700 text-sm">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <Pin className="h-5 w-5 text-[#8B5E3C] mr-2" /> {/* Pin icon from lucide-react */}
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Button */}
                <button
                    className={`mt-8 w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        isPopular
                            ? 'bg-[#8B5E3C] text-white hover:bg-[#704A2C]'
                            : 'bg-yellow-900 text-white hover:bg-gray-700'
                    }`}
                >
                    Select Plan
                </button>
            </div>
        </div>
    );
};

export default PricingCard;
