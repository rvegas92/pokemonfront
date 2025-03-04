"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Íconos para paginación

export const Table = ({ data, rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Obtener los datos de la página actual
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Manejadores de paginación
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-xl p-4">
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-900 text-white">
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <th key={key} className="px-6 py-3 text-left font-semibold">
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100 transition duration-200"
              >
                {Object.values(item).map((value, i) => (
                  <td key={i} className="px-6 py-4">{value}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="100%" className="px-6 py-4 text-center text-gray-500">
                No hay datos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Controles de paginación */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg disabled:opacity-50"
        >
          <ChevronLeft size={18} /> Anterior
        </button>
        <span className="px-4 font-semibold">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg disabled:opacity-50"
        >
          Siguiente <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
