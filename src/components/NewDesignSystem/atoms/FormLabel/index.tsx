type FormLabelProps = {
  text: string;
  required?: boolean;
};

export function FormLabel({
  text = "default",
  required = true,
}: FormLabelProps) {
  return (
    <label className="text-sm font-medium text-darkText self-start">
      {text + ":"}
      {required && <span className="text-linkBlue">*</span>}
    </label>
  );
}
