import React from "react";
import Logo from "../../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-gray-200 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Columns */}
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-neutral-700 mb-2">Explore</h3>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Link 1
          </a>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Link 2
          </a>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Link 3
          </a>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-neutral-700 mb-2">
            Our Services
          </h3>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Service 1
          </a>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Service 2
          </a>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Service 3
          </a>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-neutral-700 mb-2">
            For Breeder
          </h3>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Option 1
          </a>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Option 2
          </a>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Option 3
          </a>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-neutral-700 mb-2">Support</h3>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            FAQ
          </a>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Help Center
          </a>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Contact
          </a>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-neutral-700 mb-2">About us</h3>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Our Story
          </a>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Team
          </a>
          <a href="#" className="text-neutral-500 text-sm hover:text-[#09B29F]">
            Careers
          </a>
        </div>
      </div>
      {/* Bottom row */}
      <div className="max-w-7xl mx-auto mt-12  my-6 flex flex-col md:flex-row items-start justify-around gap-4">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </div>
        <div className="text-neutral-700 text-lg text-left w-64">
          <span className="font-bold">The Perfect Puppy Match</span>
          <br />
          <span className="text-sm text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
        <div className="text-neutral-700 text-lg text-left w-64">
          <span className="font-bold">Need Help?</span>
          <br />
          <span className="text-sm text-neutral-500">Call: (123) 456-7890</span>
        </div>
        <div className="text-neutral-700 text-lg text-left font-bold w-64">Follow us</div>
      </div>
    </footer>
  );
}
