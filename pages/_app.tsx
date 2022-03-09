import React, { useEffect } from "react";
import { AppProps } from "next/app";
import AOS from "aos";

import "../styles/main.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			easing: "ease-out-cubic",
			once: false,
			offset: 50,
		});
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
