import HeroImg from "../assets/Hero_Image.png";

const Hero = () => {
  return (
    <div className="min-h-screen pt-40 md:py-20 px-4 flex flex-col md:flex-row justify-center items-center mx-auto md:w-10/12">
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <h4 className="text-lg sm:text-xl">Hi there! I am</h4>
        <h1 className="text-4xl sm:text-5xl font-bold">
          FrontEnd <span className="text-theme-color">Developer</span>
        </h1>
        <h4 className="text-lg sm:text-xl">
          With Expertise in React, Tailwind CSS, and TypeScript
        </h4>
        <button className="bg-theme-color text-white rounded py-3 px-6 font-bold cursor-pointer mx-auto md:mx-0 max-w-28">
          Hire Me!
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={HeroImg} alt="Hero" className="max-w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default Hero;
