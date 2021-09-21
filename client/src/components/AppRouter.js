import { observer } from 'mobx-react-lite';
import React,{useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { Context } from '../index';
import {authRouter,publickRouter} from '../route'
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = observer(() => {
    const {user} = useContext(Context) ;
    
    return (
        <Switch>
            {user.isAuth && authRouter.map(({path,Component})=>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publickRouter.map(({path,Component})=>            
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
})

export default AppRouter;