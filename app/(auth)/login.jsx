import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";
import useUser from "../../hooks/useUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useUser();

  const handleSubmit = async () => {
    try {
      await login(email, password);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer height={60} />

      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

      <Spacer height={40} />

      <ThemedText style={styles.subText}>
        Enter your credentials to continue
      </ThemedText>
      <Spacer />

      <ThemedTextInput
        style={{ width: "80%", marginBottom: 20 }}
        placeholder="email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <ThemedTextInput
        style={{ width: "80%", marginBottom: 20 }}
        placeholder="password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <Spacer />
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2", textAlign: "center" }}>Login</Text>
      </ThemedButton>
      <Spacer height={80} />

      <Link href="/register">
        <ThemedText style={styles.linkText}>
          Don't have an account? Register
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700",
    color: "#1f2937",
  },
  subText: {
    textAlign: "center",
    fontSize: 16,
    color: "#4b5563",
  },
  linkText: {
    textAlign: "center",
    fontSize: 16,
    color: "#3b82f6",
    fontWeight: "500",
  },
});
