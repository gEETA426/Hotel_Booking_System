import "./Footer.css"; 


const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4" data-bs-theme="dark">
      <div className="container">
        <div className="row">
         <div className="col-lg-4 col-md-12 mb-4">
            
            <div className="mb-3">
              <label htmlFor="language-select" className="form-label">Language</label>
              <select id="language-select" className="form-select">
                <option value="en">English</option>
                <option value="en">Marathi</option>
                <option value="en">Hindi</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
               
              </select>
            </div>

            
            <div className="media">
              <p>Follow us:</p>
              <div>
                <link></link>
              </div>
            </div>

          
            <div className="email-subscription   ">
              <p>Subscribe to our newsletter:</p>
              <form className="d-flex">
                <input type="email" className="form-control me-2" placeholder="Enter your email" />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-0">&copy; 2024 Hotels.com | All rights reserved.</p>
            <p className="mb-0">Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
