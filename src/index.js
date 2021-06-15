import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import { ProviderB } from './events/EContext/context';
import App from './App';


ReactDOM.render(
  <SpeechProvider appId="02dd43a6-48bb-4f49-b876-4caf34bc151e" language="en-US">
    <Provider>
      <ProviderB>
        <App />
      </ProviderB>
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);
