import { Star } from "lucide-react";

const Features = ({ features }) => {
    if (!features) return null;
    return (
        <ul className="mt-3 space-y-1 text-sm text-gray-500">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-2" />
                    {feature}
                </li>
            ))}
        </ul>
    );
};

export default Features;
