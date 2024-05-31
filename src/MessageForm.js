import React, { useState } from "react";
import "./MessageForm.css";
import { Link } from "react-router-dom";

function MessageForm() {
  const [recipientName, setRecipientName] = useState("");
  const [specialMessage, setSpecialMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({
      recipientName,
      specialMessage,
      senderName,
      file
    });
  };

  return (
    <div className="message-form-container">
      <header className="message-form-header">
        {/* <button className="back-button">&lt;</button> */}
        <img src="/logo.png" alt="SurpriseHub Logo" className="logo" style={{margin: "auto"}} />
      </header>
      <form className="message-form" onSubmit={handleSubmit}>
        <label>
          Recipient Name:
          <input
            type="text"
            placeholder="Enter the name of your loved one"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
          />
        </label>
        <label>
          Special Message:
          <textarea
            placeholder="Write your special message here"
            value={specialMessage}
            onChange={(e) => setSpecialMessage(e.target.value)}
          />
        </label>
        <label>
          Sender's Name:
          <input
            type="text"
            placeholder="Enter your name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
        </label>
        <label className="file-upload">
          Upload a photo or video to make your message even more special
          <input type="file" onChange={handleFileChange} />
          <span className="file-upload-instructions">
            Choose a file or drag & drop it here
            <br />
            JPEG, PNG, PDG, and MP4 formats, up to 50MB
          </span>
        </label>
        <button type="submit" className="preview-button">
          
          <Link  to={{pathname: '/select-gift'}}>Preview Your Message</Link>
        </button>
      </form>
    </div>
  );
}

export default MessageForm;
