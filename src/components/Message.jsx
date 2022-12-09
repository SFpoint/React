
export function Message(props) {

console.log("props", props)

    return(
        <>
        <div className="Message">
        <h1>{props.title}</h1>
        <p>{props.value}</p>
        </div>
        </>
    )
}