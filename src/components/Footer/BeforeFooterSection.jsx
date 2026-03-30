const BeforeFooterSection = () => {
	return (
		<div className="bg-linear-to-r from-indigo-600 to-purple-600 text-white flex justify-center items-center py-10 text-center">
			<div>
				<h2 className="text-2xl md:text-[40px] font-extrabold">
					Ready to Transform Your Workflow?
				</h2>
				<p className="text-xs md:text-[16px] max-w-xl mx-auto">
					Join thousands of professionals who are already using
					DigiTools to work smarter. Start your free trial today.
				</p>

				<div className="mt-8 space-y-5">
					<div className="flex gap-2 justify-center">
						<button className="btn px-4 py-3 rounded-full bg-white text-indigo-600 shadow-none">
							Explore Products
						</button>
						<button className="btn px-6 py-3 btn-outline rounded-full shadow-none">
							View Pricing
						</button>
					</div>

					<div className="flex justify-center items-center text-xs md:text-[16px] gap-2">
						<p>14-day free trial</p>
						<div className="w-1 h-1 bg-white rounded-full"></div>
						<p>No credit card required</p>
						<div className="w-1 h-1 bg-white rounded-full"></div>
						<p>Cancel anytime</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BeforeFooterSection;
