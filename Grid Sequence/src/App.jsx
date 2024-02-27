import { useState } from 'react'
import './App.css'
import Cell from './components/Cell'

const App = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false)

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activatedCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    console.log(newOrder);

    //deactivate
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config.length}, 1fr)`,
        }}
      >
        {config
          .flat(1)
          .map((value, index) =>
            value ? (
              <Cell
                key={index}
                filled={order.includes(index)}
                onClick={() => activatedCells(index)}
                isDisabled={order.includes(index) || isDeactivating}
              />
            ) : (
              <span />
            )
          )}
      </div>
    </div>
  );
};

export default App