// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { Component } from 'react'

class OutboxList extends Component {
    render() {
        return (
            <h2>OutboxList</h2>
        )
    }
}
export default OutboxList