import { useState, useEffect } from 'react';
import FormItem from './FormItem';
import Error from './Error';

function Formulario( { setPacientes, pacientes, paciente, setPaciente} ) {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintoma, setSintoma] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintoma(paciente.sintoma);
    }

  }, [paciente])
  

  const generarID = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //validación del formulario
    if ([nombre, propietario, email, fecha, sintoma].includes('')) {
      setError(true);
    } else {
      setError(false);
    }

    //Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintoma,
    }


    if(paciente.ID) {
      //Editar paciente ya existente
      objetoPaciente.ID = paciente.ID;

      const pacientesActualizados = pacientes.map(
        pacienteState => pacienteState.ID === paciente.ID ? 
        objetoPaciente : pacienteState 
        );

        setPacientes(pacientesActualizados);
        setPaciente({});
    } else {
      //Agregar nuevo paciente
      objetoPaciente.ID = generarID();
      setPacientes([...pacientes, objetoPaciente]);
    }
    

    //Reiniciar form 
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintoma('');
  }

  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
      <p className="mt-5 text-center">
        Añade pacientes y
        <span className="text-indigo-600 font-bold text-lg"> Administralos</span>
      </p>

      <form
        className="bg-white shadow-lg rounded-lg py-10 px-5 mt-10"
        onSubmit={handleSubmit}>

        {error && (<Error mensaje={'Todos los campos son obligatorios'}/>)}

        <FormItem type="text" id="petName" placeholder="Nombre de la mascota" value={nombre} onchange={setNombre} />
        <FormItem type="text" id="ownerName" placeholder="Nombre del propietario" value={propietario} onchange={setPropietario} />
        <FormItem type="email" id="email" placeholder="Email" value={email} onchange={setEmail} />
        <FormItem type="date" id="alta" placeholder="Fecha de alta" value={fecha} onchange={setFecha} />

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Descripción de los síntomas"
            value={sintoma}
            onChange={(e) => setSintoma(e.target.value)}
          />

        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 
          text-white font-bold hover:bg-indigo-500 cursor-pointer transition-colors"
          value={ paciente.ID ? "Editar paciente" : "Agregar paciente"} />
      </form>

    </div>
  )
}

export default Formulario
