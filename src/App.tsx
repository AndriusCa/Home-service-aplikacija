import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Navbar Component
const Navbar: React.FC = () => (
  <nav>
    <div className="logo">Logoipsum</div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
    </ul>
    <button>Login / Sign Up</button>
  </nav>
);

// Header Component
const Header: React.FC = () => (
  <header>
    <h1>Find Home Service/Repair Near You</h1>
    <p>Explore Best Home Service & Repair near you</p>
  </header>
);

// SearchBar Component
const SearchBar: React.FC = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search" />
    <button>🔍</button>
  </div>
);

// ServiceIcon Component
interface ServiceIconProps {
  icon: string;
  label: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon, label }) => (
  <div className="service-icon">
    <img src={icon} alt={label} />
    <span>{label}</span>
  </div>
);

// ServiceIcons Component
const ServiceIcons: React.FC = () => (
  <div className="service-icons">
    <ServiceIcon icon="shifting-icon.png" label="Shifting" />
    <ServiceIcon icon="repair-icon.png" label="Repair" />
    <ServiceIcon icon="plumbing-icon.png" label="Plumbing" />
    <ServiceIcon icon="cleaning-icon.png" label="Cleaning" />
    <ServiceIcon icon="painting-icon.png" label="Painting" />
    <ServiceIcon icon="electric-icon.png" label="Electric" />
  </div>
);

// BusinessCard Component
interface BusinessCardProps {
  image: string;
  category: string;
  name: string;
  owner: string;
  address: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  image,
  category,
  name,
  owner,
  address,
}) => (
  <div className="business-card">
    <img src={image} alt={name} />
    <div className="category">{category}</div>
    <h3>{name}</h3>
    <p>{owner}</p>
    <p>{address}</p>
    <button>Book now</button>
  </div>
);

// PopularBusinesses Component
const PopularBusinesses: React.FC = () => (
  <div className="popular-businesses">
    <h2>Popular businesses</h2>
    <div className="business-list">
      <BusinessCard
        image="shifting-business.jpg"
        category="Shifting"
        name="Moki vezi"
        owner="Darius Standys"
        address="Žemaitės g. 21, Klaipėda"
      />
      <BusinessCard
        image="cleaning-business.jpg"
        category="Cleaning"
        name="Isivalyk pats"
        owner="Tadas Gedvilas"
        address="Kauno g. 21, Vilnius"
      />
      <BusinessCard
        image="cleaning-business-2.jpg"
        category="Cleaning"
        name="UAB Valymas"
        owner="Regina Kazlauskienė"
        address="Laisvės g. 21, Klaipėda"
      />
      <BusinessCard
        image="electric-business.jpg"
        category="Electric"
        name="Elektrikas į namus"
        owner="Rokas Andreikėnas"
        address="Maironio g. 11, Vilnius"
      />
    </div>
  </div>
);

// Main App Component
const App: React.FC = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Header />
              <SearchBar />
              <ServiceIcons />
              <PopularBusinesses />
            </main>
          }
        />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/about" element={<div>About Us Page</div>} />
      </Routes>
    </div>
  </Router>
);

export default App;

// testing

// uzduotis nr. 1 use state

// Topbar komponentas: Tai turėtų apimti logotipą ir navigacijos meniu, kuris kol kas gali būti statinis (vėliau bus įtrauktas react-router).
// Paieškos juosta: Centrinė paieškos juosta su mygtuku. Nors interaktyvi paieška dar nebus įgyvendinta, svarbu paruošti input elementą ir paieškos mygtuką.
// Kategorijos kortelė: Paslaugų sekcijoje, kiekviena paslauga (pvz., “Cleaning”, “Repair”) turėtų būti atvaizduojama kaip atskiras komponentas su ikona ir tekstiniu aprašymu.
// Stilius: SCSS modules arba Styled-components
// Responsive design (optional): Naudoti CSS media queries, kad puslapis tinkamai atrodytų įvairaus dydžio įrenginiuose.
// Būsenos valdymas: Nors šioje užduotyje būsenos valdymo galimybių nebus daug, verta paruošti būsimam funkcionalumui su useState. Galima paruošti search inputui.

// uzduotis nr. 2 react router dom

// Topbar komponentas: Įgyvendinti navigaciją react-router-dom pagalba tarp puslapių Home, Services ir About Us. Naudoti Link komponentą
// Login mygtukas: Paspaudus Login/Sign Up mygtuką naviguoti į Login puslapį naudojant useNavigate hooką
// Paslaugų kortelė: Paspaudus ant kortelės naviguoti į /search/:category routą
// Routes: Įgyivendinti naujus maršrutus (routes) tokius kaip: Home, Services, About Us, Login, Register, SearchCategory

// uzduotis nr. 3 custom hooks

// Categories komponentas: Įgyvendinti kategorijų pasirinkimą. Paspaudus ant kitos kategorijos turi pasikeisti ir URL iš /search/cleaning į /search/repair

// Filtravimas: Išfiltruoti tik tas paslaugas kurios įeina į kategoriją

// Save as favorite (optional): Pridėti ant kortelės širdelės arba žymos ikoną, kurią nuspaudus būtų išsaugotą paslauga į localStorage. Galite naudoti useLocalStorage hooksą.

// uzduotis nr 4 useContext

// Login: Sukurti /login route, įgyvendinti savo norimą dizainą ir pridėti inputų validaciją.
// Redirect: Suvedus inputus ir paspaudus Login mygtuką išsaugoti userio informaciją su useContext ir localStorage bei redirectint į pagrindinį / route
// Topbar komponentas: Atnaujinti komponento state kai asmuo yra prisijungęs

// Register (optional): Įgyvendinti /register route ir savo norimą dizainą
