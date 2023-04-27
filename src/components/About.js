import ilus from '../resources/ilus.png'

const About = () => {

  setTimeout(() => {
    document.getElementById("h1").style.animation = 'zoomIn 1s';
    document.getElementById("h1").style.opacity = '1';
  }, 3000)

  setTimeout(() => {
    document.getElementById("h2").style.opacity = '1';
  }, 5200)

  setTimeout(() => {
    document.getElementById("img").style.animation = 'rotateIn 1s';
    document.getElementById("img").style.opacity = '0.8';
  }, 9000)

  setTimeout(() => {
    document.getElementById("p").style.animation = 'fadeInLeft 1s';
    document.getElementById("p").style.opacity = '1';
  }, 10000)

  setTimeout(() => {
    document.getElementById("comment").style.opacity = '1';
  }, 13000)

  return (
    <div className="about-box">
      <p className='hello'>{`{Hello World}`}</p>
      <h1 id='h1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
          <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
        </svg>
        Jhonny Bracho
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
        </svg>
      </h1>
      <h2 id="h2">full-stack web developer</h2>
      <div className='img-text'>
        <img src={ilus} id='img'/>
        <p id='p'>
          I'm a fullstack web developer based in Caracas, Venezuela.
          I have a lot of passion for UI effects, animations and create user experience.
          Always looking to growth learning the new technologies, the sky is the limit.
        </p>
      </div>
      <p className="comment" id='comment'>
        //Open the navigation bar with the "            
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
        </svg>
        " button, up in the left
        <br/>
        //Then open the file "<span>portafolio</span>"
      </p>
    </div>
  );
}
  
export default About;