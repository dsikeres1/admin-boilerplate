import { Form } from "react-bootstrap";
import { isNil } from "lodash";

export function SelectView<T>(props: {
  value: T;
  values: [T, string][];
  getStringValue?: (value: T) => string;
  onChange: (value: T) => void;
  readonly?: boolean;
}) {
  const getStringValue = props.getStringValue ?? stringify;
  return (
    <Form.Select
      value={getStringValue(props.value)}
      onChange={(event) => {
        for (const [value, _] of props.values) {
          if (getStringValue(value) == event.target.value) {
            props.onChange(value);
            return;
          }
        }
      }}
      disabled={props.readonly ?? false}
    >
      {props.values.map(([value, label], index) => {
        return (
          <option key={index} value={getStringValue(value)}>
            {label}
          </option>
        );
      })}
    </Form.Select>
  );
}

function stringify(value: any): string {
  if (isNil(value)) {
    return "";
  }

  return value.toString();
}
