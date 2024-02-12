import NavBar from "./NavBar";
import Logo from "../assets/logo.svg";
import { useState } from "react";

const NavSection = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		const nav = document.getElementById("navMenu");

		if (!isOpen) {
			nav?.classList.remove("hidden");
			nav?.classList.add("flex");

			setIsOpen((prevIsLang) => !prevIsLang);
		} else {
			nav?.classList.remove("flex");
			nav?.classList.add("hidden");

			setIsOpen((prevIsLang) => !prevIsLang);
		}
	};

	const resetMenu = () => {
		const nav = document.getElementById("navMenu");

		if (isOpen) {
			nav?.classList.remove("flex");
			nav?.classList.add("hidden");

			setIsOpen((prevIsLang) => !prevIsLang);
		}
	};

	return (
		<nav className="container w-full mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-10 ">
			<div className="flex w-full md:w-auto justify-between">
				<a href="#" onClick={resetMenu} title="Go to home">
					<img src={Logo} alt="Logo" />
				</a>
				<button
					className="block md:hidden uppercase text-white border border-solid border-white py-2 px-4"
					title="Open/Close nav menu"
					onClick={toggleMenu}
				>
					Menu
				</button>
			</div>

			<span className="hidden md:inline-block text-white opacity-30">•</span>

			<NavBar resetMenu={resetMenu} />
		</nav>
	);
};

export default NavSection;
