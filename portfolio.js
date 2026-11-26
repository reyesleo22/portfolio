"use strict";
const copy = {
 skip:['Skip to content','Saltar al contenido'], projects:['Projects','Proyectos'], experience:['Experience','Experiencia'],
 role:['DATA ANALYST · ELECTRONICS ENGINEER','ANALISTA DE DATOS · INGENIERÍA ELECTRÓNICA'],
 lead:['I turn operational data into clear recommendations, from evaluating acquisition channels to testing which changes improve conversion.','Convierto datos operativos en recomendaciones claras, desde evaluar canales de adquisición hasta probar qué cambios mejoran la conversión.'],
 explore:['Explore projects ↘','Explorar proyectos ↘'], viewCv:['View résumé','Ver CV'],
 method:['How I work with data','Cómo trabajo con datos'], prepare:['Prepare','Preparar'], prepareD:['Query, clean, and validate records.','Consultar, limpiar y validar registros.'],
 analyze:['Analyze','Analizar'], analyzeD:['Compare metrics and test hypotheses.','Comparar métricas y probar hipótesis.'],
 explain:['Communicate','Comunicar'], explainD:['Visualize findings and recommend actions.','Visualizar hallazgos y recomendar acciones.'], stats:['Statistics','Estadística'],
 selected:['Selected work','Proyectos destacados'], projectsD:['Case studies in marketing, experimentation, and game development.','Casos de análisis de marketing, experimentación y desarrollo de videojuegos.'],
 all:['All','Todos'], data:['Data analytics','Análisis de datos'], games:['Games','Videojuegos'],
 github:['Browse more projects on GitHub ↗','Ver más proyectos en GitHub ↗'], skills:['Technical skills','Habilidades técnicas'], education:['Education','Formación'],
 resume:['Résumé','Currículum'], resumeD:['Review my experience, education, and selected projects in a one-page PDF.','Consulta mi experiencia, formación y proyectos destacados en un PDF de una página.'],
 open:['Open résumé ↗','Abrir CV ↗'], download:['Download PDF','Descargar PDF'], preview:['Preview résumé','Vista previa del CV'],
 details:['Case details','Detalles del proyecto'], notebook:['Open notebook ↗','Abrir cuaderno ↗'], repo:['GitHub repository ↗','Repositorio en GitHub ↗']
};
const work = [
 {type:'data',image:'showz.webp',alt:['Event tickets and coins representing customer acquisition costs','Boletos y monedas que representan costos de adquisición de clientes'],title:['Showz marketing analytics','Análisis de marketing para Showz'],
  description:['How should a ticketing company allocate its marketing budget across acquisition channels?','¿Cómo debería distribuir su presupuesto de marketing una empresa de venta de entradas?'],
  detail:['I prepared visits, orders, and cost datasets, then compared acquisition costs and returns by channel to support budget recommendations.','Preparé datos de visitas, pedidos y costos. Comparé el costo de adquisición y el retorno por canal para orientar la distribución del presupuesto.'],
  tags:['Python','pandas','CAC','ROMI'], notebook:'proyects/proyecto_9.html',repo:'Analisis-de-Marketing-para-Showz'},
 {type:'data',image:'ab-test.webp',alt:['Two storefronts representing the groups in an A/B test','Dos tiendas que representan los grupos de una prueba A/B'],title:['Online store A/B test','Prueba A/B para una tienda en línea'],
  description:['Which hypotheses deserve priority, and what do the results say about conversion and order size?','¿Qué hipótesis conviene priorizar y qué revelan los resultados sobre conversión y tamaño de pedido?'],
  detail:['I ranked hypotheses with ICE and RICE, checked outliers, and applied the Mann–Whitney U test to assess differences between groups.','Priorizé hipótesis con ICE y RICE, revisé valores atípicos y apliqué la prueba U de Mann–Whitney para evaluar diferencias entre grupos.'],
  tags:['Python','SciPy','ICE / RICE'],notebook:'proyects/proyecto_10.html',repo:'Analisis-A-B-para-Tienda-Online'},
 {type:'data',image:'callmemaybe.webp',alt:['Headset and call activity in a telephony operations illustration','Audífonos y actividad de llamadas en una ilustración de operaciones telefónicas'],title:['CallMeMaybe operations','Operaciones de CallMeMaybe'],
  description:['An analysis of missed calls, wait times, and operator performance in virtual telephony.','Análisis de llamadas perdidas, tiempos de espera y desempeño de operadores en telefonía virtual.'],
  detail:['I explored call logs, combined operational indicators, and used statistical tests and visualizations to communicate patterns to supervisors.','Exploré registros de llamadas, combiné indicadores operativos y utilicé pruebas estadísticas y visualizaciones para comunicar patrones a supervisores.'],
  tags:['Python','EDA','Dashboards'],notebook:'proyects/proyecto_14.html'},
 {type:'data',image:'model-fitness.webp',alt:['Gym equipment and membership cards representing client retention','Equipo de gimnasio y tarjetas de membresía que representan la retención de clientes'],title:['Model Fitness retention','Retención en Model Fitness'],
  description:['Which membership and activity patterns are associated with customer churn?','¿Qué patrones de afiliación y actividad se relacionan con el abandono de clientes?'],
  detail:['I explored member activity and contract duration, then applied logistic regression and random forest models to identify segments at higher risk of churn.','Exploré la actividad y la duración de los contratos. Apliqué regresión logística y bosque aleatorio para identificar segmentos con mayor riesgo de abandono.'],
  tags:['Python','EDA','Classification'],notebook:'proyects/proyecto_13.html'},
 {type:'data',image:'conversion.webp',alt:['Shopping cart and payment card illustrating the checkout journey','Carrito de compras y tarjeta de pago que ilustran el recorrido de compra'],title:['User behavior and conversion','Comportamiento y conversión'],
  description:['A conversion funnel and an A/A/B test for a food e-commerce app.','Embudo de conversión y experimento A/A/B para una app de comercio electrónico.'],
  detail:['I mapped the path from the home screen to payment and evaluated whether a font change affected behavior. The test found no statistically significant difference.','Analicé el recorrido desde la pantalla principal hasta el pago y evalué si un cambio tipográfico afectaba el comportamiento. La prueba no encontró diferencias estadísticamente significativas.'],
  tags:['Python','Funnels','A/A/B'],notebook:'proyects/proyecto_11.html'},
 {type:'data',image:'voter-turnout.webp',alt:['Ballots and a ballot box alongside abstract electoral boundaries','Papeletas y urna junto a límites electorales abstractos'],title:['Voter turnout analysis','Análisis de participación electoral'],
  description:['A precinct-level review of electoral participation using data from Mexico’s National Electoral Institute.','Revisión de la participación por sección electoral con datos del Instituto Nacional Electoral.'],
  detail:['I identified areas with low turnout and proposed targeted actions based on where participation was lowest.','Identifiqué zonas con menor participación y propuse acciones focalizadas a partir de los resultados.'],
  tags:['INE','EDA']},
 {type:'games',image:'starcore-cover.webp',alt:['Starcore Overdrive title artwork','Imagen de inicio de Starcore Overdrive'],title:['Starcore Overdrive','Starcore Overdrive'],
  description:['A mobile tower defense game with a reproducible testing environment for difficulty and balance.','Juego móvil de defensa de torres con un laboratorio reproducible para ajustar dificultad y balance.'],
  detail:['The lab varies difficulty across simulations, compares win rates, and exports CSV and JSON results for review.','El laboratorio varía la dificultad entre simulaciones, compara tasas de victoria y exporta resultados en CSV y JSON.'],
  tags:['Godot','GDScript','CSV / JSON']},
 {type:'games',image:'clear-mind.webp',alt:['Clear Mind title artwork with cards and dice','Portada de Clear Mind con cartas y dados'],title:['Clear Mind','Clear Mind'],
  description:['A turn-based combat prototype combining cards and dice.','Prototipo de combate por turnos que combina cartas y dados.'],
  detail:['Automated tests check the combat rules. Structured JSON reports record each turn so outcomes can be inspected and traced.','Las pruebas automatizadas verifican las reglas de combate. Los reportes JSON registran cada turno para inspeccionar y rastrear los resultados.'],
  tags:['Godot','GDScript','Automated tests']},
 {type:'games',image:'dreadforge-cover.webp',alt:['Dreadforge title artwork','Portada de Dreadforge'], screenshot:'dreadforge.webp',title:['Dreadforge','Dreadforge'],
  description:['A 2D Godot game with procedurally generated maps and Android controls.','Videojuego 2D en Godot con mapas generados por semilla y controles para Android.'],
  detail:['The game combines room-by-room progression, boss encounters, configurable touch controls, and persistent progression.','Combina progresión por salas, combates contra jefes, controles táctiles configurables y guardado de progreso.'],
  tags:['Godot','Android','Procedural generation']}
];
const roles = [
 [['Membership and Database Manager','Responsable de Afiliación y Base de Datos'],'Nueva Alianza',['Jan 2018 – 2026','Ene 2018 – 2026'],['Managed membership records and coordinated reviews and updates with the team to keep the database accurate and current.','Administré los registros de afiliación y coordiné su revisión y actualización con el equipo para mantener la base de datos precisa y al día.']],
 [['IT Technician','Técnico de TI'],'CBTIS 120',['Sep 2013 – Present','Sep 2013 – Actualidad'],['Maintain computer equipment and troubleshoot hardware, software, and connectivity for staff and students.','Doy mantenimiento a equipos de cómputo y resuelvo incidencias de hardware, software y conectividad para personal y estudiantes.']],
 [['Mathematics and Robotics Instructor','Docente de Matemáticas y Robótica'],'IUNIS',['Jan 2018 – Dec 2020','Ene 2018 – Dic 2020'],['Taught mathematics and differential and integral calculus. Designed hands-on robotics activities centered on problem-solving.','Impartí matemáticas y cálculo diferencial e integral. Diseñé actividades prácticas de robótica centradas en la resolución de problemas.']]
];
const skills = [
 [['Data preparation','Preparación de datos'],['Query, clean and validate records with SQL, Python, R, Excel and Google Sheets. Document analyses in Jupyter.','Consulto, limpio y valido registros con SQL, Python, R, Excel y Google Sheets. Documento los análisis en Jupyter.']],
 [['Statistics and experimentation','Estadística y experimentación'],['Use exploratory analysis, descriptive statistics and A/B testing to assess differences and interpret results.','Aplico análisis exploratorio, estadística descriptiva y pruebas A/B para evaluar diferencias e interpretar resultados.']],
 [['Visualization and reporting','Visualización e informes'],['Build charts and reports with Power BI, Tableau, Matplotlib, Seaborn, Plotly and Streamlit.','Construyo visualizaciones e informes con Power BI, Tableau, Matplotlib, Seaborn, Plotly y Streamlit.']]
];
const education = [
 ['Electronics Engineering · Instituto Tecnológico de Mérida (2010–2015)','Ingeniería Electrónica · Instituto Tecnológico de Mérida (2010–2015)'],
 ['Data Analytics Program · TripleTen (2024–2025)','Programa de Análisis de Datos · TripleTen (2024–2025)'],
 ['Specialization in Teaching · Universidad Autónoma de Yucatán (2017)','Especialización en Docencia · Universidad Autónoma de Yucatán (2017)']
];
let language = 0;
let filter = 'all';
const tr = key => copy[key][language];
const content = (tag, value, cls) => {
 const element = document.createElement(tag);
 element.textContent = value;
 if (cls) element.className = cls;
 return element;
};
function projectLink(label, href) {
 const link = content('a', tr(label));
 link.href = href;
 link.target = '_blank';
 link.rel = 'noopener';
 return link;
}
function renderCards() {
 const cards = work.filter(project => filter === 'all' || project.type === filter).map(project => {
  const card = content('article', '', project.type === 'games' ? 'card game' : 'card');
  const art = content('div', '', 'art');
  const cover = document.createElement('img');
  cover.src = 'assets/' + project.image;
  cover.alt = project.alt[language];
  cover.loading = 'lazy';
  art.append(cover);
  const body = content('div', '', 'card-body');
  const tags = content('ul', '', 'tags');
  tags.append(...project.tags.map(tag => content('li', language === 1 ? ({Classification:'Clasificación',Funnels:'Embudos','Automated tests':'Pruebas automatizadas','Procedural generation':'Generación procedural'})[tag] || tag : tag)));
  const detail = document.createElement('details');
  detail.append(content('summary', tr('details')),content('p',project.detail[language]));
  if (project.screenshot) {
   const screenshot = document.createElement('img');
   screenshot.src = 'assets/' + project.screenshot;
   screenshot.alt = language ? 'Captura de un combate contra un jefe en Dreadforge' : 'Screenshot of a boss encounter in Dreadforge';
   screenshot.loading = 'lazy';
   screenshot.className = 'project-screenshot';
   detail.append(screenshot);
  }
  const links = content('div', '', 'project-links');
  if (project.notebook) links.append(projectLink('notebook',project.notebook));
  if (project.repo) links.append(projectLink('repo','https://github.com/reyesleo22/' + project.repo));
  body.append(content('h3',project.title[language]),content('p',project.description[language]),tags,detail);
  if (links.childElementCount) body.append(links);
  card.append(art, body);
  return card;
 });
 document.querySelector('#cards').replaceChildren(...cards);
}
function renderPage() {
 document.documentElement.lang = language ? 'es' : 'en';
 document.title = 'Reyes Leo · ' + (language ? 'Analista de Datos' : 'Data Analyst');
 document.querySelectorAll('[data-i]').forEach(el => el.textContent = tr(el.dataset.i));
 document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === document.documentElement.lang)));
 document.querySelector('nav').setAttribute('aria-label', language ? 'Portafolio' : 'Portfolio');
 document.querySelector('.filters').setAttribute('aria-label',language ? 'Filtros de proyectos' : 'Project filters');
 document.querySelector('.languages').setAttribute('aria-label',language ? 'Idioma' : 'Language');
 document.querySelector('#timeline').replaceChildren(...roles.map(([title,org,date,detail]) => {
  const entry = content('article','','entry');
  entry.append(content('p',org+' · '+date[language],'date'), content('h3',title[language]), content('p',detail[language]));
  return entry;
 }));
 document.querySelector('#skills').replaceChildren(...skills.map(([label,detail]) => {
  const group = document.createElement('div');
  group.append(content('strong',label[language]), content('p',detail[language]));
  return group;
 }));
 document.querySelector('#education').replaceChildren(...education.map(row => content('li',row[language])));
 document.querySelector('#spoken').textContent = language ? 'Español nativo · Inglés avanzado' : 'Native Spanish · Advanced English';
 const code = language ? 'ES' : 'EN';
 const pdf = 'assets/Reyes-Leo-CV-' + code + '.pdf';
 document.querySelector('#cv-open').href = pdf;
 const download = document.querySelector('#cv-download');
 download.href = pdf;
 download.download = 'Reyes Leo CV - ' + code + '.pdf';
 const frame = document.querySelector('#cv-frame');
 frame.title = language ? 'Vista previa del CV' : 'Résumé preview';
 if (document.querySelector('#preview').open) frame.setAttribute('src',pdf);
 else frame.removeAttribute('src');
 renderCards();
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
 language = button.dataset.lang === 'es' ? 1 : 0;
 renderPage();
}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 filter = button.dataset.filter;
 document.querySelectorAll('[data-filter]').forEach(control => control.setAttribute('aria-pressed',String(control===button)));
 renderCards();
}));
document.querySelector('#preview').addEventListener('toggle',event => {
 if (event.target.open) document.querySelector('#cv-frame').src = document.querySelector('#cv-open').href;
});
renderPage();
