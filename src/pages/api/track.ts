import { NextApiRequest, NextApiResponse } from "next";
import Spotify from "spotify-web-api-node";

export type TrackResponseSuccess = SpotifyApi.SingleTrackResponse;
export type TrackResponseError = { error: unknown };
export type TrackResponse = TrackResponseSuccess | TrackResponseError;

const api = new Spotify({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});
let expirationTime = 0;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<TrackResponse>
) {
	if (req.method !== "GET") {
		res.status(405).json({ error: "Method not allowed." });
		return;
	}

	const { id } = req.query;

	if (!id) {
		res.status(400).json({ error: "Missing 'id' query parameter." });
		return;
	}

	if (Array.isArray(id)) {
		res.status(400).json({
			error: "Expected only one 'id' query parameter."
		});
		return;
	}

	try {
		if (Date.now() > expirationTime) {
			const response = await api.clientCredentialsGrant();
			api.setAccessToken(response.body.access_token);

			expirationTime = Date.now() + response.body.expires_in * 1000;
		}

		const response = await api.getTrack(id);
		res.status(200).json(response.body);
	} catch (err) {
		res.status(500).json({ error: (err as any)?.message });
	}
}
