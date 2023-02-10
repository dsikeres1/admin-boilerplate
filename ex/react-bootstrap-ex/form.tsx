import { Col, Form, FormLabel, Row } from "react-bootstrap";
import React, {
    ChangeEvent,
    FocusEvent, FocusEventHandler,
    Fragment,
    PropsWithChildren,
} from "react";
import { action } from "mobx";
import { isEmpty, isNil, isNull } from "lodash";
import classNames from "classnames";
import { NullableView } from "../view/nullable";
import { observer } from "mobx-react-lite";
// TODO :: BSSET & Upload 타입 정의후 복구 예정
// import { UploadFileType, UploadViewModel } from "../../src/view/uploadView";
// import { Bsset } from "../../src/api/gen/schema";

export const FormErrors = observer((props: { errors: string[] }) => (
  <>
    {props.errors.map((error, index) => (
      <Form.Control.Feedback key={index} type="invalid">
        {error}
      </Form.Control.Feedback>
    ))}
  </>
));

export function FormView(
  props: PropsWithChildren<{
    label: string;
    required: boolean;
    mb?: null | number;
  }>
) {
  const children = React.Children.toArray(props.children);
  const mb = !isNil(props.mb)
    ? `mb-${props.mb}`
    : isNull(props.mb)
    ? ""
    : "mb-0";
  return (
    <>
      <FormLabel className={mb}>
        {props.label}{" "}
        {props.required && (
          <i className="mdi mdi-star text-danger align-middle font-10" />
        )}
      </FormLabel>
      <Row>
        {children.map((child, index) => (
          <Fragment key={index}>{child}</Fragment>
        ))}
      </Row>
    </>
  );
}

FormView.defaultProps = { required: false };

export function FormGroupView(
  props: PropsWithChildren<{
    label: string;
    required: boolean;
    mb?: null | number;
  }>
) {
  return (
    <Form.Group>
      <FormView label={props.label} required={props.required} mb={props.mb}>
        {props.children}
      </FormView>
    </Form.Group>
  );
}

FormView.defaultProps = { required: false };

export type FormTextViewType = "text" | "password";

export function FormTextView(props: {
  label: string;
  placeholder?: string;
  value: string;
  onFocus?: FocusEventHandler | undefined;
  onChange: (newValue: string) => void;
  onBlur?: (newValue: string) => void;
  wrapAction?: boolean;
  required?: boolean;
  className?: string;
  readonly: boolean;
  disabled: boolean;
  errors: string[];
  type?: FormTextViewType;
  isShowingLabel: boolean;
}) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    props.onChange(e.target.value);
  const onBlur = (e: FocusEvent<HTMLInputElement>) =>
    (props.onBlur ?? props.onChange)(e.target.value.trim());
  return (
    <Form.Group className={props.className}>
      <NullableView condition={props.isShowingLabel}>
        <Form.Label>
          {props.label}{" "}
          {props.required && (
            <i className="mdi mdi-star text-danger align-middle font-10" />
          )}
        </Form.Label>
      </NullableView>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder ?? props.label}
        value={props.value}
        onFocus={props.onFocus}
        onChange={props.wrapAction ? action(onChange) : onChange}
        isInvalid={!isEmpty(props.errors)}
        onBlur={props.wrapAction ? action(onBlur) : onBlur}
        readOnly={props.readonly}
        disabled={props.disabled}
      />
      <FormErrors errors={props.errors} />
    </Form.Group>
  );
}

FormTextView.defaultProps = {
  wrapAction: true,
  required: false,
  readonly: false,
  disabled: false,
  errors: [],
  isShowingLabel: true,
};

export function FormPlainTextView(props: { label: string; value: string }) {
  return (
    <>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control value={props.value} plaintext readOnly />
    </>
  );
}

export function FormTextReadOnlyView(props: {
  //label: string;
  value: string;
  placeholder?: string;
}) {
  return (
    <>
      {/*<Form.Label>{props.label}</Form.Label>*/}
      <Form.Control
        value={props.value}
        readOnly
        placeholder={props.placeholder}
      />
    </>
  );
}

// client 등록 과 수정페이지의 고객사명 readonly 설정을 위한 component 생성
/*export function FormTextReadOnlyOrInputView(props: {
  option: boolean;
  value: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    props.onChange(e.target.value);
  if (props.option) {
    return (
      <>
        <Form.Control
          placeholder={"고객사명을 입력해 주십시오."}
          onChange={action(onChange)}
        />
      </>
    );
  } else {
    return (
      <>
        <Form.Control
          value={props.value}
          readOnly
          placeholder={props.placeholder}
          onChange={action(onChange)}
        />
      </>
    );
  }
}*/

// TODO :: Select 선택후 추가 예정
// export function FormSelectView(props: {
//   label: string;
//   required?: boolean;
//   placeholder?: string;
//   options: [string, string][];
//   value: string;
//   onChange: (value: string) => void;
//   wrapAction?: boolean;
//   errors: string[];
//   hideLabel?: boolean;
// }) {
//   function onChange(raw: string) {
//     const value = props.options
//       .map(([value]) => value)
//       .find((value) => value == raw);
//     props.onChange(value ?? "");
//   }
//
//   const selectView = (
//     <SelectView<string>
//       value={props.value ?? ""}
//       onChange={props.wrapAction ? action(onChange) : onChange}
//       options={[
//         { value: "", label: props.placeholder ?? props.label },
//         ...props.options.map(([value, label]) => ({
//           value,
//           label,
//         })),
//       ]}
//       isInvalid={!isEmpty(props.errors)}
//     />
//   );
//
//   return props.hideLabel ? (
//     selectView
//   ) : (
//     <FormGroupView label={props.label} required={props.required ?? false}>
//       {selectView}
//       <FormErrors errors={props.errors} />
//     </FormGroupView>
//   );
// }

export function FormRadioView(props: {
  label: string;
  required?: boolean;
  placeholder?: string;
  options: [string, string][];
  value: string;
  onChange: (value: string) => void;
  wrapAction?: boolean;
  errors: string[];
  id: string;
  disabled?: boolean;
}) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange(event.target.value);
  return (
    <FormGroupView label={props.label} required={props.required ?? false}>
      {/*  bootstrap form 으로 감싸기 */}
      <Col
        className={classNames("mt-2", { "is-invalid": !isEmpty(props.errors) })}
      >
        {props.options.map(([value, label], index) => {
          return (
            <Form.Check
              key={index}
              type="radio"
              inline
              value={value}
              label={label}
              checked={props.value == value}
              name={`form-radio-view-${props.id}`}
              id={`form-radio-view-${props.id}-${index}`}
              isInvalid={!isEmpty(props.errors)}
              onChange={props.wrapAction ? action(onChange) : onChange}
              disabled={props.disabled ?? false}
            />
          );
        })}
      </Col>
      <FormErrors errors={props.errors} />
    </FormGroupView>
  );
}

export function FormTextAreaView(props: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (newValue: string) => void;
  onBlur?: (newValue: string) => void;
  wrapAction?: boolean;
  required?: boolean;
  className?: string;
  readonly: boolean;
  disabled: boolean;
  errors: string[];
  maxLength?: number;
  rows: number;
}) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    props.onChange(e.target.value);
  const onBlur = (e: FocusEvent<HTMLInputElement>) =>
    (props.onBlur ?? props.onChange)(e.target.value.trim());
  return (
    <Form.Group className={props.className}>
      {/*<Form.Label>
        {props.label}{" "}
        {props.required && (
          <i className="mdi mdi-star text-danger align-middle font-10" />
        )}
      </Form.Label>*/}
      <Form.Control
        as="textarea"
        placeholder={props.placeholder ?? props.label}
        value={props.value}
        onChange={props.wrapAction ? action(onChange) : onChange}
        isInvalid={!isEmpty(props.errors)}
        onBlur={props.wrapAction ? action(onBlur) : onBlur}
        readOnly={props.readonly}
        disabled={props.disabled}
        maxLength={props.maxLength}
        rows={props.rows}
      />
      <FormErrors errors={props.errors} />
    </Form.Group>
  );
}

FormTextAreaView.defaultProps = {
  label: "",
  wrapAction: true,
  required: false,
  readonly: false,
  disabled: false,
  errors: [],
};

// TODO :: BSSET & Upload 타입 정의후 복구 예정
// export const FormFileView = observer(
//   (props: {
//     label?: string;
//     placeholder?: string;
//     accept?: string;
//     wrapAction?: boolean;
//     required?: boolean;
//     className?: string;
//     readonly?: boolean;
//     disabled?: boolean;
//     errors?: string[];
//     isShowingLabel?: boolean;
//     model: FormFileUploadModel;
//   }) => {
//     const uploadViewModel = useModel(UploadViewModel);
//     const inputRef = useRef<HTMLInputElement>(null);
//     const accepts = props.accept?.split(",");
//     if (!isEmpty(accepts) && accepts !== undefined) {
//       accepts.forEach((accept) => {
//         uploadViewModel.fileTypes.push(accept.trim() as UploadFileType);
//       });
//     }
//     useEffect(() => {
//       uploadViewModel.onAdd = (bsset) => props.model.onAdd(bsset);
//     }, [uploadViewModel, props.model]);
//
//     const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
//       uploadViewModel.onChange(e.target as HTMLInputElement);
//
//     return (
//       <Form.Group className={props.className}>
//         {props.isShowingLabel !== false && (
//           <Form.Label>
//             {props.label}{" "}
//             {props.required && (
//               <i className="mdi mdi-star text-danger align-middle font-10" />
//             )}
//           </Form.Label>
//         )}
//         <InputGroup>
//           <Form.Control
//             ref={inputRef}
//             style={{ display: "none" }}
//             type="file"
//             onChange={props.wrapAction ? action(onChange) : onChange}
//             isInvalid={!isEmpty(props.errors)}
//             readOnly={props.readonly}
//             disabled={props.disabled}
//           />
//           <Form.Control
//             style={{ cursor: "pointer" }}
//             placeholder={props.placeholder ?? props.label}
//             value={props.model.bsset?.name ?? ""}
//             readOnly={true}
//             onClick={() => inputRef?.current?.click()}
//           />
//           <div>
//             <Button
//               variant="light"
//               className="shadow-none"
//               disabled={isNil(props.model.bsset)}
//               onClick={() => props.model.onClear()}
//             >
//               <i className="mdi mdi-window-close" />
//             </Button>
//           </div>
//         </InputGroup>
//         <FormErrors errors={props.errors ?? []} />
//       </Form.Group>
//     );
//   }
// );
//
// export class FormFileUploadModel {
//   bsset: Bsset | null = null;
//
//   constructor() {
//     makeAutoObservable(this);
//   }
//
//   onAdd(bsset: Bsset) {
//     this.bsset = bsset;
//   }
//
//   onClear() {
//     this.bsset = null;
//   }
// }
