import "../styles/index.scss";

import { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Daniel</title>

				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta name="theme-color" content="#000000" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
