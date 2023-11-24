import styled from "styled-components";
import Content from "./Content/Content";
import SideBar from "./sidebar/Sidebar";

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
                <SideBar />
                <Content />
            </div>
        </Box>
    )
}
export default Inbox;