import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import CreateStudent from './components/CreateStudent'
import ViewAll from './components/ViewAll'
import PageNotFound from './components/PageNotFound'
import UpdateStu from './components/UpdateStu'
import { Toaster } from 'react-hot-toast'


let router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    index:true,
                    element: <CreateStudent/>
                },
                {
                    path: "/viewall",
                    element: <ViewAll/>
                },
                {
                    path: "/edit/:id",
                    element: <UpdateStu/>
                },
                {
                    path:"*",
                    element: <PageNotFound/>
                }
            ]
        }
    ]
)

//(alias) function createBrowserRouter(routes: RouteObject[], opts?: DOMRouterOpts): Router import createBrowserRouter

const App = () => {
  return (
    <>
        <>
        <div><Toaster/></div>
        <RouterProvider router={router} />
        </>
    </>
  )
}

export default App
