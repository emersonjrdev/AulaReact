const Header = () => {
    const headerStyle = {
      backgroundColor: "grey",
      padding: "20px",
      textAlign: "center",
      borderBottom: "2px solid #000",
    };
  
    const titleStyle = {
      margin: 0,
      fontFamily: "monospace",
      fontSize: "24px",
      color: "white",
    };
  
    return (
      <header style={headerStyle}>
        <h1 style={titleStyle}>First System</h1>
      </header>
    );
  };
  
  export default Header;
  