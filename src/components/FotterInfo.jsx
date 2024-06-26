import React from "react";
import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const FotterInfo = () => {
  return (
    <footer>
      <div className="mt-20 border-t py-10 border-neutral-700 ">
        <div className="lg:flex lg:justify-between  grid sm:grid-cols-2 grid-cols-1  gap-4 px-[6%]  sm:px-[10%] justify-between">
          <div>
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 ">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <h3 className="text-md font-semibold mb-4 text-[#915EFF]">
          Copyright © 2024 Menghor Phat ®
        </h3>
      </div>
    </footer>
  );
};

export default FotterInfo;
