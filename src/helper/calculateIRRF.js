import { formatBRL } from "./formatCurrency";

export function calculateIRRF(salary, socialSecurity, numberOfDependents) {
  const value = verifyATableProgressive(salary);
  
  const valueIR = calculateIR(salary, socialSecurity, numberOfDependents);

  return (formatBRL((valueIR * value.aliquot) - value.portion));
}

export function calculateIR(salary, socialSecurity, numberOfDependents) {
  const calculateDependents = 164.56 * numberOfDependents;

  return salary - socialSecurity - calculateDependents;
}

export function verifyATableProgressive(value) {
  if (value > 0 && value <= 1903.98) {
    return { aliquot: 0, portion: 0 };
  }

  if (value > 1903.99 && value <= 2826.65) {
    return { aliquot: 0.075, portion: 142.8 };
  }

  if (value > 2826.66 && value <= 3751.05) {
    return { aliquot: 0.15, portion: 354.8 };
  }

  if (value > 3751.06 && value <= 4664.68) {
    return { aliquot: 0.225, portion: 636.13 };
  }

  if (value > 4664.68) {
    return { aliquot: 0.275, portion: 869.36 };
  }
}
