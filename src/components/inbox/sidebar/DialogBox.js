import styled from "styled-components";

const Box = styled.div`
    & .container{
        background-color: red;
        width: 100%;
        height: 2em;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        border: solid thin black ;
    }
`
function DialogBox(props){
    return(
        <Box>
            <div className="container">
                <div className="name">Name{props.name}</div>
                {/* <br/> */}
                <div>Message{props.message}</div>
            </div>
        </Box>
    )
}

export default DialogBox;