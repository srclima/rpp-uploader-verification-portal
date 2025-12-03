import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, FileVideo, ShieldAlert, ArrowRight } from 'lucide-react';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Title & Purpose */}
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          RPP Uploader: Sistema de Automatización de Publicación de Video
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
          RPP Uploader es una herramienta interna diseñada para optimizar y automatizar el flujo de trabajo de publicación 
          de contenido de video generado en nuestro Sistema de Gestión de Contenidos (CMS) a nuestro canal oficial de YouTube. 
          El objetivo principal es la subida programada y eficiente de grandes volúmenes de contenido a través de un servicio 
          de backend (AWS Lambda).
        </p>
      </section>

      {/* OAuth Justification (Critical Section) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b pb-2 border-gray-200">
            <ShieldAlert className="text-brand-600 w-6 h-6" />
            <h2 className="text-2xl font-bold text-gray-800">
            Justificación de Acceso y Uso de Datos (OAuth 2.0)
            </h2>
        </div>
        
        <p className="text-gray-600">
          Para realizar la subida de videos de forma segura, RPP Uploader requiere que un usuario autorizado se conecte 
          a YouTube para obtener un token de acceso temporal.
        </p>

        {/* Prominent Box */}
        <div className="bg-brand-50 border-l-4 border-brand-600 p-6 rounded-r-lg shadow-sm">
          <ul className="space-y-4">
            <li className="flex flex-col md:flex-row md:items-start gap-2">
              <span className="font-bold text-brand-800 min-w-[160px] flex items-center gap-2">
                <Lock className="w-4 h-4" /> Permiso Solicitado:
              </span>
              <code className="text-sm bg-white px-2 py-1 rounded border border-brand-200 text-brand-700 break-all font-mono">
                https://www.googleapis.com/auth/youtube.upload
              </code>
            </li>
            <li className="flex flex-col md:flex-row md:items-start gap-2">
              <span className="font-bold text-brand-800 min-w-[160px] flex items-center gap-2">
                <FileVideo className="w-4 h-4" /> Función:
              </span>
              <span className="text-brand-900">
                Este permiso se utiliza exclusivamente para subir el archivo binario del video y sus metadatos 
                (título, descripción, etc.) a YouTube. Es el permiso mínimo necesario.
              </span>
            </li>
            <li className="flex flex-col md:flex-row md:items-start gap-2">
              <span className="font-bold text-brand-800 min-w-[160px] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Seguridad:
              </span>
              <span className="text-brand-900">
                Utilizamos un Access Token de corta duración (1 hora) que es consumido por nuestro servidor backend 
                (AWS Lambda). La aplicación no solicita, almacena, ni utiliza permisos para ver, editar o eliminar 
                videos ya existentes del canal.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Image Carousel (Visual Context) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 border-gray-200">
          Interfaz y Flujo de Autenticación
        </h2>
        <div className="max-w-3xl mx-auto">
            <Carousel />
        </div>
      </section>

      {/* Privacy Policy Link */}
      <section className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Cumplimiento y Privacidad</h3>
        <Link 
          to="/privacy-policy" 
          className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-700 transition-colors shadow-md hover:shadow-lg"
        >
          Ver Política de Privacidad de RPP Uploader
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
};

export default Home;