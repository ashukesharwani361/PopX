import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./Welcome.css";
import "../components/Button.css";

export default function Welcome() {
    const navigate = useNavigate();

    function handleCreate() {
        navigate("/create");
    };

    function handleLogin() {
        navigate("/login");
    };

    return (
        <>
            <div className="landing-page">
                <div className="landing-content">
                    <h1>Welcome to PopX</h1>
                    <p>
                        Lorem ipsum dolor sit amet, <br/>
                        consectetur adipisicing elit,
                    </p>
                </div>
                <div className="button-group">
                    <Button text="Create Account" type="button" onClick={handleCreate} className="create-btn" />
                </div>
                <div>
                    <Button text="Already Registered? Login" type="button" onClick={handleLogin} className="login-btn" />
                </div>
            </div>
        </>
    )
}