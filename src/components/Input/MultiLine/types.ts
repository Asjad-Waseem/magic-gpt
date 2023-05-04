export interface MultilineTextFieldI {
  fieldWidth: number | string;
  fieldType: string;
  fieldValue: string | number;
  fieldPlaceholder?: string;
  fieldLabel?: string;
  fieldError?: boolean;
  fieldHelperText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputFieldProps?: any;
  rows: number;
  defaultValue?: string;
}
