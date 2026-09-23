import React, { useState, useRef, useEffect } from 'react';
import { LiveCountdownWidget } from './LiveCountdownWidget';
import {
  X,
  Camera,
  FileSignature,
  Calendar,
  Clock,
  Calculator,
  Percent,
  FileCheck,
  Search,
  Download,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Info
} from 'lucide-react';

interface UpesscAssistantProfessorToolsModalProps {
  tool: string | null;
  onClose: () => void;
}

export const UpesscAssistantProfessorToolsModal: React.FC<UpesscAssistantProfessorToolsModalProps> = ({
  tool,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<string>(tool || 'photo');

  useEffect(() => {
    if (tool) {
      setActiveTab(tool);
    }
  }, [tool]);

  // ===================== PHOTO RESIZER STATE =====================
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const [photoOrigSize, setPhotoOrigSize] = useState<number>(0);
  const [photoWidth, setPhotoWidth] = useState<number>(350);
  const [photoHeight, setPhotoHeight] = useState<number>(450);
  const [photoKeepAspect, setPhotoKeepAspect] = useState<boolean>(true);
  const [photoQuality, setPhotoQuality] = useState<number>(0.85);
  const [photoResizedUrl, setPhotoResizedUrl] = useState<string | null>(null);
  const [photoResizedSize, setPhotoResizedSize] = useState<number>(0);
  const [photoAspectRatio, setPhotoAspectRatio] = useState<number>(350 / 450);
  const photoCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // ===================== SIGNATURE RESIZER STATE =====================
  const [signSrc, setSignSrc] = useState<string | null>(null);
  const [signOrigSize, setSignOrigSize] = useState<number>(0);
  const [signWidth, setSignWidth] = useState<number>(140);
  const [signHeight, setSignHeight] = useState<number>(110);
  const [signQuality, setSignQuality] = useState<number>(0.85);
  const [signResizedUrl, setSignResizedUrl] = useState<string | null>(null);
  const [signResizedSize, setSignResizedSize] = useState<number>(0);
  const signCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // ===================== AGE CHECKER STATE =====================
  const [dob, setDob] = useState<string>('1985-06-15');
  const [category, setCategory] = useState<string>('UR');

  // ===================== OMR SCORE STATE =====================
  const [correctAnswers, setCorrectAnswers] = useState<number>(80);
  const [wrongAnswers, setWrongAnswers] = useState<number>(25);
  const [interviewScore, setInterviewScore] = useState<number>(30);

  // ===================== DOCUMENT CHECKLIST STATE =====================
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    doc_app: true,
    doc_10th: true,
    doc_12th: true,
    doc_grad: true,
    doc_pg: true,
    doc_net: true,
    doc_phd: false,
    doc_caste: false,
    doc_affidavit: false,
    doc_char1: false,
    doc_char2: false
  });

  // ===================== SUBJECT LOOKUP STATE =====================
  const [subjectQuery, setSubjectQuery] = useState<string>('');

  if (!tool) return null;

  // Handle Photo File Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoOrigSize(Math.round(file.size / 1024));
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setPhotoWidth(img.width > 600 ? 400 : Math.max(300, img.width));
        const initialH = Math.round((img.width > 600 ? 400 : Math.max(300, img.width)) * (img.height / img.width));
        setPhotoHeight(initialH);
        setPhotoAspectRatio(img.width / img.height);
        generateResizedPhoto(img, img.width > 600 ? 400 : Math.max(300, img.width), initialH, photoQuality);
      };
      img.src = event.target?.result as string;
      setPhotoSrc(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const generateResizedPhoto = (imgElement: HTMLImageElement | null, w: number, h: number, q: number) => {
    const canvas = photoCanvasRef.current || document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill white background for passport photo
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);

    if (imgElement) {
      ctx.drawImage(imgElement, 0, 0, w, h);
    } else if (photoSrc) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, w, h);
        exportPhoto(canvas, q);
      };
      img.src = photoSrc;
      return;
    }
    exportPhoto(canvas, q);
  };

  const exportPhoto = (canvas: HTMLCanvasElement, q: number) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        setPhotoResizedSize(Math.round(blob.size / 1024));
        const url = URL.createObjectURL(blob);
        setPhotoResizedUrl(url);
      },
      'image/jpeg',
      q
    );
  };

  // Re-generate photo when settings change
  const applyPhotoChanges = () => {
    if (!photoSrc) return;
    const img = new Image();
    img.onload = () => {
      generateResizedPhoto(img, photoWidth, photoHeight, photoQuality);
    };
    img.src = photoSrc;
  };

  // Handle Signature Upload
  const handleSignUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSignOrigSize(Math.round(file.size / 1024));
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setSignSrc(event.target?.result as string);
        generateResizedSign(img, 140, 110, signQuality);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const generateResizedSign = (imgElement: HTMLImageElement | null, w: number, h: number, q: number) => {
    const canvas = signCanvasRef.current || document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // White background for signature as mandated
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);

    if (imgElement) {
      ctx.drawImage(imgElement, 0, 0, w, h);
    } else if (signSrc) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, w, h);
        exportSign(canvas, q);
      };
      img.src = signSrc;
      return;
    }
    exportSign(canvas, q);
  };

  const exportSign = (canvas: HTMLCanvasElement, q: number) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        setSignResizedSize(Math.round(blob.size / 1024));
        const url = URL.createObjectURL(blob);
        setSignResizedUrl(url);
      },
      'image/jpeg',
      q
    );
  };

  const applySignChanges = () => {
    if (!signSrc) return;
    const img = new Image();
    img.onload = () => {
      generateResizedSign(img, signWidth, signHeight, signQuality);
    };
    img.src = signSrc;
  };

  // Calculate Age as of 01 July 2026
  const calculateAge = () => {
    if (!dob) return { years: 0, months: 0, days: 0, eligible: false };
    const birth = new Date(dob);
    const cutOff = new Date(2026, 6, 1); // 01 July 2026

    let years = cutOff.getFullYear() - birth.getFullYear();
    let months = cutOff.getMonth() - birth.getMonth();
    let days = cutOff.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonthLastDay = new Date(cutOff.getFullYear(), cutOff.getMonth(), 0).getDate();
      days += prevMonthLastDay;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const minAge = 21;
    const maxAge = 62; // Under Section 2.7 / 6(ख) of Advt. 04/2026
    const eligible = years >= minAge && (years < maxAge || (years === maxAge && months === 0 && days === 0));

    return { years, months, days, eligible, minAge, maxAge };
  };

  const ageInfo = calculateAge();

  // OMR Calculation
  const totalQuestions = 120;
  const unattempted = Math.max(0, totalQuestions - (correctAnswers + wrongAnswers));
  const grossMarks = correctAnswers * 3;
  const negativePenalty = wrongAnswers * 1;
  const netWrittenScore = Math.max(0, grossMarks - negativePenalty);
  const totalSelectionScore = netWrittenScore + interviewScore;

  // 42 Subject Matrix Data
  const subjectsData = [
    { id: 1, name: 'हिन्दी (Hindi)', coed: 141, women: 56, total: 197, allied: 'भाषा विज्ञान (Linguistics)' },
    { id: 2, name: 'अंग्रेजी (English)', coed: 81, women: 30, total: 111, allied: 'भाषा विज्ञान, अप्लाइड अंग्रेजी (Applied English)' },
    { id: 3, name: 'अर्थशास्त्र (Economics)', coed: 79, women: 25, total: 104, allied: 'व्यावहारिक अर्थशास्त्र (Applied Economics)' },
    { id: 4, name: 'समाजशास्त्र (Sociology)', coed: 57, women: 25, total: 82, allied: 'सोशल वर्क (Social Work)' },
    { id: 5, name: 'भौतिक विज्ञान (Physics)', coed: 95, women: 1, total: 96, allied: 'व्यावहारिक भौतिकी (Applied Physics)' },
    { id: 6, name: 'रसायन विज्ञान (Chemistry)', coed: 167, women: 12, total: 179, allied: 'व्यावहारिक रसायनशास्त्र / कार्बनिक / अकार्बनिक / फार्मास्यूटिकल' },
    { id: 7, name: 'गणित (Mathematics)', coed: 48, women: 1, total: 49, allied: 'कोई नहीं (Core Mathematics Only)' },
    { id: 8, name: 'वाणिज्य (Commerce)', coed: 102, women: 0, total: 102, allied: 'Business Administration, Accountancy & Business Stats, EAFM' },
    { id: 9, name: 'वनस्पति विज्ञान (Botany)', coed: 93, women: 11, total: 104, allied: 'Plant Science, Biotech, Microbio, Biochem, Marine Biotech, Genetics, Life Sci' },
    { id: 10, name: 'इतिहास (History)', coed: 49, women: 11, total: 60, allied: 'मध्यकालीन इतिहास, आधुनिक इतिहास, प्राचीन इतिहास, पुरातत्त्व' },
    { id: 11, name: 'चित्रकला (Drawing & Painting)', coed: 7, women: 17, total: 24, allied: 'कोई नहीं (Alternative Traditional Artist clause applicable)' },
    { id: 12, name: 'दर्शनशास्त्र (Philosophy)', coed: 15, women: 1, total: 16, allied: 'कोई नहीं' },
    { id: 13, name: 'प्राणि विज्ञान (Zoology)', coed: 81, women: 12, total: 93, allied: 'Animal Science, Microbio, Molecular & Human Genetics, Env Sci, Fisheries, Life Sci' },
    { id: 14, name: 'मनोविज्ञान (Psychology)', coed: 45, women: 27, total: 72, allied: 'कोई नहीं' },
    { id: 15, name: 'राजनीति शास्त्र (Political Science)', coed: 73, women: 22, total: 95, allied: 'लोक प्रशासन (Public Admin), अन्तर्राष्ट्रीय सम्बन्ध (IR)' },
    { id: 16, name: 'शिक्षाशास्त्र (Education)', coed: 14, women: 20, total: 34, allied: 'Master of Education (M.Ed.)' },
    { id: 17, name: 'संगीत गायन (Music Vocal)', coed: 0, women: 12, total: 12, allied: 'कोई नहीं' },
    { id: 18, name: 'संस्कृत (Sanskrit)', coed: 68, women: 34, total: 102, allied: 'सम्पूर्णानन्द संस्कृत विश्वविद्यालय से आचार्य उपाधि' },
    { id: 19, name: 'गृह विज्ञान (Home Science)', coed: 5, women: 25, total: 30, allied: 'Food & Nutrition, Clothing Textiles, Human Dev, Family Resource Mgmt' },
    { id: 20, name: 'भूगोल (Geography)', coed: 92, women: 3, total: 95, allied: 'कोई नहीं' },
    { id: 21, name: 'शारीरिक शिक्षा (Physical Education)', coed: 28, women: 7, total: 35, allied: 'एम.पी.एड. / एम.पी.ई. (M.P.Ed./M.P.E.)' },
    { id: 22, name: 'सैन्य विज्ञान (Military Science)', coed: 41, women: 0, total: 41, allied: 'रक्षा एवं स्त्रातजिक अध्ययन (Defence & Strategic Studies)' },
    { id: 23, name: 'कृषि अर्थशास्त्र (Agri. Economics)', coed: 9, women: 0, total: 9, allied: 'Agri. Business Management / Livestock Economics' },
    { id: 24, name: 'मानवशास्त्र (Anthropology)', coed: 1, women: 0, total: 1, allied: 'कोई नहीं' },
    { id: 25, name: 'संगीत वादन सितार (Sitar)', coed: 0, women: 1, total: 1, allied: 'कोई नहीं' },
    { id: 26, name: 'शस्य विज्ञान (Agronomy)', coed: 11, women: 0, total: 11, allied: 'M.Sc. (Agri.) Agronomy, Crop Production Soil Fertility, Weed Sci' },
    { id: 27, name: 'पशुपालन एवं दुग्ध विज्ञान (Dairy Science)', coed: 12, women: 0, total: 12, allied: 'M.Sc. Dairy Tech, Animal Nutrition, Animal Science, Breeding' },
    { id: 28, name: 'कृषि रसायन (Agri. Chemistry)', coed: 8, women: 0, total: 8, allied: 'Soil Science, Soil Chem, Soil Fertility, Soil Microbiology' },
    { id: 29, name: 'कृषि वनस्पति (Agri. Botany)', coed: 8, women: 0, total: 8, allied: 'Plant Physiology, Crop Physiology, Genetics, Seed Science' },
    { id: 30, name: 'कृषि अभियंत्रण (Agri. Engineering)', coed: 6, women: 0, total: 6, allied: 'Farm Machinery, Soil & Water Conservation, Food Engg, Irrigation Engg' },
    { id: 31, name: 'संगीत वादन तबला (Tabla)', coed: 0, women: 9, total: 9, allied: 'कोई नहीं' },
    { id: 32, name: 'उद्यान विज्ञान (Horticulture)', coed: 6, women: 0, total: 6, allied: 'Vegetable Science, Floriculture, Post Harvest, Pomology, Spices' },
    { id: 33, name: 'उर्दू (Urdu)', coed: 4, women: 7, total: 11, allied: 'कोई नहीं' },
    { id: 34, name: 'एशियन कल्चर (Asian Culture)', coed: 1, women: 0, total: 1, allied: 'प्राचीन इतिहास, मध्यकालीन इतिहास, मानव शास्त्र, पुरातत्त्व' },
    { id: 35, name: 'प्राचीन इतिहास (Ancient History)', coed: 22, women: 3, total: 25, allied: 'Archeology and Heritage Management' },
    { id: 36, name: 'विधि (Law)', coed: 61, women: 0, total: 61, allied: 'कोई नहीं (LL.M. Degree Required)' },
    { id: 37, name: 'सांख्यिकी (Statistics)', coed: 13, women: 0, total: 13, allied: 'कोई नहीं' },
    { id: 38, name: 'भूगर्भ विज्ञान (Geology)', coed: 6, women: 0, total: 6, allied: 'Applied Geology / Earth Science' },
    { id: 39, name: 'कृषि आनुवंशिकी (Genetics & Breeding)', coed: 5, women: 0, total: 5, allied: 'Genetics, Plant Breeding, Agri. Botany' },
    { id: 40, name: 'कीट विज्ञान (Entomology)', coed: 4, women: 0, total: 4, allied: 'Plant Protection / Sericulture' },
    { id: 41, name: 'कृषि प्रसार (Agri. Extension)', coed: 4, women: 0, total: 4, allied: 'M.Sc. Agri Extension, PG Extension Communication' },
    { id: 42, name: 'कृषि सांख्यिकी (Agri. Statistics)', coed: 2, women: 0, total: 2, allied: 'Statistics, Applied Statistics, Biostatistics, Math Statistics' }
  ];

  const filteredSubjects = subjectsData.filter(
    (s) =>
      s.name.toLowerCase().includes(subjectQuery.toLowerCase()) ||
      s.allied.toLowerCase().includes(subjectQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-blue-600 rounded-xl text-white shadow-xs">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-display">
                  UPESSC Assistant Professor Interactive Tool Suite 2026
                </h3>
                <span className="text-[10px] bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded-full border border-blue-400/30">
                  Advt. 04/2026
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                100% Client-Side Privacy-First Tools for 1,936 Assistant Professor Posts
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 overflow-x-auto gap-2 shrink-0 py-2">
          <button
            onClick={() => setActiveTab('photo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'photo'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Photo Resizer (30-300 KB)</span>
          </button>
          <button
            onClick={() => setActiveTab('signature')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'signature'
                ? 'bg-purple-600 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <FileSignature className="w-3.5 h-3.5" />
            <span>Signature Resizer (140x110)</span>
          </button>
          <button
            onClick={() => setActiveTab('age')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'age'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Age Checker (Max 62)</span>
          </button>
          <button
            onClick={() => setActiveTab('omr')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'omr'
                ? 'bg-indigo-600 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>OMR Marks (+3 / -1)</span>
          </button>
          <button
            onClick={() => setActiveTab('countdown')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'countdown'
                ? 'bg-red-600 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Deadlines & Exam Countdown</span>
          </button>
          <button
            onClick={() => setActiveTab('subjects')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'subjects'
                ? 'bg-amber-600 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>42 Subjects Explorer</span>
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'documents'
                ? 'bg-cyan-600 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>18 DV Checklist & PDF Guide</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* ===================== TAB 1: PHOTO RESIZER ===================== */}
          {activeTab === 'photo' && (
            <div className="space-y-5">
              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-900 leading-relaxed">
                  <strong>Official Notification Advt 04/2026 Photo Rule (Section 2.13):</strong>
                  <br />
                  Format: <strong>JPG / JPEG</strong> | File Size: <strong>30 KB to 300 KB</strong> | Pixel Resolution:{' '}
                  <strong>300 to 600 pixels</strong>. Light or plain white background.
                  <p className="text-[11px] text-blue-700 mt-1 italic">
                    Disclaimer: Processed entirely inside your web browser. Check the official notification before uploading.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Upload & Controls */}
                <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Upload Passport Photograph
                    </label>
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png"
                      onChange={handlePhotoUpload}
                      className="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                    />
                    {photoOrigSize > 0 && (
                      <p className="text-[11px] text-slate-500 mt-1">
                        Original file size: <strong>{photoOrigSize} KB</strong>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Width (px) [300-600]
                      </label>
                      <input
                        type="number"
                        min="200"
                        max="800"
                        value={photoWidth}
                        onChange={(e) => {
                          const w = Number(e.target.value);
                          setPhotoWidth(w);
                          if (photoKeepAspect && photoAspectRatio > 0) {
                            setPhotoHeight(Math.round(w / photoAspectRatio));
                          }
                        }}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Height (px) [300-600]
                      </label>
                      <input
                        type="number"
                        min="200"
                        max="800"
                        value={photoHeight}
                        onChange={(e) => {
                          const h = Number(e.target.value);
                          setPhotoHeight(h);
                          if (photoKeepAspect && photoAspectRatio > 0) {
                            setPhotoWidth(Math.round(h * photoAspectRatio));
                          }
                        }}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="keepAspect"
                      checked={photoKeepAspect}
                      onChange={(e) => setPhotoKeepAspect(e.target.checked)}
                      className="rounded text-blue-600"
                    />
                    <label htmlFor="keepAspect" className="text-xs text-slate-700 font-medium">
                      Lock aspect ratio
                    </label>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Compression Quality</span>
                      <span className="font-mono text-blue-700">{Math.round(photoQuality * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="1.0"
                      step="0.05"
                      value={photoQuality}
                      onChange={(e) => setPhotoQuality(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  {/* Target Presets */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-600">Quick Target File Size Presets:</span>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setPhotoWidth(350);
                          setPhotoHeight(450);
                          setPhotoQuality(0.7);
                        }}
                        className="px-2.5 py-1 text-[11px] bg-white border border-slate-200 rounded-md hover:bg-slate-100 font-medium"
                      >
                        ~50 KB (350×450)
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setPhotoWidth(400);
                          setPhotoHeight(500);
                          setPhotoQuality(0.85);
                        }}
                        className="px-2.5 py-1 text-[11px] bg-white border border-slate-200 rounded-md hover:bg-slate-100 font-medium"
                      >
                        ~100 KB (Recommended)
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setPhotoWidth(500);
                          setPhotoHeight(600);
                          setPhotoQuality(0.9);
                        }}
                        className="px-2.5 py-1 text-[11px] bg-white border border-slate-200 rounded-md hover:bg-slate-100 font-medium"
                      >
                        ~200 KB (High Res)
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={applyPhotoChanges}
                      disabled={!photoSrc}
                      className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-xs rounded-xl transition cursor-pointer"
                    >
                      Update &amp; Re-compress
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPhotoSrc(null);
                        setPhotoResizedUrl(null);
                        setPhotoOrigSize(0);
                        setPhotoResizedSize(0);
                      }}
                      className="p-2 border border-slate-300 rounded-xl hover:bg-slate-100 text-slate-600"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Preview & Output */}
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  {photoResizedUrl ? (
                    <div className="space-y-4 w-full flex flex-col items-center">
                      <div className="p-2 bg-white border border-slate-200 rounded-2xl shadow-xs">
                        <img
                          src={photoResizedUrl}
                          alt="UPESSC Resized Preview"
                          style={{ maxWidth: '220px', maxHeight: '280px' }}
                          className="rounded-lg object-contain"
                        />
                      </div>
                      <div className="w-full bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1 text-center">
                        <div className="flex justify-between items-center text-slate-600">
                          <span>Output File Size:</span>
                          <span
                            className={`font-mono font-bold ${
                              photoResizedSize >= 30 && photoResizedSize <= 300
                                ? 'text-emerald-700'
                                : 'text-red-600'
                            }`}
                          >
                            {photoResizedSize} KB
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-slate-600">
                          <span>Pixel Dimensions:</span>
                          <span className="font-mono text-slate-800">
                            {photoWidth} × {photoHeight} px
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-slate-600">
                          <span>UPESSC Compliance:</span>
                          {photoResizedSize >= 30 && photoResizedSize <= 300 ? (
                            <span className="text-emerald-700 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Valid (30-300 KB)
                            </span>
                          ) : (
                            <span className="text-red-600 font-bold flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" /> Outside 30-300 KB
                            </span>
                          )}
                        </div>
                      </div>

                      <a
                        href={photoResizedUrl}
                        download={`upessc_photo_${photoWidth}x${photoHeight}.jpg`}
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition shadow-xs"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Resized Photo (JPG)</span>
                      </a>
                    </div>
                  ) : (
                    <div className="text-center p-6 text-slate-400">
                      <Camera className="w-12 h-12 mx-auto mb-2 text-slate-300" />
                      <p className="text-xs font-medium">Upload a photograph to preview and download</p>
                      <p className="text-[10px] text-slate-400 mt-1">Target: 30 KB to 300 KB JPG</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ===================== TAB 2: SIGNATURE RESIZER ===================== */}
          {activeTab === 'signature' && (
            <div className="space-y-5">
              <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div className="text-xs text-purple-900 leading-relaxed">
                  <strong>Official Notification Advt 04/2026 Signature Rule (Section 2.13):</strong>
                  <br />
                  Format: <strong>JPG / JPEG</strong> | File Size: <strong>10 KB to 200 KB</strong> | Exact Resolution:{' '}
                  <strong>140 × 110 pixels</strong>. Dark ink with white paper background.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Upload & Controls */}
                <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Upload Scanned Signature
                    </label>
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png"
                      onChange={handleSignUpload}
                      className="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer"
                    />
                    {signOrigSize > 0 && (
                      <p className="text-[11px] text-slate-500 mt-1">
                        Original file size: <strong>{signOrigSize} KB</strong>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Width (px) [Fixed: 140]
                      </label>
                      <input
                        type="number"
                        value={signWidth}
                        onChange={(e) => setSignWidth(Number(e.target.value))}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Height (px) [Fixed: 110]
                      </label>
                      <input
                        type="number"
                        value={signHeight}
                        onChange={(e) => setSignHeight(Number(e.target.value))}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Compression Quality</span>
                      <span className="font-mono text-purple-700">{Math.round(signQuality * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="1.0"
                      step="0.05"
                      value={signQuality}
                      onChange={(e) => setSignQuality(Number(e.target.value))}
                      className="w-full accent-purple-600"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={applySignChanges}
                      disabled={!signSrc}
                      className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-300 text-white font-bold text-xs rounded-xl transition cursor-pointer"
                    >
                      Process &amp; Re-scale
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSignSrc(null);
                        setSignResizedUrl(null);
                        setSignOrigSize(0);
                        setSignResizedSize(0);
                      }}
                      className="p-2 border border-slate-300 rounded-xl hover:bg-slate-100 text-slate-600"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Preview & Output */}
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  {signResizedUrl ? (
                    <div className="space-y-4 w-full flex flex-col items-center">
                      <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs">
                        <img
                          src={signResizedUrl}
                          alt="UPESSC Signature Preview"
                          style={{ width: `${signWidth}px`, height: `${signHeight}px` }}
                          className="border border-dashed border-slate-300 object-contain"
                        />
                      </div>
                      <div className="w-full bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1 text-center">
                        <div className="flex justify-between items-center text-slate-600">
                          <span>Output File Size:</span>
                          <span
                            className={`font-mono font-bold ${
                              signResizedSize >= 10 && signResizedSize <= 200
                                ? 'text-emerald-700'
                                : 'text-red-600'
                            }`}
                          >
                            {signResizedSize} KB
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-slate-600">
                          <span>Pixel Dimensions:</span>
                          <span className="font-mono text-slate-800">
                            {signWidth} × {signHeight} px
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-slate-600">
                          <span>UPESSC Compliance:</span>
                          {signResizedSize >= 10 && signResizedSize <= 200 && signWidth === 140 && signHeight === 110 ? (
                            <span className="text-emerald-700 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Compliant (140x110, 10-200KB)
                            </span>
                          ) : (
                            <span className="text-amber-600 font-bold flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" /> Verify dimensions &amp; size
                            </span>
                          )}
                        </div>
                      </div>

                      <a
                        href={signResizedUrl}
                        download="upessc_signature_140x110.jpg"
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition shadow-xs"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Signature (JPG)</span>
                      </a>
                    </div>
                  ) : (
                    <div className="text-center p-6 text-slate-400">
                      <FileSignature className="w-12 h-12 mx-auto mb-2 text-slate-300" />
                      <p className="text-xs font-medium">Upload signature image to format</p>
                      <p className="text-[10px] text-slate-400 mt-1">Preset: 140 × 110 px, 10 KB to 200 KB</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ===================== TAB 3: AGE CHECKER ===================== */}
          {activeTab === 'age' && (
            <div className="space-y-5">
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-900 leading-relaxed">
                  <strong>Official Age Criteria (Advt. 04/2026 Section 2.7 &amp; 6.ख):</strong>
                  <br />
                  Reference Calculation Date: <strong>01 July 2026</strong>.
                  <br />
                  Maximum Age Limit: <strong>62 Years</strong> (Superannuation age under state university statutes).
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Enter Date of Birth (High School Certificate)
                    </label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Candidate Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                    >
                      <option value="UR">Unreserved / General (All States)</option>
                      <option value="OBC">OBC (Non-Creamy Layer - UP Domicile)</option>
                      <option value="SC">SC (Scheduled Caste - UP Domicile)</option>
                      <option value="ST">ST (Scheduled Tribe - UP Domicile)</option>
                      <option value="EWS">EWS (Economically Weaker Section - UP)</option>
                      <option value="PWD">Divyangjan (PwD - UP Domicile)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">
                      Age on 01 July 2026:
                    </span>
                    <div className="text-2xl font-black text-slate-900 font-display">
                      {ageInfo.years} Years, {ageInfo.months} Months, {ageInfo.days} Days
                    </div>
                    <div className="pt-2">
                      {ageInfo.eligible ? (
                        <div className="p-3 bg-emerald-100/70 border border-emerald-300 rounded-xl text-emerald-900 text-xs space-y-1">
                          <strong className="flex items-center gap-1 font-bold text-emerald-800">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            Eligible Under Age Norms
                          </strong>
                          <p>
                            Your age as on 01.07.2026 is under the statutory superannuation limit of 62 years.
                          </p>
                        </div>
                      ) : (
                        <div className="p-3 bg-red-100/70 border border-red-300 rounded-xl text-red-900 text-xs space-y-1">
                          <strong className="flex items-center gap-1 font-bold text-red-800">
                            <AlertCircle className="w-4 h-4 text-red-600" />
                            Age Ineligible
                          </strong>
                          <p>
                            {ageInfo.years >= 62
                              ? 'Your age exceeds the 62-year superannuation cutoff date.'
                              : 'Candidate is below the minimum entry age requirement of 21 years.'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===================== TAB 4: OMR SCORE CALCULATOR ===================== */}
          {activeTab === 'omr' && (
            <div className="space-y-5">
              <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-xs text-indigo-900 leading-relaxed">
                  <strong>Official Written &amp; Interview Scheme (Advt 04/2026 Section 10.क):</strong>
                  <br />
                  Written: <strong>120 Questions = 360 Marks</strong> (30 GK + 90 Subject). Correct: <strong>+3</strong> | Wrong:{' '}
                  <strong>-1</strong>. Interview: <strong>40 Marks</strong>. Total Selection: <strong>400 Marks</strong>.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <label className="block text-xs font-bold text-emerald-800 mb-1">
                      Correct Answers (+3 each)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max={totalQuestions}
                      value={correctAnswers}
                      onChange={(e) => setCorrectAnswers(Math.min(totalQuestions, Math.max(0, Number(e.target.value))))}
                      className="w-full text-xs p-2.5 rounded-xl border border-emerald-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-red-800 mb-1">
                      Incorrect / Multi-Bubbled (-1 each)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max={totalQuestions - correctAnswers}
                      value={wrongAnswers}
                      onChange={(e) =>
                        setWrongAnswers(
                          Math.min(totalQuestions - correctAnswers, Math.max(0, Number(e.target.value)))
                        )
                      }
                      className="w-full text-xs p-2.5 rounded-xl border border-red-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-800 mb-1">
                      Expected Interview Score (out of 40)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="40"
                      value={interviewScore}
                      onChange={(e) => setInterviewScore(Math.min(40, Math.max(0, Number(e.target.value))))}
                      className="w-full text-xs p-2.5 rounded-xl border border-purple-300 bg-white"
                    />
                  </div>

                  <p className="text-[11px] text-slate-500">
                    Unattempted questions: <strong>{unattempted}</strong> (0 marks)
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">
                      Score Breakdown
                    </span>
                    <div className="flex justify-between text-xs py-1 border-b border-slate-200">
                      <span>Gross Marks from Correct ({correctAnswers} × 3):</span>
                      <strong className="text-emerald-700 font-mono">+{grossMarks}</strong>
                    </div>
                    <div className="flex justify-between text-xs py-1 border-b border-slate-200">
                      <span>Negative Penalty ({wrongAnswers} × -1):</span>
                      <strong className="text-red-600 font-mono">-{negativePenalty}</strong>
                    </div>
                    <div className="flex justify-between text-sm py-1.5 border-b border-slate-200">
                      <span className="font-bold text-slate-800">Net Written Score (out of 360):</span>
                      <strong className="text-blue-900 font-black font-mono text-base">{netWrittenScore}</strong>
                    </div>
                    <div className="flex justify-between text-xs py-1 border-b border-slate-200">
                      <span>Interview Marks (out of 40):</span>
                      <strong className="text-purple-700 font-mono">+{interviewScore}</strong>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-center">
                    <span className="text-[11px] font-bold text-blue-700 uppercase block">
                      Aggregate Final Merit Score
                    </span>
                    <span className="text-2xl font-black text-blue-900 font-display">
                      {totalSelectionScore} / 400
                    </span>
                    <span className="text-[10px] text-blue-600 block mt-0.5">
                      {((totalSelectionScore / 400) * 100).toFixed(2)}% Combined Aggregate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===================== TAB 5: DEADLINE & EXAM COUNTDOWN ===================== */}
          {activeTab === 'countdown' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <LiveCountdownWidget
                  targetDate="2026-10-07T23:59:59+05:30"
                  title="Application Deadline"
                  subtitle="07 October 2026 (23:59:59 IST)"
                  badgeLabel="Fee &amp; Form Close"
                  variant="red"
                  passedText="Application Closed"
                />
                <LiveCountdownWidget
                  targetDate="2026-10-11T23:59:59+05:30"
                  title="Correction Deadline"
                  subtitle="11 October 2026 (23:59:59 IST)"
                  badgeLabel="Correction Window Closes"
                  variant="purple"
                  passedText="Correction Window Closed"
                />
                <LiveCountdownWidget
                  targetDate="2026-11-19T00:00:00+05:30"
                  title="Exam Starts On 19 November 2026"
                  subtitle="19 November 2026 (Official Date Boundary IST)"
                  badgeLabel="Written Exam Date"
                  variant="emerald"
                  passedText="Exam Started / Ongoing"
                />
              </div>

              <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 leading-relaxed">
                <strong>Official UPESSC Guidelines:</strong> Online application &amp; examination fee payments close strictly at 23:59:59 IST on 07 October 2026. The correction window remains active through 11 October 2026 (23:59:59 IST). The OMR written examination commences on 19 November 2026 across commission-designated centers in Uttar Pradesh.
              </div>
            </div>
          )}

          {/* ===================== TAB 6: 42 SUBJECTS EXPLORER ===================== */}
          {activeTab === 'subjects' && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search any of 42 subjects or allied postgraduate degrees..."
                    value={subjectQuery}
                    onChange={(e) => setSubjectQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50"
                  />
                </div>
                <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
                  Showing {filteredSubjects.length} of 42
                </span>
              </div>

              <div className="overflow-x-auto max-h-80 border border-slate-200 rounded-xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 sticky top-0">
                    <tr>
                      <th className="p-2">#</th>
                      <th className="p-2">Subject Name</th>
                      <th className="p-2">Co-Ed</th>
                      <th className="p-2">Women</th>
                      <th className="p-2">Total</th>
                      <th className="p-2">Allied / Equivalent PG Degree</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    {filteredSubjects.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-50">
                        <td className="p-2 font-mono text-slate-500">{s.id}</td>
                        <td className="p-2 font-semibold text-slate-900">{s.name}</td>
                        <td className="p-2 font-mono">{s.coed}</td>
                        <td className="p-2 font-mono">{s.women}</td>
                        <td className="p-2 font-mono font-bold text-blue-700">{s.total}</td>
                        <td className="p-2 text-slate-600">{s.allied}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ===================== TAB 7: 18 DV CHECKLIST & PDF GUIDE ===================== */}
          {activeTab === 'documents' && (
            <div className="space-y-4">
              <div className="bg-cyan-50/70 border border-cyan-200 rounded-2xl p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <div className="text-xs text-cyan-900 leading-relaxed">
                  <strong>PDF Upload Size Guide (Advt 04/2026 Section 2.14):</strong>
                  <br />
                  All certificates &amp; records uploaded must be in <strong>PDF format</strong> between{' '}
                  <strong>50 KB and 500 KB</strong> each.
                  <br />
                  At interview (Section 13.5), candidates must submit <strong>two separate sets</strong> of self-attested photocopies of all 18 documents.
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase">
                  Interview Document Verification Checklist (Section 13.5):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'doc_app', label: '1. Online Application Form (2 Self-attested copies)' },
                    { id: 'doc_10th', label: '2. High School Marksheet & Certificate (DOB Proof)' },
                    { id: 'doc_12th', label: '3. Intermediate Marksheet & Certificate' },
                    { id: 'doc_grad', label: '4. Graduation Marksheets (All Years) & Degree' },
                    { id: 'doc_pg', label: '5. Postgraduation Marksheets (All Years) & Degree' },
                    { id: 'doc_net', label: '6. UGC / CSIR NET or SLET/SET Certificate' },
                    { id: 'doc_phd', label: '7. Ph.D. Degree & UGC 2009/2016 Compliance Certificate' },
                    { id: 'doc_caste', label: '8. UP Domicile & Caste (SC/ST/OBC) / EWS Certificate' },
                    { id: 'doc_affidavit', label: '9. Affidavit (Appendix 6 format on stamp paper)' },
                    { id: 'doc_char1', label: '10. Character Certificate from Last Institution' },
                    { id: 'doc_char2', label: '11. Two Character Certificates from Gazetted Officers' },
                    { id: 'doc_noc', label: '12. NOC from Appointing Authority (if employed)' }
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100"
                    >
                      <input
                        type="checkbox"
                        checked={!!checkedDocs[item.id]}
                        onChange={(e) =>
                          setCheckedDocs((prev) => ({ ...prev, [item.id]: e.target.checked }))
                        }
                        className="rounded text-cyan-600"
                      />
                      <span className="text-slate-800 text-[11px]">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Uttar Pradesh Education Service Selection Commission (UPESSC) – Advt 04/2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg cursor-pointer transition"
          >
            Close Tools
          </button>
        </div>
      </div>
    </div>
  );
};
