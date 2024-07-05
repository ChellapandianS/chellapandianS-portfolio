// App.js
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skill";
import Achivementscertificates from "./Components/Achivementscertificates" ;
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

export default function App() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Skills />
			<Achivementscertificates />
			<Projects />
			<Contact />
			<Footer />
		</>
	);

	
}
