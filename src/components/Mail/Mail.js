// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React, { Fragment } from 'react'
import classes from './Mail.module.css'

const Mail = props => {
    const { cls } = props
    return(
        <div className={ classes.container }>
            {
                !!props.from
                ? <Fragment>
                    <p className={ cls.to }>To: <b>{ props.from }</b></p>
                    <p>{ props.body }</p>
                  </Fragment>
                : <Fragment>
                    <p >From: <b>{ props.to }</b></p>
                    <p>{ props.body }</p>
                  </Fragment>
            }
        </div>
    )
}

export default Mail