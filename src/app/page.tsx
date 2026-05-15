'use client';
export default function Home() {
  const [lang, setLang] = useState(true); //false = 'Spanish' true = 'English'

  const switchLang = () => setLang(!lang);

  return lang ? (
    <div className="flex flex-col flex-wrap p-8 glass w-11/12 mx-auto mt-28 py-6 rounded-xl text-xl text-blue-300">
      <div className="my-8 flex">
        <h1 className="text-4xl text-sky-400 mx-auto gap-4">
          Welcome to my App
        </h1>
        <button onClick={switchLang} className="flex items-center gap-2 mt-2">
          EN
          <img src="english.svg" alt="USAFlag" width={40} height={40} />
        </button>
      </div>

      <p className="my-4">
        My third project is an application developed with Next.js, which
        connects to the{' '}
        <a
          href="https://anilist.co/home"
          className="text-sky-500 font-medium underline"
        >
          Anilist
        </a>{' '}
        website API using the GraphQL query language to obtain detailed
        information about a wide variety of animes and mangas stored in its
        database.
      </p>

      <h2 className="text-2xl font-medium py-2 text-sky-500">
        Features of the application:
      </h2>

      <ul className="pb-12">
        <li className="list-disc py-2">
          Exploring various information about animes and mangas available in the
          API database, including release dates, descriptions, chapter counts,
          genres, popularity, as well as specific details about each character.
        </li>

        <li className="list-disc py-2">
          Integrated Search Bar: Allows users to search for any anime or manga
          present in the AniList database.
        </li>

        <li className="list-disc py-2">
          Favorites Section: Users can add their favorite anime or manga to a
          favorites section. These favorites are stored in Local Storage, which
          guarantees that the information persists even if the user temporarily
          leaves the page, thus facilitating access to their preferred content
          on future visits.
        </li>
      </ul>
    </div>
  ) : (
    <div className="flex flex-col flex-wrap p-8 glass w-11/12 mx-auto mt-28 py-6 rounded-xl text-xl text-blue-300">
      <div className="my-8 flex">
        <h1 className="text-4xl text-sky-400 mx-auto gap-4">
          Bienvenido a mi Aplicación
        </h1>
        <button onClick={switchLang} className="flex items-center gap-3 mt-2">
          ES
          <img src="spanish.svg" alt="SpainFlag" width={38} height={40} />
        </button>
      </div>

      <p className="my-4">
        Mi tercer proyecto es una aplicación desarrollada con Next.js, la cual
        se conecta a la API del sitio web{' '}
        <a
          href="https://anilist.co/home"
          className="text-sky-500 font-medium underline"
        >
          Anilist
        </a>{' '}
        utilizando el lenguaje de consultas GraphQL para obtener información
        detallada sobre una amplia variedad de animes y mangas almacenados en su
        base de datos.
      </p>

      <h2 className="text-2xl font-medium py-2 text-sky-500">
        Funcionalidades destacadas de la aplicación:
      </h2>

      <ul className="pb-12">
        <li className="list-disc py-2">
          Exploración de información diversa sobre animes y mangas disponibles
          en la base de datos de la API, incluyendo fechas de estreno,
          descripciones, recuento de capítulos, géneros, popularidad, así como
          detalles específicos sobre cada personaje.
        </li>

        <li className="list-disc py-2">
          Barra de búsqueda integrada: Permite a los usuarios buscar cualquier
          anime o manga presente en la base de datos de AniList.
        </li>

        <li className="list-disc py-2">
          Sección de Favoritos: Los usuarios pueden agregar sus animes o mangas
          preferidos a una sección de favoritos. Estos favoritos se almacenan en
          el Local Storage, lo que garantiza que la información persista incluso
          si el usuario abandona temporalmente la página, facilitando así el
          acceso a sus contenidos preferidos en futuras visitas.
        </li>
      </ul>
    </div>
  );
}
import { useState } from 'react';
