import { auth } from "@/firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

export default function AuthPage() {
  const onClick = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  return (
    <div className="page">
      <div className="login-text">Welcome to Blake's Interview presentation demo! </div>  
      <div className="grid">
        <div className="logo1">👋 </div>
        <div className="logo2">💬</div>
        <div className="logo3">🤖</div>
      </div>
      <div className="text" style={{ paddingBottom: "16px" }}>
        Log in with your account to continue
      </div>
      <button className="button" onClick={onClick}>
        Log In
      </button> <button className="button" onClick={onClick}>
        Sign Up
      </button>
    </div>
  );
}