import { Spin, Typography } from "@arco-design/web-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const navigate = useNavigate();

  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
    <div className="dashboard-content favourites">
        <div className="content">
          <div className="favourites-section">
            <p className="favourites-header text-2xl font-bold">My Favorites</p>
            <div className="favourites-content">
              {loading === true ? (
                <Spin />
              ) : favourites.length === 0 ? (
                <Typography.Title className="pb-3" heading={6} bold>
                  No favourite place added yet
                </Typography.Title>
              ) : (
                favourites.map((item: any) => {
                  return (
                    <div className="favourites-item" key={item?.$id}>
                      <div className="image">
                        <img src={item?.image[0]} alt="travel place" loading="lazy"/>
                      </div>
                      <div className="text-container">
                        <div className="title">{item?.title}</div>
                        <div className="description text-muted">
                          {item?.place_description.slice(0, 65)}...
                        </div>
                        <div className="keyword">
                          {/* {capitalizeFirstCharacter(item?.keyword)} */}
                        </div>

                        <div className="button-container">
                          <button
                            onClick={() => navigate(`/place?id=${item?.$id}`)}
                            className="btn btn-dark shadow-sm"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
