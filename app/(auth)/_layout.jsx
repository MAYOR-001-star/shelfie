import {
  StatusBar,
  StyleSheet,
} from "react-native";
import { Stack } from "expo-router";
import { useUser } from "../hooks/useUser";

const RootLayout = () => {
  const {user} = useUser()
  console.log(user)
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
