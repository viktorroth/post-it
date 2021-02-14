import{p as e,a as t,o,c as s,b as n,t as i,w as r,P as l,r as a,F as d,d as c,e as h}from"./vendor.ae78c135.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,i)=>{const r=new URL(e,s);if(self[t].moduleMap[r])return o(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),a=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){i(new Error(`Failed to import: ${e}`)),n(a)},onload(){o(self[t].moduleMap[r]),n(a)}});document.head.appendChild(a)})),self[t].moduleMap={}}}("/assets/");e("data-v-ffdff048"),t();const u={name:"Board",props:["text","color","boxWidth","boxHeight","posX","posY"],data(){return{dragging:!1,posClickedX:0,posClickedY:0,boxOffsetTop:this.posY,boxOffsetLeft:this.posX,xDiff:0,yDiff:0,keyStack:null,resize:{x:0,y:0}}},methods:{mouseDown(e){e.preventDefault(),this.posClickedX=e.clientX,this.posClickedY=e.clientY,this.xDiff=this.posClickedX-this.boxOffsetLeft,this.yDiff=this.posClickedY-this.boxOffsetTop,this.dragging=!0},elementDrag(e){e.preventDefault(),this.dragging?(this.boxOffsetLeft=e.clientX-this.xDiff,this.boxOffsetTop=e.clientY-this.yDiff):(this.boxWidth+=e.clientX-this.resize.x,this.boxHeight+=e.clientY-this.resize.y)},closeDragElement(e){this.dragging=!1},onKeyDown(e){"Escape"==e.key&&this.$refs.boxText.blur()},onDoubleClicked(e){this.$refs.boxText.focus();const t=document.createRange();t.selectNodeContents(this.$refs.boxText),t.collapse(!1);const o=window.getSelection();o.removeAllRanges(),o.addRange(t)},startResizing(e){this.$refs.note.removeEventListener("mousedown",this.mouseDown),this.$refs.note.removeEventListener("mousemove",this.elementDrag),this.$refs.note.removeEventListener("mouseup",this.closeDragElement),this.dragging=!1,this.resize.x=e.clientX,this.resize.y=e.clientY},stopResizing(e){console.log(e),this.$refs.note.addEventListener("mousedown",this.mouseDown),this.$refs.note.addEventListener("mousemove",this.elementDrag),this.$refs.note.addEventListener("mouseup",this.closeDragElement)}},mounted(){this.$refs.boxText.focus()}},f=r("data-v-4026ad4a");e("data-v-4026ad4a");const p={class:"w-full h-full relative"};t();const m=f(((e,t,r,l,a,d)=>(o(),s("div",{ref:"note",onMousedown:t[6]||(t[6]=(...e)=>d.mouseDown&&d.mouseDown(...e)),onMousemove:t[7]||(t[7]=(...e)=>d.elementDrag&&d.elementDrag(...e)),onMouseup:t[8]||(t[8]=(...e)=>d.closeDragElement&&d.closeDragElement(...e)),style:{top:a.boxOffsetTop+"px",left:a.boxOffsetLeft+"px",backgroundColor:r.color,width:r.boxWidth+"px",height:r.boxHeight+"px"},class:"absolute rounded-sm shadow-xl overflow-y-auto cursor-move"},[n("div",p,[n("p",{ref:"boxText",contenteditable:"",onKeydown:t[1]||(t[1]=(...e)=>d.onKeyDown&&d.onKeyDown(...e)),onDblclick:t[2]||(t[2]=(...e)=>d.onDoubleClicked&&d.onDoubleClicked(...e)),class:"p-2 outline-none w-full h-full"},i(r.text),545),n("div",{onMousedown:t[3]||(t[3]=(...e)=>d.startResizing&&d.startResizing(...e)),onMousemove:t[4]||(t[4]=(...e)=>d.elementDrag&&d.elementDrag(...e)),onMouseup:t[5]||(t[5]=(...e)=>d.stopResizing&&d.stopResizing(...e)),class:"absolute bottom-0 right-0 w-4 h-4 bg-green-500 cursor-se-resize"},null,32)])],36))));u.render=m,u.__scopeId="data-v-4026ad4a";const g={components:{Board:u},data:()=>({lastId:0,notes:[],keyStack:null,color:"RGBA(252, 211, 77, 1)",colorPicker:null}),methods:{randomNumber(e,t){const o=Math.random()*(t-e)+e;return Math.floor(o)},addNote(){this.lastId++,this.notes.push({id:this.lastId,text:"",color:this.color,width:210,height:220,posX:this.randomNumber(0,800),posY:this.randomNumber(0,800)}),this.colorPicker.closeHandler()}},mounted(){this.$nextTick((function(){document.addEventListener("keydown",(e=>{this.keyStack?("Control"==this.keyStack&&"n"==e.key||"n"==this.keyStack&&"Control"==e.key)&&this.addNote():this.keyStack=e.key})),document.addEventListener("keyup",(e=>{this.keyStack=null})),this.colorPicker=new l({parent:this.$refs.colorPickerButton,popup:"top"}),this.colorPicker.onChange=e=>{this.color=e.rgbaString}}))}},b={class:"optionHandlers"},x=n("img",{src:"/assets/add-24px.475c2975.svg",alt:"plus button"},null,-1),k={ref:"colorPickerButton",class:"fixed bottom-28 right-10 px-3 py-2 bg-blue-500 rounded-full"};g.render=function(e,t,i,r,l,h){const u=a("Board");return o(),s(d,null,[(o(!0),s(d,null,c(l.notes,(e=>(o(),s(u,{key:e.id,text:e.text,color:e.color,boxWidth:e.width,boxHeight:e.height,posX:e.posX,posY:e.posY},null,8,["text","color","boxWidth","boxHeight","posX","posY"])))),128)),n("div",b,[n("button",{onClick:t[1]||(t[1]=(...e)=>h.addNote&&h.addNote(...e)),class:"fixed bottom-10 right-10 p-4 rounded-full bg-blue-500 shadow-lg"},[x]),n("div",k,"Color",512)])],64)};h(g).mount("#app");
