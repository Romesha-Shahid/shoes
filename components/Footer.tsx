import React from 'react';

const Footer = () => {
  return (
    <div className="bg-slate-200 w-full py-10">
      <footer className="container mx-auto px-4 text-blue-600">
        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-9">
          {/* Resources */}
          <div className="text-black">
            <h1 className="font-extrabold text-lg mb-4">Resources</h1>
            <ul className="space-y-2 text-sm">
              <li>Gift Cards</li>
              <li>Find a Store</li>
              <li>Membership</li>
              <li>Nike Journal</li>
              <li>Site Feedback</li>
            </ul>
          </div>
          {/* Get Help */}
          <div className="text-black">
            <h1 className="font-extrabold text-lg mb-4">Get Help</h1>
            <ul className="space-y-2 text-sm">
              <li>Order Status</li>
              <li>Shipping and Delivery</li>
              <li>Returns</li>
              <li>Order Cancellation</li>
              <li>Payment Options</li>
              <li>Gift Card Balance</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* Company */}
          <div className="text-black">
            <h1 className="font-extrabold text-lg mb-4">Company</h1>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Purpose</li>
            </ul>
          </div>
          {/* Promotions */}
          <div className="text-black">
            <h1 className="font-extrabold text-lg mb-4">Promotions & Discounts</h1>
            <ul className="space-y-2 text-sm">
              <li>Student</li>
              <li>Military</li>
              <li>Teacher</li>
              <li>First Responders & Medical Professionals</li>
              <li>Birthday</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-black text-sm hover:text-slate-500">
          <p>© 2024 @ romeshashahid</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;