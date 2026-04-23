import herramientasBg from './assets/Herramientas.png'
import Fondo from './assets/Fondo.png'
import Beneficio from './assets/Beneficios.png'
import { MdInventory, MdAnalytics } from "react-icons/md";
import { FaCogs, FaShoppingCart} from "react-icons/fa";
import { BsCartX } from "react-icons/bs";
import { ShelvingUnit, NotebookPen, ChartNoAxesCombined, Boxes, Store, Columns3Cog} from 'lucide-react'
import { Icon } from '@iconify/react'
import { Badge } from '@/components/ui/badge';

function App() {

  return (
    <>
      <header className='bg-black h-16 flex justify-center items-center w-full border-black border-b-2 border-b-black'>
        <p className='text-center font-bold text-2xl bg-linear-to-r from-blue-700 via-gray-550 to-white bg-clip-text text-transparent '>
          FYF Comercializadora
        </p>
      </header>

      <div className='bg-linear-to-b from-black from-0% via-sky-950 via-75% to-black to-100%'>
        <div
          id='inicio'
          className='text-white flex flex-wrap items-center justify-center px-6 md:px-48 py-20 md:py-64 gap-8 md:gap-12 bg-cover bg-center mask-b-from-30% mask-b-to-100%'
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url(${herramientasBg})` }}
        >
          <div className='w-full lg:w-1/2 text-center'>
            <h1 className='text-5xl font-bold leading-tight lg:text-4xl md:text-2xl sm:text-lg xs:text-xl'>
              Optimiza la gestión de tu ferretería
            </h1>
          </div>

          <div className='flex flex-wrap gap-4 justify-center'>
            <p className='text-xl leading-8 '>
              Controla tu inventario en tiempo real, registra ventas y anticipa la reposición de productos, integrando además ventas online.
            </p>
            <div className='flex flex-col lg:flex-row gap-4 justify-center items-center'>
              <a href='#problematica' className='transition-all hover:scale-110'>
                <Badge variant='default' shiny={true} className='font-bold bg-blue-700 px-4 py-2 border-2 border-blue-700 rounded-md hover:bg-red-300 transition-all hover:scale-110 text-white shadow-lg'>
                  Problematica
                </Badge>
              </a>
              <a href='#solucion' className='transition-all hover:scale-110'>
                <Badge variant='default' shiny={true} className='font-medium border-blue-600 px-4 py-2 border-2 rounded-md hover:bg-blue-300 transition-all hover:scale-110 text-blue-500 shadow-lg'>
                  Soluciones
                </Badge>
              </a>
              <a href='#problematica' className='transition-all hover:scale-110'>
                <Badge variant='default' shiny={true} className='font-bold bg-blue-700 px-4 py-2 border-2 border-blue-700 rounded-md hover:bg-green-300 transition-all hover:scale-110 text-white shadow-lg'>
                  Funcionalidades
                </Badge>
              </a>
              <a href='#solucion' className='transition-all hover:scale-110'>
                <Badge variant='default' shiny={true} className='font-medium border-blue-600 px-4 py-2 border-2 rounded-md hover:bg-yellow-300 transition-all hover:scale-110 text-blue-500 shadow-lg'>
                  Beneficio
                </Badge>
              </a>
            </div>
          </div>
        </div>

        <div id='problematica' className='text-center py-12 px-6 md:px-16 lg:px-48 gap-8 mt-28'>
          <h2 className='text-white text-3xl font-bold mb-4'>Problemas en la gestión de inventario y ventas por uso limitado de sistemas</h2>
          <p className='text-gray-300 max-w-xl mx-auto text-center'>La gestión actual de la ferretería presenta deficiencias en el control de inventario y ventas, con procesos manuales que generan errores, pérdida de información y limitan su crecimiento.</p>

          <div className='text-start flex flex-col flex-wrap gap-4 mt-8'>
            <div className='bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-0 hover:scale-104 shadow-lg'>
              <span>
                <MdInventory className='size-8 text-red-800'/>
              </span>
              <div>
                <h3 className='text-white text-lg font-semibold flex flex-row gap-4 mb-2'>
                  Falta de precisión en el control de stock
                </h3>
                <p className='text-gray-400'>
                  El control de inventario no se realiza de manera adecuada, lo que genera información inconsistente sobre la disponibilidad de productos. Esto provoca pérdidas de ventas, sobrestock o quiebres de inventario debido a reposiciones realizadas de forma manual.
                </p>
              </div>
            </div>

            <div className='bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-0 hover:scale-104 shadow-lg'>
                <span>
                  <MdAnalytics className='size-8 text-red-800'/>
                </span>
                <div>
                  <h3 className='text-white text-lg font-semibold flex flex-row gap-4 mb-2'>
                    Baja capacidad de análisis
                  </h3>
                  <p className='text-gray-400'>
                    El sistema actual no permite analizar correctamente la información de ventas, dificultando identificar productos más vendidos, patrones de consumo y resultados del negocio. Esto limita la toma de decisiones y aumenta el riesgo de errores.
                  </p>
                </div>
            </div>

            <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-0 hover:scale-104 shadow-lg">
              <span>
                <FaCogs className='size-8 text-red-800'/>
              </span>
              <div>
                <h3 className="text-white text-lg font-semibold flex flex-row gap-4 mb-2">
                  Procesos poco optimizados
                </h3>
                <p className="text-gray-400">
                  La gestión del negocio presenta un bajo nivel de automatización, lo que implica realizar tareas de forma manual. Esto reduce la eficiencia operativa y aumenta la probabilidad de errores en los procesos diarios.
                </p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-0 hover:scale-104 shadow-lg">
              <span>
                <BsCartX className='size-8 text-red-800'/>
              </span>
              <div>
                <h3 className="text-white text-lg font-semibold flex flex-row gap-4 mb-2">
                  Ausencia de un apartado de ventas online
                </h3>
                <p className="text-gray-400">
                  La ferretería no cuenta con una plataforma de ventas online, lo que limita su alcance y reduce sus oportunidades de crecimiento en un mercado cada vez más digital.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id='solucion'
          className='text-white flex flex-row justify-center border-t-2 border-t-gray-700 px-6 md:px-16 lg:px-24 py-32 bg-cover bg-center mask-y-from-75% mask-y-to-100% mt-30'
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.70)), url(${Fondo})` }}
        >
          <div className='text-center py-12 flex flex-col justify-center'>
            <h2 className='text-white text-4xl font-bold'>Solución propuesta</h2>
            <p className='text-gray-300 max-w-xl mx-auto text-center py-4'>Se propone el desarrollo de un sistema web orientado a optimizar la gestión de inventario y ventas en la ferretería, permitiendo mejorar el control de productos y apoyar la toma de decisiones mediante el uso de información.</p>

            <div className='text-start grid grid-cols-1 md:grid-cols-2 mt-8 py-8 px-0 md:px-12 lg:px-24 gap-5'>
              <div className='bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-0 hover:scale-104 shadow-lg'>
                <span>
                  <MdInventory className='size-8 text-blue-800'/>
                </span>
                <div>
                  <h3 className='text-white text-lg font-semibold flex flex-row gap-4 mb-2'>
                    Control de inventario en tiempo real
                  </h3>
                  <p className='text-gray-400'>
                    Permite conocer la disponibilidad de productos de forma precisa y actualizada, evitando quiebres de stock o sobreinventario.
                  </p>
                </div>
              </div>

              <div className='bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-0 hover:scale-104 shadow-lg'>
                <span>
                  <MdAnalytics className='size-8 text-blue-800'/>
                </span>
                <div>
                  <h3 className='text-white text-lg font-semibold flex flex-row gap-4 mb-2'>
                    Análisis de ventas y Predicción de stock
                  </h3>
                  <p className='text-gray-400'>
                    Entrega información clara sobre productos más vendidos y comportamiento de compra, facilitando la toma de decisiones, sugiriendo reposiciones y anticipando la demanda de productos.
                  </p>
                </div>
              </div>

              <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-0 hover:scale-104 shadow-lg">
                <span>
                  <FaCogs className='size-8 text-blue-800'/>
                </span>
                <div>
                  <h3 className="text-white text-lg font-semibold flex flex-row gap-4 mb-2">
                    Automatización de procesos
                  </h3>
                  <p className="text-gray-400">
                    Reduce tareas manuales y errores, mejorando la eficiencia operativa del negocio.
                  </p>
                </div>
              </div>

              <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-0 hover:scale-104 shadow-lg">
                <span>
                  <FaShoppingCart className='size-8 text-blue-800'/>
                </span>
                <div>
                  <h3 className="text-white text-lg font-semibold flex flex-row gap-4 mb-2">
                    Ventas online
                  </h3>
                  <p className="text-gray-400">
                    Incorpora una plataforma digital para ampliar el alcance del negocio y aumentar las oportunidades de venta.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
        </div>

        <div id='funcionalidades' className='flex justify-center py-48 text-center flex-col gap-38 -mt-20'>
          <h2 className='text-4xl font-bold text-white'>
            ¿Qué permite el sistema?
          </h2>
          <div className='flex flex-row flex-wrap justify-center gap-15 mt-8'>
            <div className='flex flex-col justify-center gap-7'>
              <div className='flex justify-center'>
                <span className='inline-flex transition-transform duration-300 hover:-translate-y-1 hover:scale-110 active:scale-100'>
                  <ShelvingUnit className='size-14 text-blue-500 transition-colors duration-300 hover:text-green-500 active:text-green-500'/>
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-white text-lg'>
                  Gestión de inventario
                </h3>
                <p className='text-gray-300 max-w-lg'>
                  Control y visualización de productos en tiempo real, permitiendo conocer la disponibilidad exacta del stock.
                </p>
              </div>
            </div>
            <div className='flex flex-col justify-center gap-7'>
              <div className='flex justify-center'>
                <span className='inline-flex transition-transform duration-300 hover:-translate-y-1 hover:scale-110 active:scale-100'>
                  <NotebookPen className='size-14 text-blue-500 transition-colors duration-300 hover:text-green-500 active:text-green-500'/>
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-white text-lg'>
                  Registro de ventas
                </h3>
                <p className='text-gray-300 max-w-lg'>
                  Permite registrar y organizar las ventas del negocio, facilitando el control de ingresos.
                </p>
              </div>
            </div>
            <div className='flex flex-col justify-center gap-7'>
              <div className='flex justify-center'>
                <span className='inline-flex transition-transform duration-300 hover:-translate-y-1 hover:scale-110 active:scale-100'>
                  <ChartNoAxesCombined className='size-14 text-blue-500 transition-colors duration-300 hover:text-green-500 active:text-green-500'/>
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-white text-lg'>
                  Análisis de ventas
                </h3>
                <p className='text-gray-300 max-w-lg'>
                  Entrega información sobre productos más vendidos y comportamiento de compra, mejorando la toma de decisiones.
                </p>
              </div>
            </div>
          </div >
          <div className='flex flex-col md:flex-row justify-center gap-15 mt-8'>
            <div className='flex flex-col justify-center gap-7'>
              <div className='flex justify-center'>
                <span className='inline-flex transition-transform duration-300 hover:-translate-y-1 hover:scale-110 active:scale-100'>
                  <Boxes className='size-14 text-blue-500 transition-colors duration-300 hover:text-green-500 active:text-green-500'/>
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-white text-lg'>
                  Predicción de stock
                </h3>
                <p className='text-gray-300 max-w-lg'>
                  Sugiere reposiciones basadas en el historial de ventas, anticipando la demanda de productos.
                </p>
              </div>
            </div>
            <div className='flex flex-col justify-center gap-7'>
              <div className='flex justify-center'>
                <span className='inline-flex transition-transform duration-300 hover:-translate-y-1 hover:scale-110 active:scale-100'>
                  <Store className='size-14 text-blue-500 transition-colors duration-300 hover:text-green-500 active:text-green-500'/>
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-white text-lg'>
                  Ventas online
                </h3>
                <p className='text-gray-300 max-w-lg'>
                  Permite ofrecer productos a través de una plataforma digital, ampliando el alcance del negocio.
                </p>
              </div>
            </div>
            <div className='flex flex-col justify-center gap-7'>
              <div className='flex justify-center'>
                <span className='inline-flex transition-transform duration-300 hover:-translate-y-1 hover:scale-110 active:scale-100'>
                  <Columns3Cog className='size-14 text-blue-500 transition-colors duration-300 hover:text-green-500 active:text-green-500'/>
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-white text-lg'>
                  Automatización de procesos
                </h3>
                <p className='text-gray-300 max-w-lg'>
                  Reduce tareas manuales y errores, optimizando la gestión operativa del negocio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id='beneficios' className='flex flex-col lg:flex-row items-center justify-center px-7 md:px-16 lg:px-38 py-12 gap-5'>
          <div className='w-full lg:w-1/2 flex justify-center'>
              <img
                src={Beneficio}
                alt='Beneficios del sistema'
                className='max-h-250 w-[90%] rounded-[2.5rem] object-contain'
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at center 42%, black 30%, transparent 100%)',
                  maskImage: 'radial-gradient(circle at center 42%, black 62%, transparent 100%)',
                }}
              />
          </div>
          
          <div className='flex-col justify-center -mt-8'>
            <h2 className='text-white text-4xl font-bold py-10'>
              Ventajas de la solución propuesta
            </h2>
            <div className='text-white text-lg mt-3 space-y-1 flex flex-col sm:flex-row gap-4 sm:gap-7 border-b border-white/30 pb-6'>
              <span>
                <Icon icon="gcp:container-registry" className='size-16 sm:size-24' />
              </span>
              <div className='flex flex-col gap-1'>
                <h3 className='text-2xl font-semibold text-blue-400'>
                  Mejor control de inventario
                </h3>
                <p className='text-gray-300 leading-8'>
                  Permite conocer la disponibilidad de productos en tiempo real, evitando pérdidas, sobrestock y quiebres de inventario.
                </p>
              </div>
            </div>
            <div className='text-white text-lg mt-3 space-y-1 flex flex-col sm:flex-row gap-4 sm:gap-7 border-b border-white/30 pb-6'>
              <span>
                <Icon icon="gcp:gce-systems-management" className='size-16 sm:size-24' />
              </span>
              <div className='flex flex-col gap-1'>
                <h3 className='text-2xl font-semibold text-blue-400'>
                  Reducción de errores operativos
                </h3>
                <p className='text-gray-300 leading-8'>
                  Disminuye los errores en la gestión diaria mediante la automatización de procesos y el uso de información centralizada.
                </p>
              </div>
            </div>
            <div className='text-white text-lg mt-3 space-y-1 flex flex-col sm:flex-row gap-4 sm:gap-7 border-b border-white/30 pb-6'>
              <span>
                <Icon icon="gcp:os-inventory-management" className='size-16 sm:size-24' />
              </span>
              <div className='flex flex-col gap-1'>
                <h3 className='text-2xl font-semibold text-blue-400'>
                  Mejor toma de decisiones
                </h3>
                <p className='text-gray-300 leading-8'>
                  Entrega información clara y actualizada sobre ventas y productos, facilitando decisiones más precisas.
                </p>
              </div>
            </div>
            <div className='text-white text-lg mt-3 space-y-1 flex flex-col sm:flex-row gap-4 sm:gap-7 border-b border-white/30 pb-6'>
              <span>
                <Icon icon="gcp:cloud-deployment-manager" className='size-16 sm:size-24' />
              </span>
              <div className='flex flex-col gap-1'>
                <h3 className='text-2xl font-semibold text-blue-400'>
                  Mayor eficiencia operativa
                </h3>
                <p className='text-gray-300 leading-8'>
                  Optimiza los procesos del negocio, reduciendo el tiempo dedicado a tareas manuales.
                </p>
              </div>
            </div>
            <div className='text-white text-lg mt-3 space-y-1 flex flex-col sm:flex-row gap-4 sm:gap-7 border-b border-white/30 pb-6'>
              <span>
                <Icon icon="gcp:retail-api" className='size-16 sm:size-24' />
              </span>
              <div className='flex flex-col gap-1'>
                <h3 className='text-2xl font-semibold text-blue-400'>
                  Aumento de ventas
                </h3>
                <p className='text-gray-300 leading-8'>
                  Permite ampliar las oportunidades de venta mediante la incorporación de una plataforma online.
                </p>
              </div>
            </div>
            <div className='text-white text-lg mt-3 space-y-1 flex flex-col sm:flex-row gap-4 sm:gap-7 border-b border-white/30 pb-6'>
              <span>
                <Icon icon="gcp:cloud-optimization-ai-fleet-routing-api" className='size-16 sm:size-24' />
              </span>
              <div className='flex flex-col gap-1'>
                <h3 className='text-2xl font-semibold text-blue-400'>
                  Mayor alcance del negocio
                </h3>
                <p className='text-gray-300 leading-8'>
                  Facilita el acceso de nuevos clientes, aumentando la competitividad en el mercado digital.
                </p>
              </div>
            </div>          
          </div>
        </div>

        <footer className='mt-48 border-t border-gray-800 text-gray-300 px-6 sm:px-16 lg:px-24 py-30'>
          <div className='mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-3'>
            <div className='space-y-4'>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-blue-400'>
                Proyecto
              </p>
              <h3 className='text-2xl font-bold text-white'>
                Sistema de gestion para ferreterias
              </h3>
              <p className='max-w-md text-sm leading-7 text-gray-400'>
                Proyecto orientado a mejorar la gestion de inventario, ventas y toma de decisiones mediante herramientas digitales.
              </p>
            </div>

            <div className='space-y-4'>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-blue-400'>
                Navegacion
              </p>
              <nav className='flex flex-col gap-3 text-sm'>
                <a href='#inicio' className='transition-colors duration-300 hover:text-blue-400'>
                  Inicio
                </a>
                <a href='#problematica' className='transition-colors duration-300 hover:text-blue-400'>
                  Problematica
                </a>
                <a href='#solucion' className='transition-colors duration-300 hover:text-blue-400'>
                  Solucion
                </a>
                <a href='#funcionalidades' className='transition-colors duration-300 hover:text-blue-400'>
                  Funcionalidades
                </a>
                <a href='#beneficios' className='transition-colors duration-300 hover:text-blue-400'>
                  Beneficios
                </a>
              </nav>
            </div>

            <div className='space-y-4'>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-blue-400'>
                Contacto
              </p>
              <div className='space-y-3 text-sm leading-7 text-gray-400'>
                <p>
                  <span className='font-semibold text-white'>Empresa:</span> Comercializadora FYF SpA
                </p>
                <p>
                  <span className='font-semibold text-white'>Responsable:</span> Fernando Octavio Fernandez Luna
                </p>
                <p>
                  <span className='font-semibold text-white'>Correo:</span> fernandez.fernan2@gmail.com
                </p>
                <p>
                  <span className='font-semibold text-white'>Ubicacion:</span> Santa Juana
                </p>
              </div>
            </div>
          </div>

          <div className='mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6'>
            <div className='flex flex-col items-center justify-between gap-3 text-center text-xs text-gray-500 md:flex-row'>
              <p>© 2026 Proyecto de Titulo - Universidad del Bio-Bio</p>
              <p>Desarrollado para Comercializadora FYF SpA</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
