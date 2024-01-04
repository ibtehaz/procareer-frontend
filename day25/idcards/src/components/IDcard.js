const IDcard = ({name, state, age}) => {
    return (
        <div className="card w-25 float-start bg-warning mx-1 my-1">
            <div className="card-body">
                <h4 className="card-title text-danger">{name}</h4>
                <p className="card-text">State: {state} - Age {age} </p>
            </div>
        </div>
        
    )
}

export default IDcard;