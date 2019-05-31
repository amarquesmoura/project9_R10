import React, { Component } from "react";
import Speaker from "./Speaker";

class SpeakerContainer extends Component {
  render() {
    const speaker = this.props.navigation.getParam("speaker");
    return <Speaker speaker={speaker} />;
  }
}

export default SpeakerContainer;
