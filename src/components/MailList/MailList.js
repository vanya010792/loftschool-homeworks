// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import classes from './MailList.module.css'
import { Link } from 'react-router-dom'

const MailList = props => {
    const { data, match, cls } = props
    return (
        <div className={ `${classes.container} ${ cls.list }` }>
            {
                data.map( item => {
                    return(
                        <Link
                            key={ item.id }
                            to={ `${match.path}/${item.id}` }
                            className={ `${classes.link} ${ cls.link }` }
                        >
                            { `${ item.body.substr( 0, 52 ) }...` }
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default MailList;
