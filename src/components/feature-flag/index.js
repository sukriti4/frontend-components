const SAMPLE_FEATURES  = {
  show_dialog_box : true,
  enable_new_pricing : true
}

const Cache = {
  featureFlags : {},
  timeStamp : null
}

let fetchInstance = null;
const MAX_TTL = 10000;
function fetchAllFeatures () {
  return new Promise((resolve) => {
    setTimeout(() => resolve(SAMPLE_FEATURES),1000)
  })
}
 
function getFeatureState(featureName, defaultValue){
  const isCachedDataPresent = Object.keys(Cache.featureFlags).length;
  const isCacheFresh = Date.now() - Cache.timeStamp  < MAX_TTL;

  if(isCacheFresh && isCachedDataPresent){
    const value = Object.prototype.hasOwnProperty.call(Cache.featureFlags, featureName) ? Cache.featureFlags[featureName] : defaultValue;
    return Promise.resolve(value);
  }

  if(fetchInstance instanceof Promise){
    return fetchInstance.then((featureFlags)=> {
      return Object.prototype.hasOwnProperty.call(featureFlags, featureName)
      ? featureFlags[featureName] : defaultValue;

    }).catch(() => defaultValue)
  }
    fetchInstance =  fetchAllFeatures()
    .then((featureFlags) => {
      Cache.featureFlags = featureFlags;
      Cache.timeStamp = Date.now();
      return Object.prototype.hasOwnProperty.call(featureFlags, featureName)
      ? featureFlags[featureName] : defaultValue;

    }).catch(() => defaultValue);

    return fetchInstance

}