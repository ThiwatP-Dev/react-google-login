import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./msalConfig";

const LoginButton = () => {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      const response = await instance.loginPopup(loginRequest);
      console.log("Access Token:", response.accessToken);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return <button onClick={handleLogin}>Login with Microsoft</button>;
};

export default LoginButton;
