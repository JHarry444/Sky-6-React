import PropTypes from "prop-types";
import { Col, Form, Row } from "react-bootstrap";

function SearchBar(props) {
    return (<Row>
        <Col sm={2}>
            <Form.Label htmlFor="search">
                Search
            </Form.Label>
        </Col>
        <Col>
            <Form.Control type="text" value={props.search} onChange={props.handleChange} />
        </Col>
    </Row>);
}

SearchBar.propTypes = {
    handleChange: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
}

export default SearchBar;