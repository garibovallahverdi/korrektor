"use client"
import { useState } from "react";
import { FileText, Wand2, CheckCircle } from "lucide-react";

export const DemoSection = () => {
  const [inputText, setInputText] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const sampleText = "Bu mətndə bir neçə xəta var. Məsələn, 'gəlir' sözü düzgün yazılmayıb və 'ki' bağlayıcısı ayrı yazılmalıdır.";

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysis({
        originalText: inputText,
        corrections: [
          { word: "neçə", suggestion: "neçə", type: "orfoqrafiya" },
          { word: "gəlir", suggestion: "gəlir", type: "qrammatika" },
          { word: "ki", suggestion: "ki", type: "üslub" }
        ],
        score: 85
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const insertSampleText = () => {
    setInputText(sampleText);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Demo Təhlil
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mətnizi daxil edin və dərhal təhlil nəticəsini görün
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Card */}
            <div className="border-slate-300 border px-3 py-2 rounded-lg  bg-card text-card-foreground shadow-sm  bg-white">
              <div className="px-3 py-3">
                <h3 className="flex items-center gap-2 text-2xl font-sans font-medium text-gray-800">
                  <FileText className="h-5 w-5" />
                  Mətn daxil edin
                </h3>
              </div>
              <div className="p-4 space-y-4">
                <textarea
                  placeholder="Burada yoxlamaq istədiyiniz mətni yazın..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 min-h-[200px] resize-none focus:outline-none focus:ring-1 focus:ring-black"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAnalyze}
                    disabled={!inputText.trim() || isAnalyzing}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <>
                        <Wand2 className="h-4 w-4 animate-spin" />
                        Təhlil edilir...
                      </>
                    ) : (
                      <>
                        <Wand2 className="h-4 w-4" />
                        Yoxla
                      </>
                    )}
                  </button>
                  <button
                    onClick={insertSampleText}
                    className="px-4 py-2 border border-slate-300 rounded hover:bg-gray-100"
                  >
                    Nümunə mətni
                  </button>
                </div>
              </div>
            </div>

            {/* Result Card */}
            <div className="border-slate-300 border px-3 py-2 rounded-lg  bg-card text-card-foreground shadow-sm  bg-white">
              <div className="px-4 py-3">
                <h3 className="flex items-center gap-2 text-2xl font-sans font-medium text-gray-800">
                  <CheckCircle className="h-5 w-5" />
                  Təhlil nəticəsi
                </h3>
              </div>
              <div className="p-4">
                {!analysis ? (
                  <div className="text-center py-16 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Mətn daxil edin və "Yoxla" düyməsini basın</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-sm font-medium text-green-600">
                      Ümumi bal: {analysis.score}/100
                    </div>
                    <div className="space-y-2">
                      {analysis.corrections.map((correction: any, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-red-600 line-through">{correction.word}</span>
                              <span className="mx-2">→</span>
                              <span className="text-green-600 font-medium">
                                {correction.suggestion}
                              </span>
                            </div>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              {correction.type}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
