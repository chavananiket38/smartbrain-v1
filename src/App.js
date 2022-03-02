import './App.css';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/imagelinkform/Rank.js';
import SignIn from './components/signin/SignIn.js';
import Register from './components/register/Register.js';
import Particles from "react-tsparticles";
import React from 'react';
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import {options} from './particleOption';



class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      input: "",
      imageUrl: "",
      box: [],
      route: "signin",
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  componentDidMount(){
    fetch("https://nameless-citadel-65461.herokuapp.com")
    .then(res => res.json())
    .then(data => console.log(data));
  }

  particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  particlesLoaded = (container) => {
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions.map( (box) => { return box.region_info.bounding_box})
    
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    const box = clarifaiFace.map((face) => {
      return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
      }
    });
    return box;
  }

  displayFaceBox = (box) => {
    
    this.setState({box: box})
  }

//set input
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }
//Clarifai initialisation and set imageUrl 
  onbuttonSubmit = (event) => {
    this.setState({imageUrl : this.state.input})
      
    fetch('https://nameless-citadel-65461.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
    })
  })
    .then(res => res.json())
      .then(res => {
        if(res){
          fetch(" https://nameless-citadel-65461.herokuapp.com/image", {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
        })
        .then(res => res.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
        }
        this.displayFaceBox(this.calculateFaceLocation(res))
      })
      .catch(err => console.log(err))
  }
//function for set change to signIn & signout

  onRouteChange = (route) => {
    if(route==='signin'){
      this.setState({imageUrl: ""})
    }
    this.setState({route: route})
  }

  render(){
  
    return (
      <div className="App">

      <Particles className='particles'
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            options={options}
          />
          <Navigation onRouteChange={this.onRouteChange} route={this.state.route}/>

          { 
            this.state.route=="signin" 
              ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
              : (
                  this.state.route=="register"
                    ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    : <div>
                        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                      <ImageLinkForm 
                        onInputChange={this.onInputChange} 
                        onbuttonSubmit={this.onbuttonSubmit}/
                      >
                      <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
                    </div>
                )
          }
      </div>
    );}
}

export default App;


{/* "a403429f2ddf4b49b307e318f00e528b" */}
{/* response.outputs[0].data.regions[0].region_info.bounding_box */}