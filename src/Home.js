import React from "react";
import "./App.css";
import logo from "./logo.png"; // Ensure you have a logo file named `logo.png` in the `src` directory
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <img src={logo} className="App-logo" alt="SurpriseHub Logo" />
          <ul>
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#how-it-works">How it Works</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
          <div className="App-auth">
            <a href="#sign-in">Sign In</a>
            <a href="#sign-up" className="sign-up">
              Sign Up
            </a>
          </div>
        </nav>
      </header>
      <Box padding={10} display={"flex"} mt={10}>
        <Box width={"50%"} padding={5}>
          <Text fontSize={35} fontWeight={"bold"} textAlign={"justify"}>
            Welcome to Surprise Hub!
          </Text>
          <Text fontSize={35} fontWeight={"bold"} textAlign={"justify"}>
            Create and send a personalized
          </Text>
          <Text fontSize={35} fontWeight={"bold"} textAlign={"justify"}>
            surprise message and gift to
          </Text>
          <Text fontSize={35} fontWeight={"bold"} textAlign={"justify"}>
            your loved ones
          </Text>
          <Box mt={10}>

            <button
              className="get-started"
              style={{
                marginRight: "100%",
                height: 50,
                width: 200,
                lineHeight: 0,
                fontWeight: "bold"
              }}
              onClick={()=>{}}
            >
              
              <Link  to={{pathname: '/create-gift'}}>Get Started</Link>

            </button>
          </Box>
        </Box>
        <Box mt={-100} mr={200}>
          <img
            src="gift-box.png"
            alt="Surprise Gift Box"
            width={500}
            height={400}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Home;
