import { ServiceDetail, ReviewItem, ServiceArea } from '../types';

export const BUSINESS_INFO = {
  name: 'B-Tech Repair',
  tagline: 'AC, Refrigerator, Washing Machine & Microwave Repair',
  phone: '072057 19060',
  phoneClean: '07205719060',
  phoneInternational: '+917205719060',
  address: 'Nandankanan Rd, near Koel Campus, Sishu Vihar, Patia, Bhubaneswar, Odisha 751024',
  rating: '5.0',
  reviewCount: '468',
  source: 'Google Reviews',
  doorstepCoverage: 'Bhubaneswar · Cuttack · Nearby Areas',
  responseTime: '60 – 90 Minutes Doorstep Response',
  hours: 'Monday – Sunday: 8:00 AM – 9:00 PM',
};

export const SERVICES_INDEX: ServiceDetail[] = [
  {
    id: 'ac-repair',
    category: 'AC',
    number: '01',
    title: 'Air Conditioner Repair & Service',
    tagline: 'Precision diagnosis and repair for split, inverter, and window air conditioning systems.',
    shortDesc: 'AC cleaning · repair · installation · gas-related service · PCB repair · cooling problems',
    fullDesc: 'Comprehensive doorstep diagnosis and technical repair for all major air conditioner brands. We inspect the refrigeration cycle, electrical parameters, compressor amp draw, and PCB signal continuity to address the root issue instead of guessing.',
    commonIssues: [
      'AC running but room not cooling',
      'Sudden water dripping from indoor unit',
      'Compressor tripping frequently or humming',
      'Ice formation on copper suction pipe or cooling coil',
      'Foul smell or weak blower airflow',
      'Indoor unit error code display (E1, E2, E6, etc.)'
    ],
    inspectionSteps: [
      { step: '01', title: 'Electrical & Power Testing', desc: 'Voltage check across MCB, stabilizer output, indoor PCB terminal, and outdoor unit compressor contactor.' },
      { step: '02', title: 'Pressure & Gas Line Audit', desc: 'Gauge manifold testing for standing and running suction/discharge pressures (R32, R410A, R22).' },
      { step: '03', title: 'Thermal & Airflow Verification', desc: 'Anemometer reading on cross-flow fan and temperature delta check between intake grill and supply louvers.' },
      { step: '04', title: 'Component Functional Check', desc: 'Capacitor microfarad rating test, fan motor windings resistance, and expansion valve capillary inspection.' }
    ],
    technicalSpecs: [
      { label: 'Supported Systems', value: 'Inverter Split, Non-Inverter Split, Window AC, Cassette Units' },
      { label: 'Refrigerants Handled', value: 'R-32, R-410A, R-22 (using calibrated manifold gauges)' },
      { label: 'Doorstep Scope', value: 'Patia, Chandrasekharpur, Bhubaneswar & Cuttack areas' },
      { label: 'Service Standard', value: 'Pre-repair inspection and cost assessment before any work' }
    ],
    faqs: [
      {
        question: 'Why is my AC running but not cooling the room?',
        answer: 'This is commonly caused by choked air filters, clogged cooling fins, refrigerant gas leakage, a weak compressor run capacitor, or a faulty inverter PCB sensor. Our technician will connect a gauge manifold and multimeter to identify the exact cause before proposing any repair.'
      },
      {
        question: 'Do you charge for diagnosis if repair is not carried out?',
        answer: 'We maintain standard, transparent inspection charges to cover technician travel and diagnostic assessment. If you proceed with the repair work, the diagnostic fee is usually adjusted into the final invoice.'
      },
      {
        question: 'How long does an AC inspection take?',
        answer: 'A thorough electrical and pressure check typically takes 30 to 45 minutes on-site at your home or office.'
      }
    ],
    standardNotice: 'Repairs are performed using genuine manufacturer-grade parts where available. All work is preceded by a clear fault diagnosis.'
  },
  {
    id: 'ac-jet-pump-cleaning',
    category: 'AC',
    number: '01B',
    title: 'AC Jet Pump Deep Cleaning & Servicing',
    tagline: 'High-pressure wash with specialized service jacket to flush deep debris without damaging aluminum fins.',
    shortDesc: 'Deep jet pump cleaning · indoor coil flush · outdoor condenser wash · blower de-dusting',
    fullDesc: 'Regular foam cleaning only touches the surface. Our AC jet pump service mounts a waterproof catchment jacket around the indoor unit and utilizes a pressure pump to flush compacted mold, soot, and dust trapped between the delicate cooling fins and blower wheel, restoring original heat transfer efficiency.',
    commonIssues: [
      'Low air throw or sluggish blower wheel',
      'Musty, damp odor when switching AC on',
      'Higher electricity bills due to strained heat exchange',
      'Water overflow caused by blocked drain channel or tray'
    ],
    inspectionSteps: [
      { step: '01', title: 'Mount Waterproof Jacket', desc: 'Protective casing fitted beneath indoor split unit to channel dirty wastewater safely into a bucket.' },
      { step: '02', title: 'High-Pressure Jet Wash', desc: 'Controlled water spray flushes dirt from evaporator fins, cross-flow blower fan, and water drain tray.' },
      { step: '03', title: 'Outdoor Condenser Flush', desc: 'High-velocity jet rinse clears accumulated street dust and grime from outdoor condenser coils.' },
      { step: '04', title: 'Drain & Airflow Test', desc: 'Drain pipe water flow cleared to prevent backflow; temperature delta and CFM verified.' }
    ],
    technicalSpecs: [
      { label: 'Equipment Used', value: 'High-pressure commercial jet pump machine & protective catch bag' },
      { label: 'Duration', value: 'Approx. 45 – 60 minutes per AC unit' },
      { label: 'Cleanliness', value: 'Zero wall stains or floor spillage; complete indoor masking' },
      { label: 'Recommended Frequency', value: 'Every 4 to 6 months in Bhubaneswar climate conditions' }
    ],
    faqs: [
      {
        question: 'How does jet pump cleaning differ from ordinary wet servicing?',
        answer: 'Standard cleaning usually involves manual brush wiping or low-pressure sprays that fail to dislodge compacted grime inside the evaporator fin channels. Jet pump machines generate sufficient targeted velocity to clean deep inside without bending aluminum fins.'
      },
      {
        question: 'Will water splash on my room walls or curtains?',
        answer: 'No. Our technicians wrap the indoor evaporator in a dedicated waterproof servicing apron with an evacuation hose leading directly into a collection vessel.'
      }
    ],
    standardNotice: 'Jet pump cleaning focuses on physical hygiene and thermodynamic heat transfer; electrical terminals are shielded prior to wash.'
  },
  {
    id: 'ac-installation',
    category: 'AC',
    number: '01C',
    title: 'AC Installation & Copper Pipe Fitting',
    tagline: 'Level mounting, copper line flare jointing, nitrogen pressure test, and vacuum pump evacuation.',
    shortDesc: 'Split & window installation · copper piping · core cutting · uninstallation · remounting',
    fullDesc: 'Improper installation is the leading cause of premature compressor burnout and refrigerant leaks. We follow standard refrigeration practices: precision leveling of indoor mounting plate, burr-free copper flaring, nitrogen pressure test when required, and vacuum dehydration prior to refrigerant release.',
    commonIssues: [
      'New AC installation for newly purchased or relocated units',
      'Uninstallation and careful refrigerant pump-down for shifting',
      'Extension or replacement of oxidized copper pipe lines',
      'Outdoor bracket fabrication and vibration isolator pad fitting'
    ],
    inspectionSteps: [
      { step: '01', title: 'Location & Structure Survey', desc: 'Assess wall load bearing, indoor louver clearance, drainage slope, and shortest copper run.' },
      { step: '02', title: 'Piping & Flare Jointing', desc: 'Heavy-gauge copper tube bending with proper spring tools, flare nut torqueing, and insulation wrap.' },
      { step: '03', title: 'Vacuum Evacuation', desc: 'Vacuum pump used to eliminate moisture and atmospheric non-condensables from the closed line.' },
      { step: '04', title: 'Pressure Release & Test', desc: 'Refrigerant valves opened, electrical supply energized, and full cooling cycle confirmed.' }
    ],
    technicalSpecs: [
      { label: 'Materials Used', value: 'Seamless refrigeration grade copper pipe with rubberized elastomeric insulation' },
      { label: 'Outdoor Mounting', value: 'Heavy-gauge anti-corrosive powder coated wall brackets with anchor bolts' },
      { label: 'Coverage', value: 'New residential apartments, offices, commercial spaces across Bhubaneswar' }
    ],
    faqs: [
      {
        question: 'Why is vacuuming necessary during AC installation?',
        answer: 'Moisture inside the copper circuit reacts with compressor POE oil to create hydrochloric and hydrofluoric acids that deteriorate motor windings and cause capillary choking. Proper vacuuming prevents premature compressor failure.'
      }
    ],
    standardNotice: 'Installation quality directly impacts the operational lifespan and cooling efficiency of your appliance.'
  },
  {
    id: 'refrigerator-repair',
    category: 'Refrigerator',
    number: '02',
    title: 'Refrigerator Repair & Service',
    tagline: 'Direct-cool, frost-free, and inverter refrigerator fault diagnosis and component repair.',
    shortDesc: 'Fault diagnosis · cooling failure · compressor testing · gas charging · thermostat & defrost timer',
    fullDesc: 'From single-door direct-cool refrigerators to advanced multi-door inverter units, our technicians inspect sealed system pressures, inverter compressor drive boards, bimetal defrost sensors, evaporator fan motors, and door gasket sealing.',
    commonIssues: [
      'Freezer is cold but lower fridge section is warm',
      'Refrigerator running continuously without thermostat cutoff',
      'Water pooling under vegetable crisper drawers',
      'Clicking sound from the rear compressor relay without cooling start',
      'Excessive ice accumulation blocking freezer airflow vents',
      'Gasket loose or degraded, causing cool air loss'
    ],
    inspectionSteps: [
      { step: '01', title: 'Compressor Circuit & Inverter Board', desc: 'Test PTC relay, overload protector (OLP), run capacitor, and inverter DC voltage modulation.' },
      { step: '02', title: 'Defrost System Inspection', desc: 'Multimeter continuity test across defrost heater coil, bimetal thermostat, and defrost timer/sensor.' },
      { step: '03', title: 'Refrigerant Pressure & Leak Check', desc: 'Inspection of dryer filter, capillary tube temperature drop, and condenser heat dissipation.' },
      { step: '04', title: 'Airflow & Damper Operation', desc: 'Verify evaporator fan motor RPM and motorized damper flap calibration between compartments.' }
    ],
    technicalSpecs: [
      { label: 'Appliance Types', value: 'Single Door, Double Door, Side-by-Side, French Door, Inverter Frost-Free' },
      { label: 'Major Components', value: 'Compressor, PTC Starter, Defrost Heater, Thermostat, Inverter PCB, Fan Motor' },
      { label: 'Service Style', value: 'Doorstep inspection with component testing on-site' }
    ],
    faqs: [
      {
        question: 'Why is my double-door fridge cold at the top but not cooling at the bottom?',
        answer: 'In frost-free refrigerators, this is typically caused by a failure in the automated defrost cycle (defrost heater, thermal fuse, or bimetal switch). Excess ice chokes the air duct leading to the fresh food zone.'
      },
      {
        question: 'Can inverter refrigerator motherboard (PCB) faults be repaired?',
        answer: 'Yes, depending on whether the fault lies in blown switching ICs, capacitors, or track corrosion. Our technician inspects the PCB to determine if component-level repair or replacement is optimal.'
      }
    ],
    standardNotice: 'Genuine replacement parts (relays, thermostats, defrost heaters, fan motors) used to ensure stable operational longevity.'
  },
  {
    id: 'washing-machine-repair',
    category: 'Washing Machine',
    number: '03',
    title: 'Washing Machine Repair & Service',
    tagline: 'Technical fault diagnosis, drum bearing replacement, drain pump, inlet valve, and PCB repair.',
    shortDesc: 'Fault diagnosis · component repair · front load · top load · semi-automatic · spin & drain faults',
    fullDesc: 'Doorstep repair for front load, top load, and semi-automatic washing machines. Whether your washer is showing error codes, refusing to spin, failing to drain water, or shaking violently during the spin cycle, our technicians isolate mechanical and electronic failures precisely.',
    commonIssues: [
      'Machine not draining water (OE / 5E error codes)',
      'Drum not rotating although motor is humming',
      'Excessive thumping noise and severe vibration during high-speed spin',
      'Water inlet valve not shutting off or taking too long to fill (IE / 4E)',
      'Door lock switch jammed or child lock not disengaging (dE / dC)',
      'Control board dead or displaying erratic programming cycles'
    ],
    inspectionSteps: [
      { step: '01', title: 'Drain Pump & Filter Check', desc: 'Clear debris/coin trap filter; test drain pump motor impeller resistance and drainage head.' },
      { step: '02', title: 'Drive System & Suspension Audit', desc: 'Inspect drive belt tension, direct drive motor stator/rotor, shock absorbers, and balance springs.' },
      { step: '03', title: 'Water Level Pressure Sensor', desc: 'Test pressure switch transducer frequency and clear pressure dome air tube blockage.' },
      { step: '04', title: 'PCB & Door Interlock Mechanism', desc: 'Check triac outputs on main controller board and verify door latch microswitch signal.' }
    ],
    technicalSpecs: [
      { label: 'Supported Architectures', value: 'Front Load Fully Automatic, Top Load Fully Automatic, Semi-Automatic Twin Tub' },
      { label: 'Key Components', value: 'Drain pump, water inlet solenoid valve, motor carbon brushes, drive belt, shock dampers, PCB' },
      { label: 'Service Scope', value: 'Mechanical and electronic component repair at your doorstep' }
    ],
    faqs: [
      {
        question: 'Why does my front load machine make loud banging noises when spinning?',
        answer: 'Loud noises during spin cycles are generally caused by worn drum spider bearings, broken suspension shock absorbers, or unbalanced floor feet. We inspect the drum play to diagnose if bearings or shocks are compromised.'
      },
      {
        question: 'Why is the machine not draining water out?',
        answer: 'Commonly due to a choked coin trap filter or burned-out drain pump motor. Clearing foreign objects often resolves the problem immediately.'
      }
    ],
    standardNotice: 'We inspect the physical mechanics and electronic controls before recommending any component replacement.'
  },
  {
    id: 'microwave-repair',
    category: 'Microwave Oven',
    number: '04',
    title: 'Microwave Oven Repair & Service',
    tagline: 'High-voltage circuit testing, magnetron replacement, turntable motor, and keypad touch membrane repair.',
    shortDesc: 'Fault diagnosis · heating failure · magnetron check · high-voltage diode · touch pad repair',
    fullDesc: 'Microwave ovens involve lethal high-voltage systems (2,000+ Volts) that should only be serviced by trained technicians. We diagnose heating failures, sparking inside the cavity, dead display panels, and faulty door interlock microswitches across Solo, Grill, and Convection models.',
    commonIssues: [
      'Microwave turns on and turntable rotates but food remains cold',
      'Loud buzzing or humming noise during heating cycle',
      'Sparking or arcing inside cavity near mica wave-guide sheet',
      'Turntable glass tray not spinning or jerking unevenly',
      'Keypad buttons unresponsive or start button not triggering',
      'Door latch not closing tightly; machine trips house breaker on open'
    ],
    inspectionSteps: [
      { step: '01', title: 'High-Voltage Discharge & Safety', desc: 'Safely discharge high-voltage capacitor using insulated grounding probes before internal contact.' },
      { step: '02', title: 'Magnetron & Diode Diagnostic', desc: 'Test magnetron filament resistance and high-voltage diode forward/reverse bias.' },
      { step: '03', title: 'Door Interlock Safety Switches', desc: 'Check primary, secondary, and monitor door interlock microswitches for proper contact sequencing.' },
      { step: '04', title: 'Cavity & Waveguide Inspection', desc: 'Examine mica sheet for burn marks and test convection fan motor and thermal cut-off fuse.' }
    ],
    technicalSpecs: [
      { label: 'Supported Types', value: 'Solo, Grill, Convection, Built-in Microwave Ovens' },
      { label: 'Safety Protocol', value: 'Safe high-voltage capacitor discharge before servicing; radiation leakage test post-repair' },
      { label: 'Turnaround', value: 'Rapid doorstep inspection across Patia & Bhubaneswar' }
    ],
    faqs: [
      {
        question: 'Is it worth repairing a microwave oven that is not heating?',
        answer: 'Yes. In the majority of non-heating cases, replacing a faulty high-voltage diode, capacitor, or thermal fuse restores normal operation at a fraction of the cost of a new appliance.'
      },
      {
        question: 'Why does my microwave spark like fireworks inside?',
        answer: 'This is usually caused by food splatter burned onto the mica waveguide cover plate, creating carbon tracks that arc. Replacing the inexpensive mica sheet solves this problem.'
      }
    ],
    standardNotice: 'High-voltage components require professional test tools and safety discharge procedures.'
  }
];

export const TECHNICAL_AC_ISSUES = [
  {
    id: 'ac-not-cooling',
    code: 'FAULT / 01',
    name: 'AC NOT COOLING',
    symptom: 'Indoor unit blows normal room air; no cooling effect after 15 minutes of operation.',
    likelyCauses: 'Low refrigerant pressure due to micro-leak, weak compressor capacitor, choked cooling coil, or dirty air filter.',
    inspection: 'Technician hooks up manifold gauge to measure suction PSI and tests compressor capacitor rating.'
  },
  {
    id: 'gas-leakage',
    code: 'FAULT / 02',
    name: 'GAS LEAKAGE',
    symptom: 'Oil stains around flare joints, ice on suction line, or gradual loss of cooling over days.',
    likelyCauses: 'Corrosion pinholes in copper tubing, cracked flare nuts, or valve stem seal failure.',
    inspection: 'Nitrogen pressure testing followed by soap bubble or electronic halogen leak detection.'
  },
  {
    id: 'gas-charging',
    code: 'FAULT / 03',
    name: 'GAS CHARGING',
    symptom: 'Refrigerant depleted following repair of leak or major component replacement.',
    likelyCauses: 'System empty after brazing or leak rectification.',
    inspection: 'Complete vacuum evacuation below 500 microns, followed by precise refrigerant charge by weight (R32 / R410A / R22).'
  },
  {
    id: 'jet-pump-cleaning',
    code: 'SERVICE / 04',
    name: 'JET PUMP CLEANING',
    symptom: 'Sluggish airflow, dust blowing from louvers, damp musty odor, or increased electricity usage.',
    likelyCauses: 'Compacted fungal and particulate buildup between cooling coil fins and on blower blades.',
    inspection: 'High-pressure wash with waterproof protective jacket, clearing coil channels thoroughly.'
  },
  {
    id: 'wet-servicing',
    code: 'SERVICE / 05',
    name: 'WET SERVICING',
    symptom: 'Routine pre-summer or post-monsoon hygiene and maintenance service.',
    likelyCauses: 'Seasonal maintenance cycle required for optimal performance.',
    inspection: 'Filter wash, drain tray chemical rinse, electrical terminal tightening, and temperature split verification.'
  },
  {
    id: 'pcb-repair',
    code: 'FAULT / 06',
    name: 'PCB REPAIR',
    symptom: 'AC won\'t switch on, erratic error codes, inverter communication errors (E1, E6), or outdoor unit fan not starting.',
    likelyCauses: 'Voltage surges, IPM module failure, blown MOV surge suppressor, or corroded PCB copper traces.',
    inspection: 'Circuit board diagnostic bench test, power supply regulator check, and sensor resistance measurement.'
  },
  {
    id: 'remote-not-working',
    code: 'FAULT / 07',
    name: 'REMOTE NOT WORKING',
    symptom: 'Indoor unit does not respond to remote commands; manual emergency switch works.',
    likelyCauses: 'Faulty infrared receiver sensor module on AC display board or remote transmitter failure.',
    inspection: 'IR camera signal test and receiver eye voltage verification on the indoor display panel.'
  },
  {
    id: 'ac-installation',
    code: 'SERVICE / 08',
    name: 'AC INSTALLATION',
    symptom: 'New AC unit installation or relocation of existing split/window air conditioner.',
    likelyCauses: 'Moving to a new house, new AC delivery, or room rearrangement.',
    inspection: 'Wall leveling, outdoor bracket anchoring, vibration damping, and clean copper pipe run.'
  },
  {
    id: 'copper-pipe-installation',
    code: 'SERVICE / 09',
    name: 'COPPER PIPE INSTALLATION',
    symptom: 'Piping damaged, kinked during shifting, oxidized, or distance between indoor and outdoor unit increased.',
    likelyCauses: 'Poor previous installation, physical impact, or architectural changes.',
    inspection: 'Refrigerant-grade copper tubing flaring, elastomeric insulation sleeve, and non-adhesive wrapping tape.'
  },
  {
    id: 'condenser-replacement',
    code: 'FAULT / 10',
    name: 'CONDENSER REPLACEMENT',
    symptom: 'Multiple pinhole leaks in aluminum condenser coils that cannot be reliably brazed.',
    likelyCauses: 'Coastal or high-humidity atmospheric corrosion on condenser coils.',
    inspection: 'Pressure test verification; retrofitting high-efficiency 100% copper condenser coil replacement.'
  }
];

export const DIAGNOSTIC_CHECKLIST = [
  {
    id: 'power',
    name: 'POWER',
    desc: 'Voltage stability, MCB rating, power socket contact, earthing continuity, and line surge check.'
  },
  {
    id: 'connections',
    name: 'CONNECTIONS',
    desc: 'Compressor contactors, capacitor microfarads, terminal block tightness, and wiring harnesses.'
  },
  {
    id: 'components',
    name: 'COMPONENTS',
    desc: 'Compressor pump condition, fan motor windings, bimetal thermostats, and PCB microcontrollers.'
  },
  {
    id: 'cooling',
    name: 'COOLING',
    desc: 'Standing vs running suction/discharge pressures, capillary expansion, and evaporator fin airflow.'
  },
  {
    id: 'electrical',
    name: 'ELECTRICAL',
    desc: 'Running Amps vs rated full-load Amps (RLA), insulation resistance, and relay engagement.'
  },
  {
    id: 'function',
    name: 'FUNCTION',
    desc: 'Thermostat cycle cut-off, automated defrost sequence, drainage velocity, and temperature drop test.'
  }
];

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Debasish Mohanty',
    rating: 5,
    date: '2 months ago',
    serviceTag: 'AC',
    highlight: 'Identified the actual problem instead of suggesting gas charging',
    text: 'My split AC had stopped cooling during peak summer. Another technician told me the gas had leaked and asked for ₹3000. B-Tech Repair came to my Patia flat, inspected with a multimeter, and found only the compressor capacitor had failed. Replaced it on the spot and cooling was back. Honest diagnosis and reasonable service charges.',
    location: 'Patia, Bhubaneswar'
  },
  {
    id: 'rev-2',
    author: 'Subrat Kumar Sahoo',
    rating: 5,
    date: '3 months ago',
    serviceTag: 'AC Jet Pump',
    highlight: 'Proper jet pump wash with apron — zero mess on walls',
    text: 'Booked jet pump cleaning for two ACs in Chandrasekharpur. They brought the complete jet machine and protective water jacket so not a single drop touched the wallpaper. The amount of dust flushed out was shocking. Airflow is like brand new now.',
    location: 'Chandrasekharpur, Bhubaneswar'
  },
  {
    id: 'rev-3',
    author: 'Priyanka Tripathy',
    rating: 5,
    date: '1 month ago',
    serviceTag: 'Washing Machine',
    highlight: 'Front load washer drum noise resolved smoothly',
    text: 'My IFB front load washing machine was making an unbearable sound during spin cycles. Technician arrived within 1 hour of calling, diagnosed worn bearing and suspension dampers, explained the work clearly, and completed the repair neatly. Highly professional behaviour.',
    location: 'KIIT Square / Sishu Vihar'
  },
  {
    id: 'rev-4',
    author: 'Ansuman Dash',
    rating: 5,
    date: '4 months ago',
    serviceTag: 'Refrigerator',
    highlight: 'Inverter fridge cooling restored with genuine relay',
    text: 'Samsung double door refrigerator compressor was clicking and not turning on. Called B-Tech Repair in the morning and by afternoon the issue was resolved with genuine starter parts. No unnecessary parts pushed.',
    location: 'Jayadev Vihar, Bhubaneswar'
  },
  {
    id: 'rev-5',
    author: 'Rashmi Rekha Jena',
    rating: 5,
    date: '2 weeks ago',
    serviceTag: 'Microwave Oven',
    highlight: 'Quick diagnosis of non-heating issue',
    text: 'Microwave was running but not heating food at all. Technician tested the high-voltage diode and magnetron, replaced the damaged diode, and tested heating with a water bowl before handing over. Very practical and polite service.',
    location: 'Nayapalli, Bhubaneswar'
  },
  {
    id: 'rev-6',
    author: 'Santosh Kumar Nayak',
    rating: 5,
    date: '1 month ago',
    serviceTag: 'AC',
    highlight: 'Doorstep service in Cuttack on time',
    text: 'Needed AC uninstallation and reinstallation while shifting from Bhubaneswar to CDA Cuttack. Neat copper piping, vacuumed the system before starting, and tested cooling thoroughly. Standard charges with proper bill.',
    location: 'CDA Sector 9, Cuttack'
  }
];

export const SERVICE_AREAS_LIST: ServiceArea[] = [
  { name: 'Patia & KIIT Campus', zone: 'North Bhubaneswar', landmarks: 'Sishu Vihar, Koel Campus, Magneto, Infocity, Silicon Institute', timing: 'Same-day / Within 60 mins' },
  { name: 'Chandrasekharpur', zone: 'North Bhubaneswar', landmarks: 'Damana, Rail Vihar, Care Hospital area, Sailashree Vihar', timing: 'Same-day doorstep' },
  { name: 'Jayadev Vihar & Nayapalli', zone: 'Central Bhubaneswar', landmarks: 'IRC Village, Mayfair area, Behera Sahi, VIP Colony', timing: 'Same-day doorstep' },
  { name: 'Saheed Nagar & Rasulgarh', zone: 'Central & East Bhubaneswar', landmarks: 'Vani Vihar, Bomikhal, Palasuni, Cuttack Road', timing: 'Same-day doorstep' },
  { name: 'Khandagiri & Jagamara', zone: 'South-West Bhubaneswar', landmarks: 'ITER College road, Pokhariput, Gandamunda, Baramunda', timing: 'Same-day doorstep' },
  { name: 'Cuttack & Nearby Areas', zone: 'Cuttack City & Suburbs', landmarks: 'CDA Sectors, Link Road, Madhupatna, Badambadi, Jagatpur', timing: 'Pre-scheduled Doorstep Visits' }
];

export const GENERAL_FAQS = [
  {
    question: 'How do I book a doorstep technician from B-Tech Repair?',
    answer: 'You can directly call our repair desk at 072057 19060 or use the online service intake form below. We confirm your appliance details, issue, and address immediately.'
  },
  {
    question: 'How quickly does the technician reach my address?',
    answer: 'For Patia, Chandrasekharpur, and central Bhubaneswar, doorstep visits are typically initiated within 60 to 90 minutes depending on technician availability.'
  },
  {
    question: 'What is your policy regarding genuine spare parts?',
    answer: 'We prioritize genuine, manufacturer-grade replacement components (capacitors, relays, thermostats, sensors, fan motors, PCB components) to maintain equipment reliability.'
  },
  {
    question: 'Do technicians explain the required work before starting?',
    answer: 'Yes. The technician conducts a physical and electrical diagnosis first, explains the root fault and estimated repair costs, and only proceeds after your approval.'
  },
  {
    question: 'Do you provide doorstep repair services in Cuttack?',
    answer: 'Yes. In addition to extensive coverage across Bhubaneswar, we cater to Cuttack and surrounding neighborhoods. Service availability may vary depending on scheduling.'
  }
];
