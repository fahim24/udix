import CRMI from "../assets/crmIcon.svg";
import WebI from "../assets/webIcon.svg";
import MobI from "../assets/mobileIcon.svg";
import RA from "../assets/rightA2.svg";

const ServiceSection = () => {
	return (
		<section className="container mx-auto px-8 lg:px-20 flex flex-col gap-16 mt-16 md:mt-24 lg:mt-36">
			<div className="flex flex-col item-center gap-10">
				<h2 className="text-CDark text-center text-4xl font-bold">
					Solutions that will change your business forever
				</h2>
				<p className="text-CDark7 text-center">
					Some networks believe that by only offering a basic tracking system their affiliates can
					reach a high level of creativity. We like to set the bar a lot higher by offering you
					cutting-edge tech solutions together with a team of creative experts.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				<div className="flex flex-col gap-10 items-start p-8">
					<img src={CRMI} alt="crm icon" />
					<div className="flex flex-col gap-4">
						<h3 className="text-2xl font-bold text-CDark">CRM Product</h3>
						<p className="text-CDark7">Some networks believe that by only offering. </p>
					</div>
					<a href="#" title="Go to crm product">
						<img src={RA} alt="right arrow" />
					</a>
				</div>
				<div className="flex flex-col gap-10 items-start p-8 bg-ClRed shadow4 relative">
					<img src={WebI} alt="web icon" />
					<div className="flex flex-col gap-4">
						<h3 className="text-2xl font-bold text-white">Web Services</h3>
						<p className="text-white">Some networks believe that by only offering. </p>
					</div>
					<a href="#" title="Go to web services">
						<img src={RA} alt="right arrow" />
					</a>
					<div className="h-7 w-7 absolute bottom-5 right-5 bg-CBlue"></div>
				</div>
				<div className="flex flex-col gap-10 items-start p-8">
					<img src={MobI} alt="mobile icon" />
					<div className="flex flex-col gap-4">
						<h3 className="text-2xl font-bold text-CDark">Mobile App</h3>
						<p className="text-CDark7">Some networks believe that by only offering. </p>
					</div>
					<a href="#" title="Go to mobile app">
						<img src={RA} alt="right arrow" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
