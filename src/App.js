// import logo from '../public/favicon.jpg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Statistic from './components/Statistic/Statistic';
import Topic from './components/Topic/Topic';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topic></Topic>
        },
        {
          path: '/statistic',
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz")
          },
          element: <Statistic></Statistic>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
