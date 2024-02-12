import Down from "../assets/down.svg";
import Star from "../assets/star.svg";
import Comp from "../assets/comp.svg";

const HeroSection = () => {
	return (
		<div className="container mx-auto px-8 my-10 md:my-16 lg:my-36 grid grid-cols-1 lg:grid-cols-2 text-white gap-x-40 gap-y-10">
			<div className="flex flex-col items-center lg:items-start gap-20">
				<div className="flex flex-col items-center item-start gap-10">
					<div className="flex flex-col gap-5 w-full items-center  lg:items-start">
						<div className="flex item-start gap-2.5">
							<img src={Star} alt="star icon" />
							<p className="font-bold">Top market company</p>
						</div>
						<h1 className="text-6xl font-bold capitalize text-ClRed shadow2 text-center lg:text-left">
							Focus on the work that matters
						</h1>
					</div>
					<p className="text-2xl text-center lg:text-left">
						udix is the world’s first smart workspace. We bring all your team’s content together
						while letting you use the tools you love.
					</p>
				</div>
				<button className="flex item-start gap-2.5 justify-center" title="Read more">
					<p className="text-ClRed hover:text-white font-bold">Read more</p>
					<img src={Down} alt="Down Icon" />
				</button>
			</div>
			<div className=" bg-white text-CDark flex justify-between shadow5 wfull relative">
				<form action="#" className="flex flex-col items-start w-full gap-8 m-8  md:m-16">
					<h3 className="font-bold text-2xl">Get started now</h3>
					<div className="flex flex-col items-start w-full  gap-5">
						<input
							type="text"
							className="border border-solid border-CDark2 p-2 placeholder-CDark3 w-full md:w-3/4"
							placeholder="Name"
							title="Enter your name"
						/>
						<input
							type="text"
							className="border border-solid border-CDark2 p-2 placeholder-CDark3 w-full md:w-3/4"
							placeholder="Email"
							title="Enter your email"
						/>
						<input
							type="text"
							className="border border-solid border-CDark2 p-2 placeholder-CDark3 w-full md:w-3/4"
							placeholder="Phone Number"
							title="Enter your phone number"
						/>
						<input
							type="text"
							className="border border-solid border-CDark2 p-2 placeholder-CDark3 w-full md:w-3/4"
							placeholder="Company Name"
							title="Enter your Company name"
						/>
					</div>
					<button
						className="bg-CBlue px-6 py-3 text-white hover:text-ClRed shadow3 font-bold"
						title="Sign up"
					>
						Sign up
					</button>
					<div className="flex items-center gap-1" title="Get support">
						<p className="text-CDark opacity-50 text-xs">Support:</p>
						<a href="#" className="text-xs text-CBlue" title="Send an email">
							help@udix.com
						</a>
					</div>
				</form>
				<div className="hidden md:block bg-CBlue opacity-5 w-20 absolute top-5 right-5 bottom-5"></div>
				<img
					src={Comp}
					alt="Design image"
					className="absolute right-3 bottom-3 md:bottom-[60px] h-20 md:h-40"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
