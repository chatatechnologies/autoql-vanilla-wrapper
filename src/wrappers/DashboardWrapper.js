import React from 'react';
import ReactDOM from 'react-dom';
import { Dashboard } from 'react-autoql';
import 'react-autoql/dist/autoql.esm.css'

const DashboardWrapper = ({ dashboardRef, ...props }) => {
  const [tiles, setTiles] = React.useState([]);

  React.useEffect(() => {
    if (props.dashboardTiles) {
      try {
        setTiles([...props.dashboardTiles]);
      } catch (error) {
        console.error('Error setting tiles in DashboardWrapper:', error);
      }
    }
  }, [props.tiles]);

  const handleDashboardOnChange = newTiles => {
    try {
      setTiles([...newTiles]);
      if (props.onChange) {
        props.onChange([...newTiles]);
      }
    } catch (error) {
      console.error('Error handling onChange in DashboardWrapper:', error);
    }
  }

  return (
    <Dashboard
      ref={dashboardRef}
      tiles={tiles}
      onChange={handleDashboardOnChange}
      {...props}
    />
  );
};

export function renderDashboard(props = {}) {
  const container = document.getElementById(props.targetElementId);

  if (!container) {
    console.error('Dashboard target container not found!');
    return;
  }

  const dashboardRef = React.createRef();
  ReactDOM.render(<DashboardWrapper dashboardRef={dashboardRef} {...props} />, container);
  return dashboardRef
};
