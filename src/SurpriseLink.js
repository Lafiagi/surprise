import React from 'react';

export const SurpriseMessage = () => {
  const messageUrl = "https://happybirthdayjef";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(messageUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.messageContainer}>
      <img src="/logo.png" alt="SurpriseHub Logo" className="logo" style={{margin: "auto"}} />

        <h2 style={{fontSize: 25, marginTop: 20, fontWeight: "bold"}}>Your surprise message is ready!</h2>
        <p style={{fontSize: 20,}}>Share the link below with your loved one </p>
        <p style={{fontSize: 20,}}>to brighten their day</p>
        <img src="giftboxes.png" alt="Gifts" style={styles.image} />
        <div style={styles.linkContainer}>
          <input
            type="text"
            value={messageUrl}
            readOnly
            style={styles.linkInput}
          />
          <button onClick={handleCopyLink} style={styles.copyButton}>
            Copy Link
          </button>
        </div>
        {/* <div style={styles.socialIcons}>
          <button style={styles.iconButton}>F</button>
          <button style={styles.iconButton}>X</button>
          <button style={styles.iconButton}>W</button>
          <button style={styles.iconButton}>I</button>
          <button style={styles.iconButton}>L</button>
          <button style={styles.iconButton}>I</button>
        </div> */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e0f7ff',
    padding: '20px',
    height: '100vh',
    boxSizing: 'border-box',
  },
  backButton: {
    alignSelf: 'flex-start',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
  messageContainer: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  linkInput: {
    width: '300px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  copyButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  iconButton: {
    fontSize: '24px',
    margin: '0 5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
};

export default SurpriseMessage;
