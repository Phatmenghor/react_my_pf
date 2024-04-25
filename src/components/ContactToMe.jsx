import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { contactData } from "../constants";
import CartContact from "./CartContact";

const ContactToMe = () => {
  return (
    <div className="flex flex-wrap o gap-10 py-10 ">
      {contactData.map((service, index) => (
        <CartContact key={service.title} index={index} {...service} />
      ))}
    </div>
  );
};

export default SectionWrapper(ContactToMe, "");
