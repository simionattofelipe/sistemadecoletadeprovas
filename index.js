import { useState } from "react";
import { CheckCircle, Clock } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [registros, setRegistros] = useState([]);

  const coletarProva = () => {
    if (!url) return;
    const novoRegistro = {
      url,
      data: new Date().toLocaleString(),
    };
    setRegistros([novoRegistro, ...registros]);
    setUrl("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sistema de Coleta de Provas Digitais</h1>
      <p className="mb-6 text-gray-600">
        Insira a URL da publicação suspeita para registrar a prova digital.
      </p>

      <div className="flex gap-2 mb-4">
        <input
          type="url"
          placeholder="Cole aqui a URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border rounded px-2 py-1 flex-grow"
        />
        <button onClick={coletarProva} className="bg-blue-600 text-white px-4 py-2 rounded">Coletar</button>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Provas Coletadas</h2>
      {registros.length === 0 ? (
        <p className="text-gray-500">Nenhuma prova coletada ainda.</p>
      ) : (
        <div className="grid gap-4">
          {registros.map((registro, idx) => (
            <div key={idx} className="border rounded p-4 shadow">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span className="font-medium">Prova registrada</span>
              </div>
              <p className="mt-2 break-words text-blue-700 underline">{registro.url}</p>
              <div className="mt-1 text-sm text-gray-500 flex items-center gap-1">
                <Clock size={16} /> {registro.data}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}