import { MemoryType } from "../types";
export const memoryTypes: MemoryType[] = [
  {
    id: 1,
    name: "Memoria DDR4 RAM",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    releaseDate: "2014",
    writeSpeed: "17,000 MB/s",
    readSpeed: "17,000 MB/s",
    pros: [
      "Alto ancho de banda",
      "Menor consumo de energía que DDR3",
      "Ampliamente disponible",
    ],
    cons: ["Más cara que DDR3", "Incompatible con sistemas más antiguos"],
  },
  {
    id: 2,
    name: "Memoria DRAM",
    image:
      "https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    releaseDate: "1960s",
    writeSpeed: "Varía según el tipo",
    readSpeed: "Varía según el tipo",
    pros: [
      "Rápida y de bajo costo",
      "Utilizada ampliamente en sistemas modernos",
    ],
    cons: ["Volátil, pierde datos cuando se apaga el dispositivo"],
  },
  {
    id: 3,
    name: "Memoria SDRAM",
    image:
      "https://www.comsite.com.ve/wp-content/uploads/2020/11/memoria-ram-ddr4-1700x956.jpg",
    releaseDate: "1993",
    writeSpeed: "Varía según la generación",
    readSpeed: "Varía según la generación",
    pros: [
      "Sincronización con el reloj del sistema",
      "Más rápida que la DRAM convencional",
    ],
    cons: [
      "Se ha reemplazado en su mayoría por versiones más modernas como DDR SDRAM",
    ],
  },
  {
    id: 4,
    name: "Memoria DDR SDRAM",
    image:
      "https://i.ebayimg.com/images/g/1bUAAOSwWhxm7HeR/s-l1600.webp",
    releaseDate: "2000",
    writeSpeed: "Varía según la versión (DDR, DDR2, DDR3, DDR4, DDR5)",
    readSpeed: "Varía según la versión",
    pros: [
      "Transfiere datos dos veces por ciclo de reloj",
      "Utilizada en la mayoría de computadoras modernas",
    ],
    cons: ["Cada versión requiere una placa base compatible"],
  },
  {
    id: 5,
    name: "Memoria RDRAM",
    image:
      "https://i.ebayimg.com/images/g/brwAAOSwB91mrq-B/s-l1600.webp",
    releaseDate: "1999",
    writeSpeed: "1,600 MB/s",
    readSpeed: "1,600 MB/s",
    pros: [
      "Alta velocidad en su momento",
      "Capaz de operar a altas frecuencias",
    ],
    cons: [
      "Costosa y propietaria",
      "Requiere licencias de Rambus",
      "Descontinuada en favor de DDR",
    ],
  },
  {
    id: 6,
    name: "Memoria SRAM",
    image:
      "https://i.ebayimg.com/images/g/vtkAAOSwkJJfC-qd/s-l1600.webp",
    releaseDate: "1960s",
    writeSpeed: "Varía",
    readSpeed: "Varía",
    pros: [
      "Muy rápida",
      "No volátil mientras esté alimentada",
      "Utilizada como memoria caché",
    ],
    cons: ["Más cara que DRAM", "Consume más energía"],
  },
  {
    id: 7,
    name: "Memoria ROM",
    image:
      "https://th.bing.com/th/id/OIP.R4C1pLVu0rSX7zlCIQwg0QAAAA?rs=1&pid=ImgDetMain",
    releaseDate: "1950s",
    writeSpeed: "Solo lectura",
    readSpeed: "Varía",
    pros: ["Almacena datos permanentemente", "No volátil"],
    cons: ["No se puede modificar fácilmente", "Capacidades limitadas"],
  },
  {
    id: 8,
    name: "Memoria EEPROM",
    image:
      "https://i.ebayimg.com/images/g/4iYAAOSwoMFd1mbT/s-l1600.webp",
    releaseDate: "1980s",
    writeSpeed: "Lento comparado con otras memorias",
    readSpeed: "Moderado",
    pros: ["Permite borrado y reescritura eléctrica", "No volátil"],
    cons: ["Número limitado de ciclos de escritura", "Baja capacidad"],
  },
  {
    id: 9,
    name: "Memoria CMOS",
    image:
      "https://www.profesionalreview.com/wp-content/uploads/2019/11/en-qu%C3%A9-consiste-un-clear-CMOS-y-c%C3%B3mo-realizarlo01-768x576.jpg",
    releaseDate: "1980s",
    writeSpeed: "Muy bajo",
    readSpeed: "Muy bajo",
    pros: [
      "Bajo consumo de energía",
      "Utilizada para almacenar configuraciones del sistema",
    ],
    cons: [
      "Capacidad muy limitada",
      "Depende de una batería para mantener datos",
    ],
  },
  {
    id: 10,
    name: "Memoria caché",
    image:
      "https://razor.com.br/wp-content/uploads/2021/05/O-QUE-E-E-PARA-QUE-SERVE-A-MEMORIA-CACHE-DO-PROCESSADOR-1140x683.webp",
    releaseDate: "1960s",
    writeSpeed: "Muy rápida",
    readSpeed: "Muy rápida",
    pros: [
      "Almacena datos de acceso rápido",
      "Aumenta el rendimiento del sistema",
    ],
    cons: ["Capacidad limitada", "Cara comparada con otras memorias"],
  },
];
