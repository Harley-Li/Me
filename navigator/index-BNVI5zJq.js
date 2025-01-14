!(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(
        document.createTextNode(
          '@font-face{font-family:neuzeit_grotesk;src:url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/regular/neuzeitgro-reg.eot);src:url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/regular/neuzeitgro-reg.eot?#iefix) format("embedded-opentype"),url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/regular/neuzeitgro-reg.woff2) format("woff2"),url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/regular/neuzeitgro-reg.woff) format("woff"),url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/regular/neuzeitgro-reg.ttf) format("truetype"),url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/regular/neuzeitgro-reg.svg#neuzeit_grotesk) format("svg");font-weight:400;font-style:normal}@font-face{font-family:neuzeit_grotesk;src:url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/bold/neuzeitgro-bol.eot);src:url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/bold/neuzeitgro-bol.eot?#iefix) format("embedded-opentype"),url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/bold/neuzeitgro-bol.woff2) format("woff2"),url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/bold/neuzeitgro-bol.woff) format("woff"),url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/bold/neuzeitgro-bol.ttf) format("truetype"),url(https://www.fidelity.co.uk/static_cms/fil_site_assets/fonts/neuzeitgro/bold/neuzeitgro-bol.svg#neuzeit_grotesk) format("svg");font-weight:700;font-style:normal}:root{--page-bg: #fefefe;--primary-text: #20242b;--btn-bg: #026fad;--btn-primary-text: blue;--input-color: #1089ca}.dark{--page-bg: #101524;--primary-text: #f1ddcc;--btn-bg: #1c2439;--btn-primary-text: #f1ddcc}*{font-family:neuzeit_grotesk,Helvetica,Arial,sans-serif;line-height:1;font-weight:400;padding:0;margin:0;box-sizing:border-box;color:var(--primary-text)}* .sr-only{position:absolute;left:-999rem;z-index:-999}body{display:flex;min-height:100vh;overflow-x:hidden;overflow-y:auto;background-color:var(--page-bg);font-size:16px}body button,body a,body input{cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}body strong{font-weight:700}body button{background-color:var(--btn-bg);color:#fff;height:3.25rem;padding:0 1.25rem;border:none;align-items:center;font-size:1.125rem;border:1px solid transparent;display:flex}body .checkbox-item{height:1.25rem;display:flex}body .checkbox-item input[type=checkbox]{height:0;width:0;position:absolute;left:-999rem}body .checkbox-item input[type=checkbox]:focus-visible{outline:none}body .checkbox-item input[type=checkbox]+label{position:relative;display:flex;align-items:center;cursor:pointer}body .checkbox-item input[type=checkbox]+label>span{display:flex;justify-content:center;align-items:center;margin-right:.25rem;width:1.125rem;height:1.125rem;background-color:#fff;border:1px solid var(--primary-text);border-radius:4px;box-sizing:border-box;transition:border .15s linear}body .checkbox-item input[type=checkbox]:checked+label>span{border:.5rem solid var(--input-color)}body .checkbox-item input[type=checkbox]:checked+label>span:before{content:"";display:block;position:absolute;top:-1px;left:2px;border:2px solid #fff;border-top:1px solid transparent;border-left:1px solid transparent;transform:rotate(45deg);height:.5rem;width:.25rem;transform-origin:0% 100%}body .radio-item{height:1.25rem;display:flex;column-gap:.5rem;align-items:center;cursor:pointer}body .radio-item input{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:1.125rem;height:1.125rem;border-radius:50%;border:1px solid var(--primary-text);transition:border .2s linear}body .radio-item input:checked{border:5px solid var(--input-color);transition:border .15s linear}body .radio-item input:focus,body .radio-item input:focus-visible,body .radio-item input:hover{outline:none}body .radio-item label{font-size:1rem}body button.menu{outline:none!important;border:none;border-radius:0;padding:0;margin:0;width:1.5rem;height:1.125rem;background-color:transparent;border-top:2px solid var(--input-color);border-bottom:2px solid var(--input-color);position:fixed;z-index:2;top:1.25rem;left:1.25rem;display:none}@media screen and (max-width: 30rem){body button.menu{display:block}}body button.menu:before,body button.menu:after{display:block;content:"";position:absolute;left:0;top:6px;width:1.5rem;height:0;border-top:2px solid var(--input-color);transition:transform .2s linear}body button.menu.expanded{border:none}body button.menu.expanded:before,body button.menu.expanded:after{transition:transform .2s linear;transform-origin:center;transform:rotate(45deg)}body button.menu.expanded:after{transform:rotate(-45deg)}body .bg{display:none;position:fixed;z-index:1;background-color:#0000004d;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);width:100vw;height:calc(100vh - 4rem);left:0;top:4rem}@media screen and (max-width: 30rem){body .bg{height:100vh;top:0}}body #root{width:100%}body .app-container{width:100%;min-height:calc(100vh - 301px);margin:0 auto;position:relative}@media screen and (max-width: 30rem){body .app-container{padding:0;min-height:unset}}.step-container .step{margin-bottom:3rem}.step-container .step .hero-banner{display:flex;width:100vw;height:400px;position:relative;background-color:#dcdee1;justify-content:space-between}.step-container .step .hero-banner .page-title{width:100%;position:relative;display:flex;flex-direction:column;justify-content:center}.step-container .step .hero-banner .page-title .link-container{width:calc(1200px - 14rem);margin:0 auto}.step-container .step .hero-banner .page-title .link-container>a{font-size:1rem;line-height:1.5;margin-bottom:2rem;display:inline-block;color:#20242b;width:fit-content;position:relative;left:.25rem;text-decoration:none}.step-container .step .hero-banner .page-title .link-container>a:hover,.step-container .step .hero-banner .page-title .link-container>a:focus,.step-container .step .hero-banner .page-title .link-container>a:focus-visible{text-decoration:underline}.step-container .step .hero-banner .page-title .link-container h1{color:#515b6b;font-size:3.375rem;position:relative;font-weight:700}.step-container .step .hero-banner .page-title .link-container h1:after{width:5rem;height:0;border-bottom:4px solid #016fad;position:absolute;left:.25rem;bottom:-2rem;display:block;content:""}.step-container .step .hero-banner .img-container{width:50%;height:100%;position:absolute;right:0;top:0;z-index:1}.step-container .step .hero-banner .img-container:before{background-color:#dcdee1;display:block;content:"";position:absolute;left:-75px;width:150px;height:400px;transform:skew(-18deg);z-index:1}.step-container .step .hero-banner .img-container img{width:100%;height:100%;object-fit:cover;object-position:top}.step-container .step.st2 .main-content{margin-top:2rem}.step-container .step .main-content{max-width:1200px;margin:-1.5rem auto 0;background-color:#fefefe;position:relative;z-index:1}.step-container .step .main-content.more{margin-top:2rem}.step-container .step .main-content .desc-section{margin-bottom:.5rem;padding:3rem 7rem 1rem}.step-container .step .main-content .desc-section h2{font-size:44px;line-height:1;margin-bottom:3rem}.step-container .step .main-content .desc-section p{font-size:1.125rem;line-height:1.444;margin-bottom:1.5rem;font-weight:300;color:#262626}.step-container .step .main-content .desc-section p.key-info{font-size:1rem}.step-container .step .main-content .desc-section p.key-info strong{font-size:1.125rem}.step-container .step .main-content .step-detail .step-controller{height:fit-content;background-color:transparent;color:var(--input-color);padding:0;column-gap:.5rem;position:relative;padding-left:1.25rem;padding-top:1px;display:none}.step-container .step .main-content .step-detail .step-controller:before,.step-container .step .main-content .step-detail .step-controller:after{display:block;content:"";position:absolute}.step-container .step .main-content .step-detail .step-controller:before{border-top:2px solid var(--input-color);border-left:2px solid var(--input-color);width:.375rem;height:.375rem;transform-origin:center;transform:rotate(-45deg);left:1px;top:5px}.step-container .step .main-content .step-detail .step-controller:after{border-top:2px solid var(--input-color);width:.75rem;left:1px;top:8px}.step-container .step .main-content .step-detail .progress{font-size:1.125rem;line-height:1;margin-bottom:.5rem;text-align:center}.step-container .step .main-content .step-detail h3{font-size:1.5rem;font-weight:600;display:flex;margin:0 auto 2rem;width:fit-content;align-items:center;column-gap:.5rem}.step-container .step .main-content .step-detail h3 button{width:1.25rem;height:1.25rem;margin:.25rem;background-color:#fff;border-radius:50%;padding:0;color:var(--btn-bg);border:1px solid var(--btn-bg);font-size:1rem;justify-content:center}.step-container .step .main-content .step-detail>p{font-size:1rem;line-height:1.44;padding:0 7rem}.step-container .step .main-content .step-detail .factors-container{display:flex;justify-content:center;flex-basis:356px;column-gap:2rem}.step-container .step .main-content .step-detail .factors-container>*{width:356px;padding:2rem 1.5rem;background-color:#f7f7f8;position:relative}.step-container .step .main-content .step-detail .factors-container>* h4{font-size:1.125rem;font-weight:600}.step-container .step .main-content .step-detail .factors-container>* ul{margin-top:1.5rem;margin-bottom:5rem}.step-container .step .main-content .step-detail .factors-container>* ul li{list-style:none;display:flex;align-items:center;column-gap:.5rem;margin-bottom:1.5rem;font-size:1rem;line-height:1.44}.step-container .step .main-content .step-detail .factors-container>* ul li:last-child{margin-bottom:0}.step-container .step .main-content .step-detail .factors-container>* ul li svg{min-width:1.5rem;min-height:1.5rem}.step-container .step .main-content .step-detail .factors-container>* button{position:absolute;bottom:1.5rem}.step-container .step .main-content .step-detail .risk-level-list{display:flex;flex-wrap:wrap;max-width:1200px;gap:1.5rem;justify-content:center;margin-bottom:3rem}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]{position:fixed;left:-999rem;z-index:-999}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label{color:#016fad;border-color:#016fad}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label span{color:#016fad}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label:before,.step-container .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label:after{display:block;content:"";position:absolute;width:1.25rem;height:1.25rem;border-radius:50%;background-color:#016fad;right:1rem;top:1rem}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label:after{width:.625rem;height:.3rem;border:1px solid #fff;border-top:none;border-right:none;transform:rotate(-45deg);top:1.35rem;background-color:transparent;right:1.25rem;border-radius:0}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item label{border:1px solid #ccc;padding:1.25rem 1.5rem;display:flex;flex-direction:column;font-size:1rem;line-height:1.44;min-width:335px;width:335px;cursor:pointer;position:relative}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item label:hover{background-color:#016fad;color:#fff!important;border-color:#016fad}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item label:hover *{color:#fff!important}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item label .title{font-size:1.25rem;line-height:1;font-weight:600;margin-bottom:.5rem}.step-container .step .main-content .step-detail .investment-suggestion{margin-top:3rem;display:flex;justify-content:center;column-gap:2rem;align-items:flex-start}.step-container .step .main-content .step-detail .investment-suggestion table.past-performance{border-spacing:0;min-width:335px;width:335px;background-color:transparent}.step-container .step .main-content .step-detail .investment-suggestion table.past-performance tr>*{padding:1rem;font-size:1rem;line-height:1;border:1px solid #ccc;border-top:none}.step-container .step .main-content .step-detail .investment-suggestion table.past-performance tr th{background-color:#f7f7f8;color:var(--primary-text);border-top:1px solid #ccc;text-align:left;font-weight:600}.step-container .step .main-content .step-detail .investment-suggestion table.past-performance tr td{position:relative}.step-container .step .main-content .step-detail .investment-suggestion table.past-performance tr td span{position:absolute;right:1rem}.step-container .step .main-content .step-detail .investment-suggestion>* button{position:static}.step-container .step .main-content .step-detail .investment-suggestion .fee-charge{min-width:40rem;width:40rem;justify-content:flex-start}.step-container .step .main-content .step-detail .investment-suggestion .fee-charge h4{font-size:1.125rem;font-weight:600;line-height:1;margin-bottom:1.5rem}.step-container .step .main-content .step-detail .investment-suggestion .fee-charge button{height:fit-content;padding:0;background-color:transparent;color:#016fad;text-decoration:underline;display:block;margin:1rem auto 0}.step-container .step .main-content .step-detail .investment-suggestion .fee-charge button.popup-trigger{display:inline-block;margin-top:0}.step-container .step .main-content .step-detail .investment-suggestion .fee-charge button.popup-trigger:active{border-radius:50%;overflow:hidden}.step-container .step .main-content .step-detail .investment-suggestion .fee-charge .fee-charges-container{width:100%;display:flex;gap:1rem}.step-container .step .main-content .step-detail .investment-suggestion .fee-charge .fee-charges-container .fees-charges-card{min-width:calc(50% - .75rem);width:calc(50% - .75rem);padding:1.5rem;background-color:#f7f7f8;position:relative;margin-bottom:1.5rem;text-align:center}.step-container .step .main-content .step-detail .investment-suggestion .fee-charge .fee-charges-container .fees-charges-card>div{display:flex;flex-direction:column-reverse;justify-content:center;align-items:center;row-gap:1.25rem}.step-container .step .main-content .step-detail .investment-suggestion .fee-charge .fee-charges-container .fees-charges-card>div .value{font-size:1.5rem;line-height:1;font-weight:600}.step-container .step .main-content .step-detail .investment-suggestion .fee-charge p{margin-top:1rem;font-size:1rem}.step-container .step .main-content .step-detail .bottom-button-container{display:none}.step-container.container-mode .step .hero-banner{max-width:100vw;overflow:hidden}.step-container.container-mode .step .main-content{margin:-2rem 1rem}.step-container.container-mode .step .main-content .desc-section{padding:1rem 0}.step-container.container-mode .step .main-content .desc-section h2{padding:0 1.5rem}.step-container.container-mode .step .main-content .step-detail .step-controller{display:flex;margin-bottom:2rem}.step-container.container-mode .step .main-content .step-detail .progress{text-align:left}.step-container.container-mode .step .main-content .step-detail h3{margin:0 0 2rem;width:100%;justify-content:space-between}.step-container.container-mode .step .main-content .step-detail p{padding:0}.step-container.container-mode .step .main-content .step-detail .factors-container{flex-direction:column;gap:1.5rem}.step-container.container-mode .step .main-content .step-detail .factors-container>div{width:100%}.step-container.container-mode .step .main-content .step-detail .risk-level-list{gap:0}.step-container.container-mode .step .main-content .step-detail .risk-level-list .risk-level-item{width:100%}.step-container.container-mode .step .main-content .step-detail .risk-level-list .risk-level-item label{border-top:none;border-left:none;border-right:none;padding-left:0;padding-right:4rem;width:100%;min-width:100%}.step-container.container-mode .step .main-content .step-detail .risk-level-list .risk-level-item label:before{content:"";display:block;border-top:2px solid #141414;border-right:2px solid #141414;width:.625rem;height:.625rem;transform:rotate(45deg);position:absolute;right:.25rem;top:3rem}.step-container.container-mode .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]{position:fixed;left:-999rem;z-index:-999}.step-container.container-mode .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label{color:#016fad;border-left:4px solid #016fad!important;padding-left:1rem!important}.step-container.container-mode .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label *{color:#016fad}.step-container.container-mode .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label:before,.step-container.container-mode .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label:after{display:none!important}.step-container.container-mode .step.st2 .main-content{margin-top:2rem}.step-container.container-mode .step.st2 .main-content.more{margin-top:3rem}.step-container.container-mode .step.st2 .main-content.more .investment-suggestion{flex-direction:column}.step-container.container-mode .step.st2 .main-content.more .investment-suggestion table{width:100%;min-width:100%;margin-bottom:3rem}.step-container.container-mode .step.st2 .main-content.more .fee-charge{min-width:100%;width:100%}.step-container.container-mode .step.st2 .main-content.more .fee-charge .fee-charges-container{width:100%;flex-direction:column;margin-bottom:1.25rem}.step-container.container-mode .step.st2 .main-content.more .fee-charge .fee-charges-container .fees-charges-card{width:100%;min-width:100%;margin-bottom:0}.step-container.container-mode .step.st2 .main-content.more .bottom-button-container{margin-top:3rem;margin-bottom:3rem;width:100%;display:flex;flex-direction:column;row-gap:1.5rem}.step-container.container-mode .step.st2 .main-content.more .bottom-button-container button{width:100%;justify-content:center}@media screen and (max-width: 30rem){.step-container .step .hero-banner{max-width:100vw;overflow:hidden}.step-container .step .main-content{margin:-2rem 1rem}.step-container .step .main-content .desc-section{padding:1rem 0}.step-container .step .main-content .desc-section h2{padding:0 1.5rem}.step-container .step .main-content .step-detail .step-controller{display:flex;margin-bottom:2rem}.step-container .step .main-content .step-detail .progress{text-align:left}.step-container .step .main-content .step-detail h3{margin:0 0 2rem;width:100%;justify-content:space-between}.step-container .step .main-content .step-detail p{padding:0}.step-container .step .main-content .step-detail .factors-container{flex-direction:column;gap:1.5rem}.step-container .step .main-content .step-detail .factors-container>div{width:100%}.step-container .step .main-content .step-detail .risk-level-list{gap:0}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item{width:100%}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item label{border-top:none;border-left:none;border-right:none;padding-left:0;padding-right:4rem;width:100%;min-width:100%}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item label:before{content:"";display:block;border-top:2px solid #141414;border-right:2px solid #141414;width:.625rem;height:.625rem;transform:rotate(45deg);position:absolute;right:.25rem;top:3rem}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]{position:fixed;left:-999rem;z-index:-999}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label{color:#016fad;border-left:4px solid #016fad!important;padding-left:1rem!important}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label *{color:#016fad}.step-container .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label:before,.step-container .step .main-content .step-detail .risk-level-list .risk-level-item input[type=radio]:checked+label:after{display:none!important}.step-container .step.st2 .main-content{margin-top:2rem}.step-container .step.st2 .main-content.more{margin-top:3rem}.step-container .step.st2 .main-content.more .investment-suggestion{flex-direction:column}.step-container .step.st2 .main-content.more .investment-suggestion table{width:100%;min-width:100%;margin-bottom:3rem}.step-container .step.st2 .main-content.more .fee-charge{min-width:100%;width:100%}.step-container .step.st2 .main-content.more .fee-charge .fee-charges-container{width:100%;flex-direction:column;margin-bottom:1.25rem}.step-container .step.st2 .main-content.more .fee-charge .fee-charges-container .fees-charges-card{width:100%;min-width:100%;margin-bottom:0}.step-container .step.st2 .main-content.more .bottom-button-container{margin-top:3rem;margin-bottom:3rem;width:100%;display:flex;flex-direction:column;row-gap:1.5rem}.step-container .step.st2 .main-content.more .bottom-button-container button{width:100%;justify-content:center}}.header{height:141px;border-bottom:1px solid #ccc;width:100vw;font-size:3rem;text-align:center;padding-top:3rem}@media screen and (max-width: 30rem){.header{height:4rem;font-size:2rem;padding-top:1rem}}.footer{width:100vw;min-height:10rem;height:10rem;background-color:#ebebeb;text-align:center;padding-top:3rem;font-size:3rem}.toast{display:none}.screen{position:fixed;left:0;top:0;width:100vw;height:100vh;background-color:#0009;z-index:1}.modal-container{position:fixed;z-index:2;background-color:#fff;min-width:375px;height:fit-content;border:1px solid #ccc;padding:3rem 1.5rem;box-shadow:0 0 1rem #a8a9ad;display:block!important}.modal-container .modal-header{font-size:1.5rem;font-weight:600;display:flex;position:relative;margin-bottom:1.5rem}.modal-container .modal-header button.close-btn{width:1.5rem!important;height:1.5rem!important;overflow:hidden;border-radius:50%;background-color:transparent;border:none;outline:none;display:flex!important;justify-content:center;align-items:center;cursor:pointer;margin:0!important;position:absolute!important;top:-2.25rem;right:-.75rem}.modal-container .modal-header button.close-btn:before,.modal-container .modal-header button.close-btn:after{width:0;height:1rem;border-left:2px solid #141414;position:absolute;display:block;content:"";transform:rotate(-45deg);transform-origin:center}.modal-container .modal-header button.close-btn:after{transform:rotate(45deg)}.modal-container .modal-content-container{width:100%}.modal-container .modal-content-container>*{width:100%!important;min-width:100%!important}.modal-container .modal-content-container>* table{width:100%}@media screen and (max-width: 30rem){.modal-container{max-width:30rem;width:100vw!important;bottom:-110%;left:0;transition:bottom .3s ease-in-out}.modal-container.slide-in{bottom:0}}'
        )
      ),
        document.head.appendChild(e);
    }
  } catch (e) {}
})(),
  (function () {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
      for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        t(e);
      new MutationObserver((e) => {
        for (const n of e)
          if ("childList" === n.type)
            for (const e of n.addedNodes)
              "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
      }).observe(document, { childList: !0, subtree: !0 });
    }
    function t(e) {
      if (e.ep) return;
      e.ep = !0;
      const t = (function (e) {
        const t = {};
        return (
          e.integrity && (t.integrity = e.integrity),
          e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
          "use-credentials" === e.crossOrigin
            ? (t.credentials = "include")
            : "anonymous" === e.crossOrigin
            ? (t.credentials = "omit")
            : (t.credentials = "same-origin"),
          t
        );
      })(e);
      fetch(e.href, t);
    }
  })();
var Ca,
  Ea,
  _a,
  ja,
  ku = { exports: {} },
  yr = {},
  Cu = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function P1() {
  if (Ca) return I;
  Ca = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    l = Symbol.for("react.provider"),
    i = Symbol.for("react.context"),
    o = Symbol.for("react.forward_ref"),
    s = Symbol.for("react.suspense"),
    u = Symbol.for("react.memo"),
    c = Symbol.for("react.lazy"),
    d = Symbol.iterator;
  var f = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    p = Object.assign,
    m = {};
  function h(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = m),
      (this.updater = n || f);
  }
  function g() {}
  function v(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = m),
      (this.updater = n || f);
  }
  (h.prototype.isReactComponent = {}),
    (h.prototype.setState = function (e, t) {
      if ("object" != typeof e && "function" != typeof e && null != e)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (h.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }),
    (g.prototype = h.prototype);
  var b = (v.prototype = new g());
  (b.constructor = v), p(b, h.prototype), (b.isPureReactComponent = !0);
  var y = Array.isArray,
    w = Object.prototype.hasOwnProperty,
    k = { current: null },
    x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(t, n, r) {
    var a,
      l = {},
      i = null,
      o = null;
    if (null != n)
      for (a in (void 0 !== n.ref && (o = n.ref),
      void 0 !== n.key && (i = "" + n.key),
      n))
        w.call(n, a) && !x.hasOwnProperty(a) && (l[a] = n[a]);
    var s = arguments.length - 2;
    if (1 === s) l.children = r;
    else if (1 < s) {
      for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
      l.children = u;
    }
    if (t && t.defaultProps)
      for (a in (s = t.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
    return {
      $$typeof: e,
      type: t,
      key: i,
      ref: o,
      props: l,
      _owner: k.current,
    };
  }
  function S(t) {
    return "object" == typeof t && null !== t && t.$$typeof === e;
  }
  var C = /\/+/g;
  function _(e, t) {
    return "object" == typeof e && null !== e && null != e.key
      ? (function (e) {
          var t = { "=": "=0", ":": "=2" };
          return (
            "$" +
            e.replace(/[=:]/g, function (e) {
              return t[e];
            })
          );
        })("" + e.key)
      : t.toString(36);
  }
  function E(n, r, a, l, i) {
    var o = typeof n;
    ("undefined" === o || "boolean" === o) && (n = null);
    var s = !1;
    if (null === n) s = !0;
    else
      switch (o) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case e:
            case t:
              s = !0;
          }
      }
    if (s)
      return (
        (i = i((s = n))),
        (n = "" === l ? "." + _(s, 0) : l),
        y(i)
          ? ((a = ""),
            null != n && (a = n.replace(C, "$&/") + "/"),
            E(i, r, a, "", function (e) {
              return e;
            }))
          : null != i &&
            (S(i) &&
              (i = (function (t, n) {
                return {
                  $$typeof: e,
                  type: t.type,
                  key: n,
                  ref: t.ref,
                  props: t.props,
                  _owner: t._owner,
                };
              })(
                i,
                a +
                  (!i.key || (s && s.key === i.key)
                    ? ""
                    : ("" + i.key).replace(C, "$&/") + "/") +
                  n
              )),
            r.push(i)),
        1
      );
    if (((s = 0), (l = "" === l ? "." : l + ":"), y(n)))
      for (var u = 0; u < n.length; u++) {
        var c = l + _((o = n[u]), u);
        s += E(o, r, a, c, i);
      }
    else if (
      ((c = (function (e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
          ? e
          : null;
      })(n)),
      "function" == typeof c)
    )
      for (n = c.call(n), u = 0; !(o = n.next()).done; )
        s += E((o = o.value), r, a, (c = l + _(o, u++)), i);
    else if ("object" === o)
      throw (
        ((r = String(n)),
        Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === r
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : r) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return s;
  }
  function z(e, t, n) {
    if (null == e) return e;
    var r = [],
      a = 0;
    return (
      E(e, r, "", "", function (e) {
        return t.call(n, e, a++);
      }),
      r
    );
  }
  function j(e) {
    if (-1 === e._status) {
      var t = e._result;
      (t = t()).then(
        function (t) {
          (0 === e._status || -1 === e._status) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (0 === e._status || -1 === e._status) &&
            ((e._status = 2), (e._result = t));
        }
      ),
        -1 === e._status && ((e._status = 0), (e._result = t));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
  }
  var N = { current: null },
    P = { transition: null },
    M = {
      ReactCurrentDispatcher: N,
      ReactCurrentBatchConfig: P,
      ReactCurrentOwner: k,
    };
  function T() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (I.Children = {
      map: z,
      forEach: function (e, t, n) {
        z(
          e,
          function () {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function (e) {
        var t = 0;
        return (
          z(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          z(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!S(e))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return e;
      },
    }),
    (I.Component = h),
    (I.Fragment = n),
    (I.Profiler = a),
    (I.PureComponent = v),
    (I.StrictMode = r),
    (I.Suspense = s),
    (I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
    (I.act = T),
    (I.cloneElement = function (t, n, r) {
      if (null == t)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            t +
            "."
        );
      var a = p({}, t.props),
        l = t.key,
        i = t.ref,
        o = t._owner;
      if (null != n) {
        if (
          (void 0 !== n.ref && ((i = n.ref), (o = k.current)),
          void 0 !== n.key && (l = "" + n.key),
          t.type && t.type.defaultProps)
        )
          var s = t.type.defaultProps;
        for (u in n)
          w.call(n, u) &&
            !x.hasOwnProperty(u) &&
            (a[u] = void 0 === n[u] && void 0 !== s ? s[u] : n[u]);
      }
      var u = arguments.length - 2;
      if (1 === u) a.children = r;
      else if (1 < u) {
        s = Array(u);
        for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
        a.children = s;
      }
      return { $$typeof: e, type: t.type, key: l, ref: i, props: a, _owner: o };
    }),
    (I.createContext = function (e) {
      return (
        ((e = {
          $$typeof: i,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }).Provider = { $$typeof: l, _context: e }),
        (e.Consumer = e)
      );
    }),
    (I.createElement = L),
    (I.createFactory = function (e) {
      var t = L.bind(null, e);
      return (t.type = e), t;
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (e) {
      return { $$typeof: o, render: e };
    }),
    (I.isValidElement = S),
    (I.lazy = function (e) {
      return { $$typeof: c, _payload: { _status: -1, _result: e }, _init: j };
    }),
    (I.memo = function (e, t) {
      return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
    }),
    (I.startTransition = function (e) {
      var t = P.transition;
      P.transition = {};
      try {
        e();
      } finally {
        P.transition = t;
      }
    }),
    (I.unstable_act = T),
    (I.useCallback = function (e, t) {
      return N.current.useCallback(e, t);
    }),
    (I.useContext = function (e) {
      return N.current.useContext(e);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (e) {
      return N.current.useDeferredValue(e);
    }),
    (I.useEffect = function (e, t) {
      return N.current.useEffect(e, t);
    }),
    (I.useId = function () {
      return N.current.useId();
    }),
    (I.useImperativeHandle = function (e, t, n) {
      return N.current.useImperativeHandle(e, t, n);
    }),
    (I.useInsertionEffect = function (e, t) {
      return N.current.useInsertionEffect(e, t);
    }),
    (I.useLayoutEffect = function (e, t) {
      return N.current.useLayoutEffect(e, t);
    }),
    (I.useMemo = function (e, t) {
      return N.current.useMemo(e, t);
    }),
    (I.useReducer = function (e, t, n) {
      return N.current.useReducer(e, t, n);
    }),
    (I.useRef = function (e) {
      return N.current.useRef(e);
    }),
    (I.useState = function (e) {
      return N.current.useState(e);
    }),
    (I.useSyncExternalStore = function (e, t, n) {
      return N.current.useSyncExternalStore(e, t, n);
    }),
    (I.useTransition = function () {
      return N.current.useTransition();
    }),
    (I.version = "18.3.1"),
    I
  );
}
function Nu() {
  return Ea || ((Ea = 1), (Cu.exports = P1())), Cu.exports;
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
}
function M1() {
  if (_a) return yr;
  _a = 1;
  var e = Nu(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(e, n, i) {
    var o,
      s = {},
      u = null,
      c = null;
    for (o in (void 0 !== i && (u = "" + i),
    void 0 !== n.key && (u = "" + n.key),
    void 0 !== n.ref && (c = n.ref),
    n))
      r.call(n, o) && !l.hasOwnProperty(o) && (s[o] = n[o]);
    if (e && e.defaultProps)
      for (o in (n = e.defaultProps)) void 0 === s[o] && (s[o] = n[o]);
    return {
      $$typeof: t,
      type: e,
      key: u,
      ref: c,
      props: s,
      _owner: a.current,
    };
  }
  return (yr.Fragment = n), (yr.jsx = i), (yr.jsxs = i), yr;
}
function z1() {
  return ja || ((ja = 1), (ku.exports = M1())), ku.exports;
}
var Na,
  Pa,
  Ma,
  za,
  Ta,
  a = z1(),
  Ae = Nu(),
  Pl = {},
  Eu = { exports: {} },
  Ue = {},
  _u = { exports: {} },
  ju = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function T1() {
  return (
    Na ||
      ((Na = 1),
      (function (e) {
        function t(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              l = e[r];
            if (!(0 < a(l, t))) break e;
            (e[r] = t), (e[n] = l), (n = r);
          }
        }
        function n(e) {
          return 0 === e.length ? null : e[0];
        }
        function r(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, l = e.length, i = l >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                u = o + 1,
                c = e[u];
              if (0 > a(s, n))
                u < l && 0 > a(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[o] = n), (r = o));
              else {
                if (!(u < l && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var l = performance;
          e.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            o = i.now();
          e.unstable_now = function () {
            return i.now() - o;
          };
        }
        var s = [],
          u = [],
          c = 1,
          d = null,
          f = 3,
          p = !1,
          m = !1,
          h = !1,
          g = "function" == typeof setTimeout ? setTimeout : null,
          v = "function" == typeof clearTimeout ? clearTimeout : null,
          b = typeof setImmediate < "u" ? setImmediate : null;
        function y(e) {
          for (var a = n(u); null !== a; ) {
            if (null === a.callback) r(u);
            else {
              if (!(a.startTime <= e)) break;
              r(u), (a.sortIndex = a.expirationTime), t(s, a);
            }
            a = n(u);
          }
        }
        function w(e) {
          if (((h = !1), y(e), !m))
            if (null !== n(s)) (m = !0), M(k);
            else {
              var t = n(u);
              null !== t && T(w, t.startTime - e);
            }
        }
        function k(t, a) {
          (m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0);
          var l = f;
          try {
            for (
              y(a), d = n(s);
              null !== d && (!(d.expirationTime > a) || (t && !z()));

            ) {
              var i = d.callback;
              if ("function" == typeof i) {
                (d.callback = null), (f = d.priorityLevel);
                var o = i(d.expirationTime <= a);
                (a = e.unstable_now()),
                  "function" == typeof o
                    ? (d.callback = o)
                    : d === n(s) && r(s),
                  y(a);
              } else r(s);
              d = n(s);
            }
            if (null !== d) var c = !0;
            else {
              var g = n(u);
              null !== g && T(w, g.startTime - a), (c = !1);
            }
            return c;
          } finally {
            (d = null), (f = l), (p = !1);
          }
        }
        typeof navigator < "u" &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          L = !1,
          S = null,
          C = -1,
          _ = 5,
          E = -1;
        function z() {
          return !(e.unstable_now() - E < _);
        }
        function j() {
          if (null !== S) {
            var t = e.unstable_now();
            E = t;
            var n = !0;
            try {
              n = S(!0, t);
            } finally {
              n ? x() : ((L = !1), (S = null));
            }
          } else L = !1;
        }
        if ("function" == typeof b)
          x = function () {
            b(j);
          };
        else if (typeof MessageChannel < "u") {
          var N = new MessageChannel(),
            P = N.port2;
          (N.port1.onmessage = j),
            (x = function () {
              P.postMessage(null);
            });
        } else
          x = function () {
            g(j, 0);
          };
        function M(e) {
          (S = e), L || ((L = !0), x());
        }
        function T(t, n) {
          C = g(function () {
            t(e.unstable_now());
          }, n);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            m || p || ((m = !0), M(k));
          }),
          (e.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e || (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return n(s);
          }),
          (e.unstable_next = function (e) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = f;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (e.unstable_scheduleCallback = function (r, a, l) {
            var i = e.unstable_now();
            switch (
              ("object" == typeof l && null !== l
                ? (l = "number" == typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              r)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (r = {
                id: c++,
                callback: a,
                priorityLevel: r,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((r.sortIndex = l),
                  t(u, r),
                  null === n(s) &&
                    r === n(u) &&
                    (h ? (v(C), (C = -1)) : (h = !0), T(w, l - i)))
                : ((r.sortIndex = o), t(s, r), m || p || ((m = !0), M(k))),
              r
            );
          }),
          (e.unstable_shouldYield = z),
          (e.unstable_wrapCallback = function (e) {
            var t = f;
            return function () {
              var n = f;
              f = t;
              try {
                return e.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          });
      })(ju)),
    ju
  );
}
function R1() {
  return Pa || ((Pa = 1), (_u.exports = T1())), _u.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
}
function O1() {
  if (Ma) return Ue;
  Ma = 1;
  var e = Nu(),
    t = R1();
  function n(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var r = new Set(),
    a = {};
  function l(e, t) {
    i(e, t), i(e + "Capture", t);
  }
  function i(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) r.add(t[e]);
  }
  var o = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    s = Object.prototype.hasOwnProperty,
    u =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    c = {},
    d = {};
  function f(e, t, n, r, a, l, i) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
      (this.attributeName = r),
      (this.attributeNamespace = a),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = l),
      (this.removeEmptyString = i);
  }
  var p = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      p[e] = new f(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      p[t] = new f(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      p[e] = new f(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      p[e] = new f(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        p[e] = new f(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      p[e] = new f(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      p[e] = new f(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      p[e] = new f(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      p[e] = new f(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var m = /[\-:]([a-z])/g;
  function h(e) {
    return e[1].toUpperCase();
  }
  function g(e, t, n, r) {
    var a = p.hasOwnProperty(t) ? p[t] : null;
    (null !== a
      ? 0 !== a.type
      : r ||
        !(2 < t.length) ||
        ("o" !== t[0] && "O" !== t[0]) ||
        ("n" !== t[1] && "N" !== t[1])) &&
      ((function (e, t, n, r) {
        if (
          null === t ||
          typeof t > "u" ||
          (function (e, t, n, r) {
            if (null !== n && 0 === n.type) return !1;
            switch (typeof t) {
              case "function":
              case "symbol":
                return !0;
              case "boolean":
                return (
                  !r &&
                  (null !== n
                    ? !n.acceptsBooleans
                    : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                      "aria-" !== e)
                );
              default:
                return !1;
            }
          })(e, t, n, r)
        )
          return !0;
        if (r) return !1;
        if (null !== n)
          switch (n.type) {
            case 3:
              return !t;
            case 4:
              return !1 === t;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t;
          }
        return !1;
      })(t, n, a, r) && (n = null),
      r || null === a
        ? (function (e) {
            return (
              !!s.call(d, e) ||
              (!s.call(c, e) && (u.test(e) ? (d[e] = !0) : ((c[e] = !0), !1)))
            );
          })(t) &&
          (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : a.mustUseProperty
        ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
        : ((t = a.attributeName),
          (r = a.attributeNamespace),
          null === n
            ? e.removeAttribute(t)
            : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(m, h);
      p[t] = new f(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(m, h);
        p[t] = new f(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(m, h);
      p[t] = new f(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      p[e] = new f(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (p.xlinkHref = new f(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      p[e] = new f(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    b = Symbol.for("react.element"),
    y = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    k = Symbol.for("react.strict_mode"),
    x = Symbol.for("react.profiler"),
    L = Symbol.for("react.provider"),
    S = Symbol.for("react.context"),
    C = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    E = Symbol.for("react.suspense_list"),
    z = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    N = Symbol.for("react.offscreen"),
    P = Symbol.iterator;
  function M(e) {
    return null === e || "object" != typeof e
      ? null
      : "function" == typeof (e = (P && e[P]) || e["@@iterator"])
      ? e
      : null;
  }
  var T,
    I = Object.assign;
  function R(e) {
    if (void 0 === T)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        T = (t && t[1]) || "";
      }
    return "\n" + T + e;
  }
  var F = !1;
  function O(e, t) {
    if (!e || F) return "";
    F = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          "object" == typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (e) {
            var r = e;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (e) {
            r = e;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (e) {
          r = e;
        }
        e();
      }
    } catch (t) {
      if (t && r && "string" == typeof t.stack) {
        for (
          var a = t.stack.split("\n"),
            l = r.stack.split("\n"),
            i = a.length - 1,
            o = l.length - 1;
          1 <= i && 0 <= o && a[i] !== l[o];

        )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (a[i] !== l[o]) {
            if (1 !== i || 1 !== o)
              do {
                if ((i--, 0 > --o || a[i] !== l[o])) {
                  var s = "\n" + a[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              } while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      (F = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? R(e) : "";
  }
  function D(e) {
    switch (e.tag) {
      case 5:
        return R(e.type);
      case 16:
        return R("Lazy");
      case 13:
        return R("Suspense");
      case 19:
        return R("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = O(e.type, !1));
      case 11:
        return (e = O(e.type.render, !1));
      case 1:
        return (e = O(e.type, !0));
      default:
        return "";
    }
  }
  function U(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
      case w:
        return "Fragment";
      case y:
        return "Portal";
      case x:
        return "Profiler";
      case k:
        return "StrictMode";
      case _:
        return "Suspense";
      case E:
        return "SuspenseList";
    }
    if ("object" == typeof e)
      switch (e.$$typeof) {
        case S:
          return (e.displayName || "Context") + ".Consumer";
        case L:
          return (e._context.displayName || "Context") + ".Provider";
        case C:
          var t = e.render;
          return (
            (e = e.displayName) ||
              (e =
                "" !== (e = t.displayName || t.name || "")
                  ? "ForwardRef(" + e + ")"
                  : "ForwardRef"),
            e
          );
        case z:
          return null !== (t = e.displayName || null) ? t : U(e.type) || "Memo";
        case j:
          (t = e._payload), (e = e._init);
          try {
            return U(e(t));
          } catch {}
      }
    return null;
  }
  function A(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = (e = t.render).displayName || e.name || ""),
          t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return U(t);
      case 8:
        return t === k ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" == typeof t) return t.displayName || t.name || null;
        if ("string" == typeof t) return t;
    }
    return null;
  }
  function B(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function V(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      "input" === e.toLowerCase() &&
      ("checkbox" === t || "radio" === t)
    );
  }
  function $(e) {
    e._valueTracker ||
      (e._valueTracker = (function (e) {
        var t = V(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = "" + e[t];
        if (
          !e.hasOwnProperty(t) &&
          typeof n < "u" &&
          "function" == typeof n.get &&
          "function" == typeof n.set
        ) {
          var a = n.get,
            l = n.set;
          return (
            Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                return a.call(this);
              },
              set: function (e) {
                (r = "" + e), l.call(this, e);
              },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
              getValue: function () {
                return r;
              },
              setValue: function (e) {
                r = "" + e;
              },
              stopTracking: function () {
                (e._valueTracker = null), delete e[t];
              },
            }
          );
        }
      })(e));
  }
  function W(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r) !== n && (t.setValue(e), !0)
    );
  }
  function H(e) {
    if (typeof (e = e || (typeof document < "u" ? document : void 0)) > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Q(e, t) {
    var n = t.checked;
    return I({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Z(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked;
    (n = B(null != t.value ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          "checkbox" === t.type || "radio" === t.type
            ? null != t.checked
            : null != t.value,
      });
  }
  function q(e, t) {
    null != (t = t.checked) && g(e, "checked", t, !1);
  }
  function K(e, t) {
    q(e, t);
    var n = B(t.value),
      r = t.type;
    if (null != n)
      "number" === r
        ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r)
      return void e.removeAttribute("value");
    t.hasOwnProperty("value")
      ? X(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && X(e, t.type, B(t.defaultValue)),
      null == t.checked &&
        null != t.defaultChecked &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Y(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          ("submit" !== r && "reset" !== r) ||
          (void 0 !== t.value && null !== t.value)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    "" !== (n = e.name) && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      "" !== n && (e.name = n);
  }
  function X(e, t, n) {
    ("number" !== t || H(e.ownerDocument) !== e) &&
      (null == n
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var G = Array.isArray;
  function J(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        (a = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + B(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n)
          return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
        null !== t || e[a].disabled || (t = e[a]);
      }
      null !== t && (t.selected = !0);
    }
  }
  function ee(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(n(91));
    return I({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function te(e, t) {
    var r = t.value;
    if (null == r) {
      if (((r = t.children), (t = t.defaultValue), null != r)) {
        if (null != t) throw Error(n(92));
        if (G(r)) {
          if (1 < r.length) throw Error(n(93));
          r = r[0];
        }
        t = r;
      }
      null == t && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: B(r) };
  }
  function ne(e, t) {
    var n = B(t.value),
      r = B(t.defaultValue);
    null != n &&
      ((n = "" + n) !== e.value && (e.value = n),
      null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
      null != r && (e.defaultValue = "" + r);
  }
  function re(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      "" !== t &&
      null !== t &&
      (e.value = t);
  }
  function ae(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function le(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e
      ? ae(t)
      : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ie,
    oe,
    se =
      ((oe = function (e, t) {
        if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
          e.innerHTML = t;
        else {
          for (
            (ie = ie || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>",
              t = ie.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      }),
      typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (e, t, n, r) {
            MSApp.execUnsafeLocalFunction(function () {
              return oe(e, t);
            });
          }
        : oe);
  function ue(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && 3 === n.nodeType)
        return void (n.nodeValue = t);
    }
    e.textContent = t;
  }
  var ce = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    de = ["Webkit", "ms", "Moz", "O"];
  function fe(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t
      ? ""
      : n || "number" != typeof t || 0 === t || (ce.hasOwnProperty(e) && ce[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function pe(e, t) {
    for (var n in ((e = e.style), t))
      if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf("--"),
          a = fe(n, t[n], r);
        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
      }
  }
  Object.keys(ce).forEach(function (e) {
    de.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ce[t] = ce[e]);
    });
  });
  var me = I(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function he(e, t) {
    if (t) {
      if (me[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
        throw Error(n(137, e));
      if (null != t.dangerouslySetInnerHTML) {
        if (null != t.children) throw Error(n(60));
        if (
          "object" != typeof t.dangerouslySetInnerHTML ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(n(61));
      }
      if (null != t.style && "object" != typeof t.style) throw Error(n(62));
    }
  }
  function ge(e, t) {
    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ve = null;
  function be(e) {
    return (
      (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement),
      3 === e.nodeType ? e.parentNode : e
    );
  }
  var ye = null,
    we = null,
    ke = null;
  function xe(e) {
    if ((e = ga(e))) {
      if ("function" != typeof ye) throw Error(n(280));
      var t = e.stateNode;
      t && ((t = ba(t)), ye(e.stateNode, e.type, t));
    }
  }
  function Le(e) {
    we ? (ke ? ke.push(e) : (ke = [e])) : (we = e);
  }
  function Se() {
    if (we) {
      var e = we,
        t = ke;
      if (((ke = we = null), xe(e), t)) for (e = 0; e < t.length; e++) xe(t[e]);
    }
  }
  function Ce(e, t) {
    return e(t);
  }
  function _e() {}
  var Ee = !1;
  function ze(e, t, n) {
    if (Ee) return e(t, n);
    Ee = !0;
    try {
      return Ce(e, t, n);
    } finally {
      (Ee = !1), (null !== we || null !== ke) && (_e(), Se());
    }
  }
  function je(e, t) {
    var r = e.stateNode;
    if (null === r) return null;
    var a = ba(r);
    if (null === a) return null;
    r = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          (a = !(
            "button" === (e = e.type) ||
            "input" === e ||
            "select" === e ||
            "textarea" === e
          )),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && "function" != typeof r) throw Error(n(231, t, typeof r));
    return r;
  }
  var Ne = !1;
  if (o)
    try {
      var Pe = {};
      Object.defineProperty(Pe, "passive", {
        get: function () {
          Ne = !0;
        },
      }),
        window.addEventListener("test", Pe, Pe),
        window.removeEventListener("test", Pe, Pe);
    } catch {
      Ne = !1;
    }
  function Me(e, t, n, r, a, l, i, o, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (e) {
      this.onError(e);
    }
  }
  var Te = !1,
    Ie = null,
    Re = !1,
    Fe = null,
    Oe = {
      onError: function (e) {
        (Te = !0), (Ie = e);
      },
    };
  function De(e, t, n, r, a, l, i, o, s) {
    (Te = !1), (Ie = null), Me.apply(Oe, arguments);
  }
  function Ae(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do {
        4098 & (t = e).flags && (n = t.return), (e = t.return);
      } while (e);
    }
    return 3 === t.tag ? n : null;
  }
  function Be(e) {
    if (13 === e.tag) {
      var t = e.memoizedState;
      if (
        (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
        null !== t)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ve(e) {
    if (Ae(e) !== e) throw Error(n(188));
  }
  function $e(e) {
    return null !==
      (e = (function (e) {
        var t = e.alternate;
        if (!t) {
          if (null === (t = Ae(e))) throw Error(n(188));
          return t !== e ? null : e;
        }
        for (var r = e, a = t; ; ) {
          var l = r.return;
          if (null === l) break;
          var i = l.alternate;
          if (null === i) {
            if (null !== (a = l.return)) {
              r = a;
              continue;
            }
            break;
          }
          if (l.child === i.child) {
            for (i = l.child; i; ) {
              if (i === r) return Ve(l), e;
              if (i === a) return Ve(l), t;
              i = i.sibling;
            }
            throw Error(n(188));
          }
          if (r.return !== a.return) (r = l), (a = i);
          else {
            for (var o = !1, s = l.child; s; ) {
              if (s === r) {
                (o = !0), (r = l), (a = i);
                break;
              }
              if (s === a) {
                (o = !0), (a = l), (r = i);
                break;
              }
              s = s.sibling;
            }
            if (!o) {
              for (s = i.child; s; ) {
                if (s === r) {
                  (o = !0), (r = i), (a = l);
                  break;
                }
                if (s === a) {
                  (o = !0), (a = i), (r = l);
                  break;
                }
                s = s.sibling;
              }
              if (!o) throw Error(n(189));
            }
          }
          if (r.alternate !== a) throw Error(n(190));
        }
        if (3 !== r.tag) throw Error(n(188));
        return r.stateNode.current === r ? e : t;
      })(e))
      ? We(e)
      : null;
  }
  function We(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
      var t = We(e);
      if (null !== t) return t;
      e = e.sibling;
    }
    return null;
  }
  var He = t.unstable_scheduleCallback,
    Qe = t.unstable_cancelCallback,
    Ze = t.unstable_shouldYield,
    qe = t.unstable_requestPaint,
    Ke = t.unstable_now,
    Ye = t.unstable_getCurrentPriorityLevel,
    Xe = t.unstable_ImmediatePriority,
    Ge = t.unstable_UserBlockingPriority,
    Je = t.unstable_NormalPriority,
    et = t.unstable_LowPriority,
    tt = t.unstable_IdlePriority,
    nt = null,
    rt = null;
  var at = Math.clz32
      ? Math.clz32
      : function (e) {
          return 0 == (e >>>= 0) ? 32 : (31 - ((lt(e) / it) | 0)) | 0;
        },
    lt = Math.log,
    it = Math.LN2;
  var ot = 64,
    st = 4194304;
  function ut(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return 4194240 & e;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return 130023424 & e;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ct(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
      a = e.suspendedLanes,
      l = e.pingedLanes,
      i = 268435455 & n;
    if (0 !== i) {
      var o = i & ~a;
      0 !== o ? (r = ut(o)) : 0 !== (l &= i) && (r = ut(l));
    } else 0 !== (i = n & ~a) ? (r = ut(i)) : 0 !== l && (r = ut(l));
    if (0 === r) return 0;
    if (
      0 !== t &&
      t !== r &&
      !(t & a) &&
      ((a = r & -r) >= (l = t & -t) || (16 === a && 0 != (4194240 & l)))
    )
      return t;
    if ((4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
      for (e = e.entanglements, t &= r; 0 < t; )
        (a = 1 << (n = 31 - at(t))), (r |= e[n]), (t &= ~a);
    return r;
  }
  function dt(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ft(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes)
      ? e
      : 1073741824 & e
      ? 1073741824
      : 0;
  }
  function pt() {
    var e = ot;
    return !(4194240 & (ot <<= 1)) && (ot = 64), e;
  }
  function mt(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ht(e, t, n) {
    (e.pendingLanes |= t),
      536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      ((e = e.eventTimes)[(t = 31 - at(t))] = n);
  }
  function gt(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - at(n),
        a = 1 << r;
      (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
    }
  }
  var vt = 0;
  function bt(e) {
    return 1 < (e &= -e) ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
  }
  var yt,
    wt,
    kt,
    xt,
    Lt,
    St = !1,
    Ct = [],
    _t = null,
    Et = null,
    zt = null,
    jt = new Map(),
    Nt = new Map(),
    Pt = [],
    Mt =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Tt(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        _t = null;
        break;
      case "dragenter":
      case "dragleave":
        Et = null;
        break;
      case "mouseover":
      case "mouseout":
        zt = null;
        break;
      case "pointerover":
      case "pointerout":
        jt.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nt.delete(t.pointerId);
    }
  }
  function It(e, t, n, r, a, l) {
    return null === e || e.nativeEvent !== l
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: l,
          targetContainers: [a],
        }),
        null !== t && null !== (t = ga(t)) && wt(t),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        null !== a && -1 === t.indexOf(a) && t.push(a),
        e);
  }
  function Rt(e) {
    var t = ha(e.target);
    if (null !== t) {
      var n = Ae(t);
      if (null !== n)
        if (13 === (t = n.tag)) {
          if (null !== (t = Be(n)))
            return (
              (e.blockedOn = t),
              void Lt(e.priority, function () {
                kt(n);
              })
            );
        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
          return void (e.blockedOn =
            3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
  }
  function Ft(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== n)
        return null !== (t = ga(n)) && wt(t), (e.blockedOn = n), !1;
      var r = new (n = e.nativeEvent).constructor(n.type, n);
      (ve = r), n.target.dispatchEvent(r), (ve = null), t.shift();
    }
    return !0;
  }
  function Ot(e, t, n) {
    Ft(e) && n.delete(t);
  }
  function Dt() {
    (St = !1),
      null !== _t && Ft(_t) && (_t = null),
      null !== Et && Ft(Et) && (Et = null),
      null !== zt && Ft(zt) && (zt = null),
      jt.forEach(Ot),
      Nt.forEach(Ot);
  }
  function Ut(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      St ||
        ((St = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, Dt)));
  }
  function At(e) {
    function t(t) {
      return Ut(t, e);
    }
    if (0 < Ct.length) {
      Ut(Ct[0], e);
      for (var n = 1; n < Ct.length; n++) {
        var r = Ct[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      null !== _t && Ut(_t, e),
        null !== Et && Ut(Et, e),
        null !== zt && Ut(zt, e),
        jt.forEach(t),
        Nt.forEach(t),
        n = 0;
      n < Pt.length;
      n++
    )
      (r = Pt[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Pt.length && null === (n = Pt[0]).blockedOn; )
      Rt(n), null === n.blockedOn && Pt.shift();
  }
  var Bt = v.ReactCurrentBatchConfig,
    Vt = !0;
  function $t(e, t, n, r) {
    var a = vt,
      l = Bt.transition;
    Bt.transition = null;
    try {
      (vt = 1), Ht(e, t, n, r);
    } finally {
      (vt = a), (Bt.transition = l);
    }
  }
  function Wt(e, t, n, r) {
    var a = vt,
      l = Bt.transition;
    Bt.transition = null;
    try {
      (vt = 4), Ht(e, t, n, r);
    } finally {
      (vt = a), (Bt.transition = l);
    }
  }
  function Ht(e, t, n, r) {
    if (Vt) {
      var a = Zt(e, t, n, r);
      if (null === a) Br(e, t, r, Qt, n), Tt(e, r);
      else if (
        (function (e, t, n, r, a) {
          switch (t) {
            case "focusin":
              return (_t = It(_t, e, t, n, r, a)), !0;
            case "dragenter":
              return (Et = It(Et, e, t, n, r, a)), !0;
            case "mouseover":
              return (zt = It(zt, e, t, n, r, a)), !0;
            case "pointerover":
              var l = a.pointerId;
              return jt.set(l, It(jt.get(l) || null, e, t, n, r, a)), !0;
            case "gotpointercapture":
              return (
                (l = a.pointerId),
                Nt.set(l, It(Nt.get(l) || null, e, t, n, r, a)),
                !0
              );
          }
          return !1;
        })(a, e, t, n, r)
      )
        r.stopPropagation();
      else if ((Tt(e, r), 4 & t && -1 < Mt.indexOf(e))) {
        for (; null !== a; ) {
          var l = ga(a);
          if (
            (null !== l && yt(l),
            null === (l = Zt(e, t, n, r)) && Br(e, t, r, Qt, n),
            l === a)
          )
            break;
          a = l;
        }
        null !== a && r.stopPropagation();
      } else Br(e, t, r, null, n);
    }
  }
  var Qt = null;
  function Zt(e, t, n, r) {
    if (((Qt = null), null !== (e = ha((e = be(r))))))
      if (null === (t = Ae(e))) e = null;
      else if (13 === (n = t.tag)) {
        if (null !== (e = Be(t))) return e;
        e = null;
      } else if (3 === n) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return 3 === t.tag ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Qt = e), null;
  }
  function qt(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ye()) {
          case Xe:
            return 1;
          case Ge:
            return 4;
          case Je:
          case et:
            return 16;
          case tt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Kt = null,
    Yt = null,
    Xt = null;
  function Gt() {
    if (Xt) return Xt;
    var e,
      t,
      n = Yt,
      r = n.length,
      a = "value" in Kt ? Kt.value : Kt.textContent,
      l = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var i = r - e;
    for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
    return (Xt = a.slice(e, 1 < t ? 1 - t : void 0));
  }
  function Jt(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? 0 === (e = e.charCode) && 13 === t && (e = 13)
        : (e = t),
      10 === e && (e = 13),
      32 <= e || 13 === e ? e : 0
    );
  }
  function en() {
    return !0;
  }
  function tn() {
    return !1;
  }
  function nn(e) {
    function t(t, n, r, a, l) {
      for (var i in ((this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = l),
      (this.currentTarget = null),
      e))
        e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
      return (
        (this.isDefaultPrevented = (
          null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
        )
          ? en
          : tn),
        (this.isPropagationStopped = tn),
        this
      );
    }
    return (
      I(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = en));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = en));
        },
        persist: function () {},
        isPersistent: en,
      }),
      t
    );
  }
  var rn,
    an,
    ln,
    on = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    sn = nn(on),
    un = I({}, on, { view: 0, detail: 0 }),
    cn = nn(un),
    dn = I({}, un, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ln,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return void 0 === e.relatedTarget
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ln &&
              (ln && "mousemove" === e.type
                ? ((rn = e.screenX - ln.screenX), (an = e.screenY - ln.screenY))
                : (an = rn = 0),
              (ln = e)),
            rn);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : an;
      },
    }),
    fn = nn(dn),
    pn = nn(I({}, dn, { dataTransfer: 0 })),
    mn = nn(I({}, un, { relatedTarget: 0 })),
    hn = nn(I({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    gn = I({}, on, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    vn = nn(gn),
    bn = nn(I({}, on, { data: 0 })),
    yn = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    wn = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    kn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function xn(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e];
  }
  function Ln() {
    return xn;
  }
  var Sn = I({}, un, {
      key: function (e) {
        if (e.key) {
          var t = yn[e.key] || e.key;
          if ("Unidentified" !== t) return t;
        }
        return "keypress" === e.type
          ? 13 === (e = Jt(e))
            ? "Enter"
            : String.fromCharCode(e)
          : "keydown" === e.type || "keyup" === e.type
          ? wn[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ln,
      charCode: function (e) {
        return "keypress" === e.type ? Jt(e) : 0;
      },
      keyCode: function (e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return "keypress" === e.type
          ? Jt(e)
          : "keydown" === e.type || "keyup" === e.type
          ? e.keyCode
          : 0;
      },
    }),
    Cn = nn(Sn),
    _n = nn(
      I({}, dn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      })
    ),
    En = nn(
      I({}, un, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ln,
      })
    ),
    zn = nn(I({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    jn = I({}, dn, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Nn = nn(jn),
    Pn = [9, 13, 27, 32],
    Mn = o && "CompositionEvent" in window,
    Tn = null;
  o && "documentMode" in document && (Tn = document.documentMode);
  var In = o && "TextEvent" in window && !Tn,
    Rn = o && (!Mn || (Tn && 8 < Tn && 11 >= Tn)),
    Fn = !1;
  function On(e, t) {
    switch (e) {
      case "keyup":
        return -1 !== Pn.indexOf(t.keyCode);
      case "keydown":
        return 229 !== t.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Dn(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
  }
  var Un = !1;
  var An = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Bn(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!An[e.type] : "textarea" === t;
  }
  function Vn(e, t, n, r) {
    Le(r),
      0 < (t = $r(t, "onChange")).length &&
        ((n = new sn("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var $n = null,
    Wn = null;
  function Hn(e) {
    Rr(e, 0);
  }
  function Qn(e) {
    if (W(va(e))) return e;
  }
  function Zn(e, t) {
    if ("change" === e) return t;
  }
  var qn = !1;
  if (o) {
    var Kn;
    if (o) {
      var Yn = "oninput" in document;
      if (!Yn) {
        var Xn = document.createElement("div");
        Xn.setAttribute("oninput", "return;"),
          (Yn = "function" == typeof Xn.oninput);
      }
      Kn = Yn;
    } else Kn = !1;
    qn = Kn && (!document.documentMode || 9 < document.documentMode);
  }
  function Gn() {
    $n && ($n.detachEvent("onpropertychange", Jn), (Wn = $n = null));
  }
  function Jn(e) {
    if ("value" === e.propertyName && Qn(Wn)) {
      var t = [];
      Vn(t, Wn, e, be(e)), ze(Hn, t);
    }
  }
  function er(e, t, n) {
    "focusin" === e
      ? (Gn(), (Wn = n), ($n = t).attachEvent("onpropertychange", Jn))
      : "focusout" === e && Gn();
  }
  function tr(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e)
      return Qn(Wn);
  }
  function nr(e, t) {
    if ("click" === e) return Qn(t);
  }
  function rr(e, t) {
    if ("input" === e || "change" === e) return Qn(t);
  }
  var ar =
    "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        };
  function lr(e, t) {
    if (ar(e, t)) return !0;
    if (
      "object" != typeof e ||
      null === e ||
      "object" != typeof t ||
      null === t
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!s.call(t, a) || !ar(e[a], t[a])) return !1;
    }
    return !0;
  }
  function ir(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function or(e, t) {
    var n,
      r = ir(e);
    for (e = 0; r; ) {
      if (3 === r.nodeType) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = ir(r);
    }
  }
  function sr(e, t) {
    return (
      !(!e || !t) &&
      (e === t ||
        ((!e || 3 !== e.nodeType) &&
          (t && 3 === t.nodeType
            ? sr(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : !!e.compareDocumentPosition &&
              !!(16 & e.compareDocumentPosition(t)))))
    );
  }
  function ur() {
    for (var e = window, t = H(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = "string" == typeof t.contentWindow.location.href;
      } catch {
        n = !1;
      }
      if (!n) break;
      t = H((e = t.contentWindow).document);
    }
    return t;
  }
  function cr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      (("input" === t &&
        ("text" === e.type ||
          "search" === e.type ||
          "tel" === e.type ||
          "url" === e.type ||
          "password" === e.type)) ||
        "textarea" === t ||
        "true" === e.contentEditable)
    );
  }
  function dr(e) {
    var t = ur(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      sr(n.ownerDocument.documentElement, n)
    ) {
      if (null !== r && cr(n))
        if (
          ((t = r.start),
          void 0 === (e = r.end) && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
            .getSelection
        ) {
          e = e.getSelection();
          var a = n.textContent.length,
            l = Math.min(r.start, a);
          (r = void 0 === r.end ? l : Math.min(r.end, a)),
            !e.extend && l > r && ((a = r), (r = l), (l = a)),
            (a = or(n, l));
          var i = or(n, r);
          a &&
            i &&
            (1 !== e.rangeCount ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()).setStart(a.node, a.offset),
            e.removeAllRanges(),
            l > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      for (t = [], e = n; (e = e.parentNode); )
        1 === e.nodeType &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var fr = o && "documentMode" in document && 11 >= document.documentMode,
    pr = null,
    mr = null,
    hr = null,
    gr = !1;
  function vr(e, t, n) {
    var r =
      n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    gr ||
      null == pr ||
      pr !== H(r) ||
      ("selectionStart" in (r = pr) && cr(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : (r = {
            anchorNode: (r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          }),
      (hr && lr(hr, r)) ||
        ((hr = r),
        0 < (r = $r(mr, "onSelect")).length &&
          ((t = new sn("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = pr))));
  }
  function br(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var yr = {
      animationend: br("Animation", "AnimationEnd"),
      animationiteration: br("Animation", "AnimationIteration"),
      animationstart: br("Animation", "AnimationStart"),
      transitionend: br("Transition", "TransitionEnd"),
    },
    wr = {},
    kr = {};
  function xr(e) {
    if (wr[e]) return wr[e];
    if (!yr[e]) return e;
    var t,
      n = yr[e];
    for (t in n) if (n.hasOwnProperty(t) && t in kr) return (wr[e] = n[t]);
    return e;
  }
  o &&
    ((kr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yr.animationend.animation,
      delete yr.animationiteration.animation,
      delete yr.animationstart.animation),
    "TransitionEvent" in window || delete yr.transitionend.transition);
  var Lr = xr("animationend"),
    Sr = xr("animationiteration"),
    Cr = xr("animationstart"),
    _r = xr("transitionend"),
    Er = new Map(),
    zr =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function jr(e, t) {
    Er.set(e, t), l(t, [e]);
  }
  for (var Nr = 0; Nr < zr.length; Nr++) {
    var Pr = zr[Nr];
    jr(Pr.toLowerCase(), "on" + (Pr[0].toUpperCase() + Pr.slice(1)));
  }
  jr(Lr, "onAnimationEnd"),
    jr(Sr, "onAnimationIteration"),
    jr(Cr, "onAnimationStart"),
    jr("dblclick", "onDoubleClick"),
    jr("focusin", "onFocus"),
    jr("focusout", "onBlur"),
    jr(_r, "onTransitionEnd"),
    i("onMouseEnter", ["mouseout", "mouseover"]),
    i("onMouseLeave", ["mouseout", "mouseover"]),
    i("onPointerEnter", ["pointerout", "pointerover"]),
    i("onPointerLeave", ["pointerout", "pointerover"]),
    l(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    l(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    l(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    l(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Mr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Tr = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Mr)
    );
  function Ir(e, t, r) {
    var a = e.type || "unknown-event";
    (e.currentTarget = r),
      (function (e, t, r, a, l, i, o, s, u) {
        if ((De.apply(this, arguments), Te)) {
          if (!Te) throw Error(n(198));
          var c = Ie;
          (Te = !1), (Ie = null), Re || ((Re = !0), (Fe = c));
        }
      })(a, t, void 0, e),
      (e.currentTarget = null);
  }
  function Rr(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        a = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i],
              s = o.instance,
              u = o.currentTarget;
            if (((o = o.listener), s !== l && a.isPropagationStopped()))
              break e;
            Ir(a, o, u), (l = s);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((s = (o = r[i]).instance),
              (u = o.currentTarget),
              (o = o.listener),
              s !== l && a.isPropagationStopped())
            )
              break e;
            Ir(a, o, u), (l = s);
          }
      }
    }
    if (Re) throw ((e = Fe), (Re = !1), (Fe = null), e);
  }
  function Fr(e, t) {
    var n = t[fa];
    void 0 === n && (n = t[fa] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ar(t, e, 2, !1), n.add(r));
  }
  function Or(e, t, n) {
    var r = 0;
    t && (r |= 4), Ar(n, e, r, t);
  }
  var Dr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Dr]) {
      (e[Dr] = !0),
        r.forEach(function (t) {
          "selectionchange" !== t && (Tr.has(t) || Or(t, !1, e), Or(t, !0, e));
        });
      var t = 9 === e.nodeType ? e : e.ownerDocument;
      null === t || t[Dr] || ((t[Dr] = !0), Or("selectionchange", !1, t));
    }
  }
  function Ar(e, t, n, r) {
    switch (qt(t)) {
      case 1:
        var a = $t;
        break;
      case 4:
        a = Wt;
        break;
      default:
        a = Ht;
    }
    (n = a.bind(null, t, n, e)),
      (a = void 0),
      !Ne ||
        ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
        (a = !0),
      r
        ? void 0 !== a
          ? e.addEventListener(t, n, { capture: !0, passive: a })
          : e.addEventListener(t, n, !0)
        : void 0 !== a
        ? e.addEventListener(t, n, { passive: a })
        : e.addEventListener(t, n, !1);
  }
  function Br(e, t, n, r, a) {
    var l = r;
    if (!(1 & t || 2 & t || null === r))
      e: for (;;) {
        if (null === r) return;
        var i = r.tag;
        if (3 === i || 4 === i) {
          var o = r.stateNode.containerInfo;
          if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
          if (4 === i)
            for (i = r.return; null !== i; ) {
              var s = i.tag;
              if (
                (3 === s || 4 === s) &&
                ((s = i.stateNode.containerInfo) === a ||
                  (8 === s.nodeType && s.parentNode === a))
              )
                return;
              i = i.return;
            }
          for (; null !== o; ) {
            if (null === (i = ha(o))) return;
            if (5 === (s = i.tag) || 6 === s) {
              r = l = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    ze(function () {
      var r = l,
        a = be(n),
        i = [];
      e: {
        var o = Er.get(e);
        if (void 0 !== o) {
          var s = sn,
            u = e;
          switch (e) {
            case "keypress":
              if (0 === Jt(n)) break e;
            case "keydown":
            case "keyup":
              s = Cn;
              break;
            case "focusin":
              (u = "focus"), (s = mn);
              break;
            case "focusout":
              (u = "blur"), (s = mn);
              break;
            case "beforeblur":
            case "afterblur":
              s = mn;
              break;
            case "click":
              if (2 === n.button) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              s = fn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              s = pn;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              s = En;
              break;
            case Lr:
            case Sr:
            case Cr:
              s = hn;
              break;
            case _r:
              s = zn;
              break;
            case "scroll":
              s = cn;
              break;
            case "wheel":
              s = Nn;
              break;
            case "copy":
            case "cut":
            case "paste":
              s = vn;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              s = _n;
          }
          var c = 0 != (4 & t),
            d = !c && "scroll" === e,
            f = c ? (null !== o ? o + "Capture" : null) : o;
          c = [];
          for (var p, m = r; null !== m; ) {
            var h = (p = m).stateNode;
            if (
              (5 === p.tag &&
                null !== h &&
                ((p = h),
                null !== f && null != (h = je(m, f)) && c.push(Vr(m, h, p))),
              d)
            )
              break;
            m = m.return;
          }
          0 < c.length &&
            ((o = new s(o, u, null, n, a)), i.push({ event: o, listeners: c }));
        }
      }
      if (!(7 & t)) {
        if (
          ((s = "mouseout" === e || "pointerout" === e),
          (!(o = "mouseover" === e || "pointerover" === e) ||
            n === ve ||
            !(u = n.relatedTarget || n.fromElement) ||
            (!ha(u) && !u[da])) &&
            (s || o) &&
            ((o =
              a.window === a
                ? a
                : (o = a.ownerDocument)
                ? o.defaultView || o.parentWindow
                : window),
            s
              ? ((s = r),
                null !==
                  (u = (u = n.relatedTarget || n.toElement) ? ha(u) : null) &&
                  (u !== (d = Ae(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                  (u = null))
              : ((s = null), (u = r)),
            s !== u))
        ) {
          if (
            ((c = fn),
            (h = "onMouseLeave"),
            (f = "onMouseEnter"),
            (m = "mouse"),
            ("pointerout" === e || "pointerover" === e) &&
              ((c = _n),
              (h = "onPointerLeave"),
              (f = "onPointerEnter"),
              (m = "pointer")),
            (d = null == s ? o : va(s)),
            (p = null == u ? o : va(u)),
            ((o = new c(h, m + "leave", s, n, a)).target = d),
            (o.relatedTarget = p),
            (h = null),
            ha(a) === r &&
              (((c = new c(f, m + "enter", u, n, a)).target = p),
              (c.relatedTarget = d),
              (h = c)),
            (d = h),
            s && u)
          )
            e: {
              for (f = u, m = 0, p = c = s; p; p = Wr(p)) m++;
              for (p = 0, h = f; h; h = Wr(h)) p++;
              for (; 0 < m - p; ) (c = Wr(c)), m--;
              for (; 0 < p - m; ) (f = Wr(f)), p--;
              for (; m--; ) {
                if (c === f || (null !== f && c === f.alternate)) break e;
                (c = Wr(c)), (f = Wr(f));
              }
              c = null;
            }
          else c = null;
          null !== s && Hr(i, o, s, c, !1),
            null !== u && null !== d && Hr(i, d, u, c, !0);
        }
        if (
          "select" ===
            (s =
              (o = r ? va(r) : window).nodeName && o.nodeName.toLowerCase()) ||
          ("input" === s && "file" === o.type)
        )
          var g = Zn;
        else if (Bn(o))
          if (qn) g = rr;
          else {
            g = tr;
            var v = er;
          }
        else
          (s = o.nodeName) &&
            "input" === s.toLowerCase() &&
            ("checkbox" === o.type || "radio" === o.type) &&
            (g = nr);
        switch (
          (g && (g = g(e, r))
            ? Vn(i, g, n, a)
            : (v && v(e, o, r),
              "focusout" === e &&
                (v = o._wrapperState) &&
                v.controlled &&
                "number" === o.type &&
                X(o, "number", o.value)),
          (v = r ? va(r) : window),
          e)
        ) {
          case "focusin":
            (Bn(v) || "true" === v.contentEditable) &&
              ((pr = v), (mr = r), (hr = null));
            break;
          case "focusout":
            hr = mr = pr = null;
            break;
          case "mousedown":
            gr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (gr = !1), vr(i, n, a);
            break;
          case "selectionchange":
            if (fr) break;
          case "keydown":
          case "keyup":
            vr(i, n, a);
        }
        var b;
        if (Mn)
          e: {
            switch (e) {
              case "compositionstart":
                var y = "onCompositionStart";
                break e;
              case "compositionend":
                y = "onCompositionEnd";
                break e;
              case "compositionupdate":
                y = "onCompositionUpdate";
                break e;
            }
            y = void 0;
          }
        else
          Un
            ? On(e, n) && (y = "onCompositionEnd")
            : "keydown" === e &&
              229 === n.keyCode &&
              (y = "onCompositionStart");
        y &&
          (Rn &&
            "ko" !== n.locale &&
            (Un || "onCompositionStart" !== y
              ? "onCompositionEnd" === y && Un && (b = Gt())
              : ((Yt = "value" in (Kt = a) ? Kt.value : Kt.textContent),
                (Un = !0))),
          0 < (v = $r(r, y)).length &&
            ((y = new bn(y, e, null, n, a)),
            i.push({ event: y, listeners: v }),
            b ? (y.data = b) : null !== (b = Dn(n)) && (y.data = b))),
          (b = In
            ? (function (e, t) {
                switch (e) {
                  case "compositionend":
                    return Dn(t);
                  case "keypress":
                    return 32 !== t.which ? null : ((Fn = !0), " ");
                  case "textInput":
                    return " " === (e = t.data) && Fn ? null : e;
                  default:
                    return null;
                }
              })(e, n)
            : (function (e, t) {
                if (Un)
                  return "compositionend" === e || (!Mn && On(e, t))
                    ? ((e = Gt()), (Xt = Yt = Kt = null), (Un = !1), e)
                    : null;
                switch (e) {
                  case "paste":
                    return null;
                  case "keypress":
                    if (
                      !(t.ctrlKey || t.altKey || t.metaKey) ||
                      (t.ctrlKey && t.altKey)
                    ) {
                      if (t.char && 1 < t.char.length) return t.char;
                      if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                  case "compositionend":
                    return Rn && "ko" !== t.locale ? null : t.data;
                  default:
                    return null;
                }
              })(e, n)) &&
            0 < (r = $r(r, "onBeforeInput")).length &&
            ((a = new bn("onBeforeInput", "beforeinput", null, n, a)),
            i.push({ event: a, listeners: r }),
            (a.data = b));
      }
      Rr(i, t);
    });
  }
  function Vr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $r(e, t) {
    for (var n = t + "Capture", r = []; null !== e; ) {
      var a = e,
        l = a.stateNode;
      5 === a.tag &&
        null !== l &&
        ((a = l),
        null != (l = je(e, n)) && r.unshift(Vr(e, l, a)),
        null != (l = je(e, t)) && r.push(Vr(e, l, a))),
        (e = e.return);
    }
    return r;
  }
  function Wr(e) {
    if (null === e) return null;
    do {
      e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
  }
  function Hr(e, t, n, r, a) {
    for (var l = t._reactName, i = []; null !== n && n !== r; ) {
      var o = n,
        s = o.alternate,
        u = o.stateNode;
      if (null !== s && s === r) break;
      5 === o.tag &&
        null !== u &&
        ((o = u),
        a
          ? null != (s = je(n, l)) && i.unshift(Vr(n, s, o))
          : a || (null != (s = je(n, l)) && i.push(Vr(n, s, o)))),
        (n = n.return);
    }
    0 !== i.length && e.push({ event: t, listeners: i });
  }
  var Qr = /\r\n?/g,
    Zr = /\u0000|\uFFFD/g;
  function qr(e) {
    return ("string" == typeof e ? e : "" + e)
      .replace(Qr, "\n")
      .replace(Zr, "");
  }
  function Kr(e, t, r) {
    if (((t = qr(t)), qr(e) !== t && r)) throw Error(n(425));
  }
  function Yr() {}
  var Xr = null,
    Gr = null;
  function Jr(e, t) {
    return (
      "textarea" === e ||
      "noscript" === e ||
      "string" == typeof t.children ||
      "number" == typeof t.children ||
      ("object" == typeof t.dangerouslySetInnerHTML &&
        null !== t.dangerouslySetInnerHTML &&
        null != t.dangerouslySetInnerHTML.__html)
    );
  }
  var ea = "function" == typeof setTimeout ? setTimeout : void 0,
    ta = "function" == typeof clearTimeout ? clearTimeout : void 0,
    na = "function" == typeof Promise ? Promise : void 0,
    ra =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : typeof na < "u"
        ? function (e) {
            return na.resolve(null).then(e).catch(aa);
          }
        : ea;
  function aa(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function la(e, t) {
    var n = t,
      r = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && 8 === a.nodeType))
        if ("/$" === (n = a.data)) {
          if (0 === r) return e.removeChild(a), void At(t);
          r--;
        } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
      n = a;
    } while (n);
    At(t);
  }
  function ia(e) {
    for (; null != e; e = e.nextSibling) {
      var t = e.nodeType;
      if (1 === t || 3 === t) break;
      if (8 === t) {
        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
        if ("/$" === t) return null;
      }
    }
    return e;
  }
  function oa(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (8 === e.nodeType) {
        var n = e.data;
        if ("$" === n || "$!" === n || "$?" === n) {
          if (0 === t) return e;
          t--;
        } else "/$" === n && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var sa = Math.random().toString(36).slice(2),
    ua = "__reactFiber$" + sa,
    ca = "__reactProps$" + sa,
    da = "__reactContainer$" + sa,
    fa = "__reactEvents$" + sa,
    pa = "__reactListeners$" + sa,
    ma = "__reactHandles$" + sa;
  function ha(e) {
    var t = e[ua];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[da] || n[ua])) {
        if (
          ((n = t.alternate),
          null !== t.child || (null !== n && null !== n.child))
        )
          for (e = oa(e); null !== e; ) {
            if ((n = e[ua])) return n;
            e = oa(e);
          }
        return t;
      }
      n = (e = n).parentNode;
    }
    return null;
  }
  function ga(e) {
    return !(e = e[ua] || e[da]) ||
      (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
      ? null
      : e;
  }
  function va(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(n(33));
  }
  function ba(e) {
    return e[ca] || null;
  }
  var ya = [],
    wa = -1;
  function ka(e) {
    return { current: e };
  }
  function xa(e) {
    0 > wa || ((e.current = ya[wa]), (ya[wa] = null), wa--);
  }
  function La(e, t) {
    wa++, (ya[wa] = e.current), (e.current = t);
  }
  var Sa = {},
    Ca = ka(Sa),
    _a = ka(!1),
    Ea = Sa;
  function za(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Sa;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var a,
      l = {};
    for (a in n) l[a] = t[a];
    return (
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function ja(e) {
    return null != (e = e.childContextTypes);
  }
  function Na() {
    xa(_a), xa(Ca);
  }
  function Pa(e, t, r) {
    if (Ca.current !== Sa) throw Error(n(168));
    La(Ca, t), La(_a, r);
  }
  function Ta(e, t, r) {
    var a = e.stateNode;
    if (((t = t.childContextTypes), "function" != typeof a.getChildContext))
      return r;
    for (var l in (a = a.getChildContext()))
      if (!(l in t)) throw Error(n(108, A(e) || "Unknown", l));
    return I({}, r, a);
  }
  function Ia(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Sa),
      (Ea = Ca.current),
      La(Ca, e),
      La(_a, _a.current),
      !0
    );
  }
  function Ra(e, t, r) {
    var a = e.stateNode;
    if (!a) throw Error(n(169));
    r
      ? ((e = Ta(e, t, Ea)),
        (a.__reactInternalMemoizedMergedChildContext = e),
        xa(_a),
        xa(Ca),
        La(Ca, e))
      : xa(_a),
      La(_a, r);
  }
  var Fa = null,
    Oa = !1,
    Da = !1;
  function Ua(e) {
    null === Fa ? (Fa = [e]) : Fa.push(e);
  }
  function Aa() {
    if (!Da && null !== Fa) {
      Da = !0;
      var e = 0,
        t = vt;
      try {
        var n = Fa;
        for (vt = 1; e < n.length; e++) {
          var r = n[e];
          do {
            r = r(!0);
          } while (null !== r);
        }
        (Fa = null), (Oa = !1);
      } catch (t) {
        throw (null !== Fa && (Fa = Fa.slice(e + 1)), He(Xe, Aa), t);
      } finally {
        (vt = t), (Da = !1);
      }
    }
    return null;
  }
  var Ba = [],
    Va = 0,
    $a = null,
    Wa = 0,
    Ha = [],
    Qa = 0,
    Za = null,
    qa = 1,
    Ka = "";
  function Ya(e, t) {
    (Ba[Va++] = Wa), (Ba[Va++] = $a), ($a = e), (Wa = t);
  }
  function Xa(e, t, n) {
    (Ha[Qa++] = qa), (Ha[Qa++] = Ka), (Ha[Qa++] = Za), (Za = e);
    var r = qa;
    e = Ka;
    var a = 32 - at(r) - 1;
    (r &= ~(1 << a)), (n += 1);
    var l = 32 - at(t) + a;
    if (30 < l) {
      var i = a - (a % 5);
      (l = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (a -= i),
        (qa = (1 << (32 - at(t) + a)) | (n << a) | r),
        (Ka = l + e);
    } else (qa = (1 << l) | (n << a) | r), (Ka = e);
  }
  function Ga(e) {
    null !== e.return && (Ya(e, 1), Xa(e, 1, 0));
  }
  function Ja(e) {
    for (; e === $a; )
      ($a = Ba[--Va]), (Ba[Va] = null), (Wa = Ba[--Va]), (Ba[Va] = null);
    for (; e === Za; )
      (Za = Ha[--Qa]),
        (Ha[Qa] = null),
        (Ka = Ha[--Qa]),
        (Ha[Qa] = null),
        (qa = Ha[--Qa]),
        (Ha[Qa] = null);
  }
  var el = null,
    tl = null,
    nl = !1,
    rl = null;
  function al(e, t) {
    var n = zu(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      null === (t = e.deletions)
        ? ((e.deletions = [n]), (e.flags |= 16))
        : t.push(n);
  }
  function ll(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          null !==
            (t =
              1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t) &&
          ((e.stateNode = t), (el = e), (tl = ia(t.firstChild)), !0)
        );
      case 6:
        return (
          null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
          ((e.stateNode = t), (el = e), (tl = null), !0)
        );
      case 13:
        return (
          null !== (t = 8 !== t.nodeType ? null : t) &&
          ((n = null !== Za ? { id: qa, overflow: Ka } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          ((n = zu(18, null, null, 0)).stateNode = t),
          (n.return = e),
          (e.child = n),
          (el = e),
          (tl = null),
          !0)
        );
      default:
        return !1;
    }
  }
  function il(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
  }
  function ol(e) {
    if (nl) {
      var t = tl;
      if (t) {
        var r = t;
        if (!ll(e, t)) {
          if (il(e)) throw Error(n(418));
          t = ia(r.nextSibling);
          var a = el;
          t && ll(e, t)
            ? al(a, r)
            : ((e.flags = (-4097 & e.flags) | 2), (nl = !1), (el = e));
        }
      } else {
        if (il(e)) throw Error(n(418));
        (e.flags = (-4097 & e.flags) | 2), (nl = !1), (el = e);
      }
    }
  }
  function sl(e) {
    for (
      e = e.return;
      null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

    )
      e = e.return;
    el = e;
  }
  function ul(e) {
    if (e !== el) return !1;
    if (!nl) return sl(e), (nl = !0), !1;
    var t;
    if (
      ((t = 3 !== e.tag) &&
        !(t = 5 !== e.tag) &&
        (t =
          "head" !== (t = e.type) &&
          "body" !== t &&
          !Jr(e.type, e.memoizedProps)),
      t && (t = tl))
    ) {
      if (il(e)) throw (cl(), Error(n(418)));
      for (; t; ) al(e, t), (t = ia(t.nextSibling));
    }
    if ((sl(e), 13 === e.tag)) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
        throw Error(n(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (8 === e.nodeType) {
            var r = e.data;
            if ("/$" === r) {
              if (0 === t) {
                tl = ia(e.nextSibling);
                break e;
              }
              t--;
            } else ("$" !== r && "$!" !== r && "$?" !== r) || t++;
          }
          e = e.nextSibling;
        }
        tl = null;
      }
    } else tl = el ? ia(e.stateNode.nextSibling) : null;
    return !0;
  }
  function cl() {
    for (var e = tl; e; ) e = ia(e.nextSibling);
  }
  function dl() {
    (tl = el = null), (nl = !1);
  }
  function fl(e) {
    null === rl ? (rl = [e]) : rl.push(e);
  }
  var pl = v.ReactCurrentBatchConfig;
  function ml(e, t, r) {
    if (
      null !== (e = r.ref) &&
      "function" != typeof e &&
      "object" != typeof e
    ) {
      if (r._owner) {
        if ((r = r._owner)) {
          if (1 !== r.tag) throw Error(n(309));
          var a = r.stateNode;
        }
        if (!a) throw Error(n(147, e));
        var l = a,
          i = "" + e;
        return null !== t &&
          null !== t.ref &&
          "function" == typeof t.ref &&
          t.ref._stringRef === i
          ? t.ref
          : (((t = function (e) {
              var t = l.refs;
              null === e ? delete t[i] : (t[i] = e);
            })._stringRef = i),
            t);
      }
      if ("string" != typeof e) throw Error(n(284));
      if (!r._owner) throw Error(n(290, e));
    }
    return e;
  }
  function hl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        n(
          31,
          "[object Object]" === e
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function gl(e) {
    return (0, e._init)(e._payload);
  }
  function vl(e) {
    function t(t, n) {
      if (e) {
        var r = t.deletions;
        null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
      }
    }
    function r(n, r) {
      if (!e) return null;
      for (; null !== r; ) t(n, r), (r = r.sibling);
      return null;
    }
    function a(e, t) {
      for (e = new Map(); null !== t; )
        null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
      return e;
    }
    function l(e, t) {
      return ((e = Pu(e, t)).index = 0), (e.sibling = null), e;
    }
    function i(t, n, r) {
      return (
        (t.index = r),
        e
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags |= 2), n)
              : r
            : ((t.flags |= 2), n)
          : ((t.flags |= 1048576), n)
      );
    }
    function o(t) {
      return e && null === t.alternate && (t.flags |= 2), t;
    }
    function s(e, t, n, r) {
      return null === t || 6 !== t.tag
        ? (((t = Ru(n, e.mode, r)).return = e), t)
        : (((t = l(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
      var a = n.type;
      return a === w
        ? d(e, t, n.props.children, r, n.key)
        : null !== t &&
          (t.elementType === a ||
            ("object" == typeof a &&
              null !== a &&
              a.$$typeof === j &&
              gl(a) === t.type))
        ? (((r = l(t, n.props)).ref = ml(e, t, n)), (r.return = e), r)
        : (((r = Mu(n.type, n.key, n.props, null, e.mode, r)).ref = ml(
            e,
            t,
            n
          )),
          (r.return = e),
          r);
    }
    function c(e, t, n, r) {
      return null === t ||
        4 !== t.tag ||
        t.stateNode.containerInfo !== n.containerInfo ||
        t.stateNode.implementation !== n.implementation
        ? (((t = Fu(n, e.mode, r)).return = e), t)
        : (((t = l(t, n.children || [])).return = e), t);
    }
    function d(e, t, n, r, a) {
      return null === t || 7 !== t.tag
        ? (((t = Tu(n, e.mode, r, a)).return = e), t)
        : (((t = l(t, n)).return = e), t);
    }
    function f(e, t, n) {
      if (("string" == typeof t && "" !== t) || "number" == typeof t)
        return ((t = Ru("" + t, e.mode, n)).return = e), t;
      if ("object" == typeof t && null !== t) {
        switch (t.$$typeof) {
          case b:
            return (
              ((n = Mu(t.type, t.key, t.props, null, e.mode, n)).ref = ml(
                e,
                null,
                t
              )),
              (n.return = e),
              n
            );
          case y:
            return ((t = Fu(t, e.mode, n)).return = e), t;
          case j:
            return f(e, (0, t._init)(t._payload), n);
        }
        if (G(t) || M(t)) return ((t = Tu(t, e.mode, n, null)).return = e), t;
        hl(e, t);
      }
      return null;
    }
    function p(e, t, n, r) {
      var a = null !== t ? t.key : null;
      if (("string" == typeof n && "" !== n) || "number" == typeof n)
        return null !== a ? null : s(e, t, "" + n, r);
      if ("object" == typeof n && null !== n) {
        switch (n.$$typeof) {
          case b:
            return n.key === a ? u(e, t, n, r) : null;
          case y:
            return n.key === a ? c(e, t, n, r) : null;
          case j:
            return p(e, t, (a = n._init)(n._payload), r);
        }
        if (G(n) || M(n)) return null !== a ? null : d(e, t, n, r, null);
        hl(e, n);
      }
      return null;
    }
    function m(e, t, n, r, a) {
      if (("string" == typeof r && "" !== r) || "number" == typeof r)
        return s(t, (e = e.get(n) || null), "" + r, a);
      if ("object" == typeof r && null !== r) {
        switch (r.$$typeof) {
          case b:
            return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case y:
            return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case j:
            return m(e, t, n, (0, r._init)(r._payload), a);
        }
        if (G(r) || M(r)) return d(t, (e = e.get(n) || null), r, a, null);
        hl(t, r);
      }
      return null;
    }
    return function s(u, c, d, h) {
      if (
        ("object" == typeof d &&
          null !== d &&
          d.type === w &&
          null === d.key &&
          (d = d.props.children),
        "object" == typeof d && null !== d)
      ) {
        switch (d.$$typeof) {
          case b:
            e: {
              for (var g = d.key, v = c; null !== v; ) {
                if (v.key === g) {
                  if ((g = d.type) === w) {
                    if (7 === v.tag) {
                      r(u, v.sibling),
                        ((c = l(v, d.props.children)).return = u),
                        (u = c);
                      break e;
                    }
                  } else if (
                    v.elementType === g ||
                    ("object" == typeof g &&
                      null !== g &&
                      g.$$typeof === j &&
                      gl(g) === v.type)
                  ) {
                    r(u, v.sibling),
                      ((c = l(v, d.props)).ref = ml(u, v, d)),
                      (c.return = u),
                      (u = c);
                    break e;
                  }
                  r(u, v);
                  break;
                }
                t(u, v), (v = v.sibling);
              }
              d.type === w
                ? (((c = Tu(d.props.children, u.mode, h, d.key)).return = u),
                  (u = c))
                : (((h = Mu(d.type, d.key, d.props, null, u.mode, h)).ref = ml(
                    u,
                    c,
                    d
                  )),
                  (h.return = u),
                  (u = h));
            }
            return o(u);
          case y:
            e: {
              for (v = d.key; null !== c; ) {
                if (c.key === v) {
                  if (
                    4 === c.tag &&
                    c.stateNode.containerInfo === d.containerInfo &&
                    c.stateNode.implementation === d.implementation
                  ) {
                    r(u, c.sibling),
                      ((c = l(c, d.children || [])).return = u),
                      (u = c);
                    break e;
                  }
                  r(u, c);
                  break;
                }
                t(u, c), (c = c.sibling);
              }
              ((c = Fu(d, u.mode, h)).return = u), (u = c);
            }
            return o(u);
          case j:
            return s(u, c, (v = d._init)(d._payload), h);
        }
        if (G(d))
          return (function (n, l, o, s) {
            for (
              var u = null, c = null, d = l, h = (l = 0), g = null;
              null !== d && h < o.length;
              h++
            ) {
              d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(n, d, o[h], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(n, d),
                (l = i(v, l, h)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (h === o.length) return r(n, d), nl && Ya(n, h), u;
            if (null === d) {
              for (; h < o.length; h++)
                null !== (d = f(n, o[h], s)) &&
                  ((l = i(d, l, h)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return nl && Ya(n, h), u;
            }
            for (d = a(n, d); h < o.length; h++)
              null !== (g = m(d, n, h, o[h], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? h : g.key),
                (l = i(g, l, h)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(n, e);
                }),
              nl && Ya(n, h),
              u
            );
          })(u, c, d, h);
        if (M(d))
          return (function (l, o, s, u) {
            var c = M(s);
            if ("function" != typeof c) throw Error(n(150));
            if (null == (s = c.call(s))) throw Error(n(151));
            for (
              var d = (c = null), h = o, g = (o = 0), v = null, b = s.next();
              null !== h && !b.done;
              g++, b = s.next()
            ) {
              h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
              var y = p(l, h, b.value, u);
              if (null === y) {
                null === h && (h = v);
                break;
              }
              e && h && null === y.alternate && t(l, h),
                (o = i(y, o, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y),
                (h = v);
            }
            if (b.done) return r(l, h), nl && Ya(l, g), c;
            if (null === h) {
              for (; !b.done; g++, b = s.next())
                null !== (b = f(l, b.value, u)) &&
                  ((o = i(b, o, g)),
                  null === d ? (c = b) : (d.sibling = b),
                  (d = b));
              return nl && Ya(l, g), c;
            }
            for (h = a(l, h); !b.done; g++, b = s.next())
              null !== (b = m(h, l, g, b.value, u)) &&
                (e &&
                  null !== b.alternate &&
                  h.delete(null === b.key ? g : b.key),
                (o = i(b, o, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b));
            return (
              e &&
                h.forEach(function (e) {
                  return t(l, e);
                }),
              nl && Ya(l, g),
              c
            );
          })(u, c, d, h);
        hl(u, d);
      }
      return ("string" == typeof d && "" !== d) || "number" == typeof d
        ? ((d = "" + d),
          null !== c && 6 === c.tag
            ? (r(u, c.sibling), ((c = l(c, d)).return = u), (u = c))
            : (r(u, c), ((c = Ru(d, u.mode, h)).return = u), (u = c)),
          o(u))
        : r(u, c);
    };
  }
  var bl = vl(!0),
    yl = vl(!1),
    wl = ka(null),
    kl = null,
    xl = null,
    Ll = null;
  function Sl() {
    Ll = xl = kl = null;
  }
  function Cl(e) {
    var t = wl.current;
    xa(wl), (e._currentValue = t);
  }
  function _l(e, t, n) {
    for (; null !== e; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
          : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function El(e, t) {
    (kl = e),
      (Ll = xl = null),
      null !== (e = e.dependencies) &&
        null !== e.firstContext &&
        (e.lanes & t && (vo = !0), (e.firstContext = null));
  }
  function zl(e) {
    var t = e._currentValue;
    if (Ll !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), null === xl)) {
        if (null === kl) throw Error(n(308));
        (xl = e), (kl.dependencies = { lanes: 0, firstContext: e });
      } else xl = xl.next = e;
    return t;
  }
  var jl = null;
  function Nl(e) {
    null === jl ? (jl = [e]) : jl.push(e);
  }
  function Pl(e, t, n, r) {
    var a = t.interleaved;
    return (
      null === a ? ((n.next = n), Nl(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n),
      Ml(e, r)
    );
  }
  function Ml(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
      (e.childLanes |= t),
        null !== (n = e.alternate) && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return 3 === n.tag ? n.stateNode : null;
  }
  var Tl = !1;
  function Il(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Rl(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Fl(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Ol(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 2 & Cs)) {
      var a = r.pending;
      return (
        null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (r.pending = t),
        Ml(e, n)
      );
    }
    return (
      null === (a = r.interleaved)
        ? ((t.next = t), Nl(r))
        : ((t.next = a.next), (a.next = t)),
      (r.interleaved = t),
      Ml(e, n)
    );
  }
  function Dl(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
    }
  }
  function Ul(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
      var a = null,
        l = null;
      if (null !== (n = n.firstBaseUpdate)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
        } while (null !== n);
        null === l ? (a = l = t) : (l = l.next = t);
      } else a = l = t;
      return (
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: l,
          shared: r.shared,
          effects: r.effects,
        }),
        void (e.updateQueue = n)
      );
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Al(e, t, n, r) {
    var a = e.updateQueue;
    Tl = !1;
    var l = a.firstBaseUpdate,
      i = a.lastBaseUpdate,
      o = a.shared.pending;
    if (null !== o) {
      a.shared.pending = null;
      var s = o,
        u = s.next;
      (s.next = null), null === i ? (l = u) : (i.next = u), (i = s);
      var c = e.alternate;
      null !== c &&
        (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
        (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
        (c.lastBaseUpdate = s));
    }
    if (null !== l) {
      var d = a.baseState;
      for (i = 0, c = u = s = null, o = l; ; ) {
        var f = o.lane,
          p = o.eventTime;
        if ((r & f) === f) {
          null !== c &&
            (c = c.next =
              {
                eventTime: p,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var m = e,
              h = o;
            switch (((f = t), (p = n), h.tag)) {
              case 1:
                if ("function" == typeof (m = h.payload)) {
                  d = m.call(p, d, f);
                  break e;
                }
                d = m;
                break e;
              case 3:
                m.flags = (-65537 & m.flags) | 128;
              case 0:
                if (
                  null ==
                  (f =
                    "function" == typeof (m = h.payload) ? m.call(p, d, f) : m)
                )
                  break e;
                d = I({}, d, f);
                break e;
              case 2:
                Tl = !0;
            }
          }
          null !== o.callback &&
            0 !== o.lane &&
            ((e.flags |= 64),
            null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
        } else
          (p = {
            eventTime: p,
            lane: f,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
            (i |= f);
        if (null === (o = o.next)) {
          if (null === (o = a.shared.pending)) break;
          (o = (f = o).next),
            (f.next = null),
            (a.lastBaseUpdate = f),
            (a.shared.pending = null);
        }
      }
      if (
        (null === c && (s = d),
        (a.baseState = s),
        (a.firstBaseUpdate = u),
        (a.lastBaseUpdate = c),
        null !== (t = a.shared.interleaved))
      ) {
        a = t;
        do {
          (i |= a.lane), (a = a.next);
        } while (a !== t);
      } else null === l && (a.shared.lanes = 0);
      (Ts |= i), (e.lanes = i), (e.memoizedState = d);
    }
  }
  function Bl(e, t, r) {
    if (((e = t.effects), (t.effects = null), null !== e))
      for (t = 0; t < e.length; t++) {
        var a = e[t],
          l = a.callback;
        if (null !== l) {
          if (((a.callback = null), (a = r), "function" != typeof l))
            throw Error(n(191, l));
          l.call(a);
        }
      }
  }
  var Vl = {},
    $l = ka(Vl),
    Wl = ka(Vl),
    Hl = ka(Vl);
  function Ql(e) {
    if (e === Vl) throw Error(n(174));
    return e;
  }
  function Zl(e, t) {
    switch ((La(Hl, t), La(Wl, e), La($l, Vl), (e = t.nodeType))) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
        break;
      default:
        t = le(
          (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
          (e = e.tagName)
        );
    }
    xa($l), La($l, t);
  }
  function ql() {
    xa($l), xa(Wl), xa(Hl);
  }
  function Kl(e) {
    Ql(Hl.current);
    var t = Ql($l.current),
      n = le(t, e.type);
    t !== n && (La(Wl, e), La($l, n));
  }
  function Yl(e) {
    Wl.current === e && (xa($l), xa(Wl));
  }
  var Xl = ka(0);
  function Gl(e) {
    for (var t = e; null !== t; ) {
      if (13 === t.tag) {
        var n = t.memoizedState;
        if (
          null !== n &&
          (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
        )
          return t;
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
        if (128 & t.flags) return t;
      } else if (null !== t.child) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; null === t.sibling; ) {
        if (null === t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Jl = [];
  function ei() {
    for (var e = 0; e < Jl.length; e++)
      Jl[e]._workInProgressVersionPrimary = null;
    Jl.length = 0;
  }
  var ti = v.ReactCurrentDispatcher,
    ni = v.ReactCurrentBatchConfig,
    ri = 0,
    ai = null,
    li = null,
    ii = null,
    oi = !1,
    si = !1,
    ui = 0,
    ci = 0;
  function di() {
    throw Error(n(321));
  }
  function fi(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ar(e[n], t[n])) return !1;
    return !0;
  }
  function pi(e, t, r, a, l, i) {
    if (
      ((ri = i),
      (ai = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ti.current = null === e || null === e.memoizedState ? Yi : Xi),
      (e = r(a, l)),
      si)
    ) {
      i = 0;
      do {
        if (((si = !1), (ui = 0), 25 <= i)) throw Error(n(301));
        (i += 1),
          (ii = li = null),
          (t.updateQueue = null),
          (ti.current = Gi),
          (e = r(a, l));
      } while (si);
    }
    if (
      ((ti.current = Ki),
      (t = null !== li && null !== li.next),
      (ri = 0),
      (ii = li = ai = null),
      (oi = !1),
      t)
    )
      throw Error(n(300));
    return e;
  }
  function mi() {
    var e = 0 !== ui;
    return (ui = 0), e;
  }
  function hi() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return null === ii ? (ai.memoizedState = ii = e) : (ii = ii.next = e), ii;
  }
  function gi() {
    if (null === li) {
      var e = ai.alternate;
      e = null !== e ? e.memoizedState : null;
    } else e = li.next;
    var t = null === ii ? ai.memoizedState : ii.next;
    if (null !== t) (ii = t), (li = e);
    else {
      if (null === e) throw Error(n(310));
      (e = {
        memoizedState: (li = e).memoizedState,
        baseState: li.baseState,
        baseQueue: li.baseQueue,
        queue: li.queue,
        next: null,
      }),
        null === ii ? (ai.memoizedState = ii = e) : (ii = ii.next = e);
    }
    return ii;
  }
  function vi(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function bi(e) {
    var t = gi(),
      r = t.queue;
    if (null === r) throw Error(n(311));
    r.lastRenderedReducer = e;
    var a = li,
      l = a.baseQueue,
      i = r.pending;
    if (null !== i) {
      if (null !== l) {
        var o = l.next;
        (l.next = i.next), (i.next = o);
      }
      (a.baseQueue = l = i), (r.pending = null);
    }
    if (null !== l) {
      (i = l.next), (a = a.baseState);
      var s = (o = null),
        u = null,
        c = i;
      do {
        var d = c.lane;
        if ((ri & d) === d)
          null !== u &&
            (u = u.next =
              {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
            (a = c.hasEagerState ? c.eagerState : e(a, c.action));
        else {
          var f = {
            lane: d,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          };
          null === u ? ((s = u = f), (o = a)) : (u = u.next = f),
            (ai.lanes |= d),
            (Ts |= d);
        }
        c = c.next;
      } while (null !== c && c !== i);
      null === u ? (o = a) : (u.next = s),
        ar(a, t.memoizedState) || (vo = !0),
        (t.memoizedState = a),
        (t.baseState = o),
        (t.baseQueue = u),
        (r.lastRenderedState = a);
    }
    if (null !== (e = r.interleaved)) {
      l = e;
      do {
        (i = l.lane), (ai.lanes |= i), (Ts |= i), (l = l.next);
      } while (l !== e);
    } else null === l && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function yi(e) {
    var t = gi(),
      r = t.queue;
    if (null === r) throw Error(n(311));
    r.lastRenderedReducer = e;
    var a = r.dispatch,
      l = r.pending,
      i = t.memoizedState;
    if (null !== l) {
      r.pending = null;
      var o = (l = l.next);
      do {
        (i = e(i, o.action)), (o = o.next);
      } while (o !== l);
      ar(i, t.memoizedState) || (vo = !0),
        (t.memoizedState = i),
        null === t.baseQueue && (t.baseState = i),
        (r.lastRenderedState = i);
    }
    return [i, a];
  }
  function wi() {}
  function ki(e, t) {
    var r = ai,
      a = gi(),
      l = t(),
      i = !ar(a.memoizedState, l);
    if (
      (i && ((a.memoizedState = l), (vo = !0)),
      (a = a.queue),
      Ti(Si.bind(null, r, a, e), [e]),
      a.getSnapshot !== t || i || (null !== ii && 1 & ii.memoizedState.tag))
    ) {
      if (
        ((r.flags |= 2048),
        zi(9, Li.bind(null, r, a, l, t), void 0, null),
        null === _s)
      )
        throw Error(n(349));
      30 & ri || xi(r, t, l);
    }
    return l;
  }
  function xi(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      null === (t = ai.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (ai.updateQueue = t),
          (t.stores = [e]))
        : null === (n = t.stores)
        ? (t.stores = [e])
        : n.push(e);
  }
  function Li(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ci(t) && _i(e);
  }
  function Si(e, t, n) {
    return n(function () {
      Ci(t) && _i(e);
    });
  }
  function Ci(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ar(e, n);
    } catch {
      return !0;
    }
  }
  function _i(e) {
    var t = Ml(e, 1);
    null !== t && Js(t, e, 1, -1);
  }
  function Ei(e) {
    var t = hi();
    return (
      "function" == typeof e && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Hi.bind(null, ai, e)),
      [t.memoizedState, e]
    );
  }
  function zi(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      null === (t = ai.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (ai.updateQueue = t),
          (t.lastEffect = e.next = e))
        : null === (n = t.lastEffect)
        ? (t.lastEffect = e.next = e)
        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function ji() {
    return gi().memoizedState;
  }
  function Ni(e, t, n, r) {
    var a = hi();
    (ai.flags |= e),
      (a.memoizedState = zi(1 | t, n, void 0, void 0 === r ? null : r));
  }
  function Pi(e, t, n, r) {
    var a = gi();
    r = void 0 === r ? null : r;
    var l = void 0;
    if (null !== li) {
      var i = li.memoizedState;
      if (((l = i.destroy), null !== r && fi(r, i.deps)))
        return void (a.memoizedState = zi(t, n, l, r));
    }
    (ai.flags |= e), (a.memoizedState = zi(1 | t, n, l, r));
  }
  function Mi(e, t) {
    return Ni(8390656, 8, e, t);
  }
  function Ti(e, t) {
    return Pi(2048, 8, e, t);
  }
  function Ii(e, t) {
    return Pi(4, 2, e, t);
  }
  function Ri(e, t) {
    return Pi(4, 4, e, t);
  }
  function Fi(e, t) {
    return "function" == typeof t
      ? ((e = e()),
        t(e),
        function () {
          t(null);
        })
      : null != t
      ? ((e = e()),
        (t.current = e),
        function () {
          t.current = null;
        })
      : void 0;
  }
  function Oi(e, t, n) {
    return (
      (n = null != n ? n.concat([e]) : null), Pi(4, 4, Fi.bind(null, t, e), n)
    );
  }
  function Di() {}
  function Ui(e, t) {
    var n = gi();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && fi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ai(e, t) {
    var n = gi();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && fi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Bi(e, t, n) {
    return 21 & ri
      ? (ar(n, t) ||
          ((n = pt()), (ai.lanes |= n), (Ts |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (vo = !0)), (e.memoizedState = n));
  }
  function Vi(e, t) {
    var n = vt;
    (vt = 0 !== n && 4 > n ? n : 4), e(!0);
    var r = ni.transition;
    ni.transition = {};
    try {
      e(!1), t();
    } finally {
      (vt = n), (ni.transition = r);
    }
  }
  function $i() {
    return gi().memoizedState;
  }
  function Wi(e, t, n) {
    var r = Gs(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Qi(e))
    )
      Zi(t, n);
    else if (null !== (n = Pl(e, t, n, r))) {
      Js(n, e, r, Xs()), qi(n, t, r);
    }
  }
  function Hi(e, t, n) {
    var r = Gs(e),
      a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Qi(e)) Zi(t, a);
    else {
      var l = e.alternate;
      if (
        0 === e.lanes &&
        (null === l || 0 === l.lanes) &&
        null !== (l = t.lastRenderedReducer)
      )
        try {
          var i = t.lastRenderedState,
            o = l(i, n);
          if (((a.hasEagerState = !0), (a.eagerState = o), ar(o, i))) {
            var s = t.interleaved;
            return (
              null === s
                ? ((a.next = a), Nl(t))
                : ((a.next = s.next), (s.next = a)),
              void (t.interleaved = a)
            );
          }
        } catch {}
      null !== (n = Pl(e, t, a, r)) && (Js(n, e, r, (a = Xs())), qi(n, t, r));
    }
  }
  function Qi(e) {
    var t = e.alternate;
    return e === ai || (null !== t && t === ai);
  }
  function Zi(e, t) {
    si = oi = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function qi(e, t, n) {
    if (4194240 & n) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
    }
  }
  var Ki = {
      readContext: zl,
      useCallback: di,
      useContext: di,
      useEffect: di,
      useImperativeHandle: di,
      useInsertionEffect: di,
      useLayoutEffect: di,
      useMemo: di,
      useReducer: di,
      useRef: di,
      useState: di,
      useDebugValue: di,
      useDeferredValue: di,
      useTransition: di,
      useMutableSource: di,
      useSyncExternalStore: di,
      useId: di,
      unstable_isNewReconciler: !1,
    },
    Yi = {
      readContext: zl,
      useCallback: function (e, t) {
        return (hi().memoizedState = [e, void 0 === t ? null : t]), e;
      },
      useContext: zl,
      useEffect: Mi,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          Ni(4194308, 4, Fi.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ni(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ni(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = hi();
        return (
          (t = void 0 === t ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = hi();
        return (
          (t = void 0 !== n ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Wi.bind(null, ai, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        return (e = { current: e }), (hi().memoizedState = e);
      },
      useState: Ei,
      useDebugValue: Di,
      useDeferredValue: function (e) {
        return (hi().memoizedState = e);
      },
      useTransition: function () {
        var e = Ei(!1),
          t = e[0];
        return (e = Vi.bind(null, e[1])), (hi().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var a = ai,
          l = hi();
        if (nl) {
          if (void 0 === r) throw Error(n(407));
          r = r();
        } else {
          if (((r = t()), null === _s)) throw Error(n(349));
          30 & ri || xi(a, t, r);
        }
        l.memoizedState = r;
        var i = { value: r, getSnapshot: t };
        return (
          (l.queue = i),
          Mi(Si.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          zi(9, Li.bind(null, a, i, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = hi(),
          t = _s.identifierPrefix;
        if (nl) {
          var n = Ka;
          (t =
            ":" +
            t +
            "R" +
            (n = (qa & ~(1 << (32 - at(qa) - 1))).toString(32) + n)),
            0 < (n = ui++) && (t += "H" + n.toString(32)),
            (t += ":");
        } else t = ":" + t + "r" + (n = ci++).toString(32) + ":";
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Xi = {
      readContext: zl,
      useCallback: Ui,
      useContext: zl,
      useEffect: Ti,
      useImperativeHandle: Oi,
      useInsertionEffect: Ii,
      useLayoutEffect: Ri,
      useMemo: Ai,
      useReducer: bi,
      useRef: ji,
      useState: function () {
        return bi(vi);
      },
      useDebugValue: Di,
      useDeferredValue: function (e) {
        return Bi(gi(), li.memoizedState, e);
      },
      useTransition: function () {
        return [bi(vi)[0], gi().memoizedState];
      },
      useMutableSource: wi,
      useSyncExternalStore: ki,
      useId: $i,
      unstable_isNewReconciler: !1,
    },
    Gi = {
      readContext: zl,
      useCallback: Ui,
      useContext: zl,
      useEffect: Ti,
      useImperativeHandle: Oi,
      useInsertionEffect: Ii,
      useLayoutEffect: Ri,
      useMemo: Ai,
      useReducer: yi,
      useRef: ji,
      useState: function () {
        return yi(vi);
      },
      useDebugValue: Di,
      useDeferredValue: function (e) {
        var t = gi();
        return null === li ? (t.memoizedState = e) : Bi(t, li.memoizedState, e);
      },
      useTransition: function () {
        return [yi(vi)[0], gi().memoizedState];
      },
      useMutableSource: wi,
      useSyncExternalStore: ki,
      useId: $i,
      unstable_isNewReconciler: !1,
    };
  function Ji(e, t) {
    if (e && e.defaultProps) {
      for (var n in ((t = I({}, t)), (e = e.defaultProps)))
        void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function eo(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : I({}, t, n)),
      (e.memoizedState = n),
      0 === e.lanes && (e.updateQueue.baseState = n);
  }
  var to = {
    isMounted: function (e) {
      return !!(e = e._reactInternals) && Ae(e) === e;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Xs(),
        a = Gs(e),
        l = Fl(r, a);
      (l.payload = t),
        null != n && (l.callback = n),
        null !== (t = Ol(e, l, a)) && (Js(t, e, a, r), Dl(t, e, a));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Xs(),
        a = Gs(e),
        l = Fl(r, a);
      (l.tag = 1),
        (l.payload = t),
        null != n && (l.callback = n),
        null !== (t = Ol(e, l, a)) && (Js(t, e, a, r), Dl(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Xs(),
        r = Gs(e),
        a = Fl(n, r);
      (a.tag = 2),
        null != t && (a.callback = t),
        null !== (t = Ol(e, a, r)) && (Js(t, e, r, n), Dl(t, e, r));
    },
  };
  function no(e, t, n, r, a, l, i) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
      ? e.shouldComponentUpdate(r, l, i)
      : !t.prototype ||
          !t.prototype.isPureReactComponent ||
          !lr(n, r) ||
          !lr(a, l);
  }
  function ro(e, t, n) {
    var r = !1,
      a = Sa,
      l = t.contextType;
    return (
      "object" == typeof l && null !== l
        ? (l = zl(l))
        : ((a = ja(t) ? Ea : Ca.current),
          (l = (r = null != (r = t.contextTypes)) ? za(e, a) : Sa)),
      (t = new t(n, l)),
      (e.memoizedState =
        null !== t.state && void 0 !== t.state ? t.state : null),
      (t.updater = to),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      t
    );
  }
  function ao(e, t, n, r) {
    (e = t.state),
      "function" == typeof t.componentWillReceiveProps &&
        t.componentWillReceiveProps(n, r),
      "function" == typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && to.enqueueReplaceState(t, t.state, null);
  }
  function lo(e, t, n, r) {
    var a = e.stateNode;
    (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Il(e);
    var l = t.contextType;
    "object" == typeof l && null !== l
      ? (a.context = zl(l))
      : ((l = ja(t) ? Ea : Ca.current), (a.context = za(e, l))),
      (a.state = e.memoizedState),
      "function" == typeof (l = t.getDerivedStateFromProps) &&
        (eo(e, t, l, n), (a.state = e.memoizedState)),
      "function" == typeof t.getDerivedStateFromProps ||
        "function" == typeof a.getSnapshotBeforeUpdate ||
        ("function" != typeof a.UNSAFE_componentWillMount &&
          "function" != typeof a.componentWillMount) ||
        ((t = a.state),
        "function" == typeof a.componentWillMount && a.componentWillMount(),
        "function" == typeof a.UNSAFE_componentWillMount &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && to.enqueueReplaceState(a, a.state, null),
        Al(e, n, a, r),
        (a.state = e.memoizedState)),
      "function" == typeof a.componentDidMount && (e.flags |= 4194308);
  }
  function io(e, t) {
    try {
      var n = "",
        r = t;
      do {
        (n += D(r)), (r = r.return);
      } while (r);
      var a = n;
    } catch (e) {
      a = "\nError generating stack: " + e.message + "\n" + e.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function oo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function so(e, t) {
    try {
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  var uo = "function" == typeof WeakMap ? WeakMap : Map;
  function co(e, t, n) {
    ((n = Fl(-1, n)).tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Bs || ((Bs = !0), (Vs = r)), so();
      }),
      n
    );
  }
  function fo(e, t, n) {
    (n = Fl(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
      var a = t.value;
      (n.payload = function () {
        return r(a);
      }),
        (n.callback = function () {
          so();
        });
    }
    var l = e.stateNode;
    return (
      null !== l &&
        "function" == typeof l.componentDidCatch &&
        (n.callback = function () {
          so(),
            "function" != typeof r &&
              (null === $s ? ($s = new Set([this])) : $s.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : "",
          });
        }),
      n
    );
  }
  function po(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
      r = e.pingCache = new uo();
      var a = new Set();
      r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = xu.bind(null, e, t, n)), t.then(e, e));
  }
  function mo(e) {
    do {
      var t;
      if (
        ((t = 13 === e.tag) &&
          (t = null === (t = e.memoizedState) || null !== t.dehydrated),
        t)
      )
        return e;
      e = e.return;
    } while (null !== e);
    return null;
  }
  function ho(e, t, n, r, a) {
    return 1 & e.mode
      ? ((e.flags |= 65536), (e.lanes = a), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            1 === n.tag &&
              (null === n.alternate
                ? (n.tag = 17)
                : (((t = Fl(-1, 1)).tag = 2), Ol(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var go = v.ReactCurrentOwner,
    vo = !1;
  function bo(e, t, n, r) {
    t.child = null === e ? yl(t, null, n, r) : bl(t, e.child, n, r);
  }
  function yo(e, t, n, r, a) {
    n = n.render;
    var l = t.ref;
    return (
      El(t, a),
      (r = pi(e, t, n, r, l, a)),
      (n = mi()),
      null === e || vo
        ? (nl && n && Ga(t), (t.flags |= 1), bo(e, t, r, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Bo(e, t, a))
    );
  }
  function wo(e, t, n, r, a) {
    if (null === e) {
      var l = n.type;
      return "function" != typeof l ||
        ju(l) ||
        void 0 !== l.defaultProps ||
        null !== n.compare ||
        void 0 !== n.defaultProps
        ? (((e = Mu(n.type, null, r, t, t.mode, a)).ref = t.ref),
          (e.return = t),
          (t.child = e))
        : ((t.tag = 15), (t.type = l), ko(e, t, l, r, a));
    }
    if (((l = e.child), !(e.lanes & a))) {
      var i = l.memoizedProps;
      if ((n = null !== (n = n.compare) ? n : lr)(i, r) && e.ref === t.ref)
        return Bo(e, t, a);
    }
    return (
      (t.flags |= 1),
      ((e = Pu(l, r)).ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ko(e, t, n, r, a) {
    if (null !== e) {
      var l = e.memoizedProps;
      if (lr(l, r) && e.ref === t.ref) {
        if (((vo = !1), (t.pendingProps = r = l), 0 == (e.lanes & a)))
          return (t.lanes = e.lanes), Bo(e, t, a);
        131072 & e.flags && (vo = !0);
      }
    }
    return So(e, t, n, r, a);
  }
  function xo(e, t, n) {
    var r = t.pendingProps,
      a = r.children,
      l = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode)
      if (1 & t.mode) {
        if (!(1073741824 & n))
          return (
            (e = null !== l ? l.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            La(Ns, js),
            (js |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = null !== l ? l.baseLanes : n),
          La(Ns, js),
          (js |= r);
      } else
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          La(Ns, js),
          (js |= n);
    else
      null !== l ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
        La(Ns, js),
        (js |= r);
    return bo(e, t, a, n), t.child;
  }
  function Lo(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function So(e, t, n, r, a) {
    var l = ja(n) ? Ea : Ca.current;
    return (
      (l = za(t, l)),
      El(t, a),
      (n = pi(e, t, n, r, l, a)),
      (r = mi()),
      null === e || vo
        ? (nl && r && Ga(t), (t.flags |= 1), bo(e, t, n, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Bo(e, t, a))
    );
  }
  function Co(e, t, n, r, a) {
    if (ja(n)) {
      var l = !0;
      Ia(t);
    } else l = !1;
    if ((El(t, a), null === t.stateNode))
      Ao(e, t), ro(t, n, r), lo(t, n, r, a), (r = !0);
    else if (null === e) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        u = n.contextType;
      "object" == typeof u && null !== u
        ? (u = zl(u))
        : (u = za(t, (u = ja(n) ? Ea : Ca.current)));
      var c = n.getDerivedStateFromProps,
        d =
          "function" == typeof c ||
          "function" == typeof i.getSnapshotBeforeUpdate;
      d ||
        ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
          "function" != typeof i.componentWillReceiveProps) ||
        ((o !== r || s !== u) && ao(t, i, r, u)),
        (Tl = !1);
      var f = t.memoizedState;
      (i.state = f),
        Al(t, r, i, a),
        (s = t.memoizedState),
        o !== r || f !== s || _a.current || Tl
          ? ("function" == typeof c && (eo(t, n, c, r), (s = t.memoizedState)),
            (o = Tl || no(t, n, o, r, f, s, u))
              ? (d ||
                  ("function" != typeof i.UNSAFE_componentWillMount &&
                    "function" != typeof i.componentWillMount) ||
                  ("function" == typeof i.componentWillMount &&
                    i.componentWillMount(),
                  "function" == typeof i.UNSAFE_componentWillMount &&
                    i.UNSAFE_componentWillMount()),
                "function" == typeof i.componentDidMount &&
                  (t.flags |= 4194308))
              : ("function" == typeof i.componentDidMount &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = u),
            (r = o))
          : ("function" == typeof i.componentDidMount && (t.flags |= 4194308),
            (r = !1));
    } else {
      (i = t.stateNode),
        Rl(e, t),
        (o = t.memoizedProps),
        (u = t.type === t.elementType ? o : Ji(t.type, o)),
        (i.props = u),
        (d = t.pendingProps),
        (f = i.context),
        "object" == typeof (s = n.contextType) && null !== s
          ? (s = zl(s))
          : (s = za(t, (s = ja(n) ? Ea : Ca.current)));
      var p = n.getDerivedStateFromProps;
      (c =
        "function" == typeof p ||
        "function" == typeof i.getSnapshotBeforeUpdate) ||
        ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
          "function" != typeof i.componentWillReceiveProps) ||
        ((o !== d || f !== s) && ao(t, i, r, s)),
        (Tl = !1),
        (f = t.memoizedState),
        (i.state = f),
        Al(t, r, i, a);
      var m = t.memoizedState;
      o !== d || f !== m || _a.current || Tl
        ? ("function" == typeof p && (eo(t, n, p, r), (m = t.memoizedState)),
          (u = Tl || no(t, n, u, r, f, m, s) || !1)
            ? (c ||
                ("function" != typeof i.UNSAFE_componentWillUpdate &&
                  "function" != typeof i.componentWillUpdate) ||
                ("function" == typeof i.componentWillUpdate &&
                  i.componentWillUpdate(r, m, s),
                "function" == typeof i.UNSAFE_componentWillUpdate &&
                  i.UNSAFE_componentWillUpdate(r, m, s)),
              "function" == typeof i.componentDidUpdate && (t.flags |= 4),
              "function" == typeof i.getSnapshotBeforeUpdate &&
                (t.flags |= 1024))
            : ("function" != typeof i.componentDidUpdate ||
                (o === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof i.getSnapshotBeforeUpdate ||
                (o === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = m)),
          (i.props = r),
          (i.state = m),
          (i.context = s),
          (r = u))
        : ("function" != typeof i.componentDidUpdate ||
            (o === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 4),
          "function" != typeof i.getSnapshotBeforeUpdate ||
            (o === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return _o(e, t, n, r, l, a);
  }
  function _o(e, t, n, r, a, l) {
    Lo(e, t);
    var i = 0 != (128 & t.flags);
    if (!r && !i) return a && Ra(t, n, !1), Bo(e, t, l);
    (r = t.stateNode), (go.current = t);
    var o =
      i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return (
      (t.flags |= 1),
      null !== e && i
        ? ((t.child = bl(t, e.child, null, l)), (t.child = bl(t, null, o, l)))
        : bo(e, t, o, l),
      (t.memoizedState = r.state),
      a && Ra(t, n, !0),
      t.child
    );
  }
  function Eo(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Pa(0, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Pa(0, t.context, !1),
      Zl(e, t.containerInfo);
  }
  function zo(e, t, n, r, a) {
    return dl(), fl(a), (t.flags |= 256), bo(e, t, n, r), t.child;
  }
  var jo,
    No,
    Po,
    Mo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function To(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Io(e, t, r) {
    var a,
      l = t.pendingProps,
      i = Xl.current,
      o = !1,
      s = 0 != (128 & t.flags);
    if (
      ((a = s) ||
        (a = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
      a
        ? ((o = !0), (t.flags &= -129))
        : (null === e || null !== e.memoizedState) && (i |= 1),
      La(Xl, 1 & i),
      null === e)
    )
      return (
        ol(t),
        null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
          ? (1 & t.mode
              ? "$!" === e.data
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((s = l.children),
            (e = l.fallback),
            o
              ? ((l = t.mode),
                (o = t.child),
                (s = { mode: "hidden", children: s }),
                1 & l || null === o
                  ? (o = Iu(s, l, 0, null))
                  : ((o.childLanes = 0), (o.pendingProps = s)),
                (e = Tu(e, l, r, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = To(r)),
                (t.memoizedState = Mo),
                e)
              : Ro(t, s))
      );
    if (null !== (i = e.memoizedState) && null !== (a = i.dehydrated))
      return (function (e, t, r, a, l, i, o) {
        if (r)
          return 256 & t.flags
            ? ((t.flags &= -257), (a = oo(Error(n(422)))), Fo(e, t, o, a))
            : null !== t.memoizedState
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = a.fallback),
              (l = t.mode),
              (a = Iu({ mode: "visible", children: a.children }, l, 0, null)),
              ((i = Tu(i, l, o, null)).flags |= 2),
              (a.return = t),
              (i.return = t),
              (a.sibling = i),
              (t.child = a),
              1 & t.mode && bl(t, e.child, null, o),
              (t.child.memoizedState = To(o)),
              (t.memoizedState = Mo),
              i);
        if (!(1 & t.mode)) return Fo(e, t, o, null);
        if ("$!" === l.data) {
          if ((a = l.nextSibling && l.nextSibling.dataset)) var s = a.dgst;
          return (a = s), Fo(e, t, o, (a = oo((i = Error(n(419))), a, void 0)));
        }
        if (((s = 0 != (o & e.childLanes)), vo || s)) {
          if (null !== (a = _s)) {
            switch (o & -o) {
              case 4:
                l = 2;
                break;
              case 16:
                l = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                l = 32;
                break;
              case 536870912:
                l = 268435456;
                break;
              default:
                l = 0;
            }
            0 !== (l = l & (a.suspendedLanes | o) ? 0 : l) &&
              l !== i.retryLane &&
              ((i.retryLane = l), Ml(e, l), Js(a, e, l, -1));
          }
          return fu(), Fo(e, t, o, (a = oo(Error(n(421)))));
        }
        return "$?" === l.data
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = Su.bind(null, e)),
            (l._reactRetry = t),
            null)
          : ((e = i.treeContext),
            (tl = ia(l.nextSibling)),
            (el = t),
            (nl = !0),
            (rl = null),
            null !== e &&
              ((Ha[Qa++] = qa),
              (Ha[Qa++] = Ka),
              (Ha[Qa++] = Za),
              (qa = e.id),
              (Ka = e.overflow),
              (Za = t)),
            ((t = Ro(t, a.children)).flags |= 4096),
            t);
      })(e, t, s, l, a, i, r);
    if (o) {
      (o = l.fallback), (s = t.mode), (a = (i = e.child).sibling);
      var u = { mode: "hidden", children: l.children };
      return (
        1 & s || t.child === i
          ? ((l = Pu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags)
          : (((l = t.child).childLanes = 0),
            (l.pendingProps = u),
            (t.deletions = null)),
        null !== a ? (o = Pu(a, o)) : ((o = Tu(o, s, r, null)).flags |= 2),
        (o.return = t),
        (l.return = t),
        (l.sibling = o),
        (t.child = l),
        (l = o),
        (o = t.child),
        (s =
          null === (s = e.child.memoizedState)
            ? To(r)
            : {
                baseLanes: s.baseLanes | r,
                cachePool: null,
                transitions: s.transitions,
              }),
        (o.memoizedState = s),
        (o.childLanes = e.childLanes & ~r),
        (t.memoizedState = Mo),
        l
      );
    }
    return (
      (e = (o = e.child).sibling),
      (l = Pu(o, { mode: "visible", children: l.children })),
      !(1 & t.mode) && (l.lanes = r),
      (l.return = t),
      (l.sibling = null),
      null !== e &&
        (null === (r = t.deletions)
          ? ((t.deletions = [e]), (t.flags |= 16))
          : r.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function Ro(e, t) {
    return (
      ((t = Iu({ mode: "visible", children: t }, e.mode, 0, null)).return = e),
      (e.child = t)
    );
  }
  function Fo(e, t, n, r) {
    return (
      null !== r && fl(r),
      bl(t, e.child, null, n),
      ((e = Ro(t, t.pendingProps.children)).flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Oo(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), _l(e.return, t, n);
  }
  function Do(e, t, n, r, a) {
    var l = e.memoizedState;
    null === l
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: a,
        })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = r),
        (l.tail = n),
        (l.tailMode = a));
  }
  function Uo(e, t, n) {
    var r = t.pendingProps,
      a = r.revealOrder,
      l = r.tail;
    if ((bo(e, t, r.children, n), 2 & (r = Xl.current)))
      (r = (1 & r) | 2), (t.flags |= 128);
    else {
      if (null !== e && 128 & e.flags)
        e: for (e = t.child; null !== e; ) {
          if (13 === e.tag) null !== e.memoizedState && Oo(e, n, t);
          else if (19 === e.tag) Oo(e, n, t);
          else if (null !== e.child) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((La(Xl, r), 1 & t.mode))
      switch (a) {
        case "forwards":
          for (n = t.child, a = null; null !== n; )
            null !== (e = n.alternate) && null === Gl(e) && (a = n),
              (n = n.sibling);
          null === (n = a)
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
            Do(t, !1, a, n, l);
          break;
        case "backwards":
          for (n = null, a = t.child, t.child = null; null !== a; ) {
            if (null !== (e = a.alternate) && null === Gl(e)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = n), (n = a), (a = e);
          }
          Do(t, !0, n, null, l);
          break;
        case "together":
          Do(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    else t.memoizedState = null;
    return t.child;
  }
  function Ao(e, t) {
    !(1 & t.mode) &&
      null !== e &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Bo(e, t, r) {
    if (
      (null !== e && (t.dependencies = e.dependencies),
      (Ts |= t.lanes),
      !(r & t.childLanes))
    )
      return null;
    if (null !== e && t.child !== e.child) throw Error(n(153));
    if (null !== t.child) {
      for (
        r = Pu((e = t.child), e.pendingProps), t.child = r, r.return = t;
        null !== e.sibling;

      )
        (e = e.sibling), ((r = r.sibling = Pu(e, e.pendingProps)).return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function Vo(e, t) {
    if (!nl)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling);
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling);
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function $o(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var a = e.child; null !== a; )
        (n |= a.lanes | a.childLanes),
          (r |= 14680064 & a.subtreeFlags),
          (r |= 14680064 & a.flags),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; null !== a; )
        (n |= a.lanes | a.childLanes),
          (r |= a.subtreeFlags),
          (r |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Wo(e, t, r) {
    var l = t.pendingProps;
    switch ((Ja(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $o(t), null;
      case 1:
        return ja(t.type) && Na(), $o(t), null;
      case 3:
        return (
          (l = t.stateNode),
          ql(),
          xa(_a),
          xa(Ca),
          ei(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (null === e || null === e.child) &&
            (ul(t)
              ? (t.flags |= 4)
              : null === e ||
                (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                ((t.flags |= 1024), null !== rl && (ru(rl), (rl = null)))),
          $o(t),
          null
        );
      case 5:
        Yl(t);
        var i = Ql(Hl.current);
        if (((r = t.type), null !== e && null != t.stateNode))
          No(e, t, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!l) {
            if (null === t.stateNode) throw Error(n(166));
            return $o(t), null;
          }
          if (((e = Ql($l.current)), ul(t))) {
            (l = t.stateNode), (r = t.type);
            var o = t.memoizedProps;
            switch (((l[ua] = t), (l[ca] = o), (e = 0 != (1 & t.mode)), r)) {
              case "dialog":
                Fr("cancel", l), Fr("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Fr("load", l);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Mr.length; i++) Fr(Mr[i], l);
                break;
              case "source":
                Fr("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Fr("error", l), Fr("load", l);
                break;
              case "details":
                Fr("toggle", l);
                break;
              case "input":
                Z(l, o), Fr("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!o.multiple }),
                  Fr("invalid", l);
                break;
              case "textarea":
                te(l, o), Fr("invalid", l);
            }
            for (var s in (he(r, o), (i = null), o))
              if (o.hasOwnProperty(s)) {
                var u = o[s];
                "children" === s
                  ? "string" == typeof u
                    ? l.textContent !== u &&
                      (!0 !== o.suppressHydrationWarning &&
                        Kr(l.textContent, u, e),
                      (i = ["children", u]))
                    : "number" == typeof u &&
                      l.textContent !== "" + u &&
                      (!0 !== o.suppressHydrationWarning &&
                        Kr(l.textContent, u, e),
                      (i = ["children", "" + u]))
                  : a.hasOwnProperty(s) &&
                    null != u &&
                    "onScroll" === s &&
                    Fr("scroll", l);
              }
            switch (r) {
              case "input":
                $(l), Y(l, o, !0);
                break;
              case "textarea":
                $(l), re(l);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" == typeof o.onClick && (l.onclick = Yr);
            }
            (l = i), (t.updateQueue = l), null !== l && (t.flags |= 4);
          } else {
            (s = 9 === i.nodeType ? i : i.ownerDocument),
              "http://www.w3.org/1999/xhtml" === e && (e = ae(r)),
              "http://www.w3.org/1999/xhtml" === e
                ? "script" === r
                  ? (((e = s.createElement("div")).innerHTML =
                      "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : "string" == typeof l.is
                  ? (e = s.createElement(r, { is: l.is }))
                  : ((e = s.createElement(r)),
                    "select" === r &&
                      ((s = e),
                      l.multiple
                        ? (s.multiple = !0)
                        : l.size && (s.size = l.size)))
                : (e = s.createElementNS(e, r)),
              (e[ua] = t),
              (e[ca] = l),
              jo(e, t),
              (t.stateNode = e);
            e: {
              switch (((s = ge(r, l)), r)) {
                case "dialog":
                  Fr("cancel", e), Fr("close", e), (i = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Fr("load", e), (i = l);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Mr.length; i++) Fr(Mr[i], e);
                  i = l;
                  break;
                case "source":
                  Fr("error", e), (i = l);
                  break;
                case "img":
                case "image":
                case "link":
                  Fr("error", e), Fr("load", e), (i = l);
                  break;
                case "details":
                  Fr("toggle", e), (i = l);
                  break;
                case "input":
                  Z(e, l), (i = Q(e, l)), Fr("invalid", e);
                  break;
                case "option":
                  i = l;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (i = I({}, l, { value: void 0 })),
                    Fr("invalid", e);
                  break;
                case "textarea":
                  te(e, l), (i = ee(e, l)), Fr("invalid", e);
                  break;
                default:
                  i = l;
              }
              for (o in (he(r, i), (u = i)))
                if (u.hasOwnProperty(o)) {
                  var c = u[o];
                  "style" === o
                    ? pe(e, c)
                    : "dangerouslySetInnerHTML" === o
                    ? null != (c = c ? c.__html : void 0) && se(e, c)
                    : "children" === o
                    ? "string" == typeof c
                      ? ("textarea" !== r || "" !== c) && ue(e, c)
                      : "number" == typeof c && ue(e, "" + c)
                    : "suppressContentEditableWarning" !== o &&
                      "suppressHydrationWarning" !== o &&
                      "autoFocus" !== o &&
                      (a.hasOwnProperty(o)
                        ? null != c && "onScroll" === o && Fr("scroll", e)
                        : null != c && g(e, o, c, s));
                }
              switch (r) {
                case "input":
                  $(e), Y(e, l, !1);
                  break;
                case "textarea":
                  $(e), re(e);
                  break;
                case "option":
                  null != l.value && e.setAttribute("value", "" + B(l.value));
                  break;
                case "select":
                  (e.multiple = !!l.multiple),
                    null != (o = l.value)
                      ? J(e, !!l.multiple, o, !1)
                      : null != l.defaultValue &&
                        J(e, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  "function" == typeof i.onClick && (e.onclick = Yr);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return $o(t), null;
      case 6:
        if (e && null != t.stateNode) Po(0, t, e.memoizedProps, l);
        else {
          if ("string" != typeof l && null === t.stateNode) throw Error(n(166));
          if (((r = Ql(Hl.current)), Ql($l.current), ul(t))) {
            if (
              ((l = t.stateNode),
              (r = t.memoizedProps),
              (l[ua] = t),
              (o = l.nodeValue !== r) && null !== (e = el))
            )
              switch (e.tag) {
                case 3:
                  Kr(l.nodeValue, r, 0 != (1 & e.mode));
                  break;
                case 5:
                  !0 !== e.memoizedProps.suppressHydrationWarning &&
                    Kr(l.nodeValue, r, 0 != (1 & e.mode));
              }
            o && (t.flags |= 4);
          } else
            ((l = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(l))[
              ua
            ] = t),
              (t.stateNode = l);
        }
        return $o(t), null;
      case 13:
        if (
          (xa(Xl),
          (l = t.memoizedState),
          null === e ||
            (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
        ) {
          if (nl && null !== tl && 1 & t.mode && !(128 & t.flags))
            cl(), dl(), (t.flags |= 98560), (o = !1);
          else if (((o = ul(t)), null !== l && null !== l.dehydrated)) {
            if (null === e) {
              if (!o) throw Error(n(318));
              if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
                throw Error(n(317));
              o[ua] = t;
            } else
              dl(),
                !(128 & t.flags) && (t.memoizedState = null),
                (t.flags |= 4);
            $o(t), (o = !1);
          } else null !== rl && (ru(rl), (rl = null)), (o = !0);
          if (!o) return 65536 & t.flags ? t : null;
        }
        return 128 & t.flags
          ? ((t.lanes = r), t)
          : ((l = null !== l) !== (null !== e && null !== e.memoizedState) &&
              l &&
              ((t.child.flags |= 8192),
              1 & t.mode &&
                (null === e || 1 & Xl.current ? 0 === Ps && (Ps = 3) : fu())),
            null !== t.updateQueue && (t.flags |= 4),
            $o(t),
            null);
      case 4:
        return ql(), null === e && Ur(t.stateNode.containerInfo), $o(t), null;
      case 10:
        return Cl(t.type._context), $o(t), null;
      case 17:
        return ja(t.type) && Na(), $o(t), null;
      case 19:
        if ((xa(Xl), null === (o = t.memoizedState))) return $o(t), null;
        if (((l = 0 != (128 & t.flags)), null === (s = o.rendering)))
          if (l) Vo(o, !1);
          else {
            if (0 !== Ps || (null !== e && 128 & e.flags))
              for (e = t.child; null !== e; ) {
                if (null !== (s = Gl(e))) {
                  for (
                    t.flags |= 128,
                      Vo(o, !1),
                      null !== (l = s.updateQueue) &&
                        ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = r,
                      r = t.child;
                    null !== r;

                  )
                    (e = l),
                      ((o = r).flags &= 14680066),
                      null === (s = o.alternate)
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = s.childLanes),
                          (o.lanes = s.lanes),
                          (o.child = s.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = s.memoizedProps),
                          (o.memoizedState = s.memoizedState),
                          (o.updateQueue = s.updateQueue),
                          (o.type = s.type),
                          (e = s.dependencies),
                          (o.dependencies =
                            null === e
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return La(Xl, (1 & Xl.current) | 2), t.child;
                }
                e = e.sibling;
              }
            null !== o.tail &&
              Ke() > Us &&
              ((t.flags |= 128), (l = !0), Vo(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (null !== (e = Gl(s))) {
              if (
                ((t.flags |= 128),
                (l = !0),
                null !== (r = e.updateQueue) &&
                  ((t.updateQueue = r), (t.flags |= 4)),
                Vo(o, !0),
                null === o.tail &&
                  "hidden" === o.tailMode &&
                  !s.alternate &&
                  !nl)
              )
                return $o(t), null;
            } else
              2 * Ke() - o.renderingStartTime > Us &&
                1073741824 !== r &&
                ((t.flags |= 128), (l = !0), Vo(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : (null !== (r = o.last) ? (r.sibling = s) : (t.child = s),
              (o.last = s));
        }
        return null !== o.tail
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ke()),
            (t.sibling = null),
            (r = Xl.current),
            La(Xl, l ? (1 & r) | 2 : 1 & r),
            t)
          : ($o(t), null);
      case 22:
      case 23:
        return (
          su(),
          (l = null !== t.memoizedState),
          null !== e && (null !== e.memoizedState) !== l && (t.flags |= 8192),
          l && 1 & t.mode
            ? 1073741824 & js &&
              ($o(t), 6 & t.subtreeFlags && (t.flags |= 8192))
            : $o(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, t.tag));
  }
  function Ho(e, t) {
    switch ((Ja(t), t.tag)) {
      case 1:
        return (
          ja(t.type) && Na(),
          65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
        );
      case 3:
        return (
          ql(),
          xa(_a),
          xa(Ca),
          ei(),
          65536 & (e = t.flags) && !(128 & e)
            ? ((t.flags = (-65537 & e) | 128), t)
            : null
        );
      case 5:
        return Yl(t), null;
      case 13:
        if ((xa(Xl), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
          if (null === t.alternate) throw Error(n(340));
          dl();
        }
        return 65536 & (e = t.flags)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null;
      case 19:
        return xa(Xl), null;
      case 4:
        return ql(), null;
      case 10:
        return Cl(t.type._context), null;
      case 22:
      case 23:
        return su(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  (jo = function (e, t) {
    for (var n = t.child; null !== n; ) {
      if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
      else if (4 !== n.tag && null !== n.child) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; null === n.sibling; ) {
        if (null === n.return || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (No = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), Ql($l.current);
        var i,
          o = null;
        switch (n) {
          case "input":
            (l = Q(e, l)), (r = Q(e, r)), (o = []);
            break;
          case "select":
            (l = I({}, l, { value: void 0 })),
              (r = I({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = ee(e, l)), (r = ee(e, r)), (o = []);
            break;
          default:
            "function" != typeof l.onClick &&
              "function" == typeof r.onClick &&
              (e.onclick = Yr);
        }
        for (c in (he(n, r), (n = null), l))
          if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && null != l[c])
            if ("style" === c) {
              var s = l[c];
              for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              "dangerouslySetInnerHTML" !== c &&
                "children" !== c &&
                "suppressContentEditableWarning" !== c &&
                "suppressHydrationWarning" !== c &&
                "autoFocus" !== c &&
                (a.hasOwnProperty(c)
                  ? o || (o = [])
                  : (o = o || []).push(c, null));
        for (c in r) {
          var u = r[c];
          if (
            ((s = null != l ? l[c] : void 0),
            r.hasOwnProperty(c) && u !== s && (null != u || null != s))
          )
            if ("style" === c)
              if (s) {
                for (i in s)
                  !s.hasOwnProperty(i) ||
                    (u && u.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in u)
                  u.hasOwnProperty(i) &&
                    s[i] !== u[i] &&
                    (n || (n = {}), (n[i] = u[i]));
              } else n || (o || (o = []), o.push(c, n)), (n = u);
            else
              "dangerouslySetInnerHTML" === c
                ? ((u = u ? u.__html : void 0),
                  (s = s ? s.__html : void 0),
                  null != u && s !== u && (o = o || []).push(c, u))
                : "children" === c
                ? ("string" != typeof u && "number" != typeof u) ||
                  (o = o || []).push(c, "" + u)
                : "suppressContentEditableWarning" !== c &&
                  "suppressHydrationWarning" !== c &&
                  (a.hasOwnProperty(c)
                    ? (null != u && "onScroll" === c && Fr("scroll", e),
                      o || s === u || (o = []))
                    : (o = o || []).push(c, u));
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4);
      }
    }),
    (Po = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  var Qo = !1,
    Zo = !1,
    qo = "function" == typeof WeakSet ? WeakSet : Set,
    Ko = null;
  function Yo(e, t) {
    var n = e.ref;
    if (null !== n)
      if ("function" == typeof n)
        try {
          n(null);
        } catch (n) {
          ku(e, t, n);
        }
      else n.current = null;
  }
  function Xo(e, t, n) {
    try {
      n();
    } catch (n) {
      ku(e, t, n);
    }
  }
  var Go = !1;
  function Jo(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
      var a = (r = r.next);
      do {
        if ((a.tag & e) === e) {
          var l = a.destroy;
          (a.destroy = void 0), void 0 !== l && Xo(t, n, l);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function es(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ts(e) {
    var t = e.ref;
    if (null !== t) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      "function" == typeof t ? t(e) : (t.current = e);
    }
  }
  function ns(e) {
    var t = e.alternate;
    null !== t && ((e.alternate = null), ns(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      5 === e.tag &&
        null !== (t = e.stateNode) &&
        (delete t[ua], delete t[ca], delete t[fa], delete t[pa], delete t[ma]),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function rs(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
  }
  function as(e) {
    e: for (;;) {
      for (; null === e.sibling; ) {
        if (null === e.return || rs(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

      ) {
        if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(2 & e.flags)) return e.stateNode;
    }
  }
  function ls(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      (e = e.stateNode),
        t
          ? 8 === n.nodeType
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (8 === n.nodeType
              ? (t = n.parentNode).insertBefore(e, n)
              : (t = n).appendChild(e),
            null != (n = n._reactRootContainer) ||
              null !== t.onclick ||
              (t.onclick = Yr));
    else if (4 !== r && null !== (e = e.child))
      for (ls(e, t, n), e = e.sibling; null !== e; )
        ls(e, t, n), (e = e.sibling);
  }
  function is(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
      for (is(e, t, n), e = e.sibling; null !== e; )
        is(e, t, n), (e = e.sibling);
  }
  var os = null,
    ss = !1;
  function us(e, t, n) {
    for (n = n.child; null !== n; ) cs(e, t, n), (n = n.sibling);
  }
  function cs(e, t, n) {
    if (rt && "function" == typeof rt.onCommitFiberUnmount)
      try {
        rt.onCommitFiberUnmount(nt, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Zo || Yo(n, t);
      case 6:
        var r = os,
          a = ss;
        (os = null),
          us(e, t, n),
          (ss = a),
          null !== (os = r) &&
            (ss
              ? ((e = os),
                (n = n.stateNode),
                8 === e.nodeType
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : os.removeChild(n.stateNode));
        break;
      case 18:
        null !== os &&
          (ss
            ? ((e = os),
              (n = n.stateNode),
              8 === e.nodeType
                ? la(e.parentNode, n)
                : 1 === e.nodeType && la(e, n),
              At(e))
            : la(os, n.stateNode));
        break;
      case 4:
        (r = os),
          (a = ss),
          (os = n.stateNode.containerInfo),
          (ss = !0),
          us(e, t, n),
          (os = r),
          (ss = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Zo &&
          null !== (r = n.updateQueue) &&
          null !== (r = r.lastEffect)
        ) {
          a = r = r.next;
          do {
            var l = a,
              i = l.destroy;
            (l = l.tag),
              void 0 !== i && (2 & l || 4 & l) && Xo(n, t, i),
              (a = a.next);
          } while (a !== r);
        }
        us(e, t, n);
        break;
      case 1:
        if (
          !Zo &&
          (Yo(n, t),
          "function" == typeof (r = n.stateNode).componentWillUnmount)
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (e) {
            ku(n, t, e);
          }
        us(e, t, n);
        break;
      case 21:
        us(e, t, n);
        break;
      case 22:
        1 & n.mode
          ? ((Zo = (r = Zo) || null !== n.memoizedState), us(e, t, n), (Zo = r))
          : us(e, t, n);
        break;
      default:
        us(e, t, n);
    }
  }
  function ds(e) {
    var t = e.updateQueue;
    if (null !== t) {
      e.updateQueue = null;
      var n = e.stateNode;
      null === n && (n = e.stateNode = new qo()),
        t.forEach(function (t) {
          var r = Cu.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        });
    }
  }
  function fs(e, t) {
    var r = t.deletions;
    if (null !== r)
      for (var a = 0; a < r.length; a++) {
        var l = r[a];
        try {
          var i = e,
            o = t,
            s = o;
          e: for (; null !== s; ) {
            switch (s.tag) {
              case 5:
                (os = s.stateNode), (ss = !1);
                break e;
              case 3:
                (os = s.stateNode.containerInfo), (ss = !0);
                break e;
              case 4:
                (os = s.stateNode.containerInfo), (ss = !0);
                break e;
            }
            s = s.return;
          }
          if (null === os) throw Error(n(160));
          cs(i, o, l), (os = null), (ss = !1);
          var u = l.alternate;
          null !== u && (u.return = null), (l.return = null);
        } catch (e) {
          ku(l, t, e);
        }
      }
    if (12854 & t.subtreeFlags)
      for (t = t.child; null !== t; ) ps(t, e), (t = t.sibling);
  }
  function ps(e, t) {
    var r = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((fs(t, e), ms(e), 4 & a)) {
          try {
            Jo(3, e, e.return), es(3, e);
          } catch (t) {
            ku(e, e.return, t);
          }
          try {
            Jo(5, e, e.return);
          } catch (t) {
            ku(e, e.return, t);
          }
        }
        break;
      case 1:
        fs(t, e), ms(e), 512 & a && null !== r && Yo(r, r.return);
        break;
      case 5:
        if (
          (fs(t, e),
          ms(e),
          512 & a && null !== r && Yo(r, r.return),
          32 & e.flags)
        ) {
          var l = e.stateNode;
          try {
            ue(l, "");
          } catch (t) {
            ku(e, e.return, t);
          }
        }
        if (4 & a && null != (l = e.stateNode)) {
          var i = e.memoizedProps,
            o = null !== r ? r.memoizedProps : i,
            s = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), null !== u))
            try {
              "input" === s && "radio" === i.type && null != i.name && q(l, i),
                ge(s, o);
              var c = ge(s, i);
              for (o = 0; o < u.length; o += 2) {
                var d = u[o],
                  f = u[o + 1];
                "style" === d
                  ? pe(l, f)
                  : "dangerouslySetInnerHTML" === d
                  ? se(l, f)
                  : "children" === d
                  ? ue(l, f)
                  : g(l, d, f, c);
              }
              switch (s) {
                case "input":
                  K(l, i);
                  break;
                case "textarea":
                  ne(l, i);
                  break;
                case "select":
                  var p = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var m = i.value;
                  null != m
                    ? J(l, !!i.multiple, m, !1)
                    : p !== !!i.multiple &&
                      (null != i.defaultValue
                        ? J(l, !!i.multiple, i.defaultValue, !0)
                        : J(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[ca] = i;
            } catch (t) {
              ku(e, e.return, t);
            }
        }
        break;
      case 6:
        if ((fs(t, e), ms(e), 4 & a)) {
          if (null === e.stateNode) throw Error(n(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (t) {
            ku(e, e.return, t);
          }
        }
        break;
      case 3:
        if (
          (fs(t, e), ms(e), 4 & a && null !== r && r.memoizedState.isDehydrated)
        )
          try {
            At(t.containerInfo);
          } catch (t) {
            ku(e, e.return, t);
          }
        break;
      case 4:
        fs(t, e), ms(e);
        break;
      case 13:
        fs(t, e),
          ms(e),
          8192 & (l = e.child).flags &&
            ((i = null !== l.memoizedState),
            (l.stateNode.isHidden = i),
            !i ||
              (null !== l.alternate && null !== l.alternate.memoizedState) ||
              (Ds = Ke())),
          4 & a && ds(e);
        break;
      case 22:
        if (
          ((d = null !== r && null !== r.memoizedState),
          1 & e.mode ? ((Zo = (c = Zo) || d), fs(t, e), (Zo = c)) : fs(t, e),
          ms(e),
          8192 & a)
        ) {
          if (
            ((c = null !== e.memoizedState),
            (e.stateNode.isHidden = c) && !d && 1 & e.mode)
          )
            for (Ko = e, d = e.child; null !== d; ) {
              for (f = Ko = d; null !== Ko; ) {
                switch (((m = (p = Ko).child), p.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Jo(4, p, p.return);
                    break;
                  case 1:
                    Yo(p, p.return);
                    var h = p.stateNode;
                    if ("function" == typeof h.componentWillUnmount) {
                      (a = p), (r = p.return);
                      try {
                        (t = a),
                          (h.props = t.memoizedProps),
                          (h.state = t.memoizedState),
                          h.componentWillUnmount();
                      } catch (e) {
                        ku(a, r, e);
                      }
                    }
                    break;
                  case 5:
                    Yo(p, p.return);
                    break;
                  case 22:
                    if (null !== p.memoizedState) {
                      bs(f);
                      continue;
                    }
                }
                null !== m ? ((m.return = p), (Ko = m)) : bs(f);
              }
              d = d.sibling;
            }
          e: for (d = null, f = e; ; ) {
            if (5 === f.tag) {
              if (null === d) {
                d = f;
                try {
                  (l = f.stateNode),
                    c
                      ? "function" == typeof (i = l.style).setProperty
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none")
                      : ((s = f.stateNode),
                        (o =
                          null != (u = f.memoizedProps.style) &&
                          u.hasOwnProperty("display")
                            ? u.display
                            : null),
                        (s.style.display = fe("display", o)));
                } catch (t) {
                  ku(e, e.return, t);
                }
              }
            } else if (6 === f.tag) {
              if (null === d)
                try {
                  f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                } catch (t) {
                  ku(e, e.return, t);
                }
            } else if (
              ((22 !== f.tag && 23 !== f.tag) ||
                null === f.memoizedState ||
                f === e) &&
              null !== f.child
            ) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === e) break e;
            for (; null === f.sibling; ) {
              if (null === f.return || f.return === e) break e;
              d === f && (d = null), (f = f.return);
            }
            d === f && (d = null),
              (f.sibling.return = f.return),
              (f = f.sibling);
          }
        }
        break;
      case 19:
        fs(t, e), ms(e), 4 & a && ds(e);
        break;
      case 21:
        break;
      default:
        fs(t, e), ms(e);
    }
  }
  function ms(e) {
    var t = e.flags;
    if (2 & t) {
      try {
        e: {
          for (var r = e.return; null !== r; ) {
            if (rs(r)) {
              var a = r;
              break e;
            }
            r = r.return;
          }
          throw Error(n(160));
        }
        switch (a.tag) {
          case 5:
            var l = a.stateNode;
            32 & a.flags && (ue(l, ""), (a.flags &= -33)), is(e, as(e), l);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo;
            ls(e, as(e), i);
            break;
          default:
            throw Error(n(161));
        }
      } catch (t) {
        ku(e, e.return, t);
      }
      e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
  }
  function hs(e, t, n) {
    (Ko = e), gs(e);
  }
  function gs(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Ko; ) {
      var a = Ko,
        l = a.child;
      if (22 === a.tag && r) {
        var i = null !== a.memoizedState || Qo;
        if (!i) {
          var o = a.alternate,
            s = (null !== o && null !== o.memoizedState) || Zo;
          o = Qo;
          var u = Zo;
          if (((Qo = i), (Zo = s) && !u))
            for (Ko = a; null !== Ko; )
              (s = (i = Ko).child),
                22 === i.tag && null !== i.memoizedState
                  ? ys(a)
                  : null !== s
                  ? ((s.return = i), (Ko = s))
                  : ys(a);
          for (; null !== l; ) (Ko = l), gs(l), (l = l.sibling);
          (Ko = a), (Qo = o), (Zo = u);
        }
        vs(e);
      } else
        8772 & a.subtreeFlags && null !== l
          ? ((l.return = a), (Ko = l))
          : vs(e);
    }
  }
  function vs(e) {
    for (; null !== Ko; ) {
      var t = Ko;
      if (8772 & t.flags) {
        var r = t.alternate;
        try {
          if (8772 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Zo || es(5, t);
                break;
              case 1:
                var a = t.stateNode;
                if (4 & t.flags && !Zo)
                  if (null === r) a.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Ji(t.type, r.memoizedProps);
                    a.componentDidUpdate(
                      l,
                      r.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                null !== i && Bl(t, i, a);
                break;
              case 3:
                var o = t.updateQueue;
                if (null !== o) {
                  if (((r = null), null !== t.child))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Bl(t, o, r);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (null === r && 4 & t.flags) {
                  r = s;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      u.autoFocus && r.focus();
                      break;
                    case "img":
                      u.src && (r.src = u.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === t.memoizedState) {
                  var c = t.alternate;
                  if (null !== c) {
                    var d = c.memoizedState;
                    if (null !== d) {
                      var f = d.dehydrated;
                      null !== f && At(f);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(n(163));
            }
          Zo || (512 & t.flags && ts(t));
        } catch (e) {
          ku(t, t.return, e);
        }
      }
      if (t === e) {
        Ko = null;
        break;
      }
      if (null !== (r = t.sibling)) {
        (r.return = t.return), (Ko = r);
        break;
      }
      Ko = t.return;
    }
  }
  function bs(e) {
    for (; null !== Ko; ) {
      var t = Ko;
      if (t === e) {
        Ko = null;
        break;
      }
      var n = t.sibling;
      if (null !== n) {
        (n.return = t.return), (Ko = n);
        break;
      }
      Ko = t.return;
    }
  }
  function ys(e) {
    for (; null !== Ko; ) {
      var t = Ko;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              es(4, t);
            } catch (e) {
              ku(t, n, e);
            }
            break;
          case 1:
            var r = t.stateNode;
            if ("function" == typeof r.componentDidMount) {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (e) {
                ku(t, a, e);
              }
            }
            var l = t.return;
            try {
              ts(t);
            } catch (e) {
              ku(t, l, e);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ts(t);
            } catch (e) {
              ku(t, i, e);
            }
        }
      } catch (e) {
        ku(t, t.return, e);
      }
      if (t === e) {
        Ko = null;
        break;
      }
      var o = t.sibling;
      if (null !== o) {
        (o.return = t.return), (Ko = o);
        break;
      }
      Ko = t.return;
    }
  }
  var ws,
    ks = Math.ceil,
    xs = v.ReactCurrentDispatcher,
    Ls = v.ReactCurrentOwner,
    Ss = v.ReactCurrentBatchConfig,
    Cs = 0,
    _s = null,
    Es = null,
    zs = 0,
    js = 0,
    Ns = ka(0),
    Ps = 0,
    Ms = null,
    Ts = 0,
    Is = 0,
    Rs = 0,
    Fs = null,
    Os = null,
    Ds = 0,
    Us = 1 / 0,
    As = null,
    Bs = !1,
    Vs = null,
    $s = null,
    Ws = !1,
    Hs = null,
    Qs = 0,
    Zs = 0,
    qs = null,
    Ks = -1,
    Ys = 0;
  function Xs() {
    return 6 & Cs ? Ke() : -1 !== Ks ? Ks : (Ks = Ke());
  }
  function Gs(e) {
    return 1 & e.mode
      ? 2 & Cs && 0 !== zs
        ? zs & -zs
        : null !== pl.transition
        ? (0 === Ys && (Ys = pt()), Ys)
        : (0 !== (e = vt) ||
            (e = void 0 === (e = window.event) ? 16 : qt(e.type)),
          e)
      : 1;
  }
  function Js(e, t, r, a) {
    if (50 < Zs) throw ((Zs = 0), (qs = null), Error(n(185)));
    ht(e, r, a),
      (!(2 & Cs) || e !== _s) &&
        (e === _s && (!(2 & Cs) && (Is |= r), 4 === Ps && au(e, zs)),
        eu(e, a),
        1 === r &&
          0 === Cs &&
          !(1 & t.mode) &&
          ((Us = Ke() + 500), Oa && Aa()));
  }
  function eu(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          a = e.expirationTimes,
          l = e.pendingLanes;
        0 < l;

      ) {
        var i = 31 - at(l),
          o = 1 << i,
          s = a[i];
        -1 === s
          ? (!(o & n) || o & r) && (a[i] = dt(o, t))
          : s <= t && (e.expiredLanes |= o),
          (l &= ~o);
      }
    })(e, t);
    var r = ct(e, e === _s ? zs : 0);
    if (0 === r)
      null !== n && Qe(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((null != n && Qe(n), 1 === t))
        0 === e.tag
          ? (function (e) {
              (Oa = !0), Ua(e);
            })(lu.bind(null, e))
          : Ua(lu.bind(null, e)),
          ra(function () {
            !(6 & Cs) && Aa();
          }),
          (n = null);
      else {
        switch (bt(r)) {
          case 1:
            n = Xe;
            break;
          case 4:
            n = Ge;
            break;
          case 16:
            n = Je;
            break;
          case 536870912:
            n = tt;
            break;
          default:
            n = Je;
        }
        n = _u(n, tu.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function tu(e, t) {
    if (((Ks = -1), (Ys = 0), 6 & Cs)) throw Error(n(327));
    var r = e.callbackNode;
    if (yu() && e.callbackNode !== r) return null;
    var a = ct(e, e === _s ? zs : 0);
    if (0 === a) return null;
    if (30 & a || a & e.expiredLanes || t) t = pu(e, a);
    else {
      t = a;
      var l = Cs;
      Cs |= 2;
      var i = du();
      for (
        (_s !== e || zs !== t) && ((As = null), (Us = Ke() + 500), uu(e, t));
        ;

      )
        try {
          hu();
          break;
        } catch (t) {
          cu(e, t);
        }
      Sl(),
        (xs.current = i),
        (Cs = l),
        null !== Es ? (t = 0) : ((_s = null), (zs = 0), (t = Ps));
    }
    if (0 !== t) {
      if ((2 === t && 0 !== (l = ft(e)) && ((a = l), (t = nu(e, l))), 1 === t))
        throw ((r = Ms), uu(e, 0), au(e, a), eu(e, Ke()), r);
      if (6 === t) au(e, a);
      else {
        if (
          ((l = e.current.alternate),
          !(
            30 & a ||
            (function (e) {
              for (var t = e; ; ) {
                if (16384 & t.flags) {
                  var n = t.updateQueue;
                  if (null !== n && null !== (n = n.stores))
                    for (var r = 0; r < n.length; r++) {
                      var a = n[r],
                        l = a.getSnapshot;
                      a = a.value;
                      try {
                        if (!ar(l(), a)) return !1;
                      } catch {
                        return !1;
                      }
                    }
                }
                if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                  (n.return = t), (t = n);
                else {
                  if (t === e) break;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) return !0;
                    t = t.return;
                  }
                  (t.sibling.return = t.return), (t = t.sibling);
                }
              }
              return !0;
            })(l) ||
            ((t = pu(e, a)),
            2 === t && ((i = ft(e)), 0 !== i && ((a = i), (t = nu(e, i)))),
            1 !== t)
          ))
        )
          throw ((r = Ms), uu(e, 0), au(e, a), eu(e, Ke()), r);
        switch (((e.finishedWork = l), (e.finishedLanes = a), t)) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            bu(e, Os, As);
            break;
          case 3:
            if (
              (au(e, a), (130023424 & a) === a && 10 < (t = Ds + 500 - Ke()))
            ) {
              if (0 !== ct(e, 0)) break;
              if (((l = e.suspendedLanes) & a) !== a) {
                Xs(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = ea(bu.bind(null, e, Os, As), t);
              break;
            }
            bu(e, Os, As);
            break;
          case 4:
            if ((au(e, a), (4194240 & a) === a)) break;
            for (t = e.eventTimes, l = -1; 0 < a; ) {
              var o = 31 - at(a);
              (i = 1 << o), (o = t[o]) > l && (l = o), (a &= ~i);
            }
            if (
              ((a = l),
              10 <
                (a =
                  (120 > (a = Ke() - a)
                    ? 120
                    : 480 > a
                    ? 480
                    : 1080 > a
                    ? 1080
                    : 1920 > a
                    ? 1920
                    : 3e3 > a
                    ? 3e3
                    : 4320 > a
                    ? 4320
                    : 1960 * ks(a / 1960)) - a))
            ) {
              e.timeoutHandle = ea(bu.bind(null, e, Os, As), a);
              break;
            }
            bu(e, Os, As);
            break;
          case 5:
            bu(e, Os, As);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return eu(e, Ke()), e.callbackNode === r ? tu.bind(null, e) : null;
  }
  function nu(e, t) {
    var n = Fs;
    return (
      e.current.memoizedState.isDehydrated && (uu(e, t).flags |= 256),
      2 !== (e = pu(e, t)) && ((t = Os), (Os = n), null !== t && ru(t)),
      e
    );
  }
  function ru(e) {
    null === Os ? (Os = e) : Os.push.apply(Os, e);
  }
  function au(e, t) {
    for (
      t &= ~Rs,
        t &= ~Is,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - at(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function lu(e) {
    if (6 & Cs) throw Error(n(327));
    yu();
    var t = ct(e, 0);
    if (!(1 & t)) return eu(e, Ke()), null;
    var r = pu(e, t);
    if (0 !== e.tag && 2 === r) {
      var a = ft(e);
      0 !== a && ((t = a), (r = nu(e, a)));
    }
    if (1 === r) throw ((r = Ms), uu(e, 0), au(e, t), eu(e, Ke()), r);
    if (6 === r) throw Error(n(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      bu(e, Os, As),
      eu(e, Ke()),
      null
    );
  }
  function iu(e, t) {
    var n = Cs;
    Cs |= 1;
    try {
      return e(t);
    } finally {
      0 === (Cs = n) && ((Us = Ke() + 500), Oa && Aa());
    }
  }
  function ou(e) {
    null !== Hs && 0 === Hs.tag && !(6 & Cs) && yu();
    var t = Cs;
    Cs |= 1;
    var n = Ss.transition,
      r = vt;
    try {
      if (((Ss.transition = null), (vt = 1), e)) return e();
    } finally {
      (vt = r), (Ss.transition = n), !(6 & (Cs = t)) && Aa();
    }
  }
  function su() {
    (js = Ns.current), xa(Ns);
  }
  function uu(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), ta(n)), null !== Es))
      for (n = Es.return; null !== n; ) {
        var r = n;
        switch ((Ja(r), r.tag)) {
          case 1:
            null != (r = r.type.childContextTypes) && Na();
            break;
          case 3:
            ql(), xa(_a), xa(Ca), ei();
            break;
          case 5:
            Yl(r);
            break;
          case 4:
            ql();
            break;
          case 13:
            xa(Xl);
            break;
          case 19:
            xa(Xl);
            break;
          case 10:
            Cl(r.type._context);
            break;
          case 22:
          case 23:
            su();
        }
        n = n.return;
      }
    if (
      ((_s = e),
      (Es = e = Pu(e.current, null)),
      (zs = js = t),
      (Ps = 0),
      (Ms = null),
      (Rs = Is = Ts = 0),
      (Os = Fs = null),
      null !== jl)
    ) {
      for (t = 0; t < jl.length; t++)
        if (null !== (r = (n = jl[t]).interleaved)) {
          n.interleaved = null;
          var a = r.next,
            l = n.pending;
          if (null !== l) {
            var i = l.next;
            (l.next = a), (r.next = i);
          }
          n.pending = r;
        }
      jl = null;
    }
    return e;
  }
  function cu(e, t) {
    for (;;) {
      var r = Es;
      try {
        if ((Sl(), (ti.current = Ki), oi)) {
          for (var a = ai.memoizedState; null !== a; ) {
            var l = a.queue;
            null !== l && (l.pending = null), (a = a.next);
          }
          oi = !1;
        }
        if (
          ((ri = 0),
          (ii = li = ai = null),
          (si = !1),
          (ui = 0),
          (Ls.current = null),
          null === r || null === r.return)
        ) {
          (Ps = 1), (Ms = t), (Es = null);
          break;
        }
        e: {
          var i = e,
            o = r.return,
            s = r,
            u = t;
          if (
            ((t = zs),
            (s.flags |= 32768),
            null !== u && "object" == typeof u && "function" == typeof u.then)
          ) {
            var c = u,
              d = s,
              f = d.tag;
            if (!(1 & d.mode || (0 !== f && 11 !== f && 15 !== f))) {
              var p = d.alternate;
              p
                ? ((d.updateQueue = p.updateQueue),
                  (d.memoizedState = p.memoizedState),
                  (d.lanes = p.lanes))
                : ((d.updateQueue = null), (d.memoizedState = null));
            }
            var m = mo(o);
            if (null !== m) {
              (m.flags &= -257),
                ho(m, o, s, 0, t),
                1 & m.mode && po(i, c, t),
                (u = c);
              var h = (t = m).updateQueue;
              if (null === h) {
                var g = new Set();
                g.add(u), (t.updateQueue = g);
              } else h.add(u);
              break e;
            }
            if (!(1 & t)) {
              po(i, c, t), fu();
              break e;
            }
            u = Error(n(426));
          } else if (nl && 1 & s.mode) {
            var v = mo(o);
            if (null !== v) {
              !(65536 & v.flags) && (v.flags |= 256),
                ho(v, o, s, 0, t),
                fl(io(u, s));
              break e;
            }
          }
          (i = u = io(u, s)),
            4 !== Ps && (Ps = 2),
            null === Fs ? (Fs = [i]) : Fs.push(i),
            (i = o);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536),
                  (t &= -t),
                  (i.lanes |= t),
                  Ul(i, co(0, u, t));
                break e;
              case 1:
                s = u;
                var b = i.type,
                  y = i.stateNode;
                if (
                  !(
                    128 & i.flags ||
                    ("function" != typeof b.getDerivedStateFromError &&
                      (null === y ||
                        "function" != typeof y.componentDidCatch ||
                        (null !== $s && $s.has(y))))
                  )
                ) {
                  (i.flags |= 65536),
                    (t &= -t),
                    (i.lanes |= t),
                    Ul(i, fo(i, s, t));
                  break e;
                }
            }
            i = i.return;
          } while (null !== i);
        }
        vu(r);
      } catch (e) {
        (t = e), Es === r && null !== r && (Es = r = r.return);
        continue;
      }
      break;
    }
  }
  function du() {
    var e = xs.current;
    return (xs.current = Ki), null === e ? Ki : e;
  }
  function fu() {
    (0 === Ps || 3 === Ps || 2 === Ps) && (Ps = 4),
      null === _s || (!(268435455 & Ts) && !(268435455 & Is)) || au(_s, zs);
  }
  function pu(e, t) {
    var r = Cs;
    Cs |= 2;
    var a = du();
    for ((_s !== e || zs !== t) && ((As = null), uu(e, t)); ; )
      try {
        mu();
        break;
      } catch (t) {
        cu(e, t);
      }
    if ((Sl(), (Cs = r), (xs.current = a), null !== Es)) throw Error(n(261));
    return (_s = null), (zs = 0), Ps;
  }
  function mu() {
    for (; null !== Es; ) gu(Es);
  }
  function hu() {
    for (; null !== Es && !Ze(); ) gu(Es);
  }
  function gu(e) {
    var t = ws(e.alternate, e, js);
    (e.memoizedProps = e.pendingProps),
      null === t ? vu(e) : (Es = t),
      (Ls.current = null);
  }
  function vu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), 32768 & t.flags)) {
        if (null !== (n = Ho(n, t))) return (n.flags &= 32767), void (Es = n);
        if (null === e) return (Ps = 6), void (Es = null);
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      } else if (null !== (n = Wo(n, t, js))) return void (Es = n);
      if (null !== (t = t.sibling)) return void (Es = t);
      Es = t = e;
    } while (null !== t);
    0 === Ps && (Ps = 5);
  }
  function bu(e, t, r) {
    var a = vt,
      l = Ss.transition;
    try {
      (Ss.transition = null),
        (vt = 1),
        (function (e, t, r, a) {
          do {
            yu();
          } while (null !== Hs);
          if (6 & Cs) throw Error(n(327));
          r = e.finishedWork;
          var l = e.finishedLanes;
          if (null === r) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
            throw Error(n(177));
          (e.callbackNode = null), (e.callbackPriority = 0);
          var i = r.lanes | r.childLanes;
          if (
            ((function (e, t) {
              var n = e.pendingLanes & ~t;
              (e.pendingLanes = t),
                (e.suspendedLanes = 0),
                (e.pingedLanes = 0),
                (e.expiredLanes &= t),
                (e.mutableReadLanes &= t),
                (e.entangledLanes &= t),
                (t = e.entanglements);
              var r = e.eventTimes;
              for (e = e.expirationTimes; 0 < n; ) {
                var a = 31 - at(n),
                  l = 1 << a;
                (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
              }
            })(e, i),
            e === _s && ((Es = _s = null), (zs = 0)),
            (!(2064 & r.subtreeFlags) && !(2064 & r.flags)) ||
              Ws ||
              ((Ws = !0),
              _u(Je, function () {
                return yu(), null;
              })),
            (i = 0 != (15990 & r.flags)),
            15990 & r.subtreeFlags || i)
          ) {
            (i = Ss.transition), (Ss.transition = null);
            var o = vt;
            vt = 1;
            var s = Cs;
            (Cs |= 4),
              (Ls.current = null),
              (function (e, t) {
                if (((Xr = Vt), cr((e = ur())))) {
                  if ("selectionStart" in e)
                    var r = { start: e.selectionStart, end: e.selectionEnd };
                  else
                    e: {
                      var a =
                        (r = ((r = e.ownerDocument) && r.defaultView) || window)
                          .getSelection && r.getSelection();
                      if (a && 0 !== a.rangeCount) {
                        r = a.anchorNode;
                        var l = a.anchorOffset,
                          i = a.focusNode;
                        a = a.focusOffset;
                        try {
                          r.nodeType, i.nodeType;
                        } catch {
                          r = null;
                          break e;
                        }
                        var o = 0,
                          s = -1,
                          u = -1,
                          c = 0,
                          d = 0,
                          f = e,
                          p = null;
                        t: for (;;) {
                          for (
                            var m;
                            f !== r ||
                              (0 !== l && 3 !== f.nodeType) ||
                              (s = o + l),
                              f !== i ||
                                (0 !== a && 3 !== f.nodeType) ||
                                (u = o + a),
                              3 === f.nodeType && (o += f.nodeValue.length),
                              null !== (m = f.firstChild);

                          )
                            (p = f), (f = m);
                          for (;;) {
                            if (f === e) break t;
                            if (
                              (p === r && ++c === l && (s = o),
                              p === i && ++d === a && (u = o),
                              null !== (m = f.nextSibling))
                            )
                              break;
                            p = (f = p).parentNode;
                          }
                          f = m;
                        }
                        r = -1 === s || -1 === u ? null : { start: s, end: u };
                      } else r = null;
                    }
                  r = r || { start: 0, end: 0 };
                } else r = null;
                for (
                  Gr = { focusedElem: e, selectionRange: r }, Vt = !1, Ko = t;
                  null !== Ko;

                )
                  if (
                    ((e = (t = Ko).child),
                    0 != (1028 & t.subtreeFlags) && null !== e)
                  )
                    (e.return = t), (Ko = e);
                  else
                    for (; null !== Ko; ) {
                      t = Ko;
                      try {
                        var h = t.alternate;
                        if (1024 & t.flags)
                          switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                              break;
                            case 1:
                              if (null !== h) {
                                var g = h.memoizedProps,
                                  v = h.memoizedState,
                                  b = t.stateNode,
                                  y = b.getSnapshotBeforeUpdate(
                                    t.elementType === t.type
                                      ? g
                                      : Ji(t.type, g),
                                    v
                                  );
                                b.__reactInternalSnapshotBeforeUpdate = y;
                              }
                              break;
                            case 3:
                              var w = t.stateNode.containerInfo;
                              1 === w.nodeType
                                ? (w.textContent = "")
                                : 9 === w.nodeType &&
                                  w.documentElement &&
                                  w.removeChild(w.documentElement);
                              break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                              break;
                            default:
                              throw Error(n(163));
                          }
                      } catch (e) {
                        ku(t, t.return, e);
                      }
                      if (null !== (e = t.sibling)) {
                        (e.return = t.return), (Ko = e);
                        break;
                      }
                      Ko = t.return;
                    }
                (h = Go), (Go = !1);
              })(e, r),
              ps(r, e),
              dr(Gr),
              (Vt = !!Xr),
              (Gr = Xr = null),
              (e.current = r),
              hs(r),
              qe(),
              (Cs = s),
              (vt = o),
              (Ss.transition = i);
          } else e.current = r;
          if (
            (Ws && ((Ws = !1), (Hs = e), (Qs = l)),
            0 === (i = e.pendingLanes) && ($s = null),
            (function (e) {
              if (rt && "function" == typeof rt.onCommitFiberRoot)
                try {
                  rt.onCommitFiberRoot(
                    nt,
                    e,
                    void 0,
                    128 == (128 & e.current.flags)
                  );
                } catch {}
            })(r.stateNode),
            eu(e, Ke()),
            null !== t)
          )
            for (a = e.onRecoverableError, r = 0; r < t.length; r++)
              (l = t[r]),
                a(l.value, { componentStack: l.stack, digest: l.digest });
          if (Bs) throw ((Bs = !1), (e = Vs), (Vs = null), e);
          1 & Qs && 0 !== e.tag && yu(),
            1 & (i = e.pendingLanes)
              ? e === qs
                ? Zs++
                : ((Zs = 0), (qs = e))
              : (Zs = 0),
            Aa();
        })(e, t, r, a);
    } finally {
      (Ss.transition = l), (vt = a);
    }
    return null;
  }
  function yu() {
    if (null !== Hs) {
      var e = bt(Qs),
        t = Ss.transition,
        r = vt;
      try {
        if (((Ss.transition = null), (vt = 16 > e ? 16 : e), null === Hs))
          var a = !1;
        else {
          if (((e = Hs), (Hs = null), (Qs = 0), 6 & Cs)) throw Error(n(331));
          var l = Cs;
          for (Cs |= 4, Ko = e.current; null !== Ko; ) {
            var i = Ko,
              o = i.child;
            if (16 & Ko.flags) {
              var s = i.deletions;
              if (null !== s) {
                for (var u = 0; u < s.length; u++) {
                  var c = s[u];
                  for (Ko = c; null !== Ko; ) {
                    var d = Ko;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jo(8, d, i);
                    }
                    var f = d.child;
                    if (null !== f) (f.return = d), (Ko = f);
                    else
                      for (; null !== Ko; ) {
                        var p = (d = Ko).sibling,
                          m = d.return;
                        if ((ns(d), d === c)) {
                          Ko = null;
                          break;
                        }
                        if (null !== p) {
                          (p.return = m), (Ko = p);
                          break;
                        }
                        Ko = m;
                      }
                  }
                }
                var h = i.alternate;
                if (null !== h) {
                  var g = h.child;
                  if (null !== g) {
                    h.child = null;
                    do {
                      var v = g.sibling;
                      (g.sibling = null), (g = v);
                    } while (null !== g);
                  }
                }
                Ko = i;
              }
            }
            if (2064 & i.subtreeFlags && null !== o) (o.return = i), (Ko = o);
            else
              e: for (; null !== Ko; ) {
                if (2048 & (i = Ko).flags)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jo(9, i, i.return);
                  }
                var b = i.sibling;
                if (null !== b) {
                  (b.return = i.return), (Ko = b);
                  break e;
                }
                Ko = i.return;
              }
          }
          var y = e.current;
          for (Ko = y; null !== Ko; ) {
            var w = (o = Ko).child;
            if (2064 & o.subtreeFlags && null !== w) (w.return = o), (Ko = w);
            else
              e: for (o = y; null !== Ko; ) {
                if (2048 & (s = Ko).flags)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        es(9, s);
                    }
                  } catch (e) {
                    ku(s, s.return, e);
                  }
                if (s === o) {
                  Ko = null;
                  break e;
                }
                var k = s.sibling;
                if (null !== k) {
                  (k.return = s.return), (Ko = k);
                  break e;
                }
                Ko = s.return;
              }
          }
          if (
            ((Cs = l),
            Aa(),
            rt && "function" == typeof rt.onPostCommitFiberRoot)
          )
            try {
              rt.onPostCommitFiberRoot(nt, e);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        (vt = r), (Ss.transition = t);
      }
    }
    return !1;
  }
  function wu(e, t, n) {
    (e = Ol(e, (t = co(0, (t = io(n, t)), 1)), 1)),
      (t = Xs()),
      null !== e && (ht(e, 1, t), eu(e, t));
  }
  function ku(e, t, n) {
    if (3 === e.tag) wu(e, e, n);
    else
      for (; null !== t; ) {
        if (3 === t.tag) {
          wu(t, e, n);
          break;
        }
        if (1 === t.tag) {
          var r = t.stateNode;
          if (
            "function" == typeof t.type.getDerivedStateFromError ||
            ("function" == typeof r.componentDidCatch &&
              (null === $s || !$s.has(r)))
          ) {
            (t = Ol(t, (e = fo(t, (e = io(n, e)), 1)), 1)),
              (e = Xs()),
              null !== t && (ht(t, 1, e), eu(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function xu(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
      (t = Xs()),
      (e.pingedLanes |= e.suspendedLanes & n),
      _s === e &&
        (zs & n) === n &&
        (4 === Ps || (3 === Ps && (130023424 & zs) === zs && 500 > Ke() - Ds)
          ? uu(e, 0)
          : (Rs |= n)),
      eu(e, t);
  }
  function Lu(e, t) {
    0 === t &&
      (1 & e.mode
        ? ((t = st), !(130023424 & (st <<= 1)) && (st = 4194304))
        : (t = 1));
    var n = Xs();
    null !== (e = Ml(e, t)) && (ht(e, t, n), eu(e, n));
  }
  function Su(e) {
    var t = e.memoizedState,
      n = 0;
    null !== t && (n = t.retryLane), Lu(e, n);
  }
  function Cu(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          l = e.memoizedState;
        null !== l && (r = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    null !== a && a.delete(t), Lu(e, r);
  }
  function _u(e, t) {
    return He(e, t);
  }
  function Eu(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function zu(e, t, n, r) {
    return new Eu(e, t, n, r);
  }
  function ju(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
  }
  function Pu(e, t) {
    var n = e.alternate;
    return (
      null === n
        ? (((n = zu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = 14680064 & e.flags),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Mu(e, t, r, a, l, i) {
    var o = 2;
    if (((a = e), "function" == typeof e)) ju(e) && (o = 1);
    else if ("string" == typeof e) o = 5;
    else
      e: switch (e) {
        case w:
          return Tu(r.children, l, i, t);
        case k:
          (o = 8), (l |= 8);
          break;
        case x:
          return ((e = zu(12, r, t, 2 | l)).elementType = x), (e.lanes = i), e;
        case _:
          return ((e = zu(13, r, t, l)).elementType = _), (e.lanes = i), e;
        case E:
          return ((e = zu(19, r, t, l)).elementType = E), (e.lanes = i), e;
        case N:
          return Iu(r, l, i, t);
        default:
          if ("object" == typeof e && null !== e)
            switch (e.$$typeof) {
              case L:
                o = 10;
                break e;
              case S:
                o = 9;
                break e;
              case C:
                o = 11;
                break e;
              case z:
                o = 14;
                break e;
              case j:
                (o = 16), (a = null);
                break e;
            }
          throw Error(n(130, null == e ? e : typeof e, ""));
      }
    return (
      ((t = zu(o, r, t, l)).elementType = e), (t.type = a), (t.lanes = i), t
    );
  }
  function Tu(e, t, n, r) {
    return ((e = zu(7, e, r, t)).lanes = n), e;
  }
  function Iu(e, t, n, r) {
    return (
      ((e = zu(22, e, r, t)).elementType = N),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ru(e, t, n) {
    return ((e = zu(6, e, null, t)).lanes = n), e;
  }
  function Fu(e, t, n) {
    return (
      ((t = zu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Ou(e, t, n, r, a) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = mt(0)),
      (this.expirationTimes = mt(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = mt(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Du(e, t, n, r, a, l, i, o, s) {
    return (
      (e = new Ou(e, t, n, o, s)),
      1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
      (l = zu(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Il(l),
      e
    );
  }
  function Uu(e, t, n) {
    var r =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: y,
      key: null == r ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Au(e) {
    if (!e) return Sa;
    e: {
      if (Ae((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(n(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ja(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (null !== t);
      throw Error(n(171));
    }
    if (1 === e.tag) {
      var r = e.type;
      if (ja(r)) return Ta(e, r, t);
    }
    return t;
  }
  function Bu(e, t, n, r, a, l, i, o, s) {
    return (
      ((e = Du(n, r, !0, e, 0, l, 0, o, s)).context = Au(null)),
      (n = e.current),
      ((l = Fl((r = Xs()), (a = Gs(n)))).callback = t ?? null),
      Ol(n, l, a),
      (e.current.lanes = a),
      ht(e, a, r),
      eu(e, r),
      e
    );
  }
  function Vu(e, t, n, r) {
    var a = t.current,
      l = Xs(),
      i = Gs(a);
    return (
      (n = Au(n)),
      null === t.context ? (t.context = n) : (t.pendingContext = n),
      ((t = Fl(l, i)).payload = { element: e }),
      null !== (r = void 0 === r ? null : r) && (t.callback = r),
      null !== (e = Ol(a, t, i)) && (Js(e, a, i, l), Dl(e, a, i)),
      i
    );
  }
  function $u(e) {
    if (!(e = e.current).child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Wu(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
      var n = e.retryLane;
      e.retryLane = 0 !== n && n < t ? n : t;
    }
  }
  function Hu(e, t) {
    Wu(e, t), (e = e.alternate) && Wu(e, t);
  }
  ws = function (e, t, r) {
    if (null !== e)
      if (e.memoizedProps !== t.pendingProps || _a.current) vo = !0;
      else {
        if (!(e.lanes & r || 128 & t.flags))
          return (
            (vo = !1),
            (function (e, t, n) {
              switch (t.tag) {
                case 3:
                  Eo(t), dl();
                  break;
                case 5:
                  Kl(t);
                  break;
                case 1:
                  ja(t.type) && Ia(t);
                  break;
                case 4:
                  Zl(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  var r = t.type._context,
                    a = t.memoizedProps.value;
                  La(wl, r._currentValue), (r._currentValue = a);
                  break;
                case 13:
                  if (null !== (r = t.memoizedState))
                    return null !== r.dehydrated
                      ? (La(Xl, 1 & Xl.current), (t.flags |= 128), null)
                      : n & t.child.childLanes
                      ? Io(e, t, n)
                      : (La(Xl, 1 & Xl.current),
                        null !== (e = Bo(e, t, n)) ? e.sibling : null);
                  La(Xl, 1 & Xl.current);
                  break;
                case 19:
                  if (((r = 0 != (n & t.childLanes)), 128 & e.flags)) {
                    if (r) return Uo(e, t, n);
                    t.flags |= 128;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    La(Xl, Xl.current),
                    r)
                  )
                    break;
                  return null;
                case 22:
                case 23:
                  return (t.lanes = 0), xo(e, t, n);
              }
              return Bo(e, t, n);
            })(e, t, r)
          );
        vo = !!(131072 & e.flags);
      }
    else (vo = !1), nl && 1048576 & t.flags && Xa(t, Wa, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var a = t.type;
        Ao(e, t), (e = t.pendingProps);
        var l = za(t, Ca.current);
        El(t, r), (l = pi(null, t, a, e, l, r));
        var i = mi();
        return (
          (t.flags |= 1),
          "object" == typeof l &&
          null !== l &&
          "function" == typeof l.render &&
          void 0 === l.$$typeof
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ja(a) ? ((i = !0), Ia(t)) : (i = !1),
              (t.memoizedState =
                null !== l.state && void 0 !== l.state ? l.state : null),
              Il(t),
              (l.updater = to),
              (t.stateNode = l),
              (l._reactInternals = t),
              lo(t, a, e, r),
              (t = _o(null, t, a, !0, i, r)))
            : ((t.tag = 0), nl && i && Ga(t), bo(null, t, l, r), (t = t.child)),
          t
        );
      case 16:
        a = t.elementType;
        e: {
          switch (
            (Ao(e, t),
            (e = t.pendingProps),
            (a = (l = a._init)(a._payload)),
            (t.type = a),
            (l = t.tag =
              (function (e) {
                if ("function" == typeof e) return ju(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === C) return 11;
                  if (e === z) return 14;
                }
                return 2;
              })(a)),
            (e = Ji(a, e)),
            l)
          ) {
            case 0:
              t = So(null, t, a, e, r);
              break e;
            case 1:
              t = Co(null, t, a, e, r);
              break e;
            case 11:
              t = yo(null, t, a, e, r);
              break e;
            case 14:
              t = wo(null, t, a, Ji(a.type, e), r);
              break e;
          }
          throw Error(n(306, a, ""));
        }
        return t;
      case 0:
        return (
          (a = t.type),
          (l = t.pendingProps),
          So(e, t, a, (l = t.elementType === a ? l : Ji(a, l)), r)
        );
      case 1:
        return (
          (a = t.type),
          (l = t.pendingProps),
          Co(e, t, a, (l = t.elementType === a ? l : Ji(a, l)), r)
        );
      case 3:
        e: {
          if ((Eo(t), null === e)) throw Error(n(387));
          (a = t.pendingProps),
            (l = (i = t.memoizedState).element),
            Rl(e, t),
            Al(t, a, null, r);
          var o = t.memoizedState;
          if (((a = o.element), i.isDehydrated)) {
            if (
              ((i = {
                element: a,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              256 & t.flags)
            ) {
              t = zo(e, t, a, r, (l = io(Error(n(423)), t)));
              break e;
            }
            if (a !== l) {
              t = zo(e, t, a, r, (l = io(Error(n(424)), t)));
              break e;
            }
            for (
              tl = ia(t.stateNode.containerInfo.firstChild),
                el = t,
                nl = !0,
                rl = null,
                r = yl(t, null, a, r),
                t.child = r;
              r;

            )
              (r.flags = (-3 & r.flags) | 4096), (r = r.sibling);
          } else {
            if ((dl(), a === l)) {
              t = Bo(e, t, r);
              break e;
            }
            bo(e, t, a, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Kl(t),
          null === e && ol(t),
          (a = t.type),
          (l = t.pendingProps),
          (i = null !== e ? e.memoizedProps : null),
          (o = l.children),
          Jr(a, l) ? (o = null) : null !== i && Jr(a, i) && (t.flags |= 32),
          Lo(e, t),
          bo(e, t, o, r),
          t.child
        );
      case 6:
        return null === e && ol(t), null;
      case 13:
        return Io(e, t, r);
      case 4:
        return (
          Zl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          null === e ? (t.child = bl(t, null, a, r)) : bo(e, t, a, r),
          t.child
        );
      case 11:
        return (
          (a = t.type),
          (l = t.pendingProps),
          yo(e, t, a, (l = t.elementType === a ? l : Ji(a, l)), r)
        );
      case 7:
        return bo(e, t, t.pendingProps, r), t.child;
      case 8:
        return bo(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return bo(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((a = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            La(wl, a._currentValue),
            (a._currentValue = o),
            null !== i)
          )
            if (ar(i.value, o)) {
              if (i.children === l.children && !_a.current) {
                t = Bo(e, t, r);
                break e;
              }
            } else
              for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                var s = i.dependencies;
                if (null !== s) {
                  o = i.child;
                  for (var u = s.firstContext; null !== u; ) {
                    if (u.context === a) {
                      if (1 === i.tag) {
                        (u = Fl(-1, r & -r)).tag = 2;
                        var c = i.updateQueue;
                        if (null !== c) {
                          var d = (c = c.shared).pending;
                          null === d
                            ? (u.next = u)
                            : ((u.next = d.next), (d.next = u)),
                            (c.pending = u);
                        }
                      }
                      (i.lanes |= r),
                        null !== (u = i.alternate) && (u.lanes |= r),
                        _l(i.return, r, t),
                        (s.lanes |= r);
                      break;
                    }
                    u = u.next;
                  }
                } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
                else if (18 === i.tag) {
                  if (null === (o = i.return)) throw Error(n(341));
                  (o.lanes |= r),
                    null !== (s = o.alternate) && (s.lanes |= r),
                    _l(o, r, t),
                    (o = i.sibling);
                } else o = i.child;
                if (null !== o) o.return = i;
                else
                  for (o = i; null !== o; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (null !== (i = o.sibling)) {
                      (i.return = o.return), (o = i);
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          bo(e, t, l.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (a = t.pendingProps.children),
          El(t, r),
          (a = a((l = zl(l)))),
          (t.flags |= 1),
          bo(e, t, a, r),
          t.child
        );
      case 14:
        return (
          (l = Ji((a = t.type), t.pendingProps)),
          wo(e, t, a, (l = Ji(a.type, l)), r)
        );
      case 15:
        return ko(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (a = t.type),
          (l = t.pendingProps),
          (l = t.elementType === a ? l : Ji(a, l)),
          Ao(e, t),
          (t.tag = 1),
          ja(a) ? ((e = !0), Ia(t)) : (e = !1),
          El(t, r),
          ro(t, a, l),
          lo(t, a, l, r),
          _o(null, t, a, !0, e, r)
        );
      case 19:
        return Uo(e, t, r);
      case 22:
        return xo(e, t, r);
    }
    throw Error(n(156, t.tag));
  };
  var Qu = "function" == typeof reportError ? reportError : function (e) {};
  function Zu(e) {
    this._internalRoot = e;
  }
  function qu(e) {
    this._internalRoot = e;
  }
  function Ku(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
  }
  function Yu(e) {
    return !(
      !e ||
      (1 !== e.nodeType &&
        9 !== e.nodeType &&
        11 !== e.nodeType &&
        (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    );
  }
  function Xu() {}
  function Gu(e, t, n, r, a) {
    var l = n._reactRootContainer;
    if (l) {
      var i = l;
      if ("function" == typeof a) {
        var o = a;
        a = function () {
          var e = $u(i);
          o.call(e);
        };
      }
      Vu(t, i, e, a);
    } else
      i = (function (e, t, n, r, a) {
        if (a) {
          if ("function" == typeof r) {
            var l = r;
            r = function () {
              var e = $u(i);
              l.call(e);
            };
          }
          var i = Bu(t, r, e, 0, null, !1, 0, "", Xu);
          return (
            (e._reactRootContainer = i),
            (e[da] = i.current),
            Ur(8 === e.nodeType ? e.parentNode : e),
            ou(),
            i
          );
        }
        for (; (a = e.lastChild); ) e.removeChild(a);
        if ("function" == typeof r) {
          var o = r;
          r = function () {
            var e = $u(s);
            o.call(e);
          };
        }
        var s = Du(e, 0, !1, null, 0, !1, 0, "", Xu);
        return (
          (e._reactRootContainer = s),
          (e[da] = s.current),
          Ur(8 === e.nodeType ? e.parentNode : e),
          ou(function () {
            Vu(t, s, n, r);
          }),
          s
        );
      })(n, t, e, a, r);
    return $u(i);
  }
  (qu.prototype.render = Zu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (null === t) throw Error(n(409));
      Vu(e, t, null, null);
    }),
    (qu.prototype.unmount = Zu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ou(function () {
            Vu(null, e, null, null);
          }),
            (t[da] = null);
        }
      }),
    (qu.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = xt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Pt.length && 0 !== t && t < Pt[n].priority; n++);
        Pt.splice(n, 0, e), 0 === n && Rt(e);
      }
    }),
    (yt = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = ut(t.pendingLanes);
            0 !== n &&
              (gt(t, 1 | n),
              eu(t, Ke()),
              !(6 & Cs) && ((Us = Ke() + 500), Aa()));
          }
          break;
        case 13:
          ou(function () {
            var t = Ml(e, 1);
            if (null !== t) {
              var n = Xs();
              Js(t, e, 1, n);
            }
          }),
            Hu(e, 1);
      }
    }),
    (wt = function (e) {
      if (13 === e.tag) {
        var t = Ml(e, 134217728);
        if (null !== t) Js(t, e, 134217728, Xs());
        Hu(e, 134217728);
      }
    }),
    (kt = function (e) {
      if (13 === e.tag) {
        var t = Gs(e),
          n = Ml(e, t);
        if (null !== n) Js(n, e, t, Xs());
        Hu(e, t);
      }
    }),
    (xt = function () {
      return vt;
    }),
    (Lt = function (e, t) {
      var n = vt;
      try {
        return (vt = e), t();
      } finally {
        vt = n;
      }
    }),
    (ye = function (e, t, r) {
      switch (t) {
        case "input":
          if ((K(e, r), (t = r.name), "radio" === r.type && null != t)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var a = r[t];
              if (a !== e && a.form === e.form) {
                var l = ba(a);
                if (!l) throw Error(n(90));
                W(a), K(a, l);
              }
            }
          }
          break;
        case "textarea":
          ne(e, r);
          break;
        case "select":
          null != (t = r.value) && J(e, !!r.multiple, t, !1);
      }
    }),
    (Ce = iu),
    (_e = ou);
  var Ju = { usingClientEntryPoint: !1, Events: [ga, va, ba, Le, Se, iu] },
    ec = {
      findFiberByHostInstance: ha,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    tc = {
      bundleType: ec.bundleType,
      version: ec.version,
      rendererPackageName: ec.rendererPackageName,
      rendererConfig: ec.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: v.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return null === (e = $e(e)) ? null : e.stateNode;
      },
      findFiberByHostInstance: ec.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nc.isDisabled && nc.supportsFiber)
      try {
        (nt = nc.inject(tc)), (rt = nc);
      } catch {}
  }
  return (
    (Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ju),
    (Ue.createPortal = function (e, t) {
      var r =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Ku(t)) throw Error(n(200));
      return Uu(e, t, null, r);
    }),
    (Ue.createRoot = function (e, t) {
      if (!Ku(e)) throw Error(n(299));
      var r = !1,
        a = "",
        l = Qu;
      return (
        null != t &&
          (!0 === t.unstable_strictMode && (r = !0),
          void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
          void 0 !== t.onRecoverableError && (l = t.onRecoverableError)),
        (t = Du(e, 1, !1, null, 0, r, 0, a, l)),
        (e[da] = t.current),
        Ur(8 === e.nodeType ? e.parentNode : e),
        new Zu(t)
      );
    }),
    (Ue.findDOMNode = function (e) {
      if (null == e) return null;
      if (1 === e.nodeType) return e;
      var t = e._reactInternals;
      if (void 0 === t)
        throw "function" == typeof e.render
          ? Error(n(188))
          : ((e = Object.keys(e).join(",")), Error(n(268, e)));
      return (e = null === (e = $e(t)) ? null : e.stateNode);
    }),
    (Ue.flushSync = function (e) {
      return ou(e);
    }),
    (Ue.hydrate = function (e, t, r) {
      if (!Yu(t)) throw Error(n(200));
      return Gu(null, e, t, !0, r);
    }),
    (Ue.hydrateRoot = function (e, t, r) {
      if (!Ku(e)) throw Error(n(405));
      var a = (null != r && r.hydratedSources) || null,
        l = !1,
        i = "",
        o = Qu;
      if (
        (null != r &&
          (!0 === r.unstable_strictMode && (l = !0),
          void 0 !== r.identifierPrefix && (i = r.identifierPrefix),
          void 0 !== r.onRecoverableError && (o = r.onRecoverableError)),
        (t = Bu(t, null, e, 1, r ?? null, l, 0, i, o)),
        (e[da] = t.current),
        Ur(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          (l = (l = (r = a[e])._getVersion)(r._source)),
            null == t.mutableSourceEagerHydrationData
              ? (t.mutableSourceEagerHydrationData = [r, l])
              : t.mutableSourceEagerHydrationData.push(r, l);
      return new qu(t);
    }),
    (Ue.render = function (e, t, r) {
      if (!Yu(t)) throw Error(n(200));
      return Gu(null, e, t, !1, r);
    }),
    (Ue.unmountComponentAtNode = function (e) {
      if (!Yu(e)) throw Error(n(40));
      return (
        !!e._reactRootContainer &&
        (ou(function () {
          Gu(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[da] = null);
          });
        }),
        !0)
      );
    }),
    (Ue.unstable_batchedUpdates = iu),
    (Ue.unstable_renderSubtreeIntoContainer = function (e, t, r, a) {
      if (!Yu(r)) throw Error(n(200));
      if (null == e || void 0 === e._reactInternals) throw Error(n(38));
      return Gu(e, t, r, !1, a);
    }),
    (Ue.version = "18.3.1-next-f1338f8080-20240426"),
    Ue
  );
}
function F1() {
  if (za) return Eu.exports;
  return (
    (za = 1),
    (function e() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          "function" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {}
    })(),
    (Eu.exports = O1()),
    Eu.exports
  );
}
function I1() {
  if (Ta) return Pl;
  Ta = 1;
  var e = F1();
  return (Pl.createRoot = e.createRoot), (Pl.hydrateRoot = e.hydrateRoot), Pl;
}
var D1 = I1();
const U1 = {
    riskLevel: [
      {
        title: "Cautious",
        desc: "Low-risk investments typically produce more stable but modest returns.",
        level: 1,
      },
      {
        title: "Moderately cautious",
        desc: "Low-risk investments typically produce more stable but modest returns.",
        level: 2,
      },
      {
        title: "Moderately",
        desc: "Low-risk investments typically produce more stable but modest returns.",
        level: 3,
      },
      {
        title: "Moderate bold",
        desc: "Low-risk investments typically produce more stable but modest returns.",
        level: 4,
      },
      {
        title: "Bold",
        desc: "Low-risk investments typically produce more stable but modest returns.",
        level: 5,
      },
    ],
  },
  A1 = (e) => {
    const { goSubStep: t } = e,
      [n, r] = Ae.useState(0);
    return a.jsx("div", {
      className: "risk-level-list",
      children: U1.riskLevel.map((e) =>
        a.jsxs(
          "div",
          {
            className: "risk-level-item",
            children: [
              a.jsx("input", {
                type: "radio",
                id: e.level + "",
                name: "riskLevel",
                onChange: () => {
                  t(e.level), r(e.level);
                },
                checked: e.level === n,
              }),
              a.jsxs("label", {
                htmlFor: e.level + "",
                children: [
                  a.jsx("div", { className: "title", children: e.title }),
                  e.desc,
                ],
              }),
            ],
          },
          e.title
        )
      ),
    });
  },
  B1 = () =>
    a.jsxs("table", {
      className: "past-performance",
      children: [
        a.jsx("thead", {
          children: a.jsx("tr", {
            children: a.jsx("th", { children: "Past performances(%)" }),
          }),
        }),
        a.jsxs("tbody", {
          children: [
            a.jsx("tr", {
              children: a.jsxs("td", {
                children: [
                  "2023-24 Sep ",
                  a.jsx("span", { children: "11.78%" }),
                ],
              }),
            }),
            a.jsx("tr", {
              children: a.jsxs("td", {
                children: [
                  "2022-24 Sep ",
                  a.jsx("span", { children: "-6.66%" }),
                ],
              }),
            }),
            a.jsx("tr", {
              children: a.jsxs("td", {
                children: [
                  "2021-24 Sep ",
                  a.jsx("span", { children: "9.24%" }),
                ],
              }),
            }),
            a.jsx("tr", {
              children: a.jsxs("td", {
                children: [
                  "2020-24 Sep ",
                  a.jsx("span", { children: "8.18%" }),
                ],
              }),
            }),
            a.jsx("tr", {
              children: a.jsxs("td", {
                children: [
                  "2019-24 Sep ",
                  a.jsx("span", { children: "1.78%" }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  V1 = () =>
    a.jsx("div", {
      className: "fee-charge",
      children: a.jsxs("div", {
        className: "fee-charge-example-container",
        children: [
          a.jsxs("table", {
            className: "past-performance",
            children: [
              a.jsx("thead", {
                children: a.jsx("tr", {
                  children: a.jsx("th", {
                    children: "Total of fund & service fee charge",
                  }),
                }),
              }),
              a.jsxs("tbody", {
                children: [
                  a.jsx("tr", {
                    children: a.jsxs("td", {
                      children: [
                        "2023-24 Sep ",
                        a.jsx("span", { children: "11.78%" }),
                      ],
                    }),
                  }),
                  a.jsx("tr", {
                    children: a.jsxs("td", {
                      children: [
                        "2022-24 Sep ",
                        a.jsx("span", { children: "-6.66%" }),
                      ],
                    }),
                  }),
                  a.jsx("tr", {
                    children: a.jsxs("td", {
                      children: [
                        "2021-24 Sep ",
                        a.jsx("span", { children: "9.24%" }),
                      ],
                    }),
                  }),
                  a.jsx("tr", {
                    children: a.jsxs("td", {
                      children: [
                        "2020-24 Sep ",
                        a.jsx("span", { children: "8.18%" }),
                      ],
                    }),
                  }),
                  a.jsx("tr", {
                    children: a.jsxs("td", {
                      children: [
                        "2019-24 Sep ",
                        a.jsx("span", { children: "1.78%" }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          a.jsx("p", {
            style: { color: "#666" },
            children:
              "Cillum sint excepteur nulla ullamco enim. Velit amet sunt est fugiat id velit. Sit magna cillum culpa aliqua aliquip magna.",
          }),
        ],
      }),
    }),
  Ra = (e) => {
    const {
        id: t,
        title: n,
        ModalConent: r,
        showModal: l,
        toggleModal: i,
        modalWidth: o,
      } = e,
      [s, u] = Ae.useState({ width: o, left: "0", top: "100%" }),
      [c, d] = Ae.useState(!1),
      f = Ae.useRef(null);
    Ae.useEffect(() => {
      var e;
      const t = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      if (l) {
        const n = null == (e = f.current) ? void 0 : e.getBoundingClientRect();
        t > 480 &&
          u({
            left: `calc(50vw - ${n.width / 2 + "px"})`,
            top: `calc(50vh - ${n.height / 2 + "px"})`,
            width: o,
          }),
          (document.body.style.overflow = "hidden"),
          d(!0);
      } else d(!1);
    }, [l]);
    return a.jsx(a.Fragment, {
      children: l
        ? a.jsxs(a.Fragment, {
            children: [
              a.jsxs("div", {
                className: c ? "modal-container slide-in" : "modal-container",
                id: t,
                ref: f,
                style: s,
                children: [
                  a.jsxs("div", {
                    className: "modal-header",
                    children: [
                      n,
                      " ",
                      a.jsx("button", {
                        onClick: () => (
                          d(!1),
                          i(),
                          void (document.body.style.overflow = "auto")
                        ),
                        className: "close-btn",
                        "aria-label": "close the modal",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "modal-content-container",
                    children: a.jsx(r, {}),
                  }),
                ],
              }),
              a.jsx("div", { className: "screen" }),
            ],
          })
        : "",
    });
  };
function W1() {
  return a.jsx("p", {
    style: { textAlign: "left", lineHeight: "1.44", fontSize: "1rem" },
    children:
      "Ad duis enim mollit amet aliquip Lorem consequat aliqua tempor. Do tempor cillum laboris labore nisi. Velit qui adipisicing sint elit proident esse officia tempor. Fugiat ut quis aliquip proident reprehenderit occaecat dolore labore incididunt in nisi nisi in.",
  });
}
const H1 = () => {
    const [e, t] = Ae.useState(!1),
      [n, r] = Ae.useState(!1),
      l = () => {
        t(!1), r(!1);
      };
    return a.jsxs("div", {
      className: "fee-charge",
      children: [
        a.jsx("h4", { children: "Fees and charges" }),
        a.jsxs("div", {
          className: "fee-charges-container",
          children: [
            a.jsxs("div", {
              className: "fees-charges-card",
              children: [
                a.jsxs("div", {
                  children: [
                    a.jsx("span", {
                      className: "title",
                      children: "Fund charge",
                    }),
                    a.jsx("span", { className: "value", children: "98%" }),
                  ],
                }),
                a.jsx("button", {
                  "aria-haspopup": "dialog",
                  "aria-controls": "fund_charge_example",
                  onClick: () => {
                    r(!0);
                  },
                  children: "Fund charge example",
                }),
                a.jsx(Ra, {
                  id: "fund_charge_example",
                  title: "Fund charge example",
                  ModalConent: W1,
                  showModal: n,
                  modalWidth: "375px",
                  toggleModal: l,
                }),
              ],
            }),
            a.jsxs("div", {
              className: "fees-charges-card",
              children: [
                a.jsxs("div", {
                  children: [
                    a.jsx("span", {
                      className: "title",
                      children: "FIL's typical service fee rate",
                    }),
                    a.jsx("span", {
                      className: "value",
                      children: "0.35% yearly",
                    }),
                  ],
                }),
                a.jsx("button", {
                  "aria-haspopup": "dialog",
                  children: "Rates vary",
                }),
              ],
            }),
          ],
        }),
        a.jsx("button", {
          className: "popup-trigger",
          "aria-controls": "fee_charge_example_container",
          onClick: () => {
            t(!0);
          },
          children: "Example of annual charges",
        }),
        a.jsx(Ra, {
          id: "fee_charge_example_container",
          title: "Example of annual charges",
          ModalConent: V1,
          showModal: e,
          toggleModal: l,
          modalWidth: "400px",
        }),
      ],
    });
  },
  $1 = (e) => {
    const { goStep: t } = e;
    return a.jsxs("div", {
      className: "factors-container",
      children: [
        a.jsxs("div", {
          children: [
            a.jsx("h4", { children: "Actively managed funds" }),
            a.jsxs("ul", {
              children: [
                a.jsxs("li", {
                  children: [
                    a.jsx("svg", {
                      width: "24px",
                      height: "24px",
                      viewBox: "0 0 24 24",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: a.jsx("g", {
                        stroke: "none",
                        fill: "none",
                        children: a.jsx("g", {
                          id: "Arrow",
                          transform: "translate(-912.000000, 0.000000)",
                          children: a.jsxs("g", {
                            id: "transfer_line",
                            transform: "translate(912.000000, 0.000000)",
                            children: [
                              a.jsx("path", {
                                d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                                id: "MingCute",
                              }),
                              a.jsx("path", {
                                d: "M20,14 C20.5523,14 21,14.4477 21,15 C21,15.51285 20.613973,15.9355092 20.1166239,15.9932725 L20,16 L6.41421,16 L8.70711,18.2929 C9.09763,18.6834 9.09763,19.3166 8.70711,19.7071 C8.34662077,20.0675615 7.77939355,20.0952893 7.38709848,19.7902834 L7.29289,19.7071 L3.4636,15.8778 C2.7983584,15.212616 3.2240608,14.0940048 4.12621381,14.0055802 L4.24142,14 L20,14 Z M15.2929,4.29289 C15.6533615,3.93241 16.2206207,3.90468077 16.6128973,4.20970231 L16.7071,4.29289 L20.5364,8.12218 C21.20168,8.7874312 20.7759699,9.90599901 19.8738074,9.99442003 L19.7586,10 L4,10 C3.44772,10 3,9.55228 3,9 C3,8.48716857 3.38604429,8.06449347 3.88337975,8.0067278 L4,8 L17.5858,8 L15.2929,5.70711 C14.9024,5.31658 14.9024,4.68342 15.2929,4.29289 Z",
                                fill: "#000",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    "Our exports monitor the global market, adjusting fund when needed",
                  ],
                }),
                a.jsxs("li", {
                  children: [
                    a.jsx("svg", {
                      width: "24px",
                      height: "24px",
                      viewBox: "0 0 24 24",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: a.jsx("g", {
                        stroke: "none",
                        fill: "none",
                        children: a.jsx("g", {
                          id: "Arrow",
                          transform: "translate(-912.000000, 0.000000)",
                          children: a.jsxs("g", {
                            id: "transfer_line",
                            transform: "translate(912.000000, 0.000000)",
                            children: [
                              a.jsx("path", {
                                d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                                id: "MingCute",
                              }),
                              a.jsx("path", {
                                d: "M20,14 C20.5523,14 21,14.4477 21,15 C21,15.51285 20.613973,15.9355092 20.1166239,15.9932725 L20,16 L6.41421,16 L8.70711,18.2929 C9.09763,18.6834 9.09763,19.3166 8.70711,19.7071 C8.34662077,20.0675615 7.77939355,20.0952893 7.38709848,19.7902834 L7.29289,19.7071 L3.4636,15.8778 C2.7983584,15.212616 3.2240608,14.0940048 4.12621381,14.0055802 L4.24142,14 L20,14 Z M15.2929,4.29289 C15.6533615,3.93241 16.2206207,3.90468077 16.6128973,4.20970231 L16.7071,4.29289 L20.5364,8.12218 C21.20168,8.7874312 20.7759699,9.90599901 19.8738074,9.99442003 L19.7586,10 L4,10 C3.44772,10 3,9.55228 3,9 C3,8.48716857 3.38604429,8.06449347 3.88337975,8.0067278 L4,8 L17.5858,8 L15.2929,5.70711 C14.9024,5.31658 14.9024,4.68342 15.2929,4.29289 Z",
                                fill: "#000",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    "Our exports monitor the global market, adjusting fund when needed",
                  ],
                }),
                a.jsxs("li", {
                  children: [
                    a.jsx("svg", {
                      width: "24px",
                      height: "24px",
                      viewBox: "0 0 24 24",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: a.jsx("g", {
                        stroke: "none",
                        fill: "none",
                        children: a.jsx("g", {
                          id: "Arrow",
                          transform: "translate(-912.000000, 0.000000)",
                          children: a.jsxs("g", {
                            id: "transfer_line",
                            transform: "translate(912.000000, 0.000000)",
                            children: [
                              a.jsx("path", {
                                d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                                id: "MingCute",
                              }),
                              a.jsx("path", {
                                d: "M20,14 C20.5523,14 21,14.4477 21,15 C21,15.51285 20.613973,15.9355092 20.1166239,15.9932725 L20,16 L6.41421,16 L8.70711,18.2929 C9.09763,18.6834 9.09763,19.3166 8.70711,19.7071 C8.34662077,20.0675615 7.77939355,20.0952893 7.38709848,19.7902834 L7.29289,19.7071 L3.4636,15.8778 C2.7983584,15.212616 3.2240608,14.0940048 4.12621381,14.0055802 L4.24142,14 L20,14 Z M15.2929,4.29289 C15.6533615,3.93241 16.2206207,3.90468077 16.6128973,4.20970231 L16.7071,4.29289 L20.5364,8.12218 C21.20168,8.7874312 20.7759699,9.90599901 19.8738074,9.99442003 L19.7586,10 L4,10 C3.44772,10 3,9.55228 3,9 C3,8.48716857 3.38604429,8.06449347 3.88337975,8.0067278 L4,8 L17.5858,8 L15.2929,5.70711 C14.9024,5.31658 14.9024,4.68342 15.2929,4.29289 Z",
                                fill: "#000",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    "Fund management change to 2%",
                  ],
                }),
              ],
            }),
            a.jsx("button", { onClick: () => t(2), children: "Select" }),
          ],
        }),
        a.jsxs("div", {
          children: [
            a.jsx("h4", { children: "Track the market" }),
            a.jsxs("ul", {
              children: [
                a.jsxs("li", {
                  children: [
                    a.jsx("svg", {
                      width: "24px",
                      height: "24px",
                      viewBox: "0 0 24 24",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: a.jsx("g", {
                        stroke: "none",
                        fill: "none",
                        children: a.jsx("g", {
                          id: "Arrow",
                          transform: "translate(-912.000000, 0.000000)",
                          children: a.jsxs("g", {
                            id: "transfer_line",
                            transform: "translate(912.000000, 0.000000)",
                            children: [
                              a.jsx("path", {
                                d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                                id: "MingCute",
                              }),
                              a.jsx("path", {
                                d: "M20,14 C20.5523,14 21,14.4477 21,15 C21,15.51285 20.613973,15.9355092 20.1166239,15.9932725 L20,16 L6.41421,16 L8.70711,18.2929 C9.09763,18.6834 9.09763,19.3166 8.70711,19.7071 C8.34662077,20.0675615 7.77939355,20.0952893 7.38709848,19.7902834 L7.29289,19.7071 L3.4636,15.8778 C2.7983584,15.212616 3.2240608,14.0940048 4.12621381,14.0055802 L4.24142,14 L20,14 Z M15.2929,4.29289 C15.6533615,3.93241 16.2206207,3.90468077 16.6128973,4.20970231 L16.7071,4.29289 L20.5364,8.12218 C21.20168,8.7874312 20.7759699,9.90599901 19.8738074,9.99442003 L19.7586,10 L4,10 C3.44772,10 3,9.55228 3,9 C3,8.48716857 3.38604429,8.06449347 3.88337975,8.0067278 L4,8 L17.5858,8 L15.2929,5.70711 C14.9024,5.31658 14.9024,4.68342 15.2929,4.29289 Z",
                                fill: "#000",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    "Our exports monitor the global market, adjusting fund when needed",
                  ],
                }),
                a.jsxs("li", {
                  children: [
                    a.jsx("svg", {
                      width: "24px",
                      height: "24px",
                      viewBox: "0 0 24 24",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: a.jsx("g", {
                        stroke: "none",
                        fill: "none",
                        children: a.jsx("g", {
                          id: "Arrow",
                          transform: "translate(-912.000000, 0.000000)",
                          children: a.jsxs("g", {
                            id: "transfer_line",
                            transform: "translate(912.000000, 0.000000)",
                            children: [
                              a.jsx("path", {
                                d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                                id: "MingCute",
                              }),
                              a.jsx("path", {
                                d: "M20,14 C20.5523,14 21,14.4477 21,15 C21,15.51285 20.613973,15.9355092 20.1166239,15.9932725 L20,16 L6.41421,16 L8.70711,18.2929 C9.09763,18.6834 9.09763,19.3166 8.70711,19.7071 C8.34662077,20.0675615 7.77939355,20.0952893 7.38709848,19.7902834 L7.29289,19.7071 L3.4636,15.8778 C2.7983584,15.212616 3.2240608,14.0940048 4.12621381,14.0055802 L4.24142,14 L20,14 Z M15.2929,4.29289 C15.6533615,3.93241 16.2206207,3.90468077 16.6128973,4.20970231 L16.7071,4.29289 L20.5364,8.12218 C21.20168,8.7874312 20.7759699,9.90599901 19.8738074,9.99442003 L19.7586,10 L4,10 C3.44772,10 3,9.55228 3,9 C3,8.48716857 3.38604429,8.06449347 3.88337975,8.0067278 L4,8 L17.5858,8 L15.2929,5.70711 C14.9024,5.31658 14.9024,4.68342 15.2929,4.29289 Z",
                                fill: "#000",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    "Our exports monitor the global market, adjusting fund when needed",
                  ],
                }),
                a.jsxs("li", {
                  children: [
                    a.jsx("svg", {
                      width: "24px",
                      height: "24px",
                      viewBox: "0 0 24 24",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: a.jsx("g", {
                        stroke: "none",
                        fill: "none",
                        children: a.jsx("g", {
                          id: "Arrow",
                          transform: "translate(-912.000000, 0.000000)",
                          children: a.jsxs("g", {
                            id: "transfer_line",
                            transform: "translate(912.000000, 0.000000)",
                            children: [
                              a.jsx("path", {
                                d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                                id: "MingCute",
                              }),
                              a.jsx("path", {
                                d: "M20,14 C20.5523,14 21,14.4477 21,15 C21,15.51285 20.613973,15.9355092 20.1166239,15.9932725 L20,16 L6.41421,16 L8.70711,18.2929 C9.09763,18.6834 9.09763,19.3166 8.70711,19.7071 C8.34662077,20.0675615 7.77939355,20.0952893 7.38709848,19.7902834 L7.29289,19.7071 L3.4636,15.8778 C2.7983584,15.212616 3.2240608,14.0940048 4.12621381,14.0055802 L4.24142,14 L20,14 Z M15.2929,4.29289 C15.6533615,3.93241 16.2206207,3.90468077 16.6128973,4.20970231 L16.7071,4.29289 L20.5364,8.12218 C21.20168,8.7874312 20.7759699,9.90599901 19.8738074,9.99442003 L19.7586,10 L4,10 C3.44772,10 3,9.55228 3,9 C3,8.48716857 3.38604429,8.06449347 3.88337975,8.0067278 L4,8 L17.5858,8 L15.2929,5.70711 C14.9024,5.31658 14.9024,4.68342 15.2929,4.29289 Z",
                                fill: "#000",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    "Our exports monitor the global market, adjusting fund when needed",
                  ],
                }),
              ],
            }),
            a.jsx("button", { onClick: () => t(2), children: "Select" }),
          ],
        }),
        a.jsxs("div", {
          children: [
            a.jsx("h4", { children: "Regular income" }),
            a.jsxs("ul", {
              children: [
                a.jsxs("li", {
                  children: [
                    a.jsx("svg", {
                      width: "24px",
                      height: "24px",
                      viewBox: "0 0 24 24",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: a.jsx("g", {
                        stroke: "none",
                        fill: "none",
                        children: a.jsx("g", {
                          id: "Arrow",
                          transform: "translate(-912.000000, 0.000000)",
                          children: a.jsxs("g", {
                            id: "transfer_line",
                            transform: "translate(912.000000, 0.000000)",
                            children: [
                              a.jsx("path", {
                                d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                                id: "MingCute",
                              }),
                              a.jsx("path", {
                                d: "M20,14 C20.5523,14 21,14.4477 21,15 C21,15.51285 20.613973,15.9355092 20.1166239,15.9932725 L20,16 L6.41421,16 L8.70711,18.2929 C9.09763,18.6834 9.09763,19.3166 8.70711,19.7071 C8.34662077,20.0675615 7.77939355,20.0952893 7.38709848,19.7902834 L7.29289,19.7071 L3.4636,15.8778 C2.7983584,15.212616 3.2240608,14.0940048 4.12621381,14.0055802 L4.24142,14 L20,14 Z M15.2929,4.29289 C15.6533615,3.93241 16.2206207,3.90468077 16.6128973,4.20970231 L16.7071,4.29289 L20.5364,8.12218 C21.20168,8.7874312 20.7759699,9.90599901 19.8738074,9.99442003 L19.7586,10 L4,10 C3.44772,10 3,9.55228 3,9 C3,8.48716857 3.38604429,8.06449347 3.88337975,8.0067278 L4,8 L17.5858,8 L15.2929,5.70711 C14.9024,5.31658 14.9024,4.68342 15.2929,4.29289 Z",
                                fill: "#000",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    "Our exports monitor the global market, adjusting fund when needed",
                  ],
                }),
                a.jsxs("li", {
                  children: [
                    a.jsx("svg", {
                      width: "24px",
                      height: "24px",
                      viewBox: "0 0 24 24",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: a.jsx("g", {
                        stroke: "none",
                        fill: "none",
                        children: a.jsx("g", {
                          id: "Arrow",
                          transform: "translate(-912.000000, 0.000000)",
                          children: a.jsxs("g", {
                            id: "transfer_line",
                            transform: "translate(912.000000, 0.000000)",
                            children: [
                              a.jsx("path", {
                                d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                                id: "MingCute",
                              }),
                              a.jsx("path", {
                                d: "M20,14 C20.5523,14 21,14.4477 21,15 C21,15.51285 20.613973,15.9355092 20.1166239,15.9932725 L20,16 L6.41421,16 L8.70711,18.2929 C9.09763,18.6834 9.09763,19.3166 8.70711,19.7071 C8.34662077,20.0675615 7.77939355,20.0952893 7.38709848,19.7902834 L7.29289,19.7071 L3.4636,15.8778 C2.7983584,15.212616 3.2240608,14.0940048 4.12621381,14.0055802 L4.24142,14 L20,14 Z M15.2929,4.29289 C15.6533615,3.93241 16.2206207,3.90468077 16.6128973,4.20970231 L16.7071,4.29289 L20.5364,8.12218 C21.20168,8.7874312 20.7759699,9.90599901 19.8738074,9.99442003 L19.7586,10 L4,10 C3.44772,10 3,9.55228 3,9 C3,8.48716857 3.38604429,8.06449347 3.88337975,8.0067278 L4,8 L17.5858,8 L15.2929,5.70711 C14.9024,5.31658 14.9024,4.68342 15.2929,4.29289 Z",
                                fill: "#000",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    "Our exports monitor the global market, adjusting fund when needed",
                  ],
                }),
                a.jsxs("li", {
                  children: [
                    a.jsx("svg", {
                      width: "24px",
                      height: "24px",
                      viewBox: "0 0 24 24",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: a.jsx("g", {
                        stroke: "none",
                        fill: "none",
                        children: a.jsx("g", {
                          id: "Arrow",
                          transform: "translate(-912.000000, 0.000000)",
                          children: a.jsxs("g", {
                            id: "transfer_line",
                            transform: "translate(912.000000, 0.000000)",
                            children: [
                              a.jsx("path", {
                                d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                                id: "MingCute",
                              }),
                              a.jsx("path", {
                                d: "M20,14 C20.5523,14 21,14.4477 21,15 C21,15.51285 20.613973,15.9355092 20.1166239,15.9932725 L20,16 L6.41421,16 L8.70711,18.2929 C9.09763,18.6834 9.09763,19.3166 8.70711,19.7071 C8.34662077,20.0675615 7.77939355,20.0952893 7.38709848,19.7902834 L7.29289,19.7071 L3.4636,15.8778 C2.7983584,15.212616 3.2240608,14.0940048 4.12621381,14.0055802 L4.24142,14 L20,14 Z M15.2929,4.29289 C15.6533615,3.93241 16.2206207,3.90468077 16.6128973,4.20970231 L16.7071,4.29289 L20.5364,8.12218 C21.20168,8.7874312 20.7759699,9.90599901 19.8738074,9.99442003 L19.7586,10 L4,10 C3.44772,10 3,9.55228 3,9 C3,8.48716857 3.38604429,8.06449347 3.88337975,8.0067278 L4,8 L17.5858,8 L15.2929,5.70711 C14.9024,5.31658 14.9024,4.68342 15.2929,4.29289 Z",
                                fill: "#000",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    "Our exports monitor the global market, adjusting fund when needed",
                  ],
                }),
              ],
            }),
            a.jsx("button", { onClick: () => t(2), children: "Select" }),
          ],
        }),
      ],
    });
  },
  Q1 = () => {
    const [e, t] = Ae.useState(1),
      [n, r] = Ae.useState(0),
      [l, i] = Ae.useState(!1),
      o = Ae.useRef(null);
    return (
      Ae.useEffect(() => {
        var e;
        null == (e = document.querySelector("#loading")) || e.remove(),
          Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
          ) < 480
            ? i(!0)
            : i(!1);
      }, []),
      Ae.useEffect(() => {
        var e;
        null == (e = o.current) || e.scrollIntoView();
      }, [e, n]),
      a.jsxs(a.Fragment, {
        children: [
          a.jsx("div", {
            className: "header",
            ref: o,
            children: "I am Header",
          }),
          a.jsx("div", {
            className: "app-container navigator",
            children: a.jsxs("div", {
              className: "step-container",
              children: [
                1 === e
                  ? a.jsxs("div", {
                      className: "step st1",
                      children: [
                        a.jsxs("div", {
                          className: "hero-banner",
                          children: [
                            a.jsx("div", {
                              className: "page-title",
                              children: a.jsxs("div", {
                                className: "link-container",
                                children: [
                                  a.jsx("a", {
                                    href: "/",
                                    title: "home page",
                                    children: "Home",
                                  }),
                                  a.jsx("h1", { children: "Navigator" }),
                                ],
                              }),
                            }),
                            a.jsx("div", {
                              className: "img-container",
                              "aria-hidden": "true",
                              children: a.jsx("img", {
                                src: "../hero.jpg",
                                alt: "hero banner",
                              }),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "main-content",
                          children: [
                            a.jsxs("div", {
                              className: "desc-section",
                              children: [
                                a.jsx("h2", {
                                  children: "Find a fund in just 2 steps",
                                }),
                                a.jsxs("p", {
                                  className: "key-info",
                                  children: [
                                    a.jsx("strong", {
                                      children: "Import information ",
                                    }),
                                    "- Voluptate elit qui excepteur sit. Ex culpa esse dolor ullamco est tempor ut mollit. Esse commodo anim occaecat culpa duis quis anim non. Occaecat reprehenderit cupidatat non ea. Qui in ipsum labore minim aliqua aliquip est ullamco nostrud.",
                                  ],
                                }),
                                a.jsx("p", {
                                  children:
                                    "Adipisicing irure quis magna consequat ad ad ut. Anim eiusmod pariatur fugiat et minim magna dolor anim laborum qui magna officia ut ut. Et est commodo minim nostrud laboris pariatur voluptate commodo tempor ut Lorem duis. Aliquip anim quis adipisicing amet duis. Quis nulla cillum labore anim excepteur consequat laborum nulla mollit duis ut commodo aliquip ex.",
                                }),
                                a.jsx("p", {
                                  children:
                                    "Ipsum Lorem eiusmod deserunt consequat sunt deserunt veniam. Ut labore sunt ipsum eiusmod aliquip veniam est sit adipisicing deserunt.",
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "step-detail",
                              children: [
                                a.jsx("div", {
                                  className: "progress",
                                  children: "Step 1 of 2",
                                }),
                                a.jsx("h3", {
                                  children: "What's important to you?",
                                }),
                                a.jsx($1, {
                                  goStep: (e) => {
                                    t(e);
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : "",
                2 === e
                  ? a.jsxs("div", {
                      className: "step st2",
                      children: [
                        a.jsx("div", {
                          className: "main-content",
                          style: {
                            display: (0 === n && l) || !l ? "block" : "none",
                          },
                          children: a.jsxs("div", {
                            className: "step-detail",
                            children: [
                              a.jsx("button", {
                                className: "step-controller",
                                onClick: () => t(1),
                                children: "Back to previous",
                              }),
                              a.jsx("div", {
                                className: "progress",
                                children: "Step 2 of 2",
                              }),
                              a.jsxs("h3", {
                                children: [
                                  "Choose a risk level",
                                  a.jsx("button", {
                                    className: "popup-trigger",
                                    "aria-haspopup": "dialog",
                                    children: "i",
                                  }),
                                ],
                              }),
                              a.jsx(A1, {
                                goSubStep: (e) => {
                                  r(e);
                                },
                              }),
                            ],
                          }),
                        }),
                        n > 0
                          ? a.jsx("div", {
                              className: "main-content more",
                              children: a.jsxs("div", {
                                className: "step-detail",
                                children: [
                                  a.jsx("button", {
                                    className: "step-controller",
                                    onClick: () => r(0),
                                    children: "Back",
                                  }),
                                  a.jsx("div", {
                                    className: "toast",
                                    children: "Fund based on your selection!",
                                  }),
                                  a.jsx("h3", {
                                    children:
                                      "FIL Multi Asset Open Defensive fund",
                                  }),
                                  a.jsx("p", {
                                    children:
                                      "Pariatur deserunt consectetur exercitation mollit tempor. Aliqua fugiat consequat tempor culpa. Enim consectetur est consectetur et ut occaecat exercitation incididunt tempor esse minim.",
                                  }),
                                  a.jsxs("div", {
                                    className: "investment-suggestion",
                                    children: [a.jsx(B1, {}), a.jsx(H1, {})],
                                  }),
                                  a.jsxs("div", {
                                    className: "bottom-button-container",
                                    children: [
                                      a.jsx("button", {
                                        style: {
                                          backgroundColor: "#82c823",
                                          color: "#20242b",
                                        },
                                        children: "Buy this fund",
                                      }),
                                      a.jsx("button", {
                                        style: {
                                          backgroundColor: "#ebebeb",
                                          color: "#20242b",
                                        },
                                        children: "View full fund details",
                                      }),
                                      a.jsx("button", {
                                        style: {
                                          backgroundColor: "transparent",
                                          color: "#016fad",
                                          height: "fit-content",
                                          marginBottom: "2rem",
                                        },
                                        children: "Key information document",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            })
                          : "",
                      ],
                    })
                  : "",
              ],
            }),
          }),
          a.jsx("div", { className: "footer", children: "I am Footer" }),
        ],
      })
    );
  };
D1.createRoot(document.getElementById("root")).render(
  a.jsx(Ae.StrictMode, { children: a.jsx(Q1, {}) })
);
