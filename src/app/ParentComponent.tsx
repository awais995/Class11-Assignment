import React from 'react';
import ChildComponent from './ChildComponent'

const ParentComponet = () => {
        const firstName:string = "Muhammad";
        const lastName:string = "Awais";
        const age:number = 27;


    return(
        <div className="flex flex-col justify-center items-center h-screen bg-blue-200">
            <div className="text-center bg-blue-500 h-32 flex flex-col justify-center w-56 text-white">

            <h1 >Parent Component</h1>
            </div>
            <ChildComponent firstName={firstName} lastName={lastName} age={age} />
        </div>
    )
}

export default ParentComponet;