export class Booking {
  //status 1 booked , 2 process , 3 done , 4 canceled
  constructor(
    public center:number,
    public user:number,
    public time:number,
    public status:number,
  ){}
}
