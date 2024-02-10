import React, {useState} from "react";


//create your first component
const Form = () => {
    const [task,setTask]=useState("")
    const [list,setList]=useState([])
    // const [map,setMap]=useState([]) !!!!IMPORTANTE MAP

    function addTask(e) {
        setTask(e.target.value)
        }

    function sumbitTask(e) {
       
            if (e.key === "Enter") {
            setList(list.concat(<li>{task}</li>))
            // setMap(list.map((i)=><li>{i}</li>)) !!!!IMPORTANTE MAP
            setTask("")
        }
    };
    
    
    

   

	return (
        <>
		<div className="container">
            <h1 className="mx-auto text-center">Form  </h1>
            <div className="mx-auto text-center ">
                <input className="bg-success p-2" onChange={addTask} value={task} onKeyDown={sumbitTask} ></input>
            </div>
            <div className="mx-auto">
                <ul className="mx-auto ">
                    {list}
                </ul>
            </div>
		</div>
        </>
	);
};

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



