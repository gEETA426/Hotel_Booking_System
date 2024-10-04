import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HotelNavBar from "./HotelNavBar";
import HomePage from "../homepage/HomePage";
import HotelList from "../hotel/HotelList";
import HotelDetail from "../details/HotelDetail";
import BookingForm from "../booking/BookingForm";
import LoginSignup from "../login/LoginSignup";
import SearchBar from "../homepage/SearchBar";


const HotelRouter=()=>{

    return(
      <BrowserRouter>
      <HotelNavBar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/hotel-list" element={<HotelList />} />
        <Route path="/hotel/:id" element={<HotelDetail />} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>

    )
}
export default HotelRouter;