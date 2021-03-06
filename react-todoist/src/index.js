import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import Root from './Root';

/* reset css */
const initStyle = () => injectGlobal`
html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,a,address,em,img,strong,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,video{margin:0;padding:0;font-size:100%;border:0;vertical-align:baseline}
html{overflow-y:scroll}
body{color:#000;font-size:12px;line-height:1.5;font-family:"맑은 고딕",dotum,Helvetica,'Apple SD Gothic Neo',sans-serif;background:#fff;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased;background:#eee}
address,em{font-style:normal}
input{color:#000;font-family:"굴림",gulim,Helvetica,'Apple SD Gothic Neo',sans-serif;font-size:12px;padding:0;margin:0}
legend,.blind{position:absolute;font-size:0;visibility:hidden}
ol,ul{list-style:none}
a{text-decoration:none}
a:hover{text-decoration:underline}
img{vertical-align:top}
h2{font-size:20px;font-weight:normal;margin:0 20px 30px 0}
`;

initStyle();
ReactDOM.render(<Root />, document.getElementById('root'));
