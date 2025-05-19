import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function BottomPage() {
  return (
    <div className="w-full">
      {/* Top Coaches & Events Section */}
      <section className="flex flex-col md:flex-row w-full">
        {/* Coaches Section */}
        <div
          className="w-full md:w-1/2 h-[340px] md:h-[420px] text-white flex items-end p-8"
          style={{
            backgroundImage: "url('/coach-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="text-3xl font-bold">
              Our Coaches <span className="text-[#99B81B]">•</span>
            </h2>
            <p className="text-sm mt-2 max-w-xs">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <a href="#" className="inline-flex items-center gap-1 mt-4 text-sm border-b border-white w-fit">
              Read More →
            </a>
          </div>
        </div>

        {/* Events Section */}
        <div className="w-full md:w-1/2 h-[340px] md:h-[420px] text-black p-8 relative bg-[#99B81B] overflow-hidden">
          <img
            src="/event-graphic.png"
            className="absolute right-6 bottom-4 w-[100px] md:w-[140px] opacity-20"
            alt="Event Illustration"
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold">
              Events <span className="text-white">•</span>
            </h2>
            <p className="text-sm mt-2 max-w-xs">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <a href="#" className="inline-flex items-center gap-1 mt-4 text-sm border-b border-black w-fit">
              Read More →
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white text-black">
        <div className="max-w-screen-xl mx-auto px-6 py-10">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 text-center text-sm font-medium gap-4 border-b pb-6">
            <a href="#">About Us</a>
            <a href="#">Coaches</a>
            <a href="#">News</a>
            <a href="#">Matches</a>
            <a href="#">Programs</a>
            <a href="#">Amenities</a>
            <a href="#">Blogs</a>
            <a href="#">FAQs</a>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-8">
            {/* SSA Logo */}
            <img src="/ssa-logo.png" alt="SSA Logo" className="h-14" />

            {/* Address + Contact */}
            <div className="text-left space-y-2">
              <h3 className="text-[#99B81B] font-bold">Signature Slam Academy</h3>
              <p>30 Wills Hill Road, Lovedale, NSW</p>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#99B81B]" />
                <span>+91 5642589752</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#99B81B]" />
                <span>info@ssagroup.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-left">
              <h3 className="text-[#99B81B] font-bold mb-2">Connect with us</h3>
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
        <div className="bg-gradient-to-r from-[#003A5D] to-[#99B81B] text-white text-xs flex justify-between px-4 md:px-10 py-2">
          <span>Terms And Condition</span>
          <span>© 2023 All Rights Reserved www.signatureslamacademy.com</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}
