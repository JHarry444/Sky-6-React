import Trainer from "./Trainer";
import trainers from "./trainers.json";

function StaticData() {

    const data = trainers.map(trainer => <Trainer key={trainer.id} name={trainer.name} age={trainer.age} job={trainer.job}/>);

    // for (let i = 0; i < trainers.length; i++) {
    //     const trainer = trainers[i];
    //     debugger;
    //     data[i] = <Trainer name={trainer.name} age={trainer.age} job={trainer.job}/>;
    // }


    if (data.length === 0) return <p>"Nobody here but us chickens"</p>;
    else return <>{data}</>;
    // return ( 
    //     <>
    //     {
    //         data.length !== 0 ? data : "Nobody here but us chickens"
    //     }
    //     </>
    //  );
}

export default StaticData;