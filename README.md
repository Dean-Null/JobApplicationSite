# React Job Application

A multi-page React application built with TypeScript and Vite for job application management.

## Features

- Create Account page with form validation
- Progress bar showing application steps
- Password requirements validation
- Navigation between pages using React Router
- TypeScript for type safety

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
  ├── pages/
  │   ├── CreateAccount.tsx    # Create Account page component
  │   ├── CreateAccount.css     # Styles for Create Account page
  │   └── MyInformation.tsx     # My Information page component
  ├── App.tsx                   # Main app component with routing
  ├── main.tsx                  # React entry point
  └── index.css                 # Global styles
```

## Technologies Used

- React 18
- TypeScript
- Vite
- React Router DOM

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

