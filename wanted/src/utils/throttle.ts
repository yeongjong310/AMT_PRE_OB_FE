/* eslint-disable @typescript-eslint/naming-convention */
export default function throttle<returnType>(callback: (e: Event) => returnType, delay: number) {
  let timerId: number | null;

  return (event: Event) => {
    if (timerId) return;
    timerId = window.setTimeout(
      (e: Event) => {
        callback(e);
        timerId = null;
      },
      delay,
      event,
    );
  };
}
