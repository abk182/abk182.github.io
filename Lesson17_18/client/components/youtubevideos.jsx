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


export const YouTubeVideos = ({props})=>{
    console.log(props);
    return(
    <div>
        {
            props.VideosList.map(item=>{
                return (
                    <div key = {item.id.videoId}>
                        <img src = {item.snippet.thumbnails.default.url}/>
                        <p>{item.snippet.title}</p>
                    </div>
                )
            })
        }
    </div>
)}