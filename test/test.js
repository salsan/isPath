var assert = require('assert');
const unixPath = require(".././libs/unix.js");
const winPath = require(".././libs/win32.js");
const genericPath = require(".././index.js")

describe('Linux/Unix Path', function() {
    describe('Absolute', function() {
      it('should return true when the path is absolute : "/home/kt/blabla"', function(){
        assert.equal( true, unixPath.absolute('/home/kt/blabla'));       
      });
      it('should return false when the path isn\'t absolute : "C:\\Documents\\Newsletters\\Summer2018.pdf"', function(){
        assert.equal( false, unixPath.absolute('C:\\Documents\\Newsletters\\Summer2018.pdf'));       
      });
    });

    describe('Relative', function() {
        it('should return false when the path isn\'t relative : "C:\\Documents\\Newsletters\\Summer2018.pdf"', function(){
          assert.equal( false, unixPath.relative('C:\\Documents\\Newsletters\\Summer2018.pdf'));       
        });
        it('should return true when the path is relative : "../../greatgrandparent"', function(){
            assert.equal( true, unixPath.relative('../../greatgrandparent'));       
          });
    });

    describe('Valid', function() {
      it('should return false when the path isn\'t a Linux path : "C:\\Documents\\Newsletters\\Summer2018.pdf"', function(){
        assert.equal( false, unixPath.valid('C:\\Documents\\Newsletters\\Summer2018.pdf'));       
      });
      it('should return true when the path is a Linux path : "../../greatgrandparent"', function(){
          assert.equal( true, unixPath.valid('../../greatgrandparent'));       
        });
  });
});

describe('Windows Path', function() {
    describe('Absolute', function() {
      it('should return true when the path is absolute : "C:\\Documents\\Newsletters\\Summer2018.pdf"', function(){
        assert.equal( true, winPath.absolute('C:\\Documents\\Newsletters\\Summer2018.pdf'));       
      });
      it('should return false when the isn\'t absolute : "..\\Publications\\TravelBrochure.pdf"', function(){
        assert.equal( false, winPath.absolute('..\\Publications\\TravelBrochure.pdf'));       
      });
    });

    describe('Relative', function() {
        it('should return false when the path isn\'t relative : "C:\\Documents\\Newsletters\\Summer2018.pdf"', function(){
          assert.equal( false, winPath.relative('/home/kt/blabla'));       
        });
        it('should return true when the path is relative : "..\\Publications\\TravelBrochure.pdf"', function(){
            assert.equal( true, winPath.relative('..\\Publications\\TravelBrochure.pdf'));       
          });
    });

    describe('Valid', function() {
      it('should return true when the path is a Windows path : "C:\\Documents\\Newsletters\\Summer2018.pdf"', function(){
        assert.equal( true, winPath.valid('C:\\Documents\\Newsletters\\Summer2018.pdf'));       
      });
      it('should return false when the path isn\'t a Windows path : "../../greatgrandparent"', function(){
          assert.equal( false, winPath.valid('../../greatgrandparent'));       
        });
  });
});

describe('Generic OS Path', function() {
  describe('Absolute', function() {
    it('should return true when the path is absolute : "C:\\Documents\\Newsletters\\Summer2018.pdf"', function(){
      assert.equal( true, genericPath.absolute('C:\\Documents\\Newsletters\\Summer2018.pdf'));       
    });
    it('should return false when the isn\'t absolute : "..\\Publications\\TravelBrochure.pdf"', function(){
      assert.equal( false, genericPath.absolute('..\\Publications\\TravelBrochure.pdf'));       
    });
  });

  describe('Relative', function() {
      it('should return false when the path isn\'t relative : "C:\\Documents\\Newsletters\\Summer2018.pdf"', function(){
        assert.equal( false, genericPath.relative('/home/kt/blabla'));       
      });
      it('should return true when the path is relative : "..\\Publications\\TravelBrochure.pdf"', function(){
          assert.equal( true, genericPath.relative('..\\Publications\\TravelBrochure.pdf'));       
        });
  });

  describe('Valid', function() {
    it('should return true when the path is valid path : "C:\\Documents\\Newsletters\\Summer2018.pdf"', function(){
      assert.equal( true, genericPath('C:\\Documents\\Newsletters\\Summer2018.pdf'));       
    });
    it('should return false when the path isn\'t a valid path : "C../../greatgrandparent"', function(){
        assert.equal( false, genericPath('C../../greatgrandparent'));       
      });
});
});