import React from "react";
import { Announcement } from "@civicactions/data-catalog-components";
import '../../i18n';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout';
import config from "../../assets/config";

const About = ({ path }) => {
  const { t, i18n } = useTranslation();

  return (
    <Layout title="About">
        <div className={`dc-page ${config.container}`}>
            <h1>{t('about.title')}</h1>
            <div className="dc-page-content row mb-5">
                <div class="col-md-9 col-sm-12">
                  <h2>Datos abiertos ¿por qué? y ¿para qué?</h2>
                  <p>El Portal de Datos Abiertos del Ayuntamiento de Cádiz es una herramienta que pone a disposición de la ciudadanía una serie de conjuntos de datos abiertos para que puedan ser utilizados, reutilizados y redistribuidos libremente por cualquier persona.</p>
                  <p>En este portal, el Ayuntamiento de Cádiz publica información de carácter público relativa a la gestión pública municipal y la pone a disposición de los ciudadanos y ciudadanas para que, por un lado, se pueda utilizar en la realización de estudios, investigaciones… etc, y, por otro, sirva para el desarrollo de nuevas aplicaciones que necesiten de esa información. Se trata de facilitar el acceso a datos públicos en bruto para su reutilización y que, al mismo tiempo, sirva para impulsar a un sector infomediario en crecimiento gracias al desarrollo de herramientas y servicios que tienen como base su uso. Porque los datos abiertos facilitan la emergencia de servicios asociados a la economía que transforman esta información en productos de valor social y económico siendo, de esta manera, un elemento clave para la innovación, la producción de conocimiento y, por tanto, favorecedor del crecimiento económico.</p>
                  <p>Estas son las dos vertientes que justifican la necesidad de la existencia de este Portal de Datos Abiertos municipal: la transparencia y el impacto que ésta tiene en el favorecimiento del desarrollo económico y social.</p>
                  <h2 className={"mt-5"}>Glosario</h2>
                  <p><strong>Catálogo de datos:</strong> Inventario de datos públicos (datasets) puestos a disposición de ciudadanos y empresas para su explotación.</p>
                  <p><strong>Conjunto de datos o dataset:</strong> Datos relacionados, convenientemente estructurados y organizados, de forma que puedan ser tratados (procesados) apropiadamente para obtener información.</p>
                  <p><strong>Dato:</strong> Una representación de hechos, conceptos o instrucciones de un modo formalizado, y adecuado para la comunicación, interpretación o procesamiento por medios automáticos o humanos.</p>
                  <p><strong>Datos abiertos:</strong> Son aquellos que cualquiera es libre de utilizar, reutilizar y redistribuir, con el único límite, en su caso, del requisito de atribución de su fuente o reconocimiento de su autoría.</p>
                  <p><strong>Datos enlazados (linked data):</strong> Los Datos Enlazados es la forma que tiene la Web Semántica de vincular los distintos datos que están distribuidos en la Web, de forma que se referencian de la misma forma que lo hacen los enlaces de las páginas web.</p>
                  <p><strong>Federar datos abiertos:</strong> Acción de publicar los datos abiertos de un organismo en otro superior para divulgar el acceso a los datos. Por ejemplo, una institución española puede federar sus datos abiertos en el portal estatal datos.gob.es y a su vez, éste último, en el portal europeo data.europa.eu.</p>
                  <p><strong>Formato legible por máquina:</strong> Formato de archivo estructurado que permita a las aplicaciones informáticas identificar, reconocer y extraer con facilidad datos específicos, incluidas las declaraciones fácticas y su estructura interna.</p>
                  <p><strong>Infomediario:</strong> Empresas que analizan y tratan información del sector público y/o privado para crear productos de valor añadido destinados a terceras empresas o ciudadanía en general sirviendo, entre otras funciones, para la toma eficaz de decisiones. Datos abiertos 65 14.</p>
                  <p><strong>Información (datos) del sector público:</strong> Son productos y servicios de información que han sido generados, creados, recolectados, procesados, preservados, mantenidos, diseminados o financiados por un gobierno o una institución pública, y que cumplen los requerimientos y restricciones legales pertinentes.</p>
                  <p><strong>Metadatos Datos que definen y describen otros datos:</strong> Es información estructurada que describe, explica o localiza un conjunto de datos, haciendo más sencillo la recuperación de información, utilización o administración de dicho conjunto de datos.</p>
                  <p><strong>Portal de datos abiertos:</strong> Se utiliza como sinónimo de catálogo de datos, si bien habitualmente el portal provee de servicios de descubrimiento más avanzados para complementar la tradicional interfaz de búsqueda de un catálogo.</p>
                  <p><strong>Repositorio de datos:</strong> Un servicio en línea de almacenamiento/hosting sin mecanismo de búsqueda. Puede ser tan sencillo como un servidor web con una carpeta y ficheros estáticos, sin un índice adicional o categorización, a excepción de una página principal para cada conjunto de datos.</p>
                  <p><strong>Reutilización de la información del sector público (RISP):</strong> Uso de documentos que obran en poder de las Administraciones y organismos del sector público, por personas físicas o jurídicas, con fines comerciales o no comerciales, siempre que dicho uso no constituya una actividad administrativa pública. Queda excluido de este concepto el intercambio de documentos entre Administraciones y organismos del sector público en el ejercicio de las funciones públicas que tengan atribuidas.</p>
                  <p><strong>Web semántica:</strong> Infraestructura de tecnologías y mecanismos que ofrece la posibilidad de definir, integrar, compartir y reutilizar información en la web entre distintas partes de forma automatizada en función de su significado.</p>
                  <hr />
                  <p><small>*Datos Abiertos: Guía estratégica para su puesta en marcha Conjuntos de datos mínimos a publicar. Realizado por el Grupo de Datos Abiertos de la FEMP. Red de Entidades Locales por la Transparencia y la Participación Ciudadana. Wolters Kluwer. Federación Española de Municipios y Provincias (FEMP), 2017</small></p>
                </div>
            </div>
        </div>
    </Layout>
  );
};

export default About;
