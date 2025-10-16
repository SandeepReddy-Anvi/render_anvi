import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, children, variant = "primary", className = "" }) => {
  const variants = {
    primary:
      `mt-6 px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-white to-white
        hover:from-[#0097B2] hover:to-[#0097B2]
        bg-[length:0%_100%] hover:bg-[length:100%_100%]
        bg-left bg-no-repeat
        transition-[background-size] duration-500 ease-out
        text-[#1E9AB0] hover:text-white
        border-2 border-[#1E9AB0] font-['Wix_Madefor_Display'] text-[15px] sm:text-[16px] rounded-[16px] shadow-md inline-flex items-center`,
    
    secondary:
      `rounded-[32px] border-[1px] border-gray-200 text-gray-900 px-[23px] py-[11px]
        bg-gradient-to-r from-white to-white
        hover:from-[#1E9AB0] hover:to-[#1E9AB0]
        bg-[length:0%_106%] hover:bg-[length:101%_106%]
        bg-left bg-no-repeat
        transition-[background-size] duration-500 ease-out
        hover:text-white
        font-['Wix_Madefor_Display'] text-[15px] sm:text-[16px]
        inline-flex items-center`,
  };

  return (
    <Link to={to} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
