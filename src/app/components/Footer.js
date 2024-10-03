import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section style={{ height: '50px' }} className="bg-gray-100 py-2 h-32">
      <div className="container h-2 px-4">
        <h2 className="text-xl font-bold text-center mb-2">Contact Me</h2>
        <div className="flex justify-center space-x-4">
          {/* Phone */}
          <a href="tel:+123456789" className="flex flex-col items-center  text-gray-800 hover:text-blue-500">
            <FontAwesomeIcon icon={faPhone} height={50} />
            
            <span className="text-sm">+216-277-240-62</span>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/saharstambouli" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-1 text-gray-800 hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} height={50}  />
            <span className="text-sm">Instagram</span>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sahar-stambouli-43976211a/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-1 text-gray-800 hover:text-blue-700">
            <FontAwesomeIcon icon={faLinkedin} height={50} />
            <span className="text-sm">LinkedIn</span>
          </a>

          {/* Email */}
          <a href="mailto:your.email@example.com" className="flex flex-col items-center space-y-1 text-gray-800 hover:text-green-500">
            <FontAwesomeIcon icon={faEnvelope} height={50}  />
            <span className="text-sm">stambouli.sahar@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
