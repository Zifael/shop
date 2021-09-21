import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import {ListGroup} from 'react-bootstrap'

const TypeBar = observer(() => {
    
    const {device} = useContext(Context)   
    
    return (
        <ListGroup>
            {device.types.map(type=>
                <ListGroup.Item 
                    style={{cursor:'pointer',borderRadius:"5px"}}                   
                    active={type.id === device.selectType.id }
                    key={type.id}
                    onClick={()=>device.setSelectType(type)}
                >
                {type.name}                
                </ListGroup.Item>                
            )}
        </ListGroup>
    );
})

export default TypeBar;