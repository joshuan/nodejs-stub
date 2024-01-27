interface IRequestStore {
	reqId: string | null;
}

const initialState: IRequestStore = {
	reqId: null,
};

const requestReducer = (state: IRequestStore = initialState) => {
	return state;
};

export default requestReducer;
