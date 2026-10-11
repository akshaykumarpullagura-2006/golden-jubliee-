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

export interface InvitationConfig {
  eventTitle: string;
  jubileeYears: number;
  yearsText: string;
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
    isoDate: string; // for calendar and countdown (2026-10-30T08:30:00+05:30)
    dateDisplay: string;
    dayDisplay: string;
    fullDateDisplay: string;
  };
  schedule: ScheduleEvent[];
  venue: {
    label: string;
    name: string;
    hasAc: boolean;
    town: string;
    districtState: string;
    googleMapsUrl: string;
    buttonText: string;
  };
  invitationSignOff: {
    invitedByLabel: string;
    invitedByName: string;
    blessingsLabel: string;
    coupleCombined: string;
  };
  gallery: GalleryItem[];
}

export const INVITATION_CONFIG: InvitationConfig = {
  eventTitle: 'గోల్డెన్ జూబ్లీ',
  jubileeYears: 50,
  yearsText: 'Years of Togetherness',
  slokam: {
    line1: 'కల్యాణాద్భుత గాత్రాయ కామితార్థ ప్రదాయినే |',
    line2: 'శ్రీమద్వేంకట నాథాయ శ్రీ నివాసాయ మంగళం ||',
    translation: 'Salutations to Lord Srinivasa, whose divine form is wonderful and auspicious, and who bestows all desired blessings.',
  },
  coverButtonText: 'ఆహ్వాన పత్రిక తెరవండి',
  coverHintText: 'స్పర్శించి తెరవండి • Tap to Open',
  couple: {
    wifeHonorific: 'శ్రీమతి',
    wifeName: 'పుల్లగూర సుబ్బలక్షమ్మ',
    husbandHonorific: 'శ్రీ',
    husbandName: 'పుల్లగూర పెద్ద గోవిందస్వామి',
    familyName: 'పుల్లగూర ఫ్యామిలీ',
    tagline: '50 Years of Togetherness',
    inviteQuote: 'ఈ మా వేడుకకు మీరు విచ్చేయుటయే మా ఆనందానికి చిరునామా',
    photoSrc: '/images/hero_couple.jpg',
    altText: 'శ్రీమతి పుల్లగూర సుబ్బలక్షమ్మ & శ్రీ పుల్లగూర పెద్ద గోవిందస్వామి - గోల్డెన్ జూబ్లీ దంపతులు',
  },
  dateDetails: {
    isoDate: '2026-10-30T08:30:00+05:30',
    dateDisplay: '30-10-2026',
    dayDisplay: 'శుక్రవారం',
    fullDateDisplay: '30-10-2026, శుక్రవారం',
  },
  schedule: [
    {
      id: 'event-1',
      timeDisplay: 'ఉదయం 8:30',
      title: 'పాద పూజ',
      description: 'తల్లిదండ్రులకు భక్తి పూర్వకంగా సమర్పించే మాతృ-పితృ పాద పూజా మహోత్సవం',
      category: 'pooja',
    },
    {
      id: 'event-2',
      timeDisplay: 'ఉదయం 9:00',
      title: 'సత్యనారాయణ స్వామి పూజ ప్రారంభం',
      description: 'దంపతుల కలకాలం ఆయురారోగ్యాలకై శ్రీ సత్యనారాయణ స్వామి వారి దివ్య వ్రతం',
      category: 'vratham',
    },
    {
      id: 'event-3',
      timeDisplay: 'మధ్యాహ్నం 12:00',
      title: 'గోల్డెన్ జూబ్లీ ఫంక్షన్',
      description: '50 వసంతాల దాంపత్య జీవిత స్వర్ణోత్సవ సంబరం & బంధుమిత్రుల ఆశీర్వచనాలు',
      category: 'function',
    },
    {
      id: 'event-4',
      timeDisplay: 'మధ్యాహ్నం 1:00',
      title: 'విందు భోజనం',
      description: 'ఆత్మీయ బంధుమిత్రులకు సంప్రదాయ రుచులతో కూడిన ఘనమైన విందు భోజనం',
      category: 'feast',
    },
  ],
  venue: {
    label: 'వేదిక',
    name: 'శ్రీ వాసవి కళ్యాణ మండపం (A/C)',
    hasAc: true,
    town: 'యర్రగుంట్ల',
    districtState: 'వైఎస్సార్ కడప జిల్లా, ఆంధ్రప్రదేశ్',
    googleMapsUrl: 'https://maps.app.goo.gl/WRcHfpXynxELXoJc6',
    buttonText: 'Google Mapsలో మార్గం చూడండి',
  },
  invitationSignOff: {
    invitedByLabel: 'ఆహ్వానించువారు:',
    invitedByName: 'శ్రీ పుల్లగూర ఫ్యామిలీ',
    blessingsLabel: 'శుభాశీస్సులతో:',
    coupleCombined: 'శ్రీమతి పుల్లగూర సుబ్బలక్షమ్మ & శ్రీ పుల్లగూర పెద్ద గోవిందస్వామి',
  },
  gallery: [
    {
      id: 'photo-ref',
      title: 'స్వర్ణోత్సవ శుభపత్రిక',
      caption: 'అక్షరరూపంలో బంధుమిత్రులకు సమర్పించిన సంప్రదాయ గోల్డెన్ జూబ్లీ ఆహ్వాన పత్రిక',
      src: '/images/original_reference_invitation.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-1',
      title: 'స్వర్ణ దంపతులు',
      caption: '50 వసంతాల ప్రేమానుబంధం — శ్రీమతి సుబ్బలక్షమ్మ & శ్రీ పెద్ద గోవిందస్వామి',
      src: '/images/hero_couple.jpg',
      category: 'couple',
    },
    {
      id: 'photo-2',
      title: 'ఉమ్మడి కుటుంబ అనుబంధం',
      caption: 'పిల్లలు, మనుమలు, మనుమరాళ్ళతో నిండిన పుల్లగూర కుటుంబ ఆనంద క్షణాలు',
      src: '/images/family_moments.jpg',
      category: 'family',
    },
    {
      id: 'photo-3',
      title: 'దైవ సన్నిధి & సంప్రదాయం',
      caption: 'శ్రీ సత్యనారాయణ స్వామి వ్రత పూజా సంప్రదాయ వైభవం',
      src: '/images/ceremony_satyanarayana.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-4',
      title: 'మధుర జ్ఞాపకాలు',
      caption: 'అన్యోన్య దాంపత్య ప్రయాణంలోని చిరస్మరణీయ సందర్భాలు',
      src: '/images/couple_candid.jpg',
      category: 'couple',
    },
    {
      id: 'photo-5',
      title: 'సువర్ణ జ్ఞాపకం (1976 - 2026)',
      caption: 'నాటి వివాహ వేడుక నుండి నేటి స్వర్ణోత్సవం వరకు అఖండ ప్రయాణం',
      src: '/images/vintage_1976.jpg',
      category: 'traditional',
    },
    {
      id: 'photo-6',
      title: 'కళ్యాణ వేదిక',
      caption: 'శ్రీ వాసవి కళ్యాణ మండపం (A/C), యర్రగుంట్ల',
      src: '/images/venue_mandapam.jpg',
      category: 'traditional',
    },
  ],
};
