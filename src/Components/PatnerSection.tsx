import LA from "../assets/leftA.svg";
import RA from "../assets/rightA.svg";
import ProCreate from "../assets/procreate.png";
import Figma from "../assets/figma.png";
import Dribbble from "../assets/dribbble.png";
import Sketch from "../assets/sketch.png";
import Behance from "../assets/behance.png";
import Principle from "../assets/principle.png";

const PatnerSection = () => {
	return (
		<section className="px-8 lg:px-20 mt-16 md:mt-24 lg:mt-36 flex flex-col items-center justify-center gap-5 lg:gap-20">
			<h2 className="text-CDark text-4xl text-center font-bold">
				Working with a diverse global customer base
			</h2>
			<div className="flex flex-col gap-5 lg:gap-10 items-center justify-center">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7">
					<div className="bg-CDark03 hover:bg-CDark2  px-10 py-5">
						<a href="https://procreate.com/" title="Go to procreate">
							<img
								src={ProCreate}
								alt="procreate logo"
								className="object-contain mix-blend-saturation"
							/>
						</a>
					</div>
					<div className="bg-CDark03 hover:bg-CDark2 px-10 py-5">
						<a href="https://www.figma.com/" title="Go to figma">
							<img src={Figma} alt="figma logo" className="object-contain " />
						</a>
					</div>
					<div className="bg-CDark03 hover:bg-CDark2 px-10 py-5">
						<a href="https://dribbble.com/" title="Go to dribbble">
							<img src={Dribbble} alt="dribbble logo" className="object-contain " />
						</a>
					</div>
					<div className="bg-CDark03 hover:bg-CDark2 px-10 py-5">
						<a href="https://www.sketch.com/" title="Go to Sketch">
							<img src={Sketch} alt="sketch logo" className="object-contain " />
						</a>
					</div>
					<div className="bg-CDark03 hover:bg-CDark2 px-10 py-5">
						<a href="https://www.behance.net/" title="Go to Behance">
							<img src={Behance} alt="Behance logo" className="object-contain " />
						</a>
					</div>
					<div className="bg-CDark03 hover:bg-CDark2 px-10 py-5">
						<a href="#" title="Go to principle">
							<img src={Principle} alt="principle logo" className="object-contain " />
						</a>
					</div>
				</div>
				<div className="inline-flex  items-center gap-4">
					<button title="Previous">
						<img src={LA} alt="left arrow" />
					</button>
					<p className="text-CDark text-center opacity-30" title="Slide 1 of 2">
						1 / 2
					</p>
					<button title="next">
						<img src={RA} alt="right arrow" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default PatnerSection;
