import React from 'react';

const VideoItem = ({video, onVideoSelect})=>{
    return (
    <div onClick={()=> onVideoSelect(video)} className='item' style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
        <img classnmame='ui image'src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
        <div className='content' style={{marginLeft: '10px'}}>
            <div className='header'>{video.snippet.title}</div>
            <div className='description'>{video.snippet.description}</div>
        </div>
        
    </div>
    )
}

export default VideoItem;