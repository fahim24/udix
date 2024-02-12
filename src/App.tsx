import "./App.css";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import Divider from "./Components/Divider";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MySlider from "./Components/MySlider";
import PatnerSection from "./Components/PatnerSection";
import ServiceSection from "./Components/ServiceSection";
import TopSection from "./Components/TopSection";

function App() {
	return (
		<div className="box-border m-0">
			<Header />
			<TopSection />
			<Divider />
			<ServiceSection />
			<Divider />
			<AboutSection />
			<ContactSection />
			<PatnerSection />
			<MySlider />
			<Footer />
		</div>
	);
}

export default App;
