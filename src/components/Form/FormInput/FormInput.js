import React from 'react'

const FormInput = ({
                       htmlFor,
                       inputTitle,
                       type,
                       inputClassName,
                       inputErrorClassName,
                       inputErrorValue,
                       inputErrorValueEmpty,
                       inputValid,
                       inputVal,
                       handleChangeInputValue
                   }) => {
    return(
        <p className="field">
            <label htmlFor={ htmlFor } className="field__label">
                <span className="field-label">{ inputTitle }</span>
            </label>
            <input
                type={ type }
                className={`field__input field-input ${ inputClassName }`}
                name={ htmlFor }
                onChange={ handleChangeInputValue }
                value={ inputVal }
            />
            <span
                className={`field__error field-error ${ inputErrorClassName }`}
            >
                {
                    inputValid === 0
                        ? inputErrorValueEmpty
                        : inputValid === 1
                        ? inputErrorValue
                        : null
                }
            </span>
        </p>
    )
}

export default FormInput