//homework.js
//주석으로 이름 지어주기
import { db } from "../../firebase";
//firebase에서 만들었던 db가져오기
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
// const word_db = db.collection("homework");
// Actions -> 사용할 액션들 만들어줌! (LOAD,CREATE,UPDATE,REMOVE 중 만들어줌!)
const CREATE = "homework/CREATE"; // 정보 생성 액션 만들어주기
const LOAD = "homework/LOAD";
// const DELETE = "homework/DELETE";

const initialState = {
  list: [],
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
  //    타입은 당연히 로드  firestore에서 가져온 데이터 가져와야해
}
export function createWord(word) {
  // bucket이라는 새로운 데이터를 받아서
  return { type: CREATE, word };
  //type은 액션, bucket은 value(파라미터,데이터)
  //  딕셔너리에 key랑 value가 똑같으면 생략가능 -> {bucket:bucket}이면 {bucket} 으로 가능, 그래서 그냥 bucket으로 넣어줌!
}

//middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    //비동기 통신이여서 async 붙이기
    const word_data = await getDocs(collection(db, "homework"));
    // firebase에서 받아 올때까지 기다려주고            db에서 "만든 폴더"
    // console.log(word_data);
    //데이터 가져와지나 콘솔찍고 useEffect로 확인!
    let word_list = [];
    //받은 정보 넣어줄 배열 만들어주고
    word_data.forEach((doc) => {
      //forEach로 데이터 가져옴
      // console.log(doc.data());
      // 보기 쉬운 데이터 형식으로 콘솔찍어 useEffect로 확인!
      word_list.push({ id: doc.id, ...doc.data() });
      //가져온거 넣어주기, id도 같이 나중에 수정하고 할 때 필요!
    });
    // console.log(word_list);
    // 배열에 잘 담겼나 확인!
    dispatch(loadWord(word_list));
  };
};
//파이어스토어에 넣기
export const addWordFB = (word) => {
  return async function (dispatch) {
    //추가할 때도 비동기
    const docRef = await addDoc(collection(db, "homework"), word);
    //    이름붙여서                            넣을 위치        넣을정보
    const _word = await getDoc(docRef);
    // 리덕스에 넣기위해
    dispatch(createWord({ id: _word.id, ..._word.data() }));
  };
};
//삭제하기
// export const deleteWordFB = (word_id) => {
//   return async function (dispatch, getState) {
//     if (!word_id) {
//       window.alert("id가 없네요");
//       return;
//     }
//     const docRef = doc(db, "homework", word_id);
//     await deleteDoc(docRef);

//     const _word_list = getState().word.list;
//     // 데이터 다 불러와서
//     const word_index = _word_list.findIndex((doc) => {
//       // 그 id찾아
//       return doc.id === word_id;
//     });
//     dispatch(deleteWordFB(word_index));
//   };
// };

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "homework/LOAD": {
      return { list: action.word_list };
      //case 추가!
    }
    // case "homework/CREATE": {
    //   //위에서 만든 액션 넣어줌
    //   const new_word_list = [...state.list, action.word];
    //   //변경된 데이터 만들어줌, 같은형식으로 [원래 있던 값들, 액션을 통해 새로 들어오는 값]
    //   return { list: new_word_list };
    //   //새로 만들어진 state리턴!
    // }

    default:
      return state;
  }
}
