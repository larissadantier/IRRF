export function percentageINSS(value) {
  if (!value) {
    return;
  }

  if (value > 0 && value <= 1212) {
    return 0.075;
  }

  if (value > 1212 && value <= 2427.35) {
    return 0.09;
  }

  if (value > 2427.35 && value <= 3641.03) {
    return 0.12;
  }

  if (value > 3641.03 && value <= 7087.22) {
    return 0.14;
  }

  return 0.14;
}

export function calculateINSS(salary) {
  const EmployeeSalary = percentageINSS(salary);

  if (EmployeeSalary === 0.075) {
    return (salary * EmployeeSalary).toFixed(2);
  }

  if (EmployeeSalary === 0.09) {
    const firstPhase = 1212 * 0.075;
    const secondPhase = (salary - 1212) * 0.09;
    const totalValue = firstPhase + secondPhase;

    return totalValue.toFixed(2);
  }

  if (EmployeeSalary === 0.12) {
    const firstPhase = 1212 * 0.075;
    const secondPhase = (2427.35 - 1212) * 0.09;
    const ThirdPhase = (salary - 2427.35) * 0.12;

    const totalValue = firstPhase + secondPhase + ThirdPhase;

    return totalValue.toFixed(2);
  }

  if (EmployeeSalary === 0.14 && salary < 7087.22) {
    const firstPhase = 1212 * 0.075;
    const secondPhase = (2427.35 - 1212) * 0.09;
    const ThirdPhase = (3641.03 - 2427.35) * 0.12;
    const FourPhase = (salary - 3641.03) * 0.14;

    const totalValue = firstPhase + secondPhase + ThirdPhase + FourPhase;

    return totalValue.toFixed(2);
  }

  if (EmployeeSalary === 0.14 && salary > 7087.22) {
    const firstPhase = 1212 * 0.075;
    const secondPhase = (2427.35 - 1212) * 0.09;
    const ThirdPhase = (3641.03 - 2427.35) * 0.12;
    const FourPhase = (7087.22 - 3641.03) * 0.14;

    const totalValue = firstPhase + secondPhase + ThirdPhase + FourPhase;

    return totalValue.toFixed(2);
  }
}
