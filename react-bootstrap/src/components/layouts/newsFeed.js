import React from 'react';
import { Media } from 'react-bootstrap';

const NewsFeed = () => {
  ///NewsFeeds item for Layout Component...
    return (
        <ul className={'list-unstyled'}>
            {/*****************MEDIA WITH UL-LI (List)***********************/}  
            <Media as={'li'}>
                <img
                    className={'mr-3'}
                    width={64}
                    height={64}
                    src={'64x64'}
                    alt={'64x64'}
                    style={{ border: '1px solid lightgray' }}
                />

                <Media.Body>
                    <h5>Generic React News Feed!</h5>
                    <p className={'text-muted'}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum inventore eos dolores earum dignissimos vitae ratione eius, sapiente non voluptatibus aliquam neque aperiam ab deserunt placeat odit quos. Ipsam, id.
                 </p>

                    {/************************NESTED MEDIA***********************/}
                    <Media as={'li'}>
                        <img
                            className={'mr-2'}
                            width={64}
                            height={64}
                            src={'64x64'}
                            alt={'64x64'}
                            style={{ border: '1px solid lightgray' }}
                        />

                        <Media.Body>
                            <h5>1. Nested News Feed!</h5>
                            <p className={'text-muted'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita explicabo quis mollitia illum minus eveniet! Laboriosam deserunt nihil, ratione sit non numquam. Excepturi sit cumque nulla architecto magni aspernatur.
                            </p>
                        </Media.Body>
                    </Media>

                    {/**************2ND NESTED MEDIA List****************/}
                    <Media as={'li'}>
                        <img
                            className={'mr-2'}
                            width={64}
                            height={64}
                            src={'64x64'}
                            alt={'64x64'}
                            style={{ border: '1px solid lightgray' }}
                        />

                        <Media.Body>
                            <h5>2. Nested News Feed!</h5>
                            <p className={'text-muted'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita explicabo quis mollitia illum minus eveniet! Laboriosam deserunt nihil, ratione sit non numquam. Excepturi sit cumque nulla architecto magni aspernatur.
                            </p>
                        </Media.Body>
                    </Media>
                </Media.Body>
            </Media>

            {/***************2ND LIST****************/}
            <Media as={'li'}>
                <img
                    className={'mr-3'}
                    width={64}
                    height={64}
                    src={'64x64'}
                    alt={'64x64'}
                    style={{ border: '1px solid lightgray' }}
                />

                <Media.Body>
                    <h5>Generic React News Feed!</h5>
                    <p className={'text-muted'}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum inventore eos dolores earum dignissimos vitae ratione eius, sapiente non voluptatibus aliquam neque aperiam ab deserunt placeat odit quos. Ipsam, id.
                 </p>
                </Media.Body>
            </Media>

            {/***************3RD-LIST****************/}
            <Media as={'li'}>
                <img
                    className={'mr-3'}
                    width={64}
                    height={64}
                    src={'64x64'}
                    alt={'64x64'}
                    style={{ border: '1px solid lightgray' }}
                />

                <Media.Body>
                    <h5>Generic React News Feed!</h5>
                    <p className={'text-muted'}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum inventore eos dolores earum dignissimos vitae ratione eius, sapiente non voluptatibus aliquam neque aperiam ab deserunt placeat odit quos. Ipsam, id.
                 </p>
                </Media.Body>
            </Media>

            {/***************4TH-LIST****************/}
            <Media as={'li'}>
                <img
                    className={'mr-3'}
                    width={64}
                    height={64}
                    src={'64x64'}
                    alt={'64x64'}
                    style={{ border: '1px solid lightgray' }}
                />

                <Media.Body>
                    <h5>Generic React News Feed!</h5>
                    <p className={'text-muted'}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum inventore eos dolores earum dignissimos vitae ratione eius, sapiente non voluptatibus aliquam neque aperiam ab deserunt placeat odit quos. Ipsam, id.
                 </p>
                </Media.Body>
            </Media>

            {/***************5th-LIST****************/}
            <Media as={'li'}>
                <img
                    className={'mr-3'}
                    width={64}
                    height={64}
                    src={'64x64'}
                    alt={'64x64'}
                    style={{ border: '1px solid lightgray' }}
                />

                <Media.Body>
                    <h5>Generic React News Feed!</h5>
                    <p className={'text-muted'}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum inventore eos dolores earum dignissimos vitae ratione eius, sapiente non voluptatibus aliquam neque aperiam ab deserunt placeat odit quos. Ipsam, id.
                 </p>
                </Media.Body>
            </Media>
        </ul>
    )
}

export default NewsFeed;