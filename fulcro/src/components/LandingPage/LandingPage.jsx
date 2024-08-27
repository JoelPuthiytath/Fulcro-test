import { Cursor, Typewriter } from 'react-simple-typewriter'
import "./LandingPageStyle.css"
import ArrowIcon from "../../assets/up-arrow.webp"

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center animated-background px-4">
      <main className="flex-grow flex flex-col items-center justify-center text-center text-white mt-8 w-full">
        <span className="text-2xl md:text-5xl font-bold text-wrap">Immersive Digital Experiences</span>
        <span className="font-extrabold text-2xl md:text-5xl py-3">
          Through <span className="ms-1"></span>
          <Typewriter
            words={['Technology', 'Creativity', 'Data']}
            loop={true}
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
          <Cursor />
        </span>
        <div className="mt-8 flex items-center bg-white text-gray-700 rounded-full px-4 py-2 shadow-md w-full max-w-lg">
            <input
                type="text"
                placeholder="Unlock Tailored Services: Your Needs, Instantly Found"
                className="flex-grow focus:outline-none text-gray-700 text-sm md:text-base md:w-full"
            />
            <button className="ml-4 bg-purple-600 text-white rounded-full p-2 focus:outline-none">
                <img src={ArrowIcon} alt="arrow-icon" className="h-5 md:h-6" />
            </button>
            </div>
        <p className="mt-4 text-xs md:text-sm">Powered by AI</p>
      </main>

      <footer className="py-8">
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full focus:outline-none text-sm md:text-base">
          Explore Our Services
        </button>
      </footer>
    </div>
  );
}



export default LandingPage;
