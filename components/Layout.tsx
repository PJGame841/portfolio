import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faReact,
} from "@fortawesome/free-brands-svg-icons";

type Props = {
	children?: ReactNode;
	title?: string;
};

const pages = [
	["Home", "/"],
	["About", "/about"],
	["Users List", "/users"],
	["Users API", "/api/users"],
];

const Layout = ({ children, title = "This is the default title" }: Props) => {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<div className="hidden flex items-start justify-center mobile-menu absolute w-full h-full bg-zinc-700/90 z-10">
				<ul className="text-white max-w-xs m-2">
					<li className="active">
						<Link href="/">
							<a className="block text-sm px-2 py-4 bg-sky-300 font-semibold rounded-full text-center">
								Home
							</a>
						</Link>
					</li>
					<li>
						<a
							href="#services"
							className="block text-sm px-2 py-4 hover:bg-sky-300 transition duration-300 rounded-full text-center"
						>
							Services
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="block text-sm px-2 py-4 hover:bg-sky-300 transition duration-300 rounded-full text-center"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="block text-sm px-2 py-4 hover:bg-sky-300 transition duration-300 rounded-full text-center"
						>
							Contact Us
						</a>
					</li>
				</ul>

				<button
					className="outline-none mobile-menu-button-close absolute right-1 m-2 bg-gray-800/75 rounded-full"
					onClick={() => {
						const menu = document.querySelector(".mobile-menu");
						if (!menu) return;
						menu.classList.add("hidden");
					}}
				>
					<svg
						className="w-6 h-6 text-white"
						x-show="!showMenu"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 40 40"
						stroke="currentColor"
					>
						<path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
					</svg>
				</button>
			</div>
			<header className="flex w-full justify-center absolute">
				<nav className="flex flex-row justify-between items-center space-x-4 bg-slate-100 rounded-lg mt-2 p-2 min-w-[75%]">
					<div className="">
						<p className="text-gray-700 font-bold text-lg m-2">
							Pierre-Jean Lefort
						</p>
					</div>
					<div className="hidden md:flex">
						<div className="flex sm:justify-center space-x-4">
							{pages.map(([title, url]) => (
								<Link href={url} key={title}>
									<a className="rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900">
										{title}
									</a>
								</Link>
							))}
						</div>
					</div>
					<div className="hidden md:flex">
						<button className="bg-sky-300 rounded-lg px-5 py-2 mr-2 font-medium">
							Yee
						</button>
					</div>

					<button
						className="md:hidden outline-none mobile-menu-button"
						onClick={() => {
							const menu = document.querySelector(".mobile-menu");
							if (!menu) return;
							menu.classList.remove("hidden");
						}}
					>
						<svg
							className="w-6 h-6 text-gray-500"
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</nav>
			</header>
			{children}
			<footer className="bg-slate-700	text-slate-400">
				<div className="container mx-auto px-4 flex flex-col gap-y-5 divide-y-2 divide-slate-500">
					<p className="mt-2">
						That's all for this website, thanks for visiting !
					</p>
					<div className="flex justify-between items-center">
						<div>
							<p>
								Made by PJGame in <FontAwesomeIcon icon={faReact} /> using
								TailwindCSS with ❤️
							</p>
						</div>
						<div className="m-5">
							<Link href="https://github.com/PJGame841">
								<a className="mr-2" target="_blank">
									<FontAwesomeIcon icon={faGithub} />
								</a>
							</Link>
							<Link href="https://www.linkedin.com/in/pierre-jean-lefort-9939b818b/">
								<a className="mr-2" target="_blank">
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Layout;