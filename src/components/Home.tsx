import { Route, Routes } from "react-router-dom";
import TrackDetails from "./TrackDetails";
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import Content from './Content';
import "../css/home.css";
function Home() {

	return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Routes>
                    <Route path="/" element = {<Content /> }/>
                    <Route path="/details" element = {<TrackDetails/> }/>
                </Routes>
            </div>
            <BottomBar />
        </div>
	)
}

export default Home