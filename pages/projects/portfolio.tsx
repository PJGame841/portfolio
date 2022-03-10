import Layout from "../../components/Layout";

const Portfolio = () => (
	<Layout title="Pierre-Jean Lefort | Porfolio">
		<div className="h-[25rem] bg-sky-100">
			<div className="absolute space-y-4 mt-40 ml-[15%] max-w-sm">
				<p className="text-gray-800 font-extrabold text-4xl">Portfolio</p>
				<p className="text-gray-600 font-light mt-5">
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
	</Layout>
);

export default Portfolio;
