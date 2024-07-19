const premiumFeatures = document.querySelectorAll('.premium-feature');

if (!isPremium) {
  premiumFeatures.forEach((feature) => {
    feature.disabled = true;
  });
}

const premiumFeatures = document.querySelectorAll('.premium-feature');

if (!isPremium) {
  premiumFeatures.forEach((feature) => {
    feature.style.display = 'none';
  });
}

const permissions = {
    premiumFeature1: isPremium,
    premiumFeature2: isPremium,
    //...
  };
  
  if (!permissions.premiumFeature1) {
    // Disable or hide the feature
    document.getElementById('premium-feature-1').disabled = true;
  }

  const featureStates = {
    premiumFeature1: { enabled: isPremium },
    premiumFeature2: { enabled: isPremium },
    //...
  };
  
  if (!featureStates.premiumFeature1.enabled) {
    // Disable or hide the feature
    document.getElementById('premium-feature-1').disabled = true;
  }

  function hasPermission(featureName) {
    return isPremium && featureName in permissions;
  }
  
  if (!hasPermission('premiumFeature1')) {
    // Disable or hide the feature
    document.getElementById('premium-feature-1').disabled = true;
  }