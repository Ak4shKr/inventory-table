# 📦 Inventory Management System
![Screenshot 2025-04-24 000123](https://github.com/user-attachments/assets/119587de-6b10-4166-ba1f-d71379698c3e)
  
*A modern solution for tracking components and subcomponents*

## 🌟 Introduction

The Inventory Management System is a full-featured web application designed to efficiently track and manage inventory items with parent-child relationships. Built with modern web technologies, it offers:

- Real-time search and filtering
- Intuitive data organization
- Responsive design for all devices
- Optimized performance for large datasets

## 🛠️ Technologies Used

### Frontend Stack
| Technology | Purpose |
|------------|---------|
| Next.js 15 | App Router & SSR |
| React 18 | UI Components |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Lucide Icons | SVG Icons |
| next-themes | Dark/Light Mode |

### Development Tools
- ESLint + Prettier: Code quality
- Jest: Testing
- Vercel/GitHub: CI/CD

## performance optimise
![Screenshot 2025-04-24 000312](https://github.com/user-attachments/assets/b493ca68-e55e-434a-87b0-d2b7afd9b99b)

## toggle theme/dark
![Screenshot 2025-04-24 000136](https://github.com/user-attachments/assets/f859aed6-3cd5-4cfe-b009-906ddd3b60be)

## Responsive
![Screenshot 2025-04-24 000216](https://github.com/user-attachments/assets/3fce901e-7b55-4225-a0c5-c5d16c54c7dd)

## search filter
![Screenshot 2025-04-24 000152](https://github.com/user-attachments/assets/40c728c2-58cb-47f1-bad9-68b13fe65c65)

### modular project structure

### Structure Details:

1. **`app/`** - Next.js application directory
   - `api/`: Contains all API route handlers
   - `page.tsx`: Entry point for the main view
   - `layout.tsx`: where initialise child with main content

2. **`components/`** - Reusable components
   - `Table/`: Dedicated table-related components
   - `Navbar/`: Shared Navbar components
   - `ThemeToggler/`: Shared ThemeToggler components
     

3. **`types/`** - TypeScript definitions
   - Centralized type definitions for components

4. **`public/`** - Static files
   - Served directly at the root path

## 🛠️ Cloning the Application

### Prerequisites
Before cloning, ensure you have:
- [Git](https://git-scm.com/) installed
- [Node.js](https://nodejs.org/) (v18 or higher) installed
- [npm](https://www.npmjs.com/) (v9 or higher) or [yarn](https://yarnpkg.com/) installed

### Clone the Repository

1. **Open your terminal** (Command Prompt, PowerShell, or Terminal)

2. **Run the clone command and installtion**:
   ```bash
   git clone https://github.com/Ak4shKr/inventory-table
   npm install
   npm run dev
   ```

3. ** use API for dummy data
     ** https://dev.electorq.com/dummy/inventory

