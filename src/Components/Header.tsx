import HeroSection from "./HeroSection";
import NavSection from "./NavSection";

const Header = () => {
	return (
		<section className="w-full py-6  relative">
			<div className="w-full h-3/5 lg:w-3/5 lg:h-full bg-CBlue absolute top-0 left-0 z-[-2]"></div>
			<div className="w-full h-3/5 lg:h-full bgTopimg  absolute top-0 left-0 z-[-1]"></div>
			<NavSection />
			<HeroSection />
		</section>
	);
};

export default Header;
