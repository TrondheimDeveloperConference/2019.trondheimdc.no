import * as React from 'react';

import dataforeningen from '../../assets/meetups/dataforeningen.svg';
import ixda from '../../assets/meetups/ixda.svg';
import javabin from '../../assets/meetups/javabin.svg';
import nnug from '../../assets/meetups/nnug.svg';
import spillmakerlauget from '../../assets/meetups/spillmakerlauget.svg';
import './Meetups.less';

export default function Meetups() {
    return (
        <ul className="c-meetups unstyled">
            <li className="c-meetups__meetup">
                <a title="Dataforeningen Trøndelag"
                    href="http://www.dataforeningen.no/om-dataforeningen-troendelag.4818801-134401.html">
                    <img src={dataforeningen} alt='Dataforeningen Trøndelag'/>
                </a>
            </li>
            <li className="c-meetups__meetup">
                <a title="IXDA" href="http://www.meetup.com/IXDATrondheim/">
                    <img src={ixda} alt='IXDA'/>
                </a>
            </li>
            <li className="c-meetups__meetup">
                <a title="javaBin" href="http://www.meetup.com/javaBin-Trondheim/">
                    <img src={javabin} alt='javaBin'/>
                </a>
            </li>
            <li className="c-meetups__meetup">
                <a title="NNUG" href="http://www.meetup.com/nnug-trondheim/">
                    <img src={nnug} alt='NNUG' />
                </a>
            </li>
            <li className="c-meetups__meetup">
                <a title="Spillmakerlauget" href="http://trondheim.spillmakerlauget.no/">
                    <img src={spillmakerlauget} alt='Spillamkerlauget'/>
                </a>
            </li>
        </ul>
    );
}