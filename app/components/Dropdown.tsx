type ComponentProps = React.PropsWithChildren<{}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
export const Dropdown = (props: ComponentProps) => {
  const { children, ...rest } = props;
  return <select {...rest}>{children}</select>;
};
