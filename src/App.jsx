import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeting from './components/Greeting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello react world!</div>,
  },
  {
    path: '/greeting',
    element: <Greeting />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
