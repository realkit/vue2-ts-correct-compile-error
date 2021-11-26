import Vue, { VNode } from "vue"

declare global {
  namespace JSX {
    /* eslint-disable @typescript-eslint/no-empty-interface */
    interface Element extends VNode {}
    /* eslint-disable @typescript-eslint/no-empty-interface */
    interface ElementClass extends Vue {}
    /* eslint-disable @typescript-eslint/no-explicit-any */
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
