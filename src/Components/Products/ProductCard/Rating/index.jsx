import { Star } from "lucide-react";

const Rating = ({ rating, reviewCount }) => {
    return (
        <div className="flex items-center mt-3">
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}`}
                    />
                ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">({reviewCount} reviews)</span>
        </div>
    );
};

export default Rating;
