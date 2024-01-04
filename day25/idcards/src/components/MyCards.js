import data from '../data.json';
import IDcard from './IDcard';

const MyCards = () => {
   const {data: mydata} = data;

    return (
        <div>
            <h4>Cards Here</h4>
            {
            mydata.map((val) => {
                return (
                    <IDcard key={val.id} name={val.name} state={val.des} age={val.age} />
                )
            })}
       </div>
        
    );
};

export default MyCards;