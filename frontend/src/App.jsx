import { useEffect, useState } from "react";
import "./App.css";

// App.js

import { useAuth } from "react-oidc-context";
import Home from "./Home";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "6cng94qjvpjuc9a5oha1julkcj";
    const logoutUri = "https://d2bwnbafhkgfh3.cloudfront.net";
    const cognitoDomain = "https://us-east-1jfjjscux2.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <button onClick={() => auth.removeUser()}>Sign out</button>
        <Home />
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}

export default App;
