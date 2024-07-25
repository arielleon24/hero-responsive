import React, {useState} from "react";
import BadgeGroup from "../badgeGroup";

const placeholderImg = 'https://s3-alpha-sig.figma.com/img/9720/5dcb/8a74186efae514ede8c3b219ee590d00?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OIUQa7c~QWp4R0Q-2rZMByXS-JrATqfNTXJXGLUnTKlxqhaAYac3GetIooNUEoTc8iHhHgpOS1f~rAnQhwlFgG8gl2gBksnhx~YMEdNXYag-dwsVnURrFanIACw5bprX4hl188sDDn2pr3uY3k9eVw7VuhSkh~c6-4PaPzBvmUKHPEbsSstBO9NIb-rLih3Q-I72Ogy4SvRgVQCGDw3CkO8PvzGBhI0YZsP1vYIg-DtvoHU0px-uaAsBbcCtsjwQm9fqZ~k~pCtEuzOrvJ2qJk4x962n4BvzctclSDV3-ZE2mbhoNpaoTA9RXgOiFTGqHEnplpwvsS5k0oMmnf9vIQ__'


function HeroMain() {
const [isPlaying, setIsPlaying] = useState(false)

  return (
    <main className="flex flex-col justify-center px-4 py-20 mx-auto w-full bg-appBackground leading-[140%] max-w-[480px] md:max-w-[1440px]">
      <BadgeGroup />
      <div className="flex flex-col gap-6">
        <h1 className="flex mt-10 text-5xl mx-auto font-semibold text-center leading-[53px] text-neutralBlack md:max-w-[804px] md:leading-[]">
          The ultimate influencer discovery platform.
        </h1>
        <p className="mt-6 text-lg text-center text-neutral-800">
          So good you'll keep it forever.
        </p>
        <button className='px-6 py-3 text-base text-white rounded border bg-neutralBlack hover:bg-slate-700 transition-colors duration-30 self-center'>
        Book a demo
        </button>
      </div>
      {/* PUT BACKGROUND HERE */}
      <div className="flex overflow-hidden relative">
        <img/>
        <div className="mt-20 w-full h-full relative min-h-[260.56px] ">
      {!isPlaying ? (
        <>
          <div className="relative mx-auto w-full h-full ">
            <img 
              src={placeholderImg} 
              alt="Placeholder" 
              className="mx-auto rounded-xl md:max-w-[1058px] md:h-[565px] md:top-[1px] md:left-[192px] md:border md:rounded-[26px] md:min-h-[565px]" 
            />
            <button 
              onClick={() => setIsPlaying(true)} 
              className="absolute inset-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.78125" width="136" height="136" rx="68" fill="#97BEF9" fill-opacity="0.3"/>
              <rect x="26.5" y="26.7812" width="84" height="84" rx="42" fill="#E0E0E0"/>
              <path d="M58.5031 50.7822V86.7822L88.5031 68.7822L58.5031 50.7822Z" fill="black"/>
              </svg>
            </button>
          </div>
        </>
      ) : (
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
          title="YouTube video player"
          allow="autoplay; fullscreen; picture-in-picture"
          className="w-full h-auto mx-auto rounded-xl min-h-[250px] md:max-w-[1058px] md:h-[565px] md:top-[1px] md:left-[192px] md:border md:rounded-[26px] md:min-h-[565px]"
        ></iframe>
      )}
        </div>
      </div>
    </main>
  );
}

export default HeroMain;
