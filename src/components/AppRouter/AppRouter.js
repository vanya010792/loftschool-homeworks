// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
import React, { Fragment, Component } from 'react'
// import './AppRouter.module.css'
// import { Switch, Route, Link } from 'react-router-dom'
// import Home from '../../components/Home/Home'
// import InboxList from '../../components/InboxList/InboxList'
// import InboxMail from '../../components/InboxMail/InboxMail'
// import OutboxList from '../../components/OutboxList/OutboxList'
// import OutboxMail from '../../components/OutboxMail/OutboxMail'
// import './AppRouter.module.css'
//
class AppRouter extends Component {
    render() {
        return(
            <Fragment>
                <h1>Hi approuter</h1>
{/*//                 <Switch>*/}
{/*//                     <Route path='/app' component={ Home } />*/}
{/*//                     <Route path='/app/InboxList' component={ InboxList } />*/}
{/*//                     <Route path='/app/InboxList/:id' component={ InboxMail } />*/}
{/*//                     <Route path='/app/OutboxList' component={ OutboxList } />*/}
{/*//                     <Route path='/app/OutboxList/:id' component={ OutboxMail } />*/}
{/*//                 </Switch>*/}
{/*//                 div.wrapper>div.container>nav.nav>ul.navList>li.navElement*/}
            </Fragment>
        )
    }
}

export default AppRouter
