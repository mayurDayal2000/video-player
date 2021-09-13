import React from "react";
import Menu from "./Menu";
import Video from "./Video";
import "./css/styles.css";

import naruto from "./Videos/naruto.mp4";
import tanjiro from "./Videos/tanjiro.mp4";
import eren from "./Videos/eren.mp4";

const videos = {
    naruto,
    tanjiro,
    eren,
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { src: null };
        this.choosenVideo = this.choosenVideo.bind(this);
    }

    choosenVideo(newVid) {
        this.setState({
            src: videos[newVid],
        });
    }

    render() {
        return (
            <main>
                <h2>Popular Anime Trailer</h2>

                <Menu choose={this.choosenVideo} />
                <Video src={this.state.src} />
            </main>
        );
    }
}

export default App;
