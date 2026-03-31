import { BiLogoFacebookSquare } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
	return (
		<footer className="bg-slate-900 text-zinc-400 pt-10 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto space-y-6">
				<div className="flex flex-col md:flex-row justify-between gap-10 pb-5">
					<div className="flex-2 space-y-4">
						<h1 className="text-3xl font-bold text-zinc-300">
							DigiTools
						</h1>
						<p>
							Premium digital tools for creators, professionals,
							and businesses. Work smarter with our suite of
							powerful tools.
						</p>
					</div>

					<div className="flex-1 space-y-3">
						<h2 className="text-[20px] font-bold text-zinc-300">
							Product
						</h2>
						<ul className="space-y-3">
							<li>Features</li>
							<li>Pricing</li>
							<li>Templates</li>
							<li>Integrations</li>
						</ul>
					</div>

					<div className="flex-1 space-y-3">
						<h2 className="text-[20px] font-bold text-zinc-300">
							Company
						</h2>
						<ul className="space-y-3">
							<li>About</li>
							<li>Blog</li>
							<li>Careers</li>
							<li>Press</li>
						</ul>
					</div>

					<div className="flex-1 space-y-3">
						<h2 className="text-[20px] font-bold text-zinc-300">
							Resources
						</h2>
						<ul className="space-y-3">
							<li>Documentation</li>
							<li>Help Center</li>
							<li>Community</li>
							<li>Contact</li>
						</ul>
					</div>

					<div className="flex-2 space-y-3">
						<h2 className="text-[20px] font-bold text-zinc-300">
							Social Links
						</h2>
						<div className="flex items-center gap-3">
							<div className="p-2 rounded-full bg-white">
								<IoLogoInstagram className="text-black text-xl"></IoLogoInstagram>
							</div>

							<div className="p-2 rounded-full bg-white">
								<BiLogoFacebookSquare className="text-black text-xl"></BiLogoFacebookSquare>
							</div>

							<div className="p-2 rounded-full bg-white">
								<BsTwitterX className="text-black text-xl"></BsTwitterX>
							</div>
						</div>
					</div>
				</div>

				<div className="border-b border-zinc-600"></div>

				<div className="flex flex-col md:flex-row justify-between items-center pb-5">
					<div>
						<p>© 2026 DigiTools. All rights reserved.</p>
					</div>

					<div className="flex gap-3 mt-2 lg:mt-0 lg:gap-10">
						<p>Privacy Policy</p>
						<p>Terms of Service</p>
						<p>Cookies</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
