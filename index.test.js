
Number.prototype.toFixed = function() {
  return 'test';
}

describe('toFixed', () => {
  describe('GIVEN ', () => {
    let num = 12345.6789;
    it('SHOULD <Y>', () => {
      expect((num).toFixed()).toEqual(12);
    });
  });
});


let num = 12345.6789

// numObj.toFixed()       // Returns '12346': note rounding, no fractional part
// numObj.toFixed(1)      // Returns '12345.7': note rounding
// numObj.toFixed(6)      // Returns '12345.678900': note added zeros
// (1.23e+20).toFixed(2)  // Returns '123000000000000000000.00'
// (1.23e-10).toFixed(2)  // Returns '0.00'
// 2.34.toFixed(1)        // Returns '2.3'
// 2.35.toFixed(1)        // Returns '2.4'. Note it rounds up
// 2.55.toFixed(1)        // Returns '2.5'. Note it rounds down - see warning above
// -2.34.toFixed(1)       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
// (-2.34).toFixed(1)     // Returns '-2.3' 