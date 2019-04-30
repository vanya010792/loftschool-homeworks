// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { PureComponent } from 'react'
import MailList from '../MailList'
import { withData } from '../../context/Data'

class OutboxList extends PureComponent {
    render() {
        const { data, match } = this.props
        const cls = { list: 't-outbox-list', link: 't-outbox-link' }
        return (
            <MailList
                data={ data.outbox }
                match={ match }
                cls={ cls }
            />
        )
    }
}
export default withData( OutboxList )