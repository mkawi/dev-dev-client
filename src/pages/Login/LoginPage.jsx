import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate()
    const [input, setInput] = useState("");
    const [isError, setError] = useState(false);
	const { login } = useContext(UserContext);

	function handleSubmit(event) {
		event.preventDefault();

        login(input).then((response) => {
            if (response) {
                navigate("/")
            } else {
                setError(true)
            }
        });
	}

	return (
        <main>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                {isError && <p>Incorrect Username!</p>}
				<input
					type="text"
					id="username"
                    value={input}
                    style={isError ? {color: "red", border: "1px solid red"} : null}
                    placeholder="Enter your username"
					onChange={(event) => {
						setInput(event.target.value);
					}}
				/>
				<button>Submit</button>
			</form>
		</main>
	);
}
