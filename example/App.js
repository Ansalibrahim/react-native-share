/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from "react";
import { View, Button } from "react-native";
import ShareCustom from "react-native-share";

export default class ShareExample extends Component {
  onShare = async () => {
    try {
      const result = await ShareCustom.share({
        message:
          "test   React Native | A framework for building native apps using React"
      });

      if (result.action === ShareCustom.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log("result", result);
        } else {
          // shared
          console.log("result", result);
        }
      } else if (result.action === ShareCustom.dismissedAction) {
        // dismissed
        console.log("dismissed");
      }
    } catch (error) {
      console.log("error", error, error.message);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Share" onPress={this.onShare}>
          Share
        </Button>
      </View>
    );
  }
}
