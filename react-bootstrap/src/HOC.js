import React from 'react';
import Navbar from './components/navbar/Nav';
import Footer from './components/Footer';

const HOC = (props) => {

    return(
        <div>
            <Navbar />
            { props.children }
            <Footer />
        </div>
    )
}

export default HOC;