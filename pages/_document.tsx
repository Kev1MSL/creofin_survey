import React from "react";
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";
import Link from "next/link";

class CreofinSurveyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles]),
		};
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					{CssBaseline.flush()}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin={""}
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@200..900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="tw-flex tw-flex-col tw-min-h-screen">
					<Main />
					<NextScript />
					<div className="tw-z-0 tw-absolute tw-bottom-0 tw-flex tw-w-full">
						<svg
							className="wave tw-w-full"
							viewBox="0 0 1440 490"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
									<stop stopColor="rgba(0, 173, 111, 1)" offset="0%"></stop>
									<stop stopColor="rgba(188, 208, 41, 1)" offset="100%"></stop>
								</linearGradient>
							</defs>
							<path
								className="wave-1"
								fill="url(#sw-gradient-0)"
								d="M0,0L48,40.8C96,82,192,163,288,236.8C384,310,480,376,576,392C672,408,768,376,864,343C960,310,1056,278,1152,261.3C1248,245,1344,245,1440,277.7C1536,310,1632,376,1728,375.7C1824,376,1920,310,2016,236.8C2112,163,2208,82,2304,57.2C2400,33,2496,65,2592,138.8C2688,212,2784,327,2880,310.3C2976,294,3072,147,3168,122.5C3264,98,3360,196,3456,236.8C3552,278,3648,261,3744,220.5C3840,180,3936,114,4032,114.3C4128,114,4224,180,4320,196C4416,212,4512,180,4608,187.8C4704,196,4800,245,4896,277.7C4992,310,5088,327,5184,310.3C5280,294,5376,245,5472,196C5568,147,5664,98,5760,89.8C5856,82,5952,114,6048,122.5C6144,131,6240,114,6336,138.8C6432,163,6528,229,6624,269.5C6720,310,6816,327,6864,334.8L6912,343L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"
							></path>
							<defs>
								<linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
									<stop stopColor="rgba(0, 164, 105, 1)" offset="0%"></stop>
									<stop stopColor="rgba(249, 232, 53, 1)" offset="100%"></stop>
								</linearGradient>
							</defs>
							<path
								className="wave-2"
								fill="url(#sw-gradient-1)"
								d="M0,245L48,236.8C96,229,192,212,288,171.5C384,131,480,65,576,81.7C672,98,768,196,864,269.5C960,343,1056,392,1152,416.5C1248,441,1344,441,1440,400.2C1536,359,1632,278,1728,212.3C1824,147,1920,98,2016,81.7C2112,65,2208,82,2304,106.2C2400,131,2496,163,2592,196C2688,229,2784,261,2880,302.2C2976,343,3072,392,3168,408.3C3264,425,3360,408,3456,383.8C3552,359,3648,327,3744,277.7C3840,229,3936,163,4032,179.7C4128,196,4224,294,4320,343C4416,392,4512,392,4608,367.5C4704,343,4800,294,4896,228.7C4992,163,5088,82,5184,65.3C5280,49,5376,98,5472,98C5568,98,5664,49,5760,81.7C5856,114,5952,229,6048,302.2C6144,376,6240,408,6336,367.5C6432,327,6528,212,6624,138.8C6720,65,6816,33,6864,16.3L6912,0L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"
							></path>
						</svg>
					</div>
					<footer className="tw-w-full tw-mt-auto tw-text-center tw-mb-5 tw-z-10">
						<span className="tw-text-white tw-text-sm tw-font-semibold">
							En utilisant ce site web et en remplissant ce sondage vous
							acceptez nos{" "}
							<Link href="#" className="tw-text-white">
								<a className="tw-text-white tw-underline">
									Conditions et Politique de confidentialité
								</a>
							</Link>
						</span>
					</footer>
				</body>
			</Html>
		);
	}
}

export default CreofinSurveyDocument;
