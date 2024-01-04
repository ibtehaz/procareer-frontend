import {useNavigate} from 'react-router-dom'

const NavigateExample = () => {
    let navigate = useNavigate()
    let clickHandler = () => {
        console.log("CLICKED")
        navigate('/contact')
    }

    let returnHandler = () => {
        console.log("CLICKED")
        navigate(-1)
    }

    let sendInfoHandler = () => {
        console.log("send info clicked")
        navigate('/trainers', {state:{name:'sp', id: 12}})

    }
    return ( 
        <>
        <h1>Use Navigate Hook</h1>
        <h3>Click below to goto contact page</h3>
        <button onClick={clickHandler}>Goto contact page</button>
        <button onClick={returnHandler}>Go back</button>
        <button onClick={sendInfoHandler}>Send Details</button>
        </>

     );
}
 
export default NavigateExample;