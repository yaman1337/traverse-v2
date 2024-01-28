import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// importing styles
import "./Place.route.css"

import {BACKEND_URI} from "../../lib/constant"

// importing arco design components
import { Message } from "@arco-design/web-react";

// importing custom components
import GeneralDetails from "./General/GeneralDetails";
import PlaceContent from "./Content/PlaceContent";

export default function PlaceSpecificPage() {
    // get place id from query params of url
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    // set place data
    const [placeData, setPlaceData] = useState([]);
    const [loading, setLoading] = useState(true)

    // memoized function to fetch place details for the ID
    const fetchPlaceData = useCallback(() => {
        (async () => {
            try{
                const resPlaceData = await fetch(`${BACKEND_URI}/places/detail/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const place = await resPlaceData.json()
        
                setPlaceData(place.data.documents[0])
                setLoading(false)
                return place[0];
            } catch (error) {
                setLoading(false)
                Message.error("Something went wrong")
            }
        })()
    }, [id])

    useEffect(() => {
        fetchPlaceData()
    }, [fetchPlaceData])

    // state props
    let stateProps = {
        loading,
        placeData
    }
    
    return(
        <div className="place-page-wrapper">

        <div className="place-content">
            <div className="top">
                <GeneralDetails state={stateProps} />
            </div>
            <div className="bottom">
                <PlaceContent state={stateProps} />
            </div>
        </div>
        </div>
    )
}
