const Badge = ({ badge }) => {
    if (!badge) return null;
    return (
        <div className="absolute top-4 left-4 bg-[#6E260E] text-white text-xs font-medium px-3 py-1 rounded-lg z-10">
            {badge}
        </div>
    );
};

export default Badge;
