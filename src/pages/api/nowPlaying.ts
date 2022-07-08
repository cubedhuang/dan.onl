import { NextApiRequest, NextApiResponse } from "next";
import Spotify from "spotify-web-api-node";

export type NowPlayingResponseSuccess = SpotifyApi.CurrentlyPlayingResponse;
export type NowPlayingResponseError = { error: unknown };
export type NowPlayingResponse =
	| NowPlayingResponseSuccess
	| NowPlayingResponseError;

const api = new Spotify({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
	refreshToken: process.env.SPOTIFY_REFRESH_TOKEN
});
let expirationTime = 0;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<NowPlayingResponse>
) {
	if (req.method !== "GET") {
		res.status(405).json({ error: "Method not allowed." });
		return;
	}

	try {
		if (Date.now() > expirationTime) {
			const response = await api.refreshAccessToken();
			api.setAccessToken(response.body.access_token);

			expirationTime = Date.now() + response.body.expires_in * 1000;
		}

		const playing = await api.getMyCurrentPlayingTrack();

		res.status(200).json(playing.body);
	} catch (err) {
		res.status(500).json({ error: (err as any)?.message });
	}
}
