import React from "react";
import { Modal, View, StyleSheet } from "react-native";

export default function KitBackgroundScreen(props) {
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      borderColor: "red",
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
  });
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}
    >
      <View style={styles.background}>
        <View>{props.children}</View>
      </View>
    </Modal>
  );
}
