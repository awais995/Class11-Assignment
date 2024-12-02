
const ChildComponent = ({firstName, lastName, age}:any) => {

    return(

        <div className="text-center bg-blue-500 h-32 flex flex-col justify-center w-56 text-white">
            <div className="text-center">
                <h2> ChildComponent</h2>
            </div>

            <div className="text-center">
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Age: {age}</p>
            </div>
        </div>
    )
}

export default ChildComponent;