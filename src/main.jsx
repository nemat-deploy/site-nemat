import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Lazy-loaded components
const CursoLatex = lazy(() => import("./pages/cursolatex"));

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cursolatex" element={<CursoLatex />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
