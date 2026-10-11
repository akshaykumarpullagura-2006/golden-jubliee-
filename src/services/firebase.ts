import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp,
  type Firestore,
  type Unsubscribe
} from 'firebase/firestore';

export interface BlessingItem {
  id: string;
  name: string;
  relationOrCity: string;
  message: string;
  createdAt?: any;
  timestampDisplay?: string;
}

// ============================================================================
// FIREBASE CONFIGURATION
// Paste your Firebase web app configuration here or in your .env file:
// ============================================================================
export const firebaseConfig = {
  apiKey: "AIzaSyAJ8D-kM9VjkDMo3dDSMSO3fvCDlte_jwo",
  authDomain: "golden-jublee.firebaseapp.com",
  projectId: "golden-jublee",
  storageBucket: "golden-jublee.firebasestorage.app",
  messagingSenderId: "667335716538",
  appId: "1:667335716538:web:183a7bcef4a3c00689dc83",
  measurementId: "G-EBV8JFCB3W"
};

// Check if valid Firebase credentials have been provided
export const isFirebaseConfigured = (): boolean => {
  return (
    Boolean(firebaseConfig.apiKey) &&
    firebaseConfig.apiKey !== "YOUR_API_KEY" &&
    Boolean(firebaseConfig.projectId) &&
    firebaseConfig.projectId !== "YOUR_PROJECT_ID"
  );
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

if (isFirebaseConfigured()) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
  } catch (err) {
    console.warn("Firebase initialization error, falling back to local storage:", err);
  }
}

// Initial default blessings for the Pullagura family
const DEFAULT_BLESSINGS: BlessingItem[] = [
  {
    id: 'bless-1',
    name: 'పుల్లగూర చిరంజీవులు & పిల్లలు',
    relationOrCity: 'కుటుంబ సభ్యులు',
    message: 'అమ్మా నాన్నల 50 ఏళ్ల దాంపత్య స్వర్ణోత్సవం మా కుటుంబానికే గర్వకారణం. నిండు నూరేళ్లు ఆయురారోగ్యాలతో వర్ధిల్లాలని ప్రార్థిస్తున్నాము.',
    timestampDisplay: 'కుటుంబం',
  },
  {
    id: 'bless-2',
    name: 'మనుమలు & మనుమరాళ్ళు',
    relationOrCity: 'యర్రగుంట్ల',
    message: 'అమ్మమ్మ తాతయ్యలకు గోల్డెన్ జూబ్లీ శుభాకాంక్షలు! మీ ఆశీస్సులు ఎల్లప్పుడూ మాకు శ్రీరామరక్ష.',
    timestampDisplay: 'కుటుంబం',
  },
  {
    id: 'bless-3',
    name: 'ఆత్మీయ బంధుమిత్రులు',
    relationOrCity: 'కడప & హైదరాబాద్',
    message: 'శ్రీమతి సుబ్బలక్షమ్మ & శ్రీ పెద్ద గోవిందస్వామి దంపతులకు స్వర్ణోత్సవ హృదయపూర్వక శుభాకాంక్షలు.',
    timestampDisplay: 'బంధువులు',
  },
];

const LOCAL_STORAGE_KEY = 'golden_jubilee_blessings';

const getLocalBlessings = (): BlessingItem[] => {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    // fallback
  }
  return DEFAULT_BLESSINGS;
};

const saveLocalBlessings = (items: BlessingItem[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('blessings_updated'));
  } catch {
    // ignore
  }
};

/**
 * Subscribe to blessings in real-time.
 * If Firebase is configured, listens live to Firestore collection "blessings".
 * Otherwise, syncs via local storage.
 */
export const subscribeToBlessings = (callback: (blessings: BlessingItem[]) => void): Unsubscribe => {
  if (db && isFirebaseConfigured()) {
    try {
      const q = query(collection(db, 'blessings'), orderBy('createdAt', 'desc'));
      return onSnapshot(q, (snapshot) => {
        const items: BlessingItem[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          items.push({
            id: docSnap.id,
            name: data.name || '',
            relationOrCity: data.relationOrCity || '',
            message: data.message || '',
            createdAt: data.createdAt,
            timestampDisplay: data.createdAt ? new Date(data.createdAt.toDate ? data.createdAt.toDate() : data.createdAt).toLocaleDateString('te-IN') : 'ఇటీవల',
          });
        });
        // If Firestore is empty initially, seed with default blessings
        if (items.length === 0) {
          callback(DEFAULT_BLESSINGS);
        } else {
          callback(items);
        }
      }, (error) => {
        console.warn("Firestore snapshot error, falling back to local:", error);
        callback(getLocalBlessings());
      });
    } catch (err) {
      console.warn("Firestore subscription failed, using local storage:", err);
    }
  }

  // Fallback to local storage
  callback(getLocalBlessings());
  const handleStorage = () => callback(getLocalBlessings());
  window.addEventListener('storage', handleStorage);
  window.addEventListener('blessings_updated', handleStorage);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener('blessings_updated', handleStorage);
  };
};

/**
 * Add a new blessing message.
 */
export const addBlessing = async (name: string, relationOrCity: string, message: string): Promise<void> => {
  if (db && isFirebaseConfigured()) {
    try {
      await addDoc(collection(db, 'blessings'), {
        name,
        relationOrCity,
        message,
        createdAt: serverTimestamp(),
      });
      return;
    } catch (err) {
      console.warn("Failed to write to Firestore, storing locally:", err);
    }
  }

  // Local storage fallback
  const current = getLocalBlessings();
  const newItem: BlessingItem = {
    id: `bless-${Date.now()}`,
    name,
    relationOrCity,
    message,
    timestampDisplay: 'ఇప్పుడే',
  };
  saveLocalBlessings([newItem, ...current]);
};

/**
 * Delete a blessing message (Admin operation).
 */
export const deleteBlessing = async (id: string): Promise<void> => {
  if (db && isFirebaseConfigured() && !id.startsWith('bless-')) {
    try {
      await deleteDoc(doc(db, 'blessings', id));
      return;
    } catch (err) {
      console.warn("Failed to delete from Firestore:", err);
    }
  }

  // Local storage deletion
  const current = getLocalBlessings();
  const updated = current.filter((b) => b.id !== id);
  saveLocalBlessings(updated);
};
