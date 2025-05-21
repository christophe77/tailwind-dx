// Define the valid layers
export type TwDXLayer = 'layout' | 'spacing' | 'effects' | 'borders' | 'typography' | 'misc';

// Type for the input object with validated layers
export type TwDXInput = Partial<{
  layout: string;
  spacing: string;
  effects: string;
  borders: string;
  typography: string;
  misc: string;
  preset: string;
}>;