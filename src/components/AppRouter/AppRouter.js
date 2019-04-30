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
import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from '../../components/Home'
import InboxList from '../../components/InboxList'
import InboxMail from '../../components/InboxMail'
import OutboxList from '../../components/OutboxList'
import OutboxMail from '../../components/OutboxMail'
import classes from './AppRouter.module.css'

const names = [
        {
            path: '/app',
            title: 'Home',
            cls: 't-link-home'
        },
        {
            path: '/app/inbox',
            title: 'Inbox',
            cls: 't-link-inbox'
        },
        {
            path: '/app/outbox',
            title: 'Outbox',
            cls: 't-link-outbox'
        }
    ]

export default ({ match }) => {
    const TitlePage = arr => {
        for ( let a = 0; a < arr.length; a++ ) {
            if( arr[a].path === match.path ) {
                return arr[a].title
            }
        }
    }
    return(
        <div className={ classes.wrapper }>
            <div className={ classes.container }>
                <nav className={ classes.nav }>
                    <ul className={ `${classes.navList} t-nav-list` }>
                        {
                            names.map( (item, index) => {
                                return(
                                    <li
                                        className={ classes.navElement }
                                        key={ index }
                                    >
                                        <NavLink
                                            exact
                                            to={item.path}
                                            className={`${item.cls} ${classes.link}`}
                                            activeClassName='active'
                                        >
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className={ classes.content }>
                    <h3 className={ classes.title }>
                        { TitlePage( names ) }
                    </h3>
                    <Switch>
                        <Route path='/app/inbox/:id' component={ InboxMail } />
                        <Route path='/app/outbox/:id' component={ OutboxMail } />
                        <Route path='/app/outbox' component={ OutboxList } />
                        <Route path='/app/inbox' component={ InboxList } />
                        <Route path='/app' component={ Home } />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
