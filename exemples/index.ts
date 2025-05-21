import { twDX } from '../src';

// ✅ Correct usage - All classes in their proper layers
const correctExample = twDX({
  layout: 'flex items-center justify-between',
  spacing: 'p-4 gap-2',
  effects: 'shadow-lg',
  borders: 'rounded-lg',
  typography: 'text-lg font-bold',
});

// ❌ Incorrect usage - Classes in wrong layers
const incorrectExample = twDX({
  // gap-2 should be in spacing layer
  layout: 'flex gap-2',
  
  // shadow-lg should be in effects layer
  borders: 'rounded-lg shadow-lg',
  
  // font-bold should be in typography layer
  effects: 'shadow-lg font-bold',
});

// 🎯 Real-world example
const button = document.createElement('button');
button.className = twDX({
  layout: 'flex items-center',
  spacing: 'px-4 py-2 gap-2',
  effects: 'shadow hover:shadow-lg',
  borders: 'rounded-md',
  typography: 'text-lg font-medium',
});

// Export for testing
export { correctExample, incorrectExample, button };
