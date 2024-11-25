import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-[#2C1810] text-white py-16 rounded-lg">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Footer Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo and Description */}
                    <div>
                        <div className="flex items-center mb-6">
                            <img 
                                src="/logo.png" 
                                alt="Wooden Craft Logo" 
                                className="h-12 mr-4 rounded-lg"
                            />
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Crafting exceptional wooden solutions with passion, precision, and a commitment to sustainability.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-amber-500">Explore</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Home</a></li>
                                <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Products</a></li>
                                <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Services</a></li>
                            </ul>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">About Us</a></li>
                                <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Contact</a></li>
                                <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-amber-500">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="mr-3 text-amber-500" />
                                <p className="text-sm">123 Woodcraft Lane, Forest City</p>
                            </div>
                            <div className="flex items-center">
                                <FaPhoneAlt className="mr-3 text-amber-500" />
                                <p className="text-sm">(555) 123-4567</p>
                            </div>
                            <div className="flex items-center">
                                <MdEmail className="mr-3 text-amber-500" />
                                <p className="text-sm">support@woodcraft.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-amber-500">Newsletter</h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Subscribe to receive exclusive offers and woodworking tips.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="p-3 text-gray-700 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            <button className="bg-amber-500 text-white px-4 rounded-r-md hover:bg-amber-600 transition-colors">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Media and Copyright */}
                <div className="mt-12 pt-6 border-t border-gray-700 flex justify-between items-center">
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-amber-500 transition-colors">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-amber-500 transition-colors">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-amber-500 transition-colors">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-amber-500 transition-colors">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} WoodCraft. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;