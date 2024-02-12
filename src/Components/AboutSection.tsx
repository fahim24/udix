import Right from "../assets/right.svg";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";

const AboutSection = () => {
	return (
		<section className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16 md:mt-24 lg:mt-36">
			<div className="relative h-[320px] md:h-[534px]  shadow5 order-last lg:order-first">
				<img
					src={Img2}
					alt="Cover Image"
					className="absolute top-0 left-0 hover:z-[1] hover:opacity-100 opacity-30 object-cover h-[280px] md:h-[470px] w-5/6"
				/>
				<img
					src={Img1}
					alt="Cover Image"
					className="absolute top-10 md:top-16 left-10 md:left-16 object-cover h-[280px] md:h-[470px] w-5/6"
				/>
			</div>
			<div className="flex flex-col gap-5 lg:gap-20 order-first lg:order-last">
				<div className="flex flex-col gap-5 lg:gap-10">
					<h2 className="text-CDark text-4xl font-bold">Creativity & Technology</h2>
					<p className="text-CDark7">
						Some networks believe that by only offering a basic tracking system their affiliates can
						reach a high level of creativity. We like to set the bar a lot higher by offering you
						cutting-edge tech solutions together with a team of creative experts on-call with the
						tools you need based on real-time results
					</p>
				</div>
				<div className="flex flex-col gap-5 lg:gap-10">
					<h2 className="text-CDark text-4xl font-bold">Defines our true value</h2>
					<p className="text-CDark7">
						Some networks believe that by only offering a basic tracking system their affiliates can
						reach a high level of creativity. We like to set the bar a lot higher by offering you
						cutting-edge tech.
					</p>
				</div>
				<button className="flex item-start gap-2.5" title="More Solutions">
					<p className="text-CBlue hover:text-ClRed font-bold">Check our solutions</p>
					<img src={Right} alt="Down Icon" />
				</button>
			</div>
		</section>
	);
};

export default AboutSection;
