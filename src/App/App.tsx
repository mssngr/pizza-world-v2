import './app.css'

import EditMe from '../EditMe'

function App() {
  return (
    <div id="app">
      <Header />
      <EditMe />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img
        id="pizzaWorldGIF"
        src="https://cdn-images-1.medium.com/max/1600/1*ugOYJijzYBEw3a6yIvZ2cg.gif"
      />
      <h1 id="pizzaWorldTitle">Pizza World</h1>
    </div>
  );
}

function Footer() {
  return <p className="footer">© Pizzas Incorporated</p>;
}

export default App
