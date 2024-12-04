import { AsteroidCard } from './components/asteroid-card/AsteroidCard';

export const App = ()=>{
  return <div>
    test
    {generateAsteroids(getRandomInt(5,20)).map((it, index)=>{
      return <AsteroidCard key={index} {...it}/>})}
  </div>
}

export default App

function generateAsteroids(count: number){
  const arr = new Array(count).fill({})
  return arr.map(it=>generateAsteroid(true))
}

function generateAsteroid(isKilometers: boolean){
  const distance = getRandomInt(100,Infinity)
  return {
    isDangerous: Boolean(getRandomInt(0,1)),
    name: names[getRandomInt(0,2)] + getRandomInt(10,100),
    distanceKm: distance,
    distanceMoon: distance/384467,
    date: generateRandomDOB(),
    radius: getRandomInt(0,500),
    isKilometers: isKilometers
  }
}

const names = ["test", "big asteroid", "small one"]

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomDOB = (): string => {
  const random = getRandomDate(new Date('2024-02-12T01:57:45.271Z'), new Date('2024-10-12T01:57:45.271Z'))
  return random.toISOString();
}

function getRandomDate(from: Date, to: Date) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}