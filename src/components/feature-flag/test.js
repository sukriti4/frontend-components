const FEATURES_DATA = {
  show_dialog_box : true,
  enable_cta : false
}

const Cache = {
  featureFlags : {},
  expiry : null
}

const CACHE_EXPIRY_TTL = 10000;

let promiseInstance = null;

function fetchAllFeatures() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FEATURES_DATA)
    },1000)
  })
}

const fetchFeature = (featureName, defaultValue) => {
  const flagPresentInCache = Object.keys(Cache.featureFlags).length;
  const isFreshCache = Date.now() - Cache.expiry < CACHE_EXPIRY_TTL;
  
  if(flagPresentInCache && isFreshCache) {
    return Object.prototype.hasOwnProperty.call(Cache.featureFlags, featureName) ? 
                    Cache.featureFlags[featureName] : 
                    defaultValue;
  }

  if(promiseInstance instanceof Promise) {
    return promiseInstance.then(featureFlags => {
      Object.prototype.hasOwnProperty.call(featureFlags, featureName) ? 
                    featureFlags[featureName] : 
                    defaultValue;
    }).catch(() => defaultValue);
  }
  promiseInstance = fetchAllFeatures()
          .then(featureFlags => {
            Cache.featureFlags = featureFlags;
            Cache.expiry = Date.now();
            return Object.prototype.hasOwnProperty.call(featureFlags, featureName) ? 
                    featureFlags[featureName] : 
                    defaultValue;
          })
          .catch(() => (defaultValue))

  return promiseInstance;
}