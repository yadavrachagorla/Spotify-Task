
import '../css/login.css'

function Login() {
    const handleClick = async () => {
        const client_id = "e8c66cb2fb1d4ecab29c41706a8b23fe";
        const redirect_uri = "http://localhost:3000/";
        const api_uri = "https://accounts.spotify.com/authorize";
        const scope = [
          "user-read-private",
          "user-read-email",
          "user-modify-playback-state",
          "user-read-playback-state",
          "user-read-currently-playing",
          "user-read-recently-played",
          "user-top-read",
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
          " "
        )}&response_type=token&show_dialog=true`;
      };
  return (
    <div className="login">
      <img
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <button onClick={handleClick}>Login to Spotify</button>
    </div>
  );
}

export default Login;