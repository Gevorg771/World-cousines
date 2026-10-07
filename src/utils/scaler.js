// Helper function to scale ingredient amounts based on servings
export function formatScaledAmount(
  baseAmount,
  baseServings,
  currentServings,
  unit,
  unitSystem = 'metric'
) {
  
  if (baseServings <= 0 || baseAmount <= 0) {
    return { amount: `${baseAmount}`, unit };
  }

 
  const ratio = currentServings / baseServings;
  const scaledValue = baseAmount * ratio;

  
  if (unitSystem === 'us') {

    if (unit === 'g') {
      if (scaledValue >= 450) {
        const lbs = scaledValue / 453.592;
        return { amount: formatDecimal(lbs), unit: 'lb' };
      } else {
        const oz = scaledValue / 28.3495;
        return { amount: formatDecimal(oz), unit: 'oz' };
      }
    }

    
    if (unit === 'ml') {
      if (scaledValue >= 240) {
        const cups = scaledValue / 240;
        return { amount: formatDecimal(cups), unit: 'cup' };
      } else if (scaledValue >= 15) {
        const tbsp = scaledValue / 15;
        return { amount: formatDecimal(tbsp), unit: 'tbsp' };
      } else {
        const flOz = scaledValue / 29.5735;
        return { amount: formatDecimal(flOz), unit: 'fl oz' };
      }
    }
  }

  
  return { amount: formatDecimal(scaledValue), unit };
}


function formatDecimal(val) {

  if (Math.abs(val - Math.round(val)) < 0.05) {
    return Math.round(val).toString();
  }

  const fraction = val - Math.floor(val);
  const intPart = Math.floor(val);

  
  if (Math.abs(fraction - 0.5) < 0.06) {
    return intPart > 0 ? `${intPart} ½` : '½';
  }
  if (Math.abs(fraction - 0.25) < 0.06) {
    return intPart > 0 ? `${intPart} ¼` : '¼';
  }
  if (Math.abs(fraction - 0.75) < 0.06) {
    return intPart > 0 ? `${intPart} ¾` : '¾';
  }
  if (Math.abs(fraction - 0.33) < 0.06) {
    return intPart > 0 ? `${intPart} ⅓` : '⅓';
  }
  if (Math.abs(fraction - 0.66) < 0.06) {
    return intPart > 0 ? `${intPart} ⅔` : '⅔';
  }

  return Number(val.toFixed(1)).toString();
}
