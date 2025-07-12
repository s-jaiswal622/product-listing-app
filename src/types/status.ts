export const STATUS = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed'
} as const;

export type STATUS = typeof STATUS[keyof typeof STATUS];
  