import PackageIcon from "../../assets/package.png";
import RocketIcon from "../../assets/rocket.png";
import ManIcon from "../../assets/user.png";

const StepsSection = () => {
	return (
		<div className="bg-zinc-100 py-13">
			<div className="text-center mb-4 md:mb-10 space-y-3">
				<h1 className="text-3xl md:text-5xl font-extrabold">
					Get Started in 3 Steps
				</h1>
				<p className="text-zinc-400">
					Start using premium digital tools in minutes, not hours.
				</p>
			</div>

			<div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 p-4 lg:px-0 gap-4 lg:gap-8">
				<div className="border border-zinc-300 rounded-xl p-5 bg-white">
					<div className="flex justify-end mb-6">
						<span className="w-10 h-10 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 flex justify-center items-center">
							<p className="text-white font-medium">01</p>
						</span>
					</div>

					<div className="flex justify-center items-center flex-col space-y-7 mb-5">
						<div className="bg-purple-100 rounded-full p-4">
							<img src={ManIcon} alt="" />
						</div>
						<div className="text-center space-y-3">
							<h3 className="text-2xl font-bold">
								Create Account
							</h3>
							<p className="text-zinc-400">
								Sign up for free in seconds. No credit card
								required to get started.
							</p>
						</div>
					</div>
				</div>

				<div className="border border-zinc-300 rounded-xl p-5 bg-white">
					<div className="flex justify-end mb-6">
						<span className="w-10 h-10 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 flex justify-center items-center">
							<p className="text-white font-medium">02</p>
						</span>
					</div>

					<div className="flex justify-center items-center flex-col space-y-7 mb-5">
						<div className="bg-purple-100 rounded-full p-4">
							<img src={PackageIcon} alt="" />
						</div>
						<div className="text-center space-y-3">
							<h3 className="text-2xl font-bold">
								Choose Products
							</h3>
							<p className="text-zinc-400">
								Browse our catalog and select the tools that fit
								your needs.
							</p>
						</div>
					</div>
				</div>

				<div className="border border-zinc-300 rounded-xl p-5 bg-white">
					<div className="flex justify-end mb-6">
						<span className="w-10 h-10 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 flex justify-center items-center">
							<p className="text-white font-medium">03</p>
						</span>
					</div>

					<div className="flex justify-center items-center flex-col space-y-7 mb-5">
						<div className="bg-purple-100 rounded-full p-4">
							<img src={RocketIcon} alt="" />
						</div>
						<div className="text-center space-y-3">
							<h3 className="text-2xl font-bold">
								Start Creating
							</h3>
							<p className="text-zinc-400">
								Download and start using your premium tools
								immediately.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepsSection;
