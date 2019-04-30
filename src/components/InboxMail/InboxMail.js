import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const {
      match: {
        params: { id }
      },
      data
    } = this.props;
    const mail = data.inbox.find( mail => mail.id === id );
    const cls = { to: 't-mail-to', body: 't-mail-body' }

    return <Mail {...mail} cls={ cls } />;
  }
}

export default withData( InboxMail );