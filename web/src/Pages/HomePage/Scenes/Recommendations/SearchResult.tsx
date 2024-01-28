import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//importing styles
import "./searchResults.css";

// importing keyoword's svgs
import historic from "./assets/historic.png"
import religious from "./assets/religious.png"
import nature from "./assets/nature.png"
import park from "./assets/park.png"

// arco-design components
import { Skeleton, Spin } from "@arco-design/web-react";
import capitalizeFirstLetter from "../../../../lib/constant";

const ResultCard = ({ item, handleAddFavourites, searchResultLoading }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handlePageRouting = (item: any) => {
    navigate(`place?id=${item?.$id}`)
  }

  const KeywordTextGenerator = ({keyword}) => {
    const keywordText = capitalizeFirstLetter(keyword)
    let imgUrl;
    
    switch (keyword) {
      case "historic": 
        imgUrl = historic
        break
      case "religious":
        imgUrl = religious
        break
      case "nature":
        imgUrl = nature
        break
      case "park":
        imgUrl = park
        break
      default:
        break
    }
    
    return(
      <>

      {" " + keywordText}
      </>
    )
  }

  return (
    <>
    <div className="place-item">
      <div className="image" onClick={() => handlePageRouting(item)}>
        <img src={item?.image[0]} alt="img" />
      </div>
      <div className="title">{item?.title}</div>
      <div className="description text-muted">
        {item?.location_description}
      </div>
      <div className="keyword">
        <KeywordTextGenerator keyword={item?.keyword} />
      </div>
      <div
        className="favourites"
        onClick={async () => {
          setLoading(true);
          await handleAddFavourites({
            user_id: localStorage.getItem("userId"),
            place_id: item?.$id,
            isFavourite: item?.isFavourite,
            favouriteDocId: item?.favouriteDocId || undefined,
          });
          setLoading(false);
        }}
      >
        {loading === true ? (
          <Spin />
        ) : item?.isFavourite ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
          </svg>
        )}
      </div>
    </div>
    </>
  );
};

export default function SearchResult({ title, searchResultData, handleAddFavourites, searchResultLoading }) {
  return (
    <>
      <h5 className="text-bold mt-4">
        {title} places
      </h5>
      <div className="recommended-places">
        <div className="places-list">
          {
            searchResultLoading === true ? (
              [1, 2, 3, 4].map((_, index) => (
                <Skeleton
                key={index}
                style={{
                  margin: '15px 0 0 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1em'
                }}
                loading={searchResultLoading}
                text={{
                    rows: 2, 
                    style: {
                        width: 290,
                        height: 100, 
                    } 
                }}
                image={{ 
                    shape: "square", 
                    style: {
                        width: 290,
                        height: 170,
                    } 
                }}
                animation
              />
              ))
            ) : (
              searchResultData &&
              searchResultData.map((item) => (
                <ResultCard
                  searchResultLoading={searchResultLoading}
                  key={item?.$id}
                  item={item}
                  handleAddFavourites={handleAddFavourites}
                />
              ))  
            )
          }
        </div>
      </div>
    </>
  );
}