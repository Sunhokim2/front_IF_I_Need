const handleClick = (e)=>{
    // 요소 못 외우겠으면 console.dir()찍으면 나온다. 예를들어 style의 dir찍으면 요소들 다나온다.
    e.target.style.backgroundColor = 'beige';
    e.target.style.textDecoration = 'underline';

}

function Footer({ list }) {
    return (
        <footer>
            {list.map((v, i) => {
                return (
                    <h5 key={i} onClick={handleClick}>
                        {v}
                    </h5>
                )
            })}
        </footer>
    )
}

export default Footer;