import React from 'react';

// export class YouTubeVideos extends React.Component {
//     constructor(props){
//         super(props);
//     }
//
//     render(){
//         console.log(this.props);
//         return <div></div>;
//     }
// }


export const YouTubeVideo = ({props})=>{
    let url = "https://www.youtube.com/embed/" + props.id.videoId;
    return(
        <div>
            <img src = {props.snippet.thumbnails.default.url}/>
            <p>{props.snippet.title}</p>
            <iframe width="100%" height="500px" src={url} />
        </div>
)};