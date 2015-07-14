/* @flow */

type LogMessage = { type: string, message: string };
// flow check

// export function testAsync(message) {
//   return (dispatcher) => {
//     setTimeout(() => {
//       dispatcher({
//         type: 'TEST_ASYNC',
//         message: message
//       });
//     }, 2000);
//   };
// }

export function log(message: string): LogMessage {
  return {
    type: 'LOG',
    message: `${(new Date()).toISOString()} : ${message}`
  };
}
