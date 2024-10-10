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
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
