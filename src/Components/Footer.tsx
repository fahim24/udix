import Logo from "../assets/logo2.svg";
import FI from "../assets/Ficon.svg";
import YI from "../assets/Yicon.svg";
import LI from "../assets/Licon.svg";
import GI from "../assets/Gicon.svg";
import SI from "../assets/Sicon.svg";

const Footer = () => {
	return (
		<section className="bg-CDark03 p-8 lg:p-16 flex flex-col items-start  mt-16 md:mt-24 lg:mt-36 gap-8">
			<div className="flex flex-col md:flex-row w-full items-center lg:items-start justify-between  gap-5">
				<a href="#" title="Go to home">
					<img src={Logo} alt="Logo" className="h-7 " />
				</a>

				<div className="flex flex-col md:flex-row items-center justify-end w-full gap-5 lg:gap-10">
					<div className="flex  uppercase text-sm font-semibold  gap-5 lg:gap-10">
						<div className="text-CDark hover:text-ClRed " title="Go to home">
							<a href="#">home</a>
						</div>
						<div className="text-CDark hover:text-ClRed " title="Go to blog">
							<a href="#">blog</a>
						</div>
						<div className="text-CDark hover:text-ClRed " title="Go to products">
							<a href="#">products</a>
						</div>
						<div className="text-CDark hover:text-ClRed " title="Go to contacts">
							<a href="#">contacts</a>
						</div>
					</div>
					<span className="hidden md:block text-CDark opacity-30">•</span>
					<div className="flex gap-10">
						<button className="uppercase text-CBlue hover:text-ClRed font-semibold" title="Sign in">
							sign in
						</button>
						<button
							className="uppercase text-CBlue hover:text-ClRed font-semibold border border-solid border-CBlue hover:border-ClRed py-2 px-4"
							title="Sign up"
						>
							sign up
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row w-full items-center justify-between gap-5">
				<p className="text-xs text-CDark3 w-full md:w-96 order-last md:order-first">
					udix is a market-leading provider of digital marketing services, using proprietary tools
					and methodologies to generate high-value engagement for our customers.
				</p>
				<div className="flex items-center gap-8 order-first md:order-last">
					<a href="www.facebook.com" title="Go to facebook">
						<img src={FI} alt="Facebook Icon" />
					</a>
					<a href="www.youtube.com" title="Go to youtube">
						<img src={YI} alt="youtube Icon" />
					</a>
					<a href="www.linkedin.com" title="Go to linkedin">
						<img src={LI} alt="Linkedin Icon" />
					</a>
					<a href="www.google.com" title="Go to google">
						<img src={GI} alt="Google+ Icon" />
					</a>
					<a href="www.skype.com" title="Go to skype">
						<img src={SI} alt="Skype Icon" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Footer;
