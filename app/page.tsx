import AboutPage from "./about/page"
import ContactPage from "./contact/page"
import ProjectPage from "./projects/page"
import Link from "next/link"
import "./homePage.css"

export default function Home() {
  return (
  <main className="flex box-border h-full">

      <Link href={"/about"} passHref>
        <div className="navbar flex justify-center items-end">
          <div>
            <div>
                <div className="text-center text-black mb-3">
                  About Me
                </div>
            </div>
          </div>
        </div>
      </Link>

    <Link href={"/projects"} passHref>
      <div className="navbar flex justify-center items-end">
        <div>
          <div className="text-center text-black mb-3">
            My Projects
          </div>
        </div>
      </div>
    </Link>
    <Link href={"/contact"} passHref>
      <div className="navbar flex justify-center items-end">
        <div>
          <div className="text-center text-black mb-3">
            Contact Me
          </div>
        </div>
      </div>
    </Link>
    <div className="navbar-info py-3 px-3">
      <h1>Monte Yoon</h1>
      <h2>Software Developer.</h2>
    </div>
  </main>
  )
}
