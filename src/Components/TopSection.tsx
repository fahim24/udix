import Img2 from "../assets/img1.jpg";
import Img1 from "../assets/img2.jpg";
import Logo from "../assets/logo2.svg";
import LA from "../assets/leftA.svg";
import RA from "../assets/rightA.svg";
import { useState } from "react";

const TopSection = () => {
	const [isCard, setIsCard] = useState(true);
	const [imageSrc, setImageSrc] = useState(Img1);

	const Next = () => {
		const Card1 = document.getElementById("Card1");
		const Card2 = document.getElementById("Card2");

		if (isCard) {
			Card1?.classList.add("hidden");
			Card2?.classList.remove("hidden");
			Card2?.classList.add("inline-flex");

			setImageSrc(Img2);
			setIsCard((prevIsLang) => !prevIsLang);
		}
	};
	const Prev = () => {
		const Card1 = document.getElementById("Card1");
		const Card2 = document.getElementById("Card2");

		if (!isCard) {
			Card2?.classList.add("hidden");
			Card1?.classList.remove("hidden");
			Card1?.classList.add("inline-flex");

			setImageSrc(Img1);
			setIsCard((prevIsLang) => !prevIsLang);
		}
	};
	return (
		<section className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 mt-16 md:mt-24 lg:mt-36 gap-8">
			<div className="lg:col-span-2 w-full flex justify-center lg:justify-end order-1">
				<a href="#" title="Go to home">
					<img src={Logo} alt="Logo" className="h-12" />
				</a>
			</div>
			<div id="CardImg" className="order-3 lg:order-2">
				<img
					src={imageSrc}
					alt="Cover Image"
					className="w-full h-48 md:h-80 object-cover shadow1 lg:self-end "
				/>
			</div>
			<div className="order-2 lg:order-3">
				<div id="Card1" className="inline-flex flex-col item-start gap-10 ">
					<h2 className="text-4xl text-CDark font-bold text-center lg:text-right">
						is a leading provider of digital marketing services
					</h2>

					<p className="text-CDark text-center lg:text-right">
						Using proprietary tools and we run thousands of simultaneous self-funded campaigns
						across different platforms such as paid search, social advertising, mobile and video ads
						and many more. The campaigns either support our publishing assets or (in most cases)
						direct users directly to our clients.
					</p>
					<div className="  inline-flex self-center lg:self-end items-center gap-4">
						<p className="text-CDark text-center opacity-30" title="Slide 1 of 2">
							1 / 2
						</p>
						<button onClick={Next} title="Next">
							<img src={RA} alt="right arrow" />
						</button>
					</div>
				</div>
				<div id="Card2" className="hidden flex-col item-start gap-10">
					<h2 className="text-4xl text-CDark font-bold text-center lg:text-right">
						is a leading provider of web and mobile app services
					</h2>

					<p className="text-CDark text-center lg:text-right">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero totam accusantium
						aut enim minus saepe facilis debitis consequatur beatae? Assumenda veritatis distinctio
						repellat consectetur enim nam aliquam maiores, alias cum, necessitatibus repudiandae
						odio corporis. Natus maiores voluptate placeat,
					</p>
					<div className="inline-flex self-center lg:self-end items-center gap-4">
						<button onClick={Prev} title="Previous">
							<img src={LA} alt="left arrow" />
						</button>
						<p className="text-CDark text-center opacity-30" title="Slide 2 of 2">
							2 / 2
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopSection;
