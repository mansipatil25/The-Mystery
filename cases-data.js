// ============================================================
// CASE FILE ARCHIVE — THE BUREAU
// 20+ original mystery cases with suspects, evidence, locations
// ============================================================

const CASES = [
  {
    id: "001",
    code: "C-1147",
    title: "The Velvet Curtain",
    type: "murder",
    status: "closed",
    difficulty: "moderate",
    victim: "Lorraine Ashby, theatre owner, 54",
    location: "The Aldgate Playhouse",
    date: "March 3rd",
    teaser: "Found behind the stage curtain ten minutes before opening night. The show went on without her.",
    briefing: "Lorraine Ashby owned the Aldgate Playhouse for twenty-two years. She was found dead behind the velvet curtain, a single stab wound, forty minutes before her own revival of 'The Lower Depths' was set to open. The cast insists no one left their dressing rooms. The box office takings from the night before are missing.",
    suspects: [
      { name: "Desmond Hale", role: "Lead Actor", motive: "Lorraine planned to cancel the show and fire him over his drinking.", alibi: "Claims he was in his dressing room rehearsing lines alone.", guilty: false },
      { name: "Priya Nandan", role: "Stage Manager", motive: "Lorraine discovered Priya had been skimming the box office for months.", alibi: "Says she was checking the rigging in the fly tower.", guilty: true },
      { name: "Walter Crane", role: "Theatre Critic", motive: "Lorraine threatened to sue him for a ruinous review of his own play years prior.", alibi: "Was seated in the empty house, reviewing his notes.", guilty: false },
      { name: "Imogen Ashby", role: "Estranged Niece", motive: "Stands to inherit the Playhouse now that Lorraine is dead.", alibi: "Arrived at the theatre only after the body was found.", guilty: false }
    ],
    evidence: [
      { name: "Torn Ledger Page", detail: "A page ripped from the box office accounts, numbers altered in a second hand." },
      { name: "Rigging Rope Fibres", detail: "Fresh rope fibres found on the victim's cardigan, matching the fly tower lines." },
      { name: "Smudged Greasepaint", detail: "A greasepaint thumbprint on the curtain rail, not matching any cast member's registered shade." },
      { name: "Pawn Ticket", detail: "A pawnbroker's ticket for jewellery, dated the morning of the murder, found in a coat pocket." }
    ],
    solution: "Priya Nandan. The torn ledger and pawn ticket trace the stolen takings to her debts; the rigging fibres place her exactly where she claimed only to be checking ropes, close enough to slip backstage and silence Lorraine before the theft was discovered.",
    twist: "The greasepaint print belonged to Desmond — he'd snuck back to steal a flask of gin, not realizing he'd be a suspect."
  },
  {
    id: "002",
    code: "C-1152",
    title: "The Last Train to Greymoor",
    type: "missing",
    status: "closed",
    difficulty: "easy",
    victim: "Edwin Tate, railway clerk, 31 — missing",
    location: "Greymoor Station, 11:47pm service",
    date: "April 19th",
    teaser: "He boarded the last train home. He never stepped off it.",
    briefing: "Edwin Tate clocked out of the signal box at 11:40pm and boarded the last train to Greymoor. The conductor confirms he punched his ticket. He was not on the platform when the train arrived. His coat was found folded neatly on a seat, his pocket watch still ticking inside it.",
    suspects: [
      { name: "Conductor Birch", role: "Train Conductor", motive: "Edwin had reported him for falsifying timekeeping records.", alibi: "Was walking the carriages the entire route, as per his log.", guilty: false },
      { name: "Marta Tate", role: "Edwin's Wife", motive: "Discovered Edwin's affair with a coworker; large life insurance policy recently taken out.", alibi: "Was home, but no one can confirm it.", guilty: false },
      { name: "Hugh Sallow", role: "Fellow Signalman", motive: "Edwin was about to expose a signal-tampering scheme for insurance fraud on freight cars.", alibi: "Claims he was in the signal box the whole night, alone.", guilty: true }
    ],
    evidence: [
      { name: "Folded Coat", detail: "Too neatly folded for a man who'd simply vanished — suggests staging." },
      { name: "Mud on the Platform", detail: "A trail of fresh mud leads from the platform's edge toward the signal box, not the exits." },
      { name: "Torn Schedule Sheet", detail: "A freight schedule with several services circled, found stuffed behind a signal lever." },
      { name: "Spectacles", detail: "A cracked lens found near the tracks, prescription matching Edwin's." }
    ],
    solution: "Hugh Sallow lured Edwin off the train at the signal box under pretense of a 'final word,' to stop him reporting the fraud. The mud trail leads directly to Hugh's post, and the freight sheet is the evidence Edwin meant to hand over.",
    twist: "Edwin is alive — knocked unconscious and left in a freight car, found three towns over, very confused and very late for dinner."
  },
  {
    id: "003",
    code: "C-1160",
    title: "Orchids for the Dead",
    type: "murder",
    status: "closed",
    difficulty: "hard",
    victim: "Augustin Reyes, botanist, 67",
    location: "The Reyes Glasshouse Estate",
    date: "May 2nd",
    teaser: "Poisoned in his own glasshouse, surrounded by the rarest flowers in the country.",
    briefing: "Augustin Reyes cultivated the country's finest orchid collection. He was found slumped among his prized Vanda orchids, a teacup beside him, his lips faintly blue. The glasshouse was locked from the inside.",
    suspects: [
      { name: "Dr. Felicity Wren", role: "Personal Physician", motive: "Augustin was changing his will to cut her out as beneficiary.", alibi: "Says she left after their afternoon appointment, before the murder.", guilty: false },
      { name: "Tomas Reyes", role: "Estranged Son", motive: "Needed inheritance to settle gambling debts.", alibi: "Claims to have been at his club, confirmed by two witnesses.", guilty: false },
      { name: "Beatrix Lowe", role: "Head Gardener", motive: "Augustin planned to sell the estate and disband the gardens she'd built her life around.", alibi: "Was tending the east wing of the glasshouse, says she heard nothing.", guilty: true },
      { name: "Calloway Finch", role: "Rival Botanist", motive: "Bitter rivalry over a prize-winning hybrid orchid Augustin allegedly stole credit for.", alibi: "Was at a horticultural society dinner, well documented." }
    ],
    evidence: [
      { name: "Crushed Foxglove Petals", detail: "Foxglove, deadly in small doses, found ground into the teacup's residue." },
      { name: "Locked-Room Latch", detail: "The glasshouse latch can be triggered from outside with a length of garden wire — a gardener's trick." },
      { name: "Watering Schedule", detail: "A logbook showing Beatrix watered the Vanda section at the exact hour of death, contradicting her statement." },
      { name: "Will Amendment Draft", detail: "An unsigned draft removing Dr. Wren from the will, found in Augustin's desk." }
    ],
    solution: "Beatrix Lowe. Her own watering log places her at the scene despite her denial, and as head gardener she's the only one who'd know how to latch the glasshouse from outside using wire — exactly the trick used to fake a locked room.",
    twist: "The foxglove came from Beatrix's own cutting garden, planted there under Augustin's instruction for a 'medicinal tincture' — he'd unknowingly supplied his own poison months in advance."
  },
  {
    id: "004",
    code: "C-1163",
    title: "The Vanishing Bride",
    type: "missing",
    status: "closed",
    difficulty: "moderate",
    victim: "Cecilia Marsh, bride-to-be, 26 — missing",
    location: "St. Brennan's Chapel",
    date: "June 14th",
    teaser: "She walked into the bridal suite at noon. By the time the organ played, she was gone.",
    briefing: "Cecilia Marsh entered the bridal suite to dress for her wedding. Forty minutes later, the door was found unlocked and empty. Her veil was draped over the open window. The groom swears he never left the altar.",
    suspects: [
      { name: "Roland Pike", role: "The Groom", motive: "A large dowry was contingent on the marriage completing.", alibi: "Stood at the altar the entire time, confirmed by forty guests.", guilty: false },
      { name: "Anneliese Marsh", role: "Cecilia's Sister", motive: "Secretly in love with Roland for years.", alibi: "Was arranging flowers in the vestry, alone for several minutes.", guilty: false },
      { name: "Frederick Combe", role: "Cecilia's Former Fiancé", motive: "Cecilia broke their engagement a year prior; he'd been writing her letters since.", alibi: "Was seen lingering outside the chapel grounds that morning.", guilty: true }
    ],
    evidence: [
      { name: "Ladder Marks", detail: "Faint indentations in the soil beneath the bridal suite window, consistent with a ladder." },
      { name: "Unsent Letter", detail: "A letter in Cecilia's hand, addressed to Frederick, expressing doubts about the wedding." },
      { name: "Carriage Driver's Account", detail: "A hired carriage was seen leaving the chapel lane at the relevant time, paid for in advance, days earlier." },
      { name: "Frederick's Glove", detail: "A single glove caught on the window latch, monogrammed F.C." }
    ],
    solution: "Frederick Combe arranged this with Cecilia herself — the unsent letter shows she'd been planning to leave with him. The ladder and pre-paid carriage weren't an abduction but an elopement, hastily executed when her doubts became certainty.",
    twist: "Cecilia left a second letter, found weeks later, asking that no one be blamed — she'd simply chosen her own ending."
  },
  
  {
    id: "005",
    code: "C-1171",
    title: "Static on Channel Nine",
    type: "murder",
    status: "closed",
    difficulty: "hard",
    victim: "Renata Cole, radio host, 39",
    location: "WKEY Broadcast Tower",
    date: "July 8th",
    teaser: "She went live at 9pm. The broadcast cut to static at 9:14. No one heard her leave the booth alive.",
    briefing: "Renata Cole hosted the city's most popular late-night radio call-in show. Mid-broadcast, listeners heard a crash and then dead air. She was found in the soundproofed booth, strangled with a cut of recording wire. The booth door was supposed to be self-locking from inside during broadcasts.",
    suspects: [
      { name: "Julius Okafor", role: "Sound Engineer", motive: "Renata was about to report his embezzlement of equipment funds to the station owner.", alibi: "Says he was in the control room the whole time — but the control room has a private access door to the booth.", guilty: true },
      { name: "Penelope Ashworth", role: "Rival Host", motive: "Wanted Renata's prime late-night slot for herself.", alibi: "Was on air herself, on a different station, fully verifiable.", guilty: false },
      { name: "Marcus Cole", role: "Ex-Husband", motive: "Bitter custody dispute over their daughter, ongoing for two years.", alibi: "Was three hundred miles away at a work conference, confirmed by hotel records.", guilty: false }
    ],
    evidence: [
      { name: "Cut Recording Wire", detail: "The murder weapon, sourced from a spool only accessible from the control room." },
      { name: "Falsified Invoices", detail: "Equipment purchase invoices with inflated costs, the difference pocketed, found in Julius's desk." },
      { name: "Control Room Access Log", detail: "A sign-in sheet showing Julius entered the private connecting door at 9:11pm, never logged out." },
      { name: "Final Tape", detail: "The last seconds of the broadcast tape, recovered, capturing a muffled struggle and a single word: 'Julius'." }
    ],
    solution: "Julius Okafor. The recording wire ties directly to his control room, the access log places him at the booth's private door minutes before the static, and Renata's own final recorded word names him.",
    twist: "The 'private door' was meant to be sealed permanently after a 1962 incident — building records show Julius had quietly reopened it himself, months before the murder, suggesting premeditation."
  },
  {
    id: "006",
    code: "C-1178",
    title: "The Cartographer's Silence",
    type: "missing",
    status: "open",
    difficulty: "hard",
    victim: "Professor Henrik Voss, cartographer, 58 — missing",
    location: "Voss residence & the Mereworth Archive",
    date: "August 21st",
    teaser: "He was mapping something he shouldn't have. Now the map is missing too.",
    briefing: "Professor Voss vanished from his locked study three days after announcing he'd located coordinates for a long-disputed border survey worth a fortune in mineral rights. His study window was found open despite being on the third floor. No map has been found.",
    suspects: [
      { name: "Senator Aldric Pell", role: "Land Rights Investor", motive: "Voss's findings would devalue land Pell had quietly purchased.", alibi: "Claims to have been at a fundraiser, though he arrived late.", guilty: false },
      { name: "Yusuf Demir", role: "Research Assistant", motive: "Believed he deserved co-credit for the discovery and was denied it.", alibi: "Was at the Mereworth Archive cataloguing files, confirmed by the archivist." },
      { name: "Lucienne Voss", role: "Voss's Daughter", motive: "Estranged over his refusal to fund her education; recently reconciled.", alibi: "Was traveling back into the city by train that evening." }
    ],
    evidence: [
      { name: "Rope and Grapple Marks", detail: "Scuff marks on the third-floor sill consistent with a climbing line, professionally rigged." },
      { name: "Pell's Calling Card", detail: "Found wedged beneath a floorboard, half-burned, as if hastily destroyed." },
      { name: "Survey Correspondence", detail: "Letters from Pell to Voss, increasingly threatening in tone over the final weeks." },
      { name: "Fundraiser Guestbook", detail: "Shows Pell signed in forty minutes after the event began — unaccounted time." }
    ],
    solution: "This case remains open. The evidence points strongly toward Senator Pell, but Professor Voss has not been found, alive or otherwise, and the missing map remains unrecovered. The Bureau continues to investigate.",
    twist: "A coded note in Voss's own hand was found in the archive, suggesting he anticipated exactly this — and may have hidden the real map somewhere only his daughter would think to look."
  },
  {
    id: "007",
    code: "C-1185",
    title: "Thirteen Place Settings",
    type: "murder",
    status: "closed",
    difficulty: "hard",
    victim: "Constance Whitlock, society hostess, 61",
    location: "Whitlock Manor, the Grand Dining Hall",
    date: "September 12th",
    teaser: "Twelve guests sat for dinner. The thirteenth chair was for the woman who never made it to dessert.",
    briefing: "Constance Whitlock hosted an annual dinner for the city's elite. Between the third and fourth course, she collapsed and died at the table in front of all twelve guests. Each course was served by a different staff member, and several guests had access to her wine glass.",
    suspects: [
      { name: "Bartholomew Reed", role: "Business Partner", motive: "Constance had discovered he'd forged her signature on a disastrous investment.", alibi: "Seated at the far end, claims he never touched her glass.", guilty: false },
      { name: "Eleanor Voss-Whitlock", role: "Daughter-in-law", motive: "Constance threatened to disinherit her son unless he left Eleanor.", alibi: "Seated beside Constance the entire dinner.", guilty: true },
      { name: "Chef Antoine Girard", role: "Head Chef", motive: "Constance had publicly humiliated him over a prior dinner's failures, threatening his career.", alibi: "Was in the kitchen throughout, confirmed by two sous chefs." },
      { name: "Margaret Sykes", role: "Lifelong Friend & Rival", motive: "Decades of resentment over a stolen inheritance claim from their youth.", alibi: "Seated across the table, in clear view all evening." }
    ],
    evidence: [
      { name: "Glass Residue Analysis", detail: "Trace of a slow-acting compound found only in Constance's wine glass, added between courses." },
      { name: "Forged Signature Document", detail: "The forged investment papers, found in Bartholomew's desk — motive, but not method." },
      { name: "Seating Chart Annotations", detail: "Constance's own handwritten seating chart shows she insisted Eleanor sit beside her — an unusual request." },
      { name: "Pharmacist's Receipt", detail: "A receipt under a false name, traced through handwriting analysis to Eleanor, for a compound matching the residue." }
    ],
    solution: "Eleanor Voss-Whitlock. Seated beside Constance for the entire meal, she had the only real opportunity to dose the glass between courses, and the pharmacist's receipt — though purchased under a false name — matches her handwriting exactly.",
    twist: "Constance had requested Eleanor's seat herself, suspecting something — she'd quietly changed her will that very morning, meaning Eleanor's plan accomplished nothing."
  },
  {
    id: "008",
    code: "C-1190",
    title: "The Lighthouse Keeper's Watch",
    type: "missing",
    status: "closed",
    difficulty: "easy",
    victim: "Saul Brennan, lighthouse keeper, 71 — missing",
    location: "Quoin Point Lighthouse",
    date: "October 3rd",
    teaser: "The light kept turning all night. The keeper did not.",
    briefing: "Saul Brennan failed to answer the supply boat's signal for the first time in thirty years of service. The lighthouse was found locked, the light still functioning on its automatic mechanism, and Saul nowhere on the rock.",
    suspects: [
      { name: "Niall Brennan", role: "Saul's Nephew", motive: "Stood to inherit Saul's modest savings and the keeper's cottage.", alibi: "Was on the mainland, confirmed by multiple witnesses at a pub." },
      { name: "Captain Osric Vane", role: "Smuggler", motive: "Saul had recently begun reporting suspicious boats to the coast guard, threatening Vane's operation.", alibi: "Claims he was nowhere near Quoin Point that week.", guilty: true }
    ],
    evidence: [
      { name: "Logbook's Final Entry", detail: "Saul's log notes 'unfamiliar vessel, north cove, will report at dawn' — his last written words." },
      { name: "Coast Guard Correspondence", detail: "Letters confirming Saul had reported three suspicious night landings in the past month." },
      { name: "Rope Burn on the Rocks", detail: "Fresh rope burns on the north cove rocks, inconsistent with any lighthouse equipment." },
      { name: "Vane's Boat Registry", detail: "Harbor records placing a boat matching Vane's description near Quoin Point that very night, despite his denial." }
    ],
    solution: "Captain Vane. Saul's own logbook entry places him heading to investigate Vane's smuggling route on the night he vanished, and harbor records contradict Vane's claim of being elsewhere.",
    twist: "Saul is presumed lost at sea rather than killed outright — local fishermen later found his coat snagged on the north cove rocks, suggesting a struggle near the water's edge, not a body ever recovered."
  },
  {
    id: "009",
    code: "C-1196",
    title: "A Symphony in Red",
    type: "murder",
    status: "closed",
    difficulty: "moderate",
    victim: "Maestro Carlo Bellini, conductor, 49",
    location: "The Aurelian Concert Hall",
    date: "November 9th",
    teaser: "He raised his baton for the final movement. He never brought it down.",
    briefing: "Maestro Bellini collapsed on the podium mid-performance, in front of a sold-out hall. He'd been stabbed with a thin blade, so precisely that he conducted for nearly thirty seconds before falling. No one in the orchestra pit saw anyone approach him.",
    suspects: [
      { name: "Sofia Bellini", role: "Estranged Wife", motive: "A bitter divorce was finalizing; she stood to lose everything if he remarried first.", alibi: "Was seated in the audience, in full view of hundreds." },
      { name: "Niccolo Vitale", role: "First Violinist", motive: "Passed over for the conductor's chair at a rival hall because Bellini gave a damning reference.", alibi: "Claims to have been playing the entire time — but his seat is the closest to the podium.", guilty: true },
      { name: "Helena Voss", role: "Opera Singer & Former Lover", motive: "Bellini ended their affair publicly, humiliating her before the company.", alibi: "Was backstage preparing for a separate performance, confirmed by dressers." }
    ],
    evidence: [
      { name: "Conductor's Podium Angle", detail: "The wound's angle is only possible from someone seated in the front row of the orchestra, striking upward briefly during a rest in the score." },
      { name: "Bow Hair Residue", detail: "A trace of blood on Niccolo's bow, dismissed by him as a broken string injury — no such injury found on his hands." },
      { name: "Reference Letter", detail: "A copy of Bellini's damning reference letter, found torn in Niccolo's belongings." },
      { name: "The Score Itself", detail: "Annotated with a tiny mark at the exact rest where the strike would have been possible, in Niccolo's own pencil." }
    ],
    solution: "Niccolo Vitale. His position made the strike physically possible during a precise musical rest, and the blood on his bow — paired with his marked score and motive — closes the case.",
    twist: "Niccolo had rehearsed the timing for weeks under the guise of 'perfecting his solo entrance,' meaning the murder was no crime of passion but a meticulously composed one."
  },
  {
    id: "010",
    code: "C-1203",
    title: "The Empty Carriage",
    type: "missing",
    status: "closed",
    difficulty: "moderate",
    victim: "Lady Beatrice Fenwick, 44 — missing",
    location: "The road between Hallow's Edge and Thorncombe",
    date: "December 1st",
    teaser: "The horses arrived. The carriage arrived. Lady Fenwick did not.",
    briefing: "Lady Fenwick's private carriage pulled into Thorncombe exactly on schedule, but the cabin was empty. The driver claims he never stopped, never heard a sound, and never looked back. Her jewelry case was untouched on the seat.",
    suspects: [
      { name: "Driver Cobb", role: "Carriage Driver", motive: "In significant debt to Lady Fenwick's husband.", alibi: "Was driving the entire route — the obvious suspect, perhaps too obvious." },
      { name: "Lord Edmund Fenwick", role: "Husband", motive: "A documented affair Lady Fenwick discovered weeks prior; he stood to inherit her considerable fortune.", alibi: "Claims to have been at his club the entire evening.", guilty: true },
      { name: "Rosalind Pruitt", role: "Lady Fenwick's Companion", motive: "Long resentment over years of being treated as a servant rather than a friend.", alibi: "Was not present for the journey at all, having stayed behind ill." }
    ],
    evidence: [
      { name: "Untouched Jewelry Case", detail: "Rules out simple robbery as a motive entirely." },
      { name: "Second Set of Wheel Tracks", detail: "Tracks branching off the main road at a known turn-off, leading toward a disused hunting lodge owned by Lord Fenwick." },
      { name: "Club Sign-In Discrepancy", detail: "Lord Fenwick's sign-in time at the club doesn't match witness accounts of when he actually arrived — a thirty-minute gap." },
      { name: "Threatening Letter Draft", detail: "An unsent letter from Lady Fenwick to her solicitor, intending to file for separation and seize half the estate." }
    ],
    solution: "Lord Edmund Fenwick arranged for the carriage to be intercepted near the hunting lodge turn-off during his unaccounted thirty minutes, removing his wife before she could file for separation and claim half his estate.",
    twist: "Lady Fenwick was found alive at the hunting lodge weeks later, held rather than killed — Lord Fenwick had intended to force her signature on a settlement, not her death."
  }
];

// Generate additional cases programmatically-styled but still hand-authored for variety
const MORE_CASES = [
  {
    id: "011", code: "C-1209", title: "The Glassblower's Last Breath", type: "murder", status: "closed", difficulty: "moderate",
    victim: "Ines Calder, master glassblower, 45", location: "Calder & Sons Glassworks", date: "January 6th",
    teaser: "Found beside her own furnace, a masterpiece shattered at her feet.",
    briefing: "Ines Calder was found dead beside the glassworks furnace, her skull struck by a blunt object, her finest commissioned piece in pieces around her. The workshop was locked for the night when her apprentice found her at dawn.",
    suspects: [
      { name: "Roderick Calder", role: "Business Partner & Brother-in-law", motive: "Ines was buying him out of the  family business after years of mismanagement.", alibi: "Says he left before closing, but the night watchman never logged his exit.", guilty: true },
      { name: "Junie Okafor", role: "Apprentice", motive: "Felt overworked and underpaid for years of unrecognized labor.", alibi: "Discovered the body — was she returning to the scene, or arriving fresh?" },
      { name: "Lord Pemberton", role: "Commissioning Client", motive: "Furious over delays to a piece meant for his daughter's wedding.", alibi: "Was at his estate, fully confirmed by staff." }
    ],
    evidence: [
      { name: "Buy-Out Contract", detail: "A signed contract removing Roderick from the business, dated the day of the murder." },
      { name: "Missing Exit Log", detail: "The night watchman's log shows no record of Roderick leaving, despite his claim." },
      { name: "Furnace Poker", detail: "The murder weapon, wiped clean but for a single partial print." },
      { name: "Broken Commission", detail: "The shattered piece shows it was deliberately struck, not accidentally dropped — staged as an accident." }
    ],
    solution: "Roderick Calder, confronted with the buy-out contract that would end his stake in the family business, struck Ines with the furnace poker and staged the broken commission as a cover for a workshop accident.",
    twist: "The partial print on the poker wasn't enough alone to convict — it was the missing exit log, an oversight by a tired watchman, that ultimately broke his alibi."
  },
  {
    id: "012", code: "C-1214", title: "The Apothecary's Inventory", type: "missing", status: "closed", difficulty: "easy",
    victim: "Mr. Aldous Finn, apothecary, 52 — missing", location: "Finn's Apothecary, Coopers Row", date: "January 28th",
    teaser: "He closed the shop at six, same as always. He never opened it again.",
    briefing: "Aldous Finn's apothecary was found locked and untouched the next morning, the till full, nothing disturbed — except Finn himself, who was simply gone. His ledger showed an unusual final entry: a large order of a rare, dangerous compound.",
    suspects: [
      { name: "Bertram Voss", role: "Regular Customer", motive: "Owed Finn a significant debt for medicines on credit.", alibi: "Claims to have settled his account that very afternoon — receipt confirms this." },
      { name: "Dr. Castellan", role: "Local Physician", motive: "Finn had been quietly underselling his prescriptions, undercutting the doctor's referral arrangements.", alibi: "Was attending a difficult birth all night, thoroughly confirmed.", },
      { name: "Mrs. Pemshaw", role: "Finn's Housekeeper", motive: "Recently let go after Finn accused her of theft.", alibi: "Says she was home all evening, unconfirmed by anyone.", guilty: true }
    ],
    evidence: [
      { name: "The Final Ledger Entry", detail: "A large order for a rare sedative compound, paid for in cash that morning." },
      { name: "Carriage Outside", detail: "A neighbor recalls a hired carriage waiting outside the shop near closing — unusual for the quiet street." },
      { name: "Pemshaw's Pawned Brooch", detail: "Mrs. Pemshaw pawned a brooch matching one reported missing from Finn's residence, the same week she was dismissed." },
      { name: "Sedative Vial", detail: "An empty vial of the sedative found discarded behind the shop, far more than needed for any legitimate prescription." }
    ],
    solution: "Mrs. Pemshaw used the sedative to incapacitate Finn after he accused her publicly of theft, then arranged the hired carriage to remove him quietly, intending to flee with what she felt she was owed.",
    twist: "Finn was found alive, groggy and disoriented in a rented room three streets over — Mrs. Pemshaw lost her nerve and abandoned the plan before it went further."
  },
  {
    id: "013", code: "C-1221", title: "The Regatta Incident", type: "murder", status: "closed", difficulty: "hard",
    victim: "Commodore Phineas Lark, 58", location: "Lake Esterbrook Regatta", date: "February 11th",
    teaser: "He fell from his own boat in full view of three hundred spectators, and no one saw a thing.",
    briefing: "During the closing race of the regatta, Commodore Lark fell overboard from his sailing yacht. By the time the crew pulled him from the water, he was dead — not drowned, but strangled, the marks clear on his throat. The boat carried only him and his first mate.",
    suspects: [
      { name: "First Mate Garrity", role: "First Mate", motive: "Lark had been taking credit for Garrity's navigation work for years, blocking his advancement.", alibi: "Was the only other person aboard — impossible to fully clear or implicate by presence alone.", guilty: true },
      { name: "Cordelia Lark", role: "Daughter", motive: "Lark opposed her engagement and threatened to disown her.", alibi: "Was watching from the spectator boats, in clear view of dozens." },
      { name: "Admiral Reeve Holt", role: "Regatta Rival", motive: "Decades-long rivalry; Lark had just defeated his club in the cup standings.", alibi: "Was aboard his own vessel, racing in full view of officials." }
    ],
    evidence: [
      { name: "Rope Burn Pattern", detail: "Strangulation marks consistent with a thin sailing line, not bare hands." },
      { name: "Missing Mainsheet", detail: "A length of mainsheet rope is unaccounted for from the yacht's rigging — precisely matching the wound width." },
      { name: "Garrity's Personnel File", detail: "Records showing three separate navigation achievements credited to Lark alone, originally Garrity's work." },
      { name: "Witness Account from Nearby Boat", detail: "A spectator recalls the sail luffing oddly for nearly a minute — consistent with the helm being briefly abandoned." }
    ],
    solution: "First Mate Garrity, the only person aboard, used a length of the yacht's own mainsheet to strangle Lark during a moment when the boat's odd handling went unremarked upon by distant spectators — years of stolen credit reaching their breaking point.",
    twist: "Garrity nearly got away with it entirely — it was Lark's own meticulous logbook, recovered from the cabin, that listed the 'missing' mainsheet's exact length and proved a piece had been deliberately cut."
  },
  {
    id: "014", code: "C-1227", title: "Letters from No One", type: "missing", status: "open", difficulty: "hard",
    victim: "Isadora Quince, journalist, 33 — missing", location: "Quince's flat, Bellhaven District", date: "March 4th",
    teaser: "She was about to publish the story of her career. Then she stopped answering her door.",
    briefing: "Investigative journalist Isadora Quince vanished three days before she was due to publish an exposé on corruption within the city council. Her flat showed no signs of forced entry. Her notes are gone. Anonymous letters threatening her had arrived for weeks prior.",
    suspects: [
      { name: "Councilman Edric Voss", role: "Subject of the Exposé", motive: "The story would end his career and likely see him prosecuted.", alibi: "Was at a council session the night she vanished, well documented.", guilty: false },
      { name: "Harlan Quince", role: "Isadora's Brother", motive: "Believed her reckless reporting endangered the family and wanted her to stop.", alibi: "Was traveling, claims to have no knowledge of her disappearance." },
      { name: "Petra Iversen", role: "Fellow Journalist", motive: "Wanted the byline and credit for the story Isadora had spent a year building.", alibi: "Was at the newspaper office late that night, confirmed by the night editor." }
    ],
    evidence: [
      { name: "Anonymous Threat Letters", detail: "Handwriting analysis links the letters' paper stock to council office stationery." },
      { name: "Missing Notes", detail: "Every physical copy of her research is gone, but a backup ledger reference suggests a duplicate exists somewhere." },
      { name: "Unforced Entry", detail: "Suggests Isadora let her abductor in willingly, or knew them well enough not to resist immediately." },
      { name: "Council Office Visitor Log", detail: "Shows an unscheduled, unnamed visit logged the same evening Isadora vanished, signed only with an illegible scrawl." }
    ],
    solution: "This case remains open. Councilman Voss is the clear focus of suspicion given the threat letters and his obvious motive, but without Isadora or her notes recovered, the Bureau cannot yet close the file.",
    twist: "A duplicate set of Isadora's notes may exist with a source she never named in her own files — the story may yet publish itself, with or without her."
  },
  {
    id: "015", code: "C-1233", title: "The Choir Loft", type: "murder", status: "closed", difficulty: "moderate",
    victim: "Father Anselm Doyle, 64", location: "St. Brennan's Chapel, choir loft", date: "March 30th",
    teaser: "He climbed to the loft to ring the evening bell. He never came back down.",
    briefing: "Father Doyle was found at the foot of the choir loft stairs, his neck broken. Initially ruled an accidental fall, a torn cassock and a missing collection box tell a different story.",
    suspects: [
      { name: "Brother Aldous", role: "Junior Priest", motive: "Doyle had discovered Aldous was siphoning from the collection for a secret gambling habit.", alibi: "Claims he was in his quarters praying, unconfirmed.", guilty: true },
      { name: "Mrs. Halloway", role: "Church Caretaker", motive: "Long-standing dispute over Doyle's plan to dismiss her for younger staff.", alibi: "Was cleaning the nave, in view of evening parishioners." },
      { name: "Edgar Voss", role: "Local Businessman", motive: "Doyle refused to bless a controversial development on church land, costing Voss a fortune.", alibi: "Was at a business dinner across town, well confirmed." }
    ],
    evidence: [
      { name: "Torn Cassock Fabric", detail: "A scrap of fabric caught on the loft railing, suggesting a struggle rather than a slip." },
      { name: "Missing Collection Box", detail: "The weekly collection box is gone, and church records show a pattern of shortfalls for months prior." },
      { name: "Gambling Den Ledger", detail: "A ledger from a known gambling house listing 'Brother A.' as a regular debtor." },
      { name: "Bell Rope Position", detail: "The bell rope was found tied off early — Doyle never finished ringing it, suggesting he was interrupted mid-task." }
    ],
    solution: "Brother Aldous confronted Doyle in the loft after being found out, and in the ensuing struggle — desperate to keep his secret and the stolen funds — pushed him down the stairs, then took the collection box to make it look like a robbery gone wrong.",
    twist: "Aldous later anonymously returned the stolen funds to the church poor box, a detail the Bureau noted but could not legally use to soften the case against him."
  },
  {
    id: "016", code: "C-1240", title: "The Photograph That Wasn't There", type: "missing", status: "closed", difficulty: "easy",
    victim: "Young Tobias Wren, 9 — missing", location: "Wren residence & Hollow Park", date: "April 17th",
    teaser: "He was playing in the park at 4 o'clock. The photograph proves he wasn't there at all.",
    briefing: "Nine-year-old Tobias Wren disappeared from Hollow Park during an afternoon outing with his governess, who insists she only looked away for a moment. A family photograph taken that very day, however, shows the park entirely empty at the claimed time.",
    suspects: [
      { name: "Governess Hattie Vance", role: "Governess", motive: "Facing dismissal over repeated lapses; possibly covering for a more serious failure.", alibi: "Claims to have been watching the boy the entire time — contradicted by the photograph." },
      { name: "Uncle Reginald Wren", role: "Tobias's Uncle", motive: "Stood to inherit a trust fund if something happened to his nephew, the only heir.", alibi: "Was traveling on business, claims to have an unshakeable train ticket alibi.", guilty: true }
    ],
    evidence: [
      { name: "The Timestamped Photograph", detail: "A photograph with a studio timestamp showing Hollow Park empty at the exact hour Hattie claims to have been watching Tobias there." },
      { name: "Trust Fund Documents", detail: "Show Reginald becomes sole trustee of a considerable fund in the event of Tobias's death or extended disappearance." },
      { name: "Forged Train Ticket", detail: "Closer inspection reveals the date stamp on Reginald's 'unshakeable' alibi ticket was altered." },
      { name: "Sweet Wrapper", detail: "A distinctive imported sweet wrapper, sold only at one confectioner's, found near the park's rear gate — Reginald's favorite." }
    ],
    solution: "Reginald Wren forged his train ticket alibi and lured Tobias from the park's rear gate using sweets the boy loved, intending to hide him away long enough to be declared the trust's controlling guardian.",
    twist: "Tobias was found safe at a countryside cottage rented under a false name — frightened, but otherwise unharmed, having been told it was 'a surprise holiday from Uncle Reggie.'"
  },
  {
    id: "017", code: "C-1248", title: "The Auctioneer's Gavel", type: "murder", status: "closed", difficulty: "hard",
    victim: "Mortimer Vane, auction house owner, 60", location: "Vane & Crowe Auction House", date: "May 22nd",
    teaser: "Sold to the highest bidder — except the final lot was his own life.",
    briefing: "Mortimer Vane was found dead in his auction house office after hours, struck with his own ceremonial gavel. The safe was open but untouched — only a single item was missing: the provenance papers for a disputed painting up for auction the next morning.",
    suspects: [
      { name: "Clarissa Doyle", role: "Art Authenticator", motive: "Had certified the disputed painting as genuine despite private doubts; the papers would expose her error or fraud.", alibi: "Says she left hours before, alone, unconfirmed.", guilty: true },
      { name: "Geoffrey Crowe", role: "Business Partner", motive: "Long power struggle over control of the auction house.", alibi: "Was at a separate social engagement, confirmed by multiple guests." },
      { name: "Lady Imogen Thackeray", role: "Disgruntled Seller", motive: "Furious over a lowball valuation of her family heirlooms.", alibi: "Was at home, unconfirmed by staff who had the evening off." }
    ],
    evidence: [
      { name: "Missing Provenance Papers", detail: "The only item taken from the otherwise untouched safe — pointing to a targeted, not opportunistic, crime." },
      { name: "Authentication Discrepancy", detail: "A second, contradicting authentication report, hidden in Vane's own files, suggesting he knew the painting was forged." },
      { name: "Glove Fibre on the Gavel", detail: "A fine wool fibre caught in the gavel's felt head, matching gloves Clarissa was seen wearing that week." },
      { name: "Pawnbroker's Inquiry", detail: "A note showing Clarissa had quietly inquired about the painting's black-market value days before the murder." }
    ],
    solution: "Clarissa Doyle, facing exposure as the painting's fraudulent authenticator, killed Vane to retrieve the provenance papers that would prove her deception, leaving the rest of the safe untouched to seem like a targeted theft rather than what it truly was.",
    twist: "The painting itself was later proven genuine after all — Vane's hidden second report was a forgery planted by Crowe to manipulate the auction price, an entirely separate scheme that simply happened to give Clarissa her fatal motive."
  },
  {
    id: "018", code: "C-1255", title: "The Vanishing Hour", type: "missing", status: "closed", difficulty: "moderate",
    victim: "Watchmaker Elias Thorne, 49 — missing", location: "Thorne's Clock Shop", date: "June 9th",
    teaser: "Every clock in his shop stopped at the exact same minute. He was never seen again.",
    briefing: "Elias Thorne, renowned for his precision clockwork, vanished from his locked shop. Strangely, every single clock and watch on display stopped at precisely 6:47, as though something had interrupted the shop's power or Thorne's own routine maintenance all at once.",
    suspects: [
      { name: "Bertrand Hale", role: "Apprentice", motive: "Thorne had refused to pass down his most valuable trade secrets, fearing competition.", alibi: "Claims he'd already left for the day.", guilty: true },
      { name: "Madame Olwen Frey", role: "Wealthy Client", motive: "A dispute over a custom commission Thorne had failed to deliver on time.", alibi: "Was hosting a dinner party, confirmed by a dozen guests." }
    ],
    evidence: [
      { name: "The Stopped Clocks", detail: "All set to 6:47 — investigators determined this happens only if the shop's master regulator pendulum is physically stopped by hand." },
      { name: "Apprentice's Toolkit", detail: "Bertrand's personal tools were found still in the workshop, contradicting his claim of having left for the day." },
      { name: "Trade Secret Notebook", detail: "Thorne's private notebook of techniques, which Bertrand had been desperate to copy, found partially transcribed in Bertrand's own hand." },
      { name: "Back Door Latch", detail: "Showed signs of being forced from the inside, not outside — someone left in a hurry, not someone breaking in." }
    ],
    solution: "Bertrand Hale, denied the trade secrets he felt entitled to, confronted Thorne after hours; in the struggle the master regulator was knocked and stopped, and Bertrand fled out the back, forcing the latch from inside in his haste.",
    twist: "Thorne was found alive but gravely injured in the shop's cellar, having hidden there rather than fled — he'd been protecting his notebook the entire time, clutching it when found."
  },
  {
    id: "019", code: "C-1262", title: "The Eulogy He Never Gave", type: "murder", status: "closed", difficulty: "easy",
    victim: "Reverend Silas Crane, 57", location: "Hollow Brook Cemetery", date: "July 1st",
    teaser: "He went to deliver a eulogy at a quiet grave. He became the next one buried.",
    briefing: "Reverend Crane was found dead among the headstones of Hollow Brook Cemetery, struck from behind, on his way to deliver a private eulogy for a reclusive parishioner. His sermon notes were scattered, one page deliberately torn out.",
    suspects: [
      { name: "Gravedigger Amos Lowe", role: "Cemetery Caretaker", motive: "Crane had threatened to report him for selling burial plots fraudulently on the side.", alibi: "Was digging a new plot on the far side of the grounds, claims he heard nothing.", guilty: true },
      { name: "Wilhelmina Crane", role: "Reverend's Sister", motive: "Long resentment over inheritance of the family estate left entirely to Silas.", alibi: "Was at the rectory preparing the wake reception." }
    ],
    evidence: [
      { name: "Torn Sermon Page", detail: "The missing page, later recovered, named names — specifically accusing someone of fraudulent plot sales." },
      { name: "Shovel with Blood Trace", detail: "Amos's own shovel, hastily cleaned but not thoroughly enough." },
      { name: "Fraudulent Plot Ledger", detail: "A hidden secondary ledger showing plots sold twice over, profits pocketed by Amos." },
      { name: "Footprints in Soft Earth", detail: "Fresh prints leading from the new plot directly to where Crane was found, despite Amos's claim he never left his digging site." }
    ],
    solution: "Gravedigger Amos Lowe, about to be exposed by the very sermon Crane meant to deliver, followed him through the headstones and struck him down with his own shovel, tearing the incriminating page from the notes too late to fully erase his crime.",
    twist: "The parishioner whose grave Crane was visiting had, unbeknownst to anyone, left a letter with her solicitor years earlier predicting exactly this kind of fraud at the cemetery — a final, posthumous tip that helped crack the case."
  },
  {
    id: "020", code: "C-1270", title: "The Doll in the Window", type: "missing", status: "open", difficulty: "hard",
    victim: "Clementine Voss, 7 — missing", location: "Voss residence, Marrow Street", date: "August 15th",
    teaser: "Her doll was left sitting in the window, facing out. She was never seen leaving the house.",
    briefing: "Seven-year-old Clementine Voss vanished from her bedroom sometime during the night. Her favorite doll was found posed deliberately in the window, facing the street, as if placed there as a message — or a warning. No signs of forced entry were found anywhere in the house.",
    suspects: [
      { name: "Nanny Odette Pruitt", role: "Live-in Nanny", motive: "Recently informed she would be dismissed once the family moved abroad.", alibi: "Claims she slept through the night in the adjoining room, heard nothing." },
      { name: "Uncle Caspian Voss", role: "Estranged Uncle", motive: "Bitter dispute with Clementine's father over the family estate; had been seen lurking near the house in recent weeks.", alibi: "Cannot be located for questioning at all, having seemingly left the city the same night." },
      { name: "Mr. Henrik Voss", role: "Clementine's Father", motive: "Massive gambling debts to dangerous creditors who had recently made threats against his family.", alibi: "Was traveling for business, returning only the following morning." }
    ],
    evidence: [
      { name: "The Posed Doll", detail: "Positioned far too deliberately to be a child's own arrangement — suggests an adult staged it, possibly as a message to someone watching from outside." },
      { name: "Threatening Note", detail: "An unsigned note found in Henrik Voss's study, referencing a debt and 'collateral' in chillingly vague terms." },
      { name: "Untouched Locks", detail: "Every door and window lock shows no sign of tampering, suggesting either an inside job or a key held by someone trusted." },
      { name: "Caspian's Disappearance", detail: "Uncle Caspian vanishing the same night is either deeply suspicious or suggests he, too, may be in danger." }
    ],
    solution: "This case remains open. The threatening note suggests Clementine may have been taken as leverage against her father's debts, but without Caspian located for questioning and no sign of forced entry explained, the Bureau has not yet determined what truly happened that night.",
    twist: "A demand for payment, referencing Clementine by name, was received by the family's solicitor two weeks after she vanished — the case is now being treated as an active ransom investigation."
  },
  {
    id: "021", code: "C-1276", title: "The Conservatory Hour", type: "murder", status: "closed", difficulty: "moderate",
    victim: "Dame Ophelia Marsh, pianist, 71", location: "Marsh Conservatory of Music", date: "September 7th",
    teaser: "Her students heard the piano stop mid-phrase. They assumed she was simply tired.",
    briefing: "Dame Ophelia Marsh, the conservatory's founder, was found dead at her piano, a heavy bronze bust toppled beside her. Her private teaching hour was meant to be uninterrupted — yet someone clearly was admitted.",
    suspects: [
      { name: "Theodore Lin", role: "Prized Student", motive: "Dame Marsh had just informed him he lacked the talent to continue at the conservatory, ending his dream.", alibi: "Claims he left after his lesson ended early, before the murder window.", guilty: true },
      { name: "Constance Pryor", role: "Co-Founder & Rival", motive: "Decades of being overshadowed by Marsh's reputation despite equal founding credit.", alibi: "Was teaching a separate class, confirmed by a room full of students." },
      { name: "Julian Marsh", role: "Nephew & Conservatory Treasurer", motive: "Had been quietly embezzling conservatory funds, soon to be audited at Dame Marsh's insistence.", alibi: "Was reviewing ledgers in his office, unconfirmed." }
    ],
    evidence: [
      { name: "Toppled Bronze Bust", detail: "The murder weapon, a bust of a long-dead composer, wiped of prints but for a partial smudge." },
      { name: "Lesson Book Entry", detail: "Dame Marsh's own appointment book shows Theodore's lesson wasn't scheduled to end for another twenty minutes — contradicting his alibi." },
      { name: "Torn Sheet Music", detail: "A piece of sheet music torn in apparent frustration, found crumpled near the piano, in Theodore's handwriting." },
      { name: "Embezzlement Ledger", detail: "Julian's hidden ledger, suspicious but ultimately unconnected to the time of the murder itself." }
    ],
    solution: "Theodore Lin, devastated and enraged after being told his talent wasn't enough, struck Dame Marsh with the nearby bust in a moment of impulsive fury — his own appointment book entry undoing the alibi he gave investigators.",
    twist: "Julian's embezzlement was real and significant, but entirely unrelated to the murder — a second, smaller scandal the Bureau uncovered purely by chance while investigating the larger crime."
  },
  {
    id: "022", code: "C-1283", title: "The Midnight Ferry", type: "missing", status: "closed", difficulty: "easy",
    victim: "Captain Bram Ostler, ferryman, 39 — missing", location: "The Esther River Ferry Crossing", date: "October 19th",
    teaser: "The ferry crossed the river on schedule. Its captain was nowhere aboard.",
    briefing: "The midnight ferry arrived at its dock as scheduled, engine running, lanterns lit — but Captain Ostler was not at the helm. The autopilot mechanism he'd installed himself had simply carried the boat across the water alone.",
    suspects: [
      { name: "Deckhand Wendell Pratt", role: "Deckhand", motive: "Long resentment over being passed up for captaincy in favor of the younger Ostler.", alibi: "Claims he wasn't on shift that night at all." },
      { name: "Moira Ostler", role: "Captain's Wife", motive: "Discovered Ostler's plan to leave her and the children for another woman.", alibi: "Was home with the children all evening, confirmed by a neighbor's visit." },
      { name: "Rival Ferryman Silas Crowe", role: "Competing Ferry Operator", motive: "Ostler's lower fares were driving Crowe's competing ferry line out of business entirely.", alibi: "Claims to have been at his own dock the entire night.", guilty: true }
    ],
    evidence: [
      { name: "Tampered Autopilot Mechanism", detail: "Investigators found the autopilot had been deliberately engaged early, before Ostler would normally hand off control — suggesting someone else started it without him aboard." },
      { name: "Competing Dock Logs", detail: "Crowe's own dock logs show a suspicious gap in his vessel's recorded movements that night." },
      { name: "Torn Life Vest", detail: "Found snagged on pilings near a known narrows in the river, far from the ferry's usual path." },
      { name: "Witness on the Far Bank", detail: "A fisherman recalls hearing raised voices on the water near the narrows around the time Ostler vanished." }
    ],
    solution: "Rival ferryman Silas Crowe intercepted Ostler near the narrows in his own small boat, and in a confrontation over the fare war that was ruining him, the captain went into the water — Crowe then set the autopilot to carry the empty ferry on to dock, hoping it would look like an accident.",
    twist: "Ostler's body was never recovered from the river — the Bureau closed the case on the strength of the evidence, but the absence of a body left Moira and her children without the closure they deserved."
  }
];

CASES.push(...MORE_CASES);

// Stable hashing for deterministic 'random' visual seeds per case
function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}
