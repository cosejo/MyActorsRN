/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Image, View, TouchableOpacity, Switch, Button } from 'react-native';

import { copilot, walkthroughable, CopilotStep } from 'react-native-copilot';

const WalkthroughableText = walkthroughable(Text);
const customSvgPath = ({ position, size, canvasSize, step }): string => {
  return `M0,0H${canvasSize.x}V${canvasSize.y}H0V0ZM${position.x._value},${position.y._value + 50}H${position.x._value + size.x._value}V${position.y._value + size.y._value}H${position.x._value}V${position.y._value}Z`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  middleView: {
    flex: 1,
    alignItems: 'center',
  },
  labelText: {
    fontSize: 18,
    color: '#2980b9',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tooltip: {
    backgroundColor: "#9FA8DA",
    borderRadius: 10,
    paddingTop: 5
  }
});

class App extends Component {

  static propTypes = {
    start: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.start()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.middleView}>
          <CopilotStep text="Tutorial para usar texto 1" order={1} name="firstText">
            <WalkthroughableText style={styles.labelText}>
              {'Primer Texto'}
            </WalkthroughableText>
          </CopilotStep>  
          <CopilotStep text="Tutorial para usacr botón 1" order={2} name="firstButton">
            <TouchableOpacity style={styles.button}>
              <WalkthroughableText style={styles.buttonText}>
                {'Primer Botón'}
              </WalkthroughableText>
            </TouchableOpacity>
          </CopilotStep>
        </View>
        <View style={styles.middleView}>
          <CopilotStep text="Tutorial para usar texto 2" order={3} name="secondText">
            <WalkthroughableText style={styles.labelText}>
              {'Segundo Texto'}
            </WalkthroughableText>
          </CopilotStep>
          <CopilotStep text="Tutorial para usar texto 2" order={4} name="secondButton">
            <TouchableOpacity style={styles.button}>
              <WalkthroughableText style={styles.buttonText}>
                {'Segundo Botón'}
              </WalkthroughableText>
            </TouchableOpacity>
          </CopilotStep>
        </View>
        <View style={styles.middleView}>
          <CopilotStep text="Tutorial para usar texto 3" order={5} name="thridText">
            <WalkthroughableText style={styles.labelText}>
              {'Tercer Texto'}
            </WalkthroughableText>
          </CopilotStep>  
          <CopilotStep text="Tutorial para usar botón 3" order={6} name="thirdButton">
            <TouchableOpacity style={styles.button}>
              <WalkthroughableText style={styles.buttonText}>
                {'Tercer Botón'}
              </WalkthroughableText>
            </TouchableOpacity>
          </CopilotStep>
        </View>
      </View>
    );
  }
}

export default copilot({
  backdropColor: "rgba(0, 0, 0, 0.4)",
  animated: false, // Can be true or false
  overlay: 'svg', // Can be either view or svg
  svgMaskPath: customSvgPath
})(App);
