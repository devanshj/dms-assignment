export const appendClassName = (a: string, b: string | undefined) =>
  a + (b ? " " + b : "")

export const assertNever = (() => {}) as (a?: never) => never