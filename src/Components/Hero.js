//Hero.js
import Heroimg from '../image/web.png';
import pdf from '../image/chellapandianresume.pdf';
export default function Hero() {
	return (
		
	<section
		id="hero"
		className=" px-15 w-full flex text-white gap-3 flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
		<div className="flex-1 flex flex-col justify-center items-center gap-5">
		
		<div class="wrapper">
			<div class="static-txt">I'm a </div>
			<ul class="dynamic-txts">
				<li><span>Front-end Developer</span></li>
				<li><span>Web Developer</span></li>
				<li><span>Software Developer</span></li>
				</ul>
			</div>
		</div>
		
		<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

    {/* <a href='https://drive.google.com/file/d/1o2E6eP9Ou_1yOh9b76rRXvRTl4J9Ttra/view?usp=drivesdk'  target="_blank" rel="noopener noreferrer"><div className="content-btn">
            <button className="resume-btn">RESUME</button>
          </div></a> */} 
		  <a href={pdf} download={"chellapandianresume"}> 
		  <button className="resume-btn">RESUME DOWNLOAD</button></a>
		  
</>


		<li>
      <a href="https://www.linkedin.com/in/chellapandian-s/" className="social-icon">
        {" "}
        <i className="fa fa-linkedin" />
      </a>
    </li>
    <li>
      <a href="https://github.com/ChellapandianS" className="social-icon">
        {" "}
        <i className="fa fa-github" />
      </a>
    </li>
		

		<div className="flex-1">
		<img src={Heroimg}
			alt=""
			className="w-full h-full bg-cover"/>
		</div>
	</section>
	);
}
