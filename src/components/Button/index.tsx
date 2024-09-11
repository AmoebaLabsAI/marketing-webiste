const Button = ({ children, variant = "primary", ...props }) => {
  const baseStyle = "px-6 py-3 rounded-md font-semibold transition-colors duration-300";
  const variants = {
    primary: "bg-[#ff6b9f] text-white hover:bg-[#ff8fb3]",
    secondary: "bg-[#00e5ff] text-[#0a1e3c] hover:bg-[#33eaff]",
    outline: "border-2 border-[#ff6b9f] text-[#ff6b9f] hover:bg-[#ff6b9f] hover:text-white",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};