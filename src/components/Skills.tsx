import HtmlIcon from "../assets/html-icon.png"
import CssIcon from "../assets/css-icon.png"
import BootstrapIcon from "../assets/bootstrap-icon.png"
import JsIcon from "../assets/js-icon.png"
import ReactIcon from "../assets/reacticon.png"
import TsIcon from "../assets/typescript-icon.png"
import TailwindCssIcon from "../assets/tailwind-css-icon.svg"

const Skills = () => {
  // const logos = [{name: "Html"},{ name: "Tailwind Css", path: TailwindCssIcon }]
  const logos = [HtmlIcon, CssIcon, BootstrapIcon, JsIcon, ReactIcon, TailwindCssIcon, TsIcon]

  return (
    <div id="skills" className="flex flex-col w-3/4 mx-auto py-10 gap-10">
      <h1 className="text-5xl font-bold text-center">My Skills</h1>
      <div className="flex justify-around flex-wrap ">
        {logos.map(((logo, index) => (
          <div key={index} className="w-20 flex justify-center items-center">
            <img src={logo} alt="" />
          </div>
        )))}
      </div>
    </div>
  )
}

export default Skills
