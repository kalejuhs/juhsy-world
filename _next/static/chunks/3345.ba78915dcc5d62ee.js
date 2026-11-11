(()=>{var e,t,a,i,r,n,o={},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}},i=!0;try{o[e](a,a.exports,c),i=!1}finally{i&&delete s[e]}return a.exports}c.m=o,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(a,i){if(1&i&&(a=this(a)),8&i||"object"==typeof a&&a&&(4&i&&a.__esModule||16&i&&"function"==typeof a.then))return a;var r=Object.create(null);c.r(r);var n={};e=e||[null,t({}),t([]),t(t)];for(var o=2&i&&a;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach(e=>n[e]=()=>a[e]);return n.default=()=>a,c.d(r,n),r},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce((t,a)=>(c.f[a](e,t),t),[])),c.u=e=>"static/chunks/"+(({6339:"d3b70fbf",6963:"9c254f6c"})[e]||e)+"."+({3294:"1f7b9f35d6bb1b04",3459:"d5ffbe6d7a238c8f",6339:"2a8aa62ca5be21bb",6963:"5b57e9dfe50d036b"})[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.tt=()=>(void 0===a&&(a={createScriptURL:e=>e},"u">typeof trustedTypes&&trustedTypes.createPolicy&&(a=trustedTypes.createPolicy("nextjs#bundler",a))),a),c.tu=e=>c.tt().createScriptURL(e),c.p="/juhsy-world/_next/",i={3345:1},c.f.i=(e,t)=>{i[e]||importScripts(c.tu(c.p+c.u(e)))},n=(r=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push.bind(r),r.push=e=>{var[t,a,r]=e;for(var o in a)c.o(a,o)&&(c.m[o]=a[o]);for(r&&r(c);t.length;)i[t.pop()]=1;n(e)},(()=>{"use strict";let e;function t(e){if(e.some(e=>!Number.isFinite(e)))throw RangeError("Quaternion components must be finite.");let t=Math.max(...e.map(Math.abs));if(0===t)throw RangeError("Quaternion must have a non-zero magnitude.");let[a,i,r,n]=e,o=a/t,s=i/t,c=r/t,l=n/t,u=Math.hypot(o,s,c,l);return[o/u,s/u,c/u,l/u]}function a(e){let[a,i,r,n]=t(e),o=a*a,s=i*i,c=r*r,l=a*i,u=a*r,d=i*r,f=a*n,p=i*n,m=r*n;return[[1-2*(s+c),2*(l-m),2*(u+p)],[2*(l+m),1-2*(o+c),2*(d-f)],[2*(u-p),2*(d+f),1-2*(o+s)]]}function i(e,t){if(e.some(e=>!Number.isFinite(e)))throw RangeError("World point coordinates must be finite.");if(t.worldPosition.some(e=>!Number.isFinite(e)))throw RangeError("Camera world position must contain finite values.");let i=a(t.orientationCameraToWorld),r=[e[0]-t.worldPosition[0],e[1]-t.worldPosition[1],e[2]-t.worldPosition[2]],n=[i[0][0]*r[0]+i[1][0]*r[1]+i[2][0]*r[2],i[0][1]*r[0]+i[1][1]*r[1]+i[2][1]*r[2],i[0][2]*r[0]+i[1][2]*r[1]+i[2][2]*r[2]];if(n.some(e=>!Number.isFinite(e)))throw RangeError("Camera-space point must contain finite values.");return n}function r(e,t){if(e.some(e=>!Number.isFinite(e)||e<=0))throw RangeError("Scales must be positive finite numbers.");let[i,r,n]=e,o=[i*i,r*r,n*n];if(o.some(e=>!Number.isFinite(e)||e<=0))throw RangeError("Squared scales must be positive finite numbers.");let[s,c,l]=a(t),u=(e,t)=>e[0]*t[0]*o[0]+e[1]*t[1]*o[1]+e[2]*t[2]*o[2],d={xx:u(s,s),xy:u(s,c),xz:u(s,l),yy:u(c,c),yz:u(c,l),zz:u(l,l)};if(Object.values(d).some(e=>!Number.isFinite(e)))throw RangeError("Covariance must contain finite values.");return d}function n(e){if(Object.values(e).some(e=>!Number.isFinite(e)))throw RangeError("Covariance coefficients must be finite.");let a=new Float64Array([e.xx,e.xy,e.xz,e.xy,e.yy,e.yz,e.xz,e.yz,e.zz]),i=new Float64Array([1,0,0,0,1,0,0,0,1]),r=(e,t)=>a[3*e+t]??0,n=(e,t,i)=>{a[3*e+t]=i,a[3*t+e]=i};for(let e=0;e<48;e+=1){let e=0,t=1,a=Math.abs(r(0,1));for(let[i,n]of[[0,2],[1,2]]){let o=Math.abs(r(i,n));o>a&&(e=i,t=n,a=o)}if(a<=Number.EPSILON*Math.max(Math.abs(r(0,0)),Math.abs(r(1,1)),Math.abs(r(2,2)))*8)break;let o=r(e,t),s=(r(t,t)-r(e,e))/(2*o),c=0===s?1:Math.sign(s)/(Math.abs(s)+Math.hypot(1,s)),l=1/Math.sqrt(1+c*c),u=c*l,d=r(e,e),f=r(t,t);n(e,e,d-c*o),n(t,t,f+c*o),n(e,t,0);for(let a=0;a<3;a+=1){if(a===e||a===t)continue;let o=r(a,e),s=r(a,t);n(a,e,l*o-u*s),n(a,t,u*o+l*s);let c=i[3*a+e]??0,d=i[3*a+t]??0;i[3*a+e]=l*c-u*d,i[3*a+t]=u*c+l*d}}let o=[0,1,2].map(e=>{let t=[i[e]??0,i[3+e]??0,i[6+e]??0];return{value:r(e,e),vector:t}}).sort((e,t)=>t.value-e.value);if(o.some(({value:e})=>!Number.isFinite(e)||e<=0))throw RangeError("Covariance must be positive definite.");let s=o[0]?.vector,c=o[1]?.vector,l=o[2]?.vector;if(!s||!c||!l)throw RangeError("Covariance eigensystem is incomplete.");let u=[[s[0],c[0],l[0]],[s[1],c[1],l[1]],[s[2],c[2],l[2]]],d=u[0][0]*(u[1][1]*u[2][2]-u[1][2]*u[2][1])-u[0][1]*(u[1][0]*u[2][2]-u[1][2]*u[2][0])+u[0][2]*(u[1][0]*u[2][1]-u[1][1]*u[2][0])<0?[[u[0][0],u[0][1],-u[0][2]],[u[1][0],u[1][1],-u[1][2]],[u[2][0],u[2][1],-u[2][2]]]:u;return{scale:[Math.sqrt(o[0]?.value??0),Math.sqrt(o[1]?.value??0),Math.sqrt(o[2]?.value??0)],rotation:function(e){let a,i=e[0][0],r=e[0][1],n=e[0][2],o=e[1][0],s=e[1][1],c=e[1][2],l=e[2][0],u=e[2][1],d=e[2][2],f=i+s+d;if(f>0){let e=2*Math.sqrt(f+1);a=[(u-c)/e,(n-l)/e,(o-r)/e,.25*e]}else if(i>s&&i>d){let e=2*Math.sqrt(1+i-s-d);a=[.25*e,(r+o)/e,(n+l)/e,(u-c)/e]}else if(s>d){let e=2*Math.sqrt(1+s-i-d);a=[(r+o)/e,.25*e,(c+u)/e,(n-l)/e]}else{let e=2*Math.sqrt(1+d-i-s);a=[(n+l)/e,(c+u)/e,.25*e,(o-r)/e]}let p=t(a);return p[3]<0?[-p[0],-p[1],-p[2],-p[3]]:p}(d)}}let o=`
fn projectionCovariancePositionGradient(
  depth: f32,
  jacobianX: vec3<f32>,
  jacobianY: vec3<f32>,
  covarianceTimesJacobianX: vec3<f32>,
  covarianceTimesJacobianY: vec3<f32>,
  screenGradient: vec3<f32>,
) -> vec3<f32> {
  let gradientX = 2.0 * (
    screenGradient.x * covarianceTimesJacobianX + screenGradient.y * covarianceTimesJacobianY
  );
  let gradientY = 2.0 * (
    screenGradient.y * covarianceTimesJacobianX + screenGradient.z * covarianceTimesJacobianY
  );
  return vec3<f32>(
    gradientX.z * jacobianX.x,
    gradientY.z * jacobianY.y,
    dot(gradientX, jacobianX) + gradientX.z * jacobianX.z +
      dot(gradientY, jacobianY) + gradientY.z * jacobianY.z,
  ) / depth;
}
`,s=`
fn realSphericalHarmonicBasis(direction: vec3<f32>, degree: u32) -> array<f32, 16> {
  let directionLength = length(direction);
  let unitDirection = select(
    vec3<f32>(0.0, 0.0, 1.0),
    direction / max(directionLength, 1e-8),
    directionLength > 1e-8,
  );
  let x = unitDirection.x;
  let y = unitDirection.y;
  let z = unitDirection.z;
  var basis: array<f32, 16>;
  for (var index = 0u; index < 16u; index += 1u) {
    basis[index] = 0.0;
  }
  basis[0] = 0.28209479177387814;
  if (degree >= 1u) {
    basis[1] = -0.4886025119029199 * y;
    basis[2] = 0.4886025119029199 * z;
    basis[3] = -0.4886025119029199 * x;
  }
  if (degree >= 2u) {
    basis[4] = 1.0925484305920792 * x * y;
    basis[5] = -1.0925484305920792 * y * z;
    basis[6] = 0.31539156525252005 * (2.0 * z * z - x * x - y * y);
    basis[7] = -1.0925484305920792 * x * z;
    basis[8] = 0.5462742152960396 * (x * x - y * y);
  }
  if (degree >= 3u) {
    basis[9] = -0.5900435899266435 * y * (3.0 * x * x - y * y);
    basis[10] = 2.890611442640554 * x * y * z;
    basis[11] = -0.4570457994644658 * y * (4.0 * z * z - x * x - y * y);
    basis[12] = 0.3731763325901154 * z * (2.0 * z * z - 3.0 * x * x - 3.0 * y * y);
    basis[13] = -0.4570457994644658 * x * (4.0 * z * z - x * x - y * y);
    basis[14] = 1.445305721320277 * z * (x * x - y * y);
    basis[15] = -0.5900435899266435 * x * (x * x - 3.0 * y * y);
  }
  return basis;
}

// Derivatives of each basis value with respect to the unnormalized direction vector.
fn realSphericalHarmonicBasisDirectionGradient(direction: vec3<f32>, degree: u32) -> array<vec3<f32>, 16> {
  var gradient: array<vec3<f32>, 16>;
  for (var index = 0u; index < 16u; index += 1u) {
    gradient[index] = vec3<f32>(0.0);
  }
  let directionLength = length(direction);
  if (degree == 0u || directionLength <= 1e-8) {
    return gradient;
  }
  let unitDirection = direction / directionLength;
  let x = unitDirection.x;
  let y = unitDirection.y;
  let z = unitDirection.z;
  let c1 = 0.4886025119029199;
  gradient[1] = vec3<f32>(0.0, -c1, 0.0);
  gradient[2] = vec3<f32>(0.0, 0.0, c1);
  gradient[3] = vec3<f32>(-c1, 0.0, 0.0);
  if (degree >= 2u) {
    let c4 = 1.0925484305920792;
    let c6 = 0.31539156525252005;
    let c8 = 0.5462742152960396;
    gradient[4] = c4 * vec3<f32>(y, x, 0.0);
    gradient[5] = -c4 * vec3<f32>(0.0, z, y);
    gradient[6] = c6 * vec3<f32>(-2.0 * x, -2.0 * y, 4.0 * z);
    gradient[7] = -c4 * vec3<f32>(z, 0.0, x);
    gradient[8] = c8 * vec3<f32>(2.0 * x, -2.0 * y, 0.0);
  }
  if (degree >= 3u) {
    let a = -0.5900435899266435;
    let b = 2.890611442640554;
    let d = -0.4570457994644658;
    let e = 0.3731763325901154;
    let f = 1.445305721320277;
    gradient[9] = a * vec3<f32>(6.0 * x * y, 3.0 * x * x - 3.0 * y * y, 0.0);
    gradient[10] = b * vec3<f32>(y * z, x * z, x * y);
    gradient[11] = d * vec3<f32>(-2.0 * x * y, 4.0 * z * z - x * x - 3.0 * y * y, 8.0 * y * z);
    gradient[12] = e * vec3<f32>(-6.0 * x * z, -6.0 * y * z, 6.0 * z * z - 3.0 * x * x - 3.0 * y * y);
    gradient[13] = d * vec3<f32>(4.0 * z * z - 3.0 * x * x - y * y, -2.0 * x * y, 8.0 * x * z);
    gradient[14] = f * vec3<f32>(2.0 * x * z, -2.0 * y * z, x * x - y * y);
    gradient[15] = a * vec3<f32>(3.0 * x * x - 3.0 * y * y, -6.0 * x * y, 0.0);
  }
  for (var index = 1u; index < 16u; index += 1u) {
    let unitGradient = gradient[index];
    gradient[index] = (unitGradient - unitDirection * dot(unitDirection, unitGradient)) / directionLength;
  }
  return gradient;
}
`;function l(e){let t=Array.from({length:16},()=>[0,0,0]);return t[0]=[(e[0]-.5)/.28209479177387814,(e[1]-.5)/.28209479177387814,(e[2]-.5)/.28209479177387814],t}let u=Math.floor(0xffffffff/119),d=`
struct CloudTrainingParameters {
  width: u32,
  height: u32,
  viewCount: u32,
  splatCount: u32,
  learningRate: f32,
  padding0: u32,
  shDegree: u32,
  iteration: u32,
};

@group(0) @binding(0) var<storage, read> views: array<f32>;
@group(0) @binding(1) var<storage, read> targetPixels: array<vec4<f32>>;
@group(0) @binding(2) var<uniform> parameters: CloudTrainingParameters;
@group(0) @binding(3) var<storage, read_write> gaussianState: array<f32>;
@group(0) @binding(4) var<storage, read_write> lossOutput: array<f32>;
@group(0) @binding(5) var<storage, read_write> projectedGaussians: array<f32>;
@group(0) @binding(6) var<storage, read_write> gaussianOrder: array<u32>;
@group(0) @binding(7) var<storage, read_write> gradientStatistics: array<f32>;

${s}
${o}

fn stateBase(splatIndex: u32) -> u32 {
  return splatIndex * 59u;
}

fn gaussianColorForView(splatIndex: u32, viewDirection: vec3<f32>) -> vec3<f32> {
  let state = stateBase(splatIndex);
  let basis = realSphericalHarmonicBasis(viewDirection, parameters.shDegree);
  let activeCoefficientCount = (parameters.shDegree + 1u) * (parameters.shDegree + 1u);
  var color = vec3<f32>(
    gaussianState[state + 11u],
    gaussianState[state + 12u],
    gaussianState[state + 13u],
  );
  for (var coefficientIndex = 1u; coefficientIndex < activeCoefficientCount; coefficientIndex += 1u) {
    let coefficientBase = state + 14u + (coefficientIndex - 1u) * 3u;
    color += basis[coefficientIndex] * vec3<f32>(
      gaussianState[coefficientBase],
      gaussianState[coefficientBase + 1u],
      gaussianState[coefficientBase + 2u],
    );
  }
  return color;
}

// Column c is the derivative of color channel c with respect to world position.
fn gaussianColorPositionGradient(splatIndex: u32, viewDirection: vec3<f32>) -> mat3x3<f32> {
  let state = stateBase(splatIndex);
  let directionGradient = realSphericalHarmonicBasisDirectionGradient(
    viewDirection,
    parameters.shDegree,
  );
  let activeCoefficientCount = (parameters.shDegree + 1u) * (parameters.shDegree + 1u);
  var gradient = mat3x3<f32>(vec3<f32>(0.0), vec3<f32>(0.0), vec3<f32>(0.0));
  for (var coefficientIndex = 1u; coefficientIndex < activeCoefficientCount; coefficientIndex += 1u) {
    let coefficientBase = state + 14u + (coefficientIndex - 1u) * 3u;
    for (var channel = 0u; channel < 3u; channel += 1u) {
      gradient[channel] += gaussianState[coefficientBase + channel] * directionGradient[coefficientIndex];
    }
  }
  return gradient;
}

fn normalizeGaussianQuaternion(quaternion: vec4<f32>) -> vec4<f32> {
  let quaternionLength = length(quaternion);
  return select(
    vec4<f32>(0.0, 0.0, 0.0, 1.0),
    quaternion / max(quaternionLength, 1e-8),
    quaternionLength > 1e-8,
  );
}

fn gaussianRotationFromQuaternion(quaternionInput: vec4<f32>) -> mat3x3<f32> {
  let quaternion = normalizeGaussianQuaternion(quaternionInput);
  let x = quaternion.x;
  let y = quaternion.y;
  let z = quaternion.z;
  let w = quaternion.w;
  return mat3x3<f32>(
    vec3<f32>(1.0 - 2.0 * (y * y + z * z), 2.0 * (x * y + z * w), 2.0 * (x * z - y * w)),
    vec3<f32>(2.0 * (x * y - z * w), 1.0 - 2.0 * (x * x + z * z), 2.0 * (y * z + x * w)),
    vec3<f32>(2.0 * (x * z + y * w), 2.0 * (y * z - x * w), 1.0 - 2.0 * (x * x + y * y)),
  );
}

fn gaussianCovarianceFromScaleQuaternion(scale: vec3<f32>, quaternion: vec4<f32>) -> mat3x3<f32> {
  let rotation = gaussianRotationFromQuaternion(quaternion);
  let scaledRotation = mat3x3<f32>(
    rotation[0] * scale.x,
    rotation[1] * scale.y,
    rotation[2] * scale.z,
  );
  return scaledRotation * transpose(scaledRotation);
}

fn scaleQuaternionGradient(
  state: u32,
  covarianceGradientInput: mat3x3<f32>,
) -> array<f32, 7> {
  let covarianceGradient =
    0.5 * (covarianceGradientInput + transpose(covarianceGradientInput));
  let scale = exp(vec3<f32>(
    gaussianState[state + 3u],
    gaussianState[state + 4u],
    gaussianState[state + 5u],
  ));
  let quaternion = normalizeGaussianQuaternion(vec4<f32>(
    gaussianState[state + 6u],
    gaussianState[state + 7u],
    gaussianState[state + 8u],
    gaussianState[state + 9u],
  ));
  let rotation = gaussianRotationFromQuaternion(quaternion);
  var result: array<f32, 7>;
  for (var axis = 0u; axis < 3u; axis += 1u) {
    let direction = rotation[axis];
    result[axis] = 2.0 * scale[axis] * scale[axis] * dot(direction, covarianceGradient * direction);
  }
  let differenceStep = 0.001;
  for (var component = 0u; component < 4u; component += 1u) {
    var plus = quaternion;
    var minus = quaternion;
    plus[component] += differenceStep;
    minus[component] -= differenceStep;
    let covariancePlus = gaussianCovarianceFromScaleQuaternion(scale, plus);
    let covarianceMinus = gaussianCovarianceFromScaleQuaternion(scale, minus);
    let covarianceDifference = covariancePlus - covarianceMinus;
    let covarianceDerivative = mat3x3<f32>(
      covarianceDifference[0] / (2.0 * differenceStep),
      covarianceDifference[1] / (2.0 * differenceStep),
      covarianceDifference[2] / (2.0 * differenceStep),
    );
    result[3u + component] =
      dot(covarianceGradient[0], covarianceDerivative[0]) +
      dot(covarianceGradient[1], covarianceDerivative[1]) +
      dot(covarianceGradient[2], covarianceDerivative[2]);
  }
  return result;
}

fn projectionBase(splatIndex: u32) -> u32 {
  return splatIndex * 42u;
}

fn outerProduct3(first: vec3<f32>, second: vec3<f32>) -> mat3x3<f32> {
  return mat3x3<f32>(
    vec3<f32>(first.x * second.x, first.y * second.x, first.z * second.x),
    vec3<f32>(first.x * second.y, first.y * second.y, first.z * second.y),
    vec3<f32>(first.x * second.z, first.y * second.z, first.z * second.z),
  );
}

fn writeProjection(viewIndex: u32, splatIndex: u32) {
  let base = projectionBase(splatIndex);
  for (var field = 0u; field < 42u; field += 1u) {
    projectedGaussians[base + field] = 0.0;
  }

  let viewBase = viewIndex * 19u;
  let state = stateBase(splatIndex);
  let cameraToWorld = mat3x3<f32>(
    vec3<f32>(views[viewBase], views[viewBase + 3u], views[viewBase + 6u]),
    vec3<f32>(views[viewBase + 1u], views[viewBase + 4u], views[viewBase + 7u]),
    vec3<f32>(views[viewBase + 2u], views[viewBase + 5u], views[viewBase + 8u]),
  );
  let relativePosition = vec3<f32>(
    gaussianState[state] - views[viewBase + 9u],
    gaussianState[state + 1u] - views[viewBase + 10u],
    gaussianState[state + 2u] - views[viewBase + 11u],
  );
  let cameraPosition = vec3<f32>(
    dot(cameraToWorld[0], relativePosition),
    dot(cameraToWorld[1], relativePosition),
    dot(cameraToWorld[2], relativePosition),
  );
  let depth = -cameraPosition.z;
  if (depth <= 0.0001) {
    return;
  }

  let scale = exp(vec3<f32>(
    gaussianState[state + 3u],
    gaussianState[state + 4u],
    gaussianState[state + 5u],
  ));
  let quaternion = vec4<f32>(
    gaussianState[state + 6u],
    gaussianState[state + 7u],
    gaussianState[state + 8u],
    gaussianState[state + 9u],
  );
  let worldCovariance = gaussianCovarianceFromScaleQuaternion(scale, quaternion);
  let cameraCovariance = transpose(cameraToWorld) * worldCovariance * cameraToWorld;
  let focalLengthX = views[viewBase + 12u];
  let focalLengthY = views[viewBase + 13u];
  let cameraJacobianPixelX = vec3<f32>(
    focalLengthX / depth,
    0.0,
    focalLengthX * cameraPosition.x / (depth * depth),
  );
  let cameraJacobianPixelY = vec3<f32>(
    0.0,
    -focalLengthY / depth,
    -focalLengthY * cameraPosition.y / (depth * depth),
  );
  let projectedXX = dot(cameraJacobianPixelX, cameraCovariance * cameraJacobianPixelX);
  let projectedXY = dot(cameraJacobianPixelX, cameraCovariance * cameraJacobianPixelY);
  let projectedYY = dot(cameraJacobianPixelY, cameraCovariance * cameraJacobianPixelY);
  let covarianceTimesJacobianX = cameraCovariance * cameraJacobianPixelX;
  let covarianceTimesJacobianY = cameraCovariance * cameraJacobianPixelY;
  for (var axis = 0u; axis < 3u; axis += 1u) {
    projectedGaussians[base + 33u + axis] = covarianceTimesJacobianX[axis];
    projectedGaussians[base + 36u + axis] = covarianceTimesJacobianY[axis];
  }
  let determinant = projectedXX * projectedYY - projectedXY * projectedXY;
  if (determinant <= 1e-12 || projectedXX <= 0.0 || projectedYY <= 0.0) {
    return;
  }

  let center = vec2<f32>(
    focalLengthX * cameraPosition.x / depth + views[viewBase + 14u],
    views[viewBase + 15u] - focalLengthY * cameraPosition.y / depth,
  );
  let jacobianPixelX = vec3<f32>(
    dot(cameraJacobianPixelX, vec3<f32>(views[viewBase], views[viewBase + 1u], views[viewBase + 2u])),
    dot(cameraJacobianPixelX, vec3<f32>(views[viewBase + 3u], views[viewBase + 4u], views[viewBase + 5u])),
    dot(cameraJacobianPixelX, vec3<f32>(views[viewBase + 6u], views[viewBase + 7u], views[viewBase + 8u])),
  );
  let jacobianPixelY = vec3<f32>(
    dot(cameraJacobianPixelY, vec3<f32>(views[viewBase], views[viewBase + 1u], views[viewBase + 2u])),
    dot(cameraJacobianPixelY, vec3<f32>(views[viewBase + 3u], views[viewBase + 4u], views[viewBase + 5u])),
    dot(cameraJacobianPixelY, vec3<f32>(views[viewBase + 6u], views[viewBase + 7u], views[viewBase + 8u])),
  );

  projectedGaussians[base] = depth;
  projectedGaussians[base + 1u] = center.x;
  projectedGaussians[base + 2u] = center.y;
  projectedGaussians[base + 3u] = projectedXX;
  projectedGaussians[base + 4u] = projectedXY;
  projectedGaussians[base + 5u] = projectedYY;
  projectedGaussians[base + 6u] = projectedYY / determinant;
  projectedGaussians[base + 7u] = -projectedXY / determinant;
  projectedGaussians[base + 8u] = projectedXX / determinant;
  projectedGaussians[base + 9u] = jacobianPixelX.x;
  projectedGaussians[base + 10u] = jacobianPixelX.y;
  projectedGaussians[base + 11u] = jacobianPixelX.z;
  projectedGaussians[base + 12u] = jacobianPixelY.x;
  projectedGaussians[base + 13u] = jacobianPixelY.y;
  projectedGaussians[base + 14u] = jacobianPixelY.z;
  projectedGaussians[base + 15u] = cameraJacobianPixelX.x;
  projectedGaussians[base + 16u] = cameraJacobianPixelX.y;
  projectedGaussians[base + 17u] = cameraJacobianPixelX.z;
  projectedGaussians[base + 18u] = cameraJacobianPixelY.x;
  projectedGaussians[base + 19u] = cameraJacobianPixelY.y;
  projectedGaussians[base + 20u] = cameraJacobianPixelY.z;
  for (var column = 0u; column < 3u; column += 1u) {
    for (var row = 0u; row < 3u; row += 1u) {
      projectedGaussians[base + 21u + column * 3u + row] = cameraToWorld[column][row];
    }
  }
  let rawViewColor = gaussianColorForView(splatIndex, relativePosition);
  let viewColor = max(rawViewColor, vec3<f32>(0.0));
  let colorGradientMask = select(vec3<f32>(0.0), vec3<f32>(1.0), rawViewColor >= vec3<f32>(0.0));
  for (var channel = 0u; channel < 3u; channel += 1u) {
    projectedGaussians[base + 39u + channel] = colorGradientMask[channel];
  }
  projectedGaussians[base + 30u] = viewColor.r;
  projectedGaussians[base + 31u] = viewColor.g;
  projectedGaussians[base + 32u] = viewColor.b;
}

fn prepareView(viewIndex: u32) {
  for (var splatIndex = 0u; splatIndex < parameters.splatCount; splatIndex += 1u) {
    writeProjection(viewIndex, splatIndex);
    var insertion = splatIndex;
    loop {
      if (insertion == 0u) {
        break;
      }
      let previousIndex = gaussianOrder[insertion - 1u];
      let previousDepth = projectedGaussians[projectionBase(previousIndex)];
      let currentDepth = projectedGaussians[projectionBase(splatIndex)];
      let previousKey = select(3.402823e+38, previousDepth, previousDepth > 0.0);
      let currentKey = select(3.402823e+38, currentDepth, currentDepth > 0.0);
      if (previousKey <= currentKey) {
        break;
      }
      gaussianOrder[insertion] = previousIndex;
      insertion -= 1u;
    }
    gaussianOrder[insertion] = splatIndex;
  }
}

fn gaussianWeight(splatIndex: u32, pixel: vec2<f32>) -> f32 {
  let base = projectionBase(splatIndex);
  let depth = projectedGaussians[base];
  if (depth <= 0.0) {
    return 0.0;
  }
  let offset = pixel - vec2<f32>(projectedGaussians[base + 1u], projectedGaussians[base + 2u]);
  let radiusX = 3.0 * sqrt(projectedGaussians[base + 3u]);
  let radiusY = 3.0 * sqrt(projectedGaussians[base + 5u]);
  if (abs(offset.x) > radiusX || abs(offset.y) > radiusY) {
    return 0.0;
  }
  let squaredDistance =
    projectedGaussians[base + 6u] * offset.x * offset.x +
    2.0 * projectedGaussians[base + 7u] * offset.x * offset.y +
    projectedGaussians[base + 8u] * offset.y * offset.y;
  return exp(-0.5 * max(0.0, squaredDistance));
}

fn viewBackground(viewIndex: u32) -> vec3<f32> {
  let base = viewIndex * 19u;
  return vec3<f32>(views[base + 16u], views[base + 17u], views[base + 18u]);
}

fn renderPixel(viewIndex: u32, pixel: vec2<f32>) -> vec3<f32> {
  var color = vec3<f32>(0.0);
  var transmittance = 1.0;
  for (var rank = 0u; rank < parameters.splatCount; rank += 1u) {
    let splatIndex = gaussianOrder[rank];
    let weight = gaussianWeight(splatIndex, pixel);
    if (weight == 0.0) {
      continue;
    }
    let state = stateBase(splatIndex);
    let projection = projectionBase(splatIndex);
    let alpha = gaussianState[state + 10u] * weight;
    color += transmittance * alpha * vec3<f32>(
      projectedGaussians[projection + 30u],
      projectedGaussians[projection + 31u],
      projectedGaussians[projection + 32u],
    );
    transmittance *= 1.0 - alpha;
  }
  return color + transmittance * viewBackground(viewIndex);
}

@compute @workgroup_size(1)
fn main(@builtin(global_invocation_id) invocation: vec3<u32>) {
  if (invocation.x != 0u || invocation.y != 0u || invocation.z != 0u) {
    return;
  }

  let pixelCount = parameters.viewCount * parameters.width * parameters.height;
  let normalization = 1.0 / (f32(pixelCount) * 3.0);
  if (parameters.learningRate <= 0.0) {
    var totalLoss = 0.0;
    for (var viewIndex = 0u; viewIndex < parameters.viewCount; viewIndex += 1u) {
      prepareView(viewIndex);
      for (var pixelY = 0u; pixelY < parameters.height; pixelY += 1u) {
        for (var pixelX = 0u; pixelX < parameters.width; pixelX += 1u) {
          let targetIndex =
            viewIndex * parameters.width * parameters.height + pixelY * parameters.width + pixelX;
          let pixel = vec2<f32>(f32(pixelX) + 0.5, f32(pixelY) + 0.5);
          let difference = renderPixel(viewIndex, pixel) - targetPixels[targetIndex].rgb;
          totalLoss += dot(difference, difference);
        }
      }
    }
    lossOutput[0] = totalLoss * normalization;
    return;
  }

  for (var selected = 0u; selected < parameters.splatCount; selected += 1u) {
    let selectedState = stateBase(selected);
    let worldPosition = vec3<f32>(
      gaussianState[selectedState],
      gaussianState[selectedState + 1u],
      gaussianState[selectedState + 2u],
    );
    let opacity = gaussianState[selectedState + 10u];
    var worldPositionGradient = vec3<f32>(0.0);
    var worldCovarianceGradient = mat3x3<f32>(
      vec3<f32>(0.0),
      vec3<f32>(0.0),
      vec3<f32>(0.0),
    );
    var colorGradient = vec3<f32>(0.0);
    var opacityGradient = 0.0;

    for (var viewIndex = 0u; viewIndex < parameters.viewCount; viewIndex += 1u) {
      prepareView(viewIndex);
      let selectedProjection = projectionBase(selected);
      if (projectedGaussians[selectedProjection] <= 0.0) {
        continue;
      }
      var selectedRank = parameters.splatCount;
      for (var rank = 0u; rank < parameters.splatCount; rank += 1u) {
        if (gaussianOrder[rank] == selected) {
          selectedRank = rank;
          break;
        }
      }
      let selectedCenter = vec2<f32>(
        projectedGaussians[selectedProjection + 1u],
        projectedGaussians[selectedProjection + 2u],
      );
      let conicXX = projectedGaussians[selectedProjection + 6u];
      let conicXY = projectedGaussians[selectedProjection + 7u];
      let conicYY = projectedGaussians[selectedProjection + 8u];
      let jacobianPixelX = vec3<f32>(
        projectedGaussians[selectedProjection + 9u],
        projectedGaussians[selectedProjection + 10u],
        projectedGaussians[selectedProjection + 11u],
      );
      let jacobianPixelY = vec3<f32>(
        projectedGaussians[selectedProjection + 12u],
        projectedGaussians[selectedProjection + 13u],
        projectedGaussians[selectedProjection + 14u],
      );
      let cameraJacobianPixelX = vec3<f32>(
        projectedGaussians[selectedProjection + 15u],
        projectedGaussians[selectedProjection + 16u],
        projectedGaussians[selectedProjection + 17u],
      );
      let cameraJacobianPixelY = vec3<f32>(
        projectedGaussians[selectedProjection + 18u],
        projectedGaussians[selectedProjection + 19u],
        projectedGaussians[selectedProjection + 20u],
      );
      let cameraToWorld = mat3x3<f32>(
        vec3<f32>(
          projectedGaussians[selectedProjection + 21u],
          projectedGaussians[selectedProjection + 22u],
          projectedGaussians[selectedProjection + 23u],
        ),
        vec3<f32>(
          projectedGaussians[selectedProjection + 24u],
          projectedGaussians[selectedProjection + 25u],
          projectedGaussians[selectedProjection + 26u],
        ),
        vec3<f32>(
          projectedGaussians[selectedProjection + 27u],
          projectedGaussians[selectedProjection + 28u],
          projectedGaussians[selectedProjection + 29u],
        ),
      );
      var centerGradient = vec2<f32>(0.0);
      var viewColorGradient = vec3<f32>(0.0);
      var cameraCovarianceGradient = mat3x3<f32>(
        vec3<f32>(0.0),
        vec3<f32>(0.0),
        vec3<f32>(0.0),
      );

      for (var pixelY = 0u; pixelY < parameters.height; pixelY += 1u) {
        for (var pixelX = 0u; pixelX < parameters.width; pixelX += 1u) {
          let pixel = vec2<f32>(f32(pixelX) + 0.5, f32(pixelY) + 0.5);
          let offset = pixel - selectedCenter;
          let conicTimesOffset = vec2<f32>(
            conicXX * offset.x + conicXY * offset.y,
            conicXY * offset.x + conicYY * offset.y,
          );
          let selectedWeight = gaussianWeight(selected, pixel);
          if (selectedWeight == 0.0) {
            continue;
          }
          var transmittanceBefore = 1.0;
          for (var rank = 0u; rank < selectedRank; rank += 1u) {
            let priorIndex = gaussianOrder[rank];
            let priorWeight = gaussianWeight(priorIndex, pixel);
            let priorState = stateBase(priorIndex);
            transmittanceBefore *= 1.0 - gaussianState[priorState + 10u] * priorWeight;
          }
          var behindColor = viewBackground(viewIndex);
          var reverseRank = parameters.splatCount;
          loop {
            if (reverseRank <= selectedRank + 1u) {
              break;
            }
            reverseRank -= 1u;
            let behindIndex = gaussianOrder[reverseRank];
            let behindWeight = gaussianWeight(behindIndex, pixel);
            let behindState = stateBase(behindIndex);
            let behindProjection = projectionBase(behindIndex);
            let behindAlpha = gaussianState[behindState + 10u] * behindWeight;
            behindColor = behindAlpha * vec3<f32>(
              projectedGaussians[behindProjection + 30u],
              projectedGaussians[behindProjection + 31u],
              projectedGaussians[behindProjection + 32u],
            ) + (1.0 - behindAlpha) * behindColor;
          }
          let targetIndex =
            viewIndex * parameters.width * parameters.height + pixelY * parameters.width + pixelX;
          let selectedAlpha = opacity * selectedWeight;
          let difference = renderPixel(viewIndex, pixel) - targetPixels[targetIndex].rgb;
          let selectedColor = vec3<f32>(
            projectedGaussians[selectedProjection + 30u],
            projectedGaussians[selectedProjection + 31u],
            projectedGaussians[selectedProjection + 32u],
          );
          let colorError = dot(difference, selectedColor - behindColor);
          let pixelColorGradient = 2.0 * transmittanceBefore * selectedAlpha * difference *
            vec3<f32>(
              projectedGaussians[selectedProjection + 39u],
              projectedGaussians[selectedProjection + 40u],
              projectedGaussians[selectedProjection + 41u],
            );
          colorGradient += pixelColorGradient;
          viewColorGradient += pixelColorGradient;
          opacityGradient += 2.0 * transmittanceBefore * selectedWeight * colorError;
          centerGradient +=
            2.0 * transmittanceBefore * selectedAlpha * colorError * conicTimesOffset;

          let covarianceError = transmittanceBefore * selectedAlpha * colorError;
          let screenGradientXX = covarianceError * conicTimesOffset.x * conicTimesOffset.x;
          let screenGradientXY = covarianceError * conicTimesOffset.x * conicTimesOffset.y;
          let screenGradientYY = covarianceError * conicTimesOffset.y * conicTimesOffset.y;
          worldPositionGradient += cameraToWorld * projectionCovariancePositionGradient(
            projectedGaussians[selectedProjection],
            cameraJacobianPixelX,
            cameraJacobianPixelY,
            vec3<f32>(
              projectedGaussians[selectedProjection + 33u],
              projectedGaussians[selectedProjection + 34u],
              projectedGaussians[selectedProjection + 35u],
            ),
            vec3<f32>(
              projectedGaussians[selectedProjection + 36u],
              projectedGaussians[selectedProjection + 37u],
              projectedGaussians[selectedProjection + 38u],
            ),
            vec3<f32>(screenGradientXX, screenGradientXY, screenGradientYY),
          );
          cameraCovarianceGradient +=
            screenGradientXX * outerProduct3(cameraJacobianPixelX, cameraJacobianPixelX) +
            screenGradientXY * (
              outerProduct3(cameraJacobianPixelX, cameraJacobianPixelY) +
              outerProduct3(cameraJacobianPixelY, cameraJacobianPixelX)
            ) +
            screenGradientYY * outerProduct3(cameraJacobianPixelY, cameraJacobianPixelY);
        }
      }
      worldPositionGradient += jacobianPixelX * centerGradient.x + jacobianPixelY * centerGradient.y;
      let viewBase = viewIndex * 19u;
      let viewDirection = worldPosition - vec3<f32>(
        views[viewBase + 9u],
        views[viewBase + 10u],
        views[viewBase + 11u],
      );
      worldPositionGradient += gaussianColorPositionGradient(selected, viewDirection) * viewColorGradient;
      worldCovarianceGradient += cameraToWorld * cameraCovarianceGradient * transpose(cameraToWorld);
    }

    let gradientPosition = worldPositionGradient * normalization;
    let gradientColor = colorGradient * normalization;
    let gradientOpacity = opacityGradient * normalization;
    let gradientCovariance = worldCovarianceGradient * normalization;
    let geometryGradients = scaleQuaternionGradient(selectedState, gradientCovariance);
    let gradientCovarianceMagnitude = sqrt(
      dot(gradientCovariance[0], gradientCovariance[0]) +
      dot(gradientCovariance[1], gradientCovariance[1]) +
      dot(gradientCovariance[2], gradientCovariance[2])
    );
    gradientStatistics[selected] = length(gradientPosition) + gradientCovarianceMagnitude;
    gaussianState[selectedState] = worldPosition.x - clamp(
      parameters.learningRate * gradientPosition.x,
      -0.1,
      0.1,
    );
    gaussianState[selectedState + 1u] = worldPosition.y - clamp(
      parameters.learningRate * gradientPosition.y,
      -0.1,
      0.1,
    );
    gaussianState[selectedState + 2u] = worldPosition.z - clamp(
      parameters.learningRate * gradientPosition.z,
      -0.1,
      0.1,
    );
    for (var parameter = 0u; parameter < 3u; parameter += 1u) {
      gaussianState[selectedState + 3u + parameter] = clamp(
        gaussianState[selectedState + 3u + parameter] -
          parameters.learningRate * geometryGradients[parameter],
        -10.0,
        4.0,
      );
    }
    for (var component = 0u; component < 4u; component += 1u) {
      gaussianState[selectedState + 6u + component] -=
        parameters.learningRate * geometryGradients[3u + component];
    }
    let updatedQuaternion = normalizeGaussianQuaternion(vec4<f32>(
      gaussianState[selectedState + 6u],
      gaussianState[selectedState + 7u],
      gaussianState[selectedState + 8u],
      gaussianState[selectedState + 9u],
    ));
    gaussianState[selectedState + 6u] = updatedQuaternion.x;
    gaussianState[selectedState + 7u] = updatedQuaternion.y;
    gaussianState[selectedState + 8u] = updatedQuaternion.z;
    gaussianState[selectedState + 9u] = updatedQuaternion.w;
    gaussianState[selectedState + 11u] = clamp(
      gaussianState[selectedState + 11u] - parameters.learningRate * gradientColor.r,
      0.0,
      1.0,
    );
    gaussianState[selectedState + 12u] = clamp(
      gaussianState[selectedState + 12u] - parameters.learningRate * gradientColor.g,
      0.0,
      1.0,
    );
    gaussianState[selectedState + 13u] = clamp(
      gaussianState[selectedState + 13u] - parameters.learningRate * gradientColor.b,
      0.0,
      1.0,
    );
    gaussianState[selectedState + 10u] = clamp(
      opacity - parameters.learningRate * gradientOpacity,
      0.0,
      1.0,
    );
  }
}
`;function f(e,t,a){if(!Number.isSafeInteger(e)||e<1||!Number.isSafeInteger(t)||t<e||!Number.isSafeInteger(a)||a<1)throw RangeError("Merge sort dimensions must be positive safe integers within capacity.");let i=[];for(let r=1;r<e;r*=2){let e=i.length%2==0?0:t*a;i.push({width:r,source:e,destination:t*a-e})}return 0===i.length&&i.push({width:1,source:0,destination:t*a}),i}let p=`
struct CloudTrainingParameters {
  width: u32,
  height: u32,
  viewCount: u32,
  splatCount: u32,
  learningRate: f32,
  splatCapacity: u32,
  shDegree: u32,
  iteration: u32,
};

override positionLearningRateDecaySteps: f32 = 30000.0;

@group(0) @binding(0) var<storage, read> views: array<f32>;
@group(0) @binding(1) var<storage, read> targetPixels: array<vec4<f32>>;
@group(0) @binding(2) var<uniform> parameters: CloudTrainingParameters;
@group(0) @binding(3) var<storage, read_write> gaussianState: array<f32>;
@group(0) @binding(4) var<storage, read_write> gradientAccumulator: array<atomic<i32>>;
@group(0) @binding(6) var<storage, read_write> projectedGaussians: array<f32>;
@group(0) @binding(7) var<storage, read_write> gaussianOrder: array<u32>;
@group(0) @binding(8) var<storage, read_write> gradientScratch: array<f32>;
@group(0) @binding(9) var<storage, read_write> tileSplatStorage: array<u32>;
@group(0) @binding(11) var<storage, read_write> optimizerState: array<f32>;
@group(0) @binding(12) var<storage, read_write> lossScratch: array<f32>;
struct MergeParameters {
  width: u32,
  source: u32,
  destination: u32,
  padding: u32,
};
@group(0) @binding(10) var<uniform> merge: MergeParameters;
@group(0) @binding(13) var<uniform> gradientRows: vec4<u32>;

fn ssimHorizontalBase(targetIndex: u32) -> u32 {
  return parameters.viewCount * parameters.width * parameters.height * 22u + targetIndex * 16u;
}

fn ssimCoefficientBase(targetIndex: u32) -> u32 {
  return parameters.viewCount * parameters.width * parameters.height * 38u + targetIndex * 9u;
}

fn ssimFilteredCoefficientBase(targetIndex: u32) -> u32 {
  return parameters.viewCount * parameters.width * parameters.height * 47u + targetIndex * 9u;
}

fn renderedPixelBase(targetIndex: u32) -> u32 {
  return targetIndex * 4u;
}

fn readRenderedColor(targetIndex: u32) -> vec3<f32> {
  let base = renderedPixelBase(targetIndex);
  return vec3<f32>(lossScratch[base], lossScratch[base + 1u], lossScratch[base + 2u]);
}

fn ssimStatisticsBase(targetIndex: u32, channel: u32) -> u32 {
  let renderedFloatCount = parameters.viewCount * parameters.width * parameters.height * 4u;
  return renderedFloatCount + targetIndex * 18u + channel * 6u;
}

fn optimizerStepBase() -> u32 {
  return parameters.splatCapacity * 59u * 2u;
}

${s}
${o}

fn stateBase(splatIndex: u32) -> u32 {
  return splatIndex * 59u;
}

fn gradientBase(splatIndex: u32) -> u32 {
  return splatIndex * 59u;
}

fn gradientStatisticsBase(splatIndex: u32) -> u32 {
  return splatIndex * 4u;
}

fn gaussianColorForView(state: u32, viewDirection: vec3<f32>) -> vec3<f32> {
  let basis = realSphericalHarmonicBasis(viewDirection, parameters.shDegree);
  let activeCoefficientCount = (parameters.shDegree + 1u) * (parameters.shDegree + 1u);
  var color = vec3<f32>(
    gaussianState[state + 11u],
    gaussianState[state + 12u],
    gaussianState[state + 13u],
  );
  for (var coefficientIndex = 1u; coefficientIndex < activeCoefficientCount; coefficientIndex += 1u) {
    let coefficientBase = state + 14u + (coefficientIndex - 1u) * 3u;
    color += basis[coefficientIndex] * vec3<f32>(
      gaussianState[coefficientBase],
      gaussianState[coefficientBase + 1u],
      gaussianState[coefficientBase + 2u],
    );
  }
  return color;
}

fn normalizeGaussianQuaternion(quaternion: vec4<f32>) -> vec4<f32> {
  let quaternionLength = length(quaternion);
  return select(
    vec4<f32>(0.0, 0.0, 0.0, 1.0),
    quaternion / max(quaternionLength, 1e-8),
    quaternionLength > 1e-8,
  );
}

fn gaussianRotationFromQuaternion(quaternionInput: vec4<f32>) -> mat3x3<f32> {
  let quaternion = normalizeGaussianQuaternion(quaternionInput);
  let x = quaternion.x;
  let y = quaternion.y;
  let z = quaternion.z;
  let w = quaternion.w;
  let xx = x * x;
  let yy = y * y;
  let zz = z * z;
  let xy = x * y;
  let xz = x * z;
  let yz = y * z;
  let xw = x * w;
  let yw = y * w;
  let zw = z * w;
  return mat3x3<f32>(
    vec3<f32>(1.0 - 2.0 * (yy + zz), 2.0 * (xy + zw), 2.0 * (xz - yw)),
    vec3<f32>(2.0 * (xy - zw), 1.0 - 2.0 * (xx + zz), 2.0 * (yz + xw)),
    vec3<f32>(2.0 * (xz + yw), 2.0 * (yz - xw), 1.0 - 2.0 * (xx + yy)),
  );
}

fn gaussianCovarianceFromScaleQuaternion(scale: vec3<f32>, quaternion: vec4<f32>) -> mat3x3<f32> {
  let rotation = gaussianRotationFromQuaternion(quaternion);
  let scaledRotation = mat3x3<f32>(
    rotation[0] * scale.x,
    rotation[1] * scale.y,
    rotation[2] * scale.z,
  );
  return scaledRotation * transpose(scaledRotation);
}

fn scaleQuaternionGradient(
  state: u32,
  covarianceGradientInput: mat3x3<f32>,
) -> array<f32, 7> {
  let covarianceGradient =
    0.5 * (covarianceGradientInput + transpose(covarianceGradientInput));
  let scale = exp(vec3<f32>(
    gaussianState[state + 3u],
    gaussianState[state + 4u],
    gaussianState[state + 5u],
  ));
  let quaternion = normalizeGaussianQuaternion(vec4<f32>(
    gaussianState[state + 6u],
    gaussianState[state + 7u],
    gaussianState[state + 8u],
    gaussianState[state + 9u],
  ));
  let rotation = gaussianRotationFromQuaternion(quaternion);
  var result: array<f32, 7>;
  for (var axis = 0u; axis < 3u; axis += 1u) {
    let direction = rotation[axis];
    result[axis] = 2.0 * scale[axis] * scale[axis] * dot(direction, covarianceGradient * direction);
  }
  let differenceStep = 0.001;
  for (var component = 0u; component < 4u; component += 1u) {
    var plus = quaternion;
    var minus = quaternion;
    plus[component] += differenceStep;
    minus[component] -= differenceStep;
    let covariancePlus = gaussianCovarianceFromScaleQuaternion(scale, plus);
    let covarianceMinus = gaussianCovarianceFromScaleQuaternion(scale, minus);
    let covarianceDifference = covariancePlus - covarianceMinus;
    let covarianceDerivative = mat3x3<f32>(
      covarianceDifference[0] / (2.0 * differenceStep),
      covarianceDifference[1] / (2.0 * differenceStep),
      covarianceDifference[2] / (2.0 * differenceStep),
    );
    result[3u + component] =
      dot(covarianceGradient[0], covarianceDerivative[0]) +
      dot(covarianceGradient[1], covarianceDerivative[1]) +
      dot(covarianceGradient[2], covarianceDerivative[2]);
  }
  return result;
}

fn parameterLearningRate(parameter: u32) -> f32 {
  if (parameter < 3u) {
    let progress = clamp(f32(parameters.iteration) / positionLearningRateDecaySteps, 0.0, 1.0);
    let positionLearningRate = exp(log(0.00016) + progress * (log(0.0000016) - log(0.00016)));
    return parameters.learningRate * positionLearningRate;
  }
  if (parameter < 6u) {
    return parameters.learningRate * 0.005;
  }
  if (parameter < 10u) {
    return parameters.learningRate * 0.001;
  }
  if (parameter == 10u) {
    return parameters.learningRate * 0.05;
  }
  return parameters.learningRate * 0.0025;
}

fn screenGradientBase(viewIndex: u32, splatIndex: u32) -> u32 {
  let screenGradientOffset = parameters.splatCapacity * 59u;
  return screenGradientOffset +
    (viewIndex * parameters.splatCapacity + splatIndex) * 2u;
}

fn atomicGradient(index: u32, value: f32) {
  var previous = atomicLoad(&gradientAccumulator[index]);
  loop {
    let updated = bitcast<i32>(bitcast<f32>(previous) + value);
    let result = atomicCompareExchangeWeak(&gradientAccumulator[index], previous, updated);
    if (result.exchanged) {
      break;
    }
    previous = result.old_value;
  }
}

fn projectionBase(viewIndex: u32, splatIndex: u32) -> u32 {
  return (viewIndex * parameters.splatCount + splatIndex) * 67u;
}

fn orderBase(viewIndex: u32) -> u32 {
  return viewIndex * parameters.splatCount;
}

fn tileColumns() -> u32 {
  return (parameters.width + 8u - 1u) / 8u;
}

fn tilesPerView() -> u32 {
  let rows = (parameters.height + 8u - 1u) / 8u;
  return tileColumns() * rows;
}

fn tileSplatCountsBase() -> u32 {
  return parameters.viewCount * tilesPerView() * parameters.splatCapacity;
}

fn outerProduct3(first: vec3<f32>, second: vec3<f32>) -> mat3x3<f32> {
  return mat3x3<f32>(
    vec3<f32>(first.x * second.x, first.y * second.x, first.z * second.x),
    vec3<f32>(first.x * second.y, first.y * second.y, first.z * second.y),
    vec3<f32>(first.x * second.z, first.y * second.z, first.z * second.z),
  );
}

fn writeProjection(viewIndex: u32, splatIndex: u32) {
  let base = projectionBase(viewIndex, splatIndex);
  for (var field = 0u; field < 67u; field += 1u) {
    projectedGaussians[base + field] = 0.0;
  }
  let viewBase = viewIndex * 19u;
  let state = stateBase(splatIndex);
  let cameraToWorld = mat3x3<f32>(
    vec3<f32>(views[viewBase], views[viewBase + 3u], views[viewBase + 6u]),
    vec3<f32>(views[viewBase + 1u], views[viewBase + 4u], views[viewBase + 7u]),
    vec3<f32>(views[viewBase + 2u], views[viewBase + 5u], views[viewBase + 8u]),
  );
  let relativePosition = vec3<f32>(
    gaussianState[state] - views[viewBase + 9u],
    gaussianState[state + 1u] - views[viewBase + 10u],
    gaussianState[state + 2u] - views[viewBase + 11u],
  );
  let cameraPosition = vec3<f32>(
    dot(cameraToWorld[0], relativePosition),
    dot(cameraToWorld[1], relativePosition),
    dot(cameraToWorld[2], relativePosition),
  );
  let depth = -cameraPosition.z;
  if (depth <= 0.0001) {
    return;
  }

  let scale = exp(vec3<f32>(
    gaussianState[state + 3u],
    gaussianState[state + 4u],
    gaussianState[state + 5u],
  ));
  let quaternion = vec4<f32>(
    gaussianState[state + 6u],
    gaussianState[state + 7u],
    gaussianState[state + 8u],
    gaussianState[state + 9u],
  );
  let worldCovariance = gaussianCovarianceFromScaleQuaternion(scale, quaternion);
  let cameraCovariance = transpose(cameraToWorld) * worldCovariance * cameraToWorld;
  let focalLengthX = views[viewBase + 12u];
  let focalLengthY = views[viewBase + 13u];
  let cameraJacobianPixelX = vec3<f32>(
    focalLengthX / depth,
    0.0,
    focalLengthX * cameraPosition.x / (depth * depth),
  );
  let cameraJacobianPixelY = vec3<f32>(
    0.0,
    -focalLengthY / depth,
    -focalLengthY * cameraPosition.y / (depth * depth),
  );
  let projectedXX = dot(cameraJacobianPixelX, cameraCovariance * cameraJacobianPixelX);
  let projectedXY = dot(cameraJacobianPixelX, cameraCovariance * cameraJacobianPixelY);
  let projectedYY = dot(cameraJacobianPixelY, cameraCovariance * cameraJacobianPixelY);
  let covarianceTimesJacobianX = cameraCovariance * cameraJacobianPixelX;
  let covarianceTimesJacobianY = cameraCovariance * cameraJacobianPixelY;
  for (var axis = 0u; axis < 3u; axis += 1u) {
    projectedGaussians[base + 49u + axis] = covarianceTimesJacobianX[axis];
    projectedGaussians[base + 52u + axis] = covarianceTimesJacobianY[axis];
  }
  let determinant = projectedXX * projectedYY - projectedXY * projectedXY;
  if (determinant <= 1e-12 || projectedXX <= 0.0 || projectedYY <= 0.0) {
    return;
  }
  let center = vec2<f32>(
    focalLengthX * cameraPosition.x / depth + views[viewBase + 14u],
    views[viewBase + 15u] - focalLengthY * cameraPosition.y / depth,
  );
  let jacobianPixelX = vec3<f32>(
    dot(cameraJacobianPixelX, vec3<f32>(views[viewBase], views[viewBase + 1u], views[viewBase + 2u])),
    dot(cameraJacobianPixelX, vec3<f32>(views[viewBase + 3u], views[viewBase + 4u], views[viewBase + 5u])),
    dot(cameraJacobianPixelX, vec3<f32>(views[viewBase + 6u], views[viewBase + 7u], views[viewBase + 8u])),
  );
  let jacobianPixelY = vec3<f32>(
    dot(cameraJacobianPixelY, vec3<f32>(views[viewBase], views[viewBase + 1u], views[viewBase + 2u])),
    dot(cameraJacobianPixelY, vec3<f32>(views[viewBase + 3u], views[viewBase + 4u], views[viewBase + 5u])),
    dot(cameraJacobianPixelY, vec3<f32>(views[viewBase + 6u], views[viewBase + 7u], views[viewBase + 8u])),
  );

  projectedGaussians[base] = depth;
  projectedGaussians[base + 1u] = center.x;
  projectedGaussians[base + 2u] = center.y;
  projectedGaussians[base + 3u] = projectedXX;
  projectedGaussians[base + 4u] = projectedXY;
  projectedGaussians[base + 5u] = projectedYY;
  projectedGaussians[base + 6u] = projectedYY / determinant;
  projectedGaussians[base + 7u] = -projectedXY / determinant;
  projectedGaussians[base + 8u] = projectedXX / determinant;
  projectedGaussians[base + 9u] = jacobianPixelX.x;
  projectedGaussians[base + 10u] = jacobianPixelX.y;
  projectedGaussians[base + 11u] = jacobianPixelX.z;
  projectedGaussians[base + 12u] = jacobianPixelY.x;
  projectedGaussians[base + 13u] = jacobianPixelY.y;
  projectedGaussians[base + 14u] = jacobianPixelY.z;
  projectedGaussians[base + 15u] = cameraJacobianPixelX.x;
  projectedGaussians[base + 16u] = cameraJacobianPixelX.y;
  projectedGaussians[base + 17u] = cameraJacobianPixelX.z;
  projectedGaussians[base + 18u] = cameraJacobianPixelY.x;
  projectedGaussians[base + 19u] = cameraJacobianPixelY.y;
  projectedGaussians[base + 20u] = cameraJacobianPixelY.z;
  for (var column = 0u; column < 3u; column += 1u) {
    for (var row = 0u; row < 3u; row += 1u) {
      projectedGaussians[base + 21u + column * 3u + row] = cameraToWorld[column][row];
    }
  }
  let shBasis = realSphericalHarmonicBasis(relativePosition, 3u);
  let rawViewColor = gaussianColorForView(state, relativePosition);
  let viewColor = max(rawViewColor, vec3<f32>(0.0));
  let colorGradientMask = select(vec3<f32>(0.0), vec3<f32>(1.0), rawViewColor >= vec3<f32>(0.0));
  for (var channel = 0u; channel < 3u; channel += 1u) {
    projectedGaussians[base + 55u + channel] = colorGradientMask[channel];
  }
  projectedGaussians[base + 30u] = viewColor.r;
  projectedGaussians[base + 31u] = viewColor.g;
  projectedGaussians[base + 32u] = viewColor.b;
  for (var coefficientIndex = 0u; coefficientIndex < 16u; coefficientIndex += 1u) {
    projectedGaussians[base + 33u + coefficientIndex] = shBasis[coefficientIndex];
  }
  // View-dependent color changes with position through the view direction.
  let shDirectionGradient = realSphericalHarmonicBasisDirectionGradient(
    relativePosition,
    parameters.shDegree,
  );
  let activeCoefficientCount = (parameters.shDegree + 1u) * (parameters.shDegree + 1u);
  var colorPositionGradient = array<vec3<f32>, 3>(vec3<f32>(0.0), vec3<f32>(0.0), vec3<f32>(0.0));
  for (var coefficientIndex = 1u; coefficientIndex < activeCoefficientCount; coefficientIndex += 1u) {
    let coefficientBase = state + 14u + (coefficientIndex - 1u) * 3u;
    for (var channel = 0u; channel < 3u; channel += 1u) {
      colorPositionGradient[channel] +=
        gaussianState[coefficientBase + channel] * shDirectionGradient[coefficientIndex];
    }
  }
  for (var channel = 0u; channel < 3u; channel += 1u) {
    for (var axis = 0u; axis < 3u; axis += 1u) {
      projectedGaussians[base + 58u + channel * 3u + axis] = colorPositionGradient[channel][axis];
    }
  }
}

fn parallelWeight(viewIndex: u32, splatIndex: u32, pixel: vec2<f32>) -> f32 {
  let base = projectionBase(viewIndex, splatIndex);
  if (projectedGaussians[base] <= 0.0) {
    return 0.0;
  }
  let offset = pixel - vec2<f32>(projectedGaussians[base + 1u], projectedGaussians[base + 2u]);
  if (
    abs(offset.x) > 3.0 * sqrt(projectedGaussians[base + 3u]) ||
    abs(offset.y) > 3.0 * sqrt(projectedGaussians[base + 5u])
  ) {
    return 0.0;
  }
  let squaredDistance =
    projectedGaussians[base + 6u] * offset.x * offset.x +
    2.0 * projectedGaussians[base + 7u] * offset.x * offset.y +
    projectedGaussians[base + 8u] * offset.y * offset.y;
  return exp(-0.5 * max(0.0, squaredDistance));
}

fn parallelRenderPixel(viewIndex: u32, pixel: vec2<f32>) -> vec3<f32> {
  let backgroundBase = viewIndex * 19u;
  let tileX = u32(pixel.x) / 8u;
  let tileY = u32(pixel.y) / 8u;
  let tileIndex = viewIndex * tilesPerView() + tileY * tileColumns() + tileX;
  let tileBase = tileIndex * parameters.splatCount;
  let candidateCount = tileSplatStorage[tileSplatCountsBase() + tileIndex];
  var color = vec3<f32>(0.0);
  var transmittance = 1.0;
  for (var rank = 0u; rank < candidateCount; rank += 1u) {
    let splatIndex = tileSplatStorage[tileBase + rank];
    let weight = parallelWeight(viewIndex, splatIndex, pixel);
    if (weight == 0.0) {
      continue;
    }
    let state = stateBase(splatIndex);
    let projection = projectionBase(viewIndex, splatIndex);
    let alpha = gaussianState[state + 10u] * weight;
    color += transmittance * alpha * vec3<f32>(
      projectedGaussians[projection + 30u],
      projectedGaussians[projection + 31u],
      projectedGaussians[projection + 32u],
    );
    transmittance *= 1.0 - alpha;
  }
  return color + transmittance * vec3<f32>(
    views[backgroundBase + 16u],
    views[backgroundBase + 17u],
    views[backgroundBase + 18u],
  );
}

fn ssimWindowWeight(offset: f32) -> f32 {
  return exp(-0.5 * offset * offset / 2.25);
}

@compute @workgroup_size(8, 8, 1)
fn renderParallelPixels(@builtin(global_invocation_id) invocation: vec3<u32>) {
  let pixelX = invocation.x;
  let pixelY = invocation.y;
  let viewIndex = invocation.z;
  if (pixelX >= parameters.width || pixelY >= parameters.height || viewIndex >= parameters.viewCount) {
    return;
  }
  let pixelIndex = pixelY * parameters.width + pixelX;
  let targetIndex = viewIndex * parameters.width * parameters.height + pixelIndex;
  let pixel = vec2<f32>(f32(pixelX) + 0.5, f32(pixelY) + 0.5);
  let base = renderedPixelBase(targetIndex);
  let color = parallelRenderPixel(viewIndex, pixel);
  lossScratch[base] = color.r;
  lossScratch[base + 1u] = color.g;
  lossScratch[base + 2u] = color.b;
  lossScratch[base + 3u] = 1.0;
}

@compute @workgroup_size(8, 8, 1)
fn computeSsimHorizontal(@builtin(global_invocation_id) invocation: vec3<u32>) {
  let pixelX = invocation.x;
  let pixelY = invocation.y;
  let viewIndex = invocation.z;
  if (pixelX >= parameters.width || pixelY >= parameters.height || viewIndex >= parameters.viewCount) {
    return;
  }
  let pixelCount = parameters.width * parameters.height;
  let pixelIndex = pixelY * parameters.width + pixelX;
  let targetIndex = viewIndex * pixelCount + pixelIndex;
  var weightSum = 0.0;
  var meanPrediction = vec3<f32>(0.0);
  var meanTarget = vec3<f32>(0.0);
  var secondPrediction = vec3<f32>(0.0);
  var secondTarget = vec3<f32>(0.0);
  var crossMoment = vec3<f32>(0.0);
  for (var offsetX = -5i; offsetX <= 5i; offsetX += 1i) {
    let sampleX = i32(pixelX) + offsetX;
    if (sampleX < 0 || sampleX >= i32(parameters.width)) { continue; }
    let weight = ssimWindowWeight(f32(offsetX));
    let sampleIndex = viewIndex * pixelCount + pixelY * parameters.width + u32(sampleX);
    let prediction = readRenderedColor(sampleIndex);
    let targetColor = targetPixels[sampleIndex].rgb;
    weightSum += weight;
    meanPrediction += weight * prediction;
    meanTarget += weight * targetColor;
    secondPrediction += weight * prediction * prediction;
    secondTarget += weight * targetColor * targetColor;
    crossMoment += weight * prediction * targetColor;
  }
  let base = ssimHorizontalBase(targetIndex);
  for (var channel = 0u; channel < 3u; channel += 1u) {
    lossScratch[base + channel * 5u] = meanPrediction[channel];
    lossScratch[base + channel * 5u + 1u] = meanTarget[channel];
    lossScratch[base + channel * 5u + 2u] = secondPrediction[channel];
    lossScratch[base + channel * 5u + 3u] = secondTarget[channel];
    lossScratch[base + channel * 5u + 4u] = crossMoment[channel];
  }
  lossScratch[base + 15u] = weightSum;
}

@compute @workgroup_size(8, 8, 1)
fn computeSsimWindows(@builtin(global_invocation_id) invocation: vec3<u32>) {
  let pixelX = invocation.x;
  let pixelY = invocation.y;
  let viewIndex = invocation.z;
  if (pixelX >= parameters.width || pixelY >= parameters.height || viewIndex >= parameters.viewCount) {
    return;
  }
  let pixelCount = parameters.width * parameters.height;
  let targetIndex = viewIndex * pixelCount + pixelY * parameters.width + pixelX;
  var weightSum = 0.0;
  var meanPrediction = vec3<f32>(0.0);
  var meanTarget = vec3<f32>(0.0);
  var secondPrediction = vec3<f32>(0.0);
  var secondTarget = vec3<f32>(0.0);
  var crossMoment = vec3<f32>(0.0);
  for (var offsetY = -5i; offsetY <= 5i; offsetY += 1i) {
    let sampleY = i32(pixelY) + offsetY;
    if (sampleY < 0 || sampleY >= i32(parameters.height)) { continue; }
    let weight = ssimWindowWeight(f32(offsetY));
    let base = ssimHorizontalBase(viewIndex * pixelCount + u32(sampleY) * parameters.width + pixelX);
    weightSum += weight * lossScratch[base + 15u];
    for (var channel = 0u; channel < 3u; channel += 1u) {
      meanPrediction[channel] += weight * lossScratch[base + channel * 5u];
      meanTarget[channel] += weight * lossScratch[base + channel * 5u + 1u];
      secondPrediction[channel] += weight * lossScratch[base + channel * 5u + 2u];
      secondTarget[channel] += weight * lossScratch[base + channel * 5u + 3u];
      crossMoment[channel] += weight * lossScratch[base + channel * 5u + 4u];
    }
  }
  let inverseWeightSum = 1.0 / max(weightSum, 1e-8);
  meanPrediction *= inverseWeightSum;
  meanTarget *= inverseWeightSum;
  secondPrediction *= inverseWeightSum;
  secondTarget *= inverseWeightSum;
  crossMoment *= inverseWeightSum;
  for (var channel = 0u; channel < 3u; channel += 1u) {
    let statisticsBase = ssimStatisticsBase(targetIndex, channel);
    lossScratch[statisticsBase] = meanPrediction[channel];
    lossScratch[statisticsBase + 1u] = meanTarget[channel];
    lossScratch[statisticsBase + 2u] = secondPrediction[channel];
    lossScratch[statisticsBase + 3u] = secondTarget[channel];
    lossScratch[statisticsBase + 4u] = crossMoment[channel];
    lossScratch[statisticsBase + 5u] = weightSum;
  }
  let centerPrediction = readRenderedColor(targetIndex);
  let centerTarget = targetPixels[targetIndex].rgb;
  var dssim = 0.0;
  for (var channel = 0u; channel < 3u; channel += 1u) {
    let statisticsBase = ssimStatisticsBase(targetIndex, channel);
    let meanPrediction = lossScratch[statisticsBase];
    let meanTarget = lossScratch[statisticsBase + 1u];
    let secondPrediction = lossScratch[statisticsBase + 2u];
    let secondTarget = lossScratch[statisticsBase + 3u];
    let crossMoment = lossScratch[statisticsBase + 4u];
    let variancePrediction = max(0.0, secondPrediction - meanPrediction * meanPrediction);
    let varianceTarget = max(0.0, secondTarget - meanTarget * meanTarget);
    let covariance = crossMoment - meanPrediction * meanTarget;
    let luminance =
      (2.0 * meanPrediction * meanTarget + 0.0001) /
      (meanPrediction * meanPrediction + meanTarget * meanTarget + 0.0001);
    let contrast =
      (2.0 * covariance + 0.0009) /
      (variancePrediction + varianceTarget + 0.0009);
    dssim += (1.0 - luminance * contrast) / 3.0;
    let ln = 2.0 * meanPrediction * meanTarget + 0.0001;
    let cn = 2.0 * covariance + 0.0009;
    let ld = meanPrediction * meanPrediction + meanTarget * meanTarget + 0.0001;
    let cd = variancePrediction + varianceTarget + 0.0009;
    let denominator = max(ld * cd, 1e-8);
    let ssim = ln * cn / denominator;
    let base = ssimCoefficientBase(targetIndex) + channel * 3u;
    // dSSIM/d(pixel) is a weighted convolution of A + B * prediction + C * target.
    lossScratch[base] = (
      (2.0 * meanTarget * cn - 2.0 * ln * meanTarget) / denominator -
      ssim * (2.0 * meanPrediction / max(ld, 1e-8) - 2.0 * meanPrediction / max(cd, 1e-8))
    ) * inverseWeightSum;
    lossScratch[base + 1u] = -2.0 * ssim / max(cd, 1e-8) * inverseWeightSum;
    lossScratch[base + 2u] = 2.0 * ln / denominator * inverseWeightSum;
  }
  let l1 = (
    abs(centerPrediction.r - centerTarget.r) +
    abs(centerPrediction.g - centerTarget.g) +
    abs(centerPrediction.b - centerTarget.b)
  ) / 3.0;
  lossScratch[renderedPixelBase(targetIndex) + 3u] = 0.8 * l1 + 0.2 * dssim;
}

@compute @workgroup_size(8, 8, 1)
fn filterSsimGradientHorizontal(@builtin(global_invocation_id) invocation: vec3<u32>) {
  let pixelX = invocation.x;
  let pixelY = invocation.y;
  let viewIndex = invocation.z;
  if (pixelX >= parameters.width || pixelY >= parameters.height || viewIndex >= parameters.viewCount) {
    return;
  }
  let pixelCount = parameters.width * parameters.height;
  let targetIndex = viewIndex * pixelCount + pixelY * parameters.width + pixelX;
  for (var coefficient = 0u; coefficient < 9u; coefficient += 1u) {
    var sum = 0.0;
    for (var offset = -5i; offset <= 5i; offset += 1i) {
      let centerX = i32(pixelX) + offset;
      if (centerX < 0 || centerX >= i32(parameters.width)) { continue; }
      let centerIndex = viewIndex * pixelCount + pixelY * parameters.width + u32(centerX);
      sum += ssimWindowWeight(f32(offset)) *
        lossScratch[ssimCoefficientBase(centerIndex) + coefficient];
    }
    lossScratch[ssimFilteredCoefficientBase(targetIndex) + coefficient] = sum;
  }
}

fn dssimGradientForPixel(viewIndex: u32, pixelX: u32, pixelY: u32, channel: u32) -> f32 {
  let pixelCount = parameters.width * parameters.height;
  let targetIndex = viewIndex * pixelCount + pixelY * parameters.width + pixelX;
  let prediction = readRenderedColor(targetIndex)[channel];
  let targetValue = targetPixels[targetIndex][channel];
  var coefficients = vec3<f32>(0.0);
  for (var centerOffsetY = -5i; centerOffsetY <= 5i; centerOffsetY += 1i) {
    let centerY = i32(pixelY) + centerOffsetY;
    if (centerY < 0 || centerY >= i32(parameters.height)) {
      continue;
    }
    let centerIndex = viewIndex * pixelCount + u32(centerY) * parameters.width + pixelX;
    let base = ssimFilteredCoefficientBase(centerIndex) + channel * 3u;
    coefficients += ssimWindowWeight(f32(centerOffsetY)) *
      vec3<f32>(lossScratch[base], lossScratch[base + 1u], lossScratch[base + 2u]);
  }
  let ssimGradient = coefficients.x + coefficients.y * prediction + coefficients.z * targetValue;
  return 0.8 * sign(prediction - targetValue) - 0.2 * ssimGradient;
}

@compute @workgroup_size(64)
fn projectParallelGaussians(@builtin(global_invocation_id) invocation: vec3<u32>) {
  let splatIndex = invocation.x;
  let viewIndex = invocation.z;
  if (splatIndex >= parameters.splatCount || viewIndex >= parameters.viewCount) {
    return;
  }
  writeProjection(viewIndex, splatIndex);
}

fn mergeIndex(viewIndex: u32, rank: u32) -> u32 {
  if (merge.width == 1u) { return rank; }
  return gaussianOrder[merge.source + orderBase(viewIndex) + rank];
}

fn depthPrecedes(viewIndex: u32, left: u32, right: u32) -> bool {
  let leftDepth = projectedGaussians[projectionBase(viewIndex, left)];
  let rightDepth = projectedGaussians[projectionBase(viewIndex, right)];
  let leftKey = select(3.402823e+38, leftDepth, leftDepth > 0.0);
  let rightKey = select(3.402823e+38, rightDepth, rightDepth > 0.0);
  return leftKey < rightKey || (leftKey == rightKey && left < right);
}

@compute @workgroup_size(64)
fn sortParallelGaussianOrder(@builtin(global_invocation_id) invocation: vec3<u32>) {
  let rank = invocation.x;
  let viewIndex = invocation.z;
  if (rank >= parameters.splatCount || viewIndex >= parameters.viewCount) { return; }
  let runStart = (rank / (2u * merge.width)) * (2u * merge.width);
  let middle = min(runStart + merge.width, parameters.splatCount);
  let end = min(runStart + 2u * merge.width, parameters.splatCount);
  let inLeft = rank < middle;
  let ownStart = select(middle, runStart, inLeft);
  let otherStart = select(runStart, middle, inLeft);
  let otherEnd = select(middle, end, inLeft);
  let splatIndex = mergeIndex(viewIndex, rank);
  var low = otherStart;
  var high = otherEnd;
  loop {
    if (low >= high) { break; }
    let mid = low + (high - low) / 2u;
    if (depthPrecedes(viewIndex, mergeIndex(viewIndex, mid), splatIndex)) {
      low = mid + 1u;
    } else {
      high = mid;
    }
  }
  let destination = runStart + (rank - ownStart) + (low - otherStart);
  gaussianOrder[merge.destination + orderBase(viewIndex) + destination] = splatIndex;
}

@compute @workgroup_size(1)
fn buildParallelTileLists(@builtin(global_invocation_id) invocation: vec3<u32>) {
  let tileInView = invocation.x;
  let viewIndex = invocation.z;
  if (tileInView >= tilesPerView() || viewIndex >= parameters.viewCount) {
    return;
  }
  let columns = tileColumns();
  let tileX = tileInView % columns;
  let tileY = tileInView / columns;
  let tileMinimum = vec2<f32>(
    f32(tileX * 8u),
    f32(tileY * 8u),
  );
  let tileMaximum = vec2<f32>(
    f32(min((tileX + 1u) * 8u, parameters.width)),
    f32(min((tileY + 1u) * 8u, parameters.height)),
  );
  let tileIndex = viewIndex * tilesPerView() + tileInView;
  let tileBase = tileIndex * parameters.splatCount;
  var sortedHalf = parameters.splatCapacity * parameters.viewCount;
  for (var width = 2u; width < parameters.splatCount; width *= 2u) {
    sortedHalf = parameters.splatCapacity * parameters.viewCount - sortedHalf;
  }
  let orderOffset = sortedHalf + orderBase(viewIndex);
  var candidateCount = 0u;
  for (var rank = 0u; rank < parameters.splatCount; rank += 1u) {
    let splatIndex = gaussianOrder[orderOffset + rank];
    let projection = projectionBase(viewIndex, splatIndex);
    if (projectedGaussians[projection] <= 0.0) {
      continue;
    }
    let center = vec2<f32>(
      projectedGaussians[projection + 1u],
      projectedGaussians[projection + 2u],
    );
    let radius = 3.0 * sqrt(vec2<f32>(
      projectedGaussians[projection + 3u],
      projectedGaussians[projection + 5u],
    ));
    let firstPixelCenter = tileMinimum + vec2<f32>(0.5);
    let lastPixelCenter = tileMaximum - vec2<f32>(0.5);
    if (
      center.x + radius.x < firstPixelCenter.x ||
      center.x - radius.x > lastPixelCenter.x ||
      center.y + radius.y < firstPixelCenter.y ||
      center.y - radius.y > lastPixelCenter.y
    ) {
      continue;
    }
    tileSplatStorage[tileBase + candidateCount] = splatIndex;
    candidateCount += 1u;
  }
  tileSplatStorage[tileSplatCountsBase() + tileIndex] = candidateCount;
}

@compute @workgroup_size(8, 8, 1)
fn accumulateParallelPixelGradients(@builtin(global_invocation_id) invocation: vec3<u32>) {
  let pixelX = invocation.x;
  let pixelY = invocation.y + gradientRows.x;
  let viewIndex = invocation.z;
  if (pixelX >= parameters.width || pixelY >= parameters.height || viewIndex >= parameters.viewCount) {
    return;
  }
  let pixelCount = parameters.width * parameters.height;
  let pixelIndex = pixelY * parameters.width + pixelX;
  let targetIndex = viewIndex * pixelCount + pixelIndex;
  let pixel = vec2<f32>(f32(pixelX) + 0.5, f32(pixelY) + 0.5);
  let tileX = pixelX / 8u;
  let tileY = pixelY / 8u;
  let tileIndex = viewIndex * tilesPerView() + tileY * tileColumns() + tileX;
  let tileBase = tileIndex * parameters.splatCount;
  let candidateCount = tileSplatStorage[tileSplatCountsBase() + tileIndex];
  // Preserve precision when a long stack is traversed backward.
  var logTransmittance = 0.0;
  var logCompensation = 0.0;
  var opaqueCount = 0u;
  for (var rank = 0u; rank < candidateCount; rank += 1u) {
    let splatIndex = tileSplatStorage[tileBase + rank];
    let weight = parallelWeight(viewIndex, splatIndex, pixel);
    let state = stateBase(splatIndex);
    let alpha = gaussianState[state + 10u] * weight;
    let transparency = 1.0 - alpha;
    if (transparency <= 0.0) {
      opaqueCount += 1u;
    } else {
      let increment = log(transparency) - logCompensation;
      let nextLogTransmittance = logTransmittance + increment;
      logCompensation = (nextLogTransmittance - logTransmittance) - increment;
      logTransmittance = nextLogTransmittance;
    }
  }
  let difference = readRenderedColor(targetIndex) - targetPixels[targetIndex].rgb;
  let lossGradient = vec3<f32>(
    dssimGradientForPixel(viewIndex, pixelX, pixelY, 0u),
    dssimGradientForPixel(viewIndex, pixelX, pixelY, 1u),
    dssimGradientForPixel(viewIndex, pixelX, pixelY, 2u),
  );
  let halfObjectiveGradient = lossGradient * 0.5;
  let normalization = 1.0 / (f32(parameters.viewCount * pixelCount) * 3.0);

  let backgroundBase = viewIndex * 19u;
  var behindColor = vec3<f32>(
    views[backgroundBase + 16u],
    views[backgroundBase + 17u],
    views[backgroundBase + 18u],
  );
  var reverseRank = candidateCount;
  loop {
    if (reverseRank == 0u) {
      break;
    }
    reverseRank -= 1u;
    let rank = reverseRank;
    let splatIndex = tileSplatStorage[tileBase + rank];
    let state = stateBase(splatIndex);
    let gradient = gradientBase(splatIndex);
    let projection = projectionBase(viewIndex, splatIndex);
    let weight = parallelWeight(viewIndex, splatIndex, pixel);
    let alpha = gaussianState[state + 10u] * weight;
    let transparency = 1.0 - alpha;
    if (transparency <= 0.0) {
      opaqueCount -= 1u;
    } else {
      let increment = -log(transparency) - logCompensation;
      let nextLogTransmittance = logTransmittance + increment;
      logCompensation = (nextLogTransmittance - logTransmittance) - increment;
      logTransmittance = nextLogTransmittance;
    }
    let transmittanceBefore = select(
      exp(min(logTransmittance, 0.0)),
      0.0,
      opaqueCount > 0u,
    );
    if (projectedGaussians[projection] <= 0.0 || weight == 0.0) {
      behindColor = alpha * vec3<f32>(
        projectedGaussians[projection + 30u],
        projectedGaussians[projection + 31u],
        projectedGaussians[projection + 32u],
      ) + (1.0 - alpha) * behindColor;
      continue;
    }
    let offset = pixel - vec2<f32>(
      projectedGaussians[projection + 1u],
      projectedGaussians[projection + 2u],
    );
    let conicTimesOffset = vec2<f32>(
      projectedGaussians[projection + 6u] * offset.x + projectedGaussians[projection + 7u] * offset.y,
      projectedGaussians[projection + 7u] * offset.x + projectedGaussians[projection + 8u] * offset.y,
    );
    let color = vec3<f32>(
      projectedGaussians[projection + 30u],
      projectedGaussians[projection + 31u],
      projectedGaussians[projection + 32u],
    );
    let opacity = gaussianState[state + 10u];
    let colorError = dot(halfObjectiveGradient, color - behindColor);
    let colorObjectiveGradient = halfObjectiveGradient *
      vec3<f32>(
        projectedGaussians[projection + 55u],
        projectedGaussians[projection + 56u],
        projectedGaussians[projection + 57u],
      );
    var viewColorPositionGradient = vec3<f32>(0.0);
    for (var channel = 0u; channel < 3u; channel += 1u) {
      let channelBase = projection + 58u + channel * 3u;
      viewColorPositionGradient += colorObjectiveGradient[channel] * vec3<f32>(
        projectedGaussians[channelBase],
        projectedGaussians[channelBase + 1u],
        projectedGaussians[channelBase + 2u],
      );
    }
    let positionGradient = 2.0 * transmittanceBefore * alpha * (
      colorError * (
        vec3<f32>(
          projectedGaussians[projection + 9u],
          projectedGaussians[projection + 10u],
          projectedGaussians[projection + 11u],
        ) * conicTimesOffset.x +
        vec3<f32>(
          projectedGaussians[projection + 12u],
          projectedGaussians[projection + 13u],
          projectedGaussians[projection + 14u],
        ) * conicTimesOffset.y
      ) +
      viewColorPositionGradient
    );
    let centerGradientScale = 2.0 * transmittanceBefore * alpha * colorError * normalization;
    let screenGradient = screenGradientBase(viewIndex, splatIndex);
    atomicGradient(screenGradient, centerGradientScale * conicTimesOffset.x);
    atomicGradient(screenGradient + 1u, centerGradientScale * conicTimesOffset.y);
    atomicGradient(gradient, positionGradient.x * normalization);
    atomicGradient(gradient + 1u, positionGradient.y * normalization);
    atomicGradient(gradient + 2u, positionGradient.z * normalization);
    atomicGradient(gradient + 11u, 2.0 * transmittanceBefore * alpha * colorObjectiveGradient.r * normalization);
    atomicGradient(gradient + 12u, 2.0 * transmittanceBefore * alpha * colorObjectiveGradient.g * normalization);
    atomicGradient(gradient + 13u, 2.0 * transmittanceBefore * alpha * colorObjectiveGradient.b * normalization);
    atomicGradient(gradient + 10u, 2.0 * transmittanceBefore * weight * colorError * normalization);
    let activeCoefficientCount = (parameters.shDegree + 1u) * (parameters.shDegree + 1u);
    for (var coefficientIndex = 1u; coefficientIndex < activeCoefficientCount; coefficientIndex += 1u) {
      let coefficientBase = gradient + 14u + (coefficientIndex - 1u) * 3u;
      let coefficientScale =
        2.0 * transmittanceBefore * alpha * normalization * projectedGaussians[projection + 33u + coefficientIndex];
      atomicGradient(coefficientBase, colorObjectiveGradient.r * coefficientScale);
      atomicGradient(coefficientBase + 1u, colorObjectiveGradient.g * coefficientScale);
      atomicGradient(coefficientBase + 2u, colorObjectiveGradient.b * coefficientScale);
    }
    let cameraJacobianPixelX = vec3<f32>(
      projectedGaussians[projection + 15u],
      projectedGaussians[projection + 16u],
      projectedGaussians[projection + 17u],
    );
    let cameraJacobianPixelY = vec3<f32>(
      projectedGaussians[projection + 18u],
      projectedGaussians[projection + 19u],
      projectedGaussians[projection + 20u],
    );
    let cameraCovarianceGradient =
      transmittanceBefore * alpha * colorError * (
        conicTimesOffset.x * conicTimesOffset.x * outerProduct3(cameraJacobianPixelX, cameraJacobianPixelX) +
        conicTimesOffset.x * conicTimesOffset.y * (
          outerProduct3(cameraJacobianPixelX, cameraJacobianPixelY) +
          outerProduct3(cameraJacobianPixelY, cameraJacobianPixelX)
        ) +
        conicTimesOffset.y * conicTimesOffset.y * outerProduct3(cameraJacobianPixelY, cameraJacobianPixelY)
      );
    let cameraToWorld = mat3x3<f32>(
      vec3<f32>(
        projectedGaussians[projection + 21u],
        projectedGaussians[projection + 22u],
        projectedGaussians[projection + 23u],
      ),
      vec3<f32>(
        projectedGaussians[projection + 24u],
        projectedGaussians[projection + 25u],
        projectedGaussians[projection + 26u],
      ),
      vec3<f32>(
        projectedGaussians[projection + 27u],
        projectedGaussians[projection + 28u],
        projectedGaussians[projection + 29u],
      ),
    );
    let worldCovarianceGradient =
      cameraToWorld * cameraCovarianceGradient * transpose(cameraToWorld);
    let covariancePositionGradient = cameraToWorld * projectionCovariancePositionGradient(
      projectedGaussians[projection],
      cameraJacobianPixelX,
      cameraJacobianPixelY,
      vec3<f32>(
        projectedGaussians[projection + 49u],
        projectedGaussians[projection + 50u],
        projectedGaussians[projection + 51u],
      ),
      vec3<f32>(
        projectedGaussians[projection + 52u],
        projectedGaussians[projection + 53u],
        projectedGaussians[projection + 54u],
      ),
      transmittanceBefore * alpha * colorError * vec3<f32>(
        conicTimesOffset.x * conicTimesOffset.x,
        conicTimesOffset.x * conicTimesOffset.y,
        conicTimesOffset.y * conicTimesOffset.y,
      ),
    );
    atomicGradient(gradient, covariancePositionGradient.x * normalization);
    atomicGradient(gradient + 1u, covariancePositionGradient.y * normalization);
    atomicGradient(gradient + 2u, covariancePositionGradient.z * normalization);
    atomicGradient(gradient + 3u, worldCovarianceGradient[0][0] * normalization);
    atomicGradient(
      gradient + 4u,
      0.5 * (worldCovarianceGradient[1][0] + worldCovarianceGradient[0][1]) * normalization,
    );
    atomicGradient(
      gradient + 5u,
      0.5 * (worldCovarianceGradient[2][0] + worldCovarianceGradient[0][2]) * normalization,
    );
    atomicGradient(gradient + 6u, worldCovarianceGradient[1][1] * normalization);
    atomicGradient(
      gradient + 7u,
      0.5 * (worldCovarianceGradient[2][1] + worldCovarianceGradient[1][2]) * normalization,
    );
    atomicGradient(gradient + 8u, worldCovarianceGradient[2][2] * normalization);
    behindColor = alpha * color + (1.0 - alpha) * behindColor;
  }
}

@compute @workgroup_size(64)
fn applyParallelGradients(@builtin(global_invocation_id) invocation: vec3<u32>) {
  let splatIndex = invocation.x;
  if (splatIndex >= parameters.splatCount) {
    return;
  }
  let state = stateBase(splatIndex);
  let gradient = gradientBase(splatIndex);
  var centerGradientMagnitudeSum = 0.0;
  var visibleViewCount = 0.0;
  var maximumProjectedRadius = 0.0;
  for (var viewIndex = 0u; viewIndex < parameters.viewCount; viewIndex += 1u) {
    let projection = projectionBase(viewIndex, splatIndex);
    if (projectedGaussians[projection] <= 0.0) {
      continue;
    }
    let center = vec2<f32>(
      projectedGaussians[projection + 1u],
      projectedGaussians[projection + 2u],
    );
    let radius = 3.0 * sqrt(vec2<f32>(
      projectedGaussians[projection + 3u],
      projectedGaussians[projection + 5u],
    ));
    if (
      center.x + radius.x < 0.5 ||
      center.x - radius.x > f32(parameters.width) - 0.5 ||
      center.y + radius.y < 0.5 ||
      center.y - radius.y > f32(parameters.height) - 0.5
    ) {
      continue;
    }
    maximumProjectedRadius = max(
      maximumProjectedRadius,
      max(radius.x, radius.y),
    );
    let screenGradient = screenGradientBase(viewIndex, splatIndex);
    let centerGradient = vec2<f32>(
      bitcast<f32>(atomicLoad(&gradientAccumulator[screenGradient])),
      bitcast<f32>(atomicLoad(&gradientAccumulator[screenGradient + 1u])),
    );
    let normalizedCenterGradient = centerGradient *
      vec2<f32>(f32(parameters.width), f32(parameters.height)) * f32(parameters.viewCount);
    let centerGradientMagnitude = length(normalizedCenterGradient);
    centerGradientMagnitudeSum += centerGradientMagnitude;
    visibleViewCount += 1.0;
  }
  let statisticsBase = gradientStatisticsBase(splatIndex);
  gradientScratch[statisticsBase] += centerGradientMagnitudeSum;
  gradientScratch[statisticsBase + 1u] += visibleViewCount;
  gradientScratch[statisticsBase + 2u] = max(
    gradientScratch[statisticsBase + 2u], maximumProjectedRadius,
  );
  gradientScratch[statisticsBase + 3u] = max(
    gradientScratch[statisticsBase + 3u], visibleViewCount,
  );
  var gradients: array<f32, 59>;
  for (var parameter = 0u; parameter < 59u; parameter += 1u) {
    gradients[parameter] = bitcast<f32>(atomicLoad(&gradientAccumulator[gradient + parameter]));
  }
  let covarianceGradient = mat3x3<f32>(
    vec3<f32>(gradients[3], gradients[4], gradients[5]),
    vec3<f32>(gradients[4], gradients[6], gradients[7]),
    vec3<f32>(gradients[5], gradients[7], gradients[8]),
  );
  let geometryGradients = scaleQuaternionGradient(state, covarianceGradient);
  for (var parameter = 0u; parameter < 7u; parameter += 1u) {
    gradients[3u + parameter] = geometryGradients[parameter];
  }
  let stepIndex = optimizerStepBase() + splatIndex;
  let optimizerStep = u32(optimizerState[stepIndex]) + 1u;
  optimizerState[stepIndex] = f32(optimizerStep);
  let firstMomentCorrection = 1.0 - pow(0.9, f32(optimizerStep));
  let secondMomentCorrection = 1.0 - pow(0.999, f32(optimizerStep));
  let secondMomentOffset = parameters.splatCapacity * 59u;
  for (var parameter = 0u; parameter < 59u; parameter += 1u) {
    let gradientValue = gradients[parameter];
    let momentIndex = splatIndex * 59u + parameter;
    let firstMoment = 0.9 * optimizerState[momentIndex] + 0.1 * gradientValue;
    let secondMoment = 0.999 * optimizerState[secondMomentOffset + momentIndex] +
      0.001 * gradientValue * gradientValue;
    optimizerState[momentIndex] = firstMoment;
    optimizerState[secondMomentOffset + momentIndex] = secondMoment;
    let firstMomentEstimate = firstMoment / firstMomentCorrection;
    let secondMomentEstimate = secondMoment / secondMomentCorrection;
    let update = parameterLearningRate(parameter) * firstMomentEstimate /
      (sqrt(secondMomentEstimate) + 1e-8);
    gaussianState[state + parameter] -= update;
  }
  gaussianState[state + 3u] = clamp(gaussianState[state + 3u], -10.0, 4.0);
  gaussianState[state + 4u] = clamp(gaussianState[state + 4u], -10.0, 4.0);
  gaussianState[state + 5u] = clamp(gaussianState[state + 5u], -10.0, 4.0);
  let quaternion = normalizeGaussianQuaternion(vec4<f32>(
    gaussianState[state + 6u],
    gaussianState[state + 7u],
    gaussianState[state + 8u],
    gaussianState[state + 9u],
  ));
  gaussianState[state + 6u] = quaternion.x;
  gaussianState[state + 7u] = quaternion.y;
  gaussianState[state + 8u] = quaternion.z;
  gaussianState[state + 9u] = quaternion.w;
  gaussianState[state + 10u] = clamp(gaussianState[state + 10u], 0.0, 1.0);
  gaussianState[state + 11u] = clamp(gaussianState[state + 11u], 0.0, 1.0);
  gaussianState[state + 12u] = clamp(gaussianState[state + 12u], 0.0, 1.0);
  gaussianState[state + 13u] = clamp(gaussianState[state + 13u], 0.0, 1.0);
  for (var parameter = 14u; parameter < 59u; parameter += 1u) {
    gaussianState[state + parameter] = clamp(gaussianState[state + parameter], -10.0, 10.0);
  }
}
`;function m(e,t){let a=function(e){if(!Number.isSafeInteger(e.width)||e.width<=0||!Number.isSafeInteger(e.height)||e.height<=0)throw RangeError("Render dimensions must be positive safe integers.");if(!Number.isSafeInteger(e.width*e.height*4))throw RangeError("RGBA render buffer dimensions are too large.");let{focalLengthX:t,focalLengthY:a,principalPointX:i,principalPointY:r}=e.camera;if(![t,a].every(e=>Number.isFinite(e)&&e>0))throw RangeError("Pixel focal lengths must be positive finite numbers.");if(![i,r].every(Number.isFinite))throw RangeError("Principal point coordinates must be finite.");if(e.backgroundColor.some(e=>!Number.isFinite(e)))throw RangeError("Background color channels must be finite.");let n=e.sigmaExtent??3;if(!Number.isFinite(n)||n<=0)throw RangeError("Sigma extent must be a positive finite number.");return n}(t);return function(e,t,a){let i={width:t.width,height:t.height},{focalLengthX:r,focalLengthY:n,principalPointX:o,principalPointY:s}=t.camera,c=[];for(let t of e){if(t.cameraPosition.some(e=>!Number.isFinite(e)))throw RangeError("Gaussian camera position must contain finite values.");if(t.color.some(e=>!Number.isFinite(e)))throw RangeError("Gaussian color channels must be finite.");if(!Number.isFinite(t.opacity)||t.opacity<0||t.opacity>1)throw RangeError("Gaussian opacity must be between zero and one.");if(0===t.opacity||t.cameraPosition[2]>=0)continue;let e=function(e,t,a,i,r){if(e.some(e=>!Number.isFinite(e)))throw RangeError("Camera-space position must contain finite values.");if(e[2]>=0)throw RangeError("The camera-space position must be in front of the camera (-Z).");if(![t,a].every(e=>Number.isFinite(e)&&e>0))throw RangeError("Pixel focal lengths must be positive finite numbers.");if(![i,r].every(Number.isFinite))throw RangeError("Principal point coordinates must be finite.");let[n,o,s]=e,c=-s,l={x:n/c*t+i,y:r-o/c*a};if(Object.values(l).some(e=>!Number.isFinite(e)))throw RangeError("Projected pixel position must contain finite values.");return l}(t.cameraPosition,r,n,o,s),l=function(e,t,a,i){if(e.some(e=>!Number.isFinite(e)))throw RangeError("Camera-space position must contain finite values.");if(e[2]>=0)throw RangeError("The camera-space position must be in front of the camera (-Z).");if(![a,i].every(e=>Number.isFinite(e)&&e>0))throw RangeError("Pixel focal lengths must be positive finite numbers.");if(Object.values(t).some(e=>!Number.isFinite(e)))throw RangeError("Camera-space covariance must contain finite values.");let[r,n,o]=e,s=-(1/o),c=s*s,l=a*s,u=a*r*c,d=-i*s,f=-i*n*c,p={xx:l*l*t.xx+2*l*u*t.xz+u*u*t.zz,xy:l*d*t.xy+l*f*t.xz+u*d*t.yz+u*f*t.zz,yy:d*d*t.yy+2*d*f*t.yz+f*f*t.zz};if(Object.values(p).some(e=>!Number.isFinite(e)))throw RangeError("Projected pixel covariance must contain finite values.");return p}(t.cameraPosition,t.covariance,r,n),u=function(e,t,a,i=3){if(![e.x,e.y].every(Number.isFinite))throw RangeError("Gaussian center coordinates must be finite.");if(!Number.isSafeInteger(a.width)||a.width<=0||!Number.isSafeInteger(a.height)||a.height<=0)throw RangeError("Viewport dimensions must be positive safe integers.");if(!Number.isFinite(i)||i<=0)throw RangeError("Sigma extent must be a positive finite number.");if(Object.values(t).some(e=>!Number.isFinite(e)))throw RangeError("Pixel covariance must contain finite values.");if(t.xx<=0||t.yy<=0)throw RangeError("Pixel covariance must have positive diagonal values.");let r=t.xx*t.yy-t.xy*t.xy;if(!Number.isFinite(r)||r<=0)throw RangeError("Pixel covariance must be positive definite.");let n=i*Math.sqrt(t.xx),o=i*Math.sqrt(t.yy);if(!Number.isFinite(n)||!Number.isFinite(o))throw RangeError("Pixel covariance bounds must be finite.");let s=(e,t)=>Math.max(0,Math.min(t,e)),c=s(Math.ceil(e.x-n-.5),a.width),l=s(Math.floor(e.x+n-.5)+1,a.width),u=s(Math.ceil(e.y-o-.5),a.height),d=s(Math.floor(e.y+o-.5)+1,a.height);return c>=l||u>=d?null:{left:c,top:u,right:l,bottom:d}}(e,l,i,a);u&&c.push({cameraDepth:-t.cameraPosition[2],bounds:u,center:e,color:t.color,conic:function(e){if(Object.values(e).some(e=>!Number.isFinite(e)))throw RangeError("Pixel covariance must contain finite values.");if(e.xx<=0||e.yy<=0)throw RangeError("Pixel covariance must have positive diagonal values.");let t=e.xx*e.yy-e.xy*e.xy;if(!Number.isFinite(t)||t<=0)throw RangeError("Pixel covariance must be positive definite and invertible.");let a={xx:e.yy/t,xy:-e.xy/t,yy:e.xx/t};if(Object.values(a).some(e=>!Number.isFinite(e)))throw RangeError("Inverse pixel covariance must contain finite values.");return a}(l),opacity:t.opacity})}for(let e of c)if(!Number.isFinite(e.cameraDepth)||e.cameraDepth<=0)throw RangeError("Camera depth must be a positive finite number.");return c.map((e,t)=>({item:e,inputOrder:t})).sort((e,t)=>e.item.cameraDepth<t.item.cameraDepth?-1:e.item.cameraDepth>t.item.cameraDepth?1:e.inputOrder-t.inputOrder).map(({item:e})=>e)}(e,t,a)}function g(e,t){return{cameraPosition:i(e.worldPosition,t),covariance:function(e,t){if(Object.values(e).some(e=>!Number.isFinite(e)))throw RangeError("World covariance must contain finite values.");let i=a(t),r=[[i[0][0],i[1][0],i[2][0]],[i[0][1],i[1][1],i[2][1]],[i[0][2],i[1][2],i[2][2]]],n=(t,a)=>t[0]*(e.xx*a[0]+e.xy*a[1]+e.xz*a[2])+t[1]*(e.xy*a[0]+e.yy*a[1]+e.yz*a[2])+t[2]*(e.xz*a[0]+e.yz*a[1]+e.zz*a[2]),o=r[0],s=r[1],c=r[2],l={xx:n(o,o),xy:n(o,s),xz:n(o,c),yy:n(s,s),yz:n(s,c),zz:n(c,c)};if(Object.values(l).some(e=>!Number.isFinite(e)))throw RangeError("Camera-space covariance must contain finite values.");return l}(e.covariance,t.orientationCameraToWorld),color:function(e,t){if(!e.sphericalHarmonics)return e.color;let a=[e.worldPosition[0]-t[0],e.worldPosition[1]-t[1],e.worldPosition[2]-t[2]];return function(e,t,a=3){if(e.length<16)throw RangeError("Degree-three spherical harmonics require sixteen RGB coefficients.");let i=function(e,t=3){if(!Number.isSafeInteger(t)||t<0||t>3)throw RangeError("Spherical-harmonic degree must be between zero and three.");if(e.some(e=>!Number.isFinite(e)))throw RangeError("Spherical-harmonic direction must be finite.");let a=Math.hypot(...e),[i,r,n]=a>Number.EPSILON?[e[0]/a,e[1]/a,e[2]/a]:[0,0,1],o=Array(16).fill(0);return o[0]=.28209479177387814,t>=1&&(o[1]=-.4886025119029199*r,o[2]=.4886025119029199*n,o[3]=-.4886025119029199*i),t>=2&&(o[4]=1.0925484305920792*i*r,o[5]=-1.0925484305920792*r*n,o[6]=.31539156525252005*(2*n*n-i*i-r*r),o[7]=-1.0925484305920792*i*n,o[8]=.5462742152960396*(i*i-r*r)),t>=3&&(o[9]=-.5900435899266435*r*(3*i*i-r*r),o[10]=2.890611442640554*i*r*n,o[11]=-.4570457994644658*r*(4*n*n-i*i-r*r),o[12]=.3731763325901154*n*(2*n*n-3*i*i-3*r*r),o[13]=-.4570457994644658*i*(4*n*n-i*i-r*r),o[14]=1.445305721320277*n*(i*i-r*r),o[15]=-.5900435899266435*i*(i*i-3*r*r)),o}(t,a),r=[.5,.5,.5],n=(a+1)**2;for(let t=0;t<n;t+=1){let a=e[t];if(!a)throw RangeError("Spherical-harmonic coefficient is missing.");let n=i[t]??0;for(let e=0;e<3;e+=1)r[e]=(r[e]??0)+n*(a[e]??0)}return[Math.max(0,r[0]??0),Math.max(0,r[1]??0),Math.max(0,r[2]??0)]}(e.sphericalHarmonics,a)}(e,t.worldPosition),opacity:e.opacity}}function h(e,t){let{extrinsics:a,...i}=t;return function(e,t){let a=m(e,t),i=t.width*t.height,r=new Float64Array(4*i);for(let e=0;e<i;e+=1)r[4*e+3]=1;for(let e of a){let{left:a,right:i,top:n,bottom:o}=e.bounds;for(let s=n;s<o;s+=1)for(let n=a;n<i;n+=1){let a=(s*t.width+n)*4,i=r[a+3]??0,o=function(e,t,a){if([e.x,e.y,t.x,t.y].some(e=>!Number.isFinite(e)))throw RangeError("Pixel and Gaussian center coordinates must be finite.");if(Object.values(a).some(e=>!Number.isFinite(e)))throw RangeError("Gaussian conic must contain finite values.");if(a.xx<=0||a.yy<=0)throw RangeError("Gaussian conic must have positive diagonal values.");let i=a.xx*a.yy-a.xy*a.xy;if(!Number.isFinite(i)||i<=0)throw RangeError("Gaussian conic must be positive definite.");let r=e.x-t.x,n=e.y-t.y,o=a.xx*r*r+2*a.xy*r*n+a.yy*n*n;if(Number.isNaN(o))throw RangeError("Pixel distance produced an invalid Gaussian exponent.");return Math.exp(-.5*Math.max(0,o))}({x:n+.5,y:s+.5},e.center,e.conic),c=e.opacity*o,l=i*c;r[a]=(r[a]??0)+l*e.color[0],r[a+1]=(r[a+1]??0)+l*e.color[1],r[a+2]=(r[a+2]??0)+l*e.color[2],r[a+3]=i*(1-c)}}let n=new Float32Array(4*i);for(let e=0;e<n.length;e+=4){let a=r[e+3]??0;for(let i=0;i<3;i+=1){let o=(r[e+i]??0)+a*(t.backgroundColor[i]??0);if(!Number.isFinite(o))throw RangeError("Composited color and transmittance must be finite.");n[e+i]=o}n[e+3]=1}return{width:t.width,height:t.height,rgba:n}}(e.map(e=>g(e,a)),i)}function v(e,t){return t.map(t=>h(e,t))}function x(e,t){if(e.width!==t.width||e.height!==t.height)throw RangeError("Training images must have matching dimensions.");if(e.rgba.length!==e.width*e.height*4||t.rgba.length!==t.width*t.height*4)throw RangeError("Training images must contain complete RGBA pixels.");let a=0;for(let i=0;i<e.rgba.length;i+=4)for(let r=0;r<3;r+=1){let n=e.rgba[i+r],o=t.rgba[i+r];if(void 0===n||void 0===o||!Number.isFinite(n)||!Number.isFinite(o))throw RangeError("Training RGB values must be finite.");a+=(n-o)**2}return a/(e.width*e.height*3)}function w(e,t){if(0===e.length||e.length!==t.length)throw RangeError("Multi-view loss requires matching non-empty view lists.");let a=0;for(let i=0;i<e.length;i+=1){let r=e[i],n=t[i];if(!r||!n)throw RangeError("A multi-view training image is missing.");a+=x(r,n)}return a/e.length}function b(e,t){if(0===e.length||e.length!==t.length)throw RangeError("Multi-view loss requires matching non-empty view lists.");let a=0;for(let i=0;i<e.length;i+=1){let r=e[i],n=t[i];if(!r||!n)throw RangeError("A multi-view training image is missing.");a+=function(e,t){if(e.width!==t.width||e.height!==t.height)throw RangeError("Training images must have matching dimensions.");let a=e.width*e.height;if(e.rgba.length!==4*a||t.rgba.length!==4*a)throw RangeError("Training images must contain complete RGBA pixels.");let i=Array.from({length:11},(e,t)=>{let a=t-5;return Math.exp(-.5*a*a/2.25)}),r=0,n=0,o=new Float64Array(5*a);for(let a=0;a<3;a+=1){for(let r=0;r<e.height;r+=1)for(let n=0;n<e.width;n+=1){let s=0,c=0,l=0,u=0,d=0,f=0;for(let o=-5;o<=5;o+=1){let p=n+o;if(p<0||p>=e.width)continue;let m=i[o+5]??0,g=(r*e.width+p)*4+a,h=t.rgba[g]??0,v=e.rgba[g]??0;s+=m,c+=m*h,l+=m*v,u+=m*h*h,d+=m*v*v,f+=m*h*v}let p=(r*e.width+n)*5;o[p]=c/s,o[p+1]=l/s,o[p+2]=u/s,o[p+3]=d/s,o[p+4]=f/s}for(let s=0;s<e.height;s+=1)for(let c=0;c<e.width;c+=1){let l=0,u=0,d=0,f=0,p=0,m=0;for(let t=-5;t<=5;t+=1){let a=s+t;if(a<0||a>=e.height)continue;let r=i[t+5]??0,n=(a*e.width+c)*5;l+=r,u+=r*(o[n]??0),d+=r*(o[n+1]??0),f+=r*(o[n+2]??0),p+=r*(o[n+3]??0),m+=r*(o[n+4]??0)}u/=l,d/=l;let g=Math.max(0,f/l-u*u),h=Math.max(0,p/l-d*d),v=m/l-u*d,x=(s*e.width+c)*4+a,w=e.rgba[x]??0,b=t.rgba[x]??0;if(!Number.isFinite(w)||!Number.isFinite(b))throw RangeError("Training RGB values must be finite.");r+=Math.abs(w-b),n+=1-(2*u*d+1e-4)/(u*u+d*d+1e-4)*((2*v+9e-4)/(g+h+9e-4))}}let s=3*a;return r/s*.8+n/s*.2}(r,n)}return a/e.length}let y=`
struct RenderParameters {
  width: u32,
  height: u32,
  splatCount: u32,
  padding: u32,
  background: vec4<f32>,
};

@group(0) @binding(0) var<storage, read> splats: array<f32>;
@group(0) @binding(1) var<uniform> parameters: RenderParameters;
@group(0) @binding(2) var<storage, read_write> pixels: array<vec4<f32>>;

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) invocation: vec3<u32>) {
  let pixelX = invocation.x;
  let pixelY = invocation.y;
  if (pixelX >= parameters.width || pixelY >= parameters.height) {
    return;
  }

  let pixel = vec2<f32>(f32(pixelX) + 0.5, f32(pixelY) + 0.5);
  var color = vec3<f32>(0.0);
  var transmittance = 1.0;

  for (var splatIndex = 0u; splatIndex < parameters.splatCount; splatIndex += 1u) {
    let base = splatIndex * 13u;
    let left = splats[base + 9u];
    let top = splats[base + 10u];
    let right = splats[base + 11u];
    let bottom = splats[base + 12u];
    if (
      f32(pixelX) < left || f32(pixelX) >= right ||
      f32(pixelY) < top || f32(pixelY) >= bottom
    ) {
      continue;
    }

    let offset = pixel - vec2<f32>(splats[base], splats[base + 1u]);
    let squaredDistance =
      splats[base + 2u] * offset.x * offset.x +
      2.0 * splats[base + 3u] * offset.x * offset.y +
      splats[base + 4u] * offset.y * offset.y;
    let weight = exp(-0.5 * max(0.0, squaredDistance));
    let alpha = splats[base + 8u] * weight;
    let contribution = transmittance * alpha;
    color += contribution * vec3<f32>(
      splats[base + 5u],
      splats[base + 6u],
      splats[base + 7u],
    );
    transmittance *= 1.0 - alpha;
  }

  color += transmittance * parameters.background.rgb;
  pixels[pixelY * parameters.width + pixelX] = vec4<f32>(color, 1.0);
}
`;async function P(e,t){return G(m(e,t),t)}async function G(e,t){let a,i,r,n;if(!("u">typeof navigator&&"gpu"in navigator))throw Error("WebGPU is unavailable in this browser.");let o=await navigator.gpu.requestAdapter();if(!o)throw Error("No WebGPU adapter is available.");let s=await o.requestDevice(),c=4*(t.width*t.height)*Float32Array.BYTES_PER_ELEMENT,l=function(e){let t=new Float32Array(new ArrayBuffer(4*Math.max(13*e.length,1)));for(let a=0;a<e.length;a+=1){let i=e[a];if(!i)throw RangeError("Projected Gaussian is missing.");let r=13*a;t.set([i.center.x,i.center.y,i.conic.xx,i.conic.xy,i.conic.yy,i.color[0],i.color[1],i.color[2],i.opacity,i.bounds.left,i.bounds.top,i.bounds.right,i.bounds.bottom],r)}return t}(e),u=l.byteLength,d=Math.ceil(t.width/8),f=Math.ceil(t.height/8);if(c>s.limits.maxBufferSize||c>s.limits.maxStorageBufferBindingSize||u>s.limits.maxBufferSize||u>s.limits.maxStorageBufferBindingSize)throw s.destroy(),RangeError("Render buffers exceed this WebGPU device's storage limits.");if(d>s.limits.maxComputeWorkgroupsPerDimension||f>s.limits.maxComputeWorkgroupsPerDimension)throw s.destroy(),RangeError("Render dimensions exceed this WebGPU device's dispatch limits.");let p=!1;try{a=s.createBuffer({size:u,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),i=s.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),r=s.createBuffer({size:c,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),n=s.createBuffer({size:c,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),e.length>0&&s.queue.writeBuffer(a,0,l);let o=new ArrayBuffer(32),m=new DataView(o);m.setUint32(0,t.width,!0),m.setUint32(4,t.height,!0),m.setUint32(8,e.length,!0),m.setUint32(12,0,!0),m.setFloat32(16,t.backgroundColor[0],!0),m.setFloat32(20,t.backgroundColor[1],!0),m.setFloat32(24,t.backgroundColor[2],!0),m.setFloat32(28,1,!0),s.queue.writeBuffer(i,0,o);let g=s.createShaderModule({code:y}),h=await s.createComputePipelineAsync({layout:"auto",compute:{module:g,entryPoint:"main"}}),v=s.createBindGroup({layout:h.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:a}},{binding:1,resource:{buffer:i}},{binding:2,resource:{buffer:r}}]}),x=s.createCommandEncoder(),w=x.beginComputePass();w.setPipeline(h),w.setBindGroup(0,v),w.dispatchWorkgroups(d,f),w.end(),x.copyBufferToBuffer(r,0,n,0,c),s.queue.submit([x.finish()]),await n.mapAsync(GPUMapMode.READ),p=!0;let b=new Float32Array(n.getMappedRange().slice(0));return n.unmap(),p=!1,{width:t.width,height:t.height,rgba:b}}finally{p&&n?.unmap(),a?.destroy(),i?.destroy(),r?.destroy(),n?.destroy(),s.destroy()}}function S(e){let t=new Float32Array(19*e.length);return e.forEach((e,i)=>{let r=a(e.extrinsics.orientationCameraToWorld);t.set([...r[0],...r[1],...r[2],...e.extrinsics.worldPosition,e.camera.focalLengthX,e.camera.focalLengthY,e.camera.principalPointX,e.camera.principalPointY,...e.backgroundColor],19*i)}),t}function C(e,t,a,i,r,n,o=0,s=0){let c=new ArrayBuffer(32),l=new DataView(c);return l.setUint32(0,e,!0),l.setUint32(4,t,!0),l.setUint32(8,a,!0),l.setUint32(12,i,!0),l.setFloat32(16,r,!0),l.setUint32(20,n,!0),l.setUint32(24,o,!0),l.setUint32(28,s,!0),c}function j(e,a=e.length){let i=new Float32Array(59*a);return e.forEach((e,a)=>{let{scale:r,rotation:o}=n(e.covariance),s=t(o),c=e.sphericalHarmonics??l(e.color);if(16!==c.length)throw RangeError("Cloud Gaussians must contain sixteen RGB spherical-harmonic coefficients.");i.set([...e.worldPosition,Math.log(r[0]),Math.log(r[1]),Math.log(r[2]),...s,e.opacity,...e.color,...c.slice(1).flatMap(e=>[...e])],59*a)}),i}async function B(e,i,o){let s,c,m,h,x,y,G,B,I,E,M,R,z,Y,T,X,k,O,F,N,D,U,A,L,q,_,W,J,V,$,Q,H,K,Z,ee,et;!function(e,t,a){if(0===e.length||e.length>u)throw RangeError(`Cloud training requires between 1 and ${u} Gaussians.`);if(t.length<2)throw RangeError("Cloud training requires at least two camera views.");if(void 0===a.iterations&&!a.earlyStopping)throw RangeError("Training requires an iteration limit or an early-stopping policy.");if(void 0!==a.iterations&&(!Number.isSafeInteger(a.iterations)||a.iterations<1))throw RangeError("Training iterations must be a positive safe integer.");if(void 0!==a.trainingKernel&&!["serial","parallel"].includes(a.trainingKernel))throw RangeError("Training kernel must be serial or parallel.");if(void 0!==a.viewBatchSize&&(1!==a.viewBatchSize||"parallel"!==a.trainingKernel))throw RangeError("Single-view minibatches require the parallel training kernel.");if(!Number.isFinite(a.learningRate)||a.learningRate<=0)throw RangeError("Learning rate must be positive and finite.");for(let e of[a.shDegreeInterval,a.positionLearningRateDecaySteps])if(void 0!==e&&(!Number.isSafeInteger(e)||e<1))throw RangeError("SH degree and position decay intervals must be positive safe integers.");if(void 0!==a.checkpointEvery&&(!Number.isSafeInteger(a.checkpointEvery)||a.checkpointEvery<=0))throw RangeError("Checkpoint interval must be a positive safe integer.");if(a.earlyStopping){let{patience:e,minimumRelativeImprovement:t}=a.earlyStopping;if(!Number.isSafeInteger(e)||e<1)throw RangeError("Early stopping patience must be a positive safe integer.");if(!Number.isFinite(t)||t<=0||t>=1)throw RangeError("Early-stopping relative improvement must be between zero and one.")}if(void 0!==a.densificationEvery&&(!Number.isSafeInteger(a.densificationEvery)||a.densificationEvery<1))throw RangeError("Densification interval must be a positive safe integer.");let i=a.maximumGaussians??e.length+(a.maximumDensifications??0);if(!Number.isSafeInteger(i)||i<e.length||i>u)throw RangeError(`Maximum Gaussian count must be between the initial count and ${u}.`);let r=a.maximumDensifications??0;if(!Number.isSafeInteger(r)||r<0)throw RangeError("Maximum densification count must be a non-negative safe integer.");let n=a.minimumOpacity??0;if(!Number.isFinite(n)||n<0||n>1)throw RangeError("Minimum opacity must be between zero and one.");let o=a.minimumSplitGradient??0;if(!Number.isFinite(o)||o<0)throw RangeError("Minimum split gradient must be non-negative and finite.");let s=a.prunePatience??2;if(!Number.isSafeInteger(s)||s<1)throw RangeError("Prune patience must be a positive safe integer.");for(let t of e){if(t.color.some(e=>!Number.isFinite(e)||e<0||e>1))throw RangeError("Gaussian RGB channels must be between zero and one.");if(!Number.isFinite(t.opacity)||t.opacity<0||t.opacity>1)throw RangeError("Gaussian opacity must be between zero and one.")}let c=t[0];if(!c)throw RangeError("The first camera view is missing.");let l=c.width*c.height;if(void 0===a.viewBatchSize&&l*t.length>64e3)throw RangeError("Cloud training is limited to 64000 view pixels.");for(let e of t){if(void 0!==e.sigmaExtent&&3!==e.sigmaExtent)throw RangeError("Cloud training currently requires a three-sigma Gaussian extent.");if(e.width!==c.width||e.height!==c.height)throw RangeError("All cloud training views must have matching dimensions.");if(e.target.width!==e.width||e.target.height!==e.height||e.target.rgba.length!==4*l||e.target.rgba.some(e=>!Number.isFinite(e)))throw RangeError("Training target must match its view dimensions and contain finite pixels.")}}(e,i,o);let ea=i[0];if(!ea)throw RangeError("The first camera view is missing.");let ei=o.trainingKernel??"serial";if("u"<typeof navigator||!("gpu"in navigator))throw Error("WebGPU is unavailable in this browser.");let er=i.map(({target:e})=>e),en=w(er,v(e,i)),eo=1===o.viewBatchSize?i.slice(0,1):i,es=eo.length,ec=S(eo),el=o.maximumGaussians??e.length+(o.maximumDensifications??0),eu=o.maximumDensifications??0,ed=o.minimumOpacity??0,ef=o.minimumSplitGradient??0,ep=o.maximumScreenRadius,em=o.prunePatience??2,eg=o.densificationEvery??100,eh=o.densificationStartIteration??500,ev=o.densificationEndIteration??15e3,ex=o.opacityResetEvery??3e3,ew=eu>0||ed>0||void 0!==ep,eb=[...e],ey=new Uint32Array(el),eP=j(eb,el),eG=el*("parallel"===ei?67*es:42)*Float32Array.BYTES_PER_ELEMENT,eS=el*("parallel"===ei?2*es:1)*Uint32Array.BYTES_PER_ELEMENT,eC=4*el*Float32Array.BYTES_PER_ELEMENT,ej=59*el,eB=2*ej+el,eI=eB*Float32Array.BYTES_PER_ELEMENT,eE=(59*el+es*el*2)*Int32Array.BYTES_PER_ELEMENT,eM=ea.width*ea.height,eR=es*eM*56*Float32Array.BYTES_PER_ELEMENT,ez=Math.ceil(ea.width/8),eY=Math.ceil(ea.height/8),eT=es*ez*eY,eX=(eT*el+eT)*Uint32Array.BYTES_PER_ELEMENT;if(!Number.isSafeInteger(eg)||eg<1)throw RangeError("Densification interval must be a positive safe integer.");if(!Number.isSafeInteger(eh)||eh<0||!Number.isSafeInteger(ev)||ev<eh)throw RangeError("Densification iteration bounds must be non-negative and ordered.");if(!Number.isSafeInteger(ex)||ex<1)throw RangeError("Opacity reset interval must be a positive safe integer.");if(void 0!==ep&&(!Number.isFinite(ep)||ep<=0))throw RangeError("Maximum screen-space radius must be positive and finite.");let ek=new Float32Array(es*eM*4);eo.forEach(({target:e},t)=>ek.set(e.rgba,t*eM*4));let eO=await navigator.gpu.requestAdapter();if(!eO)throw Error("No WebGPU adapter is available.");let eF=Float32Array.BYTES_PER_ELEMENT,eN=[ec.byteLength,ek.byteLength,eP.byteLength,eG,eS,eC,..."parallel"===ei?[eI,eE,eR,eC,eX]:[]],eD=Math.max(...eN);if(eN.some(e=>!Number.isSafeInteger(e)||e/Float32Array.BYTES_PER_ELEMENT>0xffffffff))throw RangeError("Cloud training storage exceeds the shader's u32 address space.");if(eD>eO.limits.maxBufferSize||eD>eO.limits.maxStorageBufferBindingSize)throw RangeError(`Cloud training requires a ${eD}-byte storage buffer, exceeding this WebGPU adapter's limits.`);let eU=await eO.requestDevice({requiredLimits:{maxBufferSize:eD,maxStorageBufferBindingSize:eD}}),eA=[],eL=[],eq=!1,e_=!1,eW=!1,eJ=!1,eV=en,e$=0,eQ=0,eH=0,eK=0,eZ=0,e0=0,e2=0,e3=0,e1=0,e5=0,e4=0,e9=0,e8=0,e6=0,e7=void 0===o.iterations?"plateau":"iteration-limit",te=[],tt=[];try{if(eU.pushErrorScope("out-of-memory"),eU.pushErrorScope("validation"),s=eU.createBuffer({size:ec.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),c=eU.createBuffer({size:ek.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),m=eU.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),h=eU.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),x=eU.createBuffer({size:eP.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),y=eU.createBuffer({size:eF,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),G=eU.createBuffer({size:eG,usage:GPUBufferUsage.STORAGE}),B=eU.createBuffer({size:eS,usage:GPUBufferUsage.STORAGE}),I=eU.createBuffer({size:eC,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),"parallel"===ei&&(E=eU.createBuffer({size:eE,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),M=eU.createBuffer({size:eI,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),R=eU.createBuffer({size:eR,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),z=eU.createBuffer({size:eC,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=eU.createBuffer({size:eX,usage:GPUBufferUsage.STORAGE}),O=eU.createBuffer({size:eI,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),eU.queue.writeBuffer(M,0,new Float32Array(eB))),T=eU.createBuffer({size:eP.byteLength,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),X=eU.createBuffer({size:eF,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),k=eU.createBuffer({size:eC,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),eU.queue.writeBuffer(s,0,ec),eU.queue.writeBuffer(c,0,ek),1===o.viewBatchSize)for(let e of i){let t=eU.createBuffer({size:ec.byteLength,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});eA.push(t),eU.queue.writeBuffer(t,0,S([e]));let a=eU.createBuffer({size:ek.byteLength,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});eL.push(a),eU.queue.writeBuffer(a,0,new Float32Array(e.target.rgba))}if(eU.queue.writeBuffer(x,0,eP),eU.queue.writeBuffer(m,0,C(ea.width,ea.height,es,eb.length,o.learningRate,el)),eU.queue.writeBuffer(h,0,C(ea.width,ea.height,es,eb.length,0,el)),"parallel"===ei){if(!x||!T)throw Error("Parallel state buffers were not created.");let e=eU.createCommandEncoder();e.copyBufferToBuffer(x,0,T,0,eP.byteLength),eU.queue.submit([e.finish()]),await T.mapAsync(GPUMapMode.READ),T.unmap()}let e=s,u=c,g=x,P=y,en=G,eo=B,eM=I,eT=z,eO=Y,eN=M,eD=R;if(!e||!u||!g||!P||!en||!eo||!eM||"parallel"===ei&&(!eT||!eN||!eD))throw Error("Cloud training buffers were not created.");let to=eU.createShaderModule({code:d}),ts=(await to.getCompilationInfo()).messages.filter(e=>"error"===e.type);if(ts.length>0)throw Error(ts.map(e=>`${e.lineNum}:${e.linePos} ${e.message}`).join("\n"));let tc=await eU.createComputePipelineAsync({layout:"auto",compute:{module:to,entryPoint:"main"}});if("parallel"===ei){if(!E||!eT||!eN||!eD)throw Error("Parallel training buffers were not created.");let t=eU.createShaderModule({code:p}),a=(await t.getCompilationInfo()).messages.filter(e=>"error"===e.type);if(a.length>0)throw Error(a.map(e=>`${e.lineNum}:${e.linePos} ${e.message}`).join("\n"));for(let a of(W=await eU.createComputePipelineAsync({layout:"auto",compute:{module:t,entryPoint:"accumulateParallelPixelGradients"}}),L=await eU.createComputePipelineAsync({layout:"auto",compute:{module:t,entryPoint:"projectParallelGaussians"}}),q=await eU.createComputePipelineAsync({layout:"auto",compute:{module:t,entryPoint:"sortParallelGaussianOrder"}}),_=await eU.createComputePipelineAsync({layout:"auto",compute:{module:t,entryPoint:"buildParallelTileLists"}}),J=await eU.createComputePipelineAsync({layout:"auto",compute:{module:t,entryPoint:"applyParallelGradients",constants:{positionLearningRateDecaySteps:o.positionLearningRateDecaySteps??3e4}}}),Q=await eU.createComputePipelineAsync({layout:"auto",compute:{module:t,entryPoint:"renderParallelPixels"}}),H=await eU.createComputePipelineAsync({layout:"auto",compute:{module:t,entryPoint:"computeSsimWindows"}}),K=await eU.createComputePipelineAsync({layout:"auto",compute:{module:t,entryPoint:"computeSsimHorizontal"}}),ee=await eU.createComputePipelineAsync({layout:"auto",compute:{module:t,entryPoint:"filterSsimGradientHorizontal"}}),D=eU.createBindGroup({layout:L.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:e}},{binding:2,resource:{buffer:m}},{binding:3,resource:{buffer:g}},{binding:6,resource:{buffer:en}}]}),f(el,el,es))){let e=eU.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),t={buffer:e,group:eU.createBindGroup({layout:q.getBindGroupLayout(0),entries:[{binding:2,resource:{buffer:m}},{binding:6,resource:{buffer:en}},{binding:7,resource:{buffer:eo}},{binding:10,resource:{buffer:e}}]})};te.push(t),eU.queue.writeBuffer(e,0,new Uint32Array([a.width,a.source,a.destination,0]))}if(!eO)throw Error("Parallel tile buffers were not created.");U=eU.createBindGroup({layout:_.getBindGroupLayout(0),entries:[{binding:2,resource:{buffer:m}},{binding:6,resource:{buffer:en}},{binding:7,resource:{buffer:eo}},{binding:9,resource:{buffer:eO}}]}),V=eU.createBindGroup({layout:Q.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:e}},{binding:2,resource:{buffer:m}},{binding:3,resource:{buffer:g}},{binding:6,resource:{buffer:en}},{binding:9,resource:{buffer:eO}},{binding:12,resource:{buffer:eD}}]}),$=eU.createBindGroup({layout:H.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:u}},{binding:2,resource:{buffer:m}},{binding:12,resource:{buffer:eD}}]}),Z=eU.createBindGroup({layout:K.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:u}},{binding:2,resource:{buffer:m}},{binding:12,resource:{buffer:eD}}]}),et=eU.createBindGroup({layout:ee.getBindGroupLayout(0),entries:[{binding:2,resource:{buffer:m}},{binding:12,resource:{buffer:eD}}]});for(let t=0;t<ea.height;t+=8){let a=eU.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),i=eU.createBindGroup({layout:W.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:e}},{binding:1,resource:{buffer:u}},{binding:2,resource:{buffer:m}},{binding:3,resource:{buffer:g}},{binding:4,resource:{buffer:E}},{binding:6,resource:{buffer:en}},{binding:9,resource:{buffer:eO}},{binding:12,resource:{buffer:eD}},{binding:13,resource:{buffer:a}}]});tt.push({buffer:a,group:i}),eU.queue.writeBuffer(a,0,new Uint32Array([t,0,0,0]))}A=eU.createBindGroup({layout:J.getBindGroupLayout(0),entries:[{binding:2,resource:{buffer:m}},{binding:3,resource:{buffer:g}},{binding:4,resource:{buffer:E}},{binding:6,resource:{buffer:en}},{binding:8,resource:{buffer:eT}},{binding:11,resource:{buffer:eN}}]})}let tl=t=>eU.createBindGroup({layout:tc.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:e}},{binding:1,resource:{buffer:u}},{binding:2,resource:{buffer:t}},{binding:3,resource:{buffer:g}},{binding:4,resource:{buffer:P}},{binding:5,resource:{buffer:en}},{binding:6,resource:{buffer:eo}},{binding:7,resource:{buffer:eM}}]}),tu=tl(m),td=tl(h),tf=await eU.popErrorScope(),tp=await eU.popErrorScope();if(tf||tp)throw Error(`WebGPU cloud training initialization failed: ${(tf??tp)?.message}`);let tm=o.checkpointEvery??(void 0===o.iterations?24:o.onCheckpoint||ew?Math.max(1,Math.ceil(o.iterations/24)):o.iterations),tg=o.iterations,th={checkpointEvery:tm,densificationEvery:eg,densificationStartIteration:eh,densificationEndIteration:ev,opacityResetEvery:ex,topologyEnabled:ew,...void 0===tg?{}:{maximumIterations:tg},shDegreeInterval:o.shDegreeInterval??1e3,..."parallel"===ei?{maximumChunkIterations:5}:{}},tv={bestLoss:1/0,stagnantCheckpoints:0},tx=new Float64Array(el),tw=new Uint32Array(el),tb=new Float32Array(el),ty=0;for(;void 0===tg||e$<tg;){if(await o.beforeSubmission?.(),o.signal?.aborted){e7="cancelled";let e=v(eb,i);N=w(er,e),eV="parallel"===ei?b(er,e):N;break}let e=e$,u=function(e,t){let{checkpointEvery:a,densificationEvery:i,densificationStartIteration:r,densificationEndIteration:n,opacityResetEvery:o,topologyEnabled:s,maximumIterations:c,shDegreeInterval:l=1e3,maximumChunkIterations:u}=t;if(!Number.isSafeInteger(e)||e<0||![a,i,o,l].every(e=>Number.isSafeInteger(e)&&e>0)||!Number.isSafeInteger(r)||!Number.isSafeInteger(n)||r<0||n<r||void 0!==u&&(!Number.isSafeInteger(u)||u<1)||void 0!==c&&(!Number.isSafeInteger(c)||c<=e))throw RangeError("Cloud training schedule contains invalid iteration bounds.");let d=t=>(Math.floor(e/t)+1)*t,f=d(a),p=r+Math.max(1,Math.floor((e-r)/i)+1)*i,m=d(o),g=[1,2,3].map(e=>e*l).find(t=>t>e),h=[f];void 0!==u&&h.push(e+u),void 0!==c&&h.push(c),void 0!==g&&h.push(g),s&&(e<r&&h.push(r),p<=n&&h.push(p),m>=r&&m<n&&(void 0===c||m<c)&&h.push(m));let v=Math.min(...h);return{completedIterations:v,isCheckpoint:v%a==0||v===c,isDensificationCheck:s&&v===p&&v<=n,resetOpacity:s&&v===m&&v>=r&&v<n&&(void 0===c||v<c)}}(e,{...th,...o.beforeSubmission?{maximumChunkIterations:1}:{}}),d=(e$=u.completedIterations)-e,p=u.isDensificationCheck,g=u.resetOpacity,P="parallel"===ei&&(p||g);eU.queue.writeBuffer(m,0,C(ea.width,ea.height,es,eb.length,o.learningRate,el,ty,e)),eU.pushErrorScope("validation");let G=eU.createCommandEncoder(),S=async()=>{if(!o.beforeSubmission)return;let e=performance.now();eU.queue.submit([G.finish()]),await eU.queue.onSubmittedWorkDone();let t=performance.now()-e;eQ+=t,o.onSubmissionComplete?.(t),await o.beforeSubmission(),G=eU.createCommandEncoder()};if("parallel"===ei){if(!z)throw Error("Parallel gradient scratch buffer was not created.");G.clearBuffer(z,0,eC)}for(let t=0;t<d;t+=1)if("parallel"===ei){if(1===o.viewBatchSize){let a=(e+t)%i.length,r=eA[a],n=eL[a];if(!r||!n)throw Error("Single-view minibatch buffers were not created.");G.copyBufferToBuffer(r,0,s,0,ec.byteLength),G.copyBufferToBuffer(n,0,c,0,ek.byteLength)}if(!E||!L||!D||!q||0===te.length||!_||!U||!Q||!V||!H||!$||!K||!Z||!ee||!et||!W||0===tt.length||!J||!A)throw Error("Parallel training pipelines were not created.");G.clearBuffer(E,0,eE);let a=G.beginComputePass();a.setPipeline(L),a.setBindGroup(0,D),a.dispatchWorkgroups(Math.ceil(eb.length/64),1,es),a.end(),await S();let r=f(eb.length,el,es);for(let e=0;e<r.length;e+=1){let t=te[e];if(!t)throw Error("Merge sort stage buffer was not created.");let a=G.beginComputePass();a.setPipeline(q),a.setBindGroup(0,t.group),a.dispatchWorkgroups(Math.ceil(eb.length/64),1,es),a.end(),await S()}let n=G.beginComputePass();n.setPipeline(_),n.setBindGroup(0,U),n.dispatchWorkgroups(ez*eY,1,es),n.end(),await S();let l=G.beginComputePass();l.setPipeline(Q),l.setBindGroup(0,V),l.dispatchWorkgroups(Math.ceil(ea.width/8),Math.ceil(ea.height/8),es),l.end(),await S();let u=G.beginComputePass();u.setPipeline(K),u.setBindGroup(0,Z),u.dispatchWorkgroups(Math.ceil(ea.width/8),Math.ceil(ea.height/8),es),u.end(),await S();let d=G.beginComputePass();d.setPipeline(H),d.setBindGroup(0,$),d.dispatchWorkgroups(Math.ceil(ea.width/8),Math.ceil(ea.height/8),es),d.end(),await S();let p=G.beginComputePass();for(let e of(p.setPipeline(ee),p.setBindGroup(0,et),p.dispatchWorkgroups(Math.ceil(ea.width/8),Math.ceil(ea.height/8),es),p.end(),await S(),tt)){let t=G.beginComputePass();t.setPipeline(W),t.setBindGroup(0,e.group),t.dispatchWorkgroups(Math.ceil(ea.width/8),1,es),t.end(),await S()}let m=G.beginComputePass();m.setPipeline(J),m.setBindGroup(0,A),m.dispatchWorkgroups(Math.ceil(eb.length/64)),m.end()}else{let e=G.beginComputePass();e.setPipeline(tc),e.setBindGroup(0,tu),e.dispatchWorkgroups(1),e.end()}if("parallel"===ei){if(!z)throw Error("Parallel gradient scratch buffer was not created.");G.copyBufferToBuffer(z,0,k,0,eC)}if("parallel"!==ei){let e=G.beginComputePass();e.setPipeline(tc),e.setBindGroup(0,td),e.dispatchWorkgroups(1),e.end(),G.copyBufferToBuffer(I,0,k,0,eC),G.copyBufferToBuffer(y,0,X,0,eF)}if(G.copyBufferToBuffer(x,0,T,0,eP.byteLength),P){if(!M||!O)throw Error("Parallel optimizer state buffers were not created.");G.copyBufferToBuffer(M,0,O,0,eI)}let B=performance.now();eU.queue.submit([G.finish()]);let R=eU.popErrorScope(),Y=[T.mapAsync(GPUMapMode.READ),k.mapAsync(GPUMapMode.READ)];if("parallel"!==ei&&Y.push(X.mapAsync(GPUMapMode.READ)),P){if(!O)throw Error("Parallel optimizer readback buffers were not created.");Y.push(O.mapAsync(GPUMapMode.READ))}let[en]=await Promise.all([R,...Y]);if(en)throw Error(`WebGPU cloud training submission failed: ${en.message}`);if(eq=!0,e_="parallel"!==ei,eW=!0,eJ=P,F=new Float32Array(T.getMappedRange().slice(0)),e_&&(N=new Float32Array(X.getMappedRange().slice(0))[0],void 0===N||!Number.isFinite(N)))throw Error("Cloud training produced a non-finite checkpoint loss.");let eo=new Float32Array(k.getMappedRange().slice(0));if(eo.some(e=>!Number.isFinite(e)))throw Error("Cloud training produced non-finite densification statistics.");let eg=P&&O?new Float32Array(O.getMappedRange().slice(0)):void 0;g&&eg&&M&&(eg=function(e,t,a){if(!Number.isSafeInteger(t)||t<1||!Number.isSafeInteger(a)||a<0||a>t)throw RangeError("Opacity moment reset requires a valid active Gaussian count.");let i=59*t;if(e.length<2*i+t)throw RangeError("Adam state buffer is too short for the Gaussian capacity.");let r=new Float32Array(e);for(let e=0;e<a;e+=1){let t=59*e+10;r[t]=0,r[i+t]=0}return r}(eg,el,eb.length),eU.queue.writeBuffer(M,0,eg));let ew=Math.min(3,Math.floor(e$/(o.shDegreeInterval??1e3)));ew>ty&&(ty=ew,eU.queue.writeBuffer(m,0,C(ea.width,ea.height,es,eb.length,o.learningRate,el,ty)),eU.queue.writeBuffer(h,0,C(ea.width,ea.height,es,eb.length,0,el,ty)));let eG=e>=eh&&e<ev,eS=tb.subarray(0,eb.length);for(let e=0;e<eb.length;e+=1)if("parallel"===ei){let t=4*e,a=eo[t]??0,i=eo[t+1]??0;eS[e]=Math.max(eS[e]??0,eo[t+2]??0),e6=Math.max(e6,eo[t+3]??0),eG&&(tx[e]=(tx[e]??0)+a,tw[e]=(tw[e]??0)+i)}else{let t=eo[e]??0;eG&&(tx[e]=(tx[e]??0)+t,tw[e]=(tw[e]??0)+1)}T.unmap(),e_&&X.unmap(),k.unmap(),eJ&&O?.unmap(),eq=!1,e_=!1,eW=!1,eJ=!1;let eM=performance.now()-B;eQ+=eM,o.onSubmissionComplete?.(eM);let eR=function(e,a){if(e.length<59*a||e.subarray(0,59*a).some(e=>!Number.isFinite(e)))throw Error("Cloud training produced invalid Gaussian state.");return Array.from({length:a},(a,i)=>{let n=59*i,o=e[n+10];if(void 0===o||o<0||o>1)throw Error("Cloud training produced invalid opacity.");let s=[e[n+11]??0/0,e[n+12]??0/0,e[n+13]??0/0],c=l(s)[0];if(!c)throw Error("Cloud Gaussian SH DC coefficient is missing.");let u=[c];for(let t=1;t<16;t+=1){let a=n+14+(t-1)*3;u.push([e[a]??0/0,e[a+1]??0/0,e[a+2]??0/0])}let d=[e[n+6]??0/0,e[n+7]??0/0,e[n+8]??0/0,e[n+9]??0/0];return{worldPosition:[e[n]??0/0,e[n+1]??0/0,e[n+2]??0/0],covariance:r([Math.exp(e[n+3]??0/0),Math.exp(e[n+4]??0/0),Math.exp(e[n+5]??0/0)],t(d)),color:s,sphericalHarmonics:u,opacity:o}})}(F,eb.length);g&&(eR=function(e,t=.01){return e.map(e=>e.opacity>t?{...e,opacity:t}:e)}(eR),eU.queue.writeBuffer(x,0,j(eR,el)),ey.fill(0));let eT=(eb=eR).map((e,t)=>(p&&(e.opacity<ed?ey[t]=(ey[t]??0)+1:ey[t]=0),(ey[t]??0)>=em)),eX=void 0!==ep&&e$>=ex?Array.from(eS,e=>e>ep):void 0,eO=p&&(eT.some(Boolean)||(eX?.some(Boolean)??!1)),eN=new Float32Array(eb.length),eD=0;for(let e=0;e<eb.length;e+=1){let t=tw[e]??0,a=t>0?(tx[e]??0)/t:0;e8=Math.max(e8,a),a>ef&&(eD+=1);let i=eb[e];i&&i.opacity>=ed&&!eX?.[e]&&(eN[e]=a)}let to=void 0===tg||e$<tg,ts=eb.reduce((e,t,a)=>e+Number(t.opacity<ed&&(eT[a]??!1)||(eX?.[a]??!1)),0),tl=Math.max(1,eb.length-ts),tf=to&&p&&eH<eu&&tl<el;if(p&&to){eK+=1;let e=eN.reduce((e,t)=>e+Number(t>ef),0);eZ+=e,0===e&&(e0+=1),eD>0&&0===e?e2+=1:e>0&&!tf&&(e3+=1)}let tp=!1;if(p&&(eO||tf)){let e=function(e,t,i,o,s=!0,c=0,l,u=1,d){let f=e.flatMap((e,t)=>e.opacity<o&&(l?.[t]??!0)||d?.[t]?[]:[{gaussian:e,index:t}]),p=0===f.length?e.indexOf(e.reduce((e,t)=>t.opacity>e.opacity?t:e)):-1,m=new Set(f.map(({index:e})=>e));p>=0&&m.add(p);let g=0,h=0,v=0;for(let t=0;t<e.length;t+=1){if(m.has(t))continue;let a=e[t];if(!a)continue;let i=a.opacity<o&&(l?.[t]??!0),r=d?.[t]??!1;i&&r?v+=1:i?g+=1:r&&(h+=1)}if(0===f.length){let t=e[p];if(!t)throw Error("Topology pruning unexpectedly removed every Gaussian.");return{gaussians:[t],split:!1,densifiedCount:0,prunedCount:e.length-1,opacityOnlyPruneCount:g,screenRadiusOnlyPruneCount:h,opacityAndScreenRadiusPruneCount:v,optimizerSourceIndices:[p]}}if(!s||f.length>=i||u<1)return{gaussians:f.map(({gaussian:e})=>e),split:!1,densifiedCount:0,prunedCount:e.length-f.length,opacityOnlyPruneCount:g,screenRadiusOnlyPruneCount:h,opacityAndScreenRadiusPruneCount:v,optimizerSourceIndices:f.map(({index:e})=>e)};let x=f[0]?.gaussian;if(!x)return{gaussians:[],split:!1,densifiedCount:0,prunedCount:e.length,opacityOnlyPruneCount:g,screenRadiusOnlyPruneCount:h,opacityAndScreenRadiusPruneCount:v,optimizerSourceIndices:[]};let w=x.worldPosition[0],b=x.worldPosition[1],y=x.worldPosition[2],P=w,G=b,S=y;for(let{gaussian:e}of f)w=Math.min(w,e.worldPosition[0]),b=Math.min(b,e.worldPosition[1]),y=Math.min(y,e.worldPosition[2]),P=Math.max(P,e.worldPosition[0]),G=Math.max(G,e.worldPosition[1]),S=Math.max(S,e.worldPosition[2]);let C=Math.hypot(P-w,G-b,S-y),j=.01*(C>0?C:1),B=f.map(e=>({...e,gradient:t[e.index]??0})).filter(e=>e.gradient>c).sort((e,t)=>t.gradient-e.gradient),I=Math.min(u,i-f.length,B.length),E=new Map,M=!1;for(let e of B.slice(0,I)){let{scale:t}=n(e.gaussian.covariance);Math.max(...t)>j?(E.set(e.index,"split"),M=!0):E.set(e.index,"clone")}if(0===E.size)return{gaussians:f.map(({gaussian:e})=>e),split:!1,densifiedCount:0,prunedCount:e.length-f.length,opacityOnlyPruneCount:g,screenRadiusOnlyPruneCount:h,opacityAndScreenRadiusPruneCount:v,optimizerSourceIndices:f.map(({index:e})=>e)};let R=[];return{gaussians:f.flatMap(({gaussian:e,index:t})=>{let i=E.get(t);return"split"===i?(R.push(null,null),function(e){let{scale:t,rotation:i}=n(e.covariance),o=a(i),s=[o[0][0],o[1][0],o[2][0]],c=.5*t[0],l=r([.65*t[0],.85*t[1],.85*t[2]],i),u=1-Math.sqrt(1-e.opacity),d=t=>({...e,worldPosition:[e.worldPosition[0]+t*s[0]*c,e.worldPosition[1]+t*s[1]*c,e.worldPosition[2]+t*s[2]*c],covariance:l,opacity:u});return[d(-1),d(1)]}(e)):"clone"===i?(R.push(t,null),[e,{...e}]):(R.push(t),[e])}),split:M,densifiedCount:E.size,prunedCount:e.length-f.length,opacityOnlyPruneCount:g,screenRadiusOnlyPruneCount:h,opacityAndScreenRadiusPruneCount:v,optimizerSourceIndices:R}}(eR,eN,el,eO?ed:0,tf,ef,eT,tf?eu-eH:0,eX);if(eH+=e.densifiedCount,e1+=e.prunedCount,e5+=e.opacityOnlyPruneCount,e4+=e.screenRadiusOnlyPruneCount,e9+=e.opacityAndScreenRadiusPruneCount,e.densifiedCount>0||e.gaussians.length!==eb.length||e.gaussians.some((e,t)=>e!==eb[t])){if(e.optimizerSourceIndices.length!==e.gaussians.length)throw Error("Topology optimizer mapping does not match the updated Gaussian count.");if("parallel"===ei){if(!eg||!M)throw Error("Parallel optimizer state was not read back at a topology event.");let t=new Float32Array(eB),a=2*ej;for(let i=0;i<e.optimizerSourceIndices.length;i+=1){let r=e.optimizerSourceIndices[i];if(null==r)continue;let n=59*r,o=59*i;t.set(eg.subarray(n,n+59),o),t.set(eg.subarray(ej+n,ej+n+59),ej+o),t[a+i]=eg[a+r]??0}eU.queue.writeBuffer(M,0,t)}tp=!0,eb=e.gaussians,ey.set(function(e,t){if(t.length>e.length)throw RangeError("Topology mapping exceeds the opacity streak capacity.");let a=new Uint32Array(e.length);for(let[i,r]of t.entries()){if(null===r)continue;if(!Number.isSafeInteger(r)||r<0||r>=e.length)throw RangeError("Topology mapping contains an invalid opacity streak source.");let t=e[r];if(void 0===t)throw RangeError("Opacity streak source is missing.");a[i]=t}return a}(ey,e.optimizerSourceIndices));let t=j(eb,el);eU.queue.writeBuffer(x,0,t),eU.queue.writeBuffer(m,0,C(ea.width,ea.height,es,eb.length,o.learningRate,el,ty)),eU.queue.writeBuffer(h,0,C(ea.width,ea.height,es,eb.length,0,el,ty))}}if((p||tp)&&(tx.fill(0),tw.fill(0),tb.fill(0)),u.isCheckpoint||o.signal?.aborted){let e=v(eb,i);N=w(er,e),eV="parallel"===ei?b(er,e):N,u.isCheckpoint&&o.onCheckpoint&&await o.onCheckpoint({iteration:e$,totalIterations:tg??null,loss:eV,gaussians:eb,images:e})}let tm=o.earlyStopping;if(tm){if(tp||g)tv={bestLoss:1/0,stagnantCheckpoints:0};else if(u.isCheckpoint){var ta,ti,tr,tn;if(ta=tv,ti=eV,tr=tm.minimumRelativeImprovement,tn=(tv=(Number.isFinite(ta.bestLoss)?(ta.bestLoss-ti)/Math.max(Math.abs(ta.bestLoss),Number.EPSILON):1/0)>=tr?{bestLoss:ti,stagnantCheckpoints:0}:{...ta,stagnantCheckpoints:ta.stagnantCheckpoints+1}).stagnantCheckpoints,tn>=tm.patience){e7="plateau";break}}}if(o.signal?.aborted){e7="cancelled";break}"parallel"===ei&&await new Promise(e=>setTimeout(e,0))}}finally{eq&&T?.unmap(),e_&&X?.unmap(),eW&&k?.unmap(),eJ&&O?.unmap(),s?.destroy(),c?.destroy(),eA.forEach(e=>e.destroy()),eL.forEach(e=>e.destroy()),m?.destroy(),h?.destroy(),x?.destroy(),y?.destroy(),G?.destroy(),B?.destroy(),T?.destroy(),X?.destroy(),I?.destroy(),k?.destroy(),E?.destroy(),M?.destroy(),O?.destroy(),R?.destroy(),z?.destroy(),Y?.destroy(),te.forEach(({buffer:e})=>e.destroy()),tt.forEach(({buffer:e})=>e.destroy()),eU.destroy()}if(void 0===F&&("cancelled"!==e7||0!==e$)||void 0===N)throw Error("Cloud training produced no final output.");let to=eb,ts=e=>P(to.map(t=>g(t,e.extrinsics)),{width:e.width,height:e.height,camera:e.camera,backgroundColor:e.backgroundColor,...void 0===e.sigmaExtent?{}:{sigmaExtent:e.sigmaExtent}}),tc=[];if("cancelled"===e7)tc.push(...v(to,i));else if(o.beforeSubmission)for(let e of i){if(await o.beforeSubmission(),o.signal?.aborted){e7="cancelled",tc.length=0,tc.push(...v(to,i));break}let t=performance.now();tc.push(await ts(e)),o.onSubmissionComplete?.(performance.now()-t)}else tc.push(...await Promise.all(i.map(ts)));return{gaussians:to,completedIterations:e$,densificationCount:eH,densificationCheckCount:eK,densificationCandidateCount:eZ,densificationChecksWithoutCandidates:e0,densificationChecksBlockedByPruning:e2,densificationChecksBlockedByCapacity:e3,pruningCount:e1,opacityOnlyPruneCount:e5,screenRadiusOnlyPruneCount:e4,opacityAndScreenRadiusPruneCount:e9,maximumDensificationGradient:e8,maximumDensificationVisibleViews:e6,trainingObjectiveLoss:eV,initialLoss:en,optimizationLoss:N,finalLoss:w(er,tc),images:tc,gpuSubmitReadbackMs:eQ,trainingKernel:ei,terminationReason:e7}}let I=Uint8Array.from({length:256},(e,t)=>{let a=0;for(let e=t;e>0;e>>=1)a+=1&e;return a});function E(e,t,a,i){let r=32*t,n=32*i,o=0;for(let t=0;t<32;t+=1)o+=I[(e[r+t]??0)^(a[n+t]??0)]??0;return o}function M(e){if(e.descriptors.length!==32*e.pixels.length)throw RangeError("Each feature needs one 32-byte descriptor.");if(e.intensityClipped&&e.intensityClipped.length!==e.pixels.length)throw RangeError("Intensity clipping flags must match the feature count.");let t=a(e.extrinsics.orientationCameraToWorld),[i,r,n]=t,{focalLengthX:o,focalLengthY:s,principalPointX:c,principalPointY:l}=e.camera;return{center:e.extrinsics.worldPosition,rotation:t,camera:e.camera,features:e.pixels.map(([e,t])=>{let a=(e-c)/o,u=(l-t)/s;return{pixelX:e,pixelY:t,rayX:i[0]*a+i[1]*u-i[2],rayY:r[0]*a+r[1]*u-r[2],rayZ:n[0]*a+n[1]*u-n[2]}}),descriptors:e.descriptors}}function R(e,t,a){let[i,r,n]=t.rotation,o=(e,t,a)=>[i[0]*e+r[0]*t+n[0]*a,i[1]*e+r[1]*t+n[1]*a,i[2]*e+r[2]*t+n[2]*a],[s,c,l]=o(e.center[0]-t.center[0],e.center[1]-t.center[1],e.center[2]-t.center[2]),{focalLengthX:u,focalLengthY:d,principalPointX:f,principalPointY:p}=t.camera,m=new Int32Array(e.features.length).fill(-1),g=new Uint16Array(e.features.length).fill(257),h=new Uint16Array(e.features.length).fill(257);return e.features.forEach((i,r)=>{let[n,v,x]=o(i.rayX,i.rayY,i.rayZ),w=c*x-l*v,b=l*n-s*x,y=w/u,P=-b/d,G=Math.hypot(y,P);if(!(G>0))return;let S=y/G,C=P/G,j=(-w*f/u+b*p/d-(s*v-c*n))/G,B=257,I=[];t.features.forEach((n,o)=>{var s,c;let l,u,d,f,p,g,h,v,x;if(Math.abs(S*n.pixelX+C*n.pixelY+j)>a||(s=e.center,c=t.center,l=s[0]-c[0],u=s[1]-c[1],d=s[2]-c[2],f=i.rayX*i.rayX+i.rayY*i.rayY+i.rayZ*i.rayZ,p=i.rayX*n.rayX+i.rayY*n.rayY+i.rayZ*n.rayZ,g=n.rayX*n.rayX+n.rayY*n.rayY+n.rayZ*n.rayZ,h=i.rayX*l+i.rayY*u+i.rayZ*d,v=n.rayX*l+n.rayY*u+n.rayZ*d,1e-12>Math.abs(x=f*g-p*p)||!((p*v-g*h)/x>0)||!((f*v-p*h)/x>0)))return;let w=E(e.descriptors,r,t.descriptors,o);I.push({index:o,distance:w}),w<B&&(B=w,m[r]=o)});let M=t.features[m[r]??-1];if(!M)return;let R=257;for(let e of I){let i=t.features[e.index];i&&Math.hypot(i.pixelX-M.pixelX,i.pixelY-M.pixelY)>a&&(R=Math.min(R,e.distance))}g[r]=B,h[r]=R}),{indices:m,bestDistances:g,secondBestDistances:h}}let z=Uint8Array.from({length:256},(e,t)=>{let a=t/255;return Math.round(255*(a<=.0031308?12.92*a:1.055*a**(1/2.4)-.055))});function Y(e){return"object"==typeof e&&null!==e&&"Mat"in e&&"KeyPointVector"in e&&"ORB"in e&&"CLAHE"in e&&"Size"in e&&"matFromImageData"in e}async function T(){let t=e??(async()=>{let e=await Promise.all([c.e(6963),c.e(6339),c.e(3294),c.e(3459)]).then(c.t.bind(c,6352,23)),t=Y(e)?e:Reflect.get(e,"default"),a=await Promise.resolve(t);if(!Y(a))throw Error("OpenCV.js failed to initialize its browser runtime.");return a})();e=t;try{return await t}catch(a){throw e===t&&(e=void 0),a}}function X(e){let t=Math.hypot(...e);return!Number.isFinite(t)||t<=Number.EPSILON?null:[e[0]/t,e[1]/t,e[2]/t]}function k(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function O(e){let{camera:t,extrinsics:i,pixel:r}=e;if(!Number.isFinite(r[0])||!Number.isFinite(r[1])||!Number.isFinite(t.focalLengthX)||!Number.isFinite(t.focalLengthY)||t.focalLengthX<=0||t.focalLengthY<=0)return null;let n=X([(r[0]-t.principalPointX)/t.focalLengthX,(t.principalPointY-r[1])/t.focalLengthY,-1]);if(!n)return null;let o=a(i.orientationCameraToWorld),s=X([k(o[0],n),k(o[1],n),k(o[2],n)]);return s?{origin:i.worldPosition,direction:s}:null}function F(e,t){let a=i(e,t.extrinsics),r=-a[2];return r<=0?null:[t.camera.focalLengthX*a[0]/r+t.camera.principalPointX,t.camera.principalPointY-t.camera.focalLengthY*a[1]/r]}function N(e,t,a){let i=new Map,r=[];for(let n of e){let[e,o,s]=n.worldPosition,c=Math.floor(e/t),l=Math.floor(o/t),u=Math.floor(s/t),d=!1;for(let a=-1;a<=1&&!d;a+=1)for(let r=-1;r<=1&&!d;r+=1)for(let n=-1;n<=1&&!d;n+=1)d=(i.get(`${c+a},${l+r},${u+n}`)??[]).some(({worldPosition:a})=>Math.hypot(a[0]-e,a[1]-o,a[2]-s)<t);if(d)continue;if(r.length===a)return null;r.push(n);let f=`${c},${l},${u}`,p=i.get(f)??[];p.push(n),i.set(f,p)}return r}async function D(e,t=3e3,a){if(0===e.length)throw RangeError("Feature extraction requires at least one image.");if(!Number.isSafeInteger(t)||t<32)throw RangeError("ORB feature count must be at least 32.");a?.("opencv");let i=await T();a?.("features");let r=new i.ORB(t,1.2,8,31,0,2,i.ORB_HARRIS_SCORE,21,5);try{let t=new i.CLAHE(1,new i.Size(8,8));try{return e.map(e=>(function(e,t,a,i){let r=new ImageData(function(e){let t=new Uint8ClampedArray(e.length);for(let a=0;a<e.length;a+=4)t[a]=z[e[a]??0]??0,t[a+1]=z[e[a+1]??0]??0,t[a+2]=z[e[a+2]??0]??0,t[a+3]=e[a+3]??0;return t}(i.pixels),i.width,i.height),n=e.matFromImageData(r),o=new e.Mat,s=new e.Mat,c=new e.Mat,l=new e.KeyPointVector,u=new e.Mat;try{if(e.cvtColor(n,o,e.COLOR_RGBA2GRAY),a.apply(o,s),t.detectAndCompute(s,c,l,u),u.empty())return{camera:i.camera,extrinsics:i.extrinsics,pixels:[],descriptors:new Uint8Array(0),intensityClipped:[],features:[]};if(32!==u.cols||u.rows!==l.size()||u.data.length!==32*u.rows)throw Error("ORB returned descriptors that do not match its keypoints.");let r=Array.from({length:l.size()},(e,t)=>{let a=function(e,t,a){if(!Number.isSafeInteger(e.octave)||e.octave<0)throw RangeError("ORB keypoint octave must be a non-negative integer.");let i=Math.fround(1.2**e.octave),r=Math.fround(1/i),n=Math.round(Math.fround(t*r)),o=Math.round(Math.fround(a*r));return[(Math.round(e.pt.x/i)+.5)*t/n,(Math.round(e.pt.y/i)+.5)*a/o]}(l.get(t),i.width,i.height),r=Math.max(0,Math.min(i.width-1,Math.floor(a[0]))),n=(Math.max(0,Math.min(i.height-1,Math.floor(a[1])))*i.width+r)*4;return{camera:i.camera,extrinsics:i.extrinsics,pixel:a,color:[(i.pixels[n]??0)/255,(i.pixels[n+1]??0)/255,(i.pixels[n+2]??0)/255]}});return{camera:i.camera,extrinsics:i.extrinsics,pixels:r.map(({pixel:e})=>e),descriptors:u.data.slice(),intensityClipped:r.map(({color:e})=>e.some(e=>1===e)),features:r}}finally{n.delete(),o.delete(),s.delete(),c.delete(),l.delete(),u.delete()}})(i,r,t,e))}finally{t.delete()}}finally{r.delete()}}async function U(e,t={}){if(e.length<2)throw RangeError("Sparse reconstruction requires at least two views.");let i=t.maximumGaussians??500;if(!Number.isSafeInteger(i)||i<8)throw RangeError("Sparse reconstruction requires a Gaussian limit of at least 8.");let n=await D(e,t.maxFeatures,t.onStage),o=[],s=[];t.onStage?.("matching");let c=function(e){if(e.length<2)throw RangeError("Feature matching requires at least two views.");if(!Number.isFinite(3))throw RangeError("Epipolar line distance must be positive and finite.");let t=function(e){if(!Number.isSafeInteger(2))throw RangeError("Each view needs at least one neighbor.");let t=e.map(({orientationCameraToWorld:e})=>{let[t,i,r]=a(e);return[-t[2],-i[2],-r[2]]}),i=new Map;return t.forEach((e,a)=>{for(let{otherIndex:r}of t.map((t,a)=>({otherIndex:a,alignment:e[0]*t[0]+e[1]*t[1]+e[2]*t[2]})).filter(({otherIndex:e})=>e!==a).sort((e,t)=>t.alignment-e.alignment||e.otherIndex-t.otherIndex).slice(0,2)){let e=[Math.min(a,r),Math.max(a,r)];i.set(e.join(","),e)}}),[...i.values()].sort((e,t)=>e[0]-t[0]||e[1]-t[1])}(e.map(({extrinsics:e})=>e)),i=e.map(()=>new Set),r=new Map;for(let[e,a]of t){let t=i[e],n=i[a];if(!t||!n)throw Error("Feature pair refers to an unavailable view.");t.add(a),n.add(e),r.set(`${e},${a}`,[e,a])}for(let e of i)for(let t of e)for(let a of e)t<a&&r.set(`${t},${a}`,[t,a]);let n=new Map,o=new Map;for(let[t,a]of r.values()){let i=e[t],r=e[a];if(!i||!r)throw Error("Feature pair refers to an unavailable view.");let s=function(e,t){if(!Number.isFinite(3))throw RangeError("Epipolar line distance must be positive and finite.");let a=M(e),i=M(t),r=R(a,i,3),n=R(i,a,3),o=[];return r.indices.forEach((a,i)=>{var s,c,l,u;!(a<0||n.indices[a]!==i||e.intensityClipped?.[i]||t.intensityClipped?.[a])&&(s=r.bestDistances[i]??257,(c=r.secondBestDistances[i]??257)>256||s<.75*c)&&(l=n.bestDistances[a]??257,(u=n.secondBestDistances[a]??257)>256||l<.75*u)&&o.push({firstIndex:i,secondIndex:a,hammingDistance:E(e.descriptors,i,t.descriptors,a)})}),o}(i,r),c=s.filter(({hammingDistance:e})=>e<=64);n.set(`${t},${a}`,s),o.set(`${t},${a}`,c),o.set(`${a},${t}`,c.map(({firstIndex:e,secondIndex:t,hammingDistance:a})=>({firstIndex:t,secondIndex:e,hammingDistance:a})))}let s=(t,a,i)=>{let r=e[t]?.pixels[a],n=e[t]?.pixels[i];if(!r||!n)throw Error("Feature match refers to an unavailable feature.");return 3>=Math.hypot(r[0]-n[0],r[1]-n[1])};return t.map(([t,a])=>{let r=`${t},${a}`,c=n.get(r),l=o.get(r),u=i[t],d=i[a];if(!c||!l||!u||!d)throw Error("Feature pair was not matched.");let f=new Set([...u,...d]);f.delete(t),f.delete(a);let p=[...f],m=2===e.length?l:l.filter(({firstIndex:e,secondIndex:i})=>p.some(r=>{let n=o.get(`${t},${r}`),c=o.get(`${a},${r}`);if(!n||!c)throw Error("Witness pair was not matched.");return n.some(n=>s(t,e,n.firstIndex)&&c.some(e=>s(a,i,e.firstIndex)&&s(r,n.secondIndex,e.secondIndex)))}));return{firstViewIndex:t,secondViewIndex:a,crossCheckedMatches:c.length,hammingAcceptedMatches:l.length,consistentMatches:m.length,matches:m}})}(n);for(let e of(t.onStage?.("triangulation"),c)){let{firstViewIndex:t,secondViewIndex:a,matches:i}=e,r=n[t],c=n[a];if(!r||!c)continue;let l=0,u=[];for(let e of i){let i=r.features[e.firstIndex],n=c.features[e.secondIndex];if(!i||!n)continue;let s=function(e,t,a={}){let i=a.minimumRayAngleDegrees??1.5,r=a.maximumReprojectionError??2.5;if(!Number.isFinite(i)||i<=0||i>=90||!Number.isFinite(r)||r<=0)throw RangeError("Triangulation thresholds must be positive and finite.");let n=O(e),o=O(t);if(!n||!o)return null;let s=[n.origin[0]-o.origin[0],n.origin[1]-o.origin[1],n.origin[2]-o.origin[2]],c=k(n.direction,o.direction),l=1-c*c,u=Math.sin(i*Math.PI/180);if(l<u*u)return null;let d=k(n.direction,s),f=k(o.direction,s),p=(c*f-d)/l,m=(f-c*d)/l;if(p<=0||m<=0)return null;let g=[n.origin[0]+p*n.direction[0],n.origin[1]+p*n.direction[1],n.origin[2]+p*n.direction[2]],h=[o.origin[0]+m*o.direction[0],o.origin[1]+m*o.direction[1],o.origin[2]+m*o.direction[2]],v=[(g[0]+h[0])/2,(g[1]+h[1])/2,(g[2]+h[2])/2],x=F(v,e),w=F(v,t);if(!x||!w)return null;let b=(Math.hypot(x[0]-e.pixel[0],x[1]-e.pixel[1])+Math.hypot(w[0]-t.pixel[0],w[1]-t.pixel[1]))/2;return b>r?null:{worldPosition:v,color:[(e.color[0]+t.color[0])/2,(e.color[1]+t.color[1])/2,(e.color[2]+t.color[2])/2],reprojectionError:b}}(i,n,{minimumRayAngleDegrees:2,maximumReprojectionError:2});s&&(o.push({...s,viewIndices:[t,a]}),l+=1),u.length<240&&u.push({firstPixel:i.pixel,secondPixel:n.pixel,hammingDistance:e.hammingDistance,triangulated:null!==s,reprojectionError:s?.reprojectionError??null})}s.push({firstViewIndex:t,secondViewIndex:a,crossCheckedMatches:e.crossCheckedMatches,hammingAcceptedMatches:e.hammingAcceptedMatches,consistentMatches:e.consistentMatches,triangulatedMatches:l,matches:u})}let l=function(e){let t=e[0];if(!t)throw RangeError("At least one feature pair is required for visualization.");return e.slice(1).reduce((e,t)=>t.triangulatedMatches>e.triangulatedMatches?t:e,t)}(s),u=(function(e){let t=new Map;for(let a of e)for(let e of a.matches){let i={viewIndex:a.firstViewIndex,featureIndex:e.firstIndex},r={viewIndex:a.secondViewIndex,featureIndex:e.secondIndex},n=`${i.viewIndex}:${i.featureIndex}`,o=`${r.viewIndex}:${r.featureIndex}`;t.has(n)||t.set(n,{observation:i,neighbors:new Set}),t.has(o)||t.set(o,{observation:r,neighbors:new Set}),t.get(n)?.neighbors.add(o),t.get(o)?.neighbors.add(n)}let a=new Set,i=[];for(let e of t.keys()){if(a.has(e))continue;let r=[e],n=[];for(;r.length;){let e=r.pop();if(void 0===e||a.has(e))continue;let i=t.get(e);if(!i)throw Error("Feature track node is missing.");a.add(e),n.push(i.observation),r.push(...i.neighbors)}new Set(n.map(({viewIndex:e})=>e)).size===n.length&&i.push(n.sort((e,t)=>e.viewIndex-t.viewIndex))}return i})(c).filter(e=>e.length>=3).flatMap(e=>{let t=function(e,t=3){if(!Number.isFinite(t)||t<=0)throw RangeError("Track reprojection tolerance must be positive and finite.");if(e.length<2)return null;let a=Array.from({length:3},()=>[0,0,0,0]);for(let t of e){let e=O(t);if(!e)return null;for(let t=0;t<3;t++){let i=a[t];if(!i)throw Error("Ray system row is missing.");for(let a=0;a<3;a++){let r=(t===a)-(e.direction[t]??0)*(e.direction[a]??0);i[a]=(i[a]??0)+r,i[3]=(i[3]??0)+r*(e.origin[a]??0)}}}for(let t=0;t<3;t++){let i=t;for(let e=t+1;e<3;e++)Math.abs(a[e]?.[t]??0)>Math.abs(a[i]?.[t]??0)&&(i=e);let r=a[i],n=a[t];if(!r||!n)throw Error("Ray system pivot is missing.");let o=r[t]??0;if(Math.abs(o)<1e-10*e.length)return null;a[i]=n,a[t]=r;for(let e=t;e<=3;e++)r[e]=(r[e]??0)/o;for(let e=0;e<3;e++){if(e===t)continue;let i=a[e];if(!i)throw Error("Ray system row is missing.");let n=i[t]??0;for(let e=t;e<=3;e++)i[e]=(i[e]??0)-n*(r[e]??0)}}let i=[a[0]?.[3]??0/0,a[1]?.[3]??0/0,a[2]?.[3]??0/0];if(!i.every(Number.isFinite))return null;let r=0,n=[0,0,0];for(let a of e){let o=F(i,a);if(!o)return null;let s=Math.hypot(o[0]-a.pixel[0],o[1]-a.pixel[1]);if(s>t)return null;r+=s,n[0]+=a.color[0]/e.length,n[1]+=a.color[1]/e.length,n[2]+=a.color[2]/e.length}return{worldPosition:i,color:n,reprojectionError:r/e.length}}(e.map(({viewIndex:e,featureIndex:t})=>{let a=n[e]?.features[t];if(!a)throw Error("Feature track observation is missing.");return a}),3);return t?[{...t,viewIndices:e.map(({viewIndex:e})=>e)}]:[]}).sort((e,t)=>(t.viewIndices?.length??0)-(e.viewIndices?.length??0)||e.reprojectionError-t.reprojectionError),d=function(e,t){if(!Number.isSafeInteger(t)||t<1)throw RangeError("The point limit must be a positive integer.");if(e.length<=t)return[...e];let a=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(let{worldPosition:t}of e)for(let e=0;e<3;e+=1){let r=t[e]??0;a[e]=Math.min(a[e]??r,r),i[e]=Math.max(i[e]??r,r)}let r=2*Math.hypot((i[0]??0)-(a[0]??0),(i[1]??0)-(a[1]??0),(i[2]??0)-(a[2]??0))+1,n=0,o=N(e,r,t)??[];for(let a=0;a<40;a+=1){let a=(n+r)/2,i=N(e,a,t);i?(r=a,o=i):n=a}return o}(u,i);t.onStage?.("geometry");let f=t.background?function(e,t,i,n){if(e.length<3||t.length<1)throw RangeError("Silhouette initialization needs three views and calibrated seed geometry.");if(!Number.isSafeInteger(n)||n<8)throw RangeError("Silhouette Gaussian budget must be at least eight.");if(i.some(e=>!Number.isFinite(e)||e<0||e>1)||t.some(e=>e.worldPosition.some(e=>!Number.isFinite(e))))throw RangeError("Silhouette background and seed coordinates must be finite and valid.");let o=[0,0,0],s=[0,0,0];for(let e=0;e<3;e++){let a=t.map(t=>t.worldPosition[e]??0).sort((e,t)=>e-t),i=a[Math.floor((a.length-1)*.02)],r=a[Math.ceil((a.length-1)*.98)];if(void 0===i||void 0===r)throw Error("Seed bounds are unavailable.");let n=Math.max(r-i,.01);o[e]=i-n/2,s[e]=r+n/2}let c=Math.max(12,Math.ceil(Math.sqrt(n))),l=e.map(e=>{if(!Number.isSafeInteger(e.width)||!Number.isSafeInteger(e.height)||e.width<=0||e.height<=0||e.pixels.length!==e.width*e.height*4)throw RangeError("Capture pixels do not match image dimensions.");if(![e.camera.focalLengthX,e.camera.focalLengthY].every(e=>Number.isFinite(e)&&e>0)||![e.camera.principalPointX,e.camera.principalPointY,...e.extrinsics.worldPosition].every(Number.isFinite))throw RangeError("Silhouette camera calibration must be finite and valid.");let t=a(e.extrinsics.orientationCameraToWorld),r=new Uint8Array(e.width*e.height);for(let t=0;t<r.length;t++){let a=Math.max(...[0,1,2].map(a=>Math.abs((e.pixels[4*t+a]??0)/255-(i[a]??0))));r[t]=+(a>3/255)}return{image:e,rotation:t,mask:r}}),u=(e,t)=>{let a=t.map((t,a)=>t-(e.image.extrinsics.worldPosition[a]??0)),i=e.rotation,r=i[0][0]*(a[0]??0)+i[1][0]*(a[1]??0)+i[2][0]*(a[2]??0),n=i[0][1]*(a[0]??0)+i[1][1]*(a[1]??0)+i[2][1]*(a[2]??0),o=i[0][2]*(a[0]??0)+i[1][2]*(a[1]??0)+i[2][2]*(a[2]??0);if(o>=0)return null;let s=e.image.camera,c=Math.floor(-(s.focalLengthX*r/o)+s.principalPointX),l=Math.floor(s.principalPointY- -(s.focalLengthY*n/o));return c<0||c>=e.image.width||l<0||l>=e.image.height?null:{offset:l*e.image.width+c,depth:-o}};for(let e=0;e<5;e++){let e=[(s[0]-o[0])/c,(s[1]-o[1])/c,(s[2]-o[2])/c],t=new Uint8Array(c**3),a=[],i=(e,t,a)=>(a*c+t)*c+e,d=!1;for(let a=0;a<c;a++)for(let r=0;r<c;r++)for(let n=0;n<c;n++){let s=[o[0]+(n+.5)*e[0],o[1]+(r+.5)*e[1],o[2]+(a+.5)*e[2]];l.every(e=>{let t=u(e,s);return null!==t&&1===e.mask[t.offset]})&&(t[i(n,r,a)]=1,(0===n||0===r||0===a||n===c-1||r===c-1||a===c-1)&&(d=!0))}if(d){for(let e=0;e<3;e++){let t=(s[e]??0)-(o[e]??0);o[e]=(o[e]??0)-t/4,s[e]=(s[e]??0)+t/4}continue}for(let r=1;r<c-1;r++)for(let n=1;n<c-1;n++)for(let s=1;s<c-1;s++)t[i(s,n,r)]&&([[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].every(e=>t[i(s+(e[0]??0),n+(e[1]??0),r+(e[2]??0))])||a.push([o[0]+(s+.5)*e[0],o[1]+(n+.5)*e[1],o[2]+(r+.5)*e[2]]));if(0===a.length)throw Error("No common foreground volume was found in the calibrated captures.");let f=l.map(e=>{let t=new Float32Array(e.image.width*e.image.height).fill(1/0);return a.forEach(a=>{let i=u(e,a);i&&(t[i.offset]=Math.min(t[i.offset]??1/0,i.depth))}),t}),p=Math.max(1,a.length/n),m=a.filter((e,t)=>Math.floor(t/p)!==Math.floor((t-1)/p)).slice(0,n),g=[.7*e[0],.7*e[1],.7*e[2]],h=m.flatMap(t=>{let a=[];if(l.forEach((i,r)=>{let n=u(i,t);if(n&&n.depth<=(f[r]?.[n.offset]??0)+Math.hypot(...e)){let e=4*n.offset;a.push([(i.image.pixels[e]??0)/255,(i.image.pixels[e+1]??0)/255,(i.image.pixels[e+2]??0)/255])}}),!a.length)return[];let i=e=>{let t=a.map(t=>t[e]??0).sort((e,t)=>e-t);return t[Math.floor(t.length/2)]??0};return[{worldPosition:t,covariance:r(g,[0,0,0,1]),color:[i(0),i(1),i(2)],opacity:.1}]});if(!h.length)throw Error("No silhouette surface has a visible color observation.");return h}throw Error("Foreground volume still intersects the expanded initialization bounds.")}(e,u,t.background,i):d.map((e,t)=>{let a=1/0;for(let i=0;i<d.length;i+=1){if(i===t)continue;let r=d[i];r&&(a=Math.min(a,Math.hypot(e.worldPosition[0]-r.worldPosition[0],e.worldPosition[1]-r.worldPosition[1],e.worldPosition[2]-r.worldPosition[2])))}let i=Math.max(.02,Math.min(.18,.9*a));return{worldPosition:e.worldPosition,covariance:r([i,i,i],[0,0,0,1]),color:e.color,opacity:.05}}),p=u.reduce((e,t)=>e+t.reprojectionError,0);return{gaussians:f,diagnostics:{featureCounts:n.map(({features:e})=>e.length),silhouetteSeedCount:t.background?f.length:0,pairs:s.map(({firstViewIndex:e,secondViewIndex:t,crossCheckedMatches:a,hammingAcceptedMatches:i,consistentMatches:r,triangulatedMatches:n})=>({firstViewIndex:e,secondViewIndex:t,crossCheckedMatches:a,hammingAcceptedMatches:i,consistentMatches:r,triangulatedMatches:n})),triangulatedMatchCount:o.length,spatiallyMergedMultiViewPointCount:u.length,meanReprojectionError:u.length>0?p/u.length:null,visualizationPair:{firstViewIndex:l.firstViewIndex,secondViewIndex:l.secondViewIndex,matches:l.matches}}}}function A(e,t,a,i,r=v(e,t),n=b(t.map(({target:e})=>e),r)){if(!Number.isSafeInteger(i)||i<0)throw RangeError("Reconstruction iteration must be a non-negative safe integer.");return{gaussians:e,iteration:i,trainingObjective:n,trainingMse:w(t.map(({target:e})=>e),r),validationMse:x(a.target,h(e,a)),testMse:null}}function L(e,t){return{...e,testMse:x(t.target,h(e.gaussians,t))}}function q(e,t){return t.validationMse<e.validationMse?t:e}class _{observeFrame(e){if(!Number.isFinite(e.baselineMs)||e.baselineMs<=0||!Number.isFinite(e.frameMs)||e.frameMs<=0)throw RangeError("Frame timings must be finite and positive.");this.paused=e.interacting||e.hidden;let t=e.frameMs/e.baselineMs;this.paused||t>1.3?(this.duty=Math.max(.02,.5*this.duty),this.stableSamples=0):t<1.15?(this.stableSamples+=1,this.stableSamples>=8&&(this.duty=Math.min(.5,this.duty+.025),this.stableSamples=0)):this.stableSamples=0}completeSubmission(e,t){if(!Number.isFinite(e)||e<0||!Number.isFinite(t))throw RangeError("Submission timings must be finite and non-negative.");this.submissionMs=e,this.lastCompletedAt=t}delayMs(e){if(this.paused)return 1/0;let t=this.submissionMs*(1-this.duty)/this.duty;return Math.max(0,this.lastCompletedAt+t-e)}constructor(){this.duty=.15,this.stableSamples=0,this.lastCompletedAt=0,this.submissionMs=0,this.paused=!1}}let W=null,J=!1,V=new _;function $(e){self.postMessage(e)}function Q(e){let t=Math.min(1,192/e.width),a=Math.max(1,Math.round(e.width*t)),i=Math.max(1,Math.round(e.height*t)),r=a/e.width,n=i/e.height;return{...e.cameraView,width:a,height:i,camera:{focalLengthX:e.cameraView.camera.focalLengthX*r,focalLengthY:e.cameraView.camera.focalLengthY*n,principalPointX:e.cameraView.camera.principalPointX*r,principalPointY:e.cameraView.camera.principalPointY*n},target:function(e,t,a,i,r){if(![t,a,i,r].every(e=>Number.isSafeInteger(e)&&e>0)||!Number.isSafeInteger(t*a*4)||!Number.isSafeInteger(i*r*4))throw RangeError("Resampling dimensions must be positive safe integers.");if(e.length!==t*a*4)throw RangeError("The source image must contain complete RGBA pixels.");let n=new Float32Array(i*r*4),o=t/i*(a/r);for(let s=0;s<r;s+=1){let c=s*a/r,l=(s+1)*a/r;for(let a=0;a<i;a+=1){let r=a*t/i,u=(a+1)*t/i,d=(s*i+a)*4;for(let a=Math.floor(c);a<Math.ceil(l);a+=1){let i=Math.min(l,a+1)-Math.max(c,a);for(let s=Math.floor(r);s<Math.ceil(u);s+=1){let c=(Math.min(u,s+1)-Math.max(r,s))*i/o,l=(a*t+s)*4;for(let t=0;t<4;t+=1)n[d+t]=(n[d+t]??0)+(e[l+t]??0)/255*c}}}}return{width:i,height:r,rgba:n}}(e.pixels,e.width,e.height,a,i)}}async function H(e){let t=e.captures.filter(({kind:e})=>"training"===e),a=e.captures.find(({kind:e})=>"holdout"===e),i=e.captures.find(({kind:e})=>"test"===e);if(t.length<2||!a||!i)throw Error("Training, validation and test captures are required.");"initialize"===e.type&&$({type:"initialization-progress",stage:"preparing"});let r=t.map(Q),n=Q(a),o=Q(i);if("initialize"===e.type){let e=t[0];if(!e)throw Error("The first training capture is missing.");let a=await U(t.map(e=>({width:e.width,height:e.height,pixels:e.pixels,camera:e.cameraView.camera,extrinsics:e.cameraView.extrinsics})),{maximumGaussians:3e3,background:e.cameraView.backgroundColor,onStage(e){$({type:"initialization-progress",stage:e})}});if(a.gaussians.length<8)throw Error("At least eight image-derived Gaussians are required before training.");$({type:"initialization-progress",stage:"opacity"});let i=function(e,t){let a=e[0];if(!a||e.some(e=>e.opacity!==a.opacity))throw RangeError("Initial opacity calibration requires a non-empty uniform-opacity cloud.");let i=t.map(({target:e})=>e),r=v(e,t),n={gaussians:e,trainingImages:r,trainingObjective:b(i,r)},o=[...new Set([.01,.025,.05,.1,.2,.3,.5,.75,1,a.opacity])].sort((e,t)=>e-t),s=r=>{if(r===a.opacity)return;let o=e.map(e=>({...e,opacity:r})),s=v(o,t),c=b(i,s);c<n.trainingObjective&&(n={gaussians:o,trainingImages:s,trainingObjective:c})};o.forEach(s);let c=n.gaussians[0]?.opacity,l=o.findIndex(e=>e===c),u=o[l-1],d=o[l+1];return void 0!==c&&void 0!==u&&s((u+c)/2),void 0!==c&&void 0!==d&&s((c+d)/2),n}(a.gaussians,r);$({type:"initialization-progress",stage:"evaluation"}),$({type:"initialized",snapshot:A(i.gaussians,r,n,0,i.trainingImages,i.trainingObjective),diagnostics:a.diagnostics});return}let s=e.baseline,c=s;W=new AbortController;let l=await B(s.gaussians,r,{async beforeSubmission(){for(await new Promise(e=>setTimeout(e,0));!W?.signal.aborted;){let e=V.delayMs(performance.now());if(e<=0)break;await new Promise(t=>setTimeout(t,Math.min(50,e)))}},onSubmissionComplete(e){V.completeSubmission(e,performance.now())},iterations:1200,viewBatchSize:1,shDegreeInterval:300,positionLearningRateDecaySteps:1200,learningRate:1,trainingKernel:"parallel",checkpointEvery:100,signal:W.signal,densificationEvery:100,densificationStartIteration:200,densificationEndIteration:900,maximumGaussians:6e3,maximumDensifications:Number.MAX_SAFE_INTEGER,minimumOpacity:.005,minimumSplitGradient:2e-4,opacityResetEvery:3e3,prunePatience:2,onCheckpoint(e){let t=A(e.gaussians,r,n,e.iteration,e.images,e.loss);c=q(c,t),$({type:"checkpoint",snapshot:t})}});$({type:"completed",snapshot:L(c=q(c,A(l.gaussians,r,n,l.completedIterations,l.images,l.trainingObjectiveLoss)),o),baseline:L(s,o),completedIterations:l.completedIterations,terminationReason:l.terminationReason,diagnostics:{densificationCount:l.densificationCount,densificationCheckCount:l.densificationCheckCount,densificationCandidateCount:l.densificationCandidateCount,checksWithoutCandidates:l.densificationChecksWithoutCandidates,checksBlockedByPruning:l.densificationChecksBlockedByPruning,checksBlockedByCapacity:l.densificationChecksBlockedByCapacity,pruningCount:l.pruningCount,opacityOnlyPruneCount:l.opacityOnlyPruneCount,screenRadiusOnlyPruneCount:l.screenRadiusOnlyPruneCount,opacityAndScreenRadiusPruneCount:l.opacityAndScreenRadiusPruneCount,maximumGradient:l.maximumDensificationGradient}})}self.onmessage=e=>{if("render-feedback"===e.data.type){try{V.observeFrame(e.data.feedback)}catch(e){$({type:"error",message:"Reconstruction could not be completed."}),W?.abort()}return}"cancel"===e.data.type?W?.abort():J?$({type:"error",message:"Reconstruction is already running."}):(J=!0,H(e.data).catch(e=>{$({type:"error",message:"Reconstruction could not be completed."})}).finally(()=>{J=!1,W=null}))}})(),_N_E={}})();