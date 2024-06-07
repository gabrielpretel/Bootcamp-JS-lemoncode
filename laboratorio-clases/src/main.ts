interface Reserva {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

interface Precios {
  standard: number;
  suite: number;
  personaAdicional: number;
  desayuno: number;
}

const reservas: Reserva[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

class Reservas {
  precioStandard: number;
  precioSuite: number;
  precioPersonaAdicional: number;
  precioDesayuno: number;
  IVA: number;
  subtotal: number;

  constructor(precios: Precios) {
    this.precioStandard = precios.standard;
    this.precioSuite = precios.suite;
    this.precioPersonaAdicional = precios.personaAdicional;
    this.precioDesayuno = precios.desayuno;
    this.IVA = 0.21;
    this.subtotal = 0;
  }

  calcularSubtotal(reservas: Reserva[]) {
    this.subtotal = reservas.reduce(
      (resultado: number, reserva: Reserva): number => {
        reserva.tipoHabitacion === "standard" &&
          (resultado += this.precioStandard * reserva.noches);

        reserva.tipoHabitacion === "suite" &&
          (resultado += this.precioSuite * reserva.noches);

        reserva.pax > 1 &&
          (resultado += this.precioPersonaAdicional * (reserva.pax - 1));

        reserva.desayuno === true &&
          (resultado += this.precioDesayuno * reserva.noches * reserva.pax);

        return resultado;
      },
      0
    );
  }

  get total() {
    return Number((this.subtotal + this.subtotal * this.IVA).toFixed(2));
  }
}

class ReservasCliente extends Reservas {
  constructor(precios: Precios) {
    super(precios);
  }
}

const precios = {
  standard: 100,
  suite: 150,
  personaAdicional: 40,
  desayuno: 15,
};

const totalesReserva = new ReservasCliente(precios);
totalesReserva.calcularSubtotal(reservas);
console.log("Subtotal:", totalesReserva.subtotal);
console.log("Total:", totalesReserva.total);

class ReservaOperador extends Reservas {
  descuento: number;

  constructor(precios: Precios, descuento: number) {
    super(precios);
    this.descuento = descuento;
  }

  get subtotalConDescuento() {
    return Number(
      (this.subtotal - (this.subtotal * this.descuento) / 100).toFixed(2)
    );
  }

  get totalConDescuento() {
    return Number(
      (this.total - (this.total * this.descuento) / 100).toFixed(2)
    );
  }
}

const preciosPorVolumen = {
  standard: 100,
  suite: 100,
  personaAdicional: 40,
  desayuno: 15,
};

const totalesReservaOperador = new ReservaOperador(preciosPorVolumen, 15);

totalesReservaOperador.calcularSubtotal(reservas);
console.log("Subtotal Operador:", totalesReservaOperador.subtotalConDescuento);
console.log("Total Operador:", totalesReservaOperador.totalConDescuento);

