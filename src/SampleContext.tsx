import React, { createContext, Dispatch, useReducer, useContext } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}

type Action = 
        | { type: 'SET_COUNT'; count: number }
        | { type: 'SET_TEXT'; text: string }
        | { type: 'SET_COLOR'; color: Color }
        | { type: 'TOGGLE_GOOD';}

function reducer(state: State, action: Action): State {
    switch(action.type){
        case 'SET_COUNT' :
            return {
                ...state,
                count: action.count
            }
        case 'SET_TEXT' :
            return {
                ...state,
                text: action.text
            }
        case 'SET_COLOR' :
            return {
                ...state,
                color: action.color
            }
        case 'TOGGLE_GOOD' :
            return {
                ...state,
                isGood: !state.isGood
            }
        default :
            throw new Error('unhandled action type');
    }
}

type SampleDispatch = Dispatch<Action>;

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

type SampleProvierProps = {
    children: React.ReactNode;
}

export function SampleProvier({ children }: SampleProvierProps) {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    });

    return (
        // SampleStateContext, SampleDispatchContext 순서 상관 X
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    )
}

// custom Hook
export function useSampleState() {
    const state = useContext(SampleStateContext);

    // if 처리를 안해주면 null일 경우도 있기 때문에 if로 null인 경우 처리
    if(!state) throw new Error('Cannot find SampleProvider');
    return state;
}

export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    
    if(!dispatch) throw new Error('Cannot find SampleProvider');
    return dispatch;
}
