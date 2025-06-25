import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1>Contáctanos</h1>
      <div className="contacto-info">
        <div className="contacto-datos">
          <p><strong>📍 Dirección:</strong> Av. Siempre Viva 123, Quito, Ecuador</p>
          <p><strong>📞 Teléfono:</strong> +593 2 123 4567</p>
          <p><strong>📧 Email:</strong> contacto@miempresa.com</p>
          <p><strong>🕒 Horario:</strong> Lunes a Viernes de 9:00 a 18:00</p>
        </div>

        <div className="contacto-mapa">
          <iframe
            title="Ubicación empresa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.3681235298295!2d-78.4769332!3d-0.1806537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a6c2e44aab1%3A0xb508116cd9cb9cfb!2sQuito%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1718910000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
