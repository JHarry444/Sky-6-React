import trainerData from './trainers.json';

const Trainer = () => {
    return ( <>
        <p>Name: {trainerData.name}</p>
        <p>Age: {trainerData.age}</p>
        <p>Job: {trainerData.job}</p>
    </> );
}
 
export default Trainer;