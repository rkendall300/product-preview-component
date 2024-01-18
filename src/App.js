import './App.css';
import cartIcon from './images/icon-cart.svg';

function App() {
  return (
    <main>
      <div id="backdrop">
        <div id="card">
          <div id="image-container">
            <div id="fm-image"></div>
          </div>
          <div id="info">
            <h3 id="product-type">P E R F U M E</h3>
            <h1 id="title">Gabrielle Essence Eau De Parfum</h1>
            <p id="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div id="prices">
              <p id="adjusted-price">$149.99</p>
              <p id="original-price">$169.99</p>
            </div>
            <button id="addCart">
              <img id="shopping-cart" alt="cart" src={cartIcon}></img>
              <p id="button-text">Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
