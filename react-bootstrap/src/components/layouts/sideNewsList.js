import React from 'react';
import { Media, } from 'react-bootstrap';

const NewsFeed = () => {
  ///The SideList of this Layout Component....
    return (
        <ul className={'list-unstyled'}>
            <Media as={'li'} className={'mt-2'} style={{borderBottom: '1px solid lightgray'}}>
                <Media.Body>
                    <h5>Media Heading For List News.</h5>
                </Media.Body>
                <img
                    className={'ml-2 mb-2'}
                    width={64}
                    height={64}
                    src={'64x64'}
                    alt={'64x64'}
                    style={{border: '1px solid lightgray'}}
                />
            </Media>

            <Media as={'li'} className={'mt-2'} style={{borderBottom: '1px solid lightgray'}}>
                <Media.Body>
                    <h5>Media Heading For List News.</h5>
                </Media.Body>
                <img
                    className={'ml-2 mb-2'}
                    width={64}
                    height={64}
                    src={'64x64'}
                    alt={'64x64'}
                    style={{border: '1px solid lightgray'}}
                />
            </Media>

            <Media as={'li'} className={'mt-2'} style={{borderBottom: '1px solid lightgray'}}>
                <Media.Body>
                    <h5>Media Heading For List News.</h5>
                </Media.Body>
                <img
                    className={'ml-2 mb-2'}
                    width={64}
                    height={64}
                    src={'64x64'}
                    alt={'64x64'}
                    style={{border: '1px solid lightgray'}}
                />
            </Media>

            <Media as={'li'} className={'mt-2'} style={{borderBottom: '1px solid lightgray'}}>
                <Media.Body>
                    <h5>Media Heading For List News.</h5>
                </Media.Body>
                <img
                    className={'ml-2 mb-2'}
                    width={64}
                    height={64}
                    src={'64x64'}
                    alt={'64x64'}
                    style={{border: '1px solid lightgray'}}
                />
            </Media>

            <Media as={'li'} className={'mt-2'}>
                <Media.Body>
                    <h5>Media Heading For List News.</h5>
                </Media.Body>
                <img
                    className={'ml-2 mb-2'}
                    width={64}
                    height={64}
                    src={'64x64'}
                    alt={'64x64'}
                    style={{border: '1px solid lightgray'}}
                />
            </Media>

        </ul>
    )
}

export default NewsFeed;