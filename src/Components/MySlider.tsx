import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProCreate from "../assets/procreate.png";
import Figma from "../assets/figma.png";
import Dribbble from "../assets/dribbble.png";
import Sketch from "../assets/sketch.png";
import Behance from "../assets/behance.png";
import Principle from "../assets/principle.png";

const MySlider = () => {
	const settings = {
		className: "center",
		centerMode: true,
		centerPadding: "100px",
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		pauseOnHover: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<div id="mySlider" className="px-8 lg:px-20 mt-16 md:mt-24 lg:mt-36 slider-container">
			<Slider {...settings}>
				<>
					<div className="bg-CDark03 hover:bg-CDark2 px-8 py-4 w-4/5 mx-auto ">
						<a href="https://procreate.com/" title="Go to procreate">
							<img src={ProCreate} alt="procreate logo" className="object-fill h-10  mx-auto" />
						</a>
					</div>
				</>
				<>
					<div className="bg-CDark03 hover:bg-CDark2 w-4/5 mx-auto  px-8 py-4">
						<a href="https://www.figma.com/" title="Go to figma">
							<img src={Figma} alt="figma logo" className="object-contain h-10 mx-auto" />
						</a>
					</div>
				</>
				<>
					<div className="bg-CDark03 hover:bg-CDark2 px-8 py-4 w-4/5 mx-auto ">
						<a href="https://dribbble.com/" title="Go to dribbble">
							<img src={Dribbble} alt="dribbble logo" className="object-contain h-10 mx-auto" />
						</a>
					</div>
				</>
				<>
					<div className="bg-CDark03 hover:bg-CDark2 px-8 py-4 w-4/5  mx-auto">
						<a href="https://www.sketch.com/" title="Go to Sketch">
							<img src={Sketch} alt="sketch logo" className="object-contain h-10 mx-auto" />
						</a>
					</div>
				</>
				<>
					<div className="bg-CDark03 hover:bg-CDark2 px-8 py-4 w-4/5 mx-auto">
						<a href="https://www.behance.net/" title="Go to Behance">
							<img src={Behance} alt="Behance logo" className="object-contain h-10 mx-auto" />
						</a>
					</div>
				</>
				<>
					<div className="bg-CDark03 hover:bg-CDark2 px-8 py-4 w-4/5 mx-auto">
						<a href="#" title="Go to principle">
							<img src={Principle} alt="principle logo" className="object-contain h-10 mx-auto" />
						</a>
					</div>
				</>
			</Slider>
		</div>
	);
};

export default MySlider;
