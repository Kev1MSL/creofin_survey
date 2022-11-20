/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites() {
		// To avoid CORS issues, we need to proxy the API requests to the backend
		return [
			{
				source: "/sondage",
				destination: "http://localhost:5095/sondage"
			},
			{
				source: "/improvesurvey",
				destination: "http://localhost:5095/improvesurvey"
			}
		];
	}
};

module.exports = nextConfig;
