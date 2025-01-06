const DesktopMenu = ({ navLinks }) => (
    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navLinks.map((link) => (
            <a
                key={link.href}
                href={link.href}
                className="relative text-gray-200 text-sm lg:text-base hover:text-amber-500 transition-colors duration-300 group"
            >
                {link.label}
                <span
                    className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"
                />
            </a>
        ))}
    </div>
);

export default DesktopMenu;