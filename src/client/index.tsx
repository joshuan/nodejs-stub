import React from 'react';
import { createRoot } from 'react-dom/client';

import { Root } from './root';

const roolElement = document.getElementById('app');

if (!roolElement) {
	throw new Error('Unknown rool element!');
}

const root = createRoot(roolElement);

root.render(<Root />);
