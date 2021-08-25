import React from 'react'
import Footer from '../../components/footer/Footer'
const WithLayout = Comp => props => {
    return (
        <div className="wrapper">
            <div className="header">{props.route.meta.title}</div>
            <div className="content">
                <Comp {...props} />
            </div>
            <Footer {...props} />
        </div>
    )
}

export default WithLayout
