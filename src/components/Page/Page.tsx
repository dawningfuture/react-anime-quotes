import React from "react";
import Container from "react-bootstrap/Container";
import "./Page.css";

export const Page: React.FC = (props) => {
  return <Container className="page">{props.children}</Container>;
};
