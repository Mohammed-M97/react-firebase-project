import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        navigate("/");
    }
    return (
        <div className='pagewrap'>
            <div className='form'>
                <p>
                    Sign In With Google To Continue
                </p>
                <button className='btn-login' onClick={signInWithGoogle}>
                    Sign In
                </button>
            </div>
        </div>
    );
}