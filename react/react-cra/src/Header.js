import { useEffect, useMemo, useState } from "react";
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

    // ❗딱한 번만 실행할면 useEffect에 대괄호 [] 를 넣음❗
    useEffect(()=>{
        console.log('처음에만 실행');
        return()=>{
            console.log('헤더 소멸❗');
        }
    }, []);
    useEffect(()=>{
        console.log('count변경 감지시실행');
    }, [count]);

    function factorial(c){
        if (c>1){
            return c * factorial(c-1);
        }else{
            return 1;
        }
    }
    const memo = useMemo(()=>{
        console.log('팩토리얼 드가자~~@@@@');
        let result = factorial(count);
        return result;
    }, [count]); // deps 
    


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
                <p>count팩토리얼 : {memo}</p>
            <h1>{props.title}</h1>
            <div onClick={(v)=>{
                setCount(prev=>prev+1)
            }}>
                {props.desc} {count}
            </div>

        </header>
    )
}


export default Header;