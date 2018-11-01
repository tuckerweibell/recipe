import React, {Component} from 'react';
import {Page, SymbolMaster, nodeToSketchLayers} from '@brainly/html-sketchapp';
import fileDownload from 'js-file-download';
import {withLive} from 'react-live';
import {Offscreen} from './style';
import ActionButton from '../ActionButton';

class ExportSketch extends Component {
  constructor(props) {
    super(props);
    this.pageRef = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    this.setSketchPage();
  }

  componentDidUpdate(previousProps) {
    if (this.props.live.element !== previousProps.live.element) {
      this.setSketchPage();
    }
  }

  setSketchPage() {
    const symbolNode = this.pageRef.current.children[0] || document.createElement('div');
    const dimensions = symbolNode.getBoundingClientRect();

    // create a Sketch symbol and give it a name
    const symbol = new SymbolMaster(dimensions);
    symbol.setName('Exported Component');

    // build up layers for this element and it's descendants
    const parentAndChildren = [symbolNode, ...Array.from(symbolNode.querySelectorAll('*'))];

    parentAndChildren.forEach(node => {
      const layers = nodeToSketchLayers(node);
      layers.forEach(layer => symbol.addLayer(layer));
    });

    // Sketch page where our Sketch symbol will live
    const page = new Page({width: 100, height: 100});
    page.setName('Exported Components');
    page.addLayer(symbol);

    this.setState({page});
  }

  render() {
    const {file, mime} = this.props;
    const {element: Element} = this.props.live;
    const {page} = this.state;
    return (
      <div>
        <Offscreen innerRef={this.pageRef}>{Element && <Element />}</Offscreen>
        {page && (
          <Download file={file} mime={mime} content={JSON.stringify(page.toJSON())}>
            <ActionButton>
              {({executing}) => (executing ? 'Symbol Exported' : 'Export to Sketch')}
            </ActionButton>
          </Download>
        )}
      </div>
    );
  }
}

const Download = ({children, content, file, mime}) => (
  <div onClick={() => fileDownload(content, file, mime)}>{children}</div>
);

export default withLive(ExportSketch);
