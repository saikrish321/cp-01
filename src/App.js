import { Component } from "react";
import "./styles.css";

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class HeadingRow extends Component {
  render() {
    // let prevCategory = null;
    // let headingRendered;
    // let elementToRender;
    // if (this.props.category === prevCategory) {
    //   let headingRendered = true;
    // } else {
    //   headingRendered = false;
    // }
    // prevCategory = this.props.category;
    // console.log(headingRendered);

    // if (headingRendered !== true) {
    //   elementToRender = (
    //     <tr>
    //       <th>{this.props.category}</th>
    //     </tr>
    //   );
    // } else {
    //   elementToRender = <></>;
    // }
    return (
      <tr>
        <th>{this.props.category}</th>
      </tr>
    );
  }
}

class NormalRow extends Component {
  getClassName = () => {
    if (this.props.product.stocked === true) {
      return "color: black";
    } else {
      return "color: red";
    }
  };

  render() {
    let color;
    if (this.props.product.stocked === true) {
      color = "black";
    } else {
      color = "red";
    }

    return (
      <tr>
        <td style={{ color: `${color}` }}>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class RenderRows extends Component {
  render() {
    const products = this.props.products;
    let displayRows = [];
    let isCategory1Renderedcount = 0;
    let isCategory2Renderedcount = 0;
    let prevEle;
    {
      products.forEach((element) => {
        if (element.category !== undefined) {
          if (
            element.category === "Electronics" &&
            prevEle !== element.category
          ) {
            displayRows.push(<HeadingRow category={element.category} />);
            prevEle = element.category;
          } else if (
            element.category === "Sporting Goods" &&
            prevEle !== element.category
          ) {
            displayRows.push(<HeadingRow category={element.category} />);
            prevEle = element.category;
          }
        }
        displayRows.push(<NormalRow product={element} />);
      });
    }
    return displayRows;
  }
}

class TableComponent extends Component {
  render() {
    //console.log(this.props.products[3]);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <RenderRows products={this.props.products} />
        </tbody>
      </table>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <TableComponent products={PRODUCTS} />
    </div>
  );
}
