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
  "Insurance Defense": "practice/insurance-defense.html", /* direct-contact page, not a Clio form */
  "Litigation": "https://boschkillman.cliogrow.com/intake/cfa44ef45ca820f723ed5afca3209c2f",
  "Estate Planning": "https://boschkillman.cliogrow.com/intake/6d2915cea542d4a310ccbe7ca896d998",
  "Family Law": "https://boschkillman.cliogrow.com/intake/663a0f7a51c9323c78565306833950c6",
  "Criminal": "https://boschkillman.cliogrow.com/intake/b07076aa6cc47286bfa279194d15af0d",
  "Real Estate": "https://boschkillman.cliogrow.com/intake/8b0c3314ace8b535d47acb9043435914",
  "Personal Injury": "https://boschkillman.cliogrow.com/intake/aa04e5cb01b6a6e34b2e38318b264b43",
  "Collection": "https://boschkillman.cliogrow.com/intake/2e96aaf8fdf960d316e887f542931018",
  "Environmental":   FALLBACK,
  "Mediation":       FALLBACK
};

/* Routing map — mirrors docs/clio-configuration-guide.md.
   Personal Injury alternates between two attorneys (client-side
   round-robin for now; server-side at production launch). */
const ROUTES = {
  "Business":        [{name:"Julian J. Heidenreich", initials:"JH", focus:"Business"}],
  "Litigation":      [{name:"Julian J. Heidenreich", initials:"JH", focus:"Litigation"}],
  "Insurance Defense":[{name:"Julian J. Heidenreich", initials:"JH", focus:"Insurance Defense"}],
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
