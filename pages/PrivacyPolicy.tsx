import React from 'react';
import { ScrollText, Mail } from 'lucide-react';

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

      {/* Section 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">1. Información que Recolectamos</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Para operar, LA APLICACIÓN requiere una única autenticación a su cuenta de YouTube. 
            Esta autenticación se realiza a través del protocolo OAuth 2.0 de Google.
          </p>
          <p className="text-gray-700 leading-relaxed">
            LA APLICACIÓN no recolecta, procesa ni almacena información personal identificable del usuario, 
            como nombre, apellido, dirección de correo electrónico, DNI o cualquier otro dato personal.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El único tipo de información que LA APLICACIÓN utiliza son los tokens de acceso proporcionados 
            por la API de Google de YouTube. Estos tokens se utilizan exclusivamente para:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
            <li>Autenticar la cuenta de YouTube del usuario con la API.</li>
            <li>Subir videos al canal de YouTube del usuario, según su comando.</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">2. Almacenamiento y Resguardo de la Información</h2>
        <p className="text-gray-700 leading-relaxed">
          Los tokens de autenticación se almacenan de forma local en el dispositivo del usuario, ya que se trata 
          de un flujo de corta duración. Estos tokens nunca son transmitidos a servidores de GRUPORPP ni de terceros.
        </p>
        <p className="text-gray-700 leading-relaxed">
          LA APLICACIÓN no se hace responsable de interceptaciones ilegales, violación de los sistemas del usuario 
          o uso indebido de la información si esta se obtiene por medios que escapan al control de LA APLICACIÓN, 
          como el acceso no autorizado al dispositivo local del usuario.
        </p>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">3. Uso de la Información</h2>
        <p className="text-gray-700 leading-relaxed">
          La información a la que se accede a través de la API de YouTube (es decir, los tokens de autenticación) 
          se utiliza exclusivamente para el propósito de la LA APLICACIÓN:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700 bg-white p-4 border-l-2 border-brand-200">
          <li>Gestionar el acceso a su canal de YouTube.</li>
          <li>Permitir la subida de videos al canal que el usuario ha autorizado.</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">4. Derechos de Acceso y Modificaciones</h2>
        <p className="text-gray-700 leading-relaxed">
          Dado que LA APLICACIÓN no almacena datos personales de los usuarios, no existen derechos de acceso, 
          rectificación, cancelación u oposición aplicables.
        </p>
        <p className="text-gray-700 leading-relaxed">
          LA APLICACIÓN se reserva el derecho de modificar o actualizar esta política en cualquier momento. 
          Cualquier cambio será publicado y será responsabilidad del usuario consultarla periódicamente.
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">5. Contacto</h2>
        <div className="flex items-center gap-3 bg-brand-50 p-4 rounded-lg text-brand-900 border border-brand-100">
            <Mail className="w-5 h-5" />
            <p className="font-medium">
            Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactar con nosotros a través 
            de la dirección de correo electrónico: <a href="mailto:scusi@gruporpp.com.pe" className="underline hover:text-brand-700">scusi@gruporpp.com.pe</a>.
            </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;