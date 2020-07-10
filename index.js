// Add your Circle class here
const pi = Math.pi
class Circle {
  constructor(radius) {
    this.radius = radius
  }
  get diameter(){
    return this.radius * 2
  }

  set diameter(){
     this.radius / 2
  }
get circumference(){
  return (this.radius * 2) * pi
}
set circumference(circumference){
   (this.radius )=circumference/(pi*2)
}  
}
