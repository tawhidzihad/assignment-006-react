import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./components/Banner/Banner";
import StatsSection from "./components/Banner/StatsSection";
import StepsSection from "./components/Footer/StepsSection";
import ProductSection from "./components/Main/ProductSection";
import Navbar from "./components/Navbar/Navbar";

const fetchProducts = async () => {
	const res = await fetch("/data.json");
	return res.json();
};

function App() {
	const productsPromise = fetchProducts();
	const [carts, setCarts] = useState([]);

	return (
		<>
			<Navbar carts={carts}></Navbar>
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
					carts={carts}
					setCarts={setCarts}
				></ProductSection>
			</Suspense>
			<StepsSection></StepsSection>

			<ToastContainer></ToastContainer>
		</>
	);
}

export default App;
