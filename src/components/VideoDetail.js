import React from 'react';

const VideoDetail = ({selectedVideo})=> {

    if(!selectedVideo){
        return <div>Loading...</div>
    }else{
        return(
            <div>
                <div className='ui embed'>
                    <iframe 
                        title={selectedVideo.snippet.title} 
                        src={`https://youtube.com/embed/${selectedVideo.id.videoId}`} 
                    />
                </div>
                <div className='ui segment'>
                    <h4 className='ui header'>{selectedVideo.snippet.title}</h4>
                    <p>{selectedVideo.snippet.description}</p>
                </div>
            </div>
            
        )
    }

}

export default VideoDetail;

VideoDetail.defaultProps = {
    selectedVideo : ''
}