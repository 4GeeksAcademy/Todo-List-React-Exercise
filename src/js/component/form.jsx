import React, { useState } from "react";
import astronauta from "../../img/astronauta.jpg";

const Form = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);



    function submitTask(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            setList(list.concat(task));
            setTask("");
          }
    }
    

    return (
        <>
            <form>
                <div className="mb-3" style={{background: `url(${astronauta})`}}>
                    <label htmlFor="exampleInputEmail1" className="form-label">To Do</label>
                    <input type="text" className="form-control" onChange={(e) => setTask(e.target.value)} value={task} onKeyDown={submitTask} />
                </div>
                <ul>
                    {list.map((item, index) => (<li key={index}>{item}<i className="fa fa-trash" aria-hidden="true" onClick={() => setList(list.filter((item, myIndex) => index !== myIndex))}></i></li>))}
                </ul>
                <div>{list.length} items left</div>
            </form>
        </>
    );
}



export default Form;



































// import React, { useState } from "react";

// const Form = () => {
//     const [task, setTask] = useState("");
//     const [list, setList] = useState([]);

//     function addTask(e) {
//         setTask(e.target.value);
//     }

//     function submitTask(e) {
//         if (e.key === "Enter") {
//             e.preventDefault();
//             setList(list.concat([task]));
//             setTask("");
//           }
//     }
    
//     return (
//         <>
//             <form>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">To Do</label>
//                     <input type="text" className="form-control" onChange={addTask} value={task} onKeyDown={submitTask} />
//                 </div>
//                 <ul>
//                     {list.map((item, index) => (<li key={index}>{item}</li>))}
//                 </ul>
//             </form>
//         </>
//     );
// };

// export default Form;



