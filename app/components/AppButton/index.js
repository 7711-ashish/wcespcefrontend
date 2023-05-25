import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

export default function AppButton({
  title,
  onPress,
  buttonStyles,
  IconComponent,
  textStyle,
}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.button, buttonStyles]}>
        {IconComponent && (
          <View
            style={{
              justifyContent: "center",
            }}
          >
            {IconComponent}
          </View>
        )}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "#03DAC5",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    marginVertical: 20,

  },
  text: {
    color: "black",
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 14,
  },
});
