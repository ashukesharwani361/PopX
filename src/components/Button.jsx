import "./Button.css";

export default function Button({ text, type, onClick, className }) {
    return (
        <button
            className={className || "primary-btn"}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
}