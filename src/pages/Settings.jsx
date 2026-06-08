import { useEffect, useState } from "react";
import "./Settings.css";
import profile from "../assets/profile.png";

const STORAGE_KEY = "popxAccount";

export default function Settings() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) {
            return;
        }

        try {
            setUser(JSON.parse(saved));
        } catch (error) {
            console.error("Failed to parse saved user data:", error);
        }
    }, []);

    if (!user) {
        return (
            <div>
                <h1>Account Settings</h1>
                <p>No saved account found. Please create an account first.</p>
            </div>
        );
    }

    return (
        <>
            <div className="profile-page">
                <div className="profile-header">
                    <h2>Account Settings</h2>
                </div>
                <div className="profile-content">
                    <div className="profile-info">
                        <div className="profile-avatar-wrapper">
                            <img src={profile} alt="Avatar" className="profile-avatar" />
                            <div className="profile-camera-icon">📷</div>
                        </div>
                        <div className="profile-details">
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <p className="profile-description">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
                        Dolore Magna Aliquyam Erat, Sed Diam.
                    </p>
                </div>
                <div className="profile-divider"></div>
            </div>
        </>
    );
}