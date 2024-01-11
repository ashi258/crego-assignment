import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from './Navbar/navbar'

const ExpressionEngineUI = () => {
  const [rules, setRules] = useState([
    {
      key: 'age',
      output: {
        value: undefined,
        operator: '',
        score: undefined,
      },
    },
  ]);

  const [combinator, setCombinator] = useState('and');

  const handleAddRule = () => {
    const newRule = {
      key: '',
      output: {
        value: undefined,
        operator: '',
        score: undefined,
      },
    };

    setRules([...rules, newRule]);
  };
 


  const handleDeleteRule = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  const handleRuleChange = (index, field, value) => {
    const updatedRules = [...rules];
    updatedRules[index][field] = value;
    setRules(updatedRules);
  };

  return (
    <div>
      <Navbar />
    <Container style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' , backgroundColor: "#F5F5DC"}}>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="connectorType">
              <Form.Label>Connector Type</Form.Label>
              <Form.Control
                as="select"
                value={combinator}
                onChange={(e) => setCombinator(e.target.value)}
              >
                <option value="and">AND</option>
                <option value="or">OR</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {rules.map((rule, index) => (
          <Row key={index} className="mb-3">
            <Col>
              <Form.Group controlId={`ruleType${index}`}>
                <Form.Label>Rule Type</Form.Label>
                <Form.Control
                  as="select"
                  value={rule.key}
                  onChange={(e) => handleRuleChange(index, 'key', e.target.value)}
                >
                  <option value="age">Age</option>
                  <option value="credit_score">Credit Score</option>
                  <option value="account_balance">Account Balance</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId={`operator${index}`}>
                <Form.Label>Operator</Form.Label>
                <Form.Control
                  as="select"
                  value={rule.output.operator}
                  onChange={(e) =>
                    handleRuleChange(index, 'output.operator', e.target.value)
                  }
                >
                  <option value=">">{'>'}</option>
                  <option value="<">{'<'}</option>
                  <option value=">=">{'>='}</option>
                  <option value="<=">{'<='}</option>
                  <option value="=">{'='}</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId={`value${index}`}>
                <Form.Label>Value</Form.Label>
                <Form.Control
                  type="number"
                  value={rule.output.value}
                  onChange={(e) =>
                    handleRuleChange(index, 'output.value', parseFloat(e.target.value))
                  }
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId={`score${index}`}>
                <Form.Label>Score</Form.Label>
                <Form.Control
                  type="number"
                  value={rule.output.score}
                  onChange={(e) =>
                    handleRuleChange(index, 'output.score', parseInt(e.target.value))
                  }
                />
              </Form.Group>
            </Col>

            <Col>
              <Button style={{backgroundColor: "#1f5156", color : "#fff"}} variant="danger" onClick={() => handleDeleteRule(index)}>
                Delete
              </Button>
            </Col>
          </Row>
        ))}

        <Button style={{backgroundColor: "#1f5156", color : "#fff"}} variant="primary" onClick={handleAddRule}>
          Add Rule
        </Button>
      </Form>
    </Container>
    </div>
  );
};

export default ExpressionEngineUI;
