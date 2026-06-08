import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "./Login.css";

const STORAGE_KEY = "popxAccount";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        const savedUser = localStorage.getItem(STORAGE_KEY);

        if (!savedUser) {
            setError("No account found. Please create an account first.");
            return;
        }

        try {
            const user = JSON.parse(savedUser);

            if (user.email === email && user.password === password) {
                setError("");
                navigate("/profile");
                return;
            }

            setError("Invalid email or password.");
        } catch (err) {
            console.error("Failed to read saved account:", err);
            setError("Unable to login right now. Please try again later.");
        }
    }

    return (
        <form
            className="login-form"
            onSubmit={handleLogin}>
                <h1>Signin to your <br />PopX account</h1>
                <p>Lorem ipsum dolor sit amet,<br/>
                   consectetur adipisicing elit.</p>
                {error && <p className="error-message">{error}</p>}
                <InputField
                    id="email"
                    label="Email address"
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    text="Login"
                    type="submit"
                />
        </form>
    )
}