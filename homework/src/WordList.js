import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteWordFB } from "./redux/modules/homework";
// store에서 만든 액션생성함수 임포트!

const WordList = () => {
  const history = useHistory();

  const word_list = useSelector((state) => state.homework.list);
  //                        스토어(모듈)에서 만든 state값을 받아서 => 이 컴포넌트에서 받음

  return (
    <div>
      <h1>Fruits</h1>
      <WordBoxWrap>
        {word_list.map((list, index) => {
          // console.log(word_list);
          //잘들어옴!
          return (
            <WordBox
              key={index}
              onClick={() => {
                history.push(`/modify/${index}`);
              }}
            >
              <Title>과일</Title>
              <p>{list.word}</p>
              <Title>색깔</Title>
              <p>{list.desc}</p>
              <Title>맛</Title>
              <Ex>{list.ex}</Ex>
              {/* <button
                  onClick={() => {
                    dispatch(deleteWordFB(word_list[word_index].id));
                    //id 지정해줘서 삭제!
                    //액션크리에이터 함수 실행!
                  }}
                >
                  삭제하기
                </button> */}
            </WordBox>
          );
        })}
      </WordBoxWrap>
      <Link to="/add">
        <Btn>추가하기</Btn>
      </Link>
    </div>
  );
};
const Wrap = styled.div`
  max-height: 100vh;
`;
const WordBoxWrap = styled.div`
  max-height: 80vh;
  overflow-y: scroll;
`;
const WordBox = styled.div`
  background-color: white;
  border: none;
  max-width: 350px;
  height: 250px;
  border-radius: 30px;
  display: center;
  flex-direction: center;
  justify-content: center;
  padding-top: 15px;
  padding-left: 10px;
  overflow-y: hidden;
  margin-bottom: 10px;
`;
const Ex = styled.p`
  color: blue;
`;
const Title = styled.p`
  font-weight: bolder;
  font-size: 18px;
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
export default WordList;
