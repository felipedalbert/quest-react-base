
const Paragraph = (props) => {
    return <p style={{color: props.color}}>{props.text.toUpperCase()}</p>
}

export default Paragraph