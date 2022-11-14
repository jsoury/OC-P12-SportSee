
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/components/Activity/Activity.js';
reactComponents['Activity'] = Component0;

import Component1 from '../src/components/Card/Card.js';
reactComponents['Card'] = Component1;

import Component2 from '../src/pages/Dashboard/Dashboard.js';
reactComponents['Dashboard'] = Component2;

import Component3 from '../src/components/Performance/Performance.js';
reactComponents['Performance'] = Component3;

import Component4 from '../src/components/Score/Score.js';
reactComponents['Score'] = Component4;

import Component5 from '../src/components/Sessions/Sessions.js';
reactComponents['Sessions'] = Component5;