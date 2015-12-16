describe("Ractive ProgressBars Test Cases", function (){
	var ProgressBarsObj;
	beforeEach(function() {
		loadFixtures('myfixture.html');
		ProgressBarsObj = new ProgressBars();	    
		ProgressBarsObj.Init();
	});



	it("should display width and color of first Progressbar", function(){

		
		expect(ProgressBarsObj.getWidth(0)).toBe(0);
		expect(ProgressBarsObj.getWidth(0)).not.toBe(10);
		expect(ProgressBarsObj.getColor(0)).toBe("progress-bar-success");
	});
	it("should display width and color of second Progressbar", function(){

		
		
		expect(ProgressBarsObj.getWidth(1)).toBe(25);
		expect(ProgressBarsObj.getWidth(1)).not.toBe(50);
		expect(ProgressBarsObj.getColor(1)).toBe("progress-bar-success");
		
	});
	it("should display width and color of third Progressbar", function(){

		
		expect(ProgressBarsObj.getWidth(2)).toBe(50);
		expect(ProgressBarsObj.getWidth(2)).not.toBe(75);
		expect(ProgressBarsObj.getColor(2)).toBe("progress-bar-success");
		
	});
	it("should display width and color of fourth Progressbar", function(){

		
		expect(ProgressBarsObj.getWidth(3)).toBe(75);
		expect(ProgressBarsObj.getWidth(3)).not.toBe(100);
		expect(ProgressBarsObj.getColor(3)).toBe("progress-bar-success");
		
	});
	it("should display width and color of fifth Progressbar", function(){

		
		expect(ProgressBarsObj.getWidth(4)).toBe(100);
		expect(ProgressBarsObj.getWidth(4)).not.toBe(125);
		expect(ProgressBarsObj.getColor(4)).toBe("progress-bar-success");
		
	});
	it("should display width and color of sixth Progressbar", function(){

		
		
		expect(ProgressBarsObj.getWidth(5)).toBe(125);
		expect(ProgressBarsObj.getWidth(5)).not.toBe(150);
		expect(ProgressBarsObj.getColor(5)).toBe("progress-bar-danger");
	});

	
});


describe ("Checks for the DOM Containers", function(){

	var ProgressBarsObj;
	beforeEach(function() {
		loadFixtures('myfixture.html');
		ProgressBarsObj = new ProgressBars();
	    ProgressBarsObj.Init();
	});

	afterEach (function (){
		
		ProgressBarsObj = null;	
		
	});



	it("should exist DOM containers for the Progress Bars", function(){

		
		expect($("#container1")).toExist();
		expect($("#container2")).toExist();
		expect($("#container3")).toExist();
		expect($("#container4")).toExist();
		expect($("#container5")).toExist();
		expect($("#container6")).toExist();
				
	});
	

});
	

  

describe ("Click Events of the Action Buttons", function(){

	var ProgressBarsObj;
	beforeEach(function() {
		loadFixtures('myfixture.html');
		ProgressBarsObj = new ProgressBars();
		
	    ProgressBarsObj.Init();
	});

	afterEach (function (){
		
		ProgressBarsObj = null;	


	});


	it ("should generate add10 click events", function() {
	 	
	 	
	 	spyEvent = spyOnEvent('#add10', 'click');
    	$('#add10').trigger( "click" );
       
    	expect('click').toHaveBeenTriggeredOn('#add10');
    	expect(spyEvent).toHaveBeenTriggered();
	    
	    
	});
	it ("should generate add25 click events", function() {
	 	
	 	
	 	spyEvent = spyOnEvent('#add25', 'click');
    	$('#add25').trigger( "click" );
       
    	expect('click').toHaveBeenTriggeredOn('#add25');
    	expect(spyEvent).toHaveBeenTriggered();
	    
	    
	});

	it ("should generate subtract10 click events", function() {
	 	
	 	
	 	spyEvent = spyOnEvent('#subtract10', 'click');
    	$('#subtract10').trigger( "click" );
       
    	expect('click').toHaveBeenTriggeredOn('#subtract10');
    	expect(spyEvent).toHaveBeenTriggered();
	    
	    
	});

	it ("should generate subtract25 click events", function() {
	 	
	 	
	 	spyEvent = spyOnEvent('#subtract25', 'click');
    	$('#subtract25').trigger( "click" );
       
    	expect('click').toHaveBeenTriggeredOn('#subtract25');
    	expect(spyEvent).toHaveBeenTriggered();
	    
	    
	});
	
});


describe("Last ProgressBar is selected", function() {
	var ProgressBarsObj;
	beforeEach(function() {
		loadFixtures('myfixture.html');
		ProgressBarsObj = new ProgressBars();
	    ProgressBarsObj.Init();
	});
	afterEach (function (){
		ProgressBarsObj = null;	
		

	});


    it("should call the setProgressBarsDropDown(5) function", function() {
       	
        ProgressBarsObj.setProgressBarsDropDown(5);
        expect(ProgressBarsObj.getProgressBarsDropDown()).toBe(5);
        
    });

   
    
});

