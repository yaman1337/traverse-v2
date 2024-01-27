import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// importing styles
import "./ContributePlaces.css";

// arco-design components
import {
  Notification,
  Steps,
  Form
} from '@arco-design/web-react';
import RenderContent from "./renderSteps";

const Step = Steps.Step;

export default function ContributePlaces() {
  const [current, setCurrent] = useState(1);

  const navigate = useNavigate();
  const formRef = useRef();

  const [loadingSave, setLoadingSave] = useState(false)
  const [imageFiles, setImageFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [location_description, setLocationDescription] = useState("");
  const [coordinates, setCoordinates] = useState([80, 27]);
  const [place_description, setPlaceDescription] = useState("");
  const [keyword, setKeyWord] = useState("");

  let author_id = localStorage.getItem("userId");

  const handleAddPlace = async () => {
    try {
      // check for session exists
      if (!author_id) {
        setLoadingSave(true)
        setTimeout(() => {
          Notification.error({
            title: "Error",
            content: "You are not logged in.",
          });
        }, 2000)
        return;
      }

      if (!coordinates) {
        setLoadingSave(false)
        Notification.error({
          title: "Error",
          content: "Please select the location on map.",
        });
        return;
      }

      if (!place_description) {
        setLoadingSave(false)
        Notification.error({
          title: "Error",
          content: "All fields are required.",
        });
        return;
      }

      Notification.success({
        title: "Success",
        content: "Place successfully added.",
      });

      setLoadingSave(false)
      navigate("/");
    } catch (error) {
      setLoadingSave(false)
      Notification.error({
        title: "Error",
        content: error.message,
      });
    }
  };

  const state = {
    current, 
    setCurrent, 
    formRef,
    setImageFiles,
    setTitle,
    setLocationDescription,
    setCoordinates,
    place_description,
    setPlaceDescription,
    setKeyWord,
    handleAddPlace,
    loadingSave
  }

  return (
    <div className="add-place-section">
    <div style={{
        width: '100%', 
        height: '100%',
    }}>
      <Form
      autoComplete='off'
      layout="vertical"
      size='large'
      >
      <Steps current={current} direction='vertical' style={{minWidth: 250, height: '100%'}}>
        <Step 
          icon={<i className="bi bi-postcard"></i>}
          title='General' 
          description="Add general details and images" />
          
        <Step 
          icon={<i className="bi bi-geo-alt"></i>}
          title='Location' 
          description="Add location details" />

        <Step 
          icon={<i className="bi bi-card-text"></i>}
          title='Description' 
          description="Add place description" />
      </Steps>
      {<RenderContent state={state} />}
      </Form>
    </div>
    </div>
  )
}