import React from 'react'
import VideoListItem from './video-list-item'

class VideoList extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const videoItems = this.props.videos.map((video) => {
      return (
        <VideoListItem
          onVideoSelect={this.props.onVideoSelect}
          video={video}
          key={video.etag}
        />
      )
    })

    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    )
  }
}

export default VideoList
