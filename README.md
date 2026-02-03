# React JS Qualifier Task – Assignment Documentation

## 1. Assignment Overview

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
```

This structure ensures separation of concerns and improves maintainability.

## 6. Application Screens Implemented

### 6.1 Welcome Screen

**Purpose:**

* Acts as the entry point of the application
* Provides navigation options to Register and Login screens

**Key Features:**

* Mobile‑centered layout
* Primary and secondary CTA buttons
* Client‑side navigation

### 6.2 Login Screen

**Purpose:**

* Allows users to enter login credentials

**Key Features:**

* Email and password input fields
* Outlined input design with persistent labels
* Login button disabled until required fields are filled
* Navigation to Account screen on submit


## 7. UI & Styling Approach

* Mobile viewport width fixed to **375px**
* Centered layout for desktop view
* Reusable button styles
* Outlined input pattern matching the design
* Consistent typography and spacing

The UI has been implemented to closely match the Adobe XD design.


## 8. Accessibility Considerations

Basic accessibility best practices have been applied:

* Semantic HTML elements (`main`, `section`, `form`, `label`)
* Proper label‑input associations
* Keyboard navigable inputs and buttons
* Visible focus states
* Sufficient color contrast

Accessibility enhancements are limited to assignment scope.

## 9. Navigation Flow

| Screen   | Navigation       |
| -------- | ---------------- |
| Welcome  | Login / Register |
| Login    | Account          |
| Register | Account          |

Navigation is handled using **react-router-dom**.


## 10. Code Quality Practices

* Modular components
* Clear file and folder naming
* Meaningful comments where required
* Conventional commit messages
* No unnecessary dependencies

## 11. Deployment Plan



## 12. Pending Implementation

* Register Screen UI
* Account Settings Screen UI


## 13. Conclusion

This implementation focuses on fulfilling the assignment requirements accurately by prioritizing UI correctness, navigation flow, and clean React code. The application is intentionally scoped to match the expectations of the qualifier task.
