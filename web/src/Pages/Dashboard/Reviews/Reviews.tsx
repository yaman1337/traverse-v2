import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// importing stlyes
import "./Reviews.css";

// importing arco-design components
import {
  Rate,
  Image,
  Button,
  Spin,
} from "@arco-design/web-react";
import { Select, Message } from "@arco-design/web-react";

// importing components
import RatingInsights from "./Ratings Insights/RatingInsights";
import DropdownActions from "../components/Actions/Dropdown/DropdownActions";
import filterData from "./Filters/filterList";
import { Avatar, Typography} from "antd";
const { Title } = Typography;

const Option = Select.Option;
const options = ["Recent", "Ratings", "Oldest"];

const actions = {
  delete: "Are you sure you want to remove this review?",
};

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([
    {
      $id: "1",
      title: "Bouddha Stupa",
      location_description: "Kathmandu, Nepal",
      rating: 5,
      $createdAt: "2023-01-15T10:30:00Z",
      review_description: "I had an incredible experience at this place. Highly recommended!",
      place_id: "123",
      image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oSk8DuSKi6kL45GI5kJCEDKbaFtsnGYSCg&usqp=CAU"],
    },
    {
      $id: "2",
      title: "Bhaktapur Durbar Square",
      location_description: "Bhaktapur, Nepal",
      rating: 4,
      $createdAt: "2023-02-20T15:45:00Z",
      review_description: "Enjoyed my time here. The service was good, and the ambiance was pleasant.",
      place_id: "456",
      image: ["https://hsj.com.np/uploads/0000/1/2023/08/06/bhaktapur-rainy.jpg",],
    },
    // Add more reviews as needed
  ]);
  const [insights, setInsights] = useState({
    totalReviewsPublished: 0,
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
  });

  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState(reviews);
  const [eventTriggered, setEventTriggered] = useState(false);

  // async function calculateInsights(reviews) {
  //   let obj = {
  //     totalReviewsPublished: 0,
  //     oneStar: 0,
  //     twoStar: 0,
  //     threeStar: 0,
  //     fourStar: 0,
  //     fiveStar: 0,
  //   };

  //   let ratings = [0, 0, 0, 0, 0]; // Use an array to store ratings count
  //   let total = 0;

  //   for (let i = 0; i < reviews.length; i++) {
  //     let currentItem = parseInt(reviews[i].rating);
  //     total += 1;

  //     if (currentItem >= 1 && currentItem <= 5) {
  //       ratings[currentItem - 1] += 1; // Increment the corresponding rating count
  //     }
  //   }

  //   // updating the ratings object
  //   obj.oneStar = Math.floor((ratings[0] / total) * 100) || 0;
  //   obj.twoStar = Math.floor((ratings[1] / total) * 100) || 0;
  //   obj.threeStar = Math.floor((ratings[2] / total) * 100) || 0;
  //   obj.fourStar = Math.floor((ratings[3] / total) * 100) || 0;
  //   obj.fiveStar = Math.floor((ratings[4] / total) * 100) || 0;
  //   obj.totalReviewsPublished = total;
  //   setInsights(obj);
  // }

  // const fetchReviews = async() => {
  //   try {
  //     const db = new Databases(appwriteClient);
  //     const { documents: myReviews } = await db.listDocuments(
  //       databaseId,
  //       "reviews",
  //       [Query.equal("author_id", localStorage.getItem("userId"))]
  //     );

  //     if (myReviews.length === 0) {
  //       setLoading(false);
  //       return;
  //     }
  //     const { documents: reviewedPlaces } = await db.listDocuments(
  //       databaseId,
  //       "places",
  //       [
  //         Query.equal(
  //           "$id",
  //           myReviews.map((item) => item["place_id"])
  //         ),
  //       ]
  //     );

  //     const finalReviewData = myReviews.map((item, i) => {
  //       let obj = {};
  //       obj = {
  //         ...item,
  //         location_description: reviewedPlaces[i].location_description,
  //         title: reviewedPlaces[i].title,
  //         image: reviewedPlaces[i].image[0],
  //       };

  //       return obj;
  //     });

  //     setReviews(finalReviewData);
  //     calculateInsights(finalReviewData);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     Notification.error({
  //       title: "Error",
  //       content: error.message,
  //     });
  //   }
  // }

  // useEffect(() => {
  //   fetchReviews();
  // }, []);

  // useEffect(() => {
  //   setReviews(() => filteredData.map((i) => i));
  // }, [filteredData]);

  // useEffect(() => {
  //   fetchReviews();
  // }, [eventTriggered]);

  document.addEventListener("reviewDeleted", async () => {
      try {
          setEventTriggered(!eventTriggered)
      } catch (error: any) {
          setEventTriggered(!eventTriggered)
          Message.error({
              content: error.message,
          });
      }
  });

  const handleFilterClick = async (value: string) => {
    const newData = filterData(reviews, value);

    setFilteredData(newData);

    Message.info({
      content: `Filtered reviews to ${value}.`,
      showIcon: true,
    });
  };

  return (
      <div className="dashboard-content w-full reviews">
        <div className="content">
          <div className="reviews-wrapper">
            <div className="review-list flex-2">
              <div className="header-block">
                <div className="content-header">
                  <Title level={3} className="ms-4 p-3 mb-0 label-header">
                    Reviews
                  </Title>
                </div>
                <div className="filter-buttons">
                  <Select
                    placeholder="Filter Reviews"
                    style={{ width: 154 }}
                    onChange={handleFilterClick}
                  >
                    {options.map((option, index) => (
                      <Option
                        key={option}
                        disabled={index === 3}
                        value={option}
                      >
                        {option}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              {loading === true ? (
                <Spin className="ms-4 mt-3 mb-4" />
              ) : reviews.length === 0 ? (
                <Title className="ms-4 pb-3" level={5} bold>
                  No reviews posted yet
                </Title>
              ) : (
                reviews.map((item: any) => {
                  return (
                    <div className="review" key={item?.$id}>
                      <div className="left">
                        <div className="avatar">
                          <Avatar size={40}>{"BS"}</Avatar>
                        </div>
                      </div>
                      <div className="row-right">
                        <div className="right">
                          <div className="review-header">
                            <div className="place-details m-0">
                              <Title level={5} className="mb-0" style={{margin: "0 !important"}}>{item?.title}</Title>
                              <Typography.Text type="secondary">
                                {item?.location_description}
                              </Typography.Text>
                            </div>
                          </div>

                          <div className="rating mt-2">
                            <Rate readonly defaultValue={item?.rating} />
                            <Typography.Text type="success">
                              {item?.rating} star review
                            </Typography.Text>
                            <Typography.Text type="secondary" className="">
                              Reviewed on{" "}
                              {new Date(item?.$createdAt).toLocaleDateString()}{" "}
                              at{" "}
                              {new Date(item?.$createdAt).toLocaleTimeString()}
                            </Typography.Text>
                          </div>

                          <div className="description mt-3">
                            <div className="text">
                              <Typography.Text>
                                {item?.review_description}
                              </Typography.Text>
                            </div>
                          </div>

                          <button 
                          onClick={() => navigate(`/place?id=${item?.place_id}`)}
                          className="btn bg-black text-white shadow-sm view-review-btn">
                              View Details
                          </button>
                        </div>

                        <div className="image">
                          {!item?.image.length ? (
                            <Image
                              width={145}
                              height={130}
                              style={{ borderRadius: "5px" }}
                              src="some-error.png"
                              alt="No images found for this place"
                            />
                          ) : (
                            <Image
                              width={145}
                              height={130}
                              style={{ borderRadius: "5px" }}
                              src={item?.image}
                              alt={item?.title}
                            />
                          )}
                        </div>
                      </div>
                      <div className="review-actions">
                        <DropdownActions 
                        actions={actions}
                        type="reviews"
                        payload={
                            {...item, id: item?.$id }
                        }
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="review-details flex-1">
              <div className="header-block">
                <div className="content-header">
                  <Title level={5} className="my-0 mb-1">
                    Insights
                  </Title>
                  <Typography.Text type="secondary">
                    General overview of reviews published
                  </Typography.Text>
                </div>
              </div>

              <div className="insights-details">
                <Title level={5} className="my-0">
                  {insights.totalReviewsPublished} reviews published
                </Title>
                <RatingInsights insights={insights} />
              </div>

              <div className="bottom-block">
                <Title level={5} className="mt-4 mb-1">
                  Write more reviews?
                </Title>
                <Typography.Text type="secondary">
                  Explore featured collections on Traverse
                </Typography.Text>

                <Button
                  className="mt-3"
                  type="outline"
                  style={{
                    width: "max-content",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  View featured
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Reviews;
