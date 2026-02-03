import { useLocation } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";

/**
 * Account Settings Screen
 *
 * Responsibilities:
 * - Display logged-in user's profile information
 * - Consume user data passed via React Router route state
 * - Enforce layout rules (full-width header, padded content, full-width divider)
 *
 * Note:
 * - UI-only implementation as per assignment
 * - Uses fallback values when route state is unavailable
 */
export default function Account() {
  // Access route state from Login / Register navigation
  const { state } = useLocation();

  // Fallbacks prevent UI break on refresh or direct access
  const name = state?.name || "User Name";
  const email = state?.email || "user@email.com";

  return (
    <MobileLayout>
      <main className="account">
        {/* Full-width header */}
        <header className="account-header">
          <h1>Account Settings</h1>
        </header>

        {/* Padded content area */}
        <section className="screen-padding">
          <section className="profile-card">
            <div className="profile-info">
              <div className="avatar-wrapper">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt={`${name} profile`}
                  className="avatar"
                />

                {/* Decorative avatar edit indicator */}
                <span className="avatar-badge" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 4L7.17 6H4C2.9 6 2 6.9 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H16.83L15 4H9Z"
                      fill="#ffffff"
                    />
                    <circle
                      cx="12"
                      cy="13"
                      r="3.2"
                      fill="none"
                      stroke="#6c25ff"
                      strokeWidth="1.4"
                    />
                    <circle cx="12" cy="13" r="1.6" fill="#ffffff" />
                  </svg>
                </span>
              </div>

              <div className="profile-text">
                <p className="profile-name">{name}</p>
                <p className="profile-email">{email}</p>
              </div>
            </div>

            <p className="profile-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              corporis maxime assumenda aspernatur tempore omnis provident
              officiis sapiente debitis corrupti.
            </p>
          </section>
        </section>

        {/* Full-width section divider */}
        <div className="account-divider" />
      </main>
    </MobileLayout>
  );
}
