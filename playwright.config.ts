import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    testDir: './test',
    testMatch: '*.spec.ts'
};
export default config;
