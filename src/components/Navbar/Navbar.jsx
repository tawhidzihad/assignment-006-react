import { ShoppingCart } from "lucide-react";

const Navbar = ({ carts }) => {
	return (
		<nav className="py-2 border-b border-zinc-200 bg-white sticky top-0 z-50">
			<div className="navbar max-w-7xl mx-auto lg:p-0">
				<div className="navbar-start">
					<p className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
						DigiTools
					</p>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal gap-5 font-bold">
						<li>
							<a href="">Products</a>
						</li>
						<li>
							<a href="">Features</a>
						</li>
						<li>
							<a href="">Pricing</a>
						</li>
						<li>
							<a href="">Testimonials</a>
						</li>
						<li>
							<a href="">FAQ</a>
						</li>
					</ul>
				</div>

				<div className="navbar-end gap-4">
					<div className="indicator">
						<ShoppingCart></ShoppingCart>
						{carts.length != 0 && (
							<span className="badge badge-xs bg-indigo-600 text-white indicator-item">
								{carts.length}
							</span>
						)}
					</div>
					<p>Login</p>
					<a className="btn rounded-full text-white bg-linear-to-r from-indigo-600 to-purple-600">
						Get Started
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
