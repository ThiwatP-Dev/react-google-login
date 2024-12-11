export const msalConfig = {
    auth: {
        clientId: "9ed6e6c1-34a2-4745-bcf5-05599c78c164", // Replace with your Application (client) ID
        authority: "https://login.microsoftonline.com/86871714-9095-4ff7-b417-9e59f3fba83f", // Replace with your Directory (tenant) ID
        redirectUri: "http://localhost:3000", // Replace with your Redirect URI
    },
    cache: {
        cacheLocation: "localStorage", // Can also be "sessionStorage"
        storeAuthStateInCookie: false, // Set to true if issues occur in older browsers
      }
  }
  
  export const loginRequest = {
    scopes: ["api://9ed6e6c1-34a2-4745-bcf5-05599c78c164/User.Read"], // Specify the Microsoft Graph API scopes you need
  };
  