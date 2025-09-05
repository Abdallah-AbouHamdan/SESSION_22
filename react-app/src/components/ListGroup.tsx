import type { MouseEvent } from "react";
function ListGroup(){
    let items = ['new-york','san-francisco','tokyo','london','paris']
    const handleClick = (event : MouseEvent)=>console.log(event);
return <>
    <h1>list:</h1>
    {items.length === 0 && <p>No  items founded</p> }
    <ul className="list-group">
        {items.map(((item)=>(<li className="list-group-item" key= {item} onClick={handleClick}>{item}</li>)))}
    </ul>
    </>
}
export default ListGroup 