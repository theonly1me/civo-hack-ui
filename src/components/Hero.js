import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h5 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black text-red-500 mb-14 text-wrap">
        H2S
      </h5>
      <Link
        to="/dashboard"
        className="py-3 px-7 text-white bg-red-500 rounded-full text-xl hover:bg-red-300 transition duration-300 ease-in-out flex items-center"
      >
        Automate
        <svg
          className="w-6 h-6 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Hero;
