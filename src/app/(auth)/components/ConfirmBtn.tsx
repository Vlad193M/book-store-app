interface ConfirmBtnProps {
  children: String;
  className?: string;
}

export default function ConfirmBtn({
  children,
  className = '',
}: ConfirmBtnProps) {
  return (
    <button
      className={`w-full px-6 py-4 bg-[#282828] text-xl font-bold text-white text-center rounded-[64px] ${className}`}
    >
      {children}
    </button>
  );
}
