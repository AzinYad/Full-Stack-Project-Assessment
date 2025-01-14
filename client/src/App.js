import "./App.css";
import VideoCard from "./component/VideoCard";
import AddVideo from "./component/AddVideo";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [videosList, setVideosList] = useState([]);
  const [deletedVideoId, setDeletedVideoId] = useState(null);

  const [formData, setFormData] = useState({ title: "", url: "" });

  const getData = () => {
    useEffect(() => {
      fetch(`https://full-stack-video-recommendation.onrender.com/videos`)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then(data => {
          console.log(data);
          setVideosList(data);
        })
        .catch(err => console.log(err));
    },[]);
  }
  getData();
  
    useEffect( ()=>{
      console.log(deletedVideoId);
      fetch(`https://full-stack-video-recommendation.onrender.com/videos/${deletedVideoId}`, { method: 'DELETE' })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
      .then(data=>{
        setVideosList(...data);
      })
      .catch(err => console.log(err));

    }, [deletedVideoId]);
 

    function handleChange(event) {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [event.target.name]: event.target.value
        };
      });
    };
  

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.title !== "" && formData.url.includes("www.youtube.com")) {
      let newEntryId;
      let randomNum;
      const generateRandomNum = () => randomNum = Math.floor(100000 + Math.random() * 900000);
      generateRandomNum();
      (videosList.includes(randomNum)) ? generateRandomNum() : newEntryId = randomNum;
      const newRate = Math.floor(Math.random() * 9000);
      let date = new Date().toJSON();

      let newList = {
        id: newEntryId,
        video_title: formData.title,
        video_url: formData.url,
        video_rating:newRate,
        submissionDate: date
      };

      console.log(newList);
      setVideosList([...videosList, newList]);
    } else {
      alert(`Make sure you have a title and a valid Youtube link like: ("https://www.youtube.com ...")`);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h3>Do You Have Any Video Recommendation For Us!?</h3>
          <AddVideo formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </nav>
        {videosList ? <VideoCard videosList={videosList} setDeletedVideoId={setDeletedVideoId} /> : <div>Loading...</div>}
      </header>
    </div>
  );
}

export default App;