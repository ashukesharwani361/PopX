import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "./Create.css";

const STORAGE_KEY = "popxAccount";

export default function Create() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "no",
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
        navigate("/profile");
    };

    return (
        <div className="signup-page">
            <h1>Create your <br />PopX Account</h1>
            <form 
            onSubmit={handleSubmit}
            className="signup-form"
            >
                <InputField
                    id="name"
                    name="name"
                    label="Full Name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <InputField
                    id="phone"
                    name="phone"
                    label="Phone number"
                    type="number"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <InputField
                    id="email"
                    name="email"
                    label="Email address"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <InputField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <InputField
                    id="company"
                    name="company"
                    label="Company Name"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                />
                <div className="radio-wrapper">
                    <p className="radio-label">Are you an Agency? <span className="required">*</span></p>

                    <div className="radio-options">
                        <label>
                            <input
                                type="radio"
                                name="agency"
                                value="yes"
                                checked={formData.agency === "yes"}
                                onChange={handleChange}
                            />
                            Yes
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="agency"
                                value="no"
                                checked={formData.agency === "no"}
                                onChange={handleChange}
                            />
                            No
                        </label>
                    </div>
                </div>
                <Button
                    text="Create Account"
                    type="submit"
                    className="create-account-btn"
                />

            </form>
        </div>
    )
}