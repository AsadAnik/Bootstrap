import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewsFeed from './newsFeed';
import SideNewsList from './sideNewsList';

const Layout = () => {
   //the layouts return statement... 
    return (
            <Container fuild={'md'}>
                <h3 className={'m-5'}>
                    Layout, Grid & The Columns, Rows System..
                </h3>
            {/************************1st-Row******************************/}    
                <Row className={'bg-dark m-4 text-light text-uppercase text-center sticky-top'}>
                    <Col sm={8} md={8} xs={6}>News Details</Col>
                    <Col style={{borderLeft: '1px solid'}}>More Feed!</Col>
                </Row>

            {/***********************2nd-ROW*****************************/}
                <Row className={'m-4'}>
                  {/************1ST-COLUMN***************/}  
                    <Col sm={8} md={8} xs={6}>
                        <NewsFeed />
                    </Col>

                  {/*****************2ND COLUMN********************/}  
                    <Col style={{borderLeft: '1px solid lightgray'}}>
                        <SideNewsList />
                    </Col>
                </Row>
            </Container>
    )
}

export default Layout;