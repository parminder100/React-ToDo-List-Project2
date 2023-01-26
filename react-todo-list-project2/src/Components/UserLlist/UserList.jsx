import "../UserLlist/UserList.css";
const UserList = (props) =>{

    return(
        <>
            <ul className="user-item-content">
                {
                    props.userlist.map((userlist, index)=>{
                        return(
                            <>
                                <div className="user-items">
                                    <li style={{textDecoration: userlist.isDone ? "line-through" : ""}} key={userlist.id}>{userlist.name}</li>
                                    <div>
                                        <button className="delete-btn" onClick={props.deleteUser}>delete</button>
                                        <button onClick={()=>props.markTodo(index)}>mark</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default UserList;