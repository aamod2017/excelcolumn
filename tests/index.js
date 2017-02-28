var excelcolumn = require('../index');
var expect  = require('chai').expect;

describe('excel-column', function(done) {
	it('should return function', function(done) {
    	expect(excelcolumn).to.be.a('function');
    	done();
  	});
  	it('should return range A', function(done) {
    	expect(excelcolumn(1)).to.equal('A');
    	done();
	});
	it('should return range Z', function(done) {
    	expect(excelcolumn(26)).to.equal('Z');
    	done();
	});
	it('should return range AA', function(done) {
    	expect(excelcolumn(27)).to.equal('AA');
    	done();
	});
	it('should return range AAA', function(done) {
    	expect(excelcolumn(702)).to.equal('AAA');
    	done();
	});
});