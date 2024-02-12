const ContactSection = () => {
	return (
		<section className="container mx-auto px-8 mt-16 md:mt-24 lg:mt-36 bg-CDark flex items-center justify-center  relative">
			<div className="hidden lg:block bg-white h-7 w-7 absolute top-5 left-5"></div>
			<div className="hidden lg:block bg-CBlue h-14 w-14 absolute bottom-5 right-5"></div>
			<div className="flex flex-col text-white items-center my-8 lg:my-28  gap-8">
				<h2 className=" text-4xl font bold text-center">Working with us are the path to success</h2>
				<p className="opacity-70 text-center">
					Get the Onboarding Package for Free and enjoy our platform with the support of our
					professional onboarding team.
				</p>
				<form className="flex flex-col md:flex-row items-center w-full md:w-3/4 lg:w-1/2 gap-5">
					<input
						type="text"
						className="border border-solid border-CDark2 w-full  bg-black opacity-10 placeholder-white p-3"
						placeholder="Name"
						title="Enter your name"
					/>

					<button
						className="bg-CRed px-6 py-3 text-white hover:text-CBlue shadow6 font-bold"
						title="Subsribe"
					>
						Subscribe
					</button>
				</form>
				<p className="opacity-30 text-center">
					WARNING: once you join udix you will lose the need for any other landing page
				</p>
			</div>
		</section>
	);
};

export default ContactSection;
