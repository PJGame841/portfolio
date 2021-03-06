import YouTube from "react-youtube";
import Layout from "../components/Layout";

const AboutPage = () => (
	<Layout title="Pierre-Jean Lefort | About me">
		<div className="h-[25rem] bg-sky-100">
			<div className="absolute space-y-4 mt-40 ml-[15%] max-w-sm">
				<p className="text-gray-800 font-extrabold text-4xl">About me</p>
				<p className="text-gray-600 font-light mt-5">Who am I ?</p>
			</div>
		</div>

		<div className="flex justify-center">
			<div className="flex flex-col flex-wrap justify-center items-center overflow-hidden">
				<p className="text-2xl font-bold text-slate-700 whitespace-normal text-center">
					Here is a short video about myself (in french)
				</p>
				<YouTube
					className="my-5 hidden md:block"
					videoId="49xdHhGWRgQ"
					opts={{ height: "390", width: "640" }}
				/>
				<div className="md:hidden mt-2">
					<a href="https://youtu.be/49xdHhGWRgQ/" className="text-cyan-800">
						Click here to see the video
					</a>
				</div>
			</div>
		</div>
	</Layout>
);

export default AboutPage;
