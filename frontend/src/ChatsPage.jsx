import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {

    return(
      <div style={{ height:'100vh'}}>
        <PrettyChatWindow
            projectId='463c4204-7437-4787-bce1-7fb9d0cb7389'
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
        />
      </div>
    )

}

export default ChatsPage
