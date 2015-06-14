import {expect} from 'chai';
import colors from '../src';

describe("colors", function() {
  
  it("should have colors", function() {
    expect(colors).to.be.ok;
  });

  it("should yield different colors", function() {
    
    var colorGen = colors.colorGen();

    var color1 = colorGen.next();
    var color2 = colorGen.next();

    expect(color1.value).to.be.ok;
    expect(color2.value).to.be.ok;

    expect(color1.value).not.to.equal(color2.value);

  });

});