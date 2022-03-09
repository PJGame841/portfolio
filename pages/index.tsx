import Layout from "../components/Layout";
import { BaseSyntheticEvent } from "react";
import Image from "next/image";
import reactPic from "../public/static/img/react.png";
import nodejsPic from "../public/static/img/nodejs.png";
import mongoPic from "../public/static/img/mongodb.png";
import mePic from "../public/static/img/pj.jpg";

const comp = [
	{
		title: "React",
		icon: reactPic,
		desc: "I first learned React to discover new things, but now I use it in every projects I make.",
	},
	{
		title: "NodeJS",
		icon: nodejsPic,
		desc: "In addition to React, NodeJS is a fair pair to make some APIs, most of the time some REST endpoints, but I've also learnt GraphQL APIs.",
	},
	{
		title: "MongoDB",
		icon: mongoPic,
		desc: "What I really tried to learn was the MEARN stack. So MongoDB was a must for this task",
	},
];
const IndexPage = () => (
	<Layout title="Pierre-Jean Lefort | Home">
		<div className="h-[32rem] bg-sky-100">
			<div className="absolute space-y-4 mt-40 ml-[15%] max-w-sm">
				<p className="text-gray-800 font-extrabold text-4xl">
					Bonjour! I am
					<br /> Pierre-Jean Lefort
				</p>
				<p className="text-gray-600 font-light mt-3">
					I&apos;m a french student in computer science. I love doing web sites
					and many other things to entertain me.
				</p>
				<button className="bg-sky-300 rounded-lg px-5 py-2 mr-2 font-medium">
					Contact
				</button>
			</div>
			<div className="absolute mt-80 md:mt-52 ml-[60%] max-w-sm">
				<Image
					className="rounded-full"
					src={mePic}
					alt="my-profile-picture"
					width={100}
					height={100}
				/>
			</div>
		</div>
		<div className="h-[32rem]">
			{/* Compétences */}
			<div className="absolute mt-16 ml-32 bg-sky-200/50 rounded-lg h-96 w-96 flex flex-col items-center justify-items-center scroll">
				<p className="mt-2 font-medium text-lg">Skills</p>
				<p className="absolute mt-12 ml-64 font-medium text-sm text-slate-500	">
					Hover me !
				</p>
				{comp.map(({ title, desc, icon }, index) => (
					<div
						key={index}
						className="bg-white rounded-lg w-90pe m-5pe max-h-[33%] transition-all flex justify-around items-center"
					>
						<Image
							className="text-6xl ml-2 w-[40px] h-[40px]"
							src={icon}
							alt={"skills-icon-" + index}
							width={40}
							height={40}
						/>
						<div className="ml-4 my-4">
							<p className="font-bold">{title}</p>
							<p
								className="text-gray-600 font-light mt-1 max-w-90pe max-h-8 transition-all duration-1000 h-auto text-ellipsis overflow-hidden"
								onMouseEnter={(e: BaseSyntheticEvent) => {
									const p = e.target;
									p.classList.remove("max-h-[33%]");
									p.classList.add("max-h-min");
								}}
								onMouseLeave={(e: BaseSyntheticEvent) => {
									const p: HTMLElement = e.target;
									p.classList.add("max-h-[33%]");
									p.classList.remove("max-h-min");
								}}
							>
								{desc}
							</p>
						</div>
					</div>
				))}
			</div>
			{/* Texte */}
			<div className=""></div>
		</div>
	</Layout>
);

export default IndexPage;
