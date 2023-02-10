import { Variant } from "react-bootstrap/types";
import { Badge } from "react-bootstrap";

export function BadgeView(props: { type: Variant; label: string }) {
  return (
    <Badge bg="" className={`badge-${props.type}-lighten`}>
      {props.label}
    </Badge>
  );
}

export function BadgePowerView(props: { power: boolean }) {
  return (
    <BadgeView
      label={props.power ? "사용중" : "중지"}
      type={props.power ? "success" : "warning"}
    />
  );
}
