const withPreact = require("next-plugin-preact");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(
	withPreact({
		reactStrictMode: true,
		swcMinify: true,
		i18n: { locales: ["en-US"], defaultLocale: "en-US" },
		images: {
			domains: ["cdn.discordapp.com", "i.scdn.co", "skillicons.dev"]
		},
		experimental: {
			esmExternals: false
		}
	})
);
