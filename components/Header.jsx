function Header() {
  const headerStyle = {
    backgroundImage: `url("https://votre-lien-image.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '30px',
    minHeight: '600px',
    color: 'white'
  };

  return (
    <header style={headerStyle}>
      <img src="/discord-logo-white.png" alt="logo" style={{ height: "30px" }} />
      <div style={{ color: "white", fontSize: "30px" }}>☰</div>
    </header>
  );
}
export default Header;