import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import DetailPdf from '../Pages/DetailPdf';
import Home from '../Pages/Home';
import MinifyCSS from '../Pages/MinifyCSS';
import MinifyJSON from '../Pages/MinifyJSON';
import JSONFormatter from '../Pages/JSONFormatter';
import CSSFormatter from '../Pages/CSSFormatter';
import HTMLFormatter from '../Pages/HTMLFormatter';
import MinifyHTML from '../Pages/MinifyHTML';

export class AppRoute extends Component {
  render() {
    return (
      <div>
              <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route  path="/detail/:id" element={<DetailPdf />} />
                    <Route  path="/MinifyCSS" element={<MinifyCSS />} />
                    <Route  path="/MinifyJSON" element={<MinifyJSON />} />
                    <Route  path="/jsonformatter" element={<JSONFormatter />} />
                    <Route  path="/CSSformatter" element={<CSSFormatter />} />
                    <Route  path="/HTMLFormatter" element={<HTMLFormatter />} />
                    <Route  path="/MinifyHTML" element={<MinifyHTML />} />
                </Routes>
            </HashRouter>
      </div>
    )
  }
} 

export default AppRoute