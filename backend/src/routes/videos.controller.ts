import { RequestHandler } from "express";
import Video from "./Video";

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({ message: "The URL already exists" });

  //console.log(req.body);
  const video = new Video(req.body);
  //console.log(video)
  const savedVideo = await video.save();
  //res.json('video saved')
  res.json(savedVideo);
};

export const getVideos: RequestHandler = async (req, res) => {
  try {
    //res.json("getting videos");
    const videos = await Video.find();
    return res.json(videos);
  } catch (error) {
      res.json(error)
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  //res.json("getting a single video");
  //console.log(req.params)
  const videoFound = await Video.findById(req.params.id)
  if(!videoFound) return res.status(204).json();
  return res.json(videoFound)
};

export const deleteVideo: RequestHandler = async (req, res) => {
  //res.json("deleting a video");
  const videoFound = await Video.findByIdAndDelete(req.params.id)
  if(!videoFound) return res.status(204).json();
  return res.json(videoFound)
};

export const updateVideo: RequestHandler = async (req, res) => {
  //res.json("updating a video");
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})
  if(!videoUpdated) return res.status(204).json();
  res.json(videoUpdated)
};
