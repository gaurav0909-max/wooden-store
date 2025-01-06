const FooterNewsletter = () => (
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
);

export default FooterNewsletter;
