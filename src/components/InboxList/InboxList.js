// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { PureComponent } from 'react'
import MailList from '../MailList'
import { withData } from '../../context/Data'

class InboxList extends PureComponent {
    render() {
        const { data, match } = this.props
        const cls = { list: 't-inbox-list', link: 't-inbox-link' }
        return (
            <MailList
                data={ data.inbox }
                match={ match }
                cls={ cls }
            />
        )
    }
}
export default withData( InboxList )