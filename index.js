let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

class Driver{
    constructor(name,date){
        this.name = name
        this.date = date
    }
    startDate(){
        return new Date(this.date)
    }
    yearsExperienceFromBeginningOf(year){
        let intYear = parseInt(year)
        let dateArray = this.date.split(' ')
        let integerDate = parseInt(dateArray[dateArray.length-1])
        return intYear - integerDate
    }

}

class Route{
    constructor(beginningLocation, endingLocation){
        this.begin = beginningLocation
        this.end = endingLocation
    }
      blocksTravelled(){
        let endHor =  this.end.horizontal
        let startHor = this.begin.horizontal
        let startVert = this.begin.vertical
        let endVert = this.end.vertical

        let distVert = endVert - startVert

       let distHor = (eastWest.indexOf(endHor) + 1) - (eastWest.indexOf(startHor) + 1)

        return distHor+distVert

    }

    estimatedTime(peak){

        if (peak === true) {
            return this.blocksTravelled() / 2
        }else{
            return this.blocksTravelled() / 3
        }
    }
}