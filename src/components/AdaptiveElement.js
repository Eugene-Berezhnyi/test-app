import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form'

const AdaptiveElement = ({type, label, value}) => (

    type === "TEXT_INPUT" ? renderTextInput(label, value) : renderSelect(label, value)
)

const renderTextInput = (label, value) => (
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
            {label}
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="text" placeholder={value}/>
        </Col>
    </Form.Group>
)

const renderSelect = (label, value) => (
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
            {label}
        </Form.Label>
        <Col sm={10}>
            <Form.Control
                as="select"
            >
                {value.split('|').map(v => <option value={v}>{v}</option>)}
            </Form.Control>
        </Col>
    </Form.Group>
)

export default AdaptiveElement;