import Layout from "../components/Layout";
import Image from "next/image";

const AboutPage = () => (
	<Layout title="Pierre-Jean Lefort | My projects">
		<div className="h-[25rem] bg-sky-100">
			<div className="absolute space-y-4 mt-40 ml-[15%] max-w-sm">
				<p className="text-gray-800 font-extrabold text-4xl">My projects</p>
				<p className="text-gray-600 font-light mt-5">
					Here you can see all the projects I've done in the past
				</p>
			</div>
		</div>
		<div className="timeline">
			<div className="card left">
				<div className="date right-32" style={{ right: "-150px" }}>
					Janvier 2022
				</div>
				<i className="icon fa fa-user"></i>
				<div className="content">
					<h2>Portfolio</h2>
					<p>
						Réalisation de ce portfolio en NextJS, TailwindCSS. Plus
						d'information sur{" "}
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
				<div className="date" style={{ left: "-150px" }}>
					Janvier 2022
				</div>
				<i className="icon fa fa-gift"></i>
				<div className="content">
					<h2>Réservation automatique salle de sport</h2>
					<p>
						Simple système de reservation automatique d'une salle de sport.
						L'action se déclanche par une demande à Google Home
					</p>
				</div>
			</div>
			<div className="card left">
				<div className="date" style={{ right: "-150px" }}>
					Novembre 2021
				</div>
				<i className="icon fa fa-home"></i>
				<div className="content">
					<h2>Gmod-Discord</h2>
					<p>
						Un logiciel permettant de relier Garry's Mod à Discord pour montrer
						sur quel serveur on joue.
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
