import {
    Action, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import {
    MountedReducers, ReducerManager, StateSchema, StateSchemaKey,
} from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKey> = [];
    const mountedReducers: MountedReducers = {};
    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        reduce: (state: StateSchema, action: Action) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mountedReducers[key] = true;

            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            keysToRemove.push(key);
            mountedReducers[key] = false;
            delete reducers[key];

            combinedReducer = combineReducers(reducers);
        },
    };
}
