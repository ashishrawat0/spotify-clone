import { StrictMode } from "react";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://localhost:3000/"

const clientId = "2f5f5909d8474c3a97cd42b8f32ed0c5"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modified-playback-state"
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce(() => {
        let parts = item.split('=');
        intial[parts[0]] = decodeURIComponent(parts[1]);
        return intial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}$scope=${scopes.join("%20")}&response_type=token&show_dialog=true`