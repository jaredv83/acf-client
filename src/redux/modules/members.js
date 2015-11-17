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
  const result = globalState.members && globalState.members.loaded;
  console.log('isMembersLoaded', result);
  return result;
}

export function load() {
  console.log('load acf members');
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/acf/profiles'),
  };
}
