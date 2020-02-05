import React, { Component } from "react"

// const classNames = [
//     "first-header",
//     "second-header",
//     "third-header"
//   ];
const pics = [
    'https://res.cloudinary.com/de1fkeds5/image/upload/v1579717309/_MG_2397_ejun5g.jpg',
    'https://res.cloudinary.com/de1fkeds5/image/upload/v1579717367/DALLIN-SLIDER-FINSIHSED-GREEN-HAT-4-WEB_zzwojh.jpg',
    'https://res.cloudinary.com/de1fkeds5/image/upload/v1579717309/_MG_2397_ejun5g.jpg',
    'https://res.cloudinary.com/de1fkeds5/image/upload/v1579717382/SLIDER-1-finsihed_rzdrvf.jpg',
  ];
  
  

export default class SliderContainer extends Component {


        constructor(props) {
          super(props);
          const idxStart = 0;
          this.state = {
            index: idxStart,
            next: this.getNextIndex(idxStart),
            move: false,
          };
        }
      
        getNextIndex(idx) {
          if (idx >= pics.length - 1) {
            return 0;
          }
          return idx + 1;
        }
      
        setIndexes(idx) {
          this.setState({
            index: idx,
            next: this.getNextIndex(idx)
          });
        }
      
        componentDidMount() {        
          setInterval(() => {
            // on
            this.setState({
              move: true
            });
            // off
            setTimeout(() => {
              this.setState({
                move: false
              });
              this.setIndexes(this.getNextIndex(this.state.index));
            }, 3000); // same delay as in the css transition here
      
          }, 10000); // next slide delay
        }
        render() {
          const move = this.state.move ? 'move' : '';
          if (this.state.move) {
      
          }
          return (
            <div className="slider-container">
            <div className="mask">
              <div className="pic-wrapper">
                <div className={`current pic ${move}`}>
                  <img src={pics[this.state.index]} alt="" />
                </div>
                <div className={`next pic ${move}`}>
                  <img src={pics[this.state.next]} alt="" />
                </div>
              </div>
            </div>
            </div>
            
          );
        }
      }
      
      













    //   constructor(props) {
//     super(props);
//     this.state = {
//       index: 0,
//     };
//   }

//   incrementIndex = () => {
//     const newIndex = this.state.index + 1;
//     this.setState({ index: newIndex })
//   }

//   componentDidMount = () => {
//     setInterval(this.incrementIndex, 3000);
//   }

//   render() {
//     const index = this.state.index % classNames.length;
//     const className = classNames[index];
//     return(
//         <div className="slider">
//         <div className={className}>
//             yo
//           </div>
//           </div>

//     )
//   }

// }