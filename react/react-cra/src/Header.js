import { useState } from "react";
import styles from './App.module.css';


// H는 반드시 대문자 -> 왜 Why? 첫글자는 반드시 대문자다.
function Header(props) {
    console.log(props);
    // const state = useState();
    // const 현재저장값 = state[0];
    // const 현재값변경하는함수 = state[1];
    // state[1](1,2);

    // Camel Case : 낙타등표기법
    const [count, setCount] = useState(0);
    console.log('Header 생성');
    let count2 = 0;

    return (
        <header>
            <div className={styles.box}>

                <button onClick={() => {
                    count2++;
                    setCount(count + 1);
                }}>
                    {count2}증가{count}
                </button>
                <p>렌더링을 새로하면서 count2는 다시 0으로 돌아간다.</p>
            </div>

            <h1>{props.title}</h1>
            <div>
                {props.desc}
            </div>

        </header>
    )
}

export default Header;