const control_attack1  =document.getElementById('controls_y1')
const control_heal1  =document.getElementById('controls_b1')
const control_attack2  =document.getElementById('controls_y2')
const control_heal2  =document.getElementById('controls_b2')
const player_1=document.getElementById('player_1')
const player_2=document.getElementById('player_2')
const name_1=document.getElementById('name1')
const name_2=document.getElementById('name2')
const result=document.getElementById('simulate')
const reset=document.getElementById('reset')
class player
  {
    constructor(name,health,attackdmg)
    {
      this.name=name;
      this.health=health
      this.attackdmg=attackdmg
    }
    strike(player,enemy,attackdmg)
    {
   const damage=Math.floor(Math.random()*attackdmg+1)
     enemy.health= (enemy.health)-damage
      
    }
    heal(player)
    {
      const damage=Math.floor(Math.random()*5+1)
       player.health= player.health+damage
    
    }
  }
class game
  {
    constructor()
    {
      this.isOver=false
    }
    declareWinner(isOver,p1,p2)
    {
      let mssg ='gaminggg !!'
      if(isOver && p1.health <=0)
      {
        mssg=`${p2.name} wins !!!`
      }
      else if(isOver && p2.health <=0)
      {
        mssg=`${p1.name}  wins !!!`
      }
      return mssg
    }
    reset(p1,p2)
    {
      p1.health=100
       p2.health=100
      score1.innerHTML= p1.health
        score2.innerHTML= p2.health
    }
  }
const updateGame =(p1,p2,gamestate) =>
{
  name_1.innerHTML=p1.name
   name_2.innerText=p2.name
   score1.innerText=p1.health
   score2.innerText=p2.health
  if(p1.health<0 ||p2.health<0)
  {
    gamep.isOver=true
    gamestate=gamep.isOver
    result.innerHTML=gamep.declareWinner(gamestate,p1,p2)
   document.getElementById('victory').play()
        setTimeout(function()
                   {
                     confetti.start()
                   },100)
       setTimeout(function()
                   {
                     confetti.stop()
                   },10000)
  }
}
//plYERS CREATION
const p1 =new player('Player1',100,10)

const p2 =new player('Player2',100,20)
let gamep=new game()

document.addEventListener('keydown',function(e)
{
  
  if(e.key =="q" && p2.health>0 )
  {
   p1.strike(p1,p2,p1.attackdmg)
    document.getElementById('quickhit').play()
    updateGame(p1,p2,game.isOver)
  }
})
  
document.addEventListener('keydown',function(e)
{
  
  if(e.key =="p" && p1.health>0 )
  {
   p2.strike(p2,p1,p2.attackdmg)
    document.getElementById('quickhit').play()
    updateGame(p1,p2,game.isOver)
  }
})

document.addEventListener('keydown',function(e)
{
  
  if(e.key =="a" && gamep.isOver == false)
  {
    p1.heal(p1)
    document.getElementById('fastheal').play()
    updateGame(p1,p2,game.isOver)
  }
})
document.addEventListener('keydown',function(e)
{
  
  if(e.key=="l" && gamep.isOver == false)
  {
    p2.heal(p2)
    document.getElementById('quickheal').play()
    updateGame(p1,p2,game.isOver)
  }
})
updateGame(p1,p2,game.isOver)
reset.onclick =() =>
{
  p1.health=100
  p2.health=100
 score1.innerHTML= p1.health
   score2.innerHTML= p2.health
}
