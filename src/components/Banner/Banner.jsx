import { Play } from "lucide-react";
import BadgeLive from "../../assets/badge_icon.png";
import BannerImage from "../../assets/banner.png";

const Banner = () => {
	return (
		<header className="flex flex-col-reverse gap-10 text-center lg:flex-row lg:text-left justify-between items-center max-w-7xl mx-auto py-20">
			<div className="flex-1 space-y-7">
				<div className="flex justify-center lg:justify-start">
					<p className="badge bg-blue-200 p-4 text-indigo-600 rounded-full flex gap-2 items-center">
						<img src={BadgeLive} alt="Badge Live Icon" />
						New: AI-Powered Tools Available
					</p>
				</div>

				<div>
					<h1 className="text-2xl lg:text-7xl/22 font-extrabold">
						Supercharge Your Digital Workflow
					</h1>
					<p className="mt-5 text-zinc-400 text-xs md:text-xl/9">
						Access premium AI tools, design assets, templates, and
						productivity <br /> software—all in one place. Start
						creating faster today. <br /> Explore Products
					</p>
				</div>

				<div className="flex gap-5 justify-center lg:justify-start">
					<button className="btn rounded-full p-6 text-white bg-indigo-600">
						Explore Products
					</button>
					<button className="btn rounded-full p-6 text-indigo-600 border border-indigo-600 flex gap-2">
						<Play></Play> Watch Demo
					</button>
				</div>
			</div>

			<div className="p-4 md:p-0">
				<img src={BannerImage} alt="Banner Image" />
			</div>
		</header>
	);
};

export default Banner;
