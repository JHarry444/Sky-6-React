import Trainer from "./Trainer";
import trainers from "./trainers.json";
import PropTypes from "prop-types";

function StaticData(props) {

    const data = trainers.filter(trainer => trainer.name.toLowerCase().startsWith(props.search))
        .map(trainer => <Trainer key={trainer.id} name={trainer.name} age={trainer.age} job={trainer.job} />);

    if (data.length === 0) return <p>"Nobody here but us chickens"</p>;
    else return <>{data}</>;
}

StaticData.propTypes = {
    search: PropTypes.string
}


export default StaticData;