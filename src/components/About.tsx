import HeroImg from "../assets/Hero_Image.png"
const About = () => {
  return (
    <div id="about" className="py-20 px-4 flex flex-col md:flex-row justify-center items-center mx-auto md:w-10/12">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={HeroImg} alt="Hero" className="max-w-full h-auto object-contain" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">
        <h1 className="text-4xl font-bold text-theme-color">About</h1>
        <p className="">Hi, I'm Muhammad Saad Bin Khalid – a Frontend Developer passionate about crafting modern, responsive, and high-performance web applications.

          With expertise in React, TypeScript, Tailwind CSS, and Framer Motion, I create interactive, user-friendly experiences that blend aesthetics with functionality. My focus is on writing clean, maintainable code while ensuring seamless performance across devices.

          I’m always eager to explore new technologies, optimize user experiences, and push the boundaries of front-end development. Let's build something amazing together!</p>
        <button className="text-base border-2 border-theme-color text-white rounded py-4 font-bold cursor-pointer hover:bg-theme-color w-48">Download Resume</button>
      </div>
    </div>
  )
}

export default About
