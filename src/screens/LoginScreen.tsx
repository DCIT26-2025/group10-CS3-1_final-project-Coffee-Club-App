import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("./assets/TCC_Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>the coffee club.</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contact number</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Enter contact number"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter password"
        />

        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F5F1",
  },
  logoContainer: {
    width: 120,
    height: 120,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5B4328",
    marginBottom: 30,
  },
  inputContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#5B4328",
  },
  input: {
    borderWidth: 1,
    borderColor: "#B99972",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  forgotPassword: {
    color: "#5B4328",
    textAlign: "right",
    marginBottom: 15,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
  signUpButton: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#5B4328",
    borderRadius: 8,
    alignItems: "center",
  },
  signUpText: {
    color: "#5B4328",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#B99972",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
