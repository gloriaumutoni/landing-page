import Featuredata from './data'
import { nanoid } from 'nanoid'


const Feature = () => {
    const [data,setData]=useState([])
    setData(Featuredata)
    let id=nanoid()
    let features=data.map(feature=>{<Featuredata key={id}/>})

    return ( 
        <div>
        <h1 className="text-center text-4xl font-bold mt-6">FEATURES</h1>
        {/* {features} */}
        </div>
     );
}
 
export default Feature;