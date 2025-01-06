import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import FooterContact from "../../Components/footer-ui/FooterContact";
import FooterLinks from "../../Components/footer-ui/FooterLinks";
import FooterLogo from "../../Components/footer-ui/FooterLogo";
import FooterNewsletter from "../../Components/footer-ui/FooterNewsletter";
import FooterSocialMedia from "../../Components/footer-ui/FooterSocialMedia";

const Footer = () => {
    const quickLinks = [
        [
            { href: "#", label: "Home" },
            { href: "#", label: "Products" },
            { href: "#", label: "Services" },
        ],
        [
            { href: "#", label: "About Us" },
            { href: "#", label: "Contact" },
            { href: "#", label: "FAQ" },
        ]
    ];

    const socialLinks = [
        { href: '#', icon: <FaFacebook /> },
        { href: '#', icon: <FaTwitter /> },
        { href: '#', icon: <FaInstagram /> },
        { href: '#', icon: <FaLinkedinIn /> }
    ];



    return (
        <footer className="bg-[#2C1810] text-white py-16 rounded-lg">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Footer Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo and Description */}
                    <FooterLogo />

                    {/* Quick Links */}
                    <FooterLinks title="Explore" links={quickLinks} />

                    {/* Contact Information */}
                    <FooterContact />

                    {/* Newsletter */}
                    <FooterNewsletter />
                </div>

                {/* Social Media and Copyright */}
                <div className="mt-12 pt-6 border-t border-gray-700 flex justify-between items-center">
                    <FooterSocialMedia socialLinks={socialLinks} />

                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} WoodCraft. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
