import styled from "styled-components";


const Box = styled.div`
& .container{
    display: grid;
    grid-template-columns: 1fr 3fr;
}
`

function Inbox() {
    return (
        <Box>
            <div className="container">
                
            </div>
        </Box>
    )
}
export default Inbox;