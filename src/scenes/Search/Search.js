import React, { PureComponent } from 'react';

import { Header } from 'components';

import { Background } from 'shared/hocs';

class Search extends PureComponent {
    render() {
        return (
            <Background source={require('assets/images/search.png')}>
                <Header />
            </Background>
        );
    }
}

export { Search };
