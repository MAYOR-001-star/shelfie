import {
  StatusBar,
  StyleSheet,
} from "react-native";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
