export function getInputValuesFromEvent(event: React.FormEvent) {
  const arrayOfinputs = Object.values(event.target);

  return arrayOfinputs.reduce((acc, input) => {
    return { ...acc, [input.id]: input.value };
  }, {});
}
