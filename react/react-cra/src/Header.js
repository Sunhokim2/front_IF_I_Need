// H는 반드시 대문자 -> 왜 Why? 첫글자는 반드시 대문자다.
function Header(props) {
    console.log(props);

    return (
        <header>
            <h1>{props.title}</h1>
            <div>
                {props.desc}
            </div>

        </header>
    )
}

export default Header;