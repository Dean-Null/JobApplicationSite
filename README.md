# React Job Application

A multi-page React application built with TypeScript and Vite for job application management. This project demonstrates a complete job application flow with form validation, state management, and end-to-end testing.

## Features

- **Create Account** - User registration with password requirements validation
- **My Information** - Personal information form with address fields
- **My Experience** - Dynamic work experience entries (add/remove multiple experiences)
- **Review** - Summary page displaying all entered information
- Progress bar showing application steps across all pages
- Form validation on all pages
- State management using React Context API
- End-to-end testing with Playwright

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
  ├── context/
  │   ├── ApplicationContext.tsx        # Context provider for application state
  │   ├── IApplicationContextType.tsx   # Context type definitions
  │   ├── IApplicationProviderProps.tsx # Provider props interface
  │   ├── IExperience.tsx               # Experience data interface
  │   └── IMyInformationData.tsx        # Personal information interface
  ├── pages/
  │   ├── CreateAccount.tsx             # Create Account page component
  │   ├── CreateAccount.css             # Styles for Create Account page
  │   ├── MyInformation.tsx             # My Information page component
  │   ├── MyInformation.css             # Styles for My Information page
  │   ├── MyExperience.tsx              # My Experience page component
  │   ├── MyExperience.css              # Styles for My Experience page
  │   ├── Review.tsx                    # Review page component
  │   └── Review.css                    # Styles for Review page
  ├── App.tsx                           # Main app component with routing
  ├── main.tsx                          # React entry point
  └── index.css                         # Global styles

tests/
  ├── create-account.spec.ts            # E2E tests for account creation
  ├── create-account-failure.spec.ts    # E2E tests for validation failures
  └── my-information-validation.spec.ts # E2E tests for information validation
```

## Technologies Used

- React 19
- TypeScript
- Vite
- React Router DOM
- Playwright (for E2E testing)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Testing

This project includes comprehensive end-to-end tests using Playwright. Tests cover:
- Account creation with valid credentials
- Form validation and error handling
- Navigation between pages
- Data persistence across pages

Run tests with:
```bash
npm run test:e2e
```

For interactive test debugging:
```bash
npm run test:e2e:ui
```

