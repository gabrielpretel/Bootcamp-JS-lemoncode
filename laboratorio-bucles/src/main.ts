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
    temperatura: 36.8,
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

// Apartado 1 a)

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesEnPediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesEnPediatria = [...pacientesEnPediatria, pacientes[i]];
    }
  }
  return pacientesEnPediatria;
};

console.log(
  "Pacientes en pediatría:",
  obtenPacientesAsignadosAPediatria(pacientes)
);

// Apartado 1 b)

let pacientesEnPediatriaYMenorDeDiezAnios: Pacientes[] = [];

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesEnPediatriaYMenorDeDiezAnios = [
        ...pacientesEnPediatriaYMenorDeDiezAnios,
        pacientes[i],
      ];
    }
  }
  return pacientesEnPediatriaYMenorDeDiezAnios;
};

console.log(
  "Pacientes en pediatría y menores de 10 años:",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

//Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      return true;
    }
  }

  return false;
};

console.log("Emergencia?", activarProtocoloUrgencia(pacientes));

// Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // let pacientesDePediatriaReasignados: Pacientes[] = [];
  // let pacientesDeMedicoFamilia: Pacientes[] = [];
  // let reasignacionPacientesDeMedicoFamilia: Pacientes[] = [];
  // let i = 0;

  const pacientesCopia = [...pacientes];

  for(let i = 0; i < pacientesCopia.length; i++){
    if (pacientesCopia[i].especialidad === "Pediatra"){
      pacientesCopia[i].especialidad = "Medico de familia";
    }
  }

  return pacientesCopia;
  
  // while (i < pacientes.length) {
  //   if (pacientes[i].especialidad === "Pediatra") {
  //     pacientesDePediatriaReasignados = [
  //       ...pacientesDePediatriaReasignados,
  //       pacientes[i],
  //     ];
  //     for (let i = 0; i < pacientesDePediatriaReasignados.length; i++) {
  //       pacientesDePediatriaReasignados[i] = {
  //         ...pacientesDePediatriaReasignados[i],
  //         especialidad: "Medico de familia",
  //       };
  //     }
  //   }
  //   if (pacientes[i].especialidad === "Medico de familia") {
  //     pacientesDeMedicoFamilia = [...pacientesDeMedicoFamilia, pacientes[i]];
  //   }
  //   reasignacionPacientesDeMedicoFamilia = [
  //     ...pacientesDeMedicoFamilia,
  //     ...pacientesDePediatriaReasignados,
  //   ];
  //   i++;
  // }

};

console.log(
  "Pacientes reasignados a Medico de Familia",
  reasignaPacientesAMedicoFamilia(pacientes)
);

// Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientes: boolean = false;
  for (let i = 0; i < pacientes.length; i++) {
    hayPacientes = pacientes[i].especialidad === "Pediatra" ? true : false;
  }
  return hayPacientes;
};

console.log(
  "Hay pacientes para pediatría?",
  HayPacientesDePediatria(pacientes)
);

// Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const contarPacientesPorTipoDeEspecilidad = (pacientes: Pacientes[], especialidad: Especialidad )=>{
  let totalPacientes = 0;

  for (let i = 0; i < pacientes.length; i++) {

    if (pacientes[i].especialidad === especialidad) {
      totalPacientes++;
    }

  }
  return totalPacientes;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let pacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  pacientesPorEspecialidad.cardiologia = contarPacientesPorTipoDeEspecilidad(pacientes, "Cardiólogo");
  pacientesPorEspecialidad.medicoDeFamilia = contarPacientesPorTipoDeEspecilidad(pacientes, "Medico de familia");
  pacientesPorEspecialidad.pediatria = contarPacientesPorTipoDeEspecilidad(pacientes, "Pediatra");

  return pacientesPorEspecialidad;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
