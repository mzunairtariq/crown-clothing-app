import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="cta" href="#">
          <svg
            alt="Crown Clothing Home"
            width="50"
            height="39"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#808282"
                d="M3 14l22 12.5L47 14l-6.145 25H9.085z"
              ></path>
              <path
                fill-opacity=".263"
                fill="#101A1A"
                d="M25 8l15 31H10z"
              ></path>
              <circle fill="#5E6363" cx="2" cy="9" r="2"></circle>
              <circle fill="#5E6363" cx="25" cy="2" r="2"></circle>
              <circle fill="#5E6363" cx="48" cy="9" r="2"></circle>
            </g>
          </svg>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
          </ul>
        </nav>
      </header>
      <manin className="main-body">
        <div className="hats-container cg-container">
          <div>
            <p>Hats</p>
            <p>Shop now</p>
          </div>
        </div>
        <div className="jackets-container cg-container">
          <div>
            <p>Jackets</p>
            <p>Shop now</p>
          </div>
        </div>

        <div className="sneakers-container cg-container">
          <div>
            <p>Sneakers</p>
            <p>Shop now</p>
          </div>
        </div>
        <div>
          <div>
            <p>Hats</p>
            <p>Shop now</p>
          </div>
        </div>
        <div>
          <div>
            <p>Hats</p>
            <p>Shop now</p>
          </div>
        </div>
      </manin>
    </div>
  );
}

export default App;
