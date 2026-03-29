import { Play } from "lucide-react";
import BadgeLive from "../../assets/badge_icon.png";
import BannerImage from "../../assets/banner.png";

const Banner = () => {
	return (
		<header className="flex justify-between items-center max-w-7xl mx-auto py-20">
			<div className="flex-1 space-y-7">
				<div>
					<p className="badge bg-blue-200 p-4 text-[#4F39F6] rounded-full flex gap-2 items-center">
						<img src={BadgeLive} alt="Badge Live Icon" />
						New: AI-Powered Tools Available
					</p>
				</div>

				<div>
					<h1 className="text-7xl/22 font-extrabold">
						Supercharge Your Digital Workflow
					</h1>
					<p className="mt-5 text-zinc-400 text-xl/9">
						Access premium AI tools, design assets, templates, and
						productivity <br /> software—all in one place. Start
						creating faster today. <br /> Explore Products
					</p>
				</div>

				<div className="flex gap-5">
					<button className="btn rounded-full p-6 text-white bg-blue-700">
						Explore Products
					</button>
					<button className="btn rounded-full p-6 text-blue-600 border border-blue-600 flex gap-2">
						<Play></Play> Watch Demo
					</button>
				</div>
			</div>

			<div className="">
				<img src={BannerImage} alt="Banner Image" />
			</div>
		</header>
	);
};

export default Banner;
