import { toast } from "react-toastify";
import { signInWithGooglePopup } from "./config/firebase";
import { useNavigate } from "react-router-dom";

export const Auth = () => {

  const navigate = useNavigate()

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    if (response) {
      const token = response.user.stsTokenManager.accessToken

      toast.success("Login Successful");
      localStorage.setItem('jwtToken', token);
      navigate('/');
      localStorage.setItem()
    }
  }
  return (
    <div className="mx-auto">
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

