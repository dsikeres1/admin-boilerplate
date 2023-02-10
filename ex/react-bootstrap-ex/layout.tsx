import React, { PropsWithChildren, ReactNode } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import classNames from "classnames";

export function RowStack(
  props: PropsWithChildren<{
    mb?: number;
    md?: boolean | number;
    className?: string;
  }>
) {
  const children = React.Children.toArray(props.children);
  const xl = Math.floor(12 / children.length);
  return (
    <Row>
      {children.map((child, index) => (
        <Col
          key={index}
          xl={xl}
          md={props.md}
          className={classNames(props.className, props.mb && `mb-${props.mb}`)}
        >
          {child}
        </Col>
      ))}
    </Row>
  );
}

RowStack.defaultProps = { mb: 3 };

export function RowCol(props: PropsWithChildren<{ className?: string }>) {
  return (
    <Row className={props.className}>
      <Col xs={12}>{props.children}</Col>
    </Row>
  );
}

export function PairView(props: { left?: ReactNode; right?: ReactNode }) {
  return (
    <Row className="mt-0 justify-content-between">
      <div className="col-auto">{props.left}</div>
      <div className="col-auto">
        <Stack direction="horizontal" gap={2}>
          {props.right}
        </Stack>
      </div>
    </Row>
  );
}
