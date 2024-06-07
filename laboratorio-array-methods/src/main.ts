type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 3.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1a

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] =>
  pacientes.filter(
    (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
  );

console.log(obtenPacientesAsignadosAPediatria(pacientes));

// Apartado 1b

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] =>
  pacientes.filter(
    (paciente: Pacientes): boolean =>
      paciente.especialidad === "Pediatra" && paciente.edad < 10
  );

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean =>
  pacientes.some(
    (paciente: Pacientes): boolean =>
      paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );

console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria = pacientes.map(
    (paciente: Pacientes): Pacientes =>
      paciente.especialidad === "Pediatra"
        ? { ...paciente, especialidad: "Medico de familia" as Especialidad }
        : paciente
  );

  return pacientesPediatria;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean =>
  pacientes.some(
    (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
  );

console.log(hayPacientesDePediatria(pacientes));

// Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const contarPacientesPorTipoDeEspecialidad = (
  pacientes: Pacientes[],
  especialidad: Especialidad
) =>
  pacientes.reduce(
    (totalPacientes: number, paciente: Pacientes): number =>
      paciente.especialidad === especialidad
        ? totalPacientes + 1
        : totalPacientes,
    0
  );

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let pacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  pacientesPorEspecialidad.cardiologia = contarPacientesPorTipoDeEspecialidad(
    pacientes,
    "Cardiólogo"
  );
  pacientesPorEspecialidad.medicoDeFamilia = contarPacientesPorTipoDeEspecialidad(
    pacientes,
     "Medico de familia"
  );
  pacientesPorEspecialidad.pediatria = contarPacientesPorTipoDeEspecialidad(
    pacientes,
    "Pediatra"
  );

  return pacientesPorEspecialidad;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
