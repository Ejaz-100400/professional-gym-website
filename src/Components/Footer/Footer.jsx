export default function Footer(){
    return(
        <div class="footer pt-5">
        <div class="container">
          <div class="row">
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                <div class="footer_section">
                <h4>Links</h4>
               <ul className="list-unstyled">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Cart</a></li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
              <div class="footer_section">
                <h4>Products</h4>
               <ul className="list-unstyled">
                  <li><a href="#">Gym Equipments</a></li>
                  <li><a href="#">Protein & Carbs</a></li>
                  <li><a href="#"></a>Delivery</li>
                  <li><a href="#">Parcel</a></li>
                  <li><a href="#">Vite</a></li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
              <div class="footer_section">
                <h4>Workout Sessions</h4>
               <ul className="list-unstyled">
                  <li><a href="#">Bootstrap 5</a></li>
                  <li><a href="#">Bootstrap 4</a></li>
                  <li><a href="#">Icons</a></li>
                  <li><a href="#">RFS</a></li>
                  <li><a href="#">npm starter</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-12 col-lg-3 mb-5">
              <div class="row">
                <div
                  class="col-sm-12 col-md-6 col-lg-12 footer_section footer_section_contact"
                >
                  <h4>Contact Us</h4>
                  <div class="search">
                    <form action="#" class="subscribe">
                      <input
                        type="email"
                        class="contact_input"
                        placeholder="E-mail address"
                      />
                      <button type="submit" class="submit_button">
                        <i class="fa fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-12 social_media">
                  <h4>Follow Up</h4>
                 <ul className="list-unstyled">
                    <li class="facebook">
                      <a href=""><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="twitter">
                      <a href=""><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="google">
                      <a href=""><i class="fab fa-google-plus-g"></i></a>
                    </li>
                    <li class="instagram">
                      <a href=""><i class="fab fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    )
}