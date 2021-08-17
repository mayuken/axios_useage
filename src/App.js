// axiosはWebAPIを簡単にコールできるライブラリ
import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUSers = () => {
    // .get .postなどリクエストにリクエスト先URLを引数として持ってくることで
    // その後のthen内で取得した値(res)を用いることができる
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data[1].name); // Ervin Howell
      })
      // catchはリクエスト内でエラーが生じた際のアクションを記述する
      // エラー情報はerrに入ってくる
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickUSer1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data[0].name); // Leanne Graham
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickUSers}>users</button>
      <button onClick={onClickUSer1}>id=1のuser</button>
    </div>
  );
}
