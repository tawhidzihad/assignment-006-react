const PricingSection = () => {
	return (
		<div className="max-w-7xl mx-auto py-10">
			<h2 className="text-3xl md:text-5xl font-extrabold text-center">
				Simple, Transparent Pricing
			</h2>
			<p className="text-center mt-4 md:mb-10 text-zinc-500">
				Choose the plan that fits your needs. Upgrade or downgrade
				anytime.
			</p>

			<div className="p-4 lg:p-0 grid md:grid-cols-3 gap-8">
				<div className="card bg-zinc-50 shadow-sm">
					<div className="card-body">
						<h2 className="text-2xl font-bold">Starter</h2>
						<p className="text-zinc-500">
							Perfect for getting started
						</p>

						<p className="text-[40px] font-bold">
							$0
							<span className="text-[20px] text-zinc-500">
								/Month
							</span>
						</p>

						<ul className="mt-6 flex flex-col gap-2 text-xs font-medium">
							<li>
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
								<span>Access to 10 free tools</span>
							</li>

							<li>
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
								<span>Basic templates</span>
							</li>

							<li>
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
								<span>Community support</span>
							</li>

							<li>
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
								<span>1 project per month</span>
							</li>
						</ul>

						<div className="mt-6">
							<button className="btn p-6 rounded-full btn-block bg-linear-to-r from-indigo-600 to-purple-600 text-white">
								Get Started Free
							</button>
						</div>
					</div>
				</div>

				<div className="card bg-linear-to-r from-indigo-600 to-purple-600 shadow-sm text-white rounded-xl">
					<div className="card-body relative">
						<span className="bg-amber-100 text-orange-700 py-1.5 px-3 rounded-full font-medium absolute -top-4 left-[50%] translate-x-[-50%]">
							Most Popular
						</span>

						<h2 className="text-2xl font-bold">Pro</h2>
						<p className="text-white">Best for professionals</p>

						<p className="text-[40px] font-bold">
							$29
							<span className="text-[20px] text-white">
								/Month
							</span>
						</p>

						<ul className="mt-6 flex flex-col gap-2 text-xs font-medium">
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-4 me-2 inline-block text-white"
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
								<span>Access to all premium tools</span>
							</li>

							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-4 me-2 inline-block text-white"
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
								<span>Unlimited templates</span>
							</li>

							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-4 me-2 inline-block text-white"
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
								<span>Priority support</span>
							</li>

							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-4 me-2 inline-block text-white"
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
								<span>Unlimited projects</span>
							</li>

							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-4 me-2 inline-block text-white"
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
								<span>Cloud sync</span>
							</li>

							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-4 me-2 inline-block text-white"
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
								<span>Advanced analytics</span>
							</li>
						</ul>

						<div className="mt-6 bg-white rounded-full">
							<button className="btn p-6 rounded-full btn-block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
								Start Pro Trial
							</button>
						</div>
					</div>
				</div>

				<div className="card bg-zinc-50 shadow-sm">
					<div className="card-body">
						<h2 className="text-2xl font-bold">Enterprise</h2>
						<p className="text-zinc-500">
							For teams and businesses
						</p>

						<p className="text-[40px] font-bold">
							$99
							<span className="text-[20px] text-zinc-500">
								/Month
							</span>
						</p>

						<ul className="mt-6 flex flex-col gap-2 text-xs font-medium">
							<li>
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
								<span>Everything in Pro</span>
							</li>

							<li>
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
								<span>Team collaboration</span>
							</li>

							<li>
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
								<span>Custom integrations</span>
							</li>

							<li>
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
								<span>SLA guarantee</span>
							</li>

							<li>
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
								<span>Custom branding</span>
							</li>

							<li>
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
								<span>Dedicated support</span>
							</li>
						</ul>

						<div className="mt-6">
							<button className="btn p-6 rounded-full btn-block bg-linear-to-r from-indigo-600 to-purple-600 text-white">
								Contact Sales
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PricingSection;
