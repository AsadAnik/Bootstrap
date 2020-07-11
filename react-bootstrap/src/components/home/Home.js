import React, { useState } from 'react';
import {
    Container,
    Alert,
    Button,
    Accordion,
    Card,
    Badge,
    Row,
    Col,
    ButtonToolbar,
    ButtonGroup,
    Dropdown,
    DropdownButton,
    Nav
} from 'react-bootstrap';

import ReactModal from './modal';

///The Home Route of this Application...
const Home = () => {
    ///The useState Hook...
    const [show, setShow] = useState(true);

    //Returning the Template..
    return (
        <div className={'mt-5'}>
            <Container>
                <div style={{ borderBottom: '4px solid gray' }}>
                    <h1 className="display4">Components</h1>
                </div>


                {/*****************Alert Components*******************/}
                <div className={'mt-3'}>
                    <h5>Alerts</h5>

                    {
                        !show ?
                            <Button onClick={() => setShow(true)}>Show Notification!</Button>
                            :
                            <Alert variant={'warning'} onClose={() => setShow(false)} dismissible>
                                <Alert.Heading>Scrolling The React Bootstrap ?</Alert.Heading>
                                <p className={'text-muted'}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit neque distinctio, sunt odit aliquid voluptates accusantium odio. Dolorem voluptate perferendis laboriosam eum repellat inventore possimus minus delectus? Numquam, accusamus.
                                </p>
                                <hr />
                                <Alert.Link href="#">Check here to get the latest one!</Alert.Link>
                            </Alert>
                    }

                    <br />
                    <hr />

                    {/*****************Accordion Components******************/}
                    <h5>Accordions</h5>

                    <Accordion defaultActiveKey={0}>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={0}>
                                Click Me!
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey={0}>
                                <Card.Body>Hello I'm the Body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={1}>
                                Click Me!
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey={1}>
                                <Card.Body>Yeap, I'm another Body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <br />
                    <hr />


                    {/*****************Badge of Components****************/}
                    <Row>
                        <Col style={{ borderRight: '1px solid lightgray' }}>
                            <h5>Badge</h5>
                            <br />
                            <Button varient={'primary'}>
                                Message <Badge variant={'light'}>9</Badge>
                                <span className={'sr-only'}>unread messages</span>
                            </Button>

                            <h3>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h3>
                        </Col>

                        <Col className={'ml-5'}>
                            <h5>Contextual variations</h5>
                            <br />
                            <Badge pill variant="primary">
                                Primary
                            </Badge>{' '}
                            <Badge pill variant="secondary">
                                Secondary
                            </Badge>{' '}
                            <Badge pill variant="success">
                                Success
                             </Badge>{' '}
                            <Badge pill variant="danger">
                                Danger
                            </Badge>{' '}
                            <Badge pill variant="warning">
                                Warning
                            </Badge>{' '}
                            <Badge pill variant="info">
                                Info
                            </Badge>{' '}
                            <Badge pill variant="light">
                                Light
                            </Badge>{' '}
                            <Badge pill variant="dark">
                                Dark
                            </Badge>
                        </Col>
                    </Row>
                    <br />
                    <hr />

                    {/********************Button Groups*****************/}
                    <h5>Button toolbar</h5>

                    <Row>
                        <Col xs={6}>
                            <ButtonToolbar arial-label={'Toolbar with button groups'}>
                                <ButtonGroup className={'mr-2'} arial-label={'First group'}>
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <Button>3</Button>
                                    <Button>4</Button>
                                </ButtonGroup>

                                <ButtonGroup className={'mr-2'} arial-label={'Second group'}>
                                    <Button>5</Button>
                                    <Button>6</Button>
                                    <Button>7</Button>
                                </ButtonGroup>

                                <ButtonGroup arial-label={'Third group'}>
                                    <Button>8</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>

                        {/****************With Dropdown Nested Button Group***************/}
                        <Col>
                            <h5>Nested Dropdown Button Group</h5>

                            <ButtonGroup>
                                <Button>1</Button>
                                <Button>2</Button>

                                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                </DropdownButton>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>

                    {/**********************CARDS Variant***************************/}
                    <h5>The Navigation Cards</h5>

                    <Card>
                        <Card.Header>
                            <Nav variant="pills" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#disabled" disabled>
                                        Disabled
                                </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <br />
                    <hr />

                    {/***************************MODALS*********************************/}
                    <h5>Modal</h5>
                    <ReactModal />
                </div>

            </Container>
        </div>
    )
}

export default Home;