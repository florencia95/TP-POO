import { Autor } from "./entities/Autor";
import { Biblioteca } from "./entities/Biblioteca";
import { LibroImpreso } from "./entities/LibroImpreso";

const Oscar = new Autor ("Oscar", "Wilde")
const Bram = new Autor ("Bram", "Stoker")
const Gabriel = new Autor ("Gabriel", "Rolon")
const Jojo = new Autor ("Jojo", "Moyes")
const Henry = new Autor ("Henry", "James")
const Eduardo = new Autor ("Eduardo", "Sacheri")
const Edgar = new Autor ("Edgar", "Poe")

const Libro1 = new LibroImpreso("El retrato de Dorian Grey", Oscar)
const Libro2 = new LibroImpreso("Dracula", Bram)
const Libro3 = new LibroImpreso("La voz ausente", Gabriel)
const Libro4 = new LibroImpreso("Yo antes de ti", Jojo)
const Libro5 = new LibroImpreso("Otra vuelta de tuerca", Henry)
const Libro6 = new LibroImpreso("Ser feliz era esto", Eduardo)
const Libro7 = new LibroImpreso("Corazon delator", Edgar)

const biblioteca = new Biblioteca()
biblioteca.agregarLibro(Libro1)
biblioteca.agregarLibro(Libro2)
biblioteca.agregarLibro(Libro3)
biblioteca.agregarLibro(Libro4)
biblioteca.agregarLibro(Libro5)
biblioteca.agregarLibro(Libro6)
biblioteca.agregarLibro(Libro7)

biblioteca.mostrarCatalogo()