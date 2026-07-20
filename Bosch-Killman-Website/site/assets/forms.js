/* ============================================================
   BKV — Clio Grow public intake form links.
   One entry per practice area. As each form goes live in Clio,
   paste its "Copy link to public form" URL here.
   Any area still set to FALLBACK uses the Business form so no
   button dead-ends (demo safety net). Replace before launch.
   ============================================================ */
const FALLBACK = "https://boschkillman.cliogrow.com/intake/f7ab82f7b62379ec58de0203fb3dc307";

const FORM_LINKS = {
  "Business":        "https://boschkillman.cliogrow.com/intake/f7ab82f7b62379ec58de0203fb3dc307",
  "Litigation":      FALLBACK,
  "Estate Planning": FALLBACK,
  "Family Law":      FALLBACK,
  "Criminal":        FALLBACK,
  "Real Estate":     FALLBACK,
  "Personal Injury": FALLBACK,
  "Collection":      FALLBACK,
  "Environmental":   FALLBACK,
  "Mediation":       FALLBACK
};

/* Routing map — mirrors docs/clio-configuration-guide.md.
   Personal Injury alternates between two attorneys (client-side
   round-robin for now; server-side at production launch). */
const ROUTES = {
  "Business":        [{name:"Julian J. Heidenreich", initials:"JH", focus:"Business"}],
  "Litigation":      [{name:"Julian J. Heidenreich", initials:"JH", focus:"Litigation"}],
  "Estate Planning": [{name:"Jason Osbourn",         initials:"JO", focus:"Estate Planning & Probate"}],
  "Family Law":      [{name:"Kara Beurkens",         initials:"KB", focus:"Family Law"}],
  "Criminal":        [{name:"Kara Beurkens",         initials:"KB", focus:"Criminal Law"}],
  "Real Estate":     [{name:"Julian J. Heidenreich", initials:"JH", focus:"Real Estate"}],
  "Personal Injury": [{name:"Julian J. Heidenreich", initials:"JH", focus:"Personal Injury"},
                      {name:"Andrea Remynse Koop",   initials:"AK", focus:"Personal Injury"}],
  "Collection":      [{name:"Nicholas C. Rizzo",     initials:"NR", focus:"Collections"}],
  "Environmental":   [{name:"Peter D. Bosch",        initials:"PB", focus:"Environmental Law"}],
  "Mediation":       [{name:"Kurt R. Killman",       initials:"KK", focus:"Mediation & Dispute Resolution"}]
};
