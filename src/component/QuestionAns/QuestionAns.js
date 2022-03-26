import React from "react";
import { Card } from "react-bootstrap";

const QuestionAns = ({ description, title }) => {
  return (
    <div className="col-md-6 text-center">
      <Card className="my-1 card">
        <Card.Body>
          <h3>{title}</h3>
          <p>{description}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuestionAns;
