import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Camera,
  FileSignature,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  RotateCcw,
  Sparkles,
  BookOpen,
  FileCheck,
  Search,
  ArrowRight
} from 'lucide-react';

interface IbpsHindiOfficerToolsModalProps {
  tool: string | null;
  onClose: () => void;
}

export const IbpsHindiOfficerToolsModal: React.FC<IbpsHindiOfficerToolsModalProps> = ({
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
  const [photoWidth, setPhotoWidth] = useState<number>(200);
  const [photoHeight, setPhotoHeight] = useState<number>(230);
  const [photoQuality, setPhotoQuality] = useState<number>(0.85);
  const [photoResizedUrl, setPhotoResizedUrl] = useState<string | null>(null);
  const [photoResizedSize, setPhotoResizedSize] = useState<number>(0);
  const photoCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // ===================== SIGNATURE RESIZER STATE =====================
  const [signSrc, setSignSrc] = useState<string | null>(null);
  const [signOrigSize, setSignOrigSize] = useState<number>(0);
  const [signWidth, setSignWidth] = useState<number>(140);
  const [signHeight, setSignHeight] = useState<number>(60);
  const [signQuality, setSignQuality] = useState<number>(0.85);
  const [signResizedUrl, setSignResizedUrl] = useState<string | null>(null);
  const [signResizedSize, setSignResizedSize] = useState<number>(0);
  const signCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // ===================== AGE CHECKER STATE =====================
  const [dob, setDob] = useState<string>('1998-05-15');

  // ===================== QUALIFICATION CHECKER STATE =====================
  const [masterSubject, setMasterSubject] = useState<string>('hindi');
  const [ugSubject, setUgSubject] = useState<string>('english_major');
  const [ugMedium, setUgMedium] = useState<string>('english');
  const [isFullTime, setIsFullTime] = useState<boolean>(true);
  const [hasComputerSkills, setHasComputerSkills] = useState<boolean>(true);

  // ===================== DOCUMENT CHECKLIST STATE =====================
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    doc_photo: true,
    doc_sign: true,
    doc_10th: true,
    doc_grad: true,
    doc_master: true,
    doc_computer: true,
    doc_id: true,
    doc_caste: false,
    doc_exp: false
  });
  const [docFileSize, setDocFileSize] = useState<number>(320);

  if (!tool) return null;

  // Handle Photo File Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoOrigSize(Math.round(file.size / 1024));
    const reader = new FileReader();
    reader.onload = (event) => {
      setPhotoSrc(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Render & Process Photo Canvas
  const processPhoto = () => {
    if (!photoSrc) return;
    const img = new Image();
    img.src = photoSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = photoWidth;
      canvas.height = photoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, photoWidth, photoHeight);
        const dataUrl = canvas.toDataURL('image/jpeg', photoQuality);
        setPhotoResizedUrl(dataUrl);

        // Approximate size
        const head = 'data:image/jpeg;base64,';
        const sizeInBytes = Math.round(((dataUrl.length - head.length) * 3) / 4);
        setPhotoResizedSize(Math.round(sizeInBytes / 1024));
      }
    };
  };

  // Handle Signature Upload
  const handleSignUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSignOrigSize(Math.round(file.size / 1024));
    const reader = new FileReader();
    reader.onload = (event) => {
      setSignSrc(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Render & Process Signature Canvas
  const processSign = () => {
    if (!signSrc) return;
    const img = new Image();
    img.src = signSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = signWidth;
      canvas.height = signHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, signWidth, signHeight);
        const dataUrl = canvas.toDataURL('image/jpeg', signQuality);
        setSignResizedUrl(dataUrl);

        const head = 'data:image/jpeg;base64,';
        const sizeInBytes = Math.round(((dataUrl.length - head.length) * 3) / 4);
        setSignResizedSize(Math.round(sizeInBytes / 1024));
      }
    };
  };

  // Calculate Age as of 01.09.2026
  const calculateAge = () => {
    if (!dob) return { years: 0, months: 0, days: 0, isEligible: false, error: 'Enter DOB' };
    const bDate = new Date(dob);
    const cutOff = new Date(2026, 8, 1); // 01 Sept 2026

    let years = cutOff.getFullYear() - bDate.getFullYear();
    let months = cutOff.getMonth() - bDate.getMonth();
    let days = cutOff.getDate() - bDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(cutOff.getFullYear(), cutOff.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const minDate = new Date(1996, 8, 2); // 02.09.1996
    const maxDate = new Date(2003, 8, 1); // 01.09.2003
    const isEligible = bDate >= minDate && bDate <= maxDate;

    return { years, months, days, isEligible };
  };

  const ageResult = calculateAge();

  // Validate Master's Degree Qualification
  const evaluateQualification = () => {
    if (!isFullTime) {
      return {
        eligible: false,
        reason: 'Distance / Open University / Part-time programs are strictly not eligible as per Section B.'
      };
    }
    if (!hasComputerSkills) {
      return {
        eligible: false,
        reason: 'Competency in Operating Systems and MS Office (Word & Excel) in Hindi & English is mandatory (MUST).'
      };
    }

    // Check 4 valid paths
    // Path 1: Master's in Hindi + English at Graduation
    if (masterSubject === 'hindi' && (ugSubject === 'english_major' || ugSubject === 'english_elective')) {
      return {
        eligible: true,
        reason: "Valid (Option 1): Master's Degree in Hindi with English as major/elective at Graduation."
      };
    }
    // Path 2: Master's in English + Hindi at Graduation
    if (masterSubject === 'english' && (ugSubject === 'hindi_major' || ugSubject === 'hindi_elective')) {
      return {
        eligible: true,
        reason: "Valid (Option 2): Master's Degree in English with Hindi as major/elective at Graduation."
      };
    }
    // Path 3: Master's in Any Subject + Hindi at Grad + English medium
    if (masterSubject === 'other' && (ugSubject === 'hindi_major' || ugSubject === 'hindi_elective') && ugMedium === 'english') {
      return {
        eligible: true,
        reason: "Valid (Option 3): Master's in other subject with Hindi at Degree & English medium exam."
      };
    }
    // Path 4: Master's in Any Subject + English at Grad + Hindi medium
    if (masterSubject === 'other' && (ugSubject === 'english_major' || ugSubject === 'english_elective') && ugMedium === 'hindi') {
      return {
        eligible: true,
        reason: "Valid (Option 4): Master's in other subject with English at Degree & Hindi medium exam."
      };
    }

    return {
      eligible: false,
      reason: "Subject combination does not match any of the 4 official criteria specified in Section B of Advt IBPS/2026-27/04."
    };
  };

  const qualResult = evaluateQualification();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-3xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-blue-100 text-blue-800 rounded-xl">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                IBPS Hindi Officer Tools &amp; Utilities
              </h3>
              <p className="text-xs text-slate-500">
                Official specifications configured for Grade E Recruitment (Advt. IBPS/2026-27/04)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/50 p-1.5 gap-1 text-xs font-bold">
          <button
            onClick={() => setActiveTab('photo')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'photo'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>Photo Resizer (200x230)</span>
          </button>
          <button
            onClick={() => setActiveTab('signature')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'signature'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <FileSignature className="w-4 h-4" />
            <span>Signature (140x60)</span>
          </button>
          <button
            onClick={() => setActiveTab('age')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'age'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Age Cut-Off Calculator</span>
          </button>
          <button
            onClick={() => setActiveTab('qualification')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'qualification'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Degree Combination</span>
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'documents'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>PDF Validator</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-5 sm:p-6 max-h-[70vh] overflow-y-auto space-y-5">
          {/* TAB 1: PHOTO RESIZER */}
          {activeTab === 'photo' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 leading-relaxed">
                <strong>Official Notification Mandate:</strong> Recent passport photo, 200 x 230 pixels, file size between <strong>20 KB to 50 KB</strong> in JPG/JPEG format. Light-coloured, preferably white background.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-700">Select Image File</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="w-full text-xs text-slate-500 file:mr-2 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                  />

                  {photoSrc && (
                    <div className="space-y-3 pt-2">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <label className="text-[10px] text-slate-500 font-bold uppercase">Width (px)</label>
                          <input
                            type="number"
                            value={photoWidth}
                            onChange={(e) => setPhotoWidth(Number(e.target.value))}
                            className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-500 font-bold uppercase">Height (px)</label>
                          <input
                            type="number"
                            value={photoHeight}
                            onChange={(e) => setPhotoHeight(Number(e.target.value))}
                            className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-600 mb-1">
                          <span>JPEG Compression Quality:</span>
                          <strong>{Math.round(photoQuality * 100)}%</strong>
                        </div>
                        <input
                          type="range"
                          min="0.4"
                          max="1.0"
                          step="0.05"
                          value={photoQuality}
                          onChange={(e) => setPhotoQuality(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={processPhoto}
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Process &amp; Resize Photo</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[220px]">
                  {photoResizedUrl ? (
                    <div className="text-center space-y-3">
                      <img
                        src={photoResizedUrl}
                        alt="Resized preview"
                        style={{ width: `${photoWidth}px`, height: `${photoHeight}px` }}
                        className="mx-auto rounded-lg shadow-sm border border-slate-200 object-cover"
                      />
                      <div>
                        <span
                          className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full ${
                            photoResizedSize >= 20 && photoResizedSize <= 50
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                              : 'bg-amber-100 text-amber-800 border border-amber-200'
                          }`}
                        >
                          Size: {photoResizedSize} KB ({photoResizedSize >= 20 && photoResizedSize <= 50 ? 'Valid: 20-50 KB' : 'Adjust Quality Slider'})
                        </span>
                      </div>
                      <a
                        href={photoResizedUrl}
                        download="IBPS_Hindi_Officer_Photo_200x230.jpg"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download 200x230 Photo</span>
                      </a>
                    </div>
                  ) : photoSrc ? (
                    <div className="text-center text-xs text-slate-500">
                      <p>Image loaded ({photoOrigSize} KB).</p>
                      <p className="mt-1">Click "Process &amp; Resize Photo" to apply IBPS specs.</p>
                    </div>
                  ) : (
                    <div className="text-center text-xs text-slate-400 space-y-1">
                      <Camera className="w-8 h-8 mx-auto text-slate-300" />
                      <p>Upload a photograph to test &amp; download compliant JPG</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SIGNATURE RESIZER */}
          {activeTab === 'signature' && (
            <div className="space-y-4">
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-xs text-purple-900 leading-relaxed">
                <strong>Official Notification Mandate:</strong> Signature on white paper with <strong>Black Ink pen</strong>. 140 x 60 pixels, file size between <strong>10 KB to 20 KB</strong> in JPG/JPEG format. Capital/block letters are strictly prohibited.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-700">Select Signature Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSignUpload}
                    className="w-full text-xs text-slate-500 file:mr-2 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
                  />

                  {signSrc && (
                    <div className="space-y-3 pt-2">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <label className="text-[10px] text-slate-500 font-bold uppercase">Width (px)</label>
                          <input
                            type="number"
                            value={signWidth}
                            onChange={(e) => setSignWidth(Number(e.target.value))}
                            className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-500 font-bold uppercase">Height (px)</label>
                          <input
                            type="number"
                            value={signHeight}
                            onChange={(e) => setSignHeight(Number(e.target.value))}
                            className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-600 mb-1">
                          <span>Quality:</span>
                          <strong>{Math.round(signQuality * 100)}%</strong>
                        </div>
                        <input
                          type="range"
                          min="0.4"
                          max="1.0"
                          step="0.05"
                          value={signQuality}
                          onChange={(e) => setSignQuality(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={processSign}
                        className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Process &amp; Resize Signature</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[220px]">
                  {signResizedUrl ? (
                    <div className="text-center space-y-3">
                      <img
                        src={signResizedUrl}
                        alt="Signature preview"
                        style={{ width: `${signWidth}px`, height: `${signHeight}px` }}
                        className="mx-auto rounded-lg shadow-sm border border-slate-200 object-cover"
                      />
                      <div>
                        <span
                          className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full ${
                            signResizedSize >= 10 && signResizedSize <= 20
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                              : 'bg-amber-100 text-amber-800 border border-amber-200'
                          }`}
                        >
                          Size: {signResizedSize} KB ({signResizedSize >= 10 && signResizedSize <= 20 ? 'Valid: 10-20 KB' : 'Adjust Quality Slider'})
                        </span>
                      </div>
                      <a
                        href={signResizedUrl}
                        download="IBPS_Hindi_Officer_Signature_140x60.jpg"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download 140x60 Signature</span>
                      </a>
                    </div>
                  ) : (
                    <div className="text-center text-xs text-slate-400 space-y-1">
                      <FileSignature className="w-8 h-8 mx-auto text-slate-300" />
                      <p>Upload a signature to resize to 140x60 (10-20 KB)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: AGE CALCULATOR */}
          {activeTab === 'age' && (
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
                <strong>Official Age Rule (Advt. IBPS/2026-27/04 Section B):</strong> Age calculated as on <strong>01 September 2026</strong>. Minimum <strong>23 Years</strong>, Maximum <strong>30 Years</strong> (Born between <strong>02.09.1996</strong> and <strong>01.09.2003</strong>, both dates inclusive).
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                <div className="space-y-3 bg-white border border-slate-200 rounded-2xl p-4">
                  <label className="block text-xs font-bold text-slate-700">Enter Your Date of Birth</label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
                  />
                  <div className="text-[11px] text-slate-500">
                    Official Reference Cut-Off: <strong>01 September 2026</strong>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-3">
                  <div className="text-xs text-slate-500 font-bold uppercase">Age as on 01.09.2026</div>
                  <div className="text-2xl font-black text-slate-900 font-display">
                    {ageResult.years} Yrs, {ageResult.months} Mos, {ageResult.days} Days
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${
                      ageResult.isEligible
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}
                  >
                    {ageResult.isEligible ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>ELIGIBLE (Within 23 to 30 Years)</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4" />
                        <span>NOT ELIGIBLE (Outside 23-30 Bracket)</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: QUALIFICATION COMBINATION CHECKER */}
          {activeTab === 'qualification' && (
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed">
                Check whether your Master’s and Bachelor’s subject combination meets one of the 4 official pathways specified in Section B of Advertisement Number IBPS/2026-27/04.
              </div>

              <div className="space-y-3 bg-white border border-slate-200 rounded-2xl p-4 text-xs">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">1. Master's Degree Subject:</label>
                  <select
                    value={masterSubject}
                    onChange={(e) => setMasterSubject(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  >
                    <option value="hindi">Master's Degree in Hindi</option>
                    <option value="english">Master's Degree in English</option>
                    <option value="other">Master's Degree in Any Other Subject</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">2. Graduation (Degree) Subject:</label>
                  <select
                    value={ugSubject}
                    onChange={(e) => setUgSubject(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  >
                    <option value="english_major">English as Major / Elective Subject</option>
                    <option value="hindi_major">Hindi as Major / Elective Subject</option>
                    <option value="neither">Neither Hindi nor English as Major / Elective</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">3. Medium of Examination at Degree Level:</label>
                  <select
                    value={ugMedium}
                    onChange={(e) => setUgMedium(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  >
                    <option value="english">English Medium</option>
                    <option value="hindi">Hindi Medium</option>
                    <option value="other">Other Language Medium</option>
                  </select>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-800">
                    <input
                      type="checkbox"
                      checked={isFullTime}
                      onChange={(e) => setIsFullTime(e.target.checked)}
                      className="rounded text-blue-600"
                    />
                    <span>Full-time Regular Course from Recognized University (Not distance/open)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-800">
                    <input
                      type="checkbox"
                      checked={hasComputerSkills}
                      onChange={(e) => setHasComputerSkills(e.target.checked)}
                      className="rounded text-blue-600"
                    />
                    <span>Computer competency in MS Word and Excel in Hindi &amp; English (MUST)</span>
                  </label>
                </div>
              </div>

              {/* Evaluation Result */}
              <div
                className={`p-4 rounded-2xl border ${
                  qualResult.eligible
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-red-50 border-red-200 text-red-900'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm">
                  {qualResult.eligible ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span>{qualResult.eligible ? 'QUALIFICATION ELIGIBLE' : 'INELIGIBLE'}</span>
                </div>
                <p className="text-xs mt-1.5 leading-relaxed">{qualResult.reason}</p>
              </div>
            </div>
          )}

          {/* TAB 5: DOCUMENT PRE-FLIGHT VALIDATOR */}
          {activeTab === 'documents' && (
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed">
                IBPS portal requires certificates &amp; documents to be uploaded in PDF format with file size strictly <strong>≤ 500 KB</strong>.
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3">
                <div className="text-xs font-bold text-slate-800">Pre-Flight File Size Check:</div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="10"
                    value={docFileSize}
                    onChange={(e) => setDocFileSize(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="font-mono font-bold text-xs bg-slate-100 px-3 py-1 rounded-lg">
                    {docFileSize} KB
                  </span>
                </div>
                <div
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl text-center ${
                    docFileSize <= 500
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {docFileSize <= 500
                    ? `✓ Acceptable File Size (${docFileSize} KB ≤ 500 KB Limit)`
                    : `✗ File Size Exceeded (${docFileSize} KB > 500 KB Limit). Compress before upload.`}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 mb-2">Checklist of Required Uploads:</h4>
                {[
                  { key: 'doc_photo', label: '1. Passport Photograph (200x230 px, 20–50 KB, JPG)' },
                  { key: 'doc_sign', label: '2. Signature on white paper with black ink (140x60 px, 10–20 KB, JPG)' },
                  { key: 'doc_10th', label: '3. Class 10th / Secondary Certificate for Proof of Date of Birth (PDF ≤ 500 KB)' },
                  { key: 'doc_grad', label: '4. Graduation Degree Certificate & All Semester Marksheets (PDF ≤ 500 KB)' },
                  { key: 'doc_master', label: "5. Master's Post Graduate Degree Certificate & Marksheets (PDF ≤ 500 KB)" },
                  { key: 'doc_computer', label: '6. Proof of Computer Skills in MS Word & Excel (PDF ≤ 500 KB)' },
                  { key: 'doc_id', label: '7. Photo Identity Proof (Aadhaar / PAN / Passport / Voter ID, PDF ≤ 500 KB)' },
                  { key: 'doc_caste', label: '8. Caste / Category Certificate (SC/ST/OBC-NCL/EWS/PwBD if applicable, PDF ≤ 500 KB)' },
                  { key: 'doc_exp', label: '9. Experience Certificate of translation work (if claimed, PDF ≤ 500 KB)' }
                ].map((item) => (
                  <label key={item.key} className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={Boolean(checkedDocs[item.key])}
                      onChange={(e) =>
                        setCheckedDocs((prev) => ({ ...prev, [item.key]: e.target.checked }))
                      }
                      className="mt-0.5 rounded text-blue-600"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-[11px] text-slate-500">
            Source: IBPS Notification IBPS/2026-27/04
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Close Tools
          </button>
        </div>
      </div>
    </div>
  );
};
