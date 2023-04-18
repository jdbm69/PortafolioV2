const Skills = () => {

  return (
    <div className="skills-box">
        <p id="blue">const skills <span id="colon"> =</span> <span id="yellow">{`{`}</span></p>
        <p className="tab" id="fbd">frontend <span id="colon"> :</span> <span>{`{`}</span></p>
        <p className="tab-dos">Html<span id="colon"> ,</span></p>
        <p className="tab-dos">Css<span id="colon"> ,</span></p>
        <p className="tab-dos">Sass<span id="colon"> ,</span></p>
        <p className="tab-dos">Bootstrap<span id="colon"> ,</span></p>
        <p className="tab-dos">Javascript<span id="colon"> ,</span></p>
        <p className="tab-dos">Typescript<span id="colon"> ,</span></p>
        <p className="tab-dos">React.js<span id="colon"> ,</span></p>
        <p className="tab-dos">React Native<span id="colon"> ,</span></p>
        <p className="tab-dos">Next.js</p>
        <p className="tab"><span>{`}`}<span id="colon"> ,</span></span></p>
        <p className="tab" id="fbd">backend <span id="colon"> :</span> <span>{`{`}</span></p>
        <p className="tab-dos">Node.js<span id="colon"> ,</span></p>
        <p className="tab-dos">Express.js<span id="colon"> ,</span></p>
        <p className="tab-dos">Postgresql<span id="colon"> ,</span></p>
        <p className="tab-dos">Python</p>
        <p className="tab"><span>{`}`}<span id="colon"> ,</span></span></p>
        <p className="tab" id="fbd">design <span id="colon"> :</span> <span>{`{`}</span></p>
        <p className="tab-dos">Figma<span id="colon"> ,</span></p>
        <p className="tab-dos">Photoshop</p>
        <p className="tab">{`}`}<span id="colon"> ,</span></p>
        <p><span id="yellow">{`}`}</span><span id="colon"> ;</span></p>
        <div className="comment">
          <p>
            //Open the terminal with the "
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-square-half" viewBox="0 0 16 16">
              <path d="M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12z"/>
            </svg>
            " button, up in the right, beside the "
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
            " button
          </p>
          <p className="coment">
            //When the terminal is open, write "npm start" and press the enter button on your keyboard
          </p>
        </div>
    </div>
  );
}

export default Skills;