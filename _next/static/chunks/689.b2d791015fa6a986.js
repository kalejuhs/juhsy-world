"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{689:(e,t,n)=>{let i,r;n.r(t),n.d(t,{default:()=>$});var a=n(3263),s=n(9952),o=n(4407),l=n(9014),d=n(8701);let c=new l.NRn,u=new l.Pq0;class f extends l.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new l.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new l.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new l.LuO(t,6,1);return this.setAttribute("instanceStart",new l.eHs(n,3,0)),this.setAttribute("instanceEnd",new l.eHs(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let i=new l.LuO(n,2*t,1);return this.setAttribute("instanceColorStart",new l.eHs(i,t,0)),this.setAttribute("instanceColorEnd",new l.eHs(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new l.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new l.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),c.setFromBufferAttribute(t),this.boundingBox.union(c))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new l.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)u.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(u)),u.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(u));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var p=n(7037);let m=parseInt(l.sPf.replace(/\D+/g,""));class h extends l.BKk{constructor(e){super({type:"LineMaterial",uniforms:l.LlO.clone(l.LlO.merge([p.UniformsLib.common,p.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new l.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${m>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let v=m>=125?"uv1":"uv2",y=new l.IUQ,x=new l.Pq0,g=new l.Pq0,w=new l.IUQ,S=new l.IUQ,b=new l.IUQ,E=new l.Pq0,_=new l.kn4,L=new l.cZY,z=new l.Pq0,A=new l.NRn,M=new l.iyt,U=new l.IUQ;function D(e,t,n){return U.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),U.multiplyScalar(1/U.w),U.x=r/n.width,U.y=r/n.height,U.applyMatrix4(e.projectionMatrixInverse),U.multiplyScalar(1/U.w),Math.abs(Math.max(U.x,U.y))}class P extends l.eaF{constructor(e=new f,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let e=0,r=0,a=t.count;e<a;e++,r+=2)x.fromBufferAttribute(t,e),g.fromBufferAttribute(n,e),i[r]=0===r?0:i[r-1],i[r+1]=i[r]+x.distanceTo(g);let r=new l.LuO(i,2,1);return e.setAttribute("instanceDistanceStart",new l.eHs(r,1,0)),e.setAttribute("instanceDistanceEnd",new l.eHs(r,1,1)),this}raycast(e,t){let n,a,s=this.material.worldUnits,o=e.camera;null!==o||s||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let d=void 0!==e.params.Line2&&e.params.Line2.threshold||0;i=e.ray;let c=this.matrixWorld,u=this.geometry,f=this.material;if(r=f.linewidth+d,null===u.boundingSphere&&u.computeBoundingSphere(),M.copy(u.boundingSphere).applyMatrix4(c),s)n=.5*r;else{let e=Math.max(o.near,M.distanceToPoint(i.origin));n=D(o,e,f.resolution)}if(M.radius+=n,!1!==i.intersectsSphere(M)){if(null===u.boundingBox&&u.computeBoundingBox(),A.copy(u.boundingBox).applyMatrix4(c),s)a=.5*r;else{let e=Math.max(o.near,A.distanceToPoint(i.origin));a=D(o,e,f.resolution)}A.expandByScalar(a),!1!==i.intersectsBox(A)&&(s?function(e,t){let n=e.matrixWorld,a=e.geometry,s=a.attributes.instanceStart,o=a.attributes.instanceEnd,d=Math.min(a.instanceCount,s.count);for(let a=0;a<d;a++){L.start.fromBufferAttribute(s,a),L.end.fromBufferAttribute(o,a),L.applyMatrix4(n);let d=new l.Pq0,c=new l.Pq0;i.distanceSqToSegment(L.start,L.end,c,d),c.distanceTo(d)<.5*r&&t.push({point:c,pointOnLine:d,distance:i.origin.distanceTo(c),object:e,face:null,faceIndex:a,uv:null,[v]:null})}}(this,t):function(e,t,n){let a=t.projectionMatrix,s=e.material.resolution,o=e.matrixWorld,d=e.geometry,c=d.attributes.instanceStart,u=d.attributes.instanceEnd,f=Math.min(d.instanceCount,c.count),p=-t.near;i.at(1,b),b.w=1,b.applyMatrix4(t.matrixWorldInverse),b.applyMatrix4(a),b.multiplyScalar(1/b.w),b.x*=s.x/2,b.y*=s.y/2,b.z=0,E.copy(b),_.multiplyMatrices(t.matrixWorldInverse,o);for(let t=0;t<f;t++){if(w.fromBufferAttribute(c,t),S.fromBufferAttribute(u,t),w.w=1,S.w=1,w.applyMatrix4(_),S.applyMatrix4(_),w.z>p&&S.z>p)continue;if(w.z>p){let e=w.z-S.z,t=(w.z-p)/e;w.lerp(S,t)}else if(S.z>p){let e=S.z-w.z,t=(S.z-p)/e;S.lerp(w,t)}w.applyMatrix4(a),S.applyMatrix4(a),w.multiplyScalar(1/w.w),S.multiplyScalar(1/S.w),w.x*=s.x/2,w.y*=s.y/2,S.x*=s.x/2,S.y*=s.y/2,L.start.copy(w),L.start.z=0,L.end.copy(S),L.end.z=0;let d=L.closestPointToPointParameter(E,!0);L.at(d,z);let f=l.cj9.lerp(w.z,S.z,d),m=f>=-1&&f<=1,h=E.distanceTo(z)<.5*r;if(m&&h){L.start.fromBufferAttribute(c,t),L.end.fromBufferAttribute(u,t),L.start.applyMatrix4(o),L.end.applyMatrix4(o);let r=new l.Pq0,a=new l.Pq0;i.distanceSqToSegment(L.start,L.end,a,r),n.push({point:a,pointOnLine:r,distance:i.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[v]:null})}}}(this,o,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(y),this.material.uniforms.resolution.value.set(y.z,y.w))}}class j extends f{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,i=new Float32Array(2*n);if(3===t)for(let r=0;r<n;r+=t)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];else for(let r=0;r<n;r+=t)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5],i[2*r+6]=e[r+6],i[2*r+7]=e[r+7];return super.setColors(i,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class O extends P{constructor(e=new j,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let C=o.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:i,lineWidth:r,segments:a,dashed:c,...u},p){var m,v;let y=(0,d.D)(e=>e.size),x=o.useMemo(()=>a?new P:new O,[a]),[g]=o.useState(()=>new h),w=(null==n||null==(m=n[0])?void 0:m.length)===4?4:3,S=o.useMemo(()=>{let i=a?new f:new j,r=e.map(e=>{let t=Array.isArray(e);return e instanceof l.Pq0||e instanceof l.IUQ?[e.x,e.y,e.z]:e instanceof l.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(i.setPositions(r.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof l.Q1f?e.toArray():e);i.setColors(e.flat(),w)}return i},[e,a,n,w]);return o.useLayoutEffect(()=>{x.computeLineDistances()},[e,x]),o.useLayoutEffect(()=>{c?g.defines.USE_DASH="":delete g.defines.USE_DASH,g.needsUpdate=!0},[c,g]),o.useEffect(()=>()=>{S.dispose(),g.dispose()},[S]),o.createElement("primitive",(0,s.A)({object:x,ref:p},u),o.createElement("primitive",{object:S,attach:"geometry"}),o.createElement("primitive",(0,s.A)({object:g,attach:"material",color:t,vertexColors:!!n,resolution:[y.width,y.height],linewidth:null!=(v=null!=i?i:r)?v:1,dashed:c,transparent:4===w},u)))}),B=o.forwardRef(({threshold:e=15,geometry:t,...n},i)=>{let r=o.useRef(null);o.useImperativeHandle(i,()=>r.current,[]);let a=o.useMemo(()=>[0,0,0,1,0,0],[]),d=o.useRef(null),c=o.useRef(null);return o.useLayoutEffect(()=>{let n=r.current.parent,i=null!=t?t:null==n?void 0:n.geometry;if(!i||d.current===i&&c.current===e)return;d.current=i,c.current=e;let a=new l.TDQ(i,e).attributes.position.array;r.current.geometry.setPositions(a),r.current.geometry.attributes.instanceStart.needsUpdate=!0,r.current.geometry.attributes.instanceEnd.needsUpdate=!0,r.current.computeLineDistances()}),o.createElement(C,(0,s.A)({segments:!0,points:a,ref:r,raycast:()=>null},n))}),R=o.forwardRef(({envMap:e,resolution:t=256,frames:n=1/0,makeDefault:i,children:r,...a},c)=>{let u=(0,d.D)(({set:e})=>e),f=(0,d.D)(({camera:e})=>e),p=(0,d.D)(({size:e})=>e),m=o.useRef(null);o.useImperativeHandle(c,()=>m.current,[]);let h=o.useRef(null),v=function(e){let t=(0,d.D)(e=>e.size),n=(0,d.D)(e=>e.viewport),i="number"==typeof e?e:t.width*n.dpr,r=t.height*n.dpr,a=("number"==typeof e?void 0:e)||{},{samples:s=0,depth:c,...u}=a,f=null!=c?c:a.depthBuffer,p=o.useMemo(()=>{let e=new l.nWS(i,r,{minFilter:l.k6q,magFilter:l.k6q,type:l.ix0,...u});return f&&(e.depthTexture=new l.VCu(i,r,l.RQf)),e.samples=s,e},[]);return o.useLayoutEffect(()=>{p.setSize(i,r),s&&(p.samples=s)},[s,p,i,r]),o.useEffect(()=>()=>p.dispose(),[]),p}(t);o.useLayoutEffect(()=>{a.manual||(m.current.aspect=p.width/p.height)},[p,a]),o.useLayoutEffect(()=>{m.current.updateProjectionMatrix()});let y=0,x=null,g="function"==typeof r;return(0,d.F)(t=>{g&&(1/0===n||y<n)&&(h.current.visible=!1,t.gl.setRenderTarget(v),x=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,m.current),t.scene.background=x,t.gl.setRenderTarget(null),h.current.visible=!0,y++)}),o.useLayoutEffect(()=>{if(i)return u(()=>({camera:m.current})),()=>u(()=>({camera:f}))},[m,i,u]),o.createElement(o.Fragment,null,o.createElement("perspectiveCamera",(0,s.A)({ref:m},a),!g&&r),o.createElement("group",{ref:h},g&&r(v.texture)))});var T=n(7735),H=n(9866),I=n(185),N=n.n(I),q=n(2560);class k extends o.Component{static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?this.props.fallback:this.props.children}constructor(...e){super(...e),this.state={hasError:!1}}}function W(e){return new l.Pq0(e.x,e.z,-e.y)}function F({segment:e,color:t,highlighted:n}){let i=W(e.start),r=W(e.end),s=r.clone().sub(i),o=s.length(),d=i.clone().add(r).multiplyScalar(.5),c=new l.PTz().setFromUnitVectors(new l.Pq0(0,1,0),s.normalize()),u=e.diameterMeters/2;return(0,a.jsxs)("mesh",{position:d,quaternion:c,castShadow:!0,children:[(0,a.jsx)("cylinderGeometry",{args:[u,u,o,10]}),(0,a.jsx)("meshStandardMaterial",{color:n?"#f05f50":t,emissive:n?"#761f19":"#000000",roughness:.55})]})}function G({element:e,color:t,highlighted:n}){let{min:i,max:r}=e.bounds,s=Math.max(r.x-i.x,.05),o=Math.max(r.y-i.y,.05),d=Math.max(r.z-i.z,.05),c=new l.Pq0((i.x+r.x)/2,(i.z+r.z)/2,-(i.y+r.y)/2);return(0,a.jsxs)("mesh",{position:c,castShadow:!0,children:[(0,a.jsx)("boxGeometry",{args:[s,d,o]}),(0,a.jsx)("meshStandardMaterial",{color:n?"#f05f50":t,emissive:n?"#761f19":"#102b36",emissiveIntensity:n?.6:.2,metalness:.18,roughness:.62,transparent:!0,opacity:.82}),(0,a.jsx)(B,{color:n?"#ffb3a5":"#b8d2dc"})]})}function V({volume:e}){let{min:t,max:n}=e;return(0,a.jsxs)("mesh",{position:[(t.x+n.x)/2,(t.z+n.z)/2,-(t.y+n.y)/2],children:[(0,a.jsx)("boxGeometry",{args:[n.x-t.x,n.z-t.z,n.y-t.y]}),(0,a.jsx)("meshStandardMaterial",{color:"#df824b",emissive:"#6c3219",emissiveIntensity:.22,transparent:!0,opacity:.2,depthWrite:!1}),(0,a.jsx)(B,{color:"#ffc187"})]})}function Q({position:e,target:t,far:n}){let i=(0,o.useRef)(null),[r,s,l]=e,[d,c,u]=t;return(0,o.useLayoutEffect)(()=>{let e=i.current;e&&(e.position.set(r,s,l),e.far=n,e.lookAt(d,c,u),e.updateProjectionMatrix())},[n,r,s,l,d,c,u]),(0,a.jsx)(R,{ref:i,makeDefault:!0,fov:40,near:.1})}function $({utilities:e,elements:t,excavation:n,findings:i,selectedFinding:r,copy:s}){let o=function(e,t,n){let i=n.min.x,r=n.max.x,a=n.min.z,s=n.max.z,o=-n.max.y,l=-n.min.y;for(let t of e){let e=Math.max(t.diameterMeters/2,.08);for(let n of[t.start,t.end])i=Math.min(i,n.x-e),r=Math.max(r,n.x+e),a=Math.min(a,n.z-e),s=Math.max(s,n.z+e),o=Math.min(o,-n.y-e),l=Math.max(l,-n.y+e)}for(let e of t)i=Math.min(i,e.bounds.min.x),r=Math.max(r,e.bounds.max.x),a=Math.min(a,e.bounds.min.z),s=Math.max(s,e.bounds.max.z),o=Math.min(o,-e.bounds.max.y),l=Math.max(l,-e.bounds.min.y);let d=[(i+r)/2,(a+s)/2,(o+l)/2],c=Math.max(r-i,s-a,l-o,1),u=1.8*c;return{center:d,cameraPosition:[d[0]+u,d[1]+.9*u,d[2]+u],span:c}}(e,t,n),l=new Map(i.map(e=>[`${e.source}:${e.id}`,e.severity]));return(0,a.jsx)("div",{className:N().viewport,children:(0,a.jsx)(k,{fallback:(0,a.jsx)("p",{className:N().viewportFallback,role:"status",children:s.view3dUnavailable}),children:(0,a.jsxs)(H.Hl,{role:"img","aria-label":s.view3dAriaLabel,dpr:[1,1.5],children:[(0,a.jsx)("color",{attach:"background",args:["#152729"]}),(0,a.jsx)("ambientLight",{intensity:1.2}),(0,a.jsx)("directionalLight",{position:[30,60,25],intensity:2,castShadow:!0}),(0,a.jsx)(Q,{position:o.cameraPosition,target:o.center,far:Math.max(500,20*o.span)}),(0,a.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[o.center[0],n.max.z-.15,o.center[2]],receiveShadow:!0,children:[(0,a.jsx)("planeGeometry",{args:[2.4*o.span,2.4*o.span]}),(0,a.jsx)("meshStandardMaterial",{color:"#263b37",roughness:1,transparent:!0,opacity:.18,depthWrite:!1})]}),(0,a.jsx)("gridHelper",{args:[2.4*o.span,28,"#57716a","#354d47"],position:[o.center[0],n.max.z,o.center[2]]}),(0,a.jsx)(V,{volume:n}),e.map(e=>{let t=l.get(`utility:${e.id}`),n=r===`utility:${e.id}`||"clash"===t&&null===r,i="clash"===t?"#ed7863":"clearance"===t?"#e4b45e":(0,q.S)(e.utilityType,"3d");return(0,a.jsx)(F,{segment:e,color:i,highlighted:n},e.id)}),t.map(e=>{let t=l.get(`ifc:${e.id}`),n=r===`ifc:${e.id}`||"clash"===t&&null===r;return(0,a.jsx)(G,{element:e,color:"clash"===t?"#ed7863":"clearance"===t?"#e3b65f":"#6394a1",highlighted:n},`${e.id}-${e.ifcType}`)}),(0,a.jsx)(T.N,{makeDefault:!0,enableDamping:!0,target:o.center,minDistance:Math.max(.02*o.span,.5),maxDistance:Math.max(8*o.span,180)})]})})})}}}]);