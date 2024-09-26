import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const App = () => {
  const handleLoginSuccess = (response) => {
    console.log('ID Token:', response.credential);
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId="362151284854-hhrjnpf3mgtn7b35n5gopj4aojt2uedq.apps.googleusercontent.com">
      <div className="App">
        <h1>Google Login Demo</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
