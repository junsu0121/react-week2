import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addWordFB } from "./redux/modules/homework";
import { useDispatch } from "react-redux";
// import { addWordFB } from "./redux/modules/homework";

const Add = (props) => {
  const dispatch = useDispatch();
  const word = React.useRef(null);
  const desc = React.useRef(null);
  const ex = React.useRef(null);
  const addWordList = () => {
    // let a = {
    //   word: word.current.value,
    //   desc: desc.current.value,
    //   ex: ex.current.value,
    // };
    // console.log(a);
    // dispatch(
    //   createWord({
    //     word: word.current.value,
    //     desc: desc.current.value,
    //     ex: ex.current.value,
    //   })
    // );
    dispatch(
      addWordFB({
        word: word.current.value,
        desc: desc.current.value,
        ex: ex.current.value,
      })
    );
  };

  return (
    <div>
      <h1>단어 추가하기</h1>
      <Input>
        <p>단어</p>
        <input type="text" ref={word} />
        <p>설명</p>
        <input type="text" ref={desc} />
        <p>예시</p>
        <input type="text" ref={ex} />
      </Input>
      <Link to="/">
        <Btn onClick={addWordList}>추가하기</Btn>
      </Link>
    </div>
  );
};

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const Btn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 260px;
  border: none;
  background-color: #58cee9;
  color: white;
`;
export default Add;
