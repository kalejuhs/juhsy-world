(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{4042:e=>{e.exports={frame:"scene_frame__HpcAN",view:"scene_view__Wwe0q",gpuResidentFrame:"scene_gpuResidentFrame__TxZ8I",cpuView:"scene_cpuView__L1dHw",divider:"scene_divider__kOhqZ",gpuView:"scene_gpuView__yvcWc",canvas:"scene_canvas__UjdDL",viewLabel:"scene_viewLabel__JvwqB",cpuLabel:"scene_cpuLabel__NFnc6",gpuLabel:"scene_gpuLabel__lZmCz",fallback:"scene_fallback__MCFHa"}},7134:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var i=r(3872),n=r(8211),o=r(4477),a=r(4303),u=r(748),s=r(694),l=r(5309),c=r(9835);let f=`
uniform float uPhase;
uniform float uTimeStep;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 position = texture2D(texturePosition, uv);
  if (uPhase < 0.5) {
    vec3 velocity = texture2D(textureVelocity, uv).xyz;
    vec3 acceleration = texture2D(textureAcceleration, uv).xyz;
    position.xyz += velocity * uTimeStep + 0.5 * acceleration * uTimeStep * uTimeStep;
  }
  gl_FragColor = position;
}
`,p=`
uniform float uPhase;
uniform float uTimeStep;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 velocity = texture2D(textureVelocity, uv);
  if (uPhase < 0.5 || uPhase > 1.5) {
    vec3 acceleration = texture2D(textureAcceleration, uv).xyz;
    velocity.xyz += 0.5 * acceleration * uTimeStep;
  }
  gl_FragColor = velocity;
}
`,d=`
uniform float uPhase;
uniform float uParticleCount;
uniform float uSoftening;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 acceleration = texture2D(textureAcceleration, uv);
  if (uPhase > 0.5 && uPhase < 1.5) {
    float particle = gl_FragCoord.x - 0.5;
    vec3 position = texture2D(texturePosition, uv).xyz;
    vec3 total = vec3(0.0);
    float particleMass = 1.0 / uParticleCount;
    for (float other = 0.0; other < uParticleCount; other += 1.0) {
      if (abs(other - particle) < 0.5) continue;
      vec2 otherUv = vec2((other + 0.5) / uParticleCount, 0.5);
      vec3 difference = texture2D(texturePosition, otherUv).xyz - position;
      float distanceSquared = dot(difference, difference) + uSoftening * uSoftening;
      total += difference * particleMass / (distanceSquared * sqrt(distanceSquared));
    }
    acceleration = vec4(total, 0.0);
  }
  gl_FragColor = acceleration;
}
`;function m(e,t,r){let i=e.image.data;if(!(i instanceof Float32Array))throw TypeError("GPU initial textures must use Float32Array data.");for(let e=0;e<r;e++){let r=3*e,n=4*e;i[n]=t[r]??0,i[n+1]=t[r+1]??0,i[n+2]=t[r+2]??0,i[n+3]=0}e.needsUpdate=!0}function g(e,t,r){if(!e.capabilities.isWebGL2)throw Error("The GPU simulation requires WebGL 2.");if(!e.getContext().getExtension("EXT_color_buffer_float"))throw Error("The GPU simulation requires floating-point render targets.");if(!Number.isFinite(r)||r<=0)throw RangeError("Softening must be positive and finite.");let i=t.particleCount;if(i>e.capabilities.maxTextureSize)throw RangeError(`Particle count ${i} exceeds the GPU texture limit of ${e.capabilities.maxTextureSize}.`);let n=e.getContext();if(!("createQuery"in n))throw Error("The GPU simulation requires WebGL 2.");let o=n.getExtension("EXT_disjoint_timer_query_webgl2"),a="object"==typeof o&&null!==o&&"TIME_ELAPSED_EXT"in o&&"GPU_DISJOINT_EXT"in o?o:null,u=new c.d(i,1,e);u.setDataType(s.RQf);let l=u.createTexture(),g=u.createTexture(),v=u.createTexture();m(l,t.positions,i),m(g,t.velocities,i);let x=u.addVariable("texturePosition",f,l),h=u.addVariable("textureVelocity",p,g),P=[x,h,u.addVariable("textureAcceleration",d,v)];for(let e of P)u.setVariableDependencies(e,P),e.material.uniforms.uPhase={value:1},e.material.uniforms.uTimeStep={value:0},e.material.uniforms.uParticleCount={value:i},e.material.uniforms.uSoftening={value:r};let _=u.init();if(_)throw u.dispose(),Error(_);let w=(e,t)=>{for(let r of P){let i=r.material.uniforms.uPhase,n=r.material.uniforms.uTimeStep;if(!i||!n)throw Error("GPU compute uniforms were not initialized.");i.value=e,n.value=t}u.compute()};w(1,0);let y=!1;return{particleCount:i,supportsComputeTiming:null!==a,getPositionTexture(){if(y)throw Error("The GPU simulation has been disposed.");return u.getCurrentRenderTarget(x).texture},advance(e,t){if(y)throw Error("The GPU simulation has been disposed.");if(!Number.isSafeInteger(e)||e<0)throw RangeError("Step count must be a non-negative integer.");if(!Number.isFinite(t)||t<=0)throw RangeError("Time step must be positive and finite.");for(let r=0;r<e;r++)w(0,t),w(1,t),w(2,t)},advanceMeasured(e,t){if(!a)return this.advance(e,t),null;if(y)throw Error("The GPU simulation has been disposed.");let r=n.createQuery();if(!r)return this.advance(e,t),null;n.beginQuery(a.TIME_ELAPSED_EXT,r);try{this.advance(e,t)}catch(e){throw n.endQuery(a.TIME_ELAPSED_EXT),n.deleteQuery(r),e}n.endQuery(a.TIME_ELAPSED_EXT);let i=!1,o=()=>{i||(i=!0,n.deleteQuery(r))};return{async readMilliseconds(){let e=0;for(;!n.getQueryParameter(r,n.QUERY_RESULT_AVAILABLE)&&e<500;)await new Promise(e=>setTimeout(e,0)),e++;if(!n.getQueryParameter(r,n.QUERY_RESULT_AVAILABLE))return o(),null;let t=!!n.getParameter(a.GPU_DISJOINT_EXT),i=Number(n.getQueryParameter(r,n.QUERY_RESULT));return o(),t||!Number.isFinite(i)?null:i/1e6},dispose:o}},async readState(){if(y)throw Error("The GPU simulation has been disposed.");let t=new Float32Array(4*i),r=new Float32Array(4*i);await e.readRenderTargetPixelsAsync(u.getCurrentRenderTarget(x),0,0,i,1,t),await e.readRenderTargetPixelsAsync(u.getCurrentRenderTarget(h),0,0,i,1,r);let n=new Float32Array(3*i),o=new Float32Array(3*i);for(let e=0;e<i;e++){let i=4*e,a=3*e;n[a]=t[i]??0,n[a+1]=t[i+1]??0,n[a+2]=t[i+2]??0,o[a]=r[i]??0,o[a+1]=r[i+1]??0,o[a+2]=r[i+2]??0}return{positions:n,velocities:o}},dispose(){y||(y=!0,u.dispose())}}}var v=r(4042),x=r.n(v),h=r(589);function P({positions:e,position:t,color:r}){let n=(0,u.useMemo)(()=>{let t=new s.LoY;return t.setAttribute("position",new s.THS(e,3)),t.computeBoundingSphere(),t},[e]);return(0,u.useEffect)(()=>()=>n.dispose(),[n]),(0,i.jsx)("points",{geometry:n,position:t,children:(0,i.jsx)("pointsMaterial",{color:r,size:.055,sizeAttenuation:!0,transparent:!0,opacity:.92})})}function _({particleCount:e,positionTexture:t,position:r,color:n}){let a=(0,u.useRef)(null),l=(0,u.useMemo)(()=>{let t=new s.LoY,r=new Float32Array(3*e),i=new Float32Array(2*e);for(let t=0;t<e;t++)i[2*t]=(t+.5)/e,i[2*t+1]=.5;return t.setAttribute("position",new s.qtW(r,3)),t.setAttribute("uv",new s.qtW(i,2)),t.setDrawRange(0,e),t.boundingSphere=new s.iyt(new s.Pq0,20),t},[e]),c=(0,u.useMemo)(()=>new s.BKk({uniforms:{uPositions:{value:null},uColor:{value:new s.Q1f(n)},uOpacity:{value:.92},uPointSize:{value:.055},uViewportHeight:{value:1}},vertexShader:`
          uniform sampler2D uPositions;
          uniform float uPointSize;
          uniform float uViewportHeight;

          void main() {
            vec3 particlePosition = texture2D(uPositions, uv).xyz;
            vec4 viewPosition = modelViewMatrix * vec4(particlePosition, 1.0);
            gl_Position = projectionMatrix * viewPosition;
            gl_PointSize = max(
              1.0,
              uPointSize * uViewportHeight * 0.5 / -viewPosition.z
            );
          }
        `,fragmentShader:`
          uniform vec3 uColor;
          uniform float uOpacity;

          void main() {
            if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;
            gl_FragColor = vec4(uColor, uOpacity);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }
        `,transparent:!0,depthWrite:!1}),[n]),f=(0,o.D)(e=>e.size),p=(0,o.D)(e=>e.gl);return(0,o.F)(()=>{if(!a.current)return;let e=a.current.uniforms.uPositions,r=a.current.uniforms.uViewportHeight;e&&r&&(e.value=t,r.value=f.height*p.getPixelRatio())}),(0,u.useEffect)(()=>()=>l.dispose(),[l]),(0,u.useEffect)(()=>()=>c.dispose(),[c]),(0,i.jsx)("points",{geometry:l,position:r,children:(0,i.jsx)("primitive",{ref:a,object:c,attach:"material"})})}function w({sceneId:e,poseRef:t}){let r=(0,o.D)(e=>e.camera),a=(0,u.useRef)(null),s=(0,u.useRef)(0);return(0,o.F)(()=>{let i=t.current;i.source!==e&&i.revision!==s.current&&(r.position.set(...i.position),r.quaternion.set(...i.quaternion),a.current?.target.set(...i.target),a.current?.update(),r.updateMatrixWorld(),s.current=i.revision)}),(0,i.jsx)(n.N,{ref:a,enableDamping:!0,minDistance:5,maxDistance:17,onStart:()=>{t.current.source=e},onChange:function(){let i=t.current;if(i.source!==e)return;let n=a.current?.target;t.current={position:[r.position.x,r.position.y,r.position.z],quaternion:[r.quaternion.x,r.quaternion.y,r.quaternion.z,r.quaternion.w],target:[n?.x??0,n?.y??0,n?.z??0],source:e,revision:i.revision+1}}})}function y({sceneId:e,positions:t,particleCount:r,gpuResident:n,gpuPositionTexture:o,color:u,poseRef:s,onGpuSetup:l,onRenderFps:c,renderPaused:f}){let p="cpu"===e,d=!p&&n&&null!==o;return(0,i.jsxs)("div",{className:`${x().view} ${p?x().cpuView:x().gpuView}`,children:[(0,i.jsxs)("div",{className:`${x().viewLabel} ${p?x().cpuLabel:x().gpuLabel}`,"aria-hidden":"true",children:[(0,i.jsx)("strong",{children:p?"CPU WORKER":"GPU COMPUTE"}),(0,i.jsx)("span",{children:p?"FLOAT64 REFERENCE":"FLOAT32 TEXTURES"})]}),(0,i.jsxs)(a.Hl,{frameloop:f||n&&p?"never":"always",className:x().canvas,camera:{position:[0,0,9],fov:44,near:.1,far:100},dpr:[1,1.5],gl:{antialias:!0,alpha:!1},fallback:(0,i.jsx)("p",{className:x().fallback,children:"WebGL is unavailable in this browser."}),"aria-label":`${p?"CPU":"GPU"} gravitational particle simulation`,children:[(0,i.jsx)("color",{attach:"background",args:["#0c201f"]}),(0,i.jsx)("ambientLight",{intensity:1.15}),(0,i.jsx)("directionalLight",{position:[1,5,8],intensity:1.35}),(0,i.jsx)("gridHelper",{args:[4.2,14,p?"#4b6b64":"#416c66","#263e3a"],position:[0,-2,0]}),d&&o?(0,i.jsx)(_,{particleCount:r,positionTexture:o,position:[0,0,0],color:u}):(0,i.jsx)(P,{positions:t,position:[0,0,0],color:u}),(0,i.jsx)(w,{sceneId:e,poseRef:s}),!p&&(0,i.jsx)(T,{onSetup:l}),(0,i.jsx)(b,{onFps:t=>c(e,t),paused:f})]})]})}function T({onSetup:e}){let t=(0,o.D)(e=>e.gl);return(0,u.useEffect)(()=>{if(!(t instanceof l.WebGLRenderer))return void e({createRunner:null,error:"The GPU simulation requires the WebGL renderer.",maxParticleCount:0});let r=null,i=!1;return async function(){try{r=g(t,(0,h.KN)(32,260205,h.TC),h.TC),await r.readState(),r.dispose(),r=null,i||e({createRunner:(e,r)=>g(t,e,r),error:null,maxParticleCount:t.capabilities.maxTextureSize})}catch(t){r?.dispose(),r=null,i||e({createRunner:null,error:t instanceof Error?t.message:"GPU simulation is unavailable.",maxParticleCount:0})}}(),()=>{i=!0,r?.dispose()}},[t,e]),null}function b({onFps:e,paused:t}){let r=(0,u.useRef)({start:0,frames:0});return(0,u.useEffect)(()=>{r.current={start:0,frames:0}},[t]),(0,o.F)(()=>{if(t)return;let i=performance.now();0===r.current.start&&(r.current.start=i),r.current.frames++;let n=i-r.current.start;n>=500&&(e(1e3*r.current.frames/n),r.current={start:i,frames:0})}),null}function E({cpuPositions:e,gpuPositions:t,particleCount:r,gpuResident:n,gpuPositionTexture:o,onGpuSetup:a,onRenderFps:s,renderPaused:l}){let c=(0,u.useRef)({position:[0,0,9],quaternion:[0,0,0,1],target:[0,0,0],source:"cpu",revision:0});return(0,i.jsxs)("div",{className:`${x().frame} ${n?x().gpuResidentFrame:""}`,children:[(0,i.jsx)(y,{sceneId:"cpu",positions:e,particleCount:r,gpuResident:n,gpuPositionTexture:null,color:"#ec9a69",poseRef:c,onGpuSetup:a,onRenderFps:s,renderPaused:l}),(0,i.jsx)(y,{sceneId:"gpu",positions:t,particleCount:r,gpuResident:n,gpuPositionTexture:o,color:"#66c6ac",poseRef:c,onGpuSetup:a,onRenderFps:s,renderPaused:l}),(0,i.jsx)("span",{className:x().divider,"aria-hidden":"true"})]})}}}]);