const FooterLinks = ({ title, links }) => (
    <div>
        <h3 className="text-xl font-semibold mb-6 text-amber-500">{title}</h3>
        <div className="grid grid-cols-2 gap-4">
            {links.map((group, index) => (
                <ul key={index} className="space-y-3">
                    {group.map((link, i) => (
                        <li key={i}>
                            <a href={link.href} className="text-sm hover:text-amber-400 transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    </div>
);

export default FooterLinks;
