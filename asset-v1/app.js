var app=new function(){this.name="Into The Pit",this.version="v?",this.date="2024",this.folder="asset-v1/",this.looptime=6620,this.bpm=145,this.totalframe=316,this.nbpolo=7,this.nbloopbonus=2,this.bonusloopA=!0,this.bonusendloopA=!1,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#090e30",this.col0="#5389A0",this.col1="#7FE2E2",this.col2="#7FE2E2",this.col3="#2B5B70",this.col4="#ffffff",this.animearray=[
{name:"2_michael",color:"0077B6",uniqsnd:!1},
{name:"6_thump",color:"802B5B",uniqsnd:!1},
{name:"9_mask",color:"802B5B",uniqsnd:!1},
{name:"15_monty",color:"FFAA28",uniqsnd:!1},
{name:"18_phoneguy",color:"A94915",uniqsnd:!1},
{name:"21_puppet",color:"FFFFFF",uniqsnd:!1},
],this.bonusarray=[{name:"Eyes",src:"bonus-eyes-hd.mp4",code:"2,6,9,15,18",sound:"bonus-eyes",aspire:"aspire-eyes"},{name:"Eyes",src:"bonus-eyes-hd.mp4",code:"2,6,9,15,18",sound:"bonus-eyes",aspire:"aspire-eyes"},{name:"Eyes",src:"bonus-eyes-hd.mp4",code:"2,6,9,15,18",sound:"bonus-eyes",aspire:"aspire-eyes"},{name:"Eyes",src:"bonus-eyes-hd.mp4",code:"2,6,9,15,18",sound:"bonus-eyes",aspire:"aspire-eyes"},{name:"Eyes",src:"bonus-eyes-hd.mp4",code:"2,6,9,15,18",sound:"bonus-eyes",aspire:"aspire-eyes"}],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};
