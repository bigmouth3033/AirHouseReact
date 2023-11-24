import styled from "styled-components";
import DialogBox from "./DialogBox";
import Pusher from 'pusher-js'
import { UserQuery } from "api/userApi";



const Box = styled.div`

`
function SideBar(){
    const userQuery = UserQuery();
    console.log(userQuery.data);
    
    var pusher = new Pusher('014b8eb7bfaf79153ac0', {
        cluster: 'ap1'
      });
  
      var channel = pusher.subscribe('my-channel');
      channel.bind('my-event', function(data) {
        alert(JSON.stringify(data));
      });


    return(
        <Box>
            <div>
            <input/>
            </div>
            <DialogBox/>
            <DialogBox/>
        
        </Box>
    )
}
export default SideBar;