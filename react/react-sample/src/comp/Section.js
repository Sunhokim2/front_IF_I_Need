function Section({list}) {
    return (
        <section>
            {list.map((v,i)=>{
                return(
                    <h4 key={i}>
                        {v}
                    </h4>
                )
            })}
        </section>
    )
}

export default Section;