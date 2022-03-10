import Layout from "../../components/Layout";

const ProjectsPage = () => (
	<Layout title="Pierre-Jean Lefort | My projects">
		<div className="h-[23rem] bg-sky-100">
			<div className="absolute space-y-4 mt-40 ml-[15%] max-w-sm">
				<p className="text-gray-800 font-extrabold text-4xl">My projects</p>
				<p className="text-gray-600 font-light mt-5">
					Here you can see all the projects I&apos;ve done in the past
				</p>
			</div>
		</div>
		<div className="timeline">
			<div className="h-[5rem]"></div>
			<div className="card left" data-aos="fade-up">
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
			<div className="card right" data-aos="fade-up">
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
			<div className="card left" data-aos="fade-up">
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
			<div className="card right" data-aos="fade-up">
				<div className="date">Nov 2020</div>
				<i className="icon fa fa-gift"></i>
				<div className="content">
					<h2>Gpanel</h2>
					<p>
						An addon for Garry&apos;s Mod to interact with your server&apos;s
						console on a discord channel.
					</p>
				</div>
			</div>
			<div className="card left" data-aos="fade-up">
				<div className="date">Oct 2019</div>
				<i className="icon fa fa-gift"></i>
				<div className="content">
					<h2>PJDelivery</h2>
					<p>
						An addon made for Garry&apos;s Mod being sold on a famous website
						for Garry&apos;s Mod servers (
						<a
							target="_blank"
							rel="noreferrer"
							className=" text-sky-500"
							href="https://www.gmodstore.com/market/view/pjdelivery-a-new-delivery-system"
						>
							GmodStore
						</a>
						)
					</p>
				</div>
			</div>
			<div className="card right" data-aos="fade-up">
				<div className="date">Nov 2018</div>
				<i className="icon fa fa-gift"></i>
				<div className="content">
					<h2>Ltservers</h2>
					<p>
						A website to make some quick parties with your friends on
						Garry&apos;s Mod.
					</p>
				</div>
			</div>
			<div className="card left" data-aos="fade-up">
				<div className="date">Sept 2018</div>
				<i className="icon fa fa-gift"></i>
				<div className="content">
					<h2>Gmod-share</h2>
					<p>
						A website made in PHP to share Garry&apos;s Mod addons for free.
					</p>
				</div>
			</div>
			<div className="h-[5rem]"></div>
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

export default ProjectsPage;
