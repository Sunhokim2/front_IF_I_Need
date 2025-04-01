function Footer({list}) {
    return (
        <footer>
            {list.map((v,i)=>{
                return(
                    <h5 key={i}>
                        {v}
                    </h5>
                )
            })}
            
        </footer>
    )
}

export default Footer;