// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react'
import classes from './Home.module.css'

export default () => {
    return(
        <div className={ classes.container }>
            <p className='t-greeting'>Приветствуем в почтовом клиенте!</p>
        </div>
    )
}
