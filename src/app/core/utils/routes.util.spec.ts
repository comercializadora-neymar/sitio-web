import { getLegalItemasSlugs } from './routes.util';
import { APP_SHARED_INFO } from '../config/app-info';

describe('routes.util', () => {
    describe('getLegalItemasSlugs', () => {
        it('should return all legal items slugs from APP_SHARED_INFO', () => {
            const expectedSlugs = APP_SHARED_INFO.legalItems.map(item => item.href);
            const result = getLegalItemasSlugs();

            expect(result).toEqual(expectedSlugs);
            expect(result.length).toBe(APP_SHARED_INFO.legalItems.length);
        });

        it('should return an array of strings', () => {
            const result = getLegalItemasSlugs();
            expect(Array.isArray(result)).toBe(true);
            result.forEach(slug => {
                expect(typeof slug).toBe('string');
            });
        });
    });
});
