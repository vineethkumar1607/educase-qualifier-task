# React JS Qualifier Task – Assignment Documentation

## 1. Assignment Overview

**Live Demo:** https://educase-qualifier-task.vercel.app/account
**GitHub Repository:** https://github.com/vineethkumar1607/educase-qualifier-task

This document describes the implementation of the **React JS Qualifier Task** provided as part of the interview process. The objective of the assignment is to convert the given **Adobe XD mobile UI design** into a functional React application and host it on a public platform.

The application focuses on **UI accuracy, navigation flow, and clean code structure**, as explicitly mentioned in the assignment instructions.


## 2. Assignment Requirements

As per the assignment brief:

* Develop the UI using **React JS**
* Follow the provided **Adobe XD design** strictly
* Ensure the UI is **pixel‑perfect** and **mobile‑first**
* Center the mobile app interface on the webpage
* Implement smooth navigation between screens
* Push the code to a **public GitHub repository**
* Host the final build on **Vercel / Netlify or similar platform**

**Design Reference:**
Adobe XD Design Link: [https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd]


## 3. Scope of Implementation

### Included Scope

* Mobile‑first UI development based on the design
* Screen‑to‑screen navigation
* React component‑based architecture
* Clean and readable code structure
* Basic accessibility considerations

### Excluded Scope

* Backend or API integration
* Real authentication or data persistence
* External services (Firebase, databases, etc.)
* Advanced client‑side validation

The scope has been intentionally limited to align strictly with the assignment instructions.


## 4. Technology Stack

| Category  | Technology       | Purpose                  |
| --------- | ---------------- | ------------------------ |
| Framework | React JS (Vite)  | UI development           |
| Routing   | react-router-dom | Page navigation          |
| State     | React useState   | Local component state    |
| Styling   | CSS              | Pixel‑perfect UI styling |
| Hosting   | Vercel (planned) | Deployment               |



## 5. Project Structure

src/
 ├─ components/
 │   └─ MobileLayout.jsx
 ├─ pages/
 │   ├─ Welcome.jsx
 │   ├─ Login.jsx
 │   ├─ Register.jsx
 │   └─ Account.jsx
 ├─ router/
 │   └─ AppRouter.jsx
 ├─ styles/
 │   └─ global.css
 ├─ App.jsx
 └─ main.jsx


This structure ensures clear separation of layout, screens, routing, and styles.


## 6. Application Screens Implemented

### 6.1 Welcome Screen

**Purpose:**
- Entry point of the application
- Provides navigation options to Register and Login screens

**Key Features:**
- Mobile-centered layout
- Primary and secondary CTA buttons
- Client-side navigation using React Router


### 6.2 Login Screen

**Purpose:**
- Allows users to enter login credentials

**Key Features:**
- Email and password input fields
- Outlined input design with persistent labels
- Login button disabled until required fields are filled
- Navigation to Account screen on submit
- User data passed via route state (UI-only behavior)


### 6.3 Register Screen

**Purpose:**
- Allows users to create a new account (UI-only)

**Key Features:**
- Multiple input fields matching the design
- Required field indicators
- Radio button selection for agency type
- Bottom-pinned primary CTA button
- Navigation to Account screen on submit


### 6.4 Account Settings Screen

**Purpose:**
- Displays logged-in user’s profile information

**Key Features:**
- Full-width white header
- Grey content background matching the design
- Profile card with avatar and edit indicator
- User data consumed from route state
- Layout strictly follows container and padding rules


## 7. UI & Styling Approach

- Mobile viewport width fixed to **375px**
- Mobile container centered on desktop view
- Light grey application background
- White content areas for cards and headers
- Reusable button and form styles
- Outlined input pattern as per Adobe XD design

All styling decisions were made to closely match the provided design.


## 8. Accessibility Considerations

Basic accessibility best practices applied within assignment scope:

- Semantic HTML elements (`main`, `section`, `header`, `form`, `label`)
- Proper label-input associations
- Keyboard-accessible inputs and buttons
- Visible focus states
- Adequate color contrast


## 9. Navigation Flow

| Screen   | Navigates To     |
| -------- | ---------------- |
| Welcome  | Login / Register |
| Login    | Account          |
| Register | Account          |


## 10. Code Quality Practices

- Modular and reusable components
- Clear and consistent naming conventions
- Minimal but meaningful comments
- No unnecessary dependencies
- Conventional Git commit messages


## 11. Deployment Plan

- Deployed on Vercel
- Live URL: https://educase-qualifier-task.vercel.app/account
- GitHub Repository: https://github.com/vineethkumar1607/educase-qualifier-task

## 12. Conclusion

This implementation focuses on accurately fulfilling the qualifier task by prioritizing UI correctness, navigation flow, and clean React code. The project is intentionally scoped to match the expectations of the assignment and avoid unnecessary over-engineering.

