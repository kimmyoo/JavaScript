var bmw = {
    year: "2019", 
    model: "X3",
    color: "white",
    started: false,
    
    start: function(){
        this.started = true;
    },
    
    stop: function(){
        this.started = false;
        alert("car stopped")
    },
    
    drive: function(){
        if (this.started == false){
            alert("need to start the engine!");
        }else{
            alert("zoom zoom");
        }
    }
    
};

bmw.drive();
bmw.start();
bmw.drive();
bmw.stop();
