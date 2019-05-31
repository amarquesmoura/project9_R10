import React, { Component } from "react";
import { LayoutAnimation, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";

class CodeOfConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    const currentIsOpen = this.state.isOpen;

    const animationCreate = {
      duration: 1000,
      create: {
        type: "spring",
        property: "scaleXY",
        springDamping: 0.7
      }
    };
    const animationRemove = {
      duration: 100,
      delete: {
        type: "linear",
        property: "opacity" // also scaleXY
      }
    };

    if (currentIsOpen) {
      LayoutAnimation.configureNext(animationRemove);
    } else {
      LayoutAnimation.configureNext(animationCreate);
    }

    // LayoutAnimation.easeInEaseOut();
    this.setState({
      isOpen: !currentIsOpen
    });
  }
  render() {
    const { conduct } = this.props;
    const { isOpen } = this.state;

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.toggle();
          }}
        >
          <Text>+ {conduct.title}</Text>

          {isOpen ? <Text>{conduct.description}</Text> : null}
        </TouchableOpacity>
      </View>
    );
  }
}

const CodeOfConduct = ({ allConducts }) => (
  <View>
    {allConducts.map(conduct => (
      <CodeOfConductItem key={conduct.id} conduct={conduct} />
    ))}
  </View>
);

CodeOfConduct.propTypes = {
  allConducts: PropTypes.array.isRequired
};

export default CodeOfConduct;
