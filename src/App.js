import './App.css';
import React from 'react'
import {Col, Container, Form, Row} from "react-bootstrap";
import AdaptiveElement from "./components/AdaptiveElement";

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            elements: [[{type: "TEXT_INPUT", label: "SomeLabel", value: "SomeValue"}, {
                type: "SELECT",
                label: "SomeLabel2",
                value: "Some1|Some2|Some3"
            }, {type: "TEXT_INPUT", label: "SomeLabel", value: "SomeValue"}, {
                type: "SELECT",
                label: "SomeLabel2",
                value: "Some1|Some2|Some3"
            }], [{type: "TEXT_INPUT", label: "SomeLabel", value: "SomeValue"}, {
                type: "TEXT_INPUT",
                label: "SomeLabel",
                value: "SomeValue"
            }], [{type: "TEXT_INPUT", label: "SomeLabel", value: "SomeValue"}, {
                type: "TEXT_INPUT",
                label: "SomeLabel",
                value: "SomeValue"
            }]],
        }
    }

    setProvidedInput = (value) => {
        try {
            console.log(value)
            const parsed = value.split("\n").map(line => line.split(";"))
            console.log("parsed", parsed);
            const maxLine = Math.max.apply(null, parsed.map(e => e[0]))
            console.log("maxLine", maxLine);
            const elements = [];
            for (let i = 0; i < maxLine; i++) {
                elements.push([])
            }

            for (let i = 0; i < parsed.length; i++) {
                const line = parsed[i];
                elements[line[0] - 1][line[1] - 1] = {type: line[2], label: line[3], value: line[4]}
                console.log("elments iteration", i, elements);
            }

            console.log("elments", elements);

            this.setState(state => (
                {
                    elements
                }
            ));
        } catch (e) {
            console.log("Can't parse")
        }
    }

    render() {
        const showRequestedElements = () => this.state.elements.map(row =>
            <Row>{
                row.map(el => <Col><AdaptiveElement type={el.type} label={el.label} value={el.value}/></Col>)}
            </Row>)


        return (
            <div className="App">
                <header className="App-header">
                </header>
                <body>
                <Container>
                    <Row>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Please enter your UI</Form.Label>
                                <Form.Control as="textarea" rows={10}
                                              onChange={e => {
                                                  console.log("e.target.value", e.target.value);
                                                  this.setProvidedInput(e.target.value);
                                              }}
                                />
                            </Form.Group>
                        </Form>
                    </Row>
                    <Form>
                        {showRequestedElements()}
                    </Form>
                </Container>
                </body>
            </div>
        );
    }
}

export default App;

