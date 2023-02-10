import { PageItem, PageItemProps } from "react-bootstrap";
import { ForwardedRef, forwardRef } from "react";

// 버튼들이 reference 를 전달하지 않도록 만들어져 있어서, 일단 추가한다.
// react-bootstrap 버전이 변경되면, 그때 다시 처리하도록
function createButton(name: string, defaultValue: string, label = name) {
  const Button = forwardRef((props: PageItemProps, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <PageItem {...props} ref={ref}>
        <span aria-hidden>{defaultValue}</span>
        <span className="visually-hidden">{label}</span>
      </PageItem>
    );
  });

  Button.displayName = name;
  return Button;
}

export const PaginationFirst = createButton("PaginationFirst", "«", "First");
export const PaginationPrev = createButton("PaginationPrev", "‹", "Previous");
export const PaginationEllipsis = createButton("PaginationEllipsis", "…", "More");
export const PaginationNext = createButton("PaginationNext", "›", "Next");
export const PaginationLast = createButton("PaginationLast", "»", "Last");
