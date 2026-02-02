import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";

/**
 * Welcome Screen
 * - Entry point of the PopX app
 * - Allows user to navigate to Register or Login screens
 * - UI is mobile-first and accessibility-friendly
 */
export default function Welcome() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      {/* Main content wrapper for accessibility */}
      <main className="welcome">
        {/* Intro text section */}
        <section className="welcome-text">
          <h1>Welcome to PopX</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </section>

        {/* Action buttons */}
        <section className="welcome-actions">
          {/* Navigate to Create Account screen */}
          <button
            className="btn btn-primary"
            onClick={() => navigate("/register")}
            aria-label="Create a new PopX account"
          >
            Create Account
          </button>

          {/* Navigate to Login screen */}
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/login")}
            aria-label="Login to existing PopX account"
          >
            Already Registered? Login
          </button>
        </section>
      </main>
    </MobileLayout>
  );
}
