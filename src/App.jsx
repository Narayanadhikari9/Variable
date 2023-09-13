import "./App.css";
import "./styles.css";
function App() {
  const step1 = "Downloading";
  const step2 = "Vite+react";
  const step3 = "HTML, CSS, JSX";
  const step4 = "add, commit, and push";
  let finalStep = "Submit";
  return (
    <>
      <div>
        <header className="header">
          <h1>Welcome to Frontend Developer</h1>
        </header>
        <main className="main">
          <h2>Start coding by {step1} coding Apps</h2>
          <br></br>
          <h2>We begin learning by instilling {step2}</h2>
          <br></br>
          <h2>After we instill react we start leaning {step3}</h2>
          <br></br>
          <h2>
            We work on all, but mostly JSX, after we finally done we {step4} to
            GitHUB
          </h2>
        </main>
        <footer className="footer">
          <h1>Task {finalStep} to GitHub</h1>
        </footer>
      </div>
    </>
  );
}

export default App;
