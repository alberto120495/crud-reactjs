import React from "react";
import { Video } from "./Video";
import "./VideoItem.css";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import {deleteVideo} from "./VideoService"

interface Props {
  video: Video;
  loadVideos: () => void;
}

function VideoItem({ video, loadVideos }: Props) {

  const history = useHistory();

  const handleDelete = async (id: string) =>{
      await deleteVideo(id)
      loadVideos()
    }

  return (
    <div className="col-md-4">
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history.push(`/update/${video._id}`)}>
            {video.title}
          </h1>
          <span onClick={() => video._id && handleDelete(video._id)} className="text-danger">
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
