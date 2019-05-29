import { resolveBp } from '../data/breakpoints';
/**
 * TODO.
 *
 * @export
 */

export function bp() {}
/**
 * TODO.
 *
 * @export
 * @param {*} query
 * @param {*} bp
 * @returns
 */

export function bpc(query, bp) {
  return function (css) {
    return !!resolveBp(query, bp) ? css : null;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy5qcyJdLCJuYW1lcyI6WyJyZXNvbHZlQnAiLCJicCIsImJwYyIsInF1ZXJ5IiwiY3NzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFULFFBQTBCLHFCQUExQjtBQUVBOzs7Ozs7QUFLQSxPQUFPLFNBQVNDLEVBQVQsR0FBYyxDQUFFO0FBRXZCOzs7Ozs7Ozs7QUFRQSxPQUFPLFNBQVNDLEdBQVQsQ0FBYUMsS0FBYixFQUFvQkYsRUFBcEIsRUFBd0I7QUFDOUIsU0FBTyxVQUFBRyxHQUFHO0FBQUEsV0FBSyxDQUFDLENBQUNKLFNBQVMsQ0FBQ0csS0FBRCxFQUFRRixFQUFSLENBQVgsR0FBeUJHLEdBQXpCLEdBQStCLElBQXBDO0FBQUEsR0FBVjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzb2x2ZUJwIH0gZnJvbSAnLi4vZGF0YS9icmVha3BvaW50cyc7XG5cbi8qKlxuICogVE9ETy5cbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBicCgpIHt9XG5cbi8qKlxuICogVE9ETy5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0geyp9IHF1ZXJ5XG4gKiBAcGFyYW0geyp9IGJwXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYnBjKHF1ZXJ5LCBicCkge1xuXHRyZXR1cm4gY3NzID0+ICghIXJlc29sdmVCcChxdWVyeSwgYnApID8gY3NzIDogbnVsbCk7XG59XG4iXX0=