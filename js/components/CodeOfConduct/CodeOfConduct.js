import React, { Component } from "react";
import {
  Animated,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import theme from "../../config/styles";

class CodeOfConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      rotate: new Animated.Value(0)
    };
  }

  toggle() {
    const currentIsOpen = this.state.isOpen;

    const animation = Animated.timing(this.state.rotate, {
      toValue: 1,
      duration: 500
    });

    animation.start(animation => {
      if (animation.finished) {
        this.setState({ rotate: new Animated.Value(0) });
      }
    });

    const animationCreate = {
      duration: 1000,
      create: {
        type: "spring",
        property: "scaleXY",
        springDamping: 0.7
      }
    };

    const animationRemove = {
      duration: 10,
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
    const { isOpen, rotate } = this.state;
    const deg = rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    const animatedStyles = {
      transform: [{ rotate: deg }],
      color: theme.colors.purple,
      padding: 5
    };

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.toggle();
          }}
        >
          <View style={styles.conductHeading}>
            <Animated.Text style={animatedStyles}>
              {!isOpen ? "+" : "-"}
            </Animated.Text>
            <Text style={styles.conductTitle}>{conduct.title}</Text>
          </View>
          {isOpen ? (
            <View styles={styles.conductContainer}>
              <Text styles={styles.conductDescription}>
                {conduct.description}
              </Text>
            </View>
          ) : null}
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
