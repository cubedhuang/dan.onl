import { NextApiRequest, NextApiResponse } from "next";
import Spotify from "spotify-web-api-node";

export interface NowPlayingResponseSuccess {
	/**
	 * Whether the track is from recently played or currently playing.
	 */
	isPlayingNow: boolean;
	isPaused: boolean;
	progessMs: number;
	track: SpotifyApi.TrackObjectFull | null;
}
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

		let response: NowPlayingResponseSuccess = {
			isPlayingNow: false,
			isPaused: false,
			progessMs: 0,
			track: null
		};
		const playing = await api.getMyCurrentPlayingTrack();

		if (playing.body?.item && "album" in playing.body.item) {
			response.isPlayingNow = true;
			response.track = playing.body.item;
			response.isPaused = !playing.body.is_playing;
			response.progessMs = playing.body.progress_ms ?? 0;
		} else {
			const lastPlayed = await api.getMyRecentlyPlayedTracks({
				limit: 1
			});

			if (lastPlayed.body?.items[0]?.track) {
				response.track = lastPlayed.body.items[0]
					.track as SpotifyApi.TrackObjectFull;
			}
		}

		console.log(response);

		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({ error: (err as any)?.message });
	}
}
