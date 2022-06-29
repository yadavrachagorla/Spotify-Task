import "../css/content.css";
import {useEffect, useState, KeyboardEvent} from "react";
import Header from "./Header";
import ActionAreaCard from "./ActionAreaCard";
import axios from "axios";
import {useAppSelector} from "../stores/hooks";


function Content({ }) {
	const {token} = useAppSelector(state => state.auth);
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("rock");
  const getData = async () => {
	await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=album&limit=8`, {
		headers:{
			Authorization : `Bearer ${token}`
		}
	}).then(response => setData(response.data.albums.items)).catch(error => console.log(error))
  }
  const handleKeyboardEvent = (e: KeyboardEvent) => {
	if (e.key === 'Enter') {
		const searchQuery = (e.target as HTMLInputElement).value;
		setQuery(searchQuery);
	  }
  };
  useEffect(() => {
	getData();
  }, [token, query])
  return (
    <div className="body">
      <Header search={true} clickHandler={handleKeyboardEvent}/>
	  <div className="content">
	  {data?.map((item, key) => (
                <ActionAreaCard key={key} item={item}/>
            ))}
			</div>
    </div>
  );
}

export default Content;