		function ProgressBars(){}

		ProgressBars.prototype.ractive = [];
		
		ProgressBars.prototype.Init = function()
		{
	
		    var x = document.getElementById("progressbars").options.length;

			var containersWrapper = document.getElementById("containers-wrapper");

			var i = 0;

			for (i =0 ; i<x; i++)
			{
				myContainer = document.createElement('div');
				myContainer.setAttribute ("id", "container" + (i+1));
				myContainer.setAttribute ("class", "container");
				containersWrapper.appendChild(myContainer);
				myContainerElement = document.getElementById("container" + (i+1));
				var widthValue = 25*i;
				var bgcolorValue = widthValue > 100 ? "progress-bar-danger" : "progress-bar-success";
				var ractiveObj = new Ractive ({

					el: myContainerElement,
					template: "#template",
					data:{width: widthValue, bgcolor: bgcolorValue}
				});

				this.ractive.push(ractiveObj);				
			};
			

		};

			ProgressBars.prototype.controlButtonAction = function(widthValue){

				var selectedProgressBar = document.getElementById("progressbars").selectedIndex;

	  			this.setWidth(selectedProgressBar, widthValue);
	  			this.setColor(selectedProgressBar);
	  			
			};

			
			ProgressBars.prototype.setWidth = function(selectedProgressBar, widthValue){

				var value = this.ractive[selectedProgressBar].get( 'width' ) + widthValue > 0 ? this.ractive[selectedProgressBar].get( 'width' ) + widthValue : 0; 
				
	  			this.ractive[selectedProgressBar].set( 'width', value );
			};

			ProgressBars.prototype.getWidth = function (selectedProgressBar){

				var value =this.ractive[selectedProgressBar].get( 'width' ) ; 
				
	  			return value;
			};

			

			ProgressBars.prototype.setColor = function(selectedProgressBar){
				var bgColorClass = this.ractive[selectedProgressBar].get( 'width' ) >100 ? "progress-bar-danger" : "progress-bar-success";
	  			this.ractive[selectedProgressBar].set( 'bgcolor', bgColorClass );
				
			};
			ProgressBars.prototype.getColor = function (selectedProgressBar){

				var value =this.ractive[selectedProgressBar].get( 'bgcolor' ) ; 
				
	  			return value;
			};
			
			 


			ProgressBars.prototype.setProgressBarsDropDown = function(newIndex){
				
				if (newIndex>=0 && newIndex<6)
				{
		  			document.getElementById("progressbars").selectedIndex = newIndex;
		  		}
				
			};
			ProgressBars.prototype.getProgressBarsDropDown = function (){

				
				
	  			return document.getElementById("progressbars").selectedIndex; 
			};



			var ProgressBarsObj = new ProgressBars();
			ProgressBarsObj.Init();			

			document.getElementById( 'subtract25' ).addEventListener( 'click', function () {
				ProgressBarsObj.controlButtonAction(-25);
	  			
			});

			document.getElementById( 'subtract10' ).addEventListener( 'click', function () {

				ProgressBarsObj.controlButtonAction(-10);
	  				  			
			});

			document.getElementById( 'add10' ).addEventListener( 'click', function () {
				ProgressBarsObj.controlButtonAction(10);
			});			


			document.getElementById( 'add25' ).addEventListener( 'click', function () {

				ProgressBarsObj.controlButtonAction(25);
	  			
			}); 



			

			
		

