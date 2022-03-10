import Layout from "../components/Layout";
import { BaseSyntheticEvent } from "react";
import Image from "next/image";
import reactPic from "../public/static/img/react.png";
import nodejsPic from "../public/static/img/nodejs.png";
import mongoPic from "../public/static/img/mongodb.png";
import mePic from "../public/static/img/pj.jpg";
import Link from "next/link";

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
				<Link href="/contact">
					<button className="bg-sky-300 rounded-lg px-5 py-2 mr-2 font-medium">
						Contact
					</button>
				</Link>
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
		<div className="min-h-[32rem]">
			{/* Compétences */}
			<p className="mt-5 font-medium text-lg w-full text-center">Skills</p>
			<div className="flex flex-wrap items-center justify-around	">
				{comp.map(({ title, desc, icon }, index) => (
					<div
						key={index}
						className="rounded-lg min-w-[100px] w-90pe max-w-sm m-5pe max-h-[33%] flex flex-wrap justify-around items-center bg-slate-200"
					>
						<div className="my-2">
							<Image
								src={icon}
								alt={"skills-icon-" + index}
								width={40}
								height={40}
							/>
						</div>
						<div className="ml-4 my-4">
							<p className="font-bold">{title}</p>
							<p className="text-gray-600 font-light mt-1 max-w-90pe h-auto">
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
