export interface SprigPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
