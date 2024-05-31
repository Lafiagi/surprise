import React, { useState } from "react";
import "./GiftSelection.css";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function GiftSelection() {
  const [selectedGift, setSelectedGift] = useState("");
  const [giftList, setGiftList] = useState([
    "Gift Box 1",
    "Gift Box 2",
    "Gift Box 3",
    "Gift Box 4",
  ]);

  const handleGiftChange = (event) => {
    setSelectedGift(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && selectedGift.trim() !== "") {
      event.preventDefault();
      setGiftList([...giftList, selectedGift]);
      setSelectedGift("");
    }
  };

  const handleCustomize = () => {
    // Handle the customize button action
    console.log("Customize button clicked for:", selectedGift);
  };

  return (
    <div className="gift-selection-container">
      <header className="gift-selection-header">
        <img
          src="/logo.png"
          alt="SurpriseHub Logo"
          className="logo"
          style={{ margin: "auto" }}
        />
      </header>
      <form className="gift-selection-form">
        <label>
          Type Gift name then press enter to add it as a choice
          <input
            type="text"
            placeholder="Select gift"
            value={selectedGift}
            onChange={handleGiftChange}
            onKeyPress={handleKeyPress}
          />
        </label>
        <div className="gift-options">
          <Text marginTop={2}>Select Gifts:</Text>
          {giftList.map((gift, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setSelectedGift(gift)}
              className="gift-box"
            >
              {gift}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="customize-button"
          onClick={handleCustomize}
          style={{ width: "100%", fontWeight: "bold" }}
        >
          <Link to={{ pathname: "/gift-link" }}>
            Create Surprise Packages
          </Link>
        </button>
      </form>
    </div>
  );
}

export default GiftSelection;
