var Polygon = function(props){
	this.x = 0;
	this.y = 0;
	this.r = 0;
	this.sides = 3;
	this.sc = '#000000';
	this.fc = 'rgba(0,0,0,0)';
	this.startAngle = 0;

	for(var p in props){
		if(this.hasOwnProperty(p) || this[p] !== undefined){
			this[p] = props[p];
		}
	}

	return this;
}

Polygon.prototype.createPoint = function(){
	var p = [];
	var angle = this.startAngle;
	for(var i=0; i<this.sides; i++){
		p.push([
			this.x + Math.sin(angle) * this.r,
			this.y - Math.cos(angle) * this.r
		]);
		angle += 2 * Math.PI / this.sides;
	}
	return p;
};

Polygon.prototype.createPath = function(cxt){
	var p = this.createPoint();
	cxt.beginPath();
	p.forEach((item,i)=>{
		cxt.lineTo(item[0],item[1]);
	});
	cxt.closePath();
	return this;
};

Polygon.prototype.stroke = function(cxt){
	cxt.save();
	cxt.strokeStyle = this.sc;
	this.createPath(cxt);
	cxt.stroke();
	cxt.restore();
	return this;
};

Polygon.prototype.fill = function(cxt){
	cxt.save();
	cxt.fillStyle = this.fc;
	this.createPath(cxt);
	cxt.fill();
	cxt.restore();
	return this;
};












