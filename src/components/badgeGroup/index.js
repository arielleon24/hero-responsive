import React from "react";
import AnimatedShinyText from "../magicui/animated-shiny-text";

function BadgeGroup() {
  return (
    <div className="flex gap-3 self-center py-1 pr-2 pl-1 text-sm font-medium rounded-lg bg-badgeGroup md:leading-5 md:mt-10 md:gap-1">
      <button className="px-2.5 py-0.5 text-center text-customBlue bg-white rounded-lg border border-customBlue border-solid hover:text-white hover:bg-blue-500 transition-colors duration-300 hover:shadow-lg hover:scale-105">
        Join us
      </button>
      <AnimatedShinyText className="my-auto">
        <span>✨ Come join us at Convention</span>
      </AnimatedShinyText>
    </div>
  );
}

export default BadgeGroup;
