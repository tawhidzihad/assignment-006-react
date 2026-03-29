import "./App.css";
import Banner from "./components/Banner/Banner";
import StatsSection from "./components/Banner/StatsSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Banner></Banner>
			<StatsSection></StatsSection>
		</>
	);
}

export default App;
