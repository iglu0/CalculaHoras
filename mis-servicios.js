// ═══════════════════════════════════════════════════════════════════════
// MIS SERVICIOS — registro personal de servicios asignados
// Lo lee la sección "Consultar mis servicios" de detalle-servicios.html
// ═══════════════════════════════════════════════════════════════════════
// CHANGELOG
//   v1 — 4 Oct 2026
//     Plantilla inicial con el formato de la lista.
//
//   Este archivo se edita seguido: NO hace falta una entrada de changelog
//   ni un nombre nuevo cada vez que agregas un servicio. Solo se versiona
//   si cambia el formato. Al subirlo al repositorio, llámalo
//   mis-servicios.js (sin versión): detalle-servicios.html lo busca con
//   ese nombre exacto.
// ═══════════════════════════════════════════════════════════════════════
//
// CÓMO AGREGAR SERVICIOS
//   Una línea por servicio, con tres campos separados por coma:
//
//       servicio, fecha, documento
//
//   - servicio:  código del servicio (ej. 51102, 511R1).
//   - fecha:     DD-MM-AAAA (ej. 04-10-2026). También se acepta AAAA-MM-DD.
//   - documento: de qué documento sale el servicio (obligatorio):
//                  DL = Lunes a Jueves
//                  DV = Viernes
//                  DS = Sábado
//                  DF = Domingo y Feriados
//                (un feriado que cae en día de semana usa DF)
//
//   Otras reglas:
//   - Descanso (opcional):  R, 05-10-2026
//   - Comentarios: todo lo que va después de "#" se ignora.
//   - Las líneas vacías se ignoran, y el orden no importa.
//   - La lista va entre comillas invertidas (`) y termina con punto y coma
//     (;). No escribas comillas invertidas dentro de la lista.
//   - Si una línea tiene un error, la página la ignora y te avisa cuál es.
//
// Ejemplos (quita el "#" del inicio para probarlos):
//   # 51102, 04-10-2026, DF
//   # 51104, 05-10-2026, DL
//   # 52254, 06-10-2026, DL
//   # R, 07-10-2026
//   # 51101, 09-10-2026, DV
//   # 51102, 12-10-2026, DF     (feriado en día de semana)
// ═══════════════════════════════════════════════════════════════════════

const MIS_SERVICIOS = `
# ── Octubre 2026 ──
52246, 05-10-2026, DL
52243, 06-10-2026, DL
51254, 07-10-2026, DL
52201, 08-10-2026, DL
52247, 09-10-2026, DV
R, 10-10-2026
R, 11-10-2026
`;

