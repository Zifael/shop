import React from 'react';
import { Image } from 'react-bootstrap';
import preloader from '../Img/cria.gif'

function Preloader(props) {
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <Image  src={preloader}/>
        </div>
    );
}

export default Preloader;