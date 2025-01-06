import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const FooterContact = () => (
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
);

export default FooterContact;
