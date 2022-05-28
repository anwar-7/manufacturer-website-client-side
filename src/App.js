import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import UserReview from './Pages/Dashboard/UserReview';
import Portfolio from './Pages/Portfolio/Portfolio';
import MyProfile from './Pages/Dashboard/MyProfile';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className="App max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route
          path="purchase/:toolId"
          element={
            // <RequireAuth>
            <Purchase />
            // </RequireAuth>
          }
        />
        {/* change */}
        <Route path="userReview" element={<UserReview />} />
        <Route path="myprofile" element={<MyProfile />} />

        <Route path="portfolio" element={<Portfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
