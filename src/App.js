import React, { Component } from 'react';
import './App.css';

var elementsSymbol = [ "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt" ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.findElements = this.findElements.bind(this);
    this.appendText = this.appendText.bind(this);
  }

  handleChange(e) {
    let text = e.target.value;
    this.setState({ value: text });
    let output = '';
    text.split(' ').forEach((word) => {
      output += this.findElements(word) + ' ';
    })
    this.appendText(output);
  }

  findElements(s) {
    let news = s.slice();
    let lower = s.toLowerCase();
    let longest = '';
    let idx = 0;
    for (let i = 0; i < elementsSymbol.length; i++) {
      if (lower.includes(elementsSymbol[i].toLowerCase())) {
        if (elementsSymbol[i].length > longest.length) {
          longest = elementsSymbol[i];
          idx = lower.indexOf(elementsSymbol[i].toLowerCase());
        }
        news = s.slice(0, idx) + `[${longest}]` + s.slice(idx + longest.length);
      }
    }
    return news;
  }

  appendText(s) {
    let output = document.getElementById('output');
    output.innerText = s;
  }

  render() {
    return (
      <div className="App">
        <div>
          <input value={this.state.value} onChange={this.handleChange}/>
        </div>
        <div id="output">
        </div>
      </div>
    );
  }
}

export default App;
