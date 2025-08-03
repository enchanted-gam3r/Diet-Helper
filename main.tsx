
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Changed from App.tsx to App.jsx
import './index.css';

createRoot(document.getElementById("root")!).render(<App />);
