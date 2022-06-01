import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modifyWordFB, modifyWord } from "./redux/modules/homework";

const Modify = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const word_index = params.index;
  //index로 몇번째 데이터인지알고
  const word_list = useSelector((state) => state.homework.list);
  // App.js에서 파이어스토에서 받은 파일, useselector로 받아오고
  //   console.log(word_list);

  const word = React.useRef(null);
  const desc = React.useRef(null);
  const ex = React.useRef(null);
  // 수정할 데이터들 ref로 받아오기!
  const modifyWordList = () => {
    // console.log({
    //   word: word.current.value,
    //   desc: desc.current.value,
    //   ex: ex.current.value,
    //   id: params,
    // });
    dispatch(
      modifyWordFB({
        word: word.current.value,
        desc: desc.current.value,
        ex: ex.current.value,
        // id: params,
        id: word_list[word_index].id,
        //id 값 보내기!
      })
    );
    console.log("push");
  };

  return (
    <div>
      {/* <h1>{word_list[word_index] ? word_list[word_index].word : ""}</h1>
      로딩 다되면                     보여줘                        안됐다면 비워줘 */}
      <h1>과일 수정하기</h1>
      <Title>과일</Title>
      <p>{word_list[word_index] ? word_list[word_index].word : ""}</p>
      <Title>색깔</Title>
      <p>{word_list[word_index] ? word_list[word_index].desc : ""}</p>
      <Title>맛</Title>
      <Ex>{word_list[word_index] ? word_list[word_index].ex : ""}</Ex>

      <Input>
        <p>이름</p>
        <input type="text" ref={word} placeholder="바꿀 이름!" />
        <p>색깔</p>
        <input type="text" ref={desc} placeholder="바꿀 색깔!" />
        <p>맛</p>
        <input type="text" ref={ex} placeholder="맛은?" />
      </Input>
      <Link to="/">
        <Btn onClick={modifyWordList}>수정하기</Btn>
      </Link>
    </div>
  );
};

const Title = styled.p`
  font-weight: bold;
`;
const Ex = styled.p`
  color: blue;
`;
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
export default Modify;
