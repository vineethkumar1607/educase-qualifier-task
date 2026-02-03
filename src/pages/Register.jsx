import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";

/**
 * Register Screen
 * - UI-only signup screen as per assignment instructions
 * - Mobile-first layout with CTA pinned at the bottom
 * - Navigates to Account screen on submit
 */
export default function Register() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  /**
   * Handles input & radio changes
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Handles form submission
   * No real validation/authentication required as per assignment
   */
  const handleSubmit = (e) => {
  e.preventDefault();

  navigate("/account", {
    state: {
      name: formData.fullName,
      email: formData.email,
    },
  });
};


  return (
    <MobileLayout>
      <main className="register screen-padding">
        {/* Header */}
        <section className="register-header">
          <h1>Create your PopX account</h1>
        </section>

        {/* Form Content */}
        <form
          id="register-form"
          className="register-form"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <div className="form-group outlined">
            <label htmlFor="fullName">
              Full Name<span className="required">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="form-group outlined">
            <label htmlFor="phone">
              Phone number<span className="required">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Address */}
          <div className="form-group outlined">
            <label htmlFor="email">
              Email address<span className="required">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group outlined">
            <label htmlFor="password">
              Password<span className="required">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Company Name */}
          <div className="form-group outlined">
            <label htmlFor="company">Company name</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* Agency Selection */}
          <div className="agency-section">
            <p>
              Are you an Agency?<span className="required">*</span>
            </p>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
        </form>

        {/* Bottom CTA (Pinned) */}
        <div className="register-cta">
          <button
            type="submit"
            form="register-form"
            className="btn btn-primary"
          >
            Create Account
          </button>
        </div>
      </main>
    </MobileLayout>
  );
}
