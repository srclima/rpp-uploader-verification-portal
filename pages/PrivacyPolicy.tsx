import React from 'react';
import { ScrollText, Mail, ShieldAlert } from 'lucide-react'; // Añadí ShieldAlert para resaltar la sección

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <header className="border-b border-gray-200 pb-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
            <ScrollText className="w-8 h-8 text-brand-600" />
            <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad de RPP Uploader</h1>
        </div>
        <p className="text-gray-500 text-sm">Última actualización: {new Date().toLocaleDateString()}</p>
      </header>

      {/* Section 0: Introduction */}
      <section className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Esta Política de Privacidad (en adelante LA POLÍTICA) tiene como finalidad informar sobre la forma en que 
          la aplicación RPP Uploader (en adelante LA APLICACIÓN) trata la información de sus usuarios.
        </p>
        <p className="text-gray-700 leading-relaxed">
          LA APLICACIÓN es una herramienta web desarrollada para facilitar la carga de videos a canales de YouTube.
        </p>
      </section>

      {/* Section 1: Información que Recolectamos */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">1. Información que Recolectamos</h2>
        <p className="text-gray-700 leading-relaxed font-semibold">
          Para operar, LA APLICACIÓN requiere una única autenticación a su cuenta de YouTube a través del protocolo OAuth 2.0 de Google.
        </p>
        <p className="text-red-600 font-medium">
          LA APLICACIÓN no recolecta, procesa ni almacena información personal identificable del usuario (nombres, correos, DNI).
        </p>
        <p className="text-gray-700 leading-relaxed">
          Solo utilizamos los tokens de acceso proporcionados por la API de Google de YouTube exclusivamente para:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
          <li>Autenticar la cuenta de YouTube del usuario con la API.</li>
          <li>Subir videos al canal de YouTube autorizado por el usuario.</li>
        </ul>
      </section>

      {/* NUEVA SECCIÓN: REQUISITO CRÍTICO DE GOOGLE */}
      <section className="space-y-4 border-l-4 border-brand-500 pl-6 bg-brand-50/50 py-4 pr-4 rounded-r-lg">
        <h2 className="text-xl font-bold text-brand-900 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5" />
          2. Uso y Transferencia de Datos (Transparencia)
        </h2>
        <p className="text-gray-800 font-bold leading-relaxed">
          RPP Uploader NO comparte, NO vende, NO transfiere ni divulga los datos obtenidos a través de las APIs de Google (incluyendo tokens de acceso) a terceros, plataformas externas, anunciantes o entidades fuera de la infraestructura necesaria para la operación (AWS Lambda).
        </p>
        <p className="text-gray-700 leading-relaxed italic">
          El uso de la información recibida de las APIs de Google por parte de RPP Uploader se adhiere estrictamente a la 
          <a 
            href="https://developers.google.com/terms/api-services-user-data-policy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-700 underline mx-1 font-semibold"
          >
            Política de Datos del Usuario de los Servicios de API de Google
          </a>, incluidos los requisitos de <strong>Uso Limitado</strong>.
        </p>
      </section>

      {/* Section 3 (Anteriormente 2): Almacenamiento */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">3. Almacenamiento y Resguardo</h2>
        <p className="text-gray-700 leading-relaxed">
          Los tokens de autenticación son de corta duración. Estos tokens nunca son transmitidos a servidores de terceros. 
          LA APLICACIÓN no se hace responsable de interceptaciones ilegales si estas se obtienen por medios que escapan 
          al control del sistema, como el acceso no autorizado al dispositivo local del usuario.
        </p>
      </section>

      {/* Section 4: Derechos y Modificaciones */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">4. Derechos de Acceso y Modificaciones</h2>
        <p className="text-gray-700 leading-relaxed">
          Dado que LA APLICACIÓN no almacena datos personales de los usuarios, no existen derechos de acceso, 
          rectificación o cancelación aplicables. Nos reservamos el derecho de actualizar esta política para 
          cumplir con nuevos requerimientos de seguridad.
        </p>
      </section>

      {/* Section 5: Contacto */}
      <section className="space-y-4 pb-10">
        <h2 className="text-xl font-bold text-gray-800">5. Contacto</h2>
        <div className="flex items-center gap-3 bg-brand-50 p-4 rounded-lg text-brand-900 border border-brand-100">
            <Mail className="w-5 h-5" />
            <p className="font-medium">
            Soporte: <a href="mailto:scusi@gruporpp.com.pe" className="underline hover:text-brand-700">scusi@gruporpp.com.pe</a>
            </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;