import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-10 border-t">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Navigation */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-x-1 text-sm font-medium text-right pb-3 border-b">
    <a href="#">About Us</a>
    <a href="#">Coaches</a>
    <a href="#">News</a>
    <a href="#">Matches</a>
    <a href="#">Programs</a>
    <a href="#">Amenities</a>
    <a href="#">Blogs</a>
    <a href="#">FAQs</a>
  </div>
</div>



        {/* Logo & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-8">
          {/* SSA Logo */}
          <img src="/SSA-logo 1.svg" alt="SSA Logo" className="h-25" />

          {/* Address */}
          <div className="text-left space-y-2">
            <h3 className="text-green-600 font-bold">Signature Slam Academy</h3>
            <p>30 Wills Hill Road, Lovedale, NSW</p>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />
              <span>+91 5642589752</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-green-600" />
              <span>info@ssagroup.com</span>
            </div>
          </div>

          {/* Social */}
          <div className="text-left">
            <h3 className="text-green-600 font-bold mb-2">Connect with us</h3>
            <div className="flex gap-4 text-xl">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-gradient-to-r from-[#003A5D] to-[#99B81B] text-white text-sm py-2 px-6 flex justify-between">
        <span>Terms And Condition</span>
        <span>© 2023 All Rights Reserved www.signatureslamacademy.com</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
}
