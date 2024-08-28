import { Cursor, Typewriter } from 'react-simple-typewriter'
import "./LandingPageStyle.css"
import ArrowIcon from "../../assets/up-arrow.webp"
import AiIcon from "../../assets/artificial-intelligence.webp"
import { useEffect, useState } from 'react';

const LandingPage = () => {
    const [placeholderText, setPlaceholderText] = useState(
      'Unlock Tailored Services: Your Needs, Instantly Found'
    );

    function throttleFunc(func, delay) {
        let inThrottle = false;

        return function(...args) {
          const context = this;

          if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => {
              inThrottle = false;
            }, delay);
          }
        };
      }

      useEffect(() => {
        const updatePlaceholder = throttleFunc(() => {
            console.log(window.innerWidth,"width")
          if (window.innerWidth <= 640) {
                setPlaceholderText('Unlock Tailored Services');
          } else {
            setPlaceholderText('Unlock Tailored Services: Your Needs, Instantly Found');
          }
        }, 200);

        updatePlaceholder();
        window.addEventListener('resize', updatePlaceholder);

        return () => {
          window.removeEventListener('resize', updatePlaceholder);
        };
      }, []);

    return (
      <div className="min-h-screen animated-background relative flex flex-col items-center justify-center px-4">
        {/* Wave Animation */}
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        {/* End */}

        <main className="relative flex-grow font-poppins flex flex-col items-center justify-center text-center text-white mt-12 w-full z-10">
          <span className="text-xl md:text-4xl font-black text-wrap lg:text-[48px]">
            Immersive Digital Experiences
          </span>
          <span className="font-extrabold lg:text-[48px] text-xl md:text-4xl py-5">
            Through{' '}
            <Typewriter
              words={['Technology', 'Creativity', 'Data']}
              loop={true}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
            <Cursor />
          </span>
          <div className="mt-8 flex items-center text-gray-700 bg-white rounded-full px-6 py-2 shadow-md w-full max-w-[80vh] ">
            <input
              type="text"
              placeholder={placeholderText}
              className="flex-grow focus:outline-none text-gray-700 font-semibold w-full text-sm md:text-base"
            />
            <button className="ml-4 bg-purple-600 text-white rounded-full p-2 focus:outline-none">
              <img src={ArrowIcon} alt="arrow-icon" className="h-5 md:h-6" />
            </button>
          </div>
          <p className="text-[13px] font-[500] flex gap-2 items-center text-white opacity-70 mt-[20px] ml-[-10px]">
            <img
              src={AiIcon}
              alt="intelligence"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              style={{ color: 'transparent' }}
            />
            Powered by AI
          </p>
        </main>

        <footer className="relative z-10 py-8">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full focus:outline-none text-sm md:text-base">
            Explore Our Services 
          </button>
        </footer>
      </div>
    );
  };

export default LandingPage;
