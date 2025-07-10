import { useState, useEffect } from 'react';
import { useDates } from '../hook/getClima';
import { getClimasRandom } from '../hook/getAleatory';

import SearchInput from '../components/search.jsx';
import CardRender from '../components/card';

function Welcome() {

    // Variables
    const [location, setLocation] = useState('');
    const {datos, error} = useDates(location);

    const [climas, setClimas] = useState([]);
    
    // obtenemos ciudades aleatorias
    useEffect(() => {
        getClimasRandom(15).then(setClimas);
    }, []);

    return (
        <section className="container-fluid text-center d-flex flex-column justify-content-between min-vh-100">
            
            <div className="p-5 bg-primary text-white h-50 mb-4 rounded-bottom">

                <h1 className="fw-bold">¡Bienvenido!</h1>
                <p className='fs-5'>Acá podés buscar el clima actual en las ciudades de todo el mundo!</p>
                
            </div>

            <div className='flex-grow-1'>

                <SearchInput value={location} onChange={e => setLocation(e.target.value)} />

                {location && (!datos || datos.error) && (
                    <p>No encontramos ninguna ciudad con ese nombre...</p>
                )}
                
                {location && datos && datos.location && (
                    <div className="mb-2">
                        
                        <CardRender
                            className="mb-4"
                            name={`${datos.location.name}, ${datos.location.country}`}
                            temp={datos.current.temp_c}
                            status={datos.current.condition.text}
                            icon={datos.current.condition.icon}
                        />
                        
                    </div>
                )}

                { !location && (
                    <div className="row justify-content-center">
                        {climas.map((clima, idx) => (
                            <div className="col-md-3 mb-3" key={idx}>
                                <CardRender
                                name={`${clima.location.name}, ${clima.location.country}`}
                                temp={clima.current.temp_c}
                                status={clima.current.condition.text}
                                icon={clima.current.condition.icon}
                                />
                            </div>
                        ))}
                    </div>
                )}
                
            </div>

            <footer className='p-4 bg-secondary-subtle text-secondary-emphasis rounded-top'>
                <h5 className='mb-0'>Desarrollado por Nahuel Caccavale</h5>
            </footer>

        </section>

    );
}

export default Welcome;