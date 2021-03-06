import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FitToViewport } from '../.';

const App = () => {
  const [width, setWidth] = React.useState(400);
  const [height, setHeight] = React.useState(300);
  const [minZoom, setMinZoom] = React.useState(0);
  const [maxZoom, setMaxZoom] = React.useState(1);
  return (
    <>
      <FitToViewport
        width={width}
        height={height}
        minZoom={minZoom}
        maxZoom={maxZoom}
        style={{ overflow: 'hidden' }}
      >
        <div className="box">
          <pre>{`<FitToViewport
  width={${width}}
  height={${height}}
  minZoom={${minZoom}}
  maxZoom={${maxZoom}}
>
  {stuff}
</FitToViewport>`}</pre>
        </div>
      </FitToViewport>
      <div style={{ position: 'fixed', bottom: 10, right: 10 }}>
        <label>
          Width:
          <input
            type="range"
            name="width"
            min={250}
            max={2000}
            value={width}
            onChange={e => setWidth(+e.currentTarget.value)}
          />
          <span>{width}</span>
        </label>
        <label>
          Height:
          <input
            type="range"
            name="height"
            min={200}
            max={1800}
            value={height}
            onChange={e => setHeight(+e.currentTarget.value)}
          />
          <span>{height}</span>
        </label>
        <label>
          Min Zoom:
          <input
            type="range"
            name="minZoom"
            min={0}
            max={1}
            step={0.01}
            value={minZoom}
            onChange={e => setMinZoom(+e.currentTarget.value)}
          />
          <span>{minZoom.toFixed(2)}</span>
        </label>
        <label>
          Max Zoom:
          <input
            type="range"
            name="maxZoom"
            min={1}
            max={3}
            step={0.01}
            value={maxZoom}
            onChange={e => setMaxZoom(+e.currentTarget.value)}
          />
          <span>{maxZoom.toFixed(2)}</span>
        </label>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
