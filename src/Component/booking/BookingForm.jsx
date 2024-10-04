import React, { useState } from 'react';


const BookingForm = () => {

// state for form inputs
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [date,setDate]= useState('');
  const [time,setTime]= useState('');
  const [guests,setGuests]= useState('');
  const [booking,setBooking]= useState('');
  const [submit,setIsSubmitted] =useState('');
  const [age,setage] =useState('');
 

  // event handle to handle from submit event
  const handleSubmit =(event)=>{
    event.preventDefault();
    alert("Your booking form submitted")
    setIsSubmitted(true)
    // for now, just log data
    console.log("Booking Details:",{
      name,
      email,
      date,
      time,
      guests
    
    });
    

   
    // reset form after submission
    setName('');
    setEmail('');
    setDate('');
    setGuests('');
    
  };


  return(
    <div className=' container border border-dark p-3 mt-3 rounded w-50'>
      <h2 className='me-3'> Hotel Booking Form</h2>
      <h2 className='p-3'>Experience Something New Every Moment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          
          <label className='form-label' htmlFor='fn'>Full Name:</label>
          <input className='form-control' type='text' placeholder='full name'required/>

           <label className='form-label' htmlFor='email'>Email:</label>
           <input className='form-control' type='text' placeholder='Email' value={BookingForm.email}
            onChange={e=>({...BookingForm,email:e.target.value})}required/> 



          <label className='form-label' htmlFor='Guests'> No of Guests:</label>
           <input className='form-control' type='number' placeholder='Guests' value={BookingForm.guests}
            onChange={e=>({...BookingForm,guests:e.target.value})}required min={1} max={10}/> 

        <div>
        <label className='form-label' htmlFor='Age'>Age:</label>
           <input className='form-control' type='number' placeholder='Age' value={BookingForm.age}
            onChange={e=>({...BookingForm,age:e.target.value})}required min={18} max={50}/> 

        </div>

          <label className='form-label' htmlFor='date'> Arrival Date:</label>
             <input className='form-control' type='date' placeholder='room type' value={BookingForm.date}
             onChange={e=>({...BookingForm,date:e.target.value})}required/> 

          <label className='form-label' htmlFor='date'> Departure Date:</label>
             <input className='form-control' type='date' placeholder='room type' value={BookingForm.date}
             onChange={e=>({...BookingForm,date:e.target.value})}required/> 



            <label className='form-label' htmlFor='mobile no'>Mobile no:</label>
             <input className='form-control' placeholder='mobile number' value={BookingForm.mobile}
             onChange={e=>({...BookingForm,date:e.target.value})}required/> 

             

          
          <div className="mb-3">

                  <label className="form-label" htmlFor="qu">Room type</label>
              <select className="form-select" id="qu"
                  value={BookingForm.qualification} 
                  onChange={e=>setBooking({...BookingForm,qualification:e.target.value})}>
                  <option>Please Select</option>
                  <option>Standard room</option>
                  <option>Single room</option>
                  <option>Family room</option>
                  <option>Couple room</option>
              </select>
          </div>

                <h3 className='p-4'>Payment Details</h3>


                <div className="mb-3">

        <label className="form-label" htmlFor="qu">Payment Details</label>
       <select className="form-select" id="qu"
     value={BookingForm.qualification} 
      onChange={e=>setBooking({...BookingForm,qualification:e.target.value})}>
       <option>Please Select</option>
        <option>Card</option>
        <option>Cash</option>
        <option>Mobile Payment</option>
        <option>UPI & QR code</option>
        </select>
        </div>


             

    <div className="mb-3">

          <label className="form-label" htmlFor="qu">Cancellation Details</label>
          <select className="form-select" id="qu"
             value={BookingForm.qualification} 
             onChange={e=>setBooking({...BookingForm,qualification:e.target.value})}>
             <option>Please Select</option>
             <option>Better place</option>
             <option>Other reason</option>
             <option>Etc</option>

          </select>
    </div>


            <div className="text-center p-4">
              <button classNam='btn btn-outlight-light p-2' type='submit'>Submit</button>
              <button  className="btn btn-outlight-secondary" type="reset" onClick={()=>setBooking({
                fullname:'',
                Email:'',
                phoneno:'',
                Guests:'',
                roomtype:''

              })}>Reset</button>
            </div>
        </div>
      
      </form>
    </div>
  )
}
    
   

  
          
       
       
export default BookingForm;