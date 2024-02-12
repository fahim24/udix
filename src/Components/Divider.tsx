import Ellipse from "../assets/ellipse.svg";
const Divider = () => {
	return (
		<section className="container flex items-center mx-auto h-auto px-8 mt-16 md:mt-24 lg:mt-36 relative">
			<div className="divider w-full h-[1px]"></div>
			<img src={Ellipse} alt="ellipse" className="absolute left-1/2 -translate-x-1/2 h-4 w-4" />
		</section>
	);
};

export default Divider;
