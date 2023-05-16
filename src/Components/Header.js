import { github_url } from "../Config";

const Header = () => {
  return (
    <div className="header bg-[#778da9] flex  justify-between items-center p-4 px-8  shadow-xl">
      <p className="font-bold text-4xl text-white ">Carousel</p>
      <a
        target="_blank"
        rel="noreferrer"
        className="text-2xl font-medium  text-white group transition duration-300"
        href={github_url}
      >
        Source Code
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
      </a>
    </div>
  );
};

export default Header;
