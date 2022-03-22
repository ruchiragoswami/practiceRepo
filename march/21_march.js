//Toggle theme- light/dark


export function Nav() {
    const { setTheme } = useTheme();
    return (
      <button
        onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}
      >
        Toggle Mode
      </button>
    );
  }
  