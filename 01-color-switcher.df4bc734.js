const t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),body:document.querySelector("body")};let o=null;function e(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.stopButton.disabled=!0,t.startButton.addEventListener("click",(()=>{o=setInterval(e,1e3),t.startButton.disabled=!0,t.stopButton.disabled=!1})),t.stopButton.addEventListener("click",(()=>{clearInterval(o),t.startButton.disabled=!1,t.stopButton.disabled=!0}));
//# sourceMappingURL=01-color-switcher.df4bc734.js.map