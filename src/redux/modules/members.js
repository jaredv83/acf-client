const LOAD = 'members/LOAD';
const LOAD_SUCCESS = 'members/LOAD_SUCCESS';
const LOAD_FAIL = 'members/LOAD_FAIL';

const defaultState = {
  loaded: false,
  loading: false,
  filters: {},
  data: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.members && globalState.members.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('http://acf.cape.io/api/memberList.json'),
  };
}
