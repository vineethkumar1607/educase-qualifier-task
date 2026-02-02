import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";

/**
 * Login Screen
 * - Allows user to enter email & password
 * - Login button remains disabled until both fields are filled
 * - Navigation-only (no real authentication)
 */
export default function Login() {
  const navigate = useNavigate();

  // Local state for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Button enabled only when both fields have values
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake login → navigate to Account screen
    if (isFormValid) {
      e.preventDefault();

      if (!email.trim() || !password.trim()) return;
      navigate("/account");
    }
  };

  return (
    <MobileLayout>
      <main className="login">
        {/* Heading section */}
        <section className="login-header">
          <h1>Signin to your PopX account</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </section>

        {/* Login form */}
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="form-group outlined">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          {/* Password Field */}
          <div className="form-group outlined">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>


          {/* Login Button */}
          <button
            type="submit"
            className={`btn ${isFormValid ? "btn-primary" : "btn-disabled"}`}
            disabled={!isFormValid}
            aria-disabled={!isFormValid}
          >
            Login
          </button>
        </form>
      </main>
    </MobileLayout>
  );
}
