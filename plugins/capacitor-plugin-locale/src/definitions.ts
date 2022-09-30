export interface LocalePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
