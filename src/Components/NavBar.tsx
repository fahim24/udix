interface NavProps {
	resetMenu: () => void;
}

const NavBar: React.FC<NavProps> = ({ resetMenu }) => {
	return (
		<div
			id="navMenu"
			className="hidden md:flex flex-col md:flex-row w-full text-white uppercase justify-between items-center text-sm font-semibold gap-y-5"
		>
			<div className="flex flex-col md:flex-row items-center gap-y-5 gap-x-10">
				<div className="text-ClRed " title="Go to home">
					<a href="#" onClick={resetMenu}>
						home
					</a>
				</div>
				<div className="hover:text-ClRed" title="Go to blog">
					<a href="#" onClick={resetMenu}>
						blog
					</a>
				</div>
				<div className="hover:text-ClRed" title="Go to products">
					<a href="#" onClick={resetMenu}>
						products
					</a>
				</div>
				<div className="hover:text-ClRed" title="Go to contacts">
					<a href="#" onClick={resetMenu}>
						contacts
					</a>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-x-10 gap-y-5">
				<button
					className="uppercase text-white lg:text-CBlue hover:text-ClRed font-semibold"
					title="Sign in"
					onClick={resetMenu}
				>
					sign in
				</button>
				<button
					className="uppercase text-white lg:text-CBlue hover:text-ClRed border border-solid border-white lg:border-CBlue hover:border-ClRed py-2 px-4 font-semibold"
					title="Sign up"
					onClick={resetMenu}
				>
					sign up
				</button>
			</div>
		</div>
	);
};

export default NavBar;
