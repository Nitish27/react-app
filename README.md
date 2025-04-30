# React Auth Boilerplate with Context API

This is a simple React authentication boilerplate that demonstrates how to implement authentication using React's Context API and hooks.

## Features

- User authentication flow with login/logout functionality
- Protected routes with authentication checks
- React Context API for global state management
- TypeScript for type safety
- React Router for navigation
- Responsive design

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── LoginForm.tsx   # Form for user login
│   ├── Navbar.tsx      # Navigation bar component
│   ├── PrivateRoute.tsx # Route protection wrapper
│   └── Profile.tsx     # User profile component
├── context/
│   └── AuthContext.tsx # Authentication context provider
├── pages/              # Page components
│   ├── HomePage.tsx    # Home page
│   ├── LoginPage.tsx   # Login page
│   └── ProfilePage.tsx # Profile page (protected)
├── App.tsx             # Main app component with routing
└── main.tsx            # Entry point
```

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Authentication Flow

This boilerplate uses a mock authentication system that simulates API calls. In a real-world application, you would replace these with actual API calls to your backend service.

The `AuthContext` provides:

- `user`: The currently authenticated user (or null if not authenticated)
- `login`: Function to log in a user
- `logout`: Function to log out the current user
- `isAuthenticated`: Boolean indicating if a user is authenticated

### Accessing Auth Context

```tsx
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, login, logout, isAuthenticated } = useAuth();
  
  // Now you can use these values and functions
}
```

### Protected Routes

The application uses a `PrivateRoute` component to protect routes that require authentication. If a user tries to access a protected route without being authenticated, they will be redirected to the login page.

## Customization

### Real API Integration

To connect with a real authentication API:

1. Modify the `login` and `logout` functions in `AuthContext.tsx`
2. Add token management for API requests
3. Implement proper error handling

### User Registration

This boilerplate only includes login functionality. To add registration:

1. Create a registration form component
2. Add a registration function to the auth context
3. Create a registration page
4. Add the route to App.tsx

## License

MIT
