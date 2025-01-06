const Specifications = ({ specifications }) => {
    if (!specifications) return null;
    return (
        <ul className="mt-4 space-y-1">
            {specifications.slice(0, 3).map((spec, index) => (
                <li key={index} className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    {spec}
                </li>
            ))}
            {specifications.length > 3 && <li className="text-sm text-gray-400 italic">+ more</li>}
        </ul>
    );
};

export default Specifications;
