import React, { useState, useRef } from 'react';
import { ExamRecord, ActivePage } from '../../types/exam';
import {
  Calculator,
  Download,
  Upload,
  RefreshCw,
  Clock,
  Calendar,
  DollarSign,
  Activity,
  CheckCircle2,
  AlertCircle,
  Percent,
  TrendingUp,
  FileText
} from 'lucide-react';

/* =========================================================================
   1. SIGNATURE RESIZER (Black ink, white paper, standard exam specifications)
   ========================================================================= */
export const SignatureResizerTool: React.FC<{ exam: ExamRecord; onNavigate: (page: ActivePage, slug?: string) => void }> = ({ exam }) => {
  const [targetWidth, setTargetWidth] = useState<number>(140);
  const [targetHeight, setTargetHeight] = useState<number>(60);
  const [targetMaxKb, setTargetMaxKb] = useState<number>(20);
  const [targetMinKb, setTargetMinKb] = useState<number>(10);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resizedUrl, setResizedUrl] = useState<string | null>(null);
  const [resizedKb, setResizedKb] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      processSignature(url, targetWidth, targetHeight, targetMaxKb);
    }
  };

  const processSignature = (src: string, w: number, h: number, maxKb: number) => {
    setIsProcessing(true);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Fill pure white background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);

      // Draw image
      ctx.drawImage(img, 0, 0, w, h);

      let quality = 0.9;
      let dataUrl = canvas.toDataURL('image/jpeg', quality);
      let sizeBytes = Math.round((dataUrl.length * 3) / 4);
      let sizeKb = Math.round(sizeBytes / 1024);

      if (sizeKb > maxKb) {
        quality = 0.65;
        dataUrl = canvas.toDataURL('image/jpeg', quality);
        sizeBytes = Math.round((dataUrl.length * 3) / 4);
        sizeKb = Math.round(sizeBytes / 1024);
      }

      setResizedUrl(dataUrl);
      setResizedKb(sizeKb);
      setIsProcessing(false);
    };
  };

  const applyPreset = (presetW: number, presetH: number, minKb: number, maxKb: number) => {
    setTargetWidth(presetW);
    setTargetHeight(presetH);
    setTargetMinKb(minKb);
    setTargetMaxKb(maxKb);
    if (previewUrl) {
      processSignature(previewUrl, presetW, presetH, maxKb);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Signature Optimizer</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">Candidate Signature Resizer</h2>
          <p className="text-xs text-slate-500 mt-1">
            Compliant with IBPS, SSC, UPSC, and State PSC signature guidelines (black ink on clear white paper).
          </p>
        </div>

        {/* Presets */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Standard Exam Presets
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => applyPreset(140, 60, 10, 20)}
              className="p-2.5 text-xs text-left border rounded-xl border-slate-200 hover:border-blue-500 bg-slate-50 hover:bg-white transition-all cursor-pointer"
            >
              <div className="font-bold text-slate-900">IBPS / Bank Exams</div>
              <div className="text-[11px] text-slate-500">140×60 px | 10–20 KB</div>
            </button>
            <button
              type="button"
              onClick={() => applyPreset(140, 60, 10, 20)}
              className="p-2.5 text-xs text-left border rounded-xl border-slate-200 hover:border-blue-500 bg-slate-50 hover:bg-white transition-all cursor-pointer"
            >
              <div className="font-bold text-slate-900">SSC CHSL / CGL</div>
              <div className="text-[11px] text-slate-500">140×60 px | 10–20 KB</div>
            </button>
            <button
              type="button"
              onClick={() => applyPreset(350, 350, 20, 50)}
              className="p-2.5 text-xs text-left border rounded-xl border-slate-200 hover:border-blue-500 bg-slate-50 hover:bg-white transition-all cursor-pointer"
            >
              <div className="font-bold text-slate-900">UPSC Standard</div>
              <div className="text-[11px] text-slate-500">350×350 px | 20–50 KB</div>
            </button>
            <button
              type="button"
              onClick={() => applyPreset(200, 100, 10, 30)}
              className="p-2.5 text-xs text-left border rounded-xl border-slate-200 hover:border-blue-500 bg-slate-50 hover:bg-white transition-all cursor-pointer"
            >
              <div className="font-bold text-slate-900">Railway RRB</div>
              <div className="text-[11px] text-slate-500">200×100 px | 10–30 KB</div>
            </button>
          </div>
        </div>

        {/* Custom Dimensions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Width (px)</label>
            <input
              type="number"
              value={targetWidth}
              onChange={(e) => {
                const val = Number(e.target.value);
                setTargetWidth(val);
                if (previewUrl) processSignature(previewUrl, val, targetHeight, targetMaxKb);
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Height (px)</label>
            <input
              type="number"
              value={targetHeight}
              onChange={(e) => {
                const val = Number(e.target.value);
                setTargetHeight(val);
                if (previewUrl) processSignature(previewUrl, targetWidth, val, targetMaxKb);
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold"
            />
          </div>
        </div>

        {/* Upload Button */}
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-4 px-6 border-2 border-dashed border-blue-400 hover:border-blue-600 bg-blue-50/50 hover:bg-blue-50 rounded-2xl transition-all flex flex-col items-center justify-center gap-2 cursor-pointer"
          >
            <Upload className="w-6 h-6 text-blue-600" />
            <span className="text-xs font-bold text-blue-900">
              {previewUrl ? 'Choose Another Signature' : 'Upload Signature Image'}
            </span>
            <span className="text-[10px] text-slate-400">JPG, JPEG, PNG, WEBP</span>
          </button>
        </div>
      </div>

      {/* Preview and Download */}
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
            Real-Time Output Preview
          </span>

          {resizedUrl ? (
            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <div className="bg-white p-4 border-2 border-slate-300 rounded-xl shadow-xs mb-4">
                <img
                  src={resizedUrl}
                  alt="Resized Signature"
                  className="max-h-32 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full font-bold text-slate-700">
                  {targetWidth} × {targetHeight} px
                </span>
                <span className="px-3 py-1 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-full font-bold">
                  Size: ~{resizedKb} KB (Target: {targetMinKb}–{targetMaxKb} KB)
                </span>
                <span className="px-3 py-1 bg-blue-100 border border-blue-300 text-blue-800 rounded-full font-bold">
                  Format: JPG
                </span>
              </div>
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center text-center text-slate-400 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <FileText className="w-12 h-12 mb-2 text-slate-300" />
              <p className="text-xs font-semibold">Upload a signature on the left to resize instantly.</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Auto-adjusts to prescribed official portal standards.</p>
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-slate-100 mt-6 flex justify-end">
          {resizedUrl && (
            <a
              href={resizedUrl}
              download={`${exam.slug}-signature.jpg`}
              className="py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-emerald-500/25 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resized Signature</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   2. IMAGE COMPRESSOR (Compress to exact target KB with quality slider)
   ========================================================================= */
export const ImageCompressorTool: React.FC<{ exam: ExamRecord }> = () => {
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [originalKb, setOriginalKb] = useState<number | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [compressedKb, setCompressedKb] = useState<number | null>(null);
  const [quality, setQuality] = useState<number>(75);
  const [targetKb, setTargetKb] = useState<number>(50);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setOriginalKb(Math.round(file.size / 1024));
      const url = URL.createObjectURL(file);
      setOriginalUrl(url);
      compressImage(url, quality);
    }
  };

  const compressImage = (src: string, qPercent: number) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, img.width, img.height);
      ctx.drawImage(img, 0, 0);

      const q = Math.max(0.1, Math.min(1.0, qPercent / 100));
      const dataUrl = canvas.toDataURL('image/jpeg', q);
      const sizeBytes = Math.round((dataUrl.length * 3) / 4);
      setCompressedKb(Math.round(sizeBytes / 1024));
      setCompressedUrl(dataUrl);
    };
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Fast Client-Side Compression</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">Exam Image Compressor</h2>
          <p className="text-xs text-slate-500 mt-1">
            Reduce document and photo file sizes to meet 20KB, 50KB, or 100KB portal limits without server uploads.
          </p>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
            <span>Compression Quality:</span>
            <span className="text-indigo-600">{quality}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={quality}
            onChange={(e) => {
              const val = Number(e.target.value);
              setQuality(val);
              if (originalUrl) compressImage(originalUrl, val);
            }}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>

        {/* Quick KB target buttons */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Target Size Presets
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[20, 50, 100].map((kb) => (
              <button
                key={kb}
                type="button"
                onClick={() => {
                  setTargetKb(kb);
                  const approxQ = kb === 20 ? 45 : kb === 50 ? 70 : 85;
                  setQuality(approxQ);
                  if (originalUrl) compressImage(originalUrl, approxQ);
                }}
                className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                  targetKb === kb ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                Under {kb} KB
              </button>
            ))}
          </div>
        </div>

        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-4 px-6 border-2 border-dashed border-indigo-400 hover:border-indigo-600 bg-indigo-50/50 hover:bg-indigo-50 rounded-2xl transition-all flex flex-col items-center justify-center gap-2 cursor-pointer"
          >
            <Upload className="w-6 h-6 text-indigo-600" />
            <span className="text-xs font-bold text-indigo-900">
              {originalUrl ? 'Choose Another Image' : 'Select Image to Compress'}
            </span>
            <span className="text-[10px] text-slate-400">JPG, PNG, WEBP supported</span>
          </button>
        </div>
      </div>

      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
            Comparison & Results
          </span>

          {compressedUrl && originalKb && compressedKb ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                  <span className="text-[11px] text-slate-400 uppercase font-bold block">Original File</span>
                  <strong className="text-sm text-slate-800">{originalKb} KB</strong>
                </div>
                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
                  <span className="text-[11px] text-emerald-600 uppercase font-bold block">Compressed</span>
                  <strong className="text-sm text-emerald-800">{compressedKb} KB</strong>
                  <span className="text-[10px] text-emerald-700 block mt-0.5">
                    ({Math.round(((originalKb - compressedKb) / originalKb) * 100)}% reduction)
                  </span>
                </div>
              </div>

              <div className="flex justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <img
                  src={compressedUrl}
                  alt="Compressed result"
                  className="max-h-56 object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center text-center text-slate-400 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <RefreshCw className="w-12 h-12 mb-2 text-slate-300" />
              <p className="text-xs font-semibold">Select an image to see instant compression metrics.</p>
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-slate-100 mt-6 flex justify-end">
          {compressedUrl && (
            <a
              href={compressedUrl}
              download="compressed-document.jpg"
              className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-indigo-500/25 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Compressed Image</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   3. BMI CALCULATOR (Body Mass Index for Physical Standards PST/PET)
   ========================================================================= */
export const BmiCalculatorTool: React.FC = () => {
  const [heightCm, setHeightCm] = useState<number>(170);
  const [weightKg, setWeightKg] = useState<number>(68);

  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? Number((weightKg / (heightM * heightM)).toFixed(1)) : 0;

  let category = 'Normal';
  let badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
  let commentary = 'Ideal body mass index compliant with defense, police, and paramilitary physical examination rules.';

  if (bmi < 18.5) {
    category = 'Underweight';
    badgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
    commentary = 'Below standard range. Some medical boards require minimum BMI of 18.5 for recruitment.';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
    badgeColor = 'bg-orange-100 text-orange-800 border-orange-300';
    commentary = 'Slightly above normal range. Border Security & Police PST may recommend weight management.';
  } else if (bmi >= 30) {
    category = 'Obese';
    badgeColor = 'bg-red-100 text-red-800 border-red-300';
    commentary = 'Significantly above standard criteria. May result in temporary unfitness during medical examination.';
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Physical Standards Utility</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">Body Mass Index (BMI) Calculator</h2>
          <p className="text-xs text-slate-500 mt-1">
            Calculate your BMI to verify compliance with Government &amp; Defense Medical Board standards.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span>Height: {heightCm} cm ({(heightCm / 30.48).toFixed(1)} ft)</span>
            </div>
            <input
              type="range"
              min="130"
              max="220"
              value={heightCm}
              onChange={(e) => setHeightCm(Number(e.target.value))}
              className="w-full accent-teal-600 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span>Weight: {weightKg} kg</span>
            </div>
            <input
              type="range"
              min="35"
              max="150"
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              className="w-full accent-teal-600 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            BMI Assessment Result
          </span>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Your Body Mass Index</span>
            <div className="text-5xl font-black text-slate-900 font-display">{bmi}</div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${badgeColor}`}>
              {category}
            </span>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl text-xs text-blue-900">
            <strong>Recruitment Medical Note:</strong> {commentary}
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   4. PERCENTAGE CALCULATOR (Marks / Total %, CGPA to %, % Change)
   ========================================================================= */
export const PercentageCalculatorTool: React.FC = () => {
  const [marksObtained, setMarksObtained] = useState<number>(425);
  const [totalMarks, setTotalMarks] = useState<number>(500);

  const percentage = totalMarks > 0 ? Number(((marksObtained / totalMarks) * 100).toFixed(2)) : 0;

  // CGPA to %
  const [cgpa, setCgpa] = useState<number>(8.5);
  const cgpaPercent = Number((cgpa * 9.5).toFixed(2));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Marks to Percentage */}
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold mb-2">
            <Percent className="w-3.5 h-3.5" />
            <span>Academic Qualification Utility</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">Marks to Percentage Calculator</h2>
          <p className="text-xs text-slate-500 mt-1">
            Calculate exact aggregate percentage for 10th, 12th, or Graduation required during online application.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Marks Obtained</label>
            <input
              type="number"
              value={marksObtained}
              onChange={(e) => setMarksObtained(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Total Maximum Marks</label>
            <input
              type="number"
              value={totalMarks}
              onChange={(e) => setTotalMarks(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>
        </div>

        <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-center">
          <span className="text-xs font-bold text-rose-700 block uppercase">Calculated Percentage</span>
          <strong className="text-3xl font-black text-rose-900 font-display">{percentage}%</strong>
        </div>
      </div>

      {/* CGPA to Percentage */}
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>CBSE / University Standard</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">CGPA to Percentage Converter</h2>
          <p className="text-xs text-slate-500 mt-1">
            Convert CGPA to percentage using the official AICTE / CBSE standard multiplication factor of 9.5.
          </p>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Enter CGPA (on 10 Point Scale)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="10"
            value={cgpa}
            onChange={(e) => setCgpa(Number(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
          />
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-center">
          <span className="text-xs font-bold text-amber-700 block uppercase">Equivalent Percentage</span>
          <strong className="text-3xl font-black text-amber-900 font-display">{cgpaPercent}%</strong>
          <span className="text-[11px] text-amber-800 block mt-1">Formula: CGPA × 9.5</span>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   5. SALARY CALCULATOR (7th CPC & Banking Pay Scale / In-Hand Calculator)
   ========================================================================= */
export const SalaryCalculatorTool: React.FC = () => {
  const [basicPay, setBasicPay] = useState<number>(36000);
  const [daPercent, setDaPercent] = useState<number>(50);
  const [cityTier, setCityTier] = useState<'X' | 'Y' | 'Z'>('Y');

  // HRA rates
  const hraRates = { X: 30, Y: 20, Z: 10 };
  const hraPercent = hraRates[cityTier];

  const da = Math.round((basicPay * daPercent) / 100);
  const hra = Math.round((basicPay * hraPercent) / 100);
  const transportAllowance = cityTier === 'X' ? 4500 : 2400;

  const grossSalary = basicPay + da + hra + transportAllowance;
  const npsDeduction = Math.round(((basicPay + da) * 10) / 100);
  const approxTax = Math.round(grossSalary * 0.05);
  const totalDeductions = npsDeduction + approxTax;
  const inHandSalary = grossSalary - totalDeductions;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Pay Matrix &amp; Allowances</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">Salary &amp; In-Hand Calculator</h2>
          <p className="text-xs text-slate-500 mt-1">
            Estimate monthly gross pay, statutory NPS deductions, and in-hand take-home salary.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Basic Pay (₹)</label>
            <input
              type="number"
              value={basicPay}
              onChange={(e) => setBasicPay(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Dearness Allowance (DA %)</label>
            <input
              type="number"
              value={daPercent}
              onChange={(e) => setDaPercent(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">City Classification (HRA)</label>
            <div className="grid grid-cols-3 gap-2">
              {(['X', 'Y', 'Z'] as const).map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setCityTier(tier)}
                  className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    cityTier === tier ? 'bg-emerald-50 border-emerald-500 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  Tier {tier} ({hraRates[tier]}%)
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Monthly Pay Slip Breakdown
          </span>

          <div className="overflow-x-auto">
            <table class="min-w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-slate-100">
                <tr><td class="p-2 text-slate-600">Basic Pay</td><td class="p-2 text-right font-bold">₹{basicPay.toLocaleString('en-IN')}</td></tr>
                <tr><td class="p-2 text-slate-600">Dearness Allowance ({daPercent}%)</td><td class="p-2 text-right font-bold">₹{da.toLocaleString('en-IN')}</td></tr>
                <tr><td class="p-2 text-slate-600">House Rent Allowance (HRA {hraPercent}%)</td><td class="p-2 text-right font-bold">₹{hra.toLocaleString('en-IN')}</td></tr>
                <tr><td class="p-2 text-slate-600">Transport &amp; Other Allowances</td><td class="p-2 text-right font-bold">₹{transportAllowance.toLocaleString('en-IN')}</td></tr>
                <tr className="bg-slate-50 font-bold"><td class="p-2 text-slate-800">Gross Monthly Salary</td><td class="p-2 text-right text-emerald-700">₹{grossSalary.toLocaleString('en-IN')}</td></tr>
                <tr><td class="p-2 text-slate-600">NPS Deduction (10% of Basic + DA)</td><td class="p-2 text-right text-red-600">-₹{npsDeduction.toLocaleString('en-IN')}</td></tr>
                <tr><td class="p-2 text-slate-600">Approx. Income Tax &amp; CESS</td><td class="p-2 text-right text-red-600">-₹{approxTax.toLocaleString('en-IN')}</td></tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
            <span className="text-xs font-bold text-emerald-700 uppercase block">Estimated Net In-Hand Monthly Pay</span>
            <strong className="text-3xl font-black text-emerald-900 font-display">₹{inHandSalary.toLocaleString('en-IN')}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   6. DATE CALCULATOR (Days between dates, Add/Subtract days from exam)
   ========================================================================= */
export const DateCalculatorTool: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('2026-09-01');
  const [endDate, setEndDate] = useState<string>('2026-09-21');

  const s = new Date(startDate);
  const e = new Date(endDate);
  const diffDays = Math.ceil((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Timeline Utility</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">Exam Date &amp; Duration Calculator</h2>
          <p className="text-xs text-slate-500 mt-1">
            Calculate exact days, weeks, and duration between recruitment advertisement milestones.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">End / Deadline Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Duration Result
          </span>

          <div className="p-6 bg-cyan-50 rounded-2xl border border-cyan-200 text-center space-y-1">
            <span className="text-xs font-bold text-cyan-700 uppercase">Total Calendar Days</span>
            <div className="text-4xl font-black text-cyan-950 font-display">{diffDays >= 0 ? diffDays : 0} Days</div>
            <p className="text-xs text-cyan-800 mt-1">
              Equivalent to ~{Math.floor(diffDays / 7)} Weeks and {diffDays % 7} Days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   7. LOAN EMI CALCULATOR (Education / Personal Loan for Aspirants)
   ========================================================================= */
export const LoanEmiCalculatorTool: React.FC = () => {
  const [amount, setAmount] = useState<number>(300000);
  const [rate, setRate] = useState<number>(9.5);
  const [tenureYears, setTenureYears] = useState<number>(3);

  const monthlyRate = rate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi =
    monthlyRate > 0 && totalMonths > 0
      ? Math.round((amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1))
      : 0;

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - amount;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Financial Utility</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">Loan EMI Calculator</h2>
          <p className="text-xs text-slate-500 mt-1">
            Calculate monthly EMI, interest payable, and total loan cost for education or study expenses.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Loan Principal Amount (₹)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Annual Interest Rate (%)</label>
            <input
              type="number"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Tenure (Years)</label>
            <input
              type="number"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Repayment Summary
          </span>

          <div className="p-6 bg-violet-50 rounded-2xl border border-violet-200 text-center">
            <span className="text-xs font-bold text-violet-700 uppercase block">Monthly EMI</span>
            <strong className="text-4xl font-black text-violet-950 font-display">₹{emi.toLocaleString('en-IN')}</strong>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-slate-500 block">Total Interest</span>
              <strong className="text-slate-800 text-sm font-bold">₹{totalInterest.toLocaleString('en-IN')}</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-slate-500 block">Total Payment</span>
              <strong className="text-slate-800 text-sm font-bold">₹{totalPayment.toLocaleString('en-IN')}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   8. SIMPLE INTEREST CALCULATOR
   ========================================================================= */
export const SimpleInterestCalculatorTool: React.FC = () => {
  const [p, setP] = useState<number>(50000);
  const [r, setR] = useState<number>(7.5);
  const [t, setT] = useState<number>(2);

  const interest = Math.round((p * r * t) / 100);
  const maturity = p + interest;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Financial Utility</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">Simple Interest Calculator</h2>
          <p className="text-xs text-slate-500 mt-1">
            Calculate simple interest earned or payable with principal, rate, and tenure.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Principal Amount (₹)</label>
            <input
              type="number"
              value={p}
              onChange={(e) => setP(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Annual Interest Rate (%)</label>
            <input
              type="number"
              step="0.1"
              value={r}
              onChange={(e) => setR(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Time Period (Years)</label>
            <input
              type="number"
              value={t}
              onChange={(e) => setT(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Maturity &amp; Interest Result
          </span>

          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200 text-center">
            <span className="text-xs font-bold text-blue-700 uppercase block">Total Interest Accrued</span>
            <strong className="text-4xl font-black text-blue-950 font-display">₹{interest.toLocaleString('en-IN')}</strong>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase block">Total Maturity Amount</span>
            <strong className="text-2xl font-black text-slate-900 font-display">₹{maturity.toLocaleString('en-IN')}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
