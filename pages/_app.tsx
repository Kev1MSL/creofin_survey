import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";

function CreofinSurveyApp({ Component, pageProps }: AppProps) {
	const theme = createTheme({
		type: "light",
		theme: {
			colors: {
				// brand colors
				primaryLight: "$green200",
				primaryLightHover: "$green300",
				primaryLightActive: "$green400",
				primaryLightContrast: "$green600",
				primary: "#0d6c00",
				primaryBorder: "$green500",
				primaryBorderHover: "$green600",
				primarySolidHover: "$green700",
				primarySolidContrast: "$white",
				primaryShadow: "$green500",

				gradient:
					"linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
				link: "#0a5600",

				// you can also create your own color
				textHighlighter: "#0d6c00",
			},
			space: {
				5: "0.725rem",
			},
			fonts: {
				sans: "Inter, sans-serif",
			},
		},
	});

	return (
		<NextUIProvider theme={theme}>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default CreofinSurveyApp;
