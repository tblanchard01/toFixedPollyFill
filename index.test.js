
Number.prototype.toFixed = function (num) {
  let [head, tail] = this.toString().split(".");

  if (num === undefined) {

    return tail>4? String(Number(head)+1) : String(head) 
  }
      tail = ['.', ...tail.split("")]
      let roundingDecider = tail[num+1]
      tail.splice(num+1)
     const lastTaillNum = Number(tail[tail.length-1])
      if(roundingDecider>4){
      tail[tail.length-1] = lastTaillNum + 1 
     }
     return String(head) + tail.join("") 

}

describe('toFixed', () => {
    let num = 12345.6789;
    it('SHOULD handle no arg given', () => {
      expect((num).toFixed()).toEqual('12346');
    });
    it('SHOULD handle one decimal point arg given', () => {
      expect((num).toFixed(1)).toEqual('12345.7');
    });
    it('SHOULD handle two decimal point arg given', () => {
      expect((num).toFixed(2)).toEqual('12345.68');
    });
    it('SHOULD round correctly I', () => {
      expect((12345.6743).toFixed(2)).toEqual('12345.67');
    });
    it('SHOULD round correctly II', () => {
      expect(1.629.toFixed(2)).toEqual('1.63');
    });
    it('SHOULD round correctly with last digit being 9', () => {
      expect(1.695.toFixed(2)).toEqual('1.7');
    });
  });;

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