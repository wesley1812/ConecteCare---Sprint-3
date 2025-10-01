import type { DepoimentoProps } from "../types/interfaces";

const Depoimento = ({ text, author }: DepoimentoProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic mb-4">"{text}"</p>
      <p className="text-gray-900 font-semibold">- {author}</p>
    </div>
  );
};

export default Depoimento;