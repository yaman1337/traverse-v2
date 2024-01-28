import { useState } from "react";

// arco-design components
import { Rate, Space, Input, Button, Message, Typography } from "@arco-design/web-react";

// importing configs
import { BACKEND_URI } from "../../../../lib/constant";
import { account } from "../../../../lib/appwrite";
import { useLocation } from "react-router-dom";

const TextArea = Input.TextArea;

const AddReview = ({ state }) => {
  const [rating, setRating] = useState(1);
  const [review_description, setReviewDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddReview = async () => {
    try {
      if (!rating || !review_description) {
        resetForm();
        return Message.error("All the fields are required.");
      }
      setLoading(true);
      const JWT = await account.createJWT();

      // get place id from query params of url
      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const place_id = queryParams.get('id');

      const bodyData = {
        place_id: place_id,
        rating: rating,
        message: review_description
      }

      const resAddReview = await fetch(`${BACKEND_URI}/reviews/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JWT.jwt}`
        },
        body: JSON.stringify(bodyData)
      })
      setLoading(false);
      Message.success("Thanks for your feedback.");
      resetForm();
      document.dispatchEvent(new CustomEvent("newReviewAdded", {}));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Message.error(error.message);
    }
  };

  function resetForm() {
    setRating(1);
    setReviewDescription("");
  }

  return (
    <Space direction="vertical" size="large">
      <div 
      style={{ 
        display: "flex", 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "flex-start" 
      }}>
        <Typography.Text 
        style={{ 
          marginRight: 10, 
          fontSize: "15px" 
        }}>
          Rating
        </Typography.Text>
        <Rate
          className="rating add-place-review-rating" 
          style={{fontSize: '25px'}}
          defaultValue={1}
          count={5}
          value={rating}
          onChange={(e) => setRating(e)}
        />{" "}
      </div>

      <div 
      className="review"
      style={{ 
        display: "flex", 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "flex-start" 
      }}
      >
        <Typography.Text 
        style={{ 
          marginRight: 10, 
          fontSize: "15px" 
        }}>
          Feedback
        </Typography.Text>

        <TextArea
          autoSize={{ minRows: 2, maxRows: 6 }}
          style={{ minHeight: "100px", width: "400px", marginTop: 10 }}
          placeholder="Your feedback about this place."
          onChange={(e) => setReviewDescription(e)}
          value={review_description}
        />
      </div>

      <Button
        style={{ background: "black", color: "white" }}
        loading={loading}
        onClick={() => handleAddReview()}
      >
        Add Review
      </Button>
    </Space>
  );
};

export default AddReview;
