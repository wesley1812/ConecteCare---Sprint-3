import type { AgendamentoConsultaProps } from "../types/interfaces";


const CardConsulta = ({ appointment, onContact }: AgendamentoConsultaProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{appointment.type}</h3>
      <p className="text-gray-700 mb-1">
        <strong>Data:</strong> {appointment.date}
      </p>
      <p className="text-gray-700 mb-3">
        <strong>Horário:</strong> {appointment.time}
      </p>
      <button 
        onClick={() => onContact(appointment.id)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Tirar dúvidas sobre a consulta
      </button>
    </div>
  );
};

export default CardConsulta;