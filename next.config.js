// @ts-check

const withPreact = require("next-plugin-preact");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true"
});

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: { locales: ["en-US"], defaultLocale: "en-US" },
	images: {
		domains: ["cdn.discordapp.com", "i.scdn.co", "skillicons.dev"],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
	},
	experimental: {
		esmExternals: false,
		images: {
			allowFutureImage: true
		}
	}
};

module.exports = withBundleAnalyzer(withPreact(config));
