import data from '../data.json';

const MyCards = () => {
    return (
        <div>
            <h1>My Cards</h1>
            {console.log({...data})}
            {console.log({data})}
        </div>
    );
};

export default MyCards;