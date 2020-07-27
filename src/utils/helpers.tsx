/**
 * [NOT FOR PRODUCTION] Takes an object and dumps it into JSX
 * Good for quick debugging
 */
export const jsonDump = (obj: any) => <pre>{JSON.stringify(obj, null, 2)}</pre>

export const noop = () => {}

// TODO
export const mergeRefs = () => {}
