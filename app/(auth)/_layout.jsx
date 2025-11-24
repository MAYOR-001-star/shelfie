import { StatusBar, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import useUser from "../../hooks/useUser";
import GuestOnly from "../../components/auth/GuestOnly";

const RootLayout = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <GuestOnly>
      <StatusBar value="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </GuestOnly>
  );
};

export default RootLayout;
