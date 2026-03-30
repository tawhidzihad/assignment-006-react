import { use, useState } from "react";
import OurProducts from "./OurProducts";
import UserCart from "./UserCart";

const ProductSection = ({ productsPromise, carts, setCarts }) => {
	const productsData = use(productsPromise);
	const [selectType, setSelectType] = useState("products");

	return (
		<main className="max-w-7xl mx-auto py-15 space-y-5">
			<div className="text-center space-y-5">
				<h2 className="text-2xl md:text-4xl font-extrabold">
					Premium Digital Tools
				</h2>
				<p className="max-w-xl mx-auto text-zinc-500">
					Choose from our curated collection of premium digital
					products designed to boost your productivity and creativity.
				</p>
			</div>

			<div className="flex items-center justify-center ">
				<span className="border border-zinc-300 rounded-full p-0.5 flex gap-1">
					<button
						onClick={() => setSelectType("products")}
						className={`cursor-pointer ${selectType === "products" ? "rounded-full font-medium py-3 px-5 bg-linear-to-r from-indigo-600 to-purple-600 text-white" : "rounded-full font-medium py-3 px-5 text-indigo-950"} `}
					>
						Products
					</button>
					<button
						onClick={() => setSelectType("carts")}
						className={`cursor-pointer ${selectType === "carts" ? "rounded-full font-medium py-3 px-5 bg-linear-to-r from-purple-600 to-indigo-600 text-white" : "rounded-full font-medium py-3 px-5 text-indigo-950"} `}
					>
						Cart({carts.length})
					</button>
				</span>
			</div>

			{selectType === "products" ? (
				<OurProducts
					productsData={productsData}
					carts={carts}
					setCarts={setCarts}
				></OurProducts>
			) : (
				<UserCart carts={carts} setCarts={setCarts}></UserCart>
			)}
		</main>
	);
};

export default ProductSection;
