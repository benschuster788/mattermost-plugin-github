import React from 'react';
import PropTypes from 'prop-types';

export default class UserAttribute extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        username: PropTypes.string,
        actions: PropTypes.shape({
            getGitHubUser: PropTypes.func.isRequired,
        }).isRequired,
    };

    constructor(props) {
        super(props);
        props.actions.getGitHubUser(props.id);
    }

    render() {
        const username = this.props.username;

        if (!username) {
            return null;
        }

        return (
            <div style={style.container}>
                <a
                    href={'https://github.com/' + username}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <i className='fa fa-github'/>{' ' + username}
                </a>
            </div>
        );
    }
}

const style = {
    container: {
        margin: '5px 0',
    },
};
