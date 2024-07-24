import './App.css';

function App() {
  return (
    <section class="flex flex-col items-center justify-center gap-10 pt-20 px-4 pb-24 bg-appBackground">
      <div class="flex space-x-2 items-center bg-badgeGroup py-1 pr-2 pl-1 gap-3 rounded-lg">
        <button class="text-customBlue text-sm font-medium border border-customBlue rounded-lg bg-white py-0.5 px-2.5">
          Join us
        </button>
        <div>
        <p class="text-neutralBlack text-sm font-medium leading-[19.6'px] gap-1">✨ Come join us at Convention</p>
        </div>
      </div>
  
      <div>
        <div class="flex flex-col gap-6 items-center justify-center w-[343px]">
        <p class='text-5xl font-semibold text-center leading-[52.8px]'>The ultimate influencer discovery platform</p>
        <p class="text-l font-normal leading-[25.2px]">So good you'll keep it forever.</p>
        </div>
        <div class='flex pt-4 gap-4 justify-center'>
          <button class="border rounded py-3 px-6 gap-2 bg-neutralBlack text-white text-base font-normal">
            Book a demo
          </button>
        </div>
      </div>

      <div className="py-10 gap-2 flex flex-col items-center">
        <div className="ipad-frame">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Y3Yh5RYb14cm3Mo1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="ipad-notch"></div>
        </div>
      </div> 
    </section>
  );
}

export default App;
