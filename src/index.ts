import { TwDXInput } from './types/twDXInput';

const presets: Record<string, string> = {
  card: 'bg-white rounded-lg shadow-md p-4',
  buttonPrimary: 'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700',
  centerFlex: 'flex justify-center items-center',
};

export function twDX(blocks: TwDXInput): string {
  if (!blocks || typeof blocks !== 'object') return '';

  const { preset, ...rest } = blocks;
  const presetClasses = preset ? presets[preset] ?? '' : '';
  const otherClasses = Object.values(rest).filter(Boolean).join(' ');
  return [presetClasses, otherClasses].filter(Boolean).join(' ');
}
