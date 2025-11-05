export interface CheckBoxProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    id: string;
};