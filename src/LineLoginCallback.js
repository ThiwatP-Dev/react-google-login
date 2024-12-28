import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LineLoginCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Parse query parameters from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        const state = urlParams.get("state");
        const nonce = urlParams.get("nonce");
        const error = urlParams.get("error");

        if (error) {
            console.error(`LINE Login failed: ${error}`);
        } else if (code && state) {
            console.log("Authorization Code:", code);
            console.log("State:", state);
            console.log("Nonce:", nonce);

            // Navigate to a success page or handle further
            navigate("/success");
        } else {
            console.error("Invalid response from LINE Login.");
        }
    }, [navigate]);

    return (
        <div>
            <h1>Handling LINE Login Callback...</h1>
        </div>
    );
};

export default LineLoginCallback;
