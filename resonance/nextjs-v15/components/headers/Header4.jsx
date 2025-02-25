"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";

import Image from "next/image";

export default function Header4({ links }) {
  return (
    <div className="main-nav-sub container">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap position-static local-scroll">
        <a href="top" className="logo">
          <Image
            src="/assets/images/logo.svg"
            alt="Your Company Logo"
            width={250}
            height={45}
            className="dark-mode-logo special-class"
          />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav links={links} />
          <li className="desktop-nav-display">
            <div className="vr mt-2" />
          </li>
          <li>
            <a href="tel:+18376528800">
              <i className="mi-mobile size-24 color-primary-1 align-center" />
              +1 (929) 578-0864
            </a>
          </li>
          {/* Social Links */}
          {/* End Social Links  */}
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
