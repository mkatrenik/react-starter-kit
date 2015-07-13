
export function fetchAll() {
  return (dispatcher) => {
    fetch('/api')
    .then(data => data.json())
    .then(data => {
      dispatcher({
        type: 'TEST_ASYNC',
        message: data
      });
    });
  };
}
