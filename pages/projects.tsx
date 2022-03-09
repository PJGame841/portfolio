import Layout from "../components/Layout";
import Image from "next/image";

const AboutPage = () => (
	<Layout title="Pierre-Jean Lefort | My projects">
		<div className="h-[25rem] bg-sky-100">
			<div className="absolute space-y-4 mt-40 ml-[15%] max-w-sm">
				<p className="text-gray-800 font-extrabold text-4xl">My projects</p>
				<p className="text-gray-600 font-light mt-5">
					Here you can see all the projects I&apos;ve done in the past
				</p>
			</div>
		</div>
		<div className="timeline">
			<div className="card left">
				<div className="date right-32">Jan 2022</div>
				<i className="icon fa fa-user"></i>
				<div className="content">
					<h2>Portfolio</h2>
					<p>
						I did this porfolio in NextJS, TailwindCSS. More informations on{" "}
						<a
							href="https://github.com/PJGame841/portfolio"
							className="text-cyan-600"
						>
							Github
						</a>
						.
					</p>
				</div>
			</div>
			<div className="card right">
				<div className="date">Jan 2022</div>
				<i className="icon fa fa-gift"></i>
				<div className="content">
					<h2>Automatic booking at a gym</h2>
					<p>
						Just a simple system of automatic booking for a gym. The action is
						triggered by voice via Google Home with IFTTT.
					</p>
				</div>
			</div>
			<div className="card left">
				<div className="date">Nov 2021</div>
				<i className="icon fa fa-home"></i>
				<div className="content">
					<h2>Gmod-Discord</h2>
					<p>
						A software that allows you to link Garry&apos;s Mod to Discord to
						show to your friends on which server you&apos;re playing.
					</p>
				</div>
			</div>
			{/* <div className="card right">
				<div className="date">22 Oct</div>
				<i className="icon fa fa-gift"></i>
				<div className="content">
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>
						Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
						erat sagittis non. Ut blandit semper pretium.
					</p>
				</div>
			</div>
			<div className="card left">
				<div className="date">10 Jul</div>
				<i className="icon fa fa-user"></i>
				<div className="content">
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>
						Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
						erat sagittis non. Ut blandit semper pretium.
					</p>
				</div>
			</div>
			<div className="card right">
				<div className="date">18 May</div>
				<i className="icon fa fa-running"></i>
				<div className="content">
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>
						Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
						erat sagittis non. Ut blandit semper pretium.
					</p>
				</div>
			</div>
			<div className="card left">
				<div className="date">10 Feb</div>
				<i className="icon fa fa-cog"></i>
				<div className="content">
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>
						Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
						erat sagittis non. Ut blandit semper pretium.
					</p>
				</div>
			</div>
			<div className="card right">
				<div className="date">01 Jan</div>
				<i className="icon fa fa-certificate"></i>
				<div className="content">
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>
						Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
						erat sagittis non. Ut blandit semper pretium.
					</p>
				</div>
			</div> */}
		</div>
	</Layout>
);

export default AboutPage;
