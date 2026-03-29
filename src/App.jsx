import { Suspense } from "react";
import "./App.css";
import ProductSection from "./components/Main/ProductSection";
import Banner from "./components/Banner/Banner";
import StatsSection from "./components/Banner/StatsSection";
import Navbar from "./components/Navbar/Navbar";

const fetchProducts = async () => {
	const res = await fetch("/data.json");
	return res.json();
};

function App() {
	const productsPromise = fetchProducts();

	return (
		<>
			<Navbar></Navbar>
			<Banner></Banner>
			<StatsSection></StatsSection>
			<Suspense
				fallback={
					<div className="flex justify-center items-center min-h-screen">
						<span className="loading loading-dots loading-xl"></span>
					</div>
				}
			>
				<ProductSection
					productsPromise={productsPromise}
				></ProductSection>
			</Suspense>
		</>
	);
}

export default App;
