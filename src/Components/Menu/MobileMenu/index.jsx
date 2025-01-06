const MobileMenu = ({ navLinks, isMenuOpen, setIsMenuOpen }) => (
    <div
        className={`md:hidden fixed top-16 left-0 w-full bg-[#2C1810] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >
        <div className="container mx-auto px-4 py-6 max-w-[1024px] space-y-4">
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="block py-3 px-4 text-white hover:bg-amber-500/20 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {link.label}
                </a>
            ))}
        </div>
    </div>
);

export default MobileMenu;
