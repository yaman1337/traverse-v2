import { Message, ResizeBox } from "@arco-design/web-react";
import React, { useEffect, useState } from "react";
import MapBox from "./Scenes/MapBox/MapBox";
import SearchBar from "./Scenes/Search Bar/SearchBar";
import { BACKEND_URI } from "../../lib/constant";
import SearchResult from "./Scenes/Recommendations/SearchResult";

import "./Homepage.css"

const MemoizedSearchBar = React.memo(SearchBar);

// re-renering mapbox component when pane resized
const MapBoxComponent = ({ paneResized, data }) => {
  return (
    <div className="mapBox">
      <MapBox paneResized={paneResized} rawData={data} />
    </div>
  );
};

export default function HomePage() {
  const [paneResized, setPaneResized] = useState(false);
  const [allPlaces, setAllPlaces] = useState([])
  const [searchResultData, setSearchResultData] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [title, setTitle] = useState("Recommended");

  const [mapDataLoading, setMapDataLoading] = useState(true)

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    },
    () => {
      setLat(27.6955136);
      setLong(85.3311488);
    },
    {
      enableHighAccuracy: true,
    }
  );

  const fetchMapPlaces = async () => {
    try{
      const resPlaces = await fetch(`${BACKEND_URI}/places/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })

      const places = await resPlaces.json()

      setMapData(places.data.documents);
      setAllPlaces(places.data.documents)
      setMapDataLoading(false)
      return places;
    } catch (error) {
      setMapDataLoading(false)
      Message.error("Something went wrong")
    }
  };

  const handleAddFavourites = async () => {
    // write logic here
    // for now we will write local_storage logic here, [due to time constraint we have not created a separate API in the backend]
    return 
  }

  useEffect(() => {
    if (!lat || !long) return;

     fetchMapPlaces()
  }, [lat, long])

  return (
    <>
    <div className="body-container">
        <div className="main-body">
          <ResizeBox.Split
            direction="horizontal"
            onMovingEnd={() => setPaneResized(!paneResized)}
            style={{
              height: "100%",
              width: "100%",
              border: "1px solid var(--color-border)",
            }}
            max={0.75}
            min={0.275}
            panes={[
              <div className="content">
                <div className="searchBar-container">
                  <MemoizedSearchBar
                    allPlaces={allPlaces}
                    setSearchResultData={setSearchResultData}
                    setTitle={setTitle}
                    setMapData={setMapData}
                  />
                </div>
                <SearchResult
                  searchResultLoading={mapDataLoading}
                  searchResultData={searchResultData}
                  title={title}
                  handleAddFavourites={handleAddFavourites}
                />
              </div>,
              <MapBoxComponent paneResized={paneResized} data={mapData} />,
            ]}
          />
        </div>
      </div>
    <a href="/dashboard" className="ms-3 py-4 px-8 border rounded bg-black text-white">K cha bhai</a>
    </>
  );
}
