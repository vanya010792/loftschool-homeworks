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
import React, { Component } from 'react'
import './AppRouter.module.css'

class AppRouter extends Component {
    render() {
        return(
            <h1>AppRouter</h1>
        )
    }
}

export default AppRouter
