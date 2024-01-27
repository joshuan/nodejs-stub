import React from 'react';

import { useReqId } from '../hooks/useReqId';

export function MainPage() {
	const reqId = useReqId();

	return (
		<p>Request #{reqId}</p>
	);
}
