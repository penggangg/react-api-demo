import React, { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './router'
function Spinner() {
    return (
        <div></div>
    )
}
export default function App() {
    return (
        <>
            <HashRouter>
                <Suspense fallback={<Spinner />}>{renderRoutes(routes)}</Suspense>
            </HashRouter>
        </>
    )
}
