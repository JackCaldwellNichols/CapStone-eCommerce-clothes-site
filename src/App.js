import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component.jsx';
import Shop from './routes/Shop/shop.component.jsx';
import Checkout from './routes/checkout/checkout.component.jsx'




const App = () => {

  return (
  <Routes>
      <Route path='/' element= {<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop/*' element= {<Shop />} />
        <Route path='/auth' element= {<Authentication />} />
        <Route path='/checkout' element= {<Checkout />} />
      </Route>
  </Routes>
   );
 };

export default App;
