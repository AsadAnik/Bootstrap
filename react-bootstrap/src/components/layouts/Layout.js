import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Layout = () => {

    return (
            <Container>
                <Jumbotron className={'bg-dark text-light'} style={{borderRadius: 0}}>
                    <div>
                        <h4 className={'text-center text-uppercase'}>example of the layout</h4>
                    </div>
                </Jumbotron>
            </Container>
    )
}

export default Layout;