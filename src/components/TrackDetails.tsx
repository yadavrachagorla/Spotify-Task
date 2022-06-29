import {useEffect, useState} from "react";
import Header from "./Header";
import '../css/trackDetails.css';
import AccessTime from "@mui/icons-material/AccessTime";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {useAppSelector} from "../stores/hooks";
function TrackDetails() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  type Image = {
    height: number
    width: number
    url: string
  }
  type Artists = {
    id: string
    name: string
    type: string
  }
  type Items = {
    disc_number: number
    duration_ms: number
    id: string
    name: string
    artists: Artists[]
  }
  type Tracks = {
    items : Items[]
    total : number
  }
  type TrackData = {
    id: string
    images: Image[]
    name: string
    label: string
    total_tracks: number
    tracks: Tracks
    artists: Artists[]
  }
  const query = useQuery();
  const id = query.get("id") || "";
  const {token} = useAppSelector(state => state.auth);
  const [data, setData] = useState<TrackData>({id:"", images:[], name:"", label:"", total_tracks: 0, tracks: {items:[], total:0}, artists: []});
  const getData = async () => {
	await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
		headers:{
			Authorization : `Bearer ${token}`
		}
	}).then(response => setData(response.data)).catch(error => console.log(error))
  }
  useEffect(() => {
	  getData();
  }, [token]);
  const msToMinutesAndSeconds = (ms:any) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    let preZero = parseInt(seconds) < 10 ? "0" : "";
    return `${minutes} : ${preZero}${seconds}`;
  };
  return (
    <div className="body">
      <Header search={true} />
      <>
          <div className="playlist">
            <div className="image">
              <img src={data.images[0]?.url} alt="selected playlist" />
            </div>
            <div className="details">
              <span className="type">PLAYLIST</span>
              <h1 className="title">{data.name}</h1>
              <p className="description">{data.artists[0]?.name}</p>
              <span>{data.total_tracks} Songs</span>
            </div>
          </div>
          <div className="list">
            <div className="header-row">
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>TITLE</span>
              </div>
              <div className="col">
                <span>ALBUM</span>
              </div>
              <div className="col">
                <span>
                  <AccessTime />
                </span>
              </div>
            </div>
            <div className="tracks">
              {data.tracks.items.map(
                (item,index) => {
                  return (
                    <div
                      className="row"
                      key={index}
                    >
                      <div className="col">
                        <span>{index + 1}</span>
                      </div>
                      <div className="col detail">
                        <div className="trackImage">
                          <img src={data.images[0]?.url} alt="track" />
                        </div>
                        <div className="info">
                          <span className="name">{item.name}</span>
                          <span>{item.artists[0].name}</span>
                        </div>
                      </div>
                      <div className="col">
                        <span>{item.name}</span>
                      </div>
                      <div className="col">
                      <span>{msToMinutesAndSeconds(item.duration_ms)}</span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
    </div>
  );
}

export default TrackDetails;