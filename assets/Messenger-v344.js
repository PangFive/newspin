import{N as n,E as l,G as t,P as c}from"./index-v344.js";function f(e,o){const i=t(o);i.includes("ChunkLoadError")?p(e):d(e,i)}function d(e,o){const i=`
    <div style="display: flex; flex-direction: row">
      <div style="font-size: 60px; color: #d50f25; padding: 0 10px">
        <i class="fas fa-exclamation-circle"></i>
      </div>
      <div style="padding: 10px">
        ${e("app.An error occurred")}
        <br><br>
        <i>${o}</i>
      </div>
    </div>
  `;l.create({title:"Oops!",message:i,html:!0,ok:{label:e("common.Close"),unelevated:"",color:"primary",noCaps:""}})}function v(e,o){const a=`
    <div style="display: flex; flex-direction: row; align-items: center">
      <div style="font-size: 60px; color: #d50f25; padding: 0 10px">
        <i class="fas fa-exclamation-circle"></i>
      </div>
      <div style="padding: 10px">
        ${t(o)}
      </div>
    </div>
  `;l.create({title:"Oops!",message:a,html:!0,ok:{label:e("common.Close"),unelevated:"",color:"primary",noCaps:""}})}function u(e,o){const i=`
    <div style="display: flex; flex-direction:row;">
      <div style="font-size:60px; color:#f2c037; padding: 0 10px">
        <i class="fas fa-question-circle"></i>
      </div>
      <div style="padding: 10px">
        ${o}
      </div>
    </div>
  `;return new Promise(a=>{l.create({title:e("app.Confirm"),message:i,html:!0,ok:{label:e("common.OK"),unelevated:"",color:"primary",noCaps:""},cancel:{label:e("common.Cancel"),flat:"",noCaps:""}}).onOk(()=>a(!0)).onCancel(()=>a(!1))})}function y(e,o,i){const a=`
    <div style="display: flex; flex-direction:row;">
      <div style="font-size:60px; color:#f2c037; padding: 0 10px">
        <i class="fas fa-question-circle"></i>
      </div>
      <div style="padding: 10px">
        ${o}
      </div>
    </div>
  `;l.create({title:e("app.Confirm"),message:a,html:!0,ok:{label:e("common.OK"),unelevated:"",color:"primary",noCaps:""},cancel:{label:e("common.Cancel"),flat:"",noCaps:""}}).onOk(()=>i())}function g(e,o,i){const a=`
    <div style="display: flex; flex-directvion:row;">
      <div style="font-size:60px; color:#3369e8; padding: 0 10px">
        <i class="fas fa-question-circle"></i>
      </div>
      <div style="padding: 10px">
        ${i}
      </div>
    </div>
  `;return new Promise(s=>{l.create({title:o,message:a,html:!0,ok:{label:e("optionsdialog.Yes"),unelevated:"",color:"primary",noCaps:""},cancel:{label:e("optionsdialog.No"),unelevated:"",color:"primary",noCaps:""}}).onOk(()=>s(!0)).onCancel(()=>s(!1))})}function p(e){const o=`
    <div style="display: flex; flex-direction: row">
      <div style="font-size: 60px; color: #3369e8; padding: 0 10px">
        <i class="fas fa-info-circle"></i>
      </div>
      <div style="padding: 10px">
        ${e("app.There is a new version")}
      </div>
    </div>
  `;l.create({title:e("app.New version available"),message:o,html:!0,ok:{label:e("common.Reload"),unelevated:"",color:"primary",noCaps:""},cancel:{label:e("common.Cancel"),flat:"",noCaps:""}}).onOk(()=>location.reload())}function x(e){n.create({message:e,position:r(),actions:[{icon:"fas fa-times",color:"white"}]})}function h(e,o,i){n.create({message:o,position:r(),timeout:7e3,actions:[{label:e("common.Undo"),color:"white",noCaps:!0,handler:i},{icon:"fas fa-times",color:"white"}]})}function r(){return c.is.mobile?"top":"bottom"}export{v as a,f as b,u as c,y as d,h as e,x as s,g as y};
