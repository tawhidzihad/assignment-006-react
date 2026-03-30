import { toast } from "react-toastify";

const CartsCard = ({ cart, carts, setCarts }) => {
	const removeCartHandle = (cart) => {
		const filteredCarts = carts.filter((item) => item.name !== cart.name);
		setCarts(filteredCarts);
		toast.success(`${cart.name} Removed From Cart`)
	};

	return (
		<div className="border-2 border-zinc-200 p-1 md:p-5 rounded-xl">
			<div className="flex justify-between items-center gap-10">
				<div className="border p-1 md:p-3 rounded-full border-zinc-300">
					<img src={cart.iconImage} alt="" />
				</div>

				<div className="flex-1">
					<h2 className="text-xs md:text-[20px] font-semibold">{cart.name}</h2>
					<p className="font-medium text-zinc-400">${cart.price}</p>
				</div>

				<div className="">
					<button
						onClick={() => removeCartHandle(cart)}
						className="cursor-pointer font-bold text-red-600"
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartsCard;
