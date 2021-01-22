class particle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.4,
			friction:0,
			density:0.8
			
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		this.color=color(random(0,255),(0,255),(0,255));
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			ellipseMode(CENTER)
			
			
			
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}