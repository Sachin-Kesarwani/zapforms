// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-center text-sm">
            &copy; 2025 ZapForms. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <span className="text-white hover:text-blue-500">Facebook</span>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <span className="text-white hover:text-blue-500">Twitter</span>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <span className="text-white hover:text-blue-500">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  