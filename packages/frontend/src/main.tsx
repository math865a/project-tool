import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);

/*<React.StrictMode>
</React.StrictMode>*/