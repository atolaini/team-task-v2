export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  ref: React.ForwardedRef<HTMLInputElement>;
  className?: string;
}

export interface FormControlProps {
  children: React.ReactNode;
  label: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface UserProps {
  firstName: string;
  lastName: string;
  name: string;
  isFed: boolean;
  clerkId: string;
}
