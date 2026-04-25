import "./App.css";

import Title from "./components/Title";
import Header from "./components/Header";
import TextDiv from "./components/TextDiv";
import Button from "./components/Button";
 

 
 function App() {
  const mainStyle = {
    backgroundColor: "#404eed",
    minHeight: "200px",
    position: "relative",
    overflow: "hidden"
  };



return (
    <div style={mainStyle}>
      <Header />
      <main style={{ padding: "50px 5%", color: "white", maxWidth: "600px" }}>
        <Title />
        <TextDiv />
        <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
          <Button text="Download for Mac" variant="light" />
          <Button text="Open Discord in your browser" variant="dark" />
        </div>
      </main>

      <img 
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png"
        alt="background" 
        style={{ position: "horizontale", bottom: 0, right: "0", width: "800px" }} 
      />
    </div>
  );
}
export default App;

 
