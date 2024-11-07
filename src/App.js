import MouseEffect from "./components/MouseEffect.js"
import Header from "./components/Header.js"
import Main from "./components/Main.js"

function App() {
  return (
    <div className=" font-sans bg-bgc leading-relaxed text-textPrimary antialiased selection:bg-bgc selection:text-textPrimary">
      <MouseEffect />
      <div class="ml-16 min-h-screen max-w-screen-2xl pt-6 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div class="lg:flex lg:justify-between lg:gap-18">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  )
}

export default App
