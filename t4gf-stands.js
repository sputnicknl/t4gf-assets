(function(){
var T={
  "Governance":{bg:"#E6F1FB",color:"#0C447C",label:"Governance"},
  "Development, Humanitarian Action & Human Rights":{bg:"#E1F5EE",color:"#085041",label:"Dev. & Human Rights"},
  "Democracy, Peace & Justice":{bg:"#FAEEDA",color:"#633806",label:"Democracy, Peace & Justice"},
  "Climate Justice & Sustainability":{bg:"#EAF3DE",color:"#27500A",label:"Climate & Sustainability"},
  "Tech for Good":{bg:"#EEEDFE",color:"#3C3489",label:"Tech for Good"},
  "Entrepreneurship & Local Impact":{bg:"#FBEAF0",color:"#72243E",label:"Entrepreneurship & Local Impact"}
};
var O=[
  ["International Criminal Court (ICC)","https://www.icc-cpi.int/","Governance",1],
  ["Kosovo Specialist Chambers","https://www.scp-ks.org/en","Governance",0],
  ["Netherlands Institute for Multiparty Democracy (NIMD)","https://nimd.org","Governance",0],
  ["OSCE High Commissioner on National Minorities","https://hcnm.osce.org","Governance",0],
  ["Organisation for the Prohibition of Chemical Weapons (OPCW)","https://www.opcw.org/","Governance",0],
  ["eu-LISA","https://www.eulisa.europa.eu/","Governance",0],
  ["Work in South Holland","https://www.workinsouthholland.nl","Governance",1],
  ["Municipality of The Hague - ImpactCity","https://www.impactcity.nl","Governance",0],
  ["The Hague University of Applied Sciences (THUAS)","https://www.dehaagsehogeschool.nl","Governance",0],
  ["Leiden University","https://www.universiteitleiden.nl","Governance",0],
  ["TU Delft","https://www.tudelft.nl/","Governance",0],
  ["EU Agency for the Space Programme (EUSPA)","https://www.euspa.europa.eu/","Governance",0],
  ["World Resources Institute (WRI)","https://www.wri.org/wri-europe","Governance",0],
  ["The Hague Security Delta (HSD)","https://securitydelta.nl","Governance",0],
  ["Plein Publiek","https://pleinpubliek.nl/","Governance",0],
  ["Asylos","https://www.asylos.org","Development, Humanitarian Action & Human Rights",1],
  ["Diaspora in Action for Human Rights and Democracy (DAHRD)","https://dahrd.org/","Development, Humanitarian Action & Human Rights",0],
  ["Equal Trade Alliance","https://www.equaltradeglobal.org","Development, Humanitarian Action & Human Rights",1],
  ["N'NINKIE","https://www.nninkie.org","Development, Humanitarian Action & Human Rights",1],
  ["International Institute of Social Studies (ISS)","https://www.iss.nl","Development, Humanitarian Action & Human Rights",0],
  ["ActionAid Netherlands","https://www.actionaid.nl","Development, Humanitarian Action & Human Rights",1],
  ["Global Human Rights Defence (GHRD)","https://www.ghrd.org","Development, Humanitarian Action & Human Rights",1],
  ["NGO DEI","https://www.ngodei.org","Development, Humanitarian Action & Human Rights",1],
  ["Zwina Foundation","https://zwinafoundation.org","Development, Humanitarian Action & Human Rights",0],
  ["UNOCHA","https://www.unocha.org","Development, Humanitarian Action & Human Rights",0],
  ["Energy for Refugees","https://energyforrefugees.com","Development, Humanitarian Action & Human Rights",1],
  ["Meldpunt Vreemdelingendetentie","https://meldpuntvreemdelingendetentie.nl/","Development, Humanitarian Action & Human Rights",0],
  ["Stichting HWPL Netherlands","https://www.hwpl.kr","Development, Humanitarian Action & Human Rights",0],
  ["The Hague Humanity Hub","https://humanityhub.org","Democracy, Peace & Justice",0],
  ["International Mediation Institute","https://imimediation.org/","Democracy, Peace & Justice",1],
  ["International Connector","https://www.internationalconnector.com/","Democracy, Peace & Justice",1],
  ["United Nations University for Peace","https://www.upeace.nl","Democracy, Peace & Justice",0],
  ["Youth Peace Summit","https://www.youthpeacesummit.com","Democracy, Peace & Justice",1],
  ["Lawyers for Lawyers","https://www.lawyersforlawyers.org/","Democracy, Peace & Justice",0],
  ["Stichting Music for Peace","https://www.stichtingmusicforpeace.nl","Democracy, Peace & Justice",0],
  ["The Hague Peace Projects","https://thehaguepeace.org/","Democracy, Peace & Justice",1],
  ["JASON Institute","https://jasoninstitute.com/","Democracy, Peace & Justice",0],
  ["TERRA Foundation","https://www.terrafoundation.nl","Climate Justice & Sustainability",0],
  ["Environment Europe Foundation","https://environmenteurope.org","Climate Justice & Sustainability",1],
  ["C'MON","https://www.cmon.world","Climate Justice & Sustainability",1],
  ["United Rising","https://unitedrisingassociation.com/","Climate Justice & Sustainability",1],
  ["Digital Child Rights","https://digitalchildrights.org","Tech for Good",1],
  ["Redline Discovery","https://redlinediscovery.com/","Tech for Good",0],
  ["Holland Park Media","https://hollandparkmedia.com","Tech for Good",1],
  ["EviSafe","https://www.evisafe.nl","Tech for Good",1],
  ["Xalient","https://www.xalient.com","Tech for Good",1],
  ["Shadowserver Foundation","https://www.shadowserver.org","Tech for Good",0],
  ["The Hague Tech","https://www.thehaguetech.com/","Tech for Good",1],
  ["Stichting Lydia Generation","https://www.thrivelg.org","Entrepreneurship & Local Impact",0],
  ["We Are Changemakers","https://www.wearechangemakers.org","Entrepreneurship & Local Impact",1],
  ["Haagse Helpers","https://www.haagsehelpers.nl","Entrepreneurship & Local Impact",0],
  ["JobOn","https://www.jobon.nl","Entrepreneurship & Local Impact",1],
  ["Female Ventures","https://femaleventures.nl","Entrepreneurship & Local Impact",1],
  ["Volunteer The Hague","https://www.volunteerthehague.nl/","Entrepreneurship & Local Impact",1],
  ["The Netherlands Point of Entry (RVO)","https://www.netherlandspointofentry.nl/","Entrepreneurship & Local Impact",0],
  ["PLNT Leiden","https://plnt.nl/","Entrepreneurship & Local Impact",1],
  ["UWV EURES","https://www.werk.nl/eures","Entrepreneurship & Local Impact",0],
  ["Student Consultancy The Hague","https://www.studentconsultancythehague.com/","Entrepreneurship & Local Impact",0],
  ["Forerunners Consulting and Coaching","https://www.forerunnersconsulting-coaching.com","Entrepreneurship & Local Impact",1],
  ["Stichting StepUp Team","https://www.stepupteam.nl","Entrepreneurship & Local Impact",0],
  ["Inclusion Unfolding Africa","https://inclusionunfolding.org","Democracy, Peace & Justice",0],
  ["Sky Campus Happiness","https://www.skycampushappiness.org","Entrepreneurship & Local Impact",0],
  ["Masambeni South African Internships","https://www.masambeni.com","Entrepreneurship & Local Impact",0],
  ["Move 4 Human Rights","https://justiceandpeace.nl/en/initiatives/move-4-human-rights/","Democracy, Peace & Justice",0],
  ["IdentIT","https://www.identit.eu","Tech for Good",0],
  ["Stichting Queer Mind","https://stichtingqueermind.nl","Democracy, Peace & Justice",0],
  ["ANKA Association of Networking Knowledge and Advancement","https://associationanka.nl","Entrepreneurship & Local Impact",0]
];

var active="all";

function init(){
  var root=document.getElementById("t4gf");
  if(!root){return;}

  function css(el,s){el.setAttribute("style",s);return el;}
  function mk(tag,s,text){var e=document.createElement(tag);if(s)css(e,s);if(text!==undefined)e.textContent=text;return e;}
  function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}

  css(root,"margin:1.5rem 0;font-family:inherit;color:inherit");

  var row=mk("div","display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:1rem");
  var inp=mk("input","flex:1;min-width:160px;padding:8px 12px;border:1px solid #ddd;border-radius:8px;font-size:14px;font-family:inherit;color:inherit;background:transparent;outline:none;box-sizing:border-box");
  inp.setAttribute("type","search");
  inp.setAttribute("placeholder","Search organisations...");
  inp.oninput=render;
  var cnt=mk("span","font-size:13px;color:#999;white-space:nowrap","65 organisations");
  row.appendChild(inp);row.appendChild(cnt);
  root.appendChild(row);

  var tabs=mk("div","display:flex;flex-wrap:wrap;gap:6px;margin-bottom:1.25rem");

  function addTab(theme,label,bg,color){
    var isAll=theme==="all";
    var b=mk("button","padding:5px 13px;border-radius:20px;border:1px solid "+(isAll?"#1a1a1a":bg)+";background:"+(isAll?"#1a1a1a":bg)+";color:"+(isAll?"#fff":color)+";font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;line-height:1.5",label);
    b.setAttribute("data-t",theme);
    b.onclick=function(){setTheme(theme);};
    tabs.appendChild(b);
  }

  addTab("all","All themes","","");
  Object.keys(T).forEach(function(k){addTab(k,T[k].label,T[k].bg,T[k].color);});
  root.appendChild(tabs);

  var wrap=mk("div","border:1px solid #e5e5e5;border-radius:10px;overflow:hidden;overflow-x:auto");
  var tbl=mk("table","width:100%;border-collapse:collapse;font-size:14px;font-family:inherit");
  var thead=document.createElement("thead");
  var htr=document.createElement("tr");
  htr.setAttribute("style","background:#f7f7f7;border-bottom:1px solid #e5e5e5");
  var ths=["Organisation","Theme","Website","Workshop"];
  ths.forEach(function(h){
    var th=document.createElement("th");
    th.setAttribute("style","text-align:left;padding:9px 14px;font-size:11px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap");
    th.textContent=h;
    htr.appendChild(th);
  });
  thead.appendChild(htr);
  var tbody=document.createElement("tbody");
  tbl.appendChild(thead);tbl.appendChild(tbody);
  var empty=mk("p","display:none;padding:2.5rem;text-align:center;color:#bbb;font-size:14px","No organisations match your search.");
  wrap.appendChild(tbl);wrap.appendChild(empty);
  root.appendChild(wrap);

  var footer=mk("p","margin-top:.6rem;font-size:12px;color:#bbb;text-align:right","Talent for Good Fair 2026 - The Hague Humanity Hub");
  root.appendChild(footer);

  function render(){
    var q=(inp.value||"").toLowerCase().trim();
    var n=0;
    tbody.innerHTML="";
    O.forEach(function(o){
      var name=o[0],url=o[1],theme=o[2],ws=o[3];
      if(active!=="all"&&theme!==active)return;
      if(q&&name.toLowerCase().indexOf(q)===-1&&theme.toLowerCase().indexOf(q)===-1)return;
      var t=T[theme]||{bg:"#eee",color:"#333",label:theme};
      var bg=n%2===0?"#fff":"#fafafa";
      var tr=document.createElement("tr");
      tr.setAttribute("style","background:"+bg);
      tr.onmouseover=function(){this.style.background="#f0f5ff";};
      tr.onmouseout=function(){this.style.background=bg;};

      var td1=document.createElement("td");
      td1.setAttribute("style","padding:10px 14px;border-bottom:1px solid #f2f2f2;font-weight:500;vertical-align:middle");
      td1.textContent=name;

      var td2=document.createElement("td");
      td2.setAttribute("style","padding:10px 14px;border-bottom:1px solid #f2f2f2;vertical-align:middle");
      var badge=document.createElement("span");
      badge.setAttribute("style","display:inline-block;padding:3px 9px;border-radius:20px;font-size:11px;font-weight:600;background:"+t.bg+";color:"+t.color);
      badge.textContent=t.label;
      td2.appendChild(badge);

      var td3=document.createElement("td");
      td3.setAttribute("style","padding:10px 14px;border-bottom:1px solid #f2f2f2;vertical-align:middle");
      var a=document.createElement("a");
      a.setAttribute("href",url);
      a.setAttribute("target","_blank");
      a.setAttribute("rel","noopener noreferrer");
      a.setAttribute("style","color:#555;font-size:13px;text-decoration:none");
      a.textContent=url.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");
      td3.appendChild(a);

      var td4=document.createElement("td");
      td4.setAttribute("style","padding:10px 14px;border-bottom:1px solid #f2f2f2;vertical-align:middle");
      if(ws){
        var wsbadge=document.createElement("span");
        wsbadge.setAttribute("style","display:inline-block;padding:3px 8px;border-radius:10px;font-size:11px;font-weight:600;background:#E1F5EE;color:#085041");
        wsbadge.textContent="+ workshop";
        td4.appendChild(wsbadge);
      } else {
        var dash=document.createElement("span");
        dash.setAttribute("style","color:#ccc");
        dash.textContent="--";
        td4.appendChild(dash);
      }

      tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);
      tbody.appendChild(tr);
      n++;
    });
    cnt.textContent=n+" organisation"+(n!==1?"s":"");
    empty.style.display=n===0?"block":"none";
    tbl.style.display=n===0?"none":"table";
  }

  function setTheme(theme){
    active=theme;
    tabs.querySelectorAll("button").forEach(function(b){
      var bt=b.getAttribute("data-t");var on=bt===theme;
      if(bt==="all"){b.style.background=on?"#1a1a1a":"transparent";b.style.color=on?"#fff":"#555";b.style.borderColor=on?"#1a1a1a":"#ccc";}
      else{var t=T[bt]||{};b.style.background=on?t.color:t.bg;b.style.color=on?"#fff":t.color;b.style.borderColor=on?t.color:t.bg;}
    });
    render();
  }

  render();
}

function tryInit(){
  if(document.getElementById("t4gf")){
    init();
  } else {
    setTimeout(tryInit,50);
  }
}
tryInit();
})();
