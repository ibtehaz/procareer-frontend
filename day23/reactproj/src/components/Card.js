import data from '../data.json';

const Card = (props) => {
    return (
     
        <div className="card text-center">
        <div className="card__info">
           {data.map((val) => {
                return (
                    

                    
                     <div className="card" key={val.id}>
                         <div class="card-body">
                          <h1 className="card-title">{val.title}</h1>
                          <img src={val.imgsrc} className="img-fluid"  />
                            <p className="card-text">{val.desc}</p>
                          <br />
                          <br />
                        <button className='btn btn-danger'>Watch Now</button>
                        </div>
                    
                     </div>
                );
           }
              )}

   
            
           
        </div>
        </div>
   
    );
    }
export default Card;