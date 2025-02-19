import {Dog} from '../interfaces/Dog.ts'
export default function DogGallery({data}:{data:Dog}){
    return(
    <div key = {data.id}>
        <h1>{data.breed}</h1>
        <img src={data.image} alt="Random Dog"/>
    </div>
    )
}