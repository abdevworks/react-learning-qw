import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import ProductCard from "../Components/ProductCard";




// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
    return <ProductCard product={text} />;
  };

// All items component
// Important! add unique key
export const Menu = (productsList, selected) =>
  productsList.map(productItem => {
    return <MenuItem text={productItem} key={productItem.id} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';


export default class HorizotalScrollingMenu extends Component {
    constructor(props) {
      super(props);
    }

    state = {
      selected
    };
  
    onSelect = key => {
      this.setState({ selected: key });
    }
  
  
    render() {
      const { selected } = this.state;
      // Create menu from items

      if(this.props.productsList){
        this.menuItems = Menu(this.props.productsList, selected);
      }
      const menu = this.menuItems;

      return (
        <div className="App">
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>
      );
    }
  }

