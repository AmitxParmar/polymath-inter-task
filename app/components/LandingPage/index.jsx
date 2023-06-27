"use client";
import MarqueeIcons from "./MarqueeIcons";

const LandingPage = () => {
  return (
    <div className="lg:py-12 mb-24 lg:mb-0 md:px-10 lg:px-[134px] mx-auto lg:max-w-screen-xl py-3 flex flex-col lg:flex-row md:gap-x-12 ">
      <div className="relative py-12 px-6 md:px-0 lg:h-[500px] lg:w-[500px] lg:min-w-[550px] max-w-[500px] mx-auto flex flex-col justify-center">
        
          <h1 className="md:min-w-full text-4xl mb-6 md:min-h-[130px]  md:text-[3rem] md:leading-[59.52px] font-grotesk font-bold tracking-[-0.02em]">
            Get discovered by your{" "}
            <span className="text-[#ED4A60]">dream companies</span>
          </h1>
        
        
          <p className="md:max-w-[450px] tracking-[-0.015em] !font-inter font-normal leading-[1.75] text-default text-[1.125rem]">
            A new age platform helping students unlock their dream career with
            proof of skills and experience
          </p>
        
      </div>

      <div
        
        className="fade-x my-auto overflow-visible flex-none shrink-0 lg:max-w-[450px] md:max-h-[400px] lg:max-h-[500px] lg:w-[500px] min-w-[320px] bg-transparent flex flex-col gap-y-[39px]"
      >
        <MarqueeIcons />
      </div>
    </div>
  ); // 1.125 font-size : 1.125rem
  //line height: 1.75
};

export default LandingPage;
