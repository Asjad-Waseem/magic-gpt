export interface InputFieldProps {
  fieldWidth: string | number;
  fieldType: string;
  fieldValue: string | number;
  fieldDefaultValue?: string | number;
  fieldPlaceholder?: string;
  fieldError?: boolean;
  fieldLabel?: string;
  fieldHelperText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputFieldProps?: any;
}
