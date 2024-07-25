import './App.css';

function App() {
  return (
    <section className="grid gap-10 items-center justify-center pt-20 px-4 pb24 bg-appBackground sm:grid-2">
      <div className="flex space-x-2 items-center bg-badgeGroup py-1 pr-2 pl-1 gap-3 rounded-lg">
        <button className="text-customBlue text-sm font-medium border border-customBlue rounded-lg bg-white py-0.5 px-2.5">
          <p className='font-sans animate-shimmer'>Join us</p>
        </button>
        <div>
        <p className="font-sans text-neutralBlack text-sm font-medium leading-[19.6'px] gap-1 animate-shimmer">✨ Come join us at Convention</p>
        </div>
      </div>
  
      <div>
        <div className="flex flex-col gap-6 items-center justify-center w-[343px]">
        <p className='font-sans text-5xl font-semibold text-center leading-[52.8px]'>The ultimate influencer discovery platform</p>
        <p className=" font-sans text-l font-normal leading-[25.2px]">So good you'll keep it forever.</p>
        </div>
        <div className='flex pt-4 gap-4 justify-center'>
          <button className="border rounded py-3 px-6 bg-neutralBlack text-white text-base font-normal">
            <p className='font-sans'>Book a demo</p>
          </button>
        </div>
      </div>

      <div className="py-10 gap-2 flex flex-col items-center">
        <div className="relative w-[343px] h-[260.56px] border-[16px] border-gray-800 rounded-[36px] bg-black shadow-md overflow-hidden">
          <iframe
            className="w-full h-full border-none"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Y3Yh5RYb14cm3Mo1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-[50px] h-[5px] bg-gray-500 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}

export default App;
