

describe("Testing 'this'", function() {

    describe('Setting this.a to 7', function() {
        beforeEach(function() {
            this.a = 7

        });

        describe('Setting this.b to 8', function() {
            beforeEach(function() {
                this.b = 8;

            });


            it('should have this.a = 7', function() {
                expect(this.a).toBe(7);

            });

            it('should have this.b = 8', function() {
                expect(this.b).toBe(8);
                console.log(this);


            });


        });

    });

    it("should add 1 + 1 and get 2", function() {

       expect(1+1).toBe(2); 

    });


});
