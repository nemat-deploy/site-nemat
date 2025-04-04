import './styles.css';
          
export default function CursoLatex() {
  return (
    <div className="curso-latex">
      <div 
        className="head-foto w-full bg-center flex items-center"
        style={{ backgroundImage: "url('./curso-latex-2024-2.jpg')" }}
      >
        <p className="textPicture">
          Curso de <i class="devicon-latex-original"></i> básico na UFDPar!
          </p>
      </div>
      
      <h1>Universidade Federal do Delta do Parnaíba</h1>
      <h2>NEMAT - Núcleo de Estudos em Matemática</h2>

      <div className='latexClasses'>
        <div className="latexClass">
          <h3>Turma 1 - 2024.2</h3>
          <h4>Início dia 28/03/2025</h4>
        </div>
        <div className="latexClass">
          <h3>Turma 2 - 2024.2</h3>
          <h4>Início dia 01/03/2025</h4>
        </div>
        <p><a href="/">home</a></p>
      </div>
    </div>
  );
}
