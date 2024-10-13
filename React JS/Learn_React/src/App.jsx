import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProductInfo from "./components/ProductInfo";
import List from "./components/List";
import UserList from "./components/UserList";
import Person from "./components/Person";
import Card from "./components/Card";
import Weather from "./components/Weather";
import StateComponent from "./components/StateComponent";
import { useState } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import CopyInput from "./components/CopyInput";

const App = () => {
  const myName = "Zulfiqar Ali";

  const multiply = (a, b) => a * b;

  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <p>2 + 2 = {2 + 2}</p>
      <h1>{myName}</h1>
      <h1>{multiply(2, 4)}</h1>
      <ProductInfo></ProductInfo>
      <List></List> */}
      <UserList></UserList>
      <Person name="Zulfiqar Ali" age={25} role="MERN Developer"></Person>
      <Card>
        <h1>This is my first Card Data</h1>
      </Card>
      <Weather temperature={12}></Weather>
      <StateComponent></StateComponent>
      <Counter count={count} onClickHandler={onClickHandler}></Counter>
      <Todo></Todo>
      <CopyInput></CopyInput>
    </>
  );
};

export default App;
