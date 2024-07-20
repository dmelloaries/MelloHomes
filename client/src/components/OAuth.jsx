import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backendAuthUrl=import.meta.env.VITE_OAUTH_BACKEND;
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch(`${backendAuthUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/home");
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    
    <button
      onClick={handleGoogleClick}
      type="button"
      className="flex items-center justify-center w-full py-2 text-white font-semibold bg-red-700 hover:bg-red-800 p-3 rounded-lg"
    >
      <FaGoogle className="mr-2" />
      Continue with Google
    </button>
  );
}
