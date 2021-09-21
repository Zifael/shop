import { observer } from 'mobx-react-lite';
import React,{useContext} from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '../index';


const BrandBar = observer((props) => {

    const {device} = useContext(Context)   

    return (
        <Row >  
        <div style={{display:'flex',flexWrap: "wrap" }}>
            {device.brand.map(brand =>
                <Card
                    style={{cursor:'pointer',marginLeft:5}}                 
                    className='p-3'
                    bg={brand.id === device.selectBrand.id ? 'info' : ''}                    
                    key={brand.id}
                    onClick={()=>device.setSelectBrand(brand)}
                >
                    {brand.name}
                </Card>
            )}
        </div>
        </Row>
    );
})

export default BrandBar;