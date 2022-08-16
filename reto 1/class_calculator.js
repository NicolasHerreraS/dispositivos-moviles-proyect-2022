let classes = [
  {
    codigo: "Pintura",
    horas: 2,
  },
  {
    codigo: "Dibujo",
    horas: 3,
  },
  {
    codigo: "Programación Orientada a Objetos II",
    horas: 8,
  },
  {
    codigo: "Práctica empresarial",
    horas: 1,
  },
  {
    codigo: "Emprendimiento Avanzado",
    horas: 4,
  },
];

function calculate_optimal_classes(hours) {
  let smallest_distance = 999;
  let configuration = [];
  for (let i = 0; i < classes.length; i++) {
    for (let j = 0; j < classes.length; j++) {
      if (i == j) continue;
      let distance = Math.abs(hours - (classes[i].horas + classes[j].horas));
      if (distance < smallest_distance) {
        configuration = [];
        smallest_distance = distance;
        configuration.push(classes[i]);
        configuration.push(classes[j]);
      }
    }
  }
  return configuration;
}

function take_from_document() {
  console.log(
    calculate_optimal_classes(document.getElementById("horas").value)
  );
}
