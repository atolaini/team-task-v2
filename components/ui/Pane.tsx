const Pane = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-[calc(100vh-1.7rem)] max-w[1200px] border-white/40 rounded-lg border-2 bg-white/40 p-3'>
      {children}
    </div>
  );
};

export default Pane;
