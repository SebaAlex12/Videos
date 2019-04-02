import React from "react";

function VideoItemIframe({ source, title, width, height }) {
  return (
    <React.Fragment>
      <div className="video">
        <iframe
          target="_blank"
          allowFullScreen="allowFullScreen"
          src={source}
          width={width}
          height={height}
        />
      </div>
      <div className="title" style={{ color: "#fff" }}>
        {title}
      </div>
    </React.Fragment>
  );
}

export default VideoItemIframe;
