const clientID = "216b1f3151f6426ca456696308340f61";
const redirectURI = "SpottyJam.surge.sh";
const responseType = "token";
const userAccess = ;
Spotify = {}

getAccessToken(){
  if(accessToken){return accessToken;}

  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
  const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
  if(accessTokenMatch && expiresInMatch){return accessToken;}
  else{return "https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=REDIRECT_URI"}
}

search(term){
  return fetch("https://api.spotify.com/v1/search?type=track&q=${term}", {
  headers: {Authorization: `Bearer ${accessToken}`}
}).then(response =>{
  return response.json()
}).then(jsonResponse => {
  return Tracklist;
  if(jsonResponse.tracks){
    return jsonResponse.tracks.map(track => {
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
      });
    }
  })
}

const accessToken = accessTokenMatch[1];
const expiresIn = Number(expiresInMatch[1]);

savePlaylist(playlistName, trackURIs){
  if(playlistName ==! playlistName && trackURIs ==! trackURIs){
    return playlistName && trackURIs;
    const default accessToken = this.accessToken;
    const default headers = {Authorization: `Bearer ${accessToken}`};
    const default userID = '';

    $.getJSON(
      "https://api.spotify.com/v1/me", {headers: headers},
        response => {
        return userID;
      });

      $.post("/v1/users/{user_id}/playlists",  {hmb: headers, method, body}, response => {let playlistID = id} = , 'json');

      $.post("/v1/users/{user_id}/playlists/{playlist_id}/tracks", {hmb: headers, method, body}, response => {let playlistID = id}, 'json');
  }

}

export default Spotify;
