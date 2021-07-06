import React, { Component } from "react";
import { connect } from "react-redux";
import { checkURL } from "../../utils/url";

class PBX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goURL: "",
      currentURL: ""
    };
  }

  setGoURL = (url) => {
    console.log(url);
    const isValid = checkURL(url);

    if (isValid) {
      if (
        url.substring(0, 7) !== "http://" &&
        url.substring(0, 8) !== "https://"
      )
        url = `https://${url}`;
    } else if (url !== "") {
      url = `https://www.bing.com/search?q=${url}`;
    }

    this.setState({
      goURL: url,
      currentURL: url
    });
  };

  pressURL = (e) => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13) this.setGoURL(e.target.value);
  };

  render() {
    return (
      <div className="w-full h-full bg-white">
        <iframe
          title={"Safari clone browser"}
          src={"http://192.168.17.69:8080"}
          frameBorder="0"
          className="safari-content w-full"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dark: state.dark,
    wifi: state.wifi
  };
};

export default connect(mapStateToProps, null)(PBX);
