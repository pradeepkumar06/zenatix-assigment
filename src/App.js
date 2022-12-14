import './App.css';
import { useEffect, useState } from 'react';
import {API_KEY} from "./utils/api";
import { Card } from './components/Card';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("debate");

  const formHandler = (e) => {
      e.preventDefault();
      const term = Object.fromEntries(new FormData(e.target));
      if(term.search){
        setSearch(term.search);
      }
      e.target.reset();
  } 


  useEffect(()=>{
    (async()=>{
      setLoading(true);
       try {
        const res = await fetch(`https://content.guardianapis.com/search?page=2&q=${search}&api-key=${API_KEY}`);
      
        const json = await res.json();
        
        setData(json.response.results);

       } catch (error) {
          console.log(error)
       } finally {
        setLoading(false)
       }
      

    })()
  },[search])

  
  
  
  
  return (
    <div className="App">
         <div className='search-wrapper'>
          <form onSubmit={formHandler}>
           <input type="text" name="search" placeholder='environment, politics, debate, nature...' />
           <button className='btn btn-primary'>SEARCH</button>
          </form>
          
          </div>
         <div className='container'>
             <div className='row'>
                   {loading ? <h5>Loading....</h5> : data?.map(({id, pillarName, sectionName
,  webTitle})=>{
                     return <div key={id}  className='col-md-3'>
                         <Card title={sectionName} des={webTitle}/>
                     </div>
                   })}
             </div>
         </div>
    </div>
  );
}

export default App;
