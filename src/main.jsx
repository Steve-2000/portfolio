import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Home from './Pages/Home'
// import Post from './Pages/Post'
// import CreatePost from './Pages/CreatePost'
// import EditPost from './Pages/EditPost'
import About from './Pages/BottomBar.jsx'
import Home from './Pages/Home.jsx'
import { Provider } from 'react-redux'
import store from './utility/Store.js'
import './index.css'



const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      index:'/home',
      element:<Home />

    }
   
  ]
}])
createRoot(document.getElementById('root')).render(
<Provider store={store}>
 < RouterProvider router={router}>
    <App />
</RouterProvider>
</Provider>
)
