interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, type, onClick }: ButtonProps) => {
  return (
    <button
      className='btn'
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
