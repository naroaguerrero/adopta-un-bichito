function Footer() {
  return (
    <section id="footer">
      <div class="container">
        <div class="row text-center text-xs-center text-sm-left text-md-left">
          <div class="col-xs-12 col-sm-4 col-md-4">
            <h5>Información</h5>
            <ul class="list-unstyled quick-links">
              <li>
                <a href="#">Publicidad</a>
              </li>
              <li>
                <a href="#">Privacidad</a>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4">
            <h5>Contáctanos</h5>
            <ul class="list-unstyled quick-links">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4">
            <h5>Horario</h5>
            <ul class="list-unstyled quick-links">
              <li>
                <a href="#">De lunes a sábado de 11:00 a 18:00</a>
              </li>
              <li>
                <a href="#">Domingos de 11:00 a 13:30</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank">
                  <i class="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p class="h6">
              © Aviso legal - Política de privacidad - Política de cookies
              <a class="text-green ml-2" href="#" target="_blank"></a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
