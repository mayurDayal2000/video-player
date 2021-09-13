import React from "react";

class Video extends React.Component {
    render() {
        return (
            <section>
                <video controls autoPlay type="video/mp4" src={this.props.src} />
            </section>
        )
    }
}

export default Video;