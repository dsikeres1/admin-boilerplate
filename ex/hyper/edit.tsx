import { PairView, RowCol } from "../react-bootstrap-ex/layout";
import { ValueField } from "../formx/field";
import { TextFieldView } from "../formx/view/view";
import { Button, FormLabel } from "react-bootstrap";
import { ReactNode } from "react";
import Router, { useRouter } from "next/router";

export function FormView(props: {
  fields: (ValueField<any> | [string, ReactNode])[];
}) {
  return (
    <RowCol>
      <div className="table-responsive mb-3">
        <table className="table table-centered table-nowrap mb-0 frm-table">
          <colgroup>
            <col className="w-25" />
            <col className="w-auto" />
          </colgroup>
          {/* OPT :: hyper 에 2줄로 되어 있어서 이상하게 출력된다. */}
          <tbody style={{ borderTopWidth: 1 }}>
            {props.fields.map((field, index) => {
              const [label, required, node] = normalize(field);
              return (
                <tr key={index}>
                  <th>
                    <FormLabel>
                      {label}{" "}
                      {required && (
                        <i className="mdi mdi-star text-danger align-middle font-10" />
                      )}
                    </FormLabel>
                  </th>
                  <td>{node}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </RowCol>
  );
}

function renderField(field: ValueField<any>) {
  switch (field.type) {
    case undefined:
    case "string": {
      return <TextFieldView field={field} isShowingLabel={false} />;
    }
    case "number": {
      return <TextFieldView field={field} isShowingLabel={false} />;
    }
    default: {
      return `지원하지 않는 타입 : ${field.type}`;
    }
  }
}

function normalize(
  field: ValueField<any> | [string, ReactNode]
): [string, boolean, ReactNode] {
  if (field instanceof ValueField) {
    return [field.name, field.required, renderField(field)];
  }
  return [field[0], false, field[1]];
}

export function EditActionBarView(props: { onClick: () => void }) {
  const router = useRouter();

  return (
    <>
      <PairView
        //left={<ButtonBackToList />}
        right={
          <>
            <ButtonSubmit
              isNew={router.query["pk"] == "new"}
              onClick={props.onClick}
            />
            <ButtonReset />
          </>
        }
      />
    </>
  );
}

// REVIEW :: 박정호 - Left 버튼 필요해서 left 버튼 분기처리
export function EditActionBarTestView(props: {
  onLeftClick: () => void;
  onRightClick: () => void;
  label: string;
  leftButtonColor: string;
}) {
  const router = useRouter();

  return (
    <>
      <PairView
        left={
          <Button
            className={"mb-2"}
            variant={props.leftButtonColor}
            type="button"
            onClick={props.onRightClick}
          >
            {!props.label ?? (
              <>
                <i className="mdi mdi-format-list-bulleted" />{" "}
              </>
            )}
            {props.label ?? "목록"}
          </Button>
        }
        right={
          <>
            <ButtonSubmit
              isNew={router.query["pk"] == "new"}
              onClick={props.onRightClick}
            />
            <ButtonReset />
          </>
        }
      />
    </>
  );
}

export function ButtonBackToList(props: { label?: string }) {
  return (
    <Button
      className={"mb-2"}
      variant="light"
      type="button"
      onClick={() => Router.back()}
    >
      <i className="mdi mdi-format-list-bulleted" /> {props.label ?? "목록"}
    </Button>
  );
}

export function ButtonReset() {
  return (
    <Button
      className={"mb-2"}
      variant="light"
      type="button"
      //onClick={reloadRouter}
      onClick={() => Router.back()}
    >
      <i className="mdi mdi-cancel" /> 취소
    </Button>
  );
}

export function ButtonSubmit(props: { isNew: boolean; onClick?: () => void }) {
  return (
    <Button
      className={"mb-2"}
      variant="danger"
      type="button"
      onClick={props.onClick}
    >
      <i className="mdi mdi-plus-circle-outline" />{" "}
      {props.isNew ? "등록" : "수정"}
    </Button>
  );
}
