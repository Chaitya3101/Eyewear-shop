const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">ChashmaGhar</h2>
          <p className="text-sm text-gray-400">
            Discover the perfect eyewear that matches your style and comfort.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="/shop" className="hover:text-yellow-500">Shop</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
              <li><a href="/faq" className="hover:text-yellow-500">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="/returns" className="hover:text-yellow-500">Returns</a></li>
              <li><a href="/shipping" className="hover:text-yellow-500">Shipping</a></li>
              <li><a href="/terms" className="hover:text-yellow-500">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-yellow-500">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="font-semibold mb-2">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-3">Subscribe to our newsletter for exclusive offers & updates.</p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="p-2 text-black w-full rounded-l-md" />
            <button className="bg-yellow-500 px-4 py-2 rounded-r-md hover:bg-yellow-600">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} ChashmaGhar. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-yellow-500"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-yellow-500"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-yellow-500"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

