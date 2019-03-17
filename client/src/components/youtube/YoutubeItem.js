import React from "react";
// import YouTube from "react-native-youtube";
// import YtPlayer from "yt-player";

export default function YoutubeItem(props) {
  // console.log(props.video.id.videoId);
  // const { videoId } = props;

  const videoSrc = `http://youtube.com/embed/${
    props.video.id.videoId
  }?fs=1&playsinline=0`;
  // console.log(props.video);
  // var tag = document.createElement("script");

  // tag.src = "https://www.youtube.com/iframe_api";
  // var firstScriptTag = document.getElementsByTagName("script")[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // var player;
  // function onYouTubeIframeAPIReady() {
  //   player = new YT.Player("player", {
  //     height: "360",
  //     width: "640",
  //     videoId: "M7lc1UVf-VE",
  //     events: {
  //       onReady: onPlayerReady,
  //       onStateChange: onPlayerStateChange
  //     }
  //   });
  // }

  // function onPlayerReady(event) {
  //   event.target.playVideo();
  // }

  // var done = false;
  // function onPlayerStateChange(event) {
  //   if (event.data == YT.PlayerState.PLAYING && !done) {
  //     setTimeout(stopVideo, 6000);
  //     done = true;
  //   }
  // }
  // function stopVideo() {
  //   player.stopVideo();
  // }

  return (
    <div className="col-lg-4 col-md-4 mb-4">
      {/* <div>title:{props.video.snippet.title}</div> */}
      <iframe src={videoSrc} />
      <div id="player" />
      {/* <YouTube
        videoId={props.video.id.videoId} 
        play={true}
        fullscreen={true}
        loop={true}
      /> */}
      <div className="title" style={{ color: "#fff" }}>
        {props.video.snippet.title}
      </div>
    </div>
  );
}
