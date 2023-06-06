import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-center bg-no-repeat min-h-[263px] flex items-center py-8">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between lg:flex-row ">
          <div className="flex items-center justify-center flex-1 mb-6 text-4xl text-center text-orange lg:text-left lg:justify-start">
            Pet First
          </div>
          <div className="flex-1 text-white">
            <ul className="flex flex-col items-center mb-8 text-base font-semibold gap-y-6 lg:flex-row lg:gap-x-4">
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="flex justify-center lg:justify-start">
              <div className="mr-6">Follow</div>
              <ul className="flex gap-x-4">
                <li>
                  <a href="#">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
