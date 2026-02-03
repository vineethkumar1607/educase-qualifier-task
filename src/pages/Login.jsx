import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";

/**
 * Login Screen
 *
 * - UI-only login flow as per assignment
 * - Collects email/password and navigates to Account screen
 * - Uses route state to pass user information
 */
export default function Login() {
  const navigate = useNavigate();

  // Local form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Basic form validity check (UI-only)
  const isFormValid = email.trim() && password.trim();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    /**
     * Navigate to Account screen with temporary user data.
     * This avoids global state for a simple UI-only flow.
     */
    navigate("/account", {
      state: {
        name: email.split("@")[0], // derived name for demo purposes
        email,
      },
    });
  };

  return (
    <MobileLayout>
      <main className="login screen-padding">
        <section className="login-header">
          <h1>Signin to your PopX account</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </section>

        <form className="login-form" onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className={`btn ${isFormValid ? "btn-primary" : "btn-disabled"}`}
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>
      </main>
    </MobileLayout>
  );
}
