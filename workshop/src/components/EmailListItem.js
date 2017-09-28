import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class EmailListItem extends PureComponent {
    static propTypes = {
        from: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired
    };

    render() {
        const {from, subject} = this.props;

        return (
            <div className="email-list-item">
                <span>{from}</span>
                <span>{subject}</span>
            </div>
        );
    }
}
