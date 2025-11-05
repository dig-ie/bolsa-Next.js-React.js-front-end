type ButtonType = 'submit' | 'button' | 'reset';

export interface SubmitButtonProps {
    title: string;
    type?: ButtonType; 
    onClick?: () => void; 
    className?: string;
} 