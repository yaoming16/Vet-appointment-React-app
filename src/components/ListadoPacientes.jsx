import Paciente from "./Paciente";


function ListadoPacientes( {pacientes, setPaciente, eliminarPaciente} ) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen mt-5 md:mt-0 ">
      <h2 className="font-black text-3xl text-center">{pacientes.length ?  "Listado de pacientes" : "No hay pacientes"}</h2>
      <p className="mt-5 text-center mb-10">
        {pacientes.length ?  "Listado de" : "Comienza a agregar pacientes"}
        <span className="text-indigo-600 font-bold text-lg">{pacientes.length ?  " pacientes y citas" : " y aparecerán en este lugar"}</span>
      </p>

      <div className="md:overflow-y-scroll md:h-screen">
        {pacientes.map((paciente) => 
          <Paciente 
            paciente={paciente}
            key={paciente.ID}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        )}
      </div>

    </div>
  )
}

export default ListadoPacientes
