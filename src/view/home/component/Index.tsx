import style from "../index.module.css";
import * as classNames from "classnames";
import { useState } from "react";

const AppIndex = () => {
  const [arr, setArr] = useState([1]);
  const click = (id: number) => {
    setArr([id]);
  };
  return (
    <div className={style["wrapper"]}>
      <div
        onClick={() => click(1)}
        className={classNames(style["item"], {
          [style["item-active"]]: arr.includes(1),
        })}
      >
        首页
      </div>
      <div
        onClick={() => click(2)}
        className={classNames(style["item"], {
          [style["item-active"]]: arr.includes(2),
        })}
      >
        中心
      </div>
      <div
        onClick={() => click(3)}
        className={classNames(style["item"], {
          [style["item-active"]]: arr.includes(3),
        })}
      >
        个人
      </div>
    </div>
  );
};
export default AppIndex;
