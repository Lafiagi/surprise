import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
import { useSuiClient } from '@mysten/dapp-kit';
import { useEnokiFlow } from '@mysten/enoki/react';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ChoseGift = () => {
  const messageUrl = "https://happybirthdayjef";
  const [selectedBox, setSelectedBox] = useState(null);
  const [boxColors] = useState([getRandomColor(), getRandomColor(), getRandomColor()]);
  const [isBoxClicked, setIsBoxClicked] = useState(false);
  const client = useSuiClient(); // The SuiClient instance
  const enokiFlow = useEnokiFlow(); // The EnokiFlow instance

  /**
   * The current user session, if any. This is used to determine whether the user is logged in or
   * not.
   */
  const [session, setSession] = useState();

  /* The account information of the current user. */
  const [suiAddress, setSuiAddress] = useState(null);
  const [balance, setBalance] = useState(0);
  const [accountLoading, setAccountLoading] = useState(true);


  /**
   * When the page loads, complete the login flow.
   */
  useEffect(() => {
    completeLogin();
  }, []);

  /**
   * When the user logs in, fetch the account information.
   */
  useEffect(() => {
    if (session) {
     
    }
  }, [session]);

  /**
   * Complete the Enoki login flow after the user is redirected back to the app.
   */
  const completeLogin = async () => {
    try {
      await enokiFlow.handleAuthCallback();
    } catch (error) {
      console.error("Erro handling auth callback", error);
    } finally {
      // Fetch the session
      const session = await enokiFlow.getSession();
      console.log("Session", session);

      if (session && session.jwt){
        setSession(session);
      }

      // remove the URL fragment
      window.history.replaceState(null, "", window.location.pathname);
    }
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(messageUrl);
    alert("Link copied to clipboard!");
  };

  const handleBoxClick = (boxIndex) => {
    if (!isBoxClicked) {
      setSelectedBox(boxIndex);
      setIsBoxClicked(true);
    }
  };

  const items = ["Gift Item 1", "Gift Item 2", "Gift Item 3"];
  const boxes = [0, 1, 2].map((boxIndex) => {
    const isSelected = selectedBox === boxIndex;
    const boxColor = boxColors[boxIndex];
    const item = items[boxIndex];

    return (
      <Box
        key={boxIndex}
        width="100px"
        height="100px"
        backgroundColor={boxColor}
        margin="0 10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        borderRadius="10px"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          position: "relative",
          transition: 'transform 0.6s',
          transform: isSelected ? 'rotateY(180deg)' : 'none',
          pointerEvents: isBoxClicked && !isSelected ? 'none' : 'auto',
          opacity: isBoxClicked && !isSelected ? 0.5 : 1,
        }}
        onClick={() => handleBoxClick(boxIndex)}
      >
        <Box
          position="absolute"
          backfaceVisibility="hidden"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: boxColor,
          }}
        >
          Click me!
        </Box>
        <Box
          position="absolute"
          backfaceVisibility="hidden"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: boxColor,
            transform: 'rotateY(180deg)',
          }}
        >
          <Box textAlign="center" color="#fff">
            <p>{item}</p>
            <p>The sender will be notified of your selection.</p>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <div style={styles.container}>
      <div style={styles.messageContainer}>
        <img
          src="/logo.png"
          alt="SurpriseHub Logo"
          className="logo"
          style={{ margin: "auto" }}
        />
        <h2 style={{ fontWeight: "bold", fontSize: 20, marginTop: 5 }}>
          Hey Nalu, you have a special surprise!
        </h2>
        <Box marginTop={100} m={"auto"} w={"40%"}>
          <p style={{ marginTop: 50, fontSize: 18 }}>
            Happy Birthday my dear, may God grant you all your heart desires in
            good health and wealth. Thank you for standing by me during the
            difficult times. God bless you!
          </p>
        </Box>

        <p style={styles.pickBoxText}>Pick a box to unveil your surprise!</p>
        <div style={styles.boxesContainer}>
          <Box display={"flex"}>
            {boxes}
          </Box>
        </div>
        {isBoxClicked && (
          <p style={styles.disabledMessage}>You have already picked a box!</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e0f7ff",
    padding: "20px",
    height: "100vh",
    boxSizing: "border-box",
  },
  messageContainer: {
    textAlign: "center",
  },
  pickBoxText: {
    fontWeight: "bold",
    backgroundColor: "#fff",
    width: "40%",
    margin: "auto",
    padding: 5,
    marginTop: "30px",

  },
  boxesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  disabledMessage: {
    marginTop: "20px",
    fontWeight: "bold",
    color: "#ff0000",
  },
};

export default ChoseGift;
