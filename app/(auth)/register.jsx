import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";


const Register = () => {
  const handleSubmit = () => {
    console.log("login submited");
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer height={60} />

      <ThemedText title={true} style={styles.title}>
        Register to Your Account
      </ThemedText>

      <Spacer height={40} />

      <ThemedText style={styles.subText}>
        Enter your credentials to continue
      </ThemedText>

      <Spacer height={50} />

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2", textAlign: "center" }}>Login</Text>
      </ThemedButton>

      <Spacer height={80} />

      <Link href="/login">
        <ThemedText style={styles.linkText}>
          Already have an account? Login
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

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
