// FooterSocialMedia component
const FooterSocialMedia = ({ socialLinks }) => {
    return (
        <div className="flex space-x-4">
            {socialLinks.map(({ href, icon }, index) => (
                <a href={href} key={index} className="text-white hover:text-amber-500 transition-colors" aria-label={href.split('/')[2]}>
                    {icon}
                </a>
            ))}
        </div>
    );
};

export default FooterSocialMedia;