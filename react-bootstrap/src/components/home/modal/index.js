import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import GetModal from './Modal';

///The Modals parent Component to see the accual Modal....
const _ = () => {
    ///useState Hook for Modal..
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Lanch the Additional React Modal
            </Button>

            <GetModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default _;