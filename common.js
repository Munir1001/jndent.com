document.addEventListener('DOMContentLoaded', () => {
  // Navbar
  const navbar = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="/index.html">
                    <img src="/img/logo.png" alt="JNDentLogo" height="50" width="50">
                </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html"><i class="fas fa-home"></i> Inicio</a> <!-- Icono de casa para Inicio -->
              </li>
              <li class="nav-item">
                <a class="nav-link" href="paciente.html"><i class="fas fa-tooth"></i> Periodontograma</a> <!-- Icono de diente para Periodontograma -->
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contacto.html"><i class="fas fa-envelope"></i> Contacto</a> <!-- Icono de sobre para Contacto -->
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;

  document.body.insertAdjacentHTML('afterbegin', navbar);
});

