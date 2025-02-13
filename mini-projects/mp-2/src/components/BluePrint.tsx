import {Character} from '../interfaces/Character.ts'
export default function BluePrint({data}:{data:Character}){
    return(
    <div key = {data.id}>
        <h1>{data.name}</h1>
        <img src={} alt={}/>
        <p> Character Status</p>
    </div>
    )
}