import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-300">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="font-bold text-lg text-gray-900">Company Info</h3>
          <ul className="mt-4 space-y-2">
            <Link href="/about" className="hover:text-blue-600">update will soon</Link>
          </ul>
        </div>

        {/* Column 2: Legal */}
        <div>
          <h3 className="font-bold text-lg text-gray-900">Legal</h3>
          <ul className="mt-4 space-y-2">
            <Link href="/about" className="hover:text-blue-600">"All products and services offered on this website are subject to applicable laws and regulations. By using this site, you agree to our Terms of Service and Privacy Policy. Prices, promotions, and availability are subject to change without notice. Customers are responsible for ensuring that the products they purchase comply with local laws and regulations in their region."</Link>
          </ul>
        </div>

        {/* Column 3: Features */}
        <div>
          <h3 className="font-bold text-lg text-gray-900">Features</h3>
          <ul className="mt-4 space-y-2">
            <Link href="/marketing" className="hover:text-blue-600">Wide Product Selection: Explore a diverse range of high-quality products tailored to meet your every need.
<br />1.Secure Payments: Shop confidently with our fully encrypted and secure payment gateways.
<br />2.Fast Shipping: Get your orders delivered quickly with our reliable shipping options.
<br />3.Easy Returns & Exchanges: Enjoy hassle-free returns and exchanges within our flexible policy.
</Link>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div>
          <h3 className="font-bold text-lg text-gray-900">Resources</h3>
          <ul className="mt-4 space-y-2">
            <Link href="/ios" className="hover:text-blue-600">iOS & Android</Link>
          </ul>
        </div>

        {/* Column 5: Get in Touch */}
        <div>
          <h3 className="font-bold text-lg text-gray-900">Get In Touch</h3>
          <form className="mt-4">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-r-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor amet.</p>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 text-center py-4 text-sm">
        <p>
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
