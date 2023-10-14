import React, { Component } from "react";
import Ipod from "../stateless/Ipod";
import ZingTouch from "zingtouch";
import Helmet from "react-helmet";
import images from "../../assets/images/images";
import songs from "../../assets/songs/songs";

class App extends Component {
  constructor() {
    super();
    
    // Initialize audio elements for songs
    const song1 = new Audio(songs.music1);
    const song2 = new Audio(songs.music2);
    const song3 = new Audio(songs.music3);
    
    // Set the initial state
    this.state = {
      menu: {
        options: [
          {
            music: ["all-songs", "artists", "albums"],
          },
          {
            games: [],
          },
          {
            coverflow: [],
          },
          {
            settings: [
              "change-wallpaper",
              "change-orientation",
              "change-theme",
            ],
          },
        ],
        // Other properties
      },
      screen: {
        wallpaper: [
          images.wallpaper1,
          images.wallpaper2,
          images.wallpaper3,
          images.wallpaper4,
          images.wallpaper5,
          images.coverflow,
          images.games,
          images.allsongs,
          images.artists,
          images.albums,
        ],
        // Other properties
      },
      mouse: {
        innerCircle: "",
      },
      songsList: {
        songs: [song1, song2, song3],
        // Other properties
      },
      theme: {
        themeList: ["Classic", "Dark"],
        themeIndex: 0,
      },
    };

    this.controllerRef = React.createRef();
    this.progressRef = React.createRef();
  }

  // Other methods (isMenuVisible, addClass, removeClass, tap, rotate, etc.) go here

  componentDidMount() {
    this.containerElementOuter = this.controllerRef.current;
    this.activeRegionOuter = new ZingTouch.Region(this.containerElementOuter);
  }

  // Other methods (play, nextSong, prevSong, updateProgress, etc.) go here

  render() {
    const { menu, screen, mouse, songsList, theme } = this.state;

    const styling = () => {
      return theme.themeIndex === 0
        ? "background-color: ''; transition: all 2s linear;"
        : "background-color: black; transition: all 2s linear;";
    };

    return (
      <div className="App">
        <Ipod
          screen={screen}
          menu={menu}
          mouse={mouse}
          songsList={songsList}
          theme={theme}
          isMenuVisible={this.isMenuVisible}
          addClass={this.addClass}
          removeClass={this.removeClass}
          tap={this.tap}
          rotate={this.rotate}
          play={this.play}
          nextSong={this.nextSong}
          prevSong={this.prevSong}
          updateProgress={this.updateProgress}
          controllerRef={this.controllerRef}
          progressRef={this.progressRef}
        />
        <Helmet>
          <style>{`body { ${styling()} }`}</style>
        </Helmet>
      </div>
    );
  }
}

export default App;
