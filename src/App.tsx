import React from 'react';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import Counter2 from './Counter2';
import ReducerSample from './ReducerSample';
import ReducerSample2 from './ReducerSample2';
import { SampleProvier } from './SampleContext';

// React.FC를 사용했을 때 이점
// 1. children이라는 props가 자동으로 들어가있음
// 2. Component. 했을 때 contextTypes, defaultProps, displayName 등이 자동완성 됨
// 단점은 아직 Component.defaultProps가 제대로 작동하지 않음
// 하려면 props를 받을 때 비구조화할당에서 해야함
// 또한, props type을 지정할 때 ? 를 붙여줘야 함
const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name);
  }
  
  const onSubmit = (form: { name:string; description: string }) => {
    console.log(form);
  }

  return (
    <div>
      <Greetings name="리액트" onClick={onClick}/>
      <MyForm onSubmit={onSubmit}/>
      
      {/* useState 사용 */}
      <Counter />
      {/* useReducer 사용 */}
      <Counter2 />

      {/* useReducer 사용 */}
      <ReducerSample />
      {/* useContext 사용 */}
      <SampleProvier>
        <ReducerSample2 />
      </SampleProvier>
    </div>
  );
}

export default App;
