// const cachedApiCall = (time) => {
//   const cache = {};

//   return async (url, config={}) => {
//     const key = `${url}${JSON.stringify(config)}`;
//     const entry = cache[key];

//     if(!entry || Date.now() > entry.expiry){
//       console.log("making fresh api call");
//       try{
//         let resp = await fetch(url, config);
//         resp = await resp.json();
//         cache[key] = {value : resp, expiry : Date.now() + time}
//       }catch(e){
//         console.error("Error while making API Call");
//       }

//     }
//     return cache[key].value;

//   }
// }

const call = cachedApiCall(1500);
call("https://jsonplaceholder.typicode.com/todos/1",{}).then((a) => console.log(a));
setTimeout(function(){
  call("https://jsonplaceholder.typicode.com/todos/1",{}).then((b) => console.log(b));
},800)


const cachedApiCall = (time) => {
  let cache= {};
  return async (url, config={}) => {
    let key = `${url}${JSON.stringify(config)}`;
    let entry = cache[key];
    if(!entry || Date.now() > entry.expiry) {
      try{
        const resp =  await fetch(url, config);
        resp = await resp.json();
        cache[key] = {value : resp, expiry : Date.now() + time};
      }catch{
        console.error("Error while fetching API");
      }
    }

    return cache[key].value;
  }
}
