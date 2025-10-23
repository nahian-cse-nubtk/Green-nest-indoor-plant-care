import React from "react";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-green-300 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Privacy Policy</Link>

      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
         <Link to="https://www.instagram.com/"><FaInstagram size={28}/></Link>
         <Link to="https://www.pinterest.com/business/hub/"><FaPinterest size={28}/></Link>
          <Link to="https://www.facebook.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by GreenNest.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
