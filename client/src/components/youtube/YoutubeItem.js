import React from "react";

export default function YoutubeItem(props) {
  // console.log(props.video.id.videoId);
  // const { videoId } = props;

  const videoSrc = `http://youtube.com/embed/${props.video.id.videoId}?fs=1`;
  return (
    <div className="col-lg-4 col-md-4 mb-4">
      {/* <div>title:{props.video.snippet.title}</div> */}
      <iframe src={videoSrc} />
    </div>
  );
}
