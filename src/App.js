import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./msalConfig";
import { useState } from "react";

const LoginButton = () => {
  const { instance } = useMsal();
  const [profilePic, setProfilePic] = useState(null); // State to hold the profile picture

  const handleLogin = async () => {
    try {
      const response = await instance.loginPopup(loginRequest);
      console.log("Access Token:", response.accessToken);

      const accessToken = response.accessToken;

      // Fetch profile picture from Microsoft Graph
      const profilePicResponse = await fetch(
        "https://graph.microsoft.com/v1.0/me/photo/$value", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Convert the response to an array buffer
      const arrayBuffer = await profilePicResponse.arrayBuffer();

      // Convert arrayBuffer to a Blob
      const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });

      // Create an object URL for the image
      const imageUrl = URL.createObjectURL(blob);

      // Set the image URL to state
      setProfilePic(imageUrl);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Microsoft</button>
      {profilePic && <img src={profilePic} alt="Profile" />} {/* Display profile picture if available */}
    </div>
  );
};

export default LoginButton;
