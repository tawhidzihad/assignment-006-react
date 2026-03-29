const StatsSection = () => {
	return (
		<div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-3 md:p-10">
			<div className="flex flex-col gap-5 md:flex-row md:gap-0 justify-center items-center text-center">
				<div className="space-y-2 px-20 md:border-r border-zinc-400 ">
					<h3 className="text-white font-extrabold text-5xl">50K+</h3>
					<p className="text-white">Active Users</p>
				</div>

				<div className="space-y-2 px-20 md:border-r border-zinc-400 ">
					<h3 className="text-white font-extrabold text-5xl">200+</h3>
					<p className="text-white">Premium Tools</p>
				</div>

				<div className="space-y-2 px-20">
					<h3 className="text-white font-extrabold text-5xl">4.9</h3>
					<p className="text-white">Rating</p>
				</div>
			</div>
		</div>
	);
};

export default StatsSection;
