import React, { useContext } from 'react';
import { Context } from '../';
import {Navbar,Container,Nav, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

const NavBar = observer((props) => {
    const {user} = useContext(Context)

    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>КупитьДевайс</NavLink>
                {user.isAuth ? 
                <Nav className="ml-auto" >
                    <Button
                        variant={'outline-light'} 
                        onClick={()=>history.push(ADMIN_ROUTE)}                     
                    >
                        Админ панель
                    </Button>
                    <Button 
                        style={{marginLeft:'.5rem'}} 
                        variant={'outline-light'}                    
                        onClick={()=>logOut()}                    
                    >
                        Выйти
                    </Button>
                    <Button 
                        style={{marginLeft:'.5rem'}} 
                        variant={'outline-light'}                    
                        onClick={()=>history.push(BASKET_ROUTE)}                    
                    >
                        Корзина
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" >                    
                    <Button variant={'outline-light'} onClick={()=>history.push(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;