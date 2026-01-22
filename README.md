# Luxaris

A modern web application built with React, Vite, and Tailwind CSS.

## Installation

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/PhntmVoid/Luxaris.git
   cd Luxaris
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Or if you use yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Or with yarn:
   ```bash
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```
   Or with yarn:
   ```bash
   yarn build
   ```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/       # Reusable React components
├── pages/           # Page components
├── assets/          # Static assets
├── App.jsx          # Root component
├── App.css          # Global styles
├── main.jsx         # Application entry point
└── index.css        # Global CSS
```

## Technologies

- **React** ^19.2.0 - UI library
- **Vite** ^7.2.4 - Build tool and dev server
- **Tailwind CSS** ^4.1.18 - Utility-first CSS framework
- **React Router** ^7.12.0 - Client-side routing
- **ESLint** ^9.39.1 - Code linting

## Development

For development, use the following command to start a local server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## License

Licensed under the MIT License. See the LICENSE file for more details.
