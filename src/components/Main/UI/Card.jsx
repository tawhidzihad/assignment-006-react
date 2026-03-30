import { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ product, carts, setCarts }) => {
	const [selected, setSelected] = useState(false);

	const handleBuyNowBtn = () => {
		const isFound = carts.find((item) => item.id === product.id);
		if (isFound) {
			toast.error(`${product.name} Already In Cart!`);
			return;
		} else {
			setSelected(true);
			toast.success(`${product.name} Added To Cart`);
			setCarts([...carts, product]);
		}
	};

	const tagStyles = {
		bestSeller:
			"bg-amber-100 text-orange-700 py-2 px-3 rounded-full font-medium",
		new: "bg-green-100 text-green-700 py-2 px-3 rounded-full font-medium",
		popular:
			"bg-indigo-100 bg-linear-to-r text-purple-600 py-2 px-3 rounded-full font-medium",
	};

	return (
		<div className="card border-2 border-zinc-200">
			<div className="card-body p-5 space-y-4">
				<div className="flex justify-end">
					<span className={`${tagStyles[product.tagType]}`}>
						{product.tag}
					</span>
				</div>

				<div>
					<div className="inline-block border border-zinc-200 rounded-full p-3">
						<img src={product.iconImage} alt="Product Image" />
					</div>
				</div>

				<div className="space-y-3">
					<h2 className="text-2xl font-bold">{product.name}</h2>
					<p className="max-w-xs text-zinc-500">
						{product.description}
					</p>
					<p className="text-2xl font-bold capitalize">
						${product.price}
						<span className="text-zinc-500 text-xs capitalize">
							/{product.period}
						</span>
					</p>
				</div>

				<ul className="flex flex-col gap-2 text-xs flex-5">
					{product.features.map((feature, index) => (
						<li key={index}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="size-4 me-2 inline-block text-success"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span className="font-medium">{feature}</span>
						</li>
					))}
				</ul>

				<div>
					<button
						onClick={handleBuyNowBtn}
						className={`${selected ? "btn btn-block rounded-full font-medium py-3 px-5 bg-green-500 text-white" : "btn btn-block rounded-full font-medium py-3 px-5 bg-linear-to-r from-indigo-600 to-purple-600 text-white"}`}
					>
						{selected ? "Added To Cart" : "Buy Now"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
