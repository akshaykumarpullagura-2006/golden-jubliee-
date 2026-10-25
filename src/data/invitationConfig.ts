export type Language = 'te' | 'kn' | 'en';

export interface ScheduleEvent {
  id: string;
  timeDisplay: string;
  title: string;
  description: string;
  category: 'pooja' | 'vratham' | 'function' | 'feast';
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  category: 'couple' | 'family' | 'traditional';
}

export interface FamilyGroupItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  names: string[];
}

export interface InvitationConfig {
  eventTitle: string;
  jubileeYears: number;
  yearsText: string;
  subHeading: string;
  mangalaVachanam: string;
  slokam: {
    line1: string;
    line2: string;
    translation?: string;
  };
  coverButtonText: string;
  coverHintText: string;
  couple: {
    wifeHonorific: string;
    wifeName: string;
    husbandHonorific: string;
    husbandName: string;
    familyName: string;
    tagline: string;
    inviteQuote: string;
    photoSrc: string;
    altText: string;
  };
  dateDetails: {
    isoDate: string; // for calendar and countdown (2026-10-30T09:00:00+05:30)
    dateDisplay: string;
    dayDisplay: string;
    fullDateDisplay: string;
    countdownLabels: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  schedule: ScheduleEvent[];
  venue: {
    sectionBadge: string;
    label: string;
    name: string;
    hasAc: boolean;
    town: string;
    districtState: string;
    googleMapsUrl: string;
    buttonText: string;
    copyAddressText: string;
    copiedText: string;
    photoSrc?: string;
  };
  familySection: {
    badge: string;
    heading: string;
    groups: FamilyGroupItem[];
  };
  invitationSignOff: {
    invitedByLabel: string;
    invitedByName: string;
    blessingsLabel: string;
    coupleCombined: string;
  };
  blessingsWall: {
    sectionBadge: string;
    heading: string;
    namePlaceholder: string;
    cityPlaceholder: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    submittedMessage: string;
    recentWishes: string;
  };
  gallery: GalleryItem[];
  gallerySection: {
    sectionBadge: string;
    heading: string;
    filterAll: string;
    filterCouple: string;
    filterFamily: string;
    filterTraditional: string;
  };
  headerNav: {
    cover: string;
    couple: string;
    schedule: string;
    venue: string;
    family: string;
    gallery: string;
    wishes: string;
  };
  footer: {
    blessing: string;
    shareBtn: string;
    scrollToTop: string;
  };
  calendar: {
    title: string;
    details: string;
    icsDescription: string;
  };
}

// -------------------------------------------------------------
// TELUGU (తెలుగు) CONFIGURATION
// -------------------------------------------------------------
export const INVITATION_CONFIG_TE: InvitationConfig = {
  eventTitle: 'గోల్డెన్ జూబ్లీ',
  jubileeYears: 50,
  yearsText: 'Years of Togetherness',
  subHeading: 'స్వర్ణోత్సవ ఆహ్వాన పత్రిక',
  mangalaVachanam: 'శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు',
  slokam: {
    line1: 'కల్యాణాద్భుత గాత్రాయ కామితార్థ ప్రదాయినే |',
    line2: 'శ్రీమద్వేంకట నాథాయ శ్రీ నివాసాయ మంగళం ||',
    translation: 'కల్యాణ గుణ స్వరూపుడై, కోరిన కోర్కెలను అనుగ్రహించే శ్రీ వేంకటేశ్వర స్వామి వారికి శుభ మంగళం.',
  },
  coverButtonText: 'ఆహ్వాన పత్రిక తెరవండి',
  coverHintText: 'స్పర్శించి తెరవండి • Tap to Open',
  couple: {
    wifeHonorific: 'శ్రీమతి',
    wifeName: 'పుల్లగూర సుబ్బలక్షుమ్మ',
    husbandHonorific: 'శ్రీ',
    husbandName: 'పుల్లగూర పెద్ద గోవిందు స్వామి',
    familyName: 'పుల్లగూర ఫ్యామిలీ',
    tagline: '50 Years of Togetherness',
    inviteQuote: 'ఈ మా వేడుకకు మీరు విచ్చేయుటయే మా ఆనందానికి చిరునామా',
    photoSrc: '/images/anniversary_photos/gallery_07.jpg',
    altText: 'శ్రీమతి పుల్లగూర సుబ్బలక్షుమ్మ & శ్రీ పుల్లగూర పెద్ద గోవిందు స్వామి - గోల్డెన్ జూబ్లీ దంపతులు',
  },
  dateDetails: {
    isoDate: '2026-10-30T09:00:00+05:30',
    dateDisplay: '30-10-2026',
    dayDisplay: 'శుక్రవారం',
    fullDateDisplay: '30-10-2026, శుక్రవారం',
    countdownLabels: {
      days: 'రోజులు',
      hours: 'గంటలు',
      minutes: 'నిమిషాలు',
      seconds: 'సెకన్లు',
    },
  },
  schedule: [
    {
      id: 'event-1',
      timeDisplay: 'ఉదయం 9:00',
      title: 'సత్యనారాయణ స్వామి పూజ ప్రారంభం',
      description: 'దంపతుల కలకాలం ఆయురారోగ్యాలకై శ్రీ సత్యనారాయణ స్వామి వారి దివ్య వ్రతం',
      category: 'vratham',
    },
    {
      id: 'event-2',
      timeDisplay: 'మధ్యాహ్నం 12:00',
      title: 'పాద పూజ',
      description: 'తల్లిదండ్రులకు భక్తి పూర్వకంగా సమర్పించే మాతృ-పితృ పాద పూజా మహోత్సవం',
      category: 'pooja',
    },
    {
      id: 'event-3',
      timeDisplay: 'మధ్యాహ్నం 12:30',
      title: 'గోల్డెన్ జూబ్లీ వేడుక',
      description: '50 వసంతాల దాంపత్య జీవిత స్వర్ణోత్సవ సంబరం & బంధుమిత్రుల ఆశీర్వచనాలు',
      category: 'function',
    },
    {
      id: 'event-4',
      timeDisplay: 'మధ్యాహ్నం 1:30',
      title: 'విందు భోజనం',
      description: 'ఆత్మీయ బంధుమిత్రులకు సంప్రదాయ రుచులతో కూడిన ఘనమైన విందు భోజనం',
      category: 'feast',
    },
  ],
  venue: {
    sectionBadge: 'కళ్యాణ వేదిక & చిరునామా',
    label: 'వేదిక',
    name: 'శ్రీ వాసవి కళ్యాణ మండపం (A/C)',
    hasAc: true,
    town: 'యర్రగుంట్ల',
    districtState: 'వైఎస్సార్ కడప జిల్లా, ఆంధ్రప్రదేశ్',
    googleMapsUrl: 'https://maps.app.goo.gl/WRcHfpXynxELXoJc6',
    buttonText: 'Google Mapsలో మార్గం చూడండి',
    copyAddressText: 'చిరునామా కాపీ చేయండి',
    copiedText: 'చిరునామా కాపీ చేయబడింది!',
    photoSrc: '/images/anniversary_photos/gallery_invite_page1.jpg',
  },
  familySection: {
    badge: 'ఆత్మీయ ఆహ్వానం • Family Cordial Invite',
    heading: 'మా కుటుంబం తరఫున ఆహ్వానం',
    groups: [
      {
        id: 'sons',
        title: 'కుమారులు',
        subtitle: 'Sons',
        tag: 'మా అమ్మా నాన్నల గోల్డెన్ జూబ్లీ వేడుకకి తప్పకుండా రండి!',
        names: ['ASHOK KUMAR', 'MURALI KRISHNA MURTHY', 'RAJESH KUMAR', 'PRAVEEN KUMAR'],
      },
      {
        id: 'daughters-in-law',
        title: 'కోడళ్ళు',
        subtitle: 'Daughters-in-law',
        tag: 'మా మామయ్య, అత్తమ్మల గోల్డెన్ జూబ్లీ వేడుకకి తప్పకుండా రండి!',
        names: ['MAHA LAKSHMI', 'PRASHANTHI', 'SAI LAKSHMI'],
      },
      {
        id: 'grandchildren',
        title: 'మనుమలు & మనుమరాళ్ళు',
        subtitle: 'Grandchildren',
        tag: 'మా అబ్బా నానమ్మల వేడుకకి తప్పకుండా రండి!',
        names: ['AKSHAY KUMAR', 'ADITHYA', 'AMRUTHA', 'HARSHA SASI NIKETHAN', 'HITHASVI'],
      },
    ],
  },
  invitationSignOff: {
    invitedByLabel: 'ఆహ్వానించువారు:',
    invitedByName: 'శ్రీ పుల్లగూర ఫ్యామిలీ',
    blessingsLabel: 'శుభాశీస్సులతో:',
    coupleCombined: 'శ్రీమతి పుల్లగూర సుబ్బలక్షుమ్మ & శ్రీ పుల్లగూర పెద్ద గోవిందు స్వామి',
  },
  blessingsWall: {
    sectionBadge: 'శుభాకాంక్షలు & ఆశీస్సులు',
    heading: 'దంపతులకు మీ ఆశీర్వచనాలు',
    namePlaceholder: 'మీ పేరు (Your Name) *',
    cityPlaceholder: 'ఊరు / గ్రామం (City / Town)',
    messagePlaceholder: 'దంపతులకు మీ మనస్ఫూర్తిగా ఇచ్చే ఆశీర్వాదం రాయండి... *',
    submitBtn: 'ఆశీర్వాదం పంపండి',
    submittingBtn: 'పంపుతున్నాము...',
    submittedMessage: 'మీ ఆశీస్సులు కృతజ్ఞతతో స్వీకరించబడ్డాయి! ధన్యవాదాలు.',
    recentWishes: 'ఆత్మీయుల ఆశీర్వాదాలు',
  },
  gallerySection: {
    sectionBadge: 'మధుర క్షణాలు & జ్ఞాపకాలు',
    heading: 'ఫోటో గ్యాలరీ',
    filterAll: 'అన్నీ',
    filterCouple: 'స్వర్ణ దంపతులు',
    filterFamily: 'కుటుంబం',
    filterTraditional: 'సాంప్రదాయం',
  },
  gallery: [
    {
      id: 'photo-1',
      title: 'స్వర్ణ దంపతులు',
      caption: 'శ్రీమతి పుల్లగూర సుబ్బలక్షుమ్మ & శ్రీ పుల్లగూర పెద్ద గోవిందు స్వామి - 50 వసంతాల స్వర్ణోత్సవం',
      src: '/images/anniversary_photos/gallery_07.jpg',
      category: 'couple',
    },
    {
      id: 'photo-2',
      title: 'స్వర్ణోత్సవ దాంపత్య శోభ',
      caption: 'అన్యోన్య అనురాగాల 50 వసంతాల పవిత్ర దాంపత్య ప్రయాణం',
      src: '/images/anniversary_photos/gallery_08.jpg',
      category: 'couple',
    },
    {
      id: 'photo-3',
      title: 'దైవ సన్నిధిలో పూజా సంకల్పం',
      caption: 'మంగళప్రదమైన దైవ సన్నిధానంలో సాంప్రదాయ వస్త్రాలంకృతులై పూజలో పాల్గొన్న దంపతులు',
      src: '/images/anniversary_photos/gallery_01.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-4',
      title: 'పవిత్ర తలంబ్రాల మహోత్సవం',
      caption: 'ఆత్మీయ బంధువుల అక్షింతలు, ఆశీర్వచనాల నడుమ నేత్రపర్వంగా జరిగిన తలంబ్రాల వేడుక',
      src: '/images/anniversary_photos/gallery_05.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-5',
      title: 'మంగళసూత్ర & ఉంగరాల మార్పిడి',
      caption: 'స్వర్ణ దాంపత్య ప్రమాణాల పునరుద్ధరణ - ఆత్మీయుల హర్షధ్వానాల నడుమ వేడుక',
      src: '/images/anniversary_photos/gallery_03.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-6',
      title: 'ముద్దుల మనవరాలితో మధుర క్షణాలు',
      caption: 'తాతయ్య, నానమ్మల ప్రేమానురాగాల ఒడిలో మురిసిపోతున్న చిన్నారి మనవరాలు',
      src: '/images/anniversary_photos/gallery_02.jpg',
      category: 'family',
    },
    {
      id: 'photo-7',
      title: 'ఉమ్మడి పుల్లగూర కుటుంబ వేడుక',
      caption: 'బిడ్డలు, కోడళ్ళు, అల్లుళ్ళు, మనవలు మనవరాళ్ళ ఆనందోత్సాహాల నిండు కుటుంబ సమ్మేళనం',
      src: '/images/anniversary_photos/gallery_06.jpg',
      category: 'family',
    },
    {
      id: 'photo-8',
      title: 'కుటుంబ సంబరాలు & ఆశీస్సులు',
      caption: 'తరతరాల అనుబంధానికి ప్రతీకగా నిలిచిన మధురమైన కుటుంబ జ్ఞాపకం',
      src: '/images/anniversary_photos/gallery_09.jpg',
      category: 'family',
    },
    {
      id: 'photo-9',
      title: 'శ్రీ పుల్లగూర పెద్ద గోవిందు స్వామి గారు',
      caption: 'కుటుంబ పెద్ద, నిస్వార్థ ప్రేమానురాగాల మూర్తిమంతం',
      src: '/images/anniversary_photos/gallery_04.jpg',
      category: 'couple',
    },
    {
      id: 'photo-10',
      title: 'కళ్యాణ వేదిక — శ్రీ వాసవి కళ్యాణ మండపం',
      caption: 'యర్రగుంట్ల, వైఎస్సార్ కడప జిల్లా (A/C సౌకర్యంతో)',
      src: '/images/anniversary_photos/gallery_invite_page1.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-ref',
      title: 'స్వర్ణోత్సవ శుభపత్రిక',
      caption: 'అక్షరరూపంలో బంధుమిత్రులకు సమర్పించిన సంప్రదాయ గోల్డెన్ జూబ్లీ ఆహ్వాన పత్రిక',
      src: '/images/original_reference_invitation.jpg',
      category: 'traditional',
    },
  ],
  headerNav: {
    cover: 'కవర్',
    couple: 'దంపతులు',
    schedule: 'సమయాలు',
    venue: 'వేదిక',
    family: 'కుటుంబం',
    gallery: 'గ్యాలరీ',
    wishes: 'ఆశీస్సులు',
  },
  footer: {
    blessing: 'సర్వేజనాః సుఖినోభవంతు • మంగళం మహత్',
    shareBtn: 'ఆహ్వానాన్ని షేర్ చేయండి',
    scrollToTop: 'పైకి వెళ్ళండి',
  },
  calendar: {
    title: 'గోల్డెన్ జూబ్లీ - శ్రీమతి పుల్లగూర సుబ్బలక్షుమ్మ & శ్రీ పుల్లగూర పెద్ద గోవిందు స్వామి',
    details: '50 వసంతాల దాంపత్య స్వర్ణోత్సవం (Golden Jubilee Celebration)\n\nకార్యక్రమ వివరాలు:\n• ఉదయం 9:00 — సత్యనారాయణ స్వామి పూజ ప్రారంభం\n• మధ్యాహ్నం 12:00 — పాద పూజ\n• మధ్యాహ్నం 12:30 — గోల్డెన్ జూబ్లీ వేడుక\n• మధ్యాహ్నం 1:30 — విందు భోజనం\n\nఆహ్వానించువారు: శ్రీ పుల్లగూర ఫ్యామిలీ',
    icsDescription: '50 వసంతాల దాంపత్య స్వర్ణోత్సవ వేడుక\\n\\nకార్యక్రమ వివరాలు:\\n09:00 AM - శ్రీ సత్యనారాయణ స్వామి పూజ ప్రారంభం\\n12:00 PM - పాద పూజ\\n12:30 PM - గోల్డెన్ జూబ్లీ వేడుక\\n01:30 PM - విందు భోజనం\\n\\nఆహ్వానించువారు: శ్రీ పుల్లగూర ఫ్యామిలీ',
  },
};

// -------------------------------------------------------------
// KANNADA (ಕನ್ನಡ) CONFIGURATION
// -------------------------------------------------------------
export const INVITATION_CONFIG_KN: InvitationConfig = {
  eventTitle: 'ಗೋಲ್ಡನ್ ಜುಬಿಲಿ',
  jubileeYears: 50,
  yearsText: 'Years of Togetherness',
  subHeading: 'ಸ್ವರ್ಣ ಮಹೋತ್ಸವ ಆಹ್ವಾನ ಪತ್ರಿಕೆ',
  mangalaVachanam: 'ಶ್ರೀರಸ್ತು • ಶುಭಮಸ್ತು • ಅವಿಘ್ನಮಸ್ತು',
  slokam: {
    line1: 'ಕಲ್ಯಾಣಾದ್ಭುತ ಗಾತ್ರಾಯ ಕಾಮಿತಾರ್ಥ ಪ್ರದಾಯಿನೇ |',
    line2: 'ಶ್ರೀಮದ್ವೇಂಕಟ ನಾಥಾಯ ಶ್ರೀ ನಿವಾಸಾಯ ಮಂಗಳಂ ||',
    translation: 'ಕಲ್ಯಾಣ ಗುಣ ಸ್ವರೂಪನೂ, ಬಯಸಿದ ವರಗಳನ್ನು ಕರುಣಿಸುವ ಶ್ರೀ ವೇಂಕಟೇಶ್ವರ ಸ್ವಾಮಿಗೆ ಮಂಗಳವಾಗಲಿ.',
  },
  coverButtonText: 'ಆಹ್ವಾನ ಪತ್ರಿಕೆ ತೆರೆಯಿರಿ',
  coverHintText: 'ಸ್ಪರ್ಶಿಸಿ ತೆರೆಯಿರಿ • Tap to Open',
  couple: {
    wifeHonorific: 'ಶ್ರೀಮತಿ',
    wifeName: 'ಪುಲ್ಲಗೂರಾ ಸುಬ್ಬಲಕ್ಷ್ಮಮ್ಮ',
    husbandHonorific: 'ಶ್ರೀ',
    husbandName: 'ಪುಲ್ಲಗೂರಾ ಪೆದ್ದ ಗೋವಿಂದ ಸ್ವಾಮಿ',
    familyName: 'ಪುಲ್ಲಗೂರಾ ಪರಿವಾರ',
    tagline: '50 Years of Togetherness',
    inviteQuote: 'ಈ ನಮ್ಮ ಶುಭ ಸಮಾರಂಭಕ್ಕೆ ನೀವು ಆಗಮಿಸುವುದೇ ನಮ್ಮ ಸಂತೋಷಕ್ಕೆ ಕಾರಣ',
    photoSrc: '/images/anniversary_photos/gallery_07.jpg',
    altText: 'ಶ್ರೀಮತಿ ಪುಲ್ಲಗೂರಾ ಸುಬ್ಬಲಕ್ಷ್ಮಮ್ಮ & ಶ್ರೀ ಪುಲ್ಲಗೂರಾ ಪೆದ್ದ ಗೋವಿಂದ ಸ್ವಾಮಿ - ಗೋಲ್ಡನ್ ಜುಬಿಲಿ ದಂಪತಿಗಳು',
  },
  dateDetails: {
    isoDate: '2026-10-30T09:00:00+05:30',
    dateDisplay: '30-10-2026',
    dayDisplay: 'ಶುಕ್ರವಾರ',
    fullDateDisplay: '30-10-2026, ಶುಕ್ರವಾರ',
    countdownLabels: {
      days: 'ದಿನಗಳು',
      hours: 'ಗಂಟೆಗಳು',
      minutes: 'ನಿಮಿಷಗಳು',
      seconds: 'ಸೆಕೆಂಡುಗಳು',
    },
  },
  schedule: [
    {
      id: 'event-1',
      timeDisplay: 'ಬೆಳಗ್ಗೆ 9:00',
      title: 'ಸತ್ಯನಾರಾಯಣ ಸ್ವಾಮಿ ಪೂಜೆ ಪ್ರಾರಂಭ',
      description: 'ದಂಪತಿಗಳ ದೀರ್ಘಾಯುಷ್ಯ ಮತ್ತು ಆಯುರಾರೋಗ್ಯಕ್ಕಾಗಿ ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಸ್ವಾಮಿ ವ್ರತ',
      category: 'vratham',
    },
    {
      id: 'event-2',
      timeDisplay: 'ಮಧ್ಯಾಹ್ನ 12:00',
      title: 'ಪಾದ ಪೂಜೆ',
      description: 'ಪೂಜ್ಯ ತಂದೆ-ತಾಯಿಯರಿಗೆ ಭಕ್ತಿಪೂರ್ವಕವಾಗಿ ಸಲ್ಲಿಸುವ ಪಾದ ಪೂಜಾ ಮಹೋತ್ಸವ',
      category: 'pooja',
    },
    {
      id: 'event-3',
      timeDisplay: 'ಮಧ್ಯಾಹ್ನ 12:30',
      title: 'ಗೋಲ್ಡನ್ ಜುಬಿಲಿ ಸಂಭ್ರಮ',
      description: '50 ವರ್ಷಗಳ ದಾಂಪತ್ಯ ಜೀವನದ ಸ್ವರ್ಣ ಮಹೋತ್ಸವ & ಬಂಧು-ಮಿತ್ರರ ಆಶೀರ್ವಾದ',
      category: 'function',
    },
    {
      id: 'event-4',
      timeDisplay: 'ಮಧ್ಯಾಹ್ನ 1:30',
      title: 'ವಿಶೇಷ ಭೋಜನ',
      description: 'ಆತ್ಮೀಯ ಬಂಧು-ಮಿತ್ರರಿಗೆ ಸಾಂಪ್ರದಾಯಿಕ ರುಚಿಯಾದ ಭೋಜನ ಕೂಟ',
      category: 'feast',
    },
  ],
  venue: {
    sectionBadge: 'ಕಲ್ಯಾಣ ಮಂಟಪ & ವಿಳಾಸ',
    label: 'ಸ್ಥಳ',
    name: 'ಶ್ರೀ ವಾಸವಿ ಕಲ್ಯಾಣ ಮಂಟಪ (A/C)',
    hasAc: true,
    town: 'ಯರ್ರಗುಂಟ್ಲ',
    districtState: 'ವೈಎಸ್ಆರ್ ಕಡಪ ಜಿಲ್ಲೆ, ಆಂಧ್ರಪ್ರದೇಶ',
    googleMapsUrl: 'https://maps.app.goo.gl/WRcHfpXynxELXoJc6',
    buttonText: 'Google Mapsನಲ್ಲಿ ದಾರಿ ನೋಡಿ',
    copyAddressText: 'ವಿಳಾಸ ನಕಲಿಸಿ',
    copiedText: 'ವಿಳಾಸ ನಕಲಿಸಲಾಗಿದೆ!',
    photoSrc: '/images/anniversary_photos/gallery_invite_page1.jpg',
  },
  familySection: {
    badge: 'ಆತ್ಮೀಯ ಆಹ್ವಾನ • Family Cordial Invite',
    heading: 'ನಮ್ಮ ಕುಟುಂಬದ ವತಿಯಿಂದ ಹೃತ್ಪೂರ್ವಕ ಆಹ್ವಾನ',
    groups: [
      {
        id: 'sons',
        title: 'ಪುತ್ರರು',
        subtitle: 'Sons',
        tag: 'ನಮ್ಮ ತಂದೆ-ತಾಯಿಯರ ಗೋಲ್ಡನ್ ಜುಬಿಲಿ ಸಂಭ್ರಮಕ್ಕೆ ಪ್ರೀತಿಯ ಸ್ವಾಗತ!',
        names: ['ASHOK KUMAR', 'MURALI KRISHNA MURTHY', 'RAJESH KUMAR', 'PRAVEEN KUMAR'],
      },
      {
        id: 'daughters-in-law',
        title: 'ಸೊಸೆಯಂದಿರು',
        subtitle: 'Daughters-in-law',
        tag: 'ನಮ್ಮ ಮಾವಯ್ಯ-ಅತ್ತೆಯವರ ಗೋಲ್ಡನ್ ಜುಬಿಲಿ ಸಂಭ್ರಮಕ್ಕೆ ಪ್ರೀತಿಯ ಸ್ವಾಗತ!',
        names: ['MAHA LAKSHMI', 'PRASHANTHI', 'SAI LAKSHMI'],
      },
      {
        id: 'grandchildren',
        title: 'ಮೊಮ್ಮಕ್ಕಳು',
        subtitle: 'Grandchildren',
        tag: 'ನಮ್ಮ ಪ್ರೀತಿಯ ಅಜ್ಜ-ಅಜ್ಜಿಯರ ಸಂಭ್ರಮಾಚರಣೆಗೆ ಪ್ರೀತಿಯ ಸ್ವಾಗತ!',
        names: ['AKSHAY KUMAR', 'ADITHYA', 'AMRUTHA', 'HARSHA SASI NIKETHAN', 'HITHASVI'],
      },
    ],
  },
  invitationSignOff: {
    invitedByLabel: 'ಆಹ್ವಾನಿಸುವವರು:',
    invitedByName: 'ಶ್ರೀ ಪುಲ್ಲಗೂರಾ ಪರಿವಾರ',
    blessingsLabel: 'ಶುಭಾಶೀರ್ವಾದಗಳೊಂದಿಗೆ:',
    coupleCombined: 'ಶ್ರೀಮತಿ ಪುಲ್ಲಗೂರಾ ಸುಬ್ಬಲಕ್ಷ್ಮಮ್ಮ & ಶ್ರೀ ಪುಲ್ಲಗೂರಾ ಪೆದ್ದ ಗೋವಿಂದ ಸ್ವಾಮಿ',
  },
  blessingsWall: {
    sectionBadge: 'ಶುಭಾಶಯಗಳು & ಆಶೀರ್ವಾದ',
    heading: 'ದಂಪತಿಗಳಿಗೆ ನಿಮ್ಮ ಶುಭ ಹಾರೈಕೆಗಳು',
    namePlaceholder: 'ನಿಮ್ಮ ಹೆಸರು (Your Name) *',
    cityPlaceholder: 'ಊರು / ಊರಿನ ಹೆಸರು (City / Town)',
    messagePlaceholder: 'ದಂಪತಿಗಳಿಗೆ ನಿಮ್ಮ ಹೃತ್ಪೂರ್ವಕ ಶುಭಾಶಯಗಳನ್ನು ಬರೆಯಿರಿ... *',
    submitBtn: 'ಶುಭಾಶಯ ಕಳುಹಿಸಿ',
    submittingBtn: 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
    submittedMessage: 'ನಿಮ್ಮ ಶುಭಾಶಯಗಳು ಕೃತಜ್ಞತೆಯೊಂದಿಗೆ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟಿವೆ! ಧನ್ಯವಾದಗಳು.',
    recentWishes: 'ಆತ್ಮೀಯರ ಶುಭಾಶಯಗಳು',
  },
  gallerySection: {
    sectionBadge: 'ಮಧುರ ನೆನಪುಗಳು',
    heading: 'ಫೋಟೋ ಗ್ಯಾಲರಿ',
    filterAll: 'ಎಲ್ಲಾ',
    filterCouple: 'ದಂಪತಿಗಳು',
    filterFamily: 'ಕುಟುಂಬ',
    filterTraditional: 'ಸಾಂಪ್ರದಾಯಿಕ',
  },
  gallery: [
    {
      id: 'photo-1',
      title: 'ಸ್ವರ್ಣ ದಂಪತಿಗಳು',
      caption: 'ಶ್ರೀಮತಿ ಪುಲ್ಲಗೂರಾ ಸುಬ್ಬಲಕ್ಷ್ಮಮ್ಮ & ಶ್ರೀ ಪುಲ್ಲಗೂರಾ ಪೆದ್ದ ಗೋವಿಂದ ಸ್ವಾಮಿ - 50 ವರ್ಷಗಳ ಸ್ವರ್ಣ ಮಹೋತ್ಸವ',
      src: '/images/anniversary_photos/gallery_07.jpg',
      category: 'couple',
    },
    {
      id: 'photo-2',
      title: 'ದಾಂಪತ್ಯ ಶೋಭೆ',
      caption: 'ಅನ್ಯೋನ್ಯ ಪ್ರೇಮದ 50 ವರ್ಷಗಳ ಪವಿತ್ರ ದಾಂಪತ್ಯ ಯಾನ',
      src: '/images/anniversary_photos/gallery_08.jpg',
      category: 'couple',
    },
    {
      id: 'photo-3',
      title: 'ದೈವ ಸನ್ನಿಧಿಯಲ್ಲಿ ಪೂಜಾ ಸಂಕಲ್ಪ',
      caption: 'ಮಂಗಳಕರ ದೈವ ಸನ್ನಿಧಿಯಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ ವಸ್ತ್ರ ಧರಿಸಿ ಪೂಜೆಯಲ್ಲಿ ಪಾಲ್ಗೊಂಡ ದಂಪತಿಗಳು',
      src: '/images/anniversary_photos/gallery_01.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-4',
      title: 'ಪವಿತ್ರ ತಲಂಬ್ರಾಲ ಮಹೋತ್ಸವ',
      caption: 'ಆತ್ಮೀಯ ಬಂಧುಗಳ ಅಕ್ಷತೆ, ಆಶೀರ್ವಾದಗಳ ನಡುವೆ ನಡೆದ ಸಂಭ್ರಮದ ತಲಂಬ್ರಾಲ ಕ್ಷಣಗಳು',
      src: '/images/anniversary_photos/gallery_05.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-5',
      title: 'ಮಾಂಗಲ್ಯ ಮತ್ತು ಉಂಗುರ ವಿನಿಮಯ',
      caption: 'ಸ್ವರ್ಣ ದಾಂಪತ್ಯ ವಾಗ್ದಾನಗಳ ಪುನರುಜ್ಜೀವನ - ಆತ್ಮೀಯರ ಹರ್ಷೋದ್ಗಾರಗಳ ಸಂಭ್ರಮ',
      src: '/images/anniversary_photos/gallery_03.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-6',
      title: 'ಮುದ್ದಿನ ಮೊಮ್ಮಗಳೊಂದಿಗೆ ಮಧುರ ಕ್ಷಣ',
      caption: 'ಅಜ್ಜ-ಅಜ್ಜಿಯರ ಪ್ರೀತಿಯ ಮಡಿಲಲ್ಲಿ ಅರಳಿದ ಮುದ್ದಿನ ಮೊಮ್ಮಗಳು',
      src: '/images/anniversary_photos/gallery_02.jpg',
      category: 'family',
    },
    {
      id: 'photo-7',
      title: 'ಪುಲ್ಲಗೂರಾ ಕುಟುಂಬದ ಸಮ್ಮಿಲನ',
      caption: 'ಮಕ್ಕಳು, ಸೊಸೆಯಂದಿರು, ಅಳಿಯಂದಿರು, ಮೊಮ್ಮಕ್ಕಳೊಂದಿಗೆ ತುಂಬು ಸಂಭ್ರಮದ ಕುಟುಂಬ ಕೂಟ',
      src: '/images/anniversary_photos/gallery_06.jpg',
      category: 'family',
    },
    {
      id: 'photo-8',
      title: 'ಕುಟುಂಬ ಸಂಭ್ರಮ & ಆಶೀರ್ವಾದ',
      caption: 'ಪೀಳಿಗೆಗಳ ಬಾಂಧವ್ಯದ ಪ್ರತೀಕವಾದ ಮಧುರ ಕುಟುಂಬ ನೆನಪು',
      src: '/images/anniversary_photos/gallery_09.jpg',
      category: 'family',
    },
    {
      id: 'photo-9',
      title: 'ಶ್ರೀ ಪುಲ್ಲಗೂರಾ ಪೆದ್ದ ಗೋವಿಂದ ಸ್ವಾಮಿ',
      caption: 'ಕುಟುಂಬದ ಹಿರಿಯರು, ನಿಸ್ವಾರ್ಥ ಪ್ರೀತಿಯ ಮಾರ್ಗದರ್ಶಿ',
      src: '/images/anniversary_photos/gallery_04.jpg',
      category: 'couple',
    },
    {
      id: 'photo-10',
      title: 'ಕಲ್ಯಾಣ ಮಂಟಪ — ಶ್ರೀ ವಾಸವಿ ಕಲ್ಯಾಣ ಮಂಟಪ',
      caption: 'ಯರ್ರಗುಂಟ್ಲ, ವೈಎಸ್ಆರ್ ಕಡಪ ಜಿಲ್ಲೆ (A/C ಸೌಲಭ್ಯ)',
      src: '/images/anniversary_photos/gallery_invite_page1.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-ref',
      title: 'ಸ್ವರ್ಣ ಮಹೋತ್ಸವ ಶುಭ ಪತ್ರಿಕೆ',
      caption: 'ಬಂಧು-ಮಿತ್ರರಿಗೆ ಅರ್ಪಿಸಿದ ಸಾಂಪ್ರದಾಯಿಕ ಗೋಲ್ಡನ್ ಜುಬಿಲಿ ಆಹ್ವಾನ ಪತ್ರಿಕೆ',
      src: '/images/original_reference_invitation.jpg',
      category: 'traditional',
    },
  ],
  headerNav: {
    cover: 'ಕವರ್',
    couple: 'ದಂಪತಿಗಳು',
    schedule: 'ಸಮಯ',
    venue: 'ಸ್ಥಳ',
    family: 'ಕುಟುಂಬ',
    gallery: 'ಗ್ಯಾಲರಿ',
    wishes: 'ಶುಭಾಶಯ',
  },
  footer: {
    blessing: 'ಸರ್ವೇಜನಾಃ ಸುಖಿನೋಭವಂತು • ಮಂಗಳಂ ಮಹತ್',
    shareBtn: 'ಆಹ್ವಾನವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ',
    scrollToTop: 'ಮೇಲಕ್ಕೆ ಹೋಗಿ',
  },
  calendar: {
    title: 'ಗೋಲ್ಡನ್ ಜುಬಿಲಿ - ಶ್ರೀಮತಿ ಪುಲ್ಲಗೂರಾ ಸುಬ್ಬಲಕ್ಷ್ಮಮ್ಮ & ಶ್ರೀ ಪುಲ್ಲಗೂರಾ ಪೆದ್ದ ಗೋವಿಂದ ಸ್ವಾಮಿ',
    details: '50 ವರ್ಷಗಳ ದಾಂಪತ್ಯ ಸ್ವರ್ಣ ಮಹೋತ್ಸವ (Golden Jubilee Celebration)\n\nಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು:\n• ಬೆಳಗ್ಗೆ 9:00 — ಸತ್ಯನಾರಾಯಣ ಸ್ವಾಮಿ ಪೂಜೆ ಪ್ರಾರಂಭ\n• ಮಧ್ಯಾಹ್ನ 12:00 — ಪಾದ ಪೂಜೆ\n• ಮಧ್ಯಾಹ್ನ 12:30 — ಗೋಲ್ಡನ್ ಜುಬಿಲಿ ಸಂಭ್ರಮ\n• ಮಧ್ಯಾಹ್ನ 1:30 — ವಿಶೇಷ ಭೋಜನ\n\nಆಹ್ವಾನಿಸುವವರು: ಶ್ರೀ ಪುಲ್ಲಗೂರಾ ಪರಿವಾರ',
    icsDescription: '50 ವರ್ಷಗಳ ದಾಂಪತ್ಯ ಸ್ವರ್ಣ ಮಹೋತ್ಸವ\\n\\nಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು:\\n09:00 AM - ಸತ್ಯನಾರಾಯಣ ಸ್ವಾಮಿ ಪೂಜೆ ಪ್ರಾರಂಭ\\n12:00 PM - ಪಾದ ಪೂಜೆ\\n12:30 PM - ಗೋಲ್ಡನ್ ಜುಬಿಲಿ ಸಂಭ್ರಮ\\n01:30 PM - ವಿಶೇಷ ಭೋಜನ\\n\\nಆಹ್ವಾನಿಸುವವರು: ಶ್ರೀ ಪುಲ್ಲಗೂರಾ ಪರಿವಾರ',
  },
};

// -------------------------------------------------------------
// ENGLISH CONFIGURATION
// -------------------------------------------------------------
export const INVITATION_CONFIG_EN: InvitationConfig = {
  eventTitle: 'Golden Jubilee',
  jubileeYears: 50,
  yearsText: 'Years of Togetherness',
  subHeading: 'Golden Jubilee Wedding Anniversary Celebration',
  mangalaVachanam: 'Sri Rastu • Subhamastu • Avighnamastu',
  slokam: {
    line1: 'Kalyānādbhuta gātrāya kāmitārtha pradāyinē |',
    line2: 'Śrīmad-Vēṅkaṭa-nāthāya Śrī-nivāsāya maṅgalam ||',
    translation: 'Salutations to Lord Srinivasa, whose divine form is wonderful and auspicious, and who bestows all desired blessings.',
  },
  coverButtonText: 'Open Invitation Card',
  coverHintText: 'Tap to Open Invitation',
  couple: {
    wifeHonorific: 'Smt.',
    wifeName: 'Pullagura Subbalakshmamma',
    husbandHonorific: 'Sri',
    husbandName: 'Pullagura Pedda Govindu Swamy',
    familyName: 'The Pullagura Family',
    tagline: '50 Years of Togetherness',
    inviteQuote: 'Your gracious presence and heartfelt blessings are the greatest gift to our family.',
    photoSrc: '/images/anniversary_photos/gallery_07.jpg',
    altText: 'Smt. Pullagura Subbalakshmamma & Sri Pullagura Pedda Govindu Swamy - Golden Jubilee Couple',
  },
  dateDetails: {
    isoDate: '2026-10-30T09:00:00+05:30',
    dateDisplay: '30-10-2026',
    dayDisplay: 'Friday',
    fullDateDisplay: 'Friday, 30 October 2026',
    countdownLabels: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    },
  },
  schedule: [
    {
      id: 'event-1',
      timeDisplay: '09:00 AM',
      title: 'Sri Satyanarayana Swamy Pooja',
      description: 'Divine prayers and sacred vratham for long life, health and eternal prosperity.',
      category: 'vratham',
    },
    {
      id: 'event-2',
      timeDisplay: '12:00 PM',
      title: 'Mathru-Pithru Paada Pooja',
      description: 'Reverential foot-worship ceremony honoring parents and receiving their divine blessings.',
      category: 'pooja',
    },
    {
      id: 'event-3',
      timeDisplay: '12:30 PM',
      title: 'Golden Jubilee Celebration',
      description: '50 Glorious Years of Togetherness felicitation, garlanding & congratulations.',
      category: 'function',
    },
    {
      id: 'event-4',
      timeDisplay: '01:30 PM',
      title: 'Grand Festive Lunch',
      description: 'Sumptuous celebratory lunch feast honoring esteemed guests, family and friends.',
      category: 'feast',
    },
  ],
  venue: {
    sectionBadge: 'Venue & Address',
    label: 'Venue',
    name: 'Sri Vasavi Kalyana Mandapam (A/C)',
    hasAc: true,
    town: 'Yerraguntla',
    districtState: 'YSR Kadapa District, Andhra Pradesh',
    googleMapsUrl: 'https://maps.app.goo.gl/WRcHfpXynxELXoJc6',
    buttonText: 'Get Directions on Google Maps',
    copyAddressText: 'Copy Venue Address',
    copiedText: 'Address Copied!',
    photoSrc: '/images/anniversary_photos/gallery_invite_page1.jpg',
  },
  familySection: {
    badge: 'Family Cordial Invite',
    heading: 'Cordial Welcome from Our Family',
    groups: [
      {
        id: 'sons',
        title: 'Sons',
        subtitle: 'Sons',
        tag: 'We cordially invite you to celebrate our parents\' Golden Jubilee!',
        names: ['ASHOK KUMAR', 'MURALI KRISHNA MURTHY', 'RAJESH KUMAR', 'PRAVEEN KUMAR'],
      },
      {
        id: 'daughters-in-law',
        title: 'Daughters-in-law',
        subtitle: 'Daughters-in-law',
        tag: 'Warmly inviting you to celebrate 50 blessed years of togetherness!',
        names: ['MAHA LAKSHMI', 'PRASHANTHI', 'SAI LAKSHMI'],
      },
      {
        id: 'grandchildren',
        title: 'Grandchildren',
        subtitle: 'Grandchildren',
        tag: 'Join us to celebrate our beloved grandparents\' Golden Jubilee!',
        names: ['AKSHAY KUMAR', 'ADITHYA', 'AMRUTHA', 'HARSHA SASI NIKETHAN', 'HITHASVI'],
      },
    ],
  },
  invitationSignOff: {
    invitedByLabel: 'Cordially Invited By:',
    invitedByName: 'The Pullagura Family',
    blessingsLabel: 'With Auspicious Blessings:',
    coupleCombined: 'Smt. Pullagura Subbalakshmamma & Sri Pullagura Pedda Govindu Swamy',
  },
  blessingsWall: {
    sectionBadge: 'Guest Wishes & Blessings',
    heading: 'Send Your Warm Wishes to the Couple',
    namePlaceholder: 'Your Name *',
    cityPlaceholder: 'City / Town',
    messagePlaceholder: 'Write your heartfelt congratulations & blessings... *',
    submitBtn: 'Send Blessings',
    submittingBtn: 'Submitting...',
    submittedMessage: 'Your blessing has been lovingly recorded! Thank you.',
    recentWishes: 'Recent Guest Blessings',
  },
  gallerySection: {
    sectionBadge: 'Cherished Memories',
    heading: 'Photo Gallery',
    filterAll: 'All',
    filterCouple: 'Couple',
    filterFamily: 'Family',
    filterTraditional: 'Ceremony',
  },
  gallery: [
    {
      id: 'photo-1',
      title: 'Golden Jubilee Couple',
      caption: 'Smt. Pullagura Subbalakshmamma & Sri Pullagura Pedda Govindu Swamy - 50 Glorious Years',
      src: '/images/anniversary_photos/gallery_07.jpg',
      category: 'couple',
    },
    {
      id: 'photo-2',
      title: 'Bond of a Lifetime',
      caption: 'A sacred 50-year journey of mutual love, understanding and companionship',
      src: '/images/anniversary_photos/gallery_08.jpg',
      category: 'couple',
    },
    {
      id: 'photo-3',
      title: 'Sacred Pooja Sankalpam',
      caption: 'Seeking divine blessings in auspicious traditional silk attire',
      src: '/images/anniversary_photos/gallery_01.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-4',
      title: 'Sacred Talambralu Ceremony',
      caption: 'Showered with sacred yellow rice grains and prayers by dear family & friends',
      src: '/images/anniversary_photos/gallery_05.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-5',
      title: 'Exchanging Rings & Sacred Vows',
      caption: 'Reaffirming lifelong vows of love and respect amid joyous cheers',
      src: '/images/anniversary_photos/gallery_03.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-6',
      title: 'Joyful Moments with Granddaughter',
      caption: 'Cherished warmth in the loving embrace of grandparents',
      src: '/images/anniversary_photos/gallery_02.jpg',
      category: 'family',
    },
    {
      id: 'photo-7',
      title: 'Pullagura Joint Family Gathering',
      caption: 'Sons, daughters-in-law and grandchildren united in celebratory joy',
      src: '/images/anniversary_photos/gallery_06.jpg',
      category: 'family',
    },
    {
      id: 'photo-8',
      title: 'Family Celebration & Blessings',
      caption: 'A precious portrait symbolizing multi-generational heritage and affection',
      src: '/images/anniversary_photos/gallery_09.jpg',
      category: 'family',
    },
    {
      id: 'photo-9',
      title: 'Sri Pullagura Pedda Govindu Swamy',
      caption: 'Family elder and pillar of strength, embodiment of selfless care',
      src: '/images/anniversary_photos/gallery_04.jpg',
      category: 'couple',
    },
    {
      id: 'photo-10',
      title: 'Venue — Sri Vasavi Kalyana Mandapam',
      caption: 'Yerraguntla, YSR Kadapa District (Air-Conditioned Hall)',
      src: '/images/anniversary_photos/gallery_invite_page1.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-ref',
      title: 'Traditional Wedding Card',
      caption: 'The treasured traditional print invitation card',
      src: '/images/original_reference_invitation.jpg',
      category: 'traditional',
    },
  ],
  headerNav: {
    cover: 'Cover',
    couple: 'Couple',
    schedule: 'Schedule',
    venue: 'Venue',
    family: 'Family',
    gallery: 'Gallery',
    wishes: 'Wishes',
  },
  footer: {
    blessing: 'Sarve Janah Sukhino Bhavantu • Mangalam Mahat',
    shareBtn: 'Share Invitation',
    scrollToTop: 'Back to Top',
  },
  calendar: {
    title: 'Golden Jubilee - Smt. Pullagura Subbalakshmamma & Sri Pullagura Pedda Govindu Swamy',
    details: '50th Wedding Anniversary Golden Jubilee Celebration\n\nSchedule of Events:\n• 09:00 AM — Sri Satyanarayana Swamy Pooja\n• 12:00 PM — Mathru-Pithru Paada Pooja\n• 12:30 PM — Golden Jubilee Felicitation\n• 01:30 PM — Grand Festive Lunch\n\nCordially Invited By: The Pullagura Family',
    icsDescription: '50th Wedding Anniversary Golden Jubilee Celebration\\n\\nSchedule of Events:\\n09:00 AM - Sri Satyanarayana Swamy Pooja\\n12:00 PM - Mathru-Pithru Paada Pooja\\n12:30 PM - Golden Jubilee Felicitation\\n01:30 PM - Grand Festive Lunch\\n\\nCordially Invited By: The Pullagura Family',
  },
};

export const INVITATION_CONFIGS: Record<Language, InvitationConfig> = {
  te: INVITATION_CONFIG_TE,
  kn: INVITATION_CONFIG_KN,
  en: INVITATION_CONFIG_EN,
};

export const getInvitationConfig = (lang: Language): InvitationConfig => {
  return INVITATION_CONFIGS[lang] || INVITATION_CONFIG_TE;
};

// Default export maintains backwards compatibility
export const INVITATION_CONFIG: InvitationConfig = INVITATION_CONFIG_TE;
