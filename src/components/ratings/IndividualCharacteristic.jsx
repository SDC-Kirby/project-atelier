import React from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { GiRunningShoe } from 'react-icons/gi';


let IndividualCharacteristic = (props) => {
//transform: translateX(200px);
//style={{"transform" : `translate(${char.Size.value * 80})` }}
  let char = props.char;
  return (
  <div className="individual-characterstic-container">
    {(char.Size) &&
    <div className="characteristic-container">
      <section className="body-text"> Size </section>
      <div className="characteristic-bars-container">
        <div className="char-bar"></div>
        <div className="char-bar"> </div>
        <div className="char-bar"> </div>
        <GoTriangleDown className="marker" style={{"transform" : `translate(${ char.Size.value * 4.8}vw)`}}/>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Too Small</span>
        <span className="char-qualities helpful-answer">Perfect</span>
        <span className="char-qualities helpful-answer">Too Big</span>
      </div>
    </div>}

    {(char.Fit) &&
    <div className="characteristic-container">
      <section className="body-text"> Fit </section>
      <div className="characteristic-bars-container">
        <div className="char-bar"></div>
        <div className="char-bar"> </div>
        <div className="char-bar"> </div>
        <GoTriangleDown className="marker" style={{"transform" : `translate(${ char.Fit.value * 4.8}vw)`}}/>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Too Tight</span>
        <span className="char-qualities helpful-answer">Perfect</span>
        <span className="char-qualities helpful-answer">Too Long</span>
      </div>
    </div>}

    {(char.Width) &&
    <div className="characteristic-container">
      <section className="body-text"> Width </section>
      <div className="characteristic-bars-container">
        <div className="char-bar"></div>
        <div className="char-bar"> </div>
        <div className="char-bar"> </div>
        <GoTriangleDown className="marker" style={{"transform" : `translate(${ char.Width.value * 4.8}vw)`}}/>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Too Narrow</span>
        <span className="char-qualities helpful-answer">Perfect</span>
        <span className="char-qualities helpful-answer">Too Wide</span>
      </div>
    </div>}

    {(char.Comfort) &&
    <div className="characteristic-container">
      <section className="body-text"> Comfort </section>
      <div className="characteristic-bars-container">
        <div className="char-bar"></div>
        <div className="char-bar"> </div>
        <div className="char-bar"> </div>
        <GoTriangleDown className="marker" style={{"transform" : `translate(${ char.Comfort.value * 4.8}vw)`}}/>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Uncomfortable</span>
        <span className="char-qualities helpful-answer">Ok</span>
        <span className="char-qualities helpful-answer">Perfect</span>
      </div>
    </div>}

    {(char.Quality) &&
    <div className="characteristic-container">
      <section className="body-text"> Quality </section>
      <div className="characteristic-bars-container">
        <div className="char-bar "></div>
        <div className="char-bar"> </div>
        <div className="char-bar"> </div>
        <GoTriangleDown className="marker" style={{"transform" : `translate(${ char.Quality.value * 4.8}vw)`}}/>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Poor</span>
        <span className="char-qualities helpful-answer">Ok</span>
        <span className="char-qualities helpful-answer">Perfect</span>
      </div>
    </div>}

    {(char.Length) &&
    <div className="characteristic-container">
      <section className="body-text"> Length </section>
      <div className="characteristic-bars-container">
        <div className="char-bar"></div>
        <div className="char-bar"> </div>
        <div className="char-bar"> </div>
        <GoTriangleDown className="marker" style={{"transform" : `translate(${ char.Length.value * 4.8}vw)`}}/>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Too Short</span>
        <span className="char-qualities helpful-answer">Perfect</span>
        <span className="char-qualities helpful-answer">Too Long</span>
      </div>
    </div>}

  </div>
  )
}

export default IndividualCharacteristic;