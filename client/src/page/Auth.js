import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation, useHistory} from 'react-router-dom';
import { Context } from '../index';
import { login, registration } from '../http/userApi';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

import './Auth.css'

const  Auth =  observer((props)  => {

    const {user} = useContext(Context)

    const location = useLocation()
    const isLoading = location.pathname === LOGIN_ROUTE
    const history = useHistory()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const click = async() => {
        try {
            let data
            if(isLoading){
                data = await login(email,password)
            }else{
                data = await registration(email,password)            
            }
            user.setUser(data)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }

    }

    return (
        <Container className='wraper__auth' style={{height: window.innerHeight - 54}}>
            <Card className='card__auth'>
                <h2 className='m-auto'>{isLoading? 'Вход' : 'Регистрация'}</h2>
                <Form className='form__auth'>
                    <Form.Control
                        className='form__controll__auth' 
                        placeholder='Введите E-mail'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='form__controll__auth' 
                        placeholder='Введите password'
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        type="password"
                    />
                    <Button  
                        variant='outline-success' 
                        className='button__auth' 
                        onClick={click}
                    >
                        {isLoading? 'Войти' : 'Зарегистрироваться' }
                    </Button>
                    {isLoading?
                    <div className='navbar__link__auth'>                        
                        Нет аккаунта?                
                        <NavLink  className='link__auth' to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>                                          
                    </div>
                    :
                    <div className='navbar__link__auth'>                        
                        Есть аккаунта?                
                        <NavLink  className='link__auth' to={LOGIN_ROUTE}>Войти</NavLink>                                          
                    </div>
                    }                                
                </Form>
            </Card>
        </Container>
    );
})

export default Auth;