# Application build with Vite, React, Typescript, ChakraUI.

Emergency Dispatch Simulator is a study-focused web app that mimics the functions of a real emergency dispatch system.

---

- `components/:` Contains all the React components needed for the application.

  - `LoginPage.tsx:` The login page for the app.
  - `RegisterPage.tsx:` The registration page for the app.
  - `Dashboard.tsx:` The main dashboard page where users can see and manage emergencies.
  - `EmergencyList.tsx:` A list of emergencies that can be displayed on the dashboard.
  - `EmergencyItem.tsx:` An individual emergency item that is part of the EmergencyList.
  - `EmergencyForm.tsx:` A form to add or edit emergency information.
  - `NavBar.tsx:` The navigation bar component for navigating between pages.
  - `PrivateRoute.tsx:` A higher-order component that restricts access to certain routes based on user authentication.

- `contexts/:` Contains the React context providers for managing global state.
  - `AuthContext.tsx:` Provides user authentication state and related functions.
  - `EmergencyContext.tsx:` Provides emergency data state and related functions.
- `services/:` Contains services to interact with external APIs or perform complex logic.
  - `authService.ts:` Handles user authentication, including login, registration, and token management.
  - `emergencyService.ts:` Handles fetching, creating, updating, and deleting emergency data.
- `types/:` Contains TypeScript type definitions for the app's data models.
  - `Emergency.ts:` Defines the Emergency data model.
  - `User.ts:` Defines the User data model.
- `utils/:` Contains utility functions and shared code.
  - `api.ts:` Configures a shared Axios instance for making API requests.
