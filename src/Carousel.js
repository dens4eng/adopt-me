import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  constructor(props) {
    super(props);
    //esto es necesario para la primera version de la funcion
    //this.handleIndexClick = this.handleIndexClick.bind(this);
  }
  static getDerivedStateFromProps({ media }) {
    let photos = ["http:/placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }
  /*handleIndexClick(e) {
    this.state({
      active: +e.target.dataset.index
    });
  }*/
  //si haces una funcion flecha para los listener, al no crear una nueva
  //instancia, asume que el this se refiere a la clase, en este caso Carousel
  handleIndexClick = index =>
    this.setState({
      active: index
    });
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick.bind(this, index)}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
