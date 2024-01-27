import { useSelector } from 'react-redux';

import type { RootState } from '../store';

export function useReqId(): string | null {
	return useSelector((state: RootState) => state.request.reqId);
}
