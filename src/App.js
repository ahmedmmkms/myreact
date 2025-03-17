// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ProfileForm from "./Components/ProfileForm/ProfileForm";
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout";

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
        
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Notification>
          <Routes>
            {/* Define individual Route components for different pages */}
           <Route path="/" element={<LandingPage/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/reviews" element={<ReviewForm/>}/>
                <Route path="/reports" element={<ReportsLayout/>}/>
                <Route path="/profile" element={<ProfileForm/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/search/doctors" element={<BookingConsultation />} />
          </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;