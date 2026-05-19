// import { Stack } from "@mui/material";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <Stack direction="row" sx={{ gap: { sm: "122px", xs: "40px" } }} gap="40px" alignItems="center" p="20px">
//       <Link to="/">
//         <img
//           src="/logo3.png"
//           alt=""
//           className="font-bold text-2xl h-[48px] w-[48px] mr-20"
//         />
//       </Link>

//       <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
//         <Link to="/" className="font-bold border-b-2 border-[#D4AF37] text-2xl hover:text-[#D4AF37]">
//           Home
//         </Link>
//         <Link
//           to="/exercise"
//           className="font-bold text-2xl hover:text-[#D4AF37]"
//         >
//           Exercises
//         </Link>
//       </Stack>
//     </Stack>
//   );
// };

// export default NavBar;
import { Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/exercise", label: "Exercises" },
  ];

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        px: { xs: 3, md: 6 },
        py: 2,
        background:
          "linear-gradient(135deg, #000000, #111111, rgba(212,175,55,0.08))",
        borderBottom: "1px solid rgba(212,175,55,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/logo3.png"
          alt="MotionHub Logo"
          className="h-[52px] w-[52px] object-contain"
        />

        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-[#D4AF37]">
          Motion<span className="text-white">Hub</span>
        </h1>
      </Link>

      {/* Navigation */}
      <Stack direction="row" gap={{ xs: 2, md: 5 }} alignItems="center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                relative text-lg md:text-xl font-semibold transition-all duration-300
                ${
                  isActive
                    ? "text-[#D4AF37]"
                    : "text-white hover:text-[#D4AF37]"
                }
              `}
            >
              {item.label}

              {isActive && (
                <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-[#D4AF37]" />
              )}
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default NavBar;