import { PropsWithChildren } from "react";
import { RowCol } from "../react-bootstrap-ex/layout";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";
import { SelectView } from "../react-bootstrap-ex/select";
import { Urls } from "../../src/url/url.g";
import Link from "next/link";

export function ActionBarView(props: PropsWithChildren) {
  return (
    <>
      <RowCol className="mb-3">
        <Stack direction="horizontal" gap={2}>
          {props.children}
        </Stack>
      </RowCol>
    </>
  );
}

export function SearchView(props: {
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
  placeholder?: string;
  searchType: string | null;
}) {
  return (
    <InputGroup>
      <Form.Control
        placeholder={props.placeholder ?? "검색조건을 입력해주세요."}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        onBlur={(event) => props.onChange(event.target.value.trim())}
        onKeyDown={(event) => {
          if (event.key == "Enter") {
            props.onClick();
          }
        }}
      />
      <Button onClick={props.onClick}>
        <i className="mdi mdi-magnify" />
      </Button>
    </InputGroup>
  );
}
// 고객사 등록버튼
export function CreateView() {
  return (
    <InputGroup>
      <Link
        href={Urls.client.edit["[pk]"].url({ pk: "new" })}
        style={{ marginLeft: "auto" }}
      >
        <Button>고객사 등록</Button>
      </Link>
    </InputGroup>
  );
}

// 초기화 버튼
export function ResetView() {
  return (
    <InputGroup>
      <Link href={Urls.client.list.url({ page: 1, search: "" })}>
        <Button>초기화</Button>
      </Link>
    </InputGroup>
  );
}

export function SelectPowerView(props: {
  enable: boolean | null;
  onChange: (enable: boolean | null) => void;
  readonly?: boolean;
}) {
  return (
    <SelectView<boolean | null>
      value={props.enable}
      values={[[null, "상태"], ...powerLabels]}
      onChange={props.onChange}
      readonly={props.readonly}
    />
  );
}

const powerLabels: [boolean, string][] = [true, false].map((value) => [
  value,
  toPowerLabel(value),
]);

export function toPowerLabel(power: boolean): string {
  switch (power) {
    case true:
      return "정상";
    case false:
      return "중지";
  }
}
