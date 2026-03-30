import { LuShoppingCart } from "react-icons/lu";
import { toast } from "react-toastify";
import CartsCard from "./UI/CartsCard";

const UserCart = ({ carts, setCarts }) => {
	// const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

	let totalPrice = 0;
	for (const cart of carts) {
		// console.log(cart);
		totalPrice = totalPrice + cart.price;
	}

	const checkOutHandle = () => {
		setCarts([]);
		toast.success("Payment Successfull!");
	};

	return (
		<div className="p-5 lg:p-0">
			{carts.length === 0 ? (
				<div className="max-w-7xl mx-auto border-2 border-zinc-200 px-7 py-10 rounded-xl space-y-4">
					<h2 className="text-xl font-bold">Your Cart</h2>
					<div className="flex justify-center items-center p-5 md:p-20">
						<div className="flex flex-col justify-center items-center gap-5">
							<LuShoppingCart className="text-5xl text-zinc-300"></LuShoppingCart>
							<p className="font-medium">Your cart is empty</p>
						</div>
					</div>
				</div>
			) : (
				<div className="max-w-7xl mx-auto border-2 border-zinc-300 px-2 md:px-7 py-2 rounded-xl space-y-4">
					<h2 className="text-xl font-bold">Your Cart</h2>
					{carts.map((cart, index) => (
						<CartsCard
							key={index}
							cart={cart}
							setCarts={setCarts}
							carts={carts}
						></CartsCard>
					))}

					<div className="flex justify-between items-center mt-10">
						<div>
							<p className="text-zinc-400">Total:</p>
						</div>
						<div>
							<p className="text-2xl font-bold">${totalPrice}</p>
						</div>
					</div>

					<div>
						<button
							onClick={checkOutHandle}
							className="btn btn-block bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full"
						>
							Proceed to Checkout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserCart;
