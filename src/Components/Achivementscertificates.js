// Achivementscertificates.js
import bg from "../image/software.jpeg"
import bg1 from "../image/accenture.jpeg"
import bg2 from "../image/sprout.jpeg"
import bg3 from "../image/Npython.jpeg"


export default function Achivementscertificates () {
	return (
		<section id="Achivementscertificates"
			className="px-10 w-full my-40 max-w-5xl mx-auto">
			<h2 className="text-center  text-6xl text-purple-500 font-bold">
			Achivements certificates
			</h2>
		<ul className="card-list">
  <li className="card">
    <a
      className="card-image"
      href="https://www.linkedin.com/in/chellapandian-s/details/certifications/"
      target="_blank"
      style={{
        backgroundImage:`url(${bg})`
                }}
          >
      <img
        src="https://www.linkedin.com/in/chellapandian-s/details/certifications/"

      />
    </a>
    <a
      className="card-description"
      href="https://www.linkedin.com/in/chellapandian-s/details/certifications/"
      target="_blank"
    >
      <h2>Online Intership</h2>
      <p>Software engineering</p>
    </a>
  </li>
  <li className="card">
    <a
      className="card-image"
      href="https://www.linkedin.com/in/chellapandian-s/details/certifications/"
      target="_blank"
	  style={{
        backgroundImage:`url(${bg1})`
                }}
				>
      <img
        src="https://www.linkedin.com/in/chellapandian-s/details/certifications/"
        alt="let's go"
      />
    </a>
    <a
      className="card-description"
      href="https://www.linkedin.com/in/chellapandian-s/details/certifications/"
      target="_blank"
    >
      <h2>Online Internship</h2>
      <p>Data analytstic</p>
    </a>
  </li>
  <li className="card">
    <a
      className="card-image"
    
      target="_blank"
	  style={{
        backgroundImage:`url(${bg2})`
                }}
    >
      <img
        
        alt="The Beautiful Game"
      />
    </a>
    <a
      className="card-description"
            target="_blank"
    >
      <h2>Introduction to AI</h2>
      <p>Machine Learning & Data Science</p>
    </a>
  </li>
  <li className="card">
    <a
      className="card-image"
    
      target="_blank"
	  style={{
        backgroundImage:`url(${bg3})`
                }}
    >
      <img
                alt="Jane Doe"
      />
    </a>
    <a
      className="card-description"
          target="_blank"
    >
      <h2>Python Test</h2>
      <p>By IIT Bombay</p>
    </a>
  </li>
</ul>


		</section>
	)
}
