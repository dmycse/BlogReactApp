import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProviders } from '@/app/providers';
import './styles/index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProviders />
  </StrictMode>,
);