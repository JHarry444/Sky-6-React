import Trainer from "./Trainer";
import PropTypes from "prop-types";

function TrainerList(props) {
    const data = props.trainers.filter(trainer => trainer.name.toLowerCase().startsWith(props.search))
        .map(trainer => <Trainer key={trainer.id} id={trainer.id} name={trainer.name} age={trainer.age} job={trainer.job} />);

    if (data.length === 0) return <p>"Nobody here but us chickens"</p>;
    else return <>{data}</>;
}

TrainerList.defaultProps = {
    trainers: []
}

TrainerList.propTypes = {
    search: PropTypes.string,
    trainers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            age: PropTypes.number,
            job: PropTypes.string,
        })
    )
}


export default TrainerList;