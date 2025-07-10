function CardRender({ name, temp, status, icon }) {
  return (
    <div className="card-body text-start border rounded p-4">
      
        <div className="d-flex justify-content-between align-items-center gap-2">
          <h5 className="card-title mb-0">{name}</h5>
          <img src={icon} alt="clima" style={{height: '40px'}}/>
        </div>
        <p className="card-text text-muted mb-0">Temperatura: {temp}°C</p>
        <p className="card-text text-muted mb-0">{status}</p>

    </div>
  );
}

export default CardRender;
