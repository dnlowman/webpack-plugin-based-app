import React from 'react';

import PluginPage from '../../PluginPage/dist/bundle.js';

const App = () => {
    debugger;
    return (
        <div>
            <p>This is the navbar!</p>
            <PluginPage.default actions={123} state={123} />
        </div>
    );
};

export default App;
