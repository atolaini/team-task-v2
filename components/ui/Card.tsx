import { CardProps } from '@/lib/interfaces';

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`${className} p-4 bg-slate-200/80 rounded-xl h-auto`}>
      {children}
    </div>
  );
};

export default Card;
